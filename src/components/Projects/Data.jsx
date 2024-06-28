import Image1 from "../../assets/ScreensFlyinGames/Destaques.png";
import Image2 from "../../assets/ScreensSites/FcE.png";
import Image3 from "../../assets/ScreensSites/MultasDoutores.png";
import Image4 from "../../assets/ScreensSites/VidrosEsquadrias.png";
import imageIcon1 from "../../assets/icons-tecnologias/react-original.svg";
import imageIcon2 from "../../assets/icons-tecnologias/javascript-plain.jpg";
import imageIcon3 from "../../assets/icons-tecnologias/html5-original.svg";
import imageIcon4 from "../../assets/icons-tecnologias/css3-original.svg";
import imageIcon5 from "../../assets/icons-tecnologias/tailwindcss-original.svg";
//import imageIcon5 from '../../assets/icons-tecnologias/csharp-original.svg';

export const ProjectsData = [
  {
    id: 1,
    image: Image1,
    title: "FlyinGames",
    imageIcon: [
      { url: imageIcon1 },
      { url: imageIcon2 },
      { url: imageIcon3 },
      { url: imageIcon4 },
    ],
    details: {
      title: "FlyinGames",
      description:
        "FlyinGames é uma plataforma de venda de jogos online, um projeto que desenvolvi com as tecnologias ReactJs e JavaScript. O projeto destaca um carrinho de compras e busca dos jogos no site. Atualmente, estou focado na finalização do backend.",
    },
    demo: "https://flyingames.vercel.app/",
    repository: "https://github.com/vin1i/FlyinGames",
  },

  {
    id: 2,
    image: Image2,
    title: "FcE Elétrica",
    imageIcon: [
      { url: imageIcon1 },
      { url: imageIcon2 },
      { url: imageIcon3 },
      { url: imageIcon4 },
    ],

    details: {
      title: "FcE Elétrica",
      description:
        "Este site foi desenvolvido por mim durante meu estágio na empresa Inovação Marketing. Utilizando React para a criação de interfaces dinâmicas e responsivas, Vite para um ambiente de desenvolvimento mais rápido e eficiente, e JavaScript para funcionalidades interativas.",
    },
    demo: "https://www.fecservicoeletricista.com.br/",
    repository: "",
  },
  {
    id: 3,
    image: Image3,
    title: "FcE Elétrica",
    imageIcon: [
      { url: imageIcon1 },
      { url: imageIcon2 },
      { url: imageIcon3 },
      { url: imageIcon4 },
    ],

    details: {
      title: "Multas e Doutores",
      description:
        "Este site foi desenvolvido por mim durante meu estágio na empresa Inovação Marketing. Utilizando React para a criação de interfaces dinâmicas e responsivas, Vite para um ambiente de desenvolvimento mais rápido e eficiente, e JavaScript para funcionalidades interativas.",
    },
    demo: "https://multasedoutores.com.br/",
    repository: "",
  },
  {
    id: 4,
    image: Image4,
    title: "Vidros e Esquadrias Borges",
    imageIcon: [
      { url: imageIcon1 },
      { url: imageIcon2 },

      { url: imageIcon4 },
      { url: imageIcon5 },
    ],

    details: {
      title: "Vidros e Esquadrias Borges",
      description:
        "Este site foi desenvolvido por mim durante meu estágio na empresa Inovação Marketing. Utilizando React para a criação de interfaces dinâmicas e responsivas, Vite para um ambiente de desenvolvimento mais rápido e eficiente, e JavaScript para funcionalidades interativas.",
    },
    demo: "https://vidrosesquadriasborges.com.br/",
    repository: "",
  },
  //   {
  //     id: 5,
  //     image: Image5,
  //     title: "FcE Elétrica",
  //     imageIcon: [
  //       { url: imageIcon1 },
  //       { url: imageIcon2 },
  //       { url: imageIcon3 },
  //       { url: imageIcon4 },
  //     ],

  //     details: {
  //       title: "Multas e Doutores",
  //       description:
  //         "Este site foi desenvolvido por mim durante meu estágio na empresa Inovação Marketing. Utilizando React para a criação de interfaces dinâmicas e responsivas, Vite para um ambiente de desenvolvimento mais rápido e eficiente, e JavaScript para funcionalidades interativas.",
  //     },
  //     demo: "https://vidrosesquadriasborges.com.br/",
  //     repository: "",
  //   },
];

export const projectsNav = [
  /*{
        name: 'All',
    },
    
    {
        name: 'Full-Stack',
    },*/

  {
    name: "Frontend",
  },
];
