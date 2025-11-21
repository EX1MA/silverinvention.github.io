import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import aboutStyles from './AboutSection.module.css';
import profilePic from '../assets/profile.jpg';

interface AboutData {
  text: string[];
}

interface AboutSectionProps {
  data?: AboutData; // Hacemos que sea opcional con ?
}

export const AboutSection = ({ data }: AboutSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // --- PROTECCIÓN: Si no hay datos, no mostramos nada (o un mensaje) ---
  if (!data || !data.text) {
    return <div style={{ color: 'red', padding: 20 }}>Error: Faltan datos en AboutSection</div>;
  }
  // --------------------------------------------------------------------

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const, staggerChildren: 0.2 }
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
        <motion.div className={aboutStyles.imageContainer} variants={itemVariants}>
          <img src={profilePic} alt="Foto de Perfil" className={aboutStyles.profileImage} />
        </motion.div>
        
        <motion.div className={aboutStyles.textContainer} variants={itemVariants}>
          {data.text.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};