import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import skillsStyles from './SkillsSection.module.css';
import type { Skill } from '../types';

gsap.registerPlugin(ScrollTrigger);

interface SkillsSectionProps {
  skillsList: Skill[];
}

export const SkillsSection = ({ skillsList }: SkillsSectionProps) => {
  const titleRef  = useRef<HTMLHeadingElement>(null);
  const gridRef   = useRef<HTMLDivElement>(null);
  const cardRefs  = useRef<HTMLDivElement[]>([]);
  cardRefs.current = [];

  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });

  const addCardRef = (el: HTMLDivElement | null) => {
    if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el);
  };

  // GSAP: stagger cards in from below + subtle icon float after reveal
  useEffect(() => {
    const cards = cardRefs.current;
    if (!cards.length) return;

    const ctx = gsap.context(() => {
      // Entrance animation
      const st = ScrollTrigger.create({
        trigger: gridRef.current,
        start: 'top 82%',
        once: true,
        onEnter: () => {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 50, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: {
                amount: 0.8,
                grid: 'auto',
                from: 'start',
              },
              ease: 'back.out(1.5)',
            }
          );

          // Floating animation on icons after entrance
          cards.forEach((card, i) => {
            const icon = card.querySelector('img');
            if (!icon) return;
            gsap.to(icon, {
              y: -6,
              duration: 1.6 + (i % 4) * 0.25,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
              delay: i * 0.08,
            });
          });
        },
      });

      return () => st.kill();
    });

    return () => ctx.revert();
  }, [skillsList]);

  return (
    <section id="skills" className="section-container">
      <motion.h2
        ref={titleRef}
        className="section-title"
        initial={{ opacity: 0, y: -28 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Habilidades
      </motion.h2>

      <div ref={gridRef} className={skillsStyles.gridContainer}>
        {skillsList.map((skill) => (
          <motion.div
            key={skill.name}
            ref={addCardRef}
            className={skillsStyles.skillCard}
            whileHover={{
              scale: 1.10,
              boxShadow: '0 12px 30px rgba(0,0,0,0.14)',
              borderColor: 'var(--primary-color)',
            }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 350, damping: 14 }}
          >
            <img src={skill.icon} alt={skill.name} className={skillsStyles.skillIcon} />
            <p className={skillsStyles.skillName}>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
