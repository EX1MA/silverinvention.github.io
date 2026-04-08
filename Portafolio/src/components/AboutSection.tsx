import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutStyles from './AboutSection.module.css';
import profilePic from '../assets/profile.jpg';
import type { Stat } from '../types';

gsap.registerPlugin(ScrollTrigger);

interface AboutData {
  text: string[];
  stats?: Stat[];
}

interface AboutSectionProps {
  data?: AboutData;
}

export const AboutSection = ({ data }: AboutSectionProps) => {
  const titleRef   = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef   = useRef<HTMLDivElement>(null);
  const counterEls = useRef<HTMLSpanElement[]>([]);
  counterEls.current = [];

  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });

  if (!data || !data.text) {
    return <div style={{ color: 'red', padding: 20 }}>Error: Faltan datos en AboutSection</div>;
  }

  const addCounterRef = (el: HTMLSpanElement | null) => {
    if (el && !counterEls.current.includes(el)) counterEls.current.push(el);
  };

  // GSAP: content slide in
  useEffect(() => {
    if (!contentRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current!.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );
    }, contentRef);
    return () => ctx.revert();
  }, [data]);

  // GSAP: animated counters on stats
  useEffect(() => {
    if (!statsRef.current || !data.stats?.length) return;
    const counters = counterEls.current;
    if (!counters.length) return;

    const ctx = gsap.context(() => {
      // Stat cards slide in
      gsap.fromTo(
        statsRef.current!.children,
        { opacity: 0, y: 40, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.15,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );

      // Number counters
      data.stats!.forEach((stat, i) => {
        const el = counters[i];
        if (!el) return;
        const obj = { val: 0 };

        gsap.to(obj, {
          val: stat.value,
          duration: 2.2,
          ease: 'power2.out',
          snap: { val: 1 },
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + stat.suffix;
          },
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            once: true,
          },
        });
      });
    }, statsRef);

    return () => ctx.revert();
  }, [data.stats]);

  return (
    <section id="about" className="section-container">
      <motion.h2
        ref={titleRef}
        className="section-title"
        initial={{ opacity: 0, y: -28 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Sobre Mí
      </motion.h2>

      {/* Profile + Text */}
      <div ref={contentRef} className={aboutStyles.contentWrapper}>
        <div className={aboutStyles.imageContainer}>
          <img src={profilePic} alt="Joel Contreras" className={aboutStyles.profileImage} />
          <div className={aboutStyles.imageBorder} />
        </div>

        <div className={aboutStyles.textContainer}>
          {data.text.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Animated Stats */}
      {data.stats && data.stats.length > 0 && (
        <div ref={statsRef} className={aboutStyles.statsGrid}>
          {data.stats.map((stat, i) => (
            <div key={i} className={aboutStyles.statCard}>
              <span ref={addCounterRef} className={aboutStyles.statValue}>
                0{stat.suffix}
              </span>
              <span className={aboutStyles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
