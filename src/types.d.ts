export type contextType = {
  nav: boolean,
  loading: boolean,
  setLoading:React.Dispatch<React.SetStateAction<boolean>>,
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

export type EmailData = {
  name: string,
  email: string,
  message: string
}


export type DevIconsType = {
  [key: string]: React.ComponentType<props>
}