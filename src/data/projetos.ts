import { ProjetoType } from "../types"
import img from "../assets/fam.jpg"

export const Projetos: ProjetoType[] = [
  {
    id: 1,
    title: 'IBGE Project',
    description: 'Pagina web que utiliza como base a API do IBGE para listar todas as noticias atualizadas.',
    image: 'https://github.com/cleitson/ibgeProject/blob/main/src/assets/IbgeProject.png?raw=true',
    stack: ['React','Typescript','Html','Css','Tailwind'],
    github: 'https://github.com/cleitson/ibgeProject',
    link: 'https://ibge-project-two.vercel.app/',
  },
  {
    id: 2,
    title: 'BuildBox challenge',
    description: 'Esse projeto e um desafio web em que deve possuir lista de posts com a possíbilidade de adicionar e remover. Pagina somente de demosntração nao possui backend para salvamento.',
    image: 'https://github.com/cleitson/web-developer-challenge/blob/master/src/assets/desafioBuildBox.png?raw=true',
    stack: ['React','Typescript','Javascript','Html'],
    github: 'https://github.com/cleitson/web-developer-challenge',
    link: 'https://web-developer-challenge-blue.vercel.app/',
  },
  {
    id: 3,
    title: 'Gemini',
    description: 'Este projeto é um backend que tem como proposta ler uma imagem em base64 de uma conta seja água/gás e a IA Gemini vision consegue ler a quantidade consumida e salva em um banco de dados MySql. Possui rotas para enviar para leitura, listar por usuario, confirmar, e visualizar as imagens.',
    stack: ['NodeJs', 'Docker', 'MySQL'],
    github: 'https://github.com/cleitson/gemini',
  },
]

export const Voluntario: ProjetoType[] = [
  {
    id: 1,
    title: 'Associação Beneficente A Força do Amor',
    description: 'Voluntariado remoto dedicado ao desenvolvimento de um website institucional responsivo e funcional para a FAM. Empregando ferramentas como HTML, CSS, JavaScript. Com este projeto, espera-se aumentar a visibilidade da ONG, facilitar o acesso a informações e serviços, e promover uma maior participação da comunidade. (Em desenvolvimento)',
    image: img,
    stack: ['Html','Css','Javascript', 'NodeJs'],
  },
]