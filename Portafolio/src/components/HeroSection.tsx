import { motion } from 'framer-motion';
import heroStyles from './HeroSection.module.css';

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3 // Anima los hijos uno tras otro
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={heroStyles.hero}>
      <motion.div 
        className={heroStyles.heroContent}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className={heroStyles.preTitle}>
          ¡Hola, mi nombre es
        </motion.p>
        <motion.h1 variants={itemVariants} className={heroStyles.title}>
          [Tu Nombre Completo]
        </motion.h1>
        <motion.p variants={itemVariants} className={heroStyles.subtitle}>
          Soy un Desarrollador Frontend con React
        </motion.p>
        <motion.p variants={itemVariants} className={heroStyles.description}>
          Construyo experiencias web atractivas y funcionales con un enfoque en el rendimiento y la accesibilidad.
        </motion.p>
        <motion.div variants={itemVariants} className={heroStyles.buttons}>
          <motion.button 
            className={heroStyles.primaryButton}
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.05 }} // Animación al pasar el ratón
            whileTap={{ scale: 0.95 }}   // Animación al hacer click
          >
            Ver mis Proyectos
          </motion.button>
          <motion.button 
            className={heroStyles.secondaryButton}
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contactar
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};