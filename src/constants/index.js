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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    lab,
    gaelsystems,
    basicom,
    carrent,
    jobit,
    tripguide,
    threejs,
    formelab,
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
      title: "React Developer",
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
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
      title: "React.js Developer",
      company_name: "Gael Systems",
      icon: gaelsystems,
      iconBg: "#E6DEDD",
      date: "March 2022 - January 2023",
      points: [
        "Designing User Interfaces with Figma.",
        "Integrating the User Interface in HTML, CSS, JavaScript/ES6 with React/ThreeJS.",
        "Designing 3D graphics for the Digital Twin project, using Blender software and the OpenStreetMap plugin.",
        "Prototyping JavaScript applications with CesiumJS/React.",
        "Collaborating with team members using Microsoft Teams."
      ],
    },
    {
      title: "JavaScript Developer",
      company_name: "For Me Lab",
      icon: formelab,
      iconBg: "#E6DEDD",
      date: "March 2020 - Juin 2021",
      points: [
        "Creating a 3D product configurator application in Vanilla JavaScript.",
        "Modeling and texturing 3D assets.",
        "Creating a database of furniture product sheets on Excel.",
      ],
    },
    {
      title: "Full stack Developer Freelance",
      company_name: "Basicom3D / Personals projects",
      icon: basicom,
      iconBg: "#E6DEDD",
      date: "Septembre 2021 - Present",
      points: [
        "Creating 3D portfolio websites.",
        "JavaScript Vanilla and React.",
        "GSAP (GreenSock Animation Platform) is a JavaScript animation library.",
        "Cannon and Rapier are JavaScript physics libraries.",
        "The MERN stack stands for MongoDB, ExpressJS, ReactJS, and NodeJS."
      ],
    },
    {
      title: "General 3D Graphic Designer",
      company_name: "Storytellers Agency",
      icon: lab,
      iconBg: "#E6DEDD",
      date: "Jan 2011 - June 2017",
      points: [
        "Realization of various 3D projects.",
        "Creating 3D advertisements, architectural presentations, and 3D videos for E=M6. Also, designing 3D jingles for luxury brands like YSL.",
        "The software used includes, Blender, LightWave3D,Photoshop, Illustrator, After Effects.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Christophe has good experience in UX/UI fields via different technologies.He is someone invested in his work, motivated and very dedicated.Glad to have been able to discuss different subjects with you.",
      name: "Nicolas Valette",
      designation: "Customer Project Manager",
      company: "Gael Systems",
      image: "https://media.licdn.com/dms/image/D4E03AQFytWMHDJHLpw/profile-displayphoto-shrink_100_100/0/1667403723793?e=1701302400&v=beta&t=AXYJimTwBZfXjNbCer4v1Tc9i8YptBRTKtfhhx4rOVg",
    },
  ];
  
  const projects = [
    {
      name: "Basicom3D",
      description:
        "Creation of the site for the communication agency Basicom.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threeJS",
          color: "green-text-gradient",
        },
        {
          name: "styled component",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/lekrikri/basicom_3D",
    },
    {
      name: "DTE Demo",
      description:
        "WebGL application presenting the public buildings of the City of Nice in France.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "blender",
          color: "green-text-gradient",
        },
        {
          name: "openstreetMap",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/lekrikri/Dte-demo",
    },
    {
      name: "Mon Salon 3D ThreeJS",
      description:
        "Creating a portfolio with the ThreeJS library.",
      tags: [
        {
          name: "ThreeJS",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript Vanilla",
          color: "green-text-gradient",
        },
        {
          name: "3D",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  