
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
    title: "E-commerce de Zapatos",
    description: "Tienda en línea con carrito de compras...",
    image: "/assets/images/proyecto1.png",
    technologies: ["React", "Redux", "Stripe"],
    demoLink: "https://mi-tienda.com",
    repoLink: "https://github.com/usuario/tienda"
  },
 
];