import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  // Suavizamos la animación para que no se sienta rígida
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{
        scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "5px",
        background: "var(--primary-color)", // Usa tu color naranja
        transformOrigin: "0%",
        zIndex: 9999, // Por encima de todo, incluso del Navbar
        boxShadow: "0 0 10px var(--primary-color)" // Un pequeño brillo neón
      }}
    />
  );
};