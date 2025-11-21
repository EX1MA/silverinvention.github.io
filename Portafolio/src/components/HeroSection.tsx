import { motion } from 'framer-motion';
import heroStyles from './HeroSection.module.css';

interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

interface HeroSectionProps {
  data: HeroData;
}

export const HeroSection = ({ data }: HeroSectionProps) => {
  // --- PROTECCIÓN CONTRA ERRORES ---
  if (!data) {
    console.error("❌ Error: HeroSection no recibió datos. Revisa portfolioData.ts");
    return <div style={{padding: 100, color: 'red'}}>Error: Faltan datos del Hero</div>;
  }
  // ---------------------------------

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { delay: 0.2, staggerChildren: 0.05 } },
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="hero" className={heroStyles.hero}>
      <div className={heroStyles.heroContent}>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={heroStyles.preTitle}
        >
          ¡Hola, soy
        </motion.p>
        
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={heroStyles.title}
        >
          {data.title}
        </motion.h1>

        <motion.h2
          className={heroStyles.subtitle}
          variants={sentenceVariants}
          initial="hidden"
          animate="visible"
          key={data.subtitle}
        >
          {data.subtitle.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={heroStyles.description}
        >
          {data.description}
        </motion.p>
        
        <div className={heroStyles.buttons}>
          <motion.button 
            className={heroStyles.primaryButton}
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {data.buttonText}
          </motion.button>
          <motion.button 
            className={heroStyles.secondaryButton}
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contactar
          </motion.button>
        </div>
      </div>
    </section>
  );
};