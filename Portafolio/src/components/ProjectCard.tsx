import { motion } from 'framer-motion'; // Asegúrate de importar motion
import type { Project } from '../types'; // Importa desde types/index.ts
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div 
      className={styles.card}
      whileHover={{ scale: 1.03, boxShadow: '0 15px 30px rgba(0,0,0,0.15)' }} // Animación al pasar el ratón
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <img 
        src={project.image} 
        alt={project.title} 
        className={styles.cardImage} 
      />
      
      <h3 className={styles.cardTitle}>{project.title}</h3>
      
      <p className={styles.cardDescription}>{project.description}</p>

      <div className={styles.tagsContainer}>
        {project.technologies.map((tech) => (
          <span key={tech} className={styles.tag}>
            {tech}
          </span>
        ))}
      </div>

      <div className={styles.links}>
        <motion.a 
          href={project.demoLink} 
          target="_blank" 
          rel="noreferrer" 
          className={styles.linkButton}
          whileHover={{ y: -2 }}
        >
          Ver Demo
        </motion.a>
        <motion.a 
          href={project.repoLink} 
          target="_blank" 
          rel="noreferrer" 
          className={styles.linkButton}
          whileHover={{ y: -2 }}
        >
          Código
        </motion.a>
      </div>
    </motion.div>
  );
};