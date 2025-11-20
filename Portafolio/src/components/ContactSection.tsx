
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'; // Importamos la librería
import contactStyles from './ContactSection.module.css';

export const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null); // Referencia al formulario
  const [status, setStatus] = useState(''); // Para mostrar mensajes de éxito/error

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Enviando...');

    if (form.current) {
      emailjs.sendForm(
        'TU_SERVICE_ID',   // <--- Pega aquí tu Service ID de EmailJS
        'TU_TEMPLATE_ID',  // <--- Pega aquí tu Template ID
        form.current,
        'TU_PUBLIC_KEY'    // <--- Pega aquí tu Public Key
      )
      .then(() => {
        setStatus('¡Mensaje enviado con éxito!');
        form.current?.reset(); // Limpia el formulario
      }, (error) => {
        setStatus('Hubo un error, intenta de nuevo.');
        console.error(error);
      });
    }
  };

  return (
    <section id="contact" className="section-container">
      {/* ... Título ... */}
      
      <div className={contactStyles.formContainer}>
        {/* ... Texto intro ... */}

        <form ref={form} onSubmit={sendEmail} className={contactStyles.contactForm}>
          <div className={contactStyles.inputGroup}>
            <label>Nombre</label>
            {/* IMPORTANTE: el 'name' debe coincidir con tu template de EmailJS */}
            <input type="text" name="user_name" required /> 
          </div>

          <div className={contactStyles.inputGroup}>
            <label>Email</label>
            <input type="email" name="user_email" required />
          </div>

          <div className={contactStyles.inputGroup}>
            <label>Mensaje</label>
            <textarea name="message" rows={5} required></textarea>
          </div>

          <motion.button 
            type="submit" 
            className={contactStyles.submitButton}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {status === 'Enviando...' ? 'Enviando...' : 'Enviar Mensaje'}
          </motion.button>
          
          {status && <p style={{marginTop: '10px', textAlign: 'center'}}>{status}</p>}
        </form>
      </div>
    </section>
  );
};