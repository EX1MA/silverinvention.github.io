
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import contactStyles from './ContactSection.module.css';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="contact" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        Contacto
      </motion.h2>
      
      <motion.div 
        ref={ref}
        className={contactStyles.formContainer}
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <p className={contactStyles.introText}>
          ¿Tienes un proyecto en mente o quieres saber más sobre mi trabajo? ¡Envíame un mensaje!
        </p>

        <form className={contactStyles.contactForm} onSubmit={(e) => e.preventDefault()}>
          <div className={contactStyles.inputGroup}>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" placeholder="Tu nombre" required />
          </div>

          <div className={contactStyles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="tucorreo@ejemplo.com" required />
          </div>

          <div className={contactStyles.inputGroup}>
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows={5} placeholder="¿En qué puedo ayudarte?" required></textarea>
          </div>

          <motion.button 
            type="submit" 
            className={contactStyles.submitButton}
            whileHover={{ scale: 1.02, backgroundColor: '#4ac9f3' }}
            whileTap={{ scale: 0.98 }}
          >
            Enviar Mensaje
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};