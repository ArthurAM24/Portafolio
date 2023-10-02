// WebGLContext.js

import React, { createContext, useContext, useRef, useEffect } from "react";

const WebGLContext = createContext(null);

export const useWebGLContext = () => {
  return useContext(WebGLContext);
};

export const WebGLProvider = ({ children }) => {
  const canvasRef = useRef(null);
  const glRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!glRef.current) {
      const gl = canvas.getContext("webgl");
      if (gl) {
        glRef.current = gl;
      }
    }
  }, []);

  return (
    <WebGLContext.Provider value={glRef.current}>
      {children}
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
    </WebGLContext.Provider>
  );
};
