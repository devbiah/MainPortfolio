import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    nestjs,
    vite,
    nodejs,
    postgresql,
    git,
    figma,
    docker,
    intelbras,
    compasio
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "Nest JS",
      icon: nestjs,
    },
    {
      name: "Vite JS",
      icon: vite,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "PostgreSql",
      icon: postgresql,
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
      title: "BackEnd Developer",
      company_name: "Intelbras",
      icon: intelbras,
      iconBg: "#383E56",
      date: "March 2024 - March 2025",
      points: [
        "Developed and maintained an API using NestJS and related technologies.",
        "Collaborated with cross-functional teams, including product managers and fellow developers, to create a productive work environment.",
        "Implemented an API and conducted tests for a proof of concept (POC).",
        "Contributed to the cloud services sector in electronic security as an apprentice."
      ],
    },
  ];  

  
  const projects = [
    {
      name: "Compasio",
      description:
        "Create a platform where NGOs can post opportunities for volunteers and individuals can apply to work with them. The system allows NGOs to review applications and select candidates based on their skills, interests, and ability.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "nestjs",
          color: "pink-text-gradient",
        },
      ],
      image: compasio,
      source_code_link: "https://github.com/Compasio",
    },
  ]
  
  export { services, technologies, experiences, projects };