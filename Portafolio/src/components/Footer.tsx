import footerStyles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.content}>
        <p>&copy; {new Date().getFullYear()} Joel Contreras Bautista. Todos los derechos reservados.</p>
        <div className={footerStyles.socials}>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:tuemail@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};