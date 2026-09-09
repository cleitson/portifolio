import type { Dispatch, SetStateAction } from 'react'
import type { IconType } from 'react-icons'

export type contextType = {
  nav: boolean,
  loading: boolean,
  setLoading: Dispatch<SetStateAction<boolean>>,
  toggleNav: () => void
}

export type ProjetoType = {
  id: number,
  title: string,
  description: string,
  category: 'Freelance' | 'Voluntariado' | 'Projeto pessoal',
  image?: string,
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
  [key: string]: IconType
}
