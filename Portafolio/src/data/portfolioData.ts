export interface RoleContent {
  themeColor: string;
  hero: {
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
  };
  about: {
    text: string[];
  };
  projects: any[];
  skills: any[];
}

// Datos "Hardcoded" para asegurar que funcionen sí o sí
export const portfolioData: Record<'developer' | 'designer', RoleContent> = {
  developer: {
    themeColor: '#d35400', // Naranja
    hero: {
      title: "Joel Contreras",
      subtitle: "Desarrollador Frontend React",
      description: "Construyo experiencias web atractivas y funcionales con un enfoque en el rendimiento y la accesibilidad.",
      buttonText: "Ver Código"
    },
    about: {
      text: [
        "Soy un Desarrollador Frontend apasionado por crear interfaces web que no solo se vean bien, sino que funcionen a la perfección. Con una base sólida en React y TypeScript, me especializo en construir aplicaciones escalables, mantenibles y de alto rendimiento. Mi enfoque se centra en escribir código limpio y modular, siempre pensando en la experiencia del usuario final y en la accesibilidad.",
        "Me encanta enfrentarme a desafíos técnicos complejos y encontrar soluciones elegantes. Siempre estoy aprendiendo nuevas tecnologías y mejores prácticas para mantenerme al día en este ecosistema en constante evolución. Disfruto colaborando en equipos ágiles donde puedo aportar tanto mis habilidades técnicas como mi creatividad para resolver problemas."
      ]
    },
    projects: [
      {
        id: 1,
        title: "E-commerce Zapatos",
        description: "Tienda moderna con carrito y pagos.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000",
        technologies: ["React", "Vite", "Stripe"],
        demoLink: "#",
        repoLink: "#"
      },
      {
        id: 2,
        title: "App del Clima",
        description: "Consulta el clima en tiempo real.",
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1000",
        technologies: ["React", "API", "CSS"],
        demoLink: "#",
        repoLink: "#"
      }
    ],
    skills: [
      { name: 'HTML5', icon: 'https://cdn.svgporn.com/logos/html-5.svg' },
      { name: 'CSS3', icon: 'https://cdn.svgporn.com/logos/css-3.svg' },
      { name: 'JavaScript', icon: 'https://cdn.svgporn.com/logos/javascript.svg' },
      { name: 'TypeScript', icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg' },
      { name: 'React', icon: 'https://cdn.svgporn.com/logos/react.svg' },
      { name: 'Next.js', icon: 'https://cdn.svgporn.com/logos/nextjs-icon.svg' },
      { name: 'Redux', icon: 'https://cdn.svgporn.com/logos/redux.svg' },
      { name: 'Tailwind', icon: 'https://cdn.svgporn.com/logos/tailwindcss-icon.svg' },
      { name: 'Node.js', icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg' },
      { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg' },
      { name: 'Vite', icon: 'https://cdn.svgporn.com/logos/vitejs.svg' },
      { name: 'Figma', icon: 'https://cdn.svgporn.com/logos/figma.svg' }
    ]
  },
  designer: {
    themeColor: '#8e44ad', // Morado
    hero: {
      title: "Joel Contreras",
      subtitle: "Diseñador Visual & UI/UX",
      description: "Transformo ideas abstractas en interfaces visuales impactantes, centradas en la experiencia del usuario y la identidad de marca.",
      buttonText: "Ver Portafolio"
    },
    about: {
      text: [
        "Como Diseñador Visual y UI/UX, mi objetivo es transformar ideas abstractas en experiencias digitales tangibles y memorables. Creo firmemente que un buen diseño es aquel que es invisible: guía al usuario de manera intuitiva sin interrupciones. Me especializo en crear sistemas de diseño coherentes, prototipos interactivos y layouts visualmente impactantes.",
        "Mi proceso creativo combina la investigación de usuarios con una fuerte sensibilidad estética. Al tener conocimientos de desarrollo, entiendo las limitaciones y posibilidades técnicas, lo que me permite diseñar soluciones viables que facilitan la colaboración con los desarrolladores y aseguran que el producto final sea fiel a la visión original."
      ]
    },
    // --- AQUÍ AGREGAMOS LOS PROYECTOS DE DISEÑO ---
    projects: [
      {
        id: 101,
        title: "Rediseño App Bancaria",
        description: "Propuesta de interfaz moderna para banca móvil enfocada en la usabilidad.",
        image: "https://cdn.dribbble.com/users/418188/screenshots/16133673/media/10c2643d2f9957059f69097b669e5513.png?resize=800x600&vertical=center",
        technologies: ["Figma", "UI Design", "Prototyping"],
        demoLink: "https://dribbble.com/", // Puedes poner tu link de Behance/Dribbble
        repoLink: "#"
      },
      {
        id: 102,
        title: "Dashboard Analítico",
        description: "Diseño de panel de control con modo oscuro y visualización de datos.",
        image: "https://cdn.dribbble.com/users/1615584/screenshots/15806421/media/0c24c56364043228813d71130217f9f4.png?resize=800x600&vertical=center",
        technologies: ["Adobe XD", "Data Viz", "Dashboard"],
        demoLink: "https://dribbble.com/",
        repoLink: "#"
      },
      {
        id: 103,
        title: "Sistema de Diseño Corp.",
        description: "Guía de estilos completa: tipografía, paleta de colores y componentes.",
        image: "https://cdn.dribbble.com/users/4859/screenshots/14629860/media/5f5662df67a628634e7588d9f26d421a.png?resize=800x600&vertical=center",
        technologies: ["Figma", "Design System", "Branding"],
        demoLink: "https://dribbble.com/",
        repoLink: "#"
      }
    ], 
    skills: [
      { name: 'Figma', icon: 'https://cdn.svgporn.com/logos/figma.svg' },
      { name: 'Adobe XD', icon: 'https://cdn.svgporn.com/logos/adobe-xd.svg' },
      { name: 'Photoshop', icon: 'https://cdn.svgporn.com/logos/adobe-photoshop.svg' },
      { name: 'Illustrator', icon: 'https://cdn.svgporn.com/logos/adobe-illustrator.svg' },
      { name: 'After Effects', icon: 'https://cdn.svgporn.com/logos/adobe-after-effects.svg' },
      { name: 'Sketch', icon: 'https://cdn.svgporn.com/logos/sketch.svg' },
      { name: 'Blender', icon: 'https://cdn.svgporn.com/logos/blender-orange.svg' },
      { name: 'InVision', icon: 'https://cdn.svgporn.com/logos/invision.svg' },
      { name: 'Miro', icon: 'https://cdn.svgporn.com/logos/miro.svg' },
      { name: 'HTML/CSS', icon: 'https://cdn.svgporn.com/logos/html-5.svg' }
    ]
  }
};