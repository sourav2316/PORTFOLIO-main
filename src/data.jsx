import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";
import { IoCodeWorking } from "react-icons/io5";

import Work1 from "./assets/project-1.png";
import Work2 from "./assets/project-2.png";
import Work3 from "./assets/project-3.png";
import Work4 from "./assets/project-4.png";
import Work5 from "./assets/project-5.png";
import Work6 from "./assets/project-6.png";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav_icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav_icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Projects",
    icon: <FaFolderOpen className="nav_icon" />,
    path: "/projects",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav_icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Sourav",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Kumar",
  },

  {
    id: 3,
    title: "Age : ",
    description: "23 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Una, Himachal Pradesh",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+91 8544769803",
  },

  {
    id: 8,
    title: "Email : ",
    description: "ksourav044@gmail.com",
  },

  {
    id: 9,
    title: "GitHub : ",
    description: "sourav2316",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "English, Hindi",
  },
];

export const stats = [
  {
    id: 1,
    no: "JavaScript",
    title: "Course Completed from <br /> CHAI OR CODE by Hitesh Sir ",
  },

  {
    id: 2,
    no: "React",
    title: "Course Completed from <br /> KG Coding by Prashant Sir",
  },

  {
    id: 3,
    no: "50+",
    title: "Practice <br /> Projects Completed",
  },

  {
    id: 4,
    no: "10+",
    title: " Esports Awards <br /> Won",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2020 - 2023",
    title: "E-Sports <span> Gaming Startup </span>",
    desc: "Started a eSports org (Tangible Esports) as a Tournament Org and successfully ran it in 2020-23",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2020 - 2022",
    title: "WordPress Website <span> Tangible Esp </span>",
    desc: "I also handle a WordPress website",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2020 - 2023",
    title: "Graphics and Video <span> Editor </span>",
    desc: "I have also done video editing and graphics designing for many orgs",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2016",
    title: "10th class <span> GOVT. SEN. SEC. SCHOOL </span>",
    desc: "Passed out 10th in March 2016 from Himachal Pradesh Board with 87% Marks",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2018",
    title: "12th class <span> GOVT. SEN. SEC. SCHOOL </span>",
    desc: "Passed out 12th in March 2018 from Himachal Pradesh Board with 60% Marks",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2022",
    title: "Bachelor Degree <span> MP. GOVT COLLEGE </span>",
    desc: "Completed Bachelor of Computer Application (BCA) from Himachal Pradesh University with A+ Grade",
  },
];

export const skills = [
  {
    id: 1,
    title: "HTML",
    percentage: "60",
  },

  {
    id: 2,
    title: "JavaScript",
    percentage: "80",
  },

  {
    id: 3,
    title: "CSS",
    percentage: "60",
  },

  {
    id: 4,
    title: "React",
    percentage: "90",
  },

  {
    id: 4,
    title: "Graphics Designing",
    percentage: "55",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Shopify e-Commerce Website",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <IoCodeWorking />,
        title: "Code : ",
        desc: (
          <a
            href="https://github.com/sourav2316/e-Commerce-Website.git"
            target="_blank"
            className="clickMe"
          >
            Here
          </a>
        ),
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React & Redux",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://shopify-sourav.netlify.app/"
            target="_blank"
            className="clickMe"
          >
            Click Me
          </a>
        ),
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
