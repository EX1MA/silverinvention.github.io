import { motion } from 'framer-motion';
import navStyles from './Navbar.module.css';

export const Navbar = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      className={navStyles.navbar}
      initial={{ y: -100 }} // Empieza fuera de pantalla por arriba
      animate={{ y: 0 }}    // Se desliza a su posición final
      transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.2 }}
    >
      <div className={navStyles.logo} onClick={() => scrollToSection('hero')}>
        Tu Nombre
      </div>
      <ul className={navStyles.navList}>
        <li onClick={() => scrollToSection('about')}>Sobre Mí</li>
        <li onClick={() => scrollToSection('skills')}>Habilidades</li>
        <li onClick={() => scrollToSection('projects')}>Proyectos</li>
        <li onClick={() => scrollToSection('contact')}>Contacto</li>
      </ul>
    </motion.nav>
  );
};