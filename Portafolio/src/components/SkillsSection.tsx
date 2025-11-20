import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../data/skills'; // Tus datos de habilidades
import skillsStyles from './SkillsSection.module.css';

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // Anima cada skill con un pequeño retraso
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

  return (
    <section id="skills" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        Habilidades
      </motion.h2>
      
      <motion.div 
        ref={ref}
        className={skillsStyles.gridContainer}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {skills.map((skill) => (
          <motion.div 
            key={skill.name} 
            className={skillsStyles.skillCard}
            variants={itemVariants}
            whileHover={{ scale: 1.08, boxShadow: '0 8px 25px rgba(0,0,0,0.15)' }} // Animación al pasar el ratón
            whileTap={{ scale: 0.95 }}
          >
            <img src={skill.icon} alt={skill.name} className={skillsStyles.skillIcon} />
            <p className={skillsStyles.skillName}>{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};