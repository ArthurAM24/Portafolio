import React, { Suspense, useEffect } from "react"; 
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  useEffect(() => {
    return () => {
      decal.dispose();
    };
  }, [decal]);

  return (
    <Float speed={1.75} rotationIntensity={0.5} floatIntensity={1}>
      <mesh castShadow receiveShadow scale={3}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={0.9} map={decal} flatShading />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
