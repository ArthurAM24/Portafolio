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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Microservices & API Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: "https://i.postimg.cc/9MtypbLx/java.png",
  },

  {
    name: "HTML 5",
    icon: "https://i.postimg.cc/bYgQS6Dr/html.png",
  },

  {
    name: "CSS 3",
    icon: "https://i.postimg.cc/W1CmbhD7/css.png",
  },

  {
    name: "JavaScript",
    icon: "https://i.postimg.cc/RV0w7cKR/javascript.png",
  },

  {
    name: "TypeScript",
    icon: "https://i.postimg.cc/sD1ZQ3CH/typescript.png",
  },

  {
    name: "React JS",
    icon: "https://i.postimg.cc/0QfJmQNF/reactjs.png",
  },

  {
    name: "Redux Toolkit",
    icon: "https://i.postimg.cc/yx83THgd/redux.png",
  },

  {
    name: "Tailwind CSS",
    icon: "https://i.postimg.cc/h42dtf67/tailwind.png",
  },

  {
    name: "Node JS",
    icon: "https://i.postimg.cc/TwGDpmTn/nodejs.png",
  },

  {
    name: "ThreeJs",
    icon: "https://i.postimg.cc/qqDhb5yG/threejs.png",
  },

  {
    name: "Git",
    icon: "https://i.postimg.cc/8zJW3Nyf/git.png",
  },

  {
    name: "Figma",
    icon: "https://i.postimg.cc/8cZM85QM/figma.png",
  },

];

const experiences = [
  {
    title: "Analista Programador",
    company_name: "Universidad Nacional Intercultural de la Amazonía",
    icon: company,
    iconBg: "#383E56",
    date: " Enero 2025 - Noviembre 2026",
    points: [
      "Desarrollo de aplicaciones web con PHP y Laravel, usando Eloquent ORM para el modelado y manipulación de datos.",
      "Diseño e implementación de microservicios y APIs RESTful para la comunicación entre sistemas.",
      "Aplicación de patrones de diseño y buenas prácticas de arquitectura de software.",
      "Integración de bases de datos relacionales y control de versiones con Git.",
    ],
  },
  {
    title: "Analista Programador Junior",
    company_name: "Codetus",
    icon: company,
    iconBg: "#E6DEDD",
    date: " Enero 2021 - Enero 2025",
    points: [
      "Desarrollo y mantenimiento de aplicaciones en C# .NET Core con arquitectura MVC (ASP.NET, CSHTML) y JavaScript.",
      "Diseño, desarrollo e integración de APIs RESTful y microservicios; consumo de APIs de terceros.",
      "Consultas y manipulación de datos con Entity Framework, LINQ y Dapper sobre SQL Server.",
      "Administración de bases de datos en SQL Server y soporte de TI.",
      "Aplicación de patrones de diseño (Repository, Singleton, Factory) y principios SOLID.",
      "Desarrollo de servicios y aplicaciones backend con Java, Spring Boot, Spring Data JPA y JDBC para consumo y persistencia de datos.",
    ],
  },
  {
    title: "Soporte Técnico",
    company_name: "Servicentro Minelu E.I.R.L.",
    icon: domi,
    iconBg: "#383E56",
    date: "Enero 2018 - Febrero 2020",
    points: [
      "Soporte técnico a usuarios internos y externos.",
      "Resolución de incidencias de hardware, software y redes.",
      "Diseño y elaboración de logotipos e identidad visual para la empresa.",      
    ],
  },

];

const projects = [
  {
    name: "SARA UNIA",
    description:
      "Sistema SIGA para la Universidad UNIA.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.postimg.cc/8z3yqj0K/sara.png",
    source_code_link: "https://sara.unia.edu.pe",
  },
  {
    name: "Agendaris",
    description:
      "Sistema de Agendas Online.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: "https://i.postimg.cc/xdfGCm4H/agendaris.png",
    source_code_link: "https://app.agendaris.com/",
  }, {
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

];

export { services, technologies, experiences, projects };
