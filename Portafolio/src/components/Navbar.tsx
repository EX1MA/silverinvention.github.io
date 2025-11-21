import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import navStyles from './Navbar.module.css';
import type { Role } from '../types';


interface NavbarProps {
  currentRole: Role;
  onSwitchRole: (role: Role) => void;
}

export const Navbar = ({ currentRole, onSwitchRole }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // ... Lógica de tema existente ...
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  const toggleMenu = () => setIsOpen(!isOpen);
  const scrollToSection = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuVariants = {
    closed: { x: "100%", opacity: 0 },
    open: { x: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <nav className={navStyles.navbar}>
      <div className={navStyles.logo} onClick={() => scrollToSection('hero')}>
        {currentRole === 'developer' ? '<DevJoel />' : 'Joel Design'}
      </div>

      <ul className={navStyles.desktopList}>
        <li onClick={() => scrollToSection('about')}>Sobre Mí</li>
        <li onClick={() => scrollToSection('skills')}>Habilidades</li>
        <li onClick={() => scrollToSection('projects')}>Proyectos</li>
        <li onClick={() => scrollToSection('contact')}>Contacto</li>
      </ul>

      <div className={navStyles.actions}>
        {/* --- SELECTOR DE ROL --- */}
        <div className={navStyles.roleSwitcher}>
          <button 
            className={`${navStyles.roleBtn} ${currentRole === 'developer' ? navStyles.active : ''}`}
            onClick={() => onSwitchRole('developer')}
          >
            💻 Dev
          </button>
          <button 
            className={`${navStyles.roleBtn} ${currentRole === 'designer' ? navStyles.active : ''}`}
            onClick={() => onSwitchRole('designer')}
          >
            🎨 Diseño
          </button>
        </div>

        <button onClick={toggleTheme} className={navStyles.themeBtn}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>

        <div className={navStyles.hamburger} onClick={toggleMenu}>
          <svg width="30" height="30" viewBox="0 0 24 24">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Menú Móvil (Sin cambios) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div className={navStyles.mobileMenu} initial="closed" animate="open" exit="closed" variants={menuVariants}>
            <button className={navStyles.closeButton} onClick={toggleMenu}>X</button>
            <ul className={navStyles.mobileList}>
              <li onClick={() => scrollToSection('about')}>Sobre Mí</li>
              <li onClick={() => scrollToSection('skills')}>Habilidades</li>
              <li onClick={() => scrollToSection('projects')}>Proyectos</li>
              <li onClick={() => scrollToSection('contact')}>Contacto</li>
              {/* Opción extra para móvil */}
              <li onClick={() => onSwitchRole(currentRole === 'developer' ? 'designer' : 'developer')} style={{color: 'var(--primary-color)', fontWeight: 'bold'}}>
                Cambiar a {currentRole === 'developer' ? 'Diseñador' : 'Dev'}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};