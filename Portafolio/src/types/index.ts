
export type Role = 'developer' | 'designer';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  features?: string[];
  demoLink: string;
  repoLink: string;
  year?: number;
  status?: 'Completado' | 'En Desarrollo' | 'Concepto';
  category?: string;
  highlight?: boolean;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Stat {
  value: number;
  label: string;
  suffix: string;
}
