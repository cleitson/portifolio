import { ProjetoType } from "../types"

export const Projetos: ProjetoType[] = [
  {
    id: 1,
    title: 'IBGE Project',
    description: 'Esse projeto e uma aplicação web que consome a API do IBGE para listar todas as noticias.',
    image: 'https://github.com/cleitson/ibgeProject/blob/main/src/assets/IbgeProject.png?raw=true',
    stack: ['React','Typescript','Html5','Css3','Tailwindcss'],
    github: 'https://github.com/cleitson/ibgeProject',
    link: 'https://ibge-project-two.vercel.app/',
  },
  {
    id: 2,
    title: 'BuildBox challenge',
    description: 'Esse projeto e um desafio web em que deve possuir lista de posts com a possíbilidade de adicionar e remover. Cada post deve conter nome, mensagem e foto.',
    image: 'https://github.com/cleitson/web-developer-challenge/blob/master/src/assets/desafioBuildBox.png?raw=true',
    stack: ['React','Typescript','Javascript','Html5'],
    github: 'https://github.com/cleitson/web-developer-challenge',
    link: 'https://web-developer-challenge-blue.vercel.app/',
  },
]

export const Voluntario: ProjetoType[] = [
  {
    id: 1,
    title: 'Associação Beneficente A Força do Amor',
    description: 'Projeto de uma pagina para uma associação sem fins lucrativos que ajuda familias carentes.',
    image: 'src/assets/fam.png',
    stack: ['Html5','Css3','Javascript'],
    github: '',
    link: '',
  },
]