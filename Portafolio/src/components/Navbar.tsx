import { useState, useEffect } from 'react'; // <--- Importamos useEffect
import { motion, AnimatePresence } from 'framer-motion';
import navStyles from './Navbar.module.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // --- 1. LÓGICA DEL TEMA (DARK MODE) ---
  const [theme, setTheme] = useState(() => {
    // Detecta si el usuario prefiere oscuro desde su sistema operativo
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  // Efecto que cambia el atributo en el HTML cuando cambia el tema
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  // ---------------------------------------

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuVariants = {
    closed: { x: "100%", opacity: 0 },
    open: { 
      x: 0, 
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 }
    }
  };

  return (
    <nav className={navStyles.navbar}>
      <div className={navStyles.logo} onClick={() => scrollToSection('hero')}>
        Joel Contreras
      </div>

      {/* Menú Escritorio */}
      <ul className={navStyles.desktopList}>
        <li onClick={() => scrollToSection('about')}>Sobre Mí</li>
        <li onClick={() => scrollToSection('skills')}>Habilidades</li>
        <li onClick={() => scrollToSection('projects')}>Proyectos</li>
        <li onClick={() => scrollToSection('contact')}>Contacto</li>
      </ul>

      {/* --- 2. SECCIÓN DE ACCIONES (TEMA + HAMBURGUESA) --- */}
      <div className={navStyles.actions}>
        
        {/* Botón para cambiar tema */}
        <button 
          onClick={toggleTheme} 
          className={navStyles.themeBtn}
          aria-label="Cambiar tema"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>

        {/* Botón Hamburguesa */}
        <div className={navStyles.hamburger} onClick={toggleMenu}>
          <svg width="30" height="30" viewBox="0 0 24 24">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={navStyles.mobileMenu}
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <button className={navStyles.closeButton} onClick={toggleMenu}>X</button>
            <ul className={navStyles.mobileList}>
              <li onClick={() => scrollToSection('about')}>Sobre Mí</li>
              <li onClick={() => scrollToSection('skills')}>Habilidades</li>
              <li onClick={() => scrollToSection('projects')}>Proyectos</li>
              <li onClick={() => scrollToSection('contact')}>Contacto</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};