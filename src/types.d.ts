import type { ComponentType, Dispatch, SetStateAction } from 'react'

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
  [key: string]: ComponentType<{ size?: string | number, fill?: string }>
}
