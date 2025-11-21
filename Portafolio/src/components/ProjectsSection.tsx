import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ProjectCard } from './ProjectCard';
import projectsStyles from './ProjectsSection.module.css';
import type { Project } from '../types';

interface ProjectsSectionProps {
  projectsList: Project[];
}

export const ProjectsSection = ({ projectsList }: ProjectsSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="projects" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        Mis Proyectos
      </motion.h2>
      
      <motion.div 
        ref={ref}
        className={projectsStyles.gridContainer}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {projectsList.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};