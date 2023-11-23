import {
  mobile,
  backend,
  creator,
  web,
  
  java,
  html,
  css,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  threejs,
  git,
  figma,
  docker,
  
  essalud,
  company,
  domi,

} from "../assets";

export const navLinks = [

  {
    id: "about",
    title: "Sobre mí",
  },
  {
    id: "experience",
    title: "Experiencia",
  },
  {
    id: "proyects",
    title: "Proyectos",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contacto",
  },

];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React.JS",
    icon: mobile,
  },
  {
    title: "Backend Java",
    icon: backend,
  },
  {
    title: "Creador de Contenido",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "ThreeJs",
    icon: threejs,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Practicante Pre Profesional",
    company_name: "Red de Salud N° 01 Coronel Portillo",
    icon: essalud,
    iconBg: "#383E56",
    date: " Abril 2019 - Julio 2019",
    points: [
      "Elaboración de Reportes e Informes.",
      "Manejo de Servidores (SQL Server).",
      "Soporte Técnico.",
      "Planificación y seguimiento de Estrategias de Gestión.",
    ],
  },
  {
    title: "Practicante Profesional",
    company_name: "JSM Multiservicios Generales E.I.R.L.",
    icon: company,
    iconBg: "#E6DEDD",
    date: " Noviembre 2022 - Febrero 2023",
    points: [
      "Elaboración de informes.",
      "Brindé asesoramiento técnico a clientes sobre los productos de hardware y software.",
      "Configuré y personalicé computadoras de acuerdo con las necesidades y requisitos de los clientes.",
      "Soporte post venta, asistiendo a los clientes con la instalación, configuración y solución de problemas de sus equipos",
    ],
  },
  {
    title: "Soporte Técnico",
    company_name: "Servicentro Minelu E.I.R.L.",
    icon: domi,
    iconBg: "#383E56",
    date: "Enero 2020 - Febrero 2022",
    points: [
      "Elaboración de contenido para blogs.",
      "Diseño y elaboración de logos atractivos para la Empresa.",
      "Soporte técnico a usuarios internos y externos",
      "Resolví problemas de la empresa usando hardware, software y redes.",
    ],
  },

];


const projects = [
  {
    name: "AnimeMedia",
    description:
      "Diseño de Página de facebook, para creador de contenido.",
    tags: [
      {
        name: "Photoshop",
        color: "blue-text-gradient",
      },
      {
        name: "Facebook",
        color: "green-text-gradient",
      },
    ],
    image: "https://i.postimg.cc/mrH01p7q/Animemedia.jpg",
    source_code_link: "https://www.facebook.com/gaming/AnimemediaxD",
  },
  {
    name: "Grifos Domi",
    description:
      "Diseño de logotipo para el Servicentro Minelu E.I.R.L.",
    tags: [
      {
        name: "Photoshop, Ilustrator",
        color: "blue-text-gradient",
      },
      {
        name: "Facebook",
        color: "green-text-gradient",
      },
    ],
    image: "https://i.postimg.cc/tJ2fGKH1/Grifosdomi.jpg",
    source_code_link: "https://www.facebook.com/grifosdomi",
  },{
    name: "Punto Sabroso",
    description:
      "Diseño de página web para restaurante Punto Sabroso.",
    tags: [
      {
        name: "JAVA",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.postimg.cc/d1cg2RB0/Puntosabroso.jpg",
    source_code_link: "https://arthuram24.github.io/foodweb/",
  },
  {
    name: "Pide Altoq'",
    description:
      "Aplicación móvil de pedidos de comida para restaurantes.",
    tags: [
      {
        name: "JAVA",
        color: "blue-text-gradient",
      },
      {
        name: "Android",
        color: "green-text-gradient",
      },
    ],
    image: "https://i.postimg.cc/Fz9qq9w5/Pidealtoque.jpg",
    source_code_link: "https://github.com/ArthurAM24/ProyectoFinal",
  },
  {
    name: "Ugel Purús",
    description:
      "Diseño y Elaboración del portal web de la Institución Ugel Purús.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Worpress",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.postimg.cc/bwqknzz0/Ugelpurus.jpg",
    source_code_link: "https://ugelpurus.net",
  },
  
];

export { services, technologies, experiences, projects };
