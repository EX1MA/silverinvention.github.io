import { motion } from 'framer-motion';
import type { Project } from '../types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const statusConfig: Record<string, { label: string; className: string }> = {
  'Completado':    { label: '✓ Completado',   className: styles.statusCompleted },
  'En Desarrollo': { label: '⚡ En Desarrollo', className: styles.statusInProgress },
  'Concepto':      { label: '✦ Concepto',      className: styles.statusConcept },
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const statusInfo = project.status ? statusConfig[project.status] : null;

  return (
    <motion.div
      className={`${styles.card} ${project.highlight ? styles.highlighted : ''}`}
      whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(0,0,0,0.16)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Image + Overlay */}
      <div className={styles.imageWrapper}>
        <img
          src={project.image}
          alt={project.title}
          className={styles.cardImage}
          loading="lazy"
        />

        {/* Hover overlay: show all tech tags */}
        <div className={styles.imageOverlay}>
          <p className={styles.overlayTitle}>Stack Tecnológico</p>
          <div className={styles.overlayTags}>
            {project.technologies.map((tech) => (
              <span key={tech} className={styles.overlayTag}>{tech}</span>
            ))}
          </div>
        </div>

        {/* Badges on image */}
        {project.year && (
          <span className={styles.yearBadge}>{project.year}</span>
        )}
        {statusInfo && (
          <span className={`${styles.statusBadge} ${statusInfo.className}`}>
            {statusInfo.label}
          </span>
        )}
        {project.highlight && (
          <span className={styles.highlightRibbon}>Destacado</span>
        )}
      </div>

      {/* Card Body */}
      <div className={styles.cardBody}>
        {project.category && (
          <span className={styles.categoryTag}>{project.category}</span>
        )}

        <h3 className={styles.cardTitle}>{project.title}</h3>

        <p className={styles.cardDescription}>{project.description}</p>

        {/* Features list */}
        {project.features && project.features.length > 0 && (
          <ul className={styles.featuresList}>
            {project.features.slice(0, 4).map((feature) => (
              <li key={feature} className={styles.featureItem}>
                <span className={styles.featureCheck}>✓</span>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Tech tags (compact, first 4) */}
        <div className={styles.tagsContainer}>
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className={styles.tag}>{tech}</span>
          ))}
          {project.technologies.length > 4 && (
            <span className={styles.tagMore}>+{project.technologies.length - 4}</span>
          )}
        </div>
      </div>

      {/* Card Footer */}
      <div className={styles.cardFooter}>
        <motion.a
          href={project.demoLink}
          target="_blank"
          rel="noreferrer"
          className={`${styles.linkButton} ${styles.primaryLink}`}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <span>Ver Demo</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </motion.a>
        <motion.a
          href={project.repoLink}
          target="_blank"
          rel="noreferrer"
          className={`${styles.linkButton} ${styles.secondaryLink}`}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <span>Código</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};
