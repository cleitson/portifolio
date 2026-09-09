import { ProjetoType } from "../types"
import famImg from "../assets/projects/fam.webp"
import nkImg from "../assets/projects/NeriksonMinis.webp"
import ibgeImg from "../assets/projects/ibge-project.png"
import buildboxImg from "../assets/projects/buildbox-challenge.png"
import weatherImg from "../assets/projects/weather-api.png"
import betalentImg from "../assets/projects/betalent.png"

export const Projetos: ProjetoType[] = [
  {
    id: 1,
    title: 'IBGE Project',
    category: 'Projeto pessoal',
    description: 'Aplicação que consome a API do IBGE para apresentar notícias atualizadas de forma clara e acessível.',
    image: ibgeImg,
    stack: ['React','Typescript','Html','Css','Tailwind'],
    github: 'https://github.com/cleitson/ibgeProject',
    link: 'https://ibge-project-two.vercel.app/',
  },
  {
    id: 2,
    title: 'BuildBox challenge',
    category: 'Projeto pessoal',
    description: 'Desafio front-end para criar e administrar uma lista de posts, com uma interface responsiva e foco na experiência de uso.',
    image: buildboxImg,
    stack: ['React','Typescript','Javascript','Html'],
    github: 'https://github.com/cleitson/web-developer-challenge',
    link: 'https://web-developer-challenge-blue.vercel.app/',
  },
  {
    id: 3,
    title: 'Weather Api',
    category: 'Projeto pessoal',
    description: 'Aplicação de previsão do tempo que permite buscar e visualizar condições meteorológicas de diferentes cidades.',
    image: weatherImg,
    stack: ['React','Typescript','Html','Css','Tailwind'],
    github: 'https://github.com/cleitson/previsaoDoTempo',
    link: 'https://previsao-do-tempo-smoky-mu.vercel.app/'
  },
  {
    id: 4,
    title: 'Gemini',
    category: 'Projeto pessoal',
    description: 'API que usa Gemini Vision para ler contas de água e gás, registrar o consumo no MySQL e disponibilizar rotas de consulta e confirmação.',
    stack: ['NodeJs', 'Typescript', 'Docker', 'MySQL'],
    github: 'https://github.com/cleitson/gemini',
  },
  {
    id: 5,
    title: 'BeTalent',
    category: 'Projeto pessoal',
    description: 'Teste técnico front-end com tabela responsiva alimentada por uma API simulada com json-server.',
    image: betalentImg,
    stack: ['React','Typescript','Html','Css','Tailwind'],
    github: 'https://github.com/cleitson/Desafio_BeMobile'
  }
  
]

export const Voluntario: ProjetoType[] = [
  {
    id: 1,
    title: 'Associação Beneficente A Força do Amor',
    category: 'Voluntariado',
    description: 'Website institucional responsivo para ampliar a visibilidade da ONG, facilitar o acesso a informações e aproximar a comunidade.',
    image: famImg,
    stack: ['Html','Css','Javascript', 'NodeJs'],
    link: 'https://www.aforcadoamor.org.br/',
  },
]

export const Freelancer: ProjetoType[] = [
  {
    id: 1,
    title: 'Nerikson Minis',
    category: 'Freelance',
    description: 'Contribuição no e-commerce de miniaturas 3D com Next.js, TypeScript, Tailwind CSS, componentes reutilizáveis e animações.',
    image: nkImg,
    stack: ['NextJs','Tailwind','Typescript'],
    link: 'https://nerikson.com',
  },
]
