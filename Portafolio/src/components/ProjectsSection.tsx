import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectCard } from './ProjectCard';
import projectsStyles from './ProjectsSection.module.css';
import type { Project } from '../types';

gsap.registerPlugin(ScrollTrigger);

interface ProjectsSectionProps {
  projectsList: Project[];
}

export const ProjectsSection = ({ projectsList }: ProjectsSectionProps) => {
  const sectionRef  = useRef<HTMLElement>(null);
  const titleRef    = useRef<HTMLHeadingElement>(null);
  const gridRef     = useRef<HTMLDivElement>(null);
  const cardRefs    = useRef<HTMLDivElement[]>([]);
  cardRefs.current  = [];

  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });

  const addCardRef = (el: HTMLDivElement | null) => {
    if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el);
  };

  // GSAP ScrollTrigger: cards reveal with stagger
  useEffect(() => {
    const cards = cardRefs.current;
    if (!cards.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 70, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 82%',
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [projectsList]);

  return (
    <section id="projects" ref={sectionRef} className="section-container">
      <motion.h2
        ref={titleRef}
        className="section-title"
        initial={{ opacity: 0, y: -28 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Mis Proyectos
      </motion.h2>

      <div ref={gridRef} className={projectsStyles.gridContainer}>
        {projectsList.map((project) => (
          <div key={project.id} ref={addCardRef}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};
