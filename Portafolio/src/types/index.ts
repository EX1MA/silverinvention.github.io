export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  repoLink: string;
}

export interface Skill {
  name: string;
  icon: string; // URL de un icono o path local
}