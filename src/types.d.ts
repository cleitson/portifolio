export type contextType = {
  nav: boolean,
  toggleNav: () => void
}

export type ProjetoType = {
  id: number,
  title: string,
  description: string,
  image: string,
  stack: string[],
  github?: string,
  link?: string,
}

export type ExperienciaType = {
  id: number,
  title: string,
  date: string,
  company: string,
  local?: string,
  description: string,
  competencies?: string
};

export type DevIconsType = {
  [key: string]: React.ComponentType<{ size?: number | string }>
}