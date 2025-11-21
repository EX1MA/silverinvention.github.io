
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  repoLink: string;
}


export const projects: Project[] = [
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
];