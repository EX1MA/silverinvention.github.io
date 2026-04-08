import { motion } from 'framer-motion';
import s from './Footer.module.css';

const SOCIAL_LINKS = [
  { label: 'GitHub',   href: 'https://github.com/',   icon: 'GH' },
  { label: 'LinkedIn', href: 'https://linkedin.com/',  icon: 'LI' },
  { label: 'Dribbble', href: 'https://dribbble.com/',  icon: 'Dr' },
];

const NAV_LINKS = [
  { label: 'Sobre Mí',    id: 'about'    },
  { label: 'Habilidades', id: 'skills'   },
  { label: 'Proyectos',   id: 'projects' },
  { label: 'Contacto',    id: 'contact'  },
];

export const Footer = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        {/* Top row */}
        <div className={s.top}>
          <div className={s.brand}>
            <span className={s.logo}>Joel Contreras</span>
            <p className={s.tagline}>
              Construyendo experiencias digitales con propósito y precisión.
            </p>
          </div>

          <nav className={s.nav}>
            {NAV_LINKS.map(({ label, id }) => (
              <button key={id} className={s.navLink} onClick={() => scrollTo(id)}>
                {label}
              </button>
            ))}
          </nav>

          <div className={s.socials}>
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={s.socialBtn}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className={s.divider} />

        {/* Bottom row */}
        <div className={s.bottom}>
          <p className={s.copy}>
            © {new Date().getFullYear()} Joel Contreras Bautista. Todos los derechos reservados.
          </p>
          <p className={s.made}>
            Hecho con React + GSAP ✦
          </p>
        </div>
      </div>
    </footer>
  );
};
