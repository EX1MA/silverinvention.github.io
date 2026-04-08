import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import heroStyles from './HeroSection.module.css';

interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

interface HeroSectionProps {
  data: HeroData;
}

export const HeroSection = ({ data }: HeroSectionProps) => {
  const preTitleRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  if (!data) {
    return <div style={{ padding: 100, color: 'red' }}>Error: Faltan datos del Hero</div>;
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // GSAP: Floating shapes animation (runs once, persistent)
  useEffect(() => {
    if (!shapesRef.current) return;
    const shapes = gsap.utils.toArray<HTMLElement>(shapesRef.current.children);

    const tweens = shapes.map((shape, i) =>
      gsap.to(shape, {
        x: gsap.utils.random(-45, 45),
        y: gsap.utils.random(-55, 55),
        rotation: gsap.utils.random(-20, 20),
        scale: gsap.utils.random(0.88, 1.12),
        duration: gsap.utils.random(4.5, 8),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.38,
      })
    );

    return () => { tweens.forEach((t) => t.kill()); };
  }, []);

  // GSAP: Entrance timeline (re-runs on role switch because component remounts)
  useEffect(() => {
    if (tlRef.current) tlRef.current.kill();

    const targets = [preTitleRef.current, titleRef.current, subtitleRef.current, descRef.current];
    gsap.set(targets, { opacity: 0, y: 35 });

    const buttonChildren = buttonsRef.current ? Array.from(buttonsRef.current.children) : [];
    gsap.set(buttonChildren, { opacity: 0, y: 22 });

    const tl = gsap.timeline({ delay: 0.1 });
    tlRef.current = tl;

    tl.to(preTitleRef.current, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' })
      .to(titleRef.current,    { opacity: 1, y: 0, duration: 0.7,  ease: 'back.out(1.7)' }, '-=0.25')
      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6,  ease: 'power2.out' },    '-=0.35')
      .to(descRef.current,     { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' },    '-=0.3')
      .to(buttonChildren,      { opacity: 1, y: 0, duration: 0.5, stagger: 0.13, ease: 'power2.out' }, '-=0.2');

    return () => { tl.kill(); };
  }, [data]);

  return (
    <section id="hero" className={heroStyles.hero}>

      {/* GSAP Floating Geometric Shapes */}
      <div ref={shapesRef} className={heroStyles.shapesContainer} aria-hidden="true">
        <div className={`${heroStyles.shape} ${heroStyles.blob1}`} />
        <div className={`${heroStyles.shape} ${heroStyles.blob2}`} />
        <div className={`${heroStyles.shape} ${heroStyles.ring1}`} />
        <div className={`${heroStyles.shape} ${heroStyles.ring2}`} />
        <div className={`${heroStyles.shape} ${heroStyles.square1}`} />
        <div className={`${heroStyles.shape} ${heroStyles.square2}`} />
        <div className={`${heroStyles.shape} ${heroStyles.dot1}`} />
        <div className={`${heroStyles.shape} ${heroStyles.dot2}`} />
        <div className={`${heroStyles.shape} ${heroStyles.line1}`} />
      </div>

      <div className={heroStyles.heroContent}>
        <p ref={preTitleRef} className={heroStyles.preTitle}>¡Hola, soy</p>

        <h1 ref={titleRef} className={heroStyles.title}>{data.title}</h1>

        <h2 ref={subtitleRef} className={heroStyles.subtitle}>{data.subtitle}</h2>

        <p ref={descRef} className={heroStyles.description}>{data.description}</p>

        <div ref={buttonsRef} className={heroStyles.buttons}>
          <motion.button
            className={heroStyles.primaryButton}
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.06, y: -4 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            {data.buttonText}
          </motion.button>
          <motion.button
            className={heroStyles.secondaryButton}
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.06, y: -4 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            Contactar
          </motion.button>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={heroStyles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        onClick={() => scrollToSection('about')}
      >
        <motion.div
          className={heroStyles.scrollMouse}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className={heroStyles.scrollWheel} />
        </motion.div>
        <span className={heroStyles.scrollLabel}>Scroll</span>
      </motion.div>
    </section>
  );
};
