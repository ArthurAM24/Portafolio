import { HashRouter as Router } from "react-router-dom";
import { About, Contact, Experience, Skills, Hero, Navbar, StarsCanvas, Proyects } from "./components";
import { useEffect } from "react";

const App = () => {
  // Función de controlador de desplazamiento
  const myScrollHandler = () => {
      // Hacer que un elemento sea fijo o pegajoso
  };

  useEffect(() => {
    window.addEventListener('scroll', myScrollHandler, { passive: true });

    return () => {
      window.removeEventListener('scroll', myScrollHandler);
    };
  }, []);

  return (
    <Router>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Proyects />
        <Skills />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </Router>
  );
}

export default App;
