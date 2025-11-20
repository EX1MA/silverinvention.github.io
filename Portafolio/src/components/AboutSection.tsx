import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import aboutStyles from './AboutSection.module.css';
import profilePic from '../assets/profile.jpg'; // Asegúrate de tener esta imagen

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // 'once: true' para que se anime una sola vez

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
        staggerChildren: 0.2 // Anima los hijos uno tras otro
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        Sobre Mí
      </motion.h2>
      
      <motion.div 
        ref={ref}
        className={aboutStyles.contentWrapper}
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className={aboutStyles.imageContainer}
          variants={itemVariants}
        >
          <img src={profilePic} alt="Tu Foto de Perfil" className={aboutStyles.profileImage} />
        </motion.div>
        <motion.div 
          className={aboutStyles.textContainer}
          variants={itemVariants}
        >
          <p>
            ¡Hola de nuevo\! Soy Joel Contreras Bautista, un apasionado del desarrollo web con un enfoque en la creación de interfaces de usuario atractivas y responsivas. Mi viaje en el mundo de la programación comenzó hace [3] años, y desde entonces no he parado de aprender y construir.
          </p>
          <p>
            Me especializo en <strong>React</strong> y su ecosistema (TypeScript, Hooks, Context API), y disfruto transformando diseños en experiencias interactivas y eficientes. Siempre busco nuevas tecnologías y mejores prácticas para ofrecer soluciones innovadoras.
          </p>
          <p>
            Fuera del código, me gusta jugar videojuegos, leer libros, hacer ejercicio, dibujar, fotografia. Creo firmemente en la importancia de un buen equilibrio entre el trabajo y la vida personal para mantener la creatividad.
          </p>
          <p>
            Si tienes un proyecto en mente o simplemente quieres saludar, no dudes en contactarme. ¡Me encantaría conectar contigo\!
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};