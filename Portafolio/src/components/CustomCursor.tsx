import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './CustomCursor.module.css';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Detectar si estamos sobre un elemento clickeable
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Verifica si el elemento es un enlace, botón o tiene cursor:pointer
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') || // Busca si está dentro de un link
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';

      if (isClickable) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10, // Centrar el cursor (mitad de width)
      y: mousePosition.y - 10,
      scale: 1,
      backgroundColor: "transparent",
      border: "2px solid var(--primary-color)"
    },
    hover: {
      x: mousePosition.x - 25, // Centrar el cursor grande
      y: mousePosition.y - 25,
      scale: 1.5,
      backgroundColor: "rgba(var(--primary-color), 0.1)", // Un poco transparente
      border: "2px solid var(--primary-color)",
      mixBlendMode: "difference" as const // Efecto de inversión de color cool
    }
  };

  return (
    <motion.div
      className={styles.cursor}
      variants={variants}
      animate={isHovering ? "hover" : "default"}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
};