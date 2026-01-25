import Preview from "../shared/models/Preview";
import ProjectItem from "../shared/models/ProjectItem";
import {
  ASJH_SKILLS,
  REDDDIT_SKILLS,
  RENTR_SKILLS,
  SCATTER_SKILLS,
  TIDYNOTE_SKILLS,
  CUSTOMER_DATABASE_SKILLS,
  COSTBOOK_SKILLS,
  GANTT_SKILLS,
  EASYMEAL_SKILLS,
  PLATFORMSAI_SKILLS
} from "./skills";

export const REDDIT_ID = "reddit-clone";
export const SCATTER_ID = "scatter";
export const TIDYNOTE_ID = "tidynote";
export const RENTR_ID = "rentr";
export const ASJH_ID = "asjh";
export const EASYMEAL_ID = "easymeal"
export const HACKCLUB_ID = "hackclub"
export const HERSEYDEVELOPERS_ID = "herseydevelopers"
export const HSHACKS_ID = "hshacks"
export const GANTTCHART_ID = "ganttchart"
export const COSTBOOK_ID = "costbook"
export const NCDB_ID = "ncdb"
export const PLATFORMSAI_ID = "platformsai"

type ExperienceProjectLink = {
  label: string;
  href: string;
};

type ExperienceProject = {
  name: string;
  bullets: string[];
  skills: string[];
  links?: ExperienceProjectLink[];
};

type Experience = {
  logo: string;
  logoFull?: boolean;
  title: string;
  company: string;
  description?: string;
  startDate: string;
  endDate?: string;
  projects?: ExperienceProject[];
};

export const EXPERIENCES: Experience[] = [
  {
    logo: "icons/organizations/prairielearn.png",
    logoFull: true,
    title: "Software Engineer Intern",
    company: "PrairieLearn, Inc.",
    description:
      "Full-stack intern building AI grading and exam tooling for a 180,000+ student platform.",
    startDate: "12/2024",
    endDate: "Present",
    projects: [
      {
        name: "LLM-Driven Handwriting Grading Pipeline",
        bullets: [
          "Accelerated manual grading process from 1 week to 1 hour by creating LLM-driven handwriting grading pipeline.",
          "Architected backend scaling to grade 1,800 submissions/hr per course with Python, TypeScript, Redis, & SQL.",
          "Achieved human-level 98% grading accuracy using GCP, Gemini, prompt-tuning experiments, & image correction.",
          "Created staff dashboard visualizing real-time progress of 100s of concurrent grading jobs with React & SocketIO.",
          "Incorporated cost tracking, rate limiting, parallel batch jobs, and statistical reports."
        ],
        skills: [
          "TypeScript",
          "React",
          "Python",
          "PostgreSQL",
          "OpenAI API",
          "Image processing",
          "LLMs"
        ]
      },
      {
        name: "Image Capture System",
        bullets: [
          "Engineered real-time image capture UI and API for handwritten submissions delivering 1ms captures for 180,000+ students.",
          "Developed with TypeScript, WebSockets, PostgreSQL, and Python."
        ],
        skills: ["TypeScript", "React", "WebSockets", "Performance", "Image capture"],
        links: [{ label: "Link", href: "https://github.com/PrairieLearn/PrairieLearn/pull/12061" }]
      },
      {
        name: "Staff Navigation System Redesign",
        bullets: [
          "Redesigned staff navigation across 80+ pages, enhancing experience for 2,000+ instructors.",
          "Built with React, TypeScript, HTML, and CSS."
        ],
        skills: ["React", "TypeScript", "UI/UX", "Design systems"],
        links: [{ label: "Link", href: "https://github.com/PrairieLearn/PrairieLearn/discussions/12230" }]
      }

    ]
  },
  {
    logo: "icons/organizations/gsoc.png",
    title: "Software Developer",
    company: "Google Summer of Code - Emory University",
    description:
      "Research and open-source work on MRI-based disease diagnosis with ML and generative models.",
    startDate: "06/2025",
    endDate: "Present",
    projects: [
      {
        name: "Diffusion-Augmented MRI Segmentation Pipeline",
        bullets: [
          "Engineered PyTorch-based pipeline for diffusion-augmented MRI segmentation to improve stomach disease diagnosis.",
          "Improved segmentation accuracy from 40% to 80% through augmentation and hyperparameter/pipeline tuning."
        ],
        skills: ["Python", "PyTorch", "Linux", "Medical imaging", "Segmentation"],
        links: [{ label: "Link", href: "https://summerofcode.withgoogle.com/programs/2025/projects/QB45Mcpx" }]
      }
    ]
  },
  {
    logo: "icons/organizations/hackillinois.png",
    title: "Web Team Lead",
    company: "HackIllinois",
    description:
      "Leading the web platform for UIUC’s flagship 1,000+ attendee hackathon.",
    startDate: "07/2025",
    endDate: "Present",
    projects: [
      {
        name: "HackIllinois 2026 Website and Registration",
        bullets: [
          "Leading redesign of the main site, registration and admin web systems for UIUC's 1,000+ attendee flagship hackathon.",
          "Owning technical direction for the React/Next.js codebase and coordinating work across the student development team."
        ],
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Leadership"],
        links: [{ label: "Link", href: "https://github.com/HackIllinois" }]
      },
    ]
  },
  {
    logo: "icons/organizations/rp.png",
    title: "Software Developer",
    company: "Reflections Projections",
    description:
      "Built tools for sponsors and attendees at the Midwest’s largest collegiate tech conference.",
    startDate: "03/2025",
    endDate: "Present",
    projects: [
      {
        name: "Sponsor Resumebook Platform",
        bullets: [
          "Revamped the sponsor resumebook, improving search, secure export and quick navigation across 2,000+ resumes."
        ],
        skills: ["React", "TypeScript", "Search", "Security", "Performance"],
        links: [{ label: "Link", href: "https://github.com/ReflectionsProjections/rp-web/pull/24" }]
      },
      {
        name: "Interactive Conference Site",
        bullets: [
          "Developed interactive, bespoke schedule, speaker and Q&A pages for the Midwest's largest collegiate tech conference."
        ],
        skills: ["React", "TypeScript", "UI components", "Accessibility"],
        links: [{ label: "Link", href: "https://reflectionsprojections.org/" }]
      }
    ]
  },
  {
    logo: "icons/organizations/pathways.png",
    title: "Software Engineer Intern",
    company: "PATHWAYos (acquired by Vector Solutions)",
    description:
      "Full-stack intern on a 500,000-student work-based learning platform.",
    startDate: "06/2023",
    endDate: "08/2023",
    projects: [
      {
        name: "Work-based Learning Experience Matching System",
        bullets: [
          "Created a work-based learning experience system for a 500,000-student platform.",
          'Engineered API to rank experiences based on preferences, location, experience, and availability with Swift and MySQL.'
        ],
        skills: ["React", "TypeScript", "Product engineering", "Design systems"]
      },
    ]
  },
  {
    logo: "icons/organizations/normandy.png",
    title: "Software Developer",
    company: "Normandy Remodeling",
    description:
      "Built internal platforms and automation for a remodeling company.",
    startDate: "08/2022",
    endDate: "01/2025",
    projects: [
      {
        name: "Cloud-based Customer Database Platform",
        bullets: [
          "Modernized deprecated 1999 customer database into cloud-based platform.",
          "Manages data on 33,000+ customers, 9,900+ projects, and 100,000+ leads.",
          "Implemented frontend in React, CSS and TypeScript, with backend in Node.js, Express, MongoDB and Azure."
        ],
        skills: [
          "React",
          "TypeScript",
          "Node.js",
          "Express",
          "MongoDB",
          "Azure",
          "Full-stack"
        ]
      },
      {
        name: "Invoicing Automation System",
        bullets: [
          "Automated document, email and invoicing workflows for 100+ employees via Azure and OneDrive/Office 365 APIs.",
        ],
        skills: ["Azure", "Office 365 APIs", "Automation", "Integration"]
      },
      {
        name: "Cloud-based Costbook",
        bullets: [
          "Engineered customizable, cloud-based costbook to enable price-tracking of 1,300+ cost items (HVAC, Plumbing, etc.) per job."
        ],
        skills: ["Azure", "Office 365 APIs", "Automation", "Integration"]
      }
    ]
  },
];

export const PROJECTS = [
  new ProjectItem(
    PLATFORMSAI_ID,
    "platformsai",
    "PlatformsAI",
    "PlatformsAI",
    "Build custom, internal data platforms for your organization in minutes using AI.",
    "Build custom, internal data platforms for your organization in minutes using AI.",
    "Can process 1,700,000+ Data Cells/minute",
    PLATFORMSAI_ID,
    PLATFORMSAI_SKILLS, // Replace with actual skills
    "PlatformsAI",
    null,
    "Remote",
    "Software Engineer",
    "May 2024",
    "Present",
    ["Web Development", "Database Management"],
    [
      "Created AI-powered, multi-tenant system that generates custom data management platforms in minutes from business spreadsheets.",
      "Engineered distributed data cleaning algorithm capable of cleaning 1,700,000+ data cells/min using Python, spaCy NLP, and Azure.",
      "Integrated with the GPT-3.5 API to automatically configure platform data dashboards and search settings from the cleaned data. ",
      "Developed drag-and-drop dashboard UI, customizable search results, virtualized tables, and customizable permissions systems with React, ChakraUI, DNDKit, ExpressJS, and TypeScript."
    ],
    [
      new Preview("/screenshots/platformsai/laptop-4.png", "laptop")
    ], // Leave this empty for screenshots
    [ // up to 11
      new Preview("/screenshots/platformsai/laptop-1.png", "laptop"),
      new Preview("/screenshots/platformsai/laptop-2.png", "laptop"),
      new Preview("/screenshots/platformsai/laptop-3.png", "laptop"),
      new Preview("/screenshots/platformsai/laptop-4.png", "laptop"),
      new Preview("/screenshots/platformsai/laptop-5.png", "laptop"),
      new Preview("/screenshots/platformsai/laptop-6.png", "laptop"),
      new Preview("/screenshots/platformsai/laptop-7.png", "laptop"),
      new Preview("/screenshots/platformsai/laptop-8.png", "laptop"),
      new Preview("/screenshots/platformsai/laptop-9.png", "laptop"),
      new Preview("/screenshots/platformsai/laptop-10.png", "laptop"),
      new Preview("/screenshots/platformsai/laptop-11.png", "laptop"),
    ], // Leave this empty for previews
    ["kDdC7vBFdHo"], // Leave this empty for videos
    null, // Leave this blank if no app demo link
    "https://miguelaenlle.notion.site/PlatformsAI-Technical-Writeup-53faa1a98448467aac99e73be131ab26", // Leave this blank if no web demo link
    null // Leave this blank if no GitHub link
  ),
  new ProjectItem(
    NCDB_ID,
    "normandy",
    "Customer Database System",
    "Normandy Customer Database",
    "Modern, cloud-based customer database for Normandy Remodeling",
    "Modern, cloud-based customer database for Normandy Remodeling",
    "Manages data on 30,000+ customers ",
    NCDB_ID,
    CUSTOMER_DATABASE_SKILLS, // Replace with actual skills
    "Normandy Remodeling",
    null,
    "Remote",
    "Software Engineer",
    "June 2022",
    "Present",
    ["Web Development", "Database Management"],
    [
      "Modernized legacy Microsoft Access-based customer database into a custom cloud-based platform",
      "System manages logistical & financial data on 30,000+ customers and 8,000+ remodeling jobs"
    ],
    [
      new Preview("/screenshots/ncdb/laptop-1.png", "laptop")
    ],
    [
      new Preview("/screenshots/ncdb/laptop-1.png", "laptop"),
      new Preview("/screenshots/ncdb/laptop-2.png", "laptop"),
      new Preview("/screenshots/ncdb/laptop-3.png", "laptop"),
      new Preview("/screenshots/ncdb/laptop-4.png", "laptop"),
      new Preview("/screenshots/ncdb/laptop-5.png", "laptop"),
      new Preview("/screenshots/ncdb/laptop-6.png", "laptop"),
      new Preview("/screenshots/ncdb/laptop-7.png", "laptop")
    ], // Leave this empty for previews
    [], // Leave this empty for videos
    null, // Leave this blank if no app demo link
    null, // Leave this blank if no web demo link
    null // Leave this blank if no GitHub link
  ),


  new ProjectItem(
    COSTBOOK_ID,
    "normandy",
    "Web-Based Costbook",
    "Normandy Web-Based Costbook",
    "Custom, web-based costbook for Normandy Remodeling",
    "Custom, web-based costbook for Normandy Remodeling",
    "1,500+ Cost Items tracked per remodeling job",
    COSTBOOK_ID,
    COSTBOOK_SKILLS, // Replace with actual skills
    "Normandy Remodeling",
    null,
    "Remote",
    "Software Engineer",
    "June 2022",
    "Present",
    ["Web Development", "Database Management"],
    [
      "Developed custom, web-based costbook software for Normandy Remodeling",
      "Tracks and automates commodity price updates for 1,300+ cost items per job"
    ],
    [
      new Preview("/screenshots/costbook/laptop-2.png", "laptop")
    ], // Leave this empty for screenshots
    [
      new Preview("/screenshots/costbook/laptop-1.png", "laptop"),
      new Preview("/screenshots/costbook/laptop-2.png", "laptop"),
      new Preview("/screenshots/costbook/laptop-3.png", "laptop")
    ], // Leave this empty for previews
    [], // Leave this empty for videos
    null, // Leave this blank if no app demo link
    null, // Leave this blank if no web demo link
    null // Leave this blank if no GitHub link
  ),

  new ProjectItem(
    GANTTCHART_ID,
    "normandy",
    "Gantt Chart Software",
    "Normandy Web-Based Gantt Chart",
    "Custom, web-based Gantt Chart for Normandy Remodeling",
    "Custom, web-based Gantt Chart for Normandy Remodeling",
    null,
    GANTTCHART_ID,
    GANTT_SKILLS, // Replace with actual skills
    "Normandy Remodeling",
    null,
    "Remote",
    "Software Engineer",
    "June 2022",
    "Present",
    ["Web Development", "Database Management"],
    [
      "Developed proprietary Gantt Chart timeline software for designers to manage project timelines at Normandy Remodeling"
    ],
    [
      new Preview("/screenshots/gantt/laptop-2.png", "laptop")
    ], // Leave this empty for screenshots
    [
      new Preview("/screenshots/gantt/laptop-1.png", "laptop"),
      new Preview("/screenshots/gantt/laptop-2.png", "laptop")
    ], // Leave this empty for previews
    [], // Leave this empty for videos
    null, // Leave this blank if no app demo link
    null, // Leave this blank if no web demo link
    null // Leave this blank if no GitHub link
  ),

  new ProjectItem(
    EASYMEAL_ID,
    "easymeal",
    "EasyMeal: Recipes",
    "EasyMeal: Recipes",
    "Speak what's in your kitchen, instantly get recipes",
    "Speak what's in your kitchen, instantly get recipes",
    null,
    EASYMEAL_ID,
    EASYMEAL_SKILLS, // Replace with actual skills
    "EasyMeal",
    null,
    "Remote",
    "Fullstack Developer",
    "January 2023",
    "June 2023",
    ["Web Development", "Database Management"],
    [
      "Developed iOS app and website that instantly finds easy, healthy, and accessible meals using a user’s available kitchen ingredients",
      "Aggregated 12,000+ recipes for the backend, developed voice transcription system for “Speak Ingredients” feature, and contributed to frontend development",
      "Winner of Apple’s Student App Design Challenge. Presented at Apple’s Flagship Michigan Avenue Store",
      "Popular vote winner of Git Init 2023, an international hackathon with 280+ participants"
    ],
    [
      new Preview("/previews/easymeal/phone-1.png", "phone"),
      new Preview("/previews/easymeal/phone-2.png", "phone"),
    ],
    [
      new Preview("/screenshots/easymeal/laptop-1.png", "laptop"),
      new Preview("/screenshots/easymeal/laptop-2.png", "laptop"),
      new Preview("/screenshots/easymeal/phone-1.png", "phone"),
      new Preview("/screenshots/easymeal/phone-2.png", "phone"),
    ],  // Leave this empty for previews
    [], // Leave this empty for videos
    null, // Leave this blank if no app demo link
    null, // Leave this blank if no web demo link
    null // Leave this blank if no GitHub link
  ),
  new ProjectItem(
    REDDIT_ID,
    REDDIT_ID,
    "Open-Source Reddit Clone",
    "Redddit",
    "Fully-featured Reddit Clone built with MERN and Tailwind",
    "Open Source Reddit Clone",
    null,
    REDDIT_ID,
    REDDDIT_SKILLS,

    "Personal",
    null,
    "Remote",
    "Personal",
    "March 2022",
    "June 2022",

    ["Web Design", "Web Development", "Backend Development"],
    [
      "Independently designed and developed Reddit Clone frontend and backend",
      "Used Typescript React and TailwindCSS to build the frontend",
      "Developed ExpressJS Rest API to enable frontend to interact with MongoDB, Google Cloud, and SendGrid",
      "Developed authentication system with JWT, BCrypt, and SendGrid",
    ],
    [new Preview("/previews/reddit-clone/mockup-1.png", "laptop")],
    [
      new Preview("/screenshots/reddit-clone/laptop-1.png", "laptop"),
      new Preview("/screenshots/reddit-clone/laptop-2.png", "laptop"),
      new Preview("/screenshots/reddit-clone/laptop-3.png", "laptop"),
      new Preview("/screenshots/reddit-clone/laptop-4.png", "laptop"),
      new Preview("/screenshots/reddit-clone/phone-1.png", "phone"),
      new Preview("/screenshots/reddit-clone/phone-2.png", "phone"),
      new Preview("/screenshots/reddit-clone/phone-3.png", "phone"),
      new Preview("/screenshots/reddit-clone/phone-4.png", "phone"),
    ],
    ["SUX5xflrFCo"],
    null,
    "https://redddit-app.web.app/home",
    "https://github.com/miguelaenlle/reddit-clone"
  ),
  new ProjectItem(
    SCATTER_ID,
    SCATTER_ID,
    "Student ID Data Retrieval App",
    "Scatter",
    "App for John Hersey High School administrators to access student data by scanning student IDs",
    "Student ID Data Retrieval App",
    "2,000+ students tracked ",
    SCATTER_ID,
    SCATTER_SKILLS,

    "John Hersey High School",
    "https://www.d214.org/jhhs",
    "Arlington Heights, IL · Remote",
    "Freelance",
    "October 2021",
    "Present",

    [
      "Web/Mobile Design",
      "iOS Development",
      "Web Development",
      "Backend Development",
    ],

    [
      "Scatter is a platform that enables administrators at John Hersey High School to access student data via iOS or the Typescript React website.",
      "Data can be retrieved either by scanning IDs or searching for students.",
      "Scatter provides data for 2,000+ students.",
    ],
    [
      new Preview("/previews/scatter/mockup-1.png", "phone"),
      new Preview("/previews/scatter/mockup-2.png", "phone"),
    ],
    [
      new Preview("/screenshots/scatter/mockup-laptop-1.png", "laptop"),
      new Preview("/screenshots/scatter/mockup-laptop-6.png", "laptop"),
      new Preview("/screenshots/scatter/mockup-phone-1.png", "phone"),
      new Preview("/screenshots/scatter/mockup-phone-2.png", "phone"),
      new Preview("/screenshots/scatter/mockup-phone-3.png", "phone"),
      new Preview("/screenshots/scatter/mockup-laptop-2.png", "laptop"),
      new Preview("/screenshots/scatter/mockup-laptop-3.png", "laptop"),
      new Preview("/screenshots/scatter/mockup-laptop-4.png", "laptop"),
      new Preview("/screenshots/scatter/mockup-laptop-5.png", "laptop"),
    ],
    ["2u8icwKUNTA", "KpK1cfwpVfg"],
    "https://apps.apple.com/us/app/scatterapp/id1596136617",
    null,
    null
  ),
  new ProjectItem(
    ASJH_ID,
    ASJH_ID,
    "Custom Legal Forms Builder",
    "Legal Forms Builder",
    "Legal forms builder custom-made for national nonprofit",
    "Legal forms builder for ASJH",
    "Handles 500+ legal applications per year",
    ASJH_ID,
    ASJH_SKILLS,

    "A Soldier's Journey Home",
    "https://www.asoldiersjourneyhome.org/",
    "Chattanooga, TN · Remote",
    "Freelance",
    "October 2021",
    "Present",

    ["Web/Mobile Design", "Web Development", "Backend Development"],

    [
      "Developed the legal forms platform with Typescript React used by A Soldier’s Journey Home (ASJH), a national nonprofit",
      "Provides easy-to-use, mobile-friendly legal application form for volunteers",
      "Admin page enables ASJH administrators to build forms and manage data effortlessly",
      "Handles 500+ legal applications per year",
    ],
    [new Preview("/previews/asjh/mockup-laptop.png", "laptop")],
    [

      new Preview("/screenshots/asjh/mockup-laptop-3.png", "laptop"),
      new Preview("/screenshots/asjh/mockup-phone.png", "phone"),
      new Preview("/screenshots/asjh/mockup-laptop-1.png", "laptop"),
      new Preview("/screenshots/asjh/mockup-laptop-2.png", "laptop"),
      new Preview("/screenshots/asjh/mockup-laptop-4.png", "laptop"),
    ],
    ["Bo9bA7gGNrU", "mez8lr4Ch1U"],
    null,
    "https://asjh-forms.web.app/",
    null
  ),
  new ProjectItem(
    TIDYNOTE_ID,
    TIDYNOTE_ID,
    "Assignment Notebook App",
    "TidyNote",
    "iPad/iPhone app that lets students track assignments and teachers view students' progress",
    "Assignment Notebook App",
    "",
    TIDYNOTE_ID,
    TIDYNOTE_SKILLS,

    "John Hersey High School",
    "https://www.d214.org/jhhs",
    "Arlington Heights, IL · Remote",
    "Freelance",
    "June 2021",
    "Present",

    [
      "Web/Mobile Design",
      "iOS Development",
      "Web Development",
      "Backend Development",
    ],

    [
      "TidyNote is an Swift app and Typescript React website that gives students a virtual student notebook integrated with their schedules from district databases",
      "Educators can view student notebooks via the app or the website to provide additional support and instruction for students",
    ],
    [new Preview("/previews/tidynote/mockup-tablet.png", "tablet")],
    [
      new Preview("/screenshots/tidynote/mockup-ipad-1.png", "tablet"),
      new Preview("/screenshots/tidynote/mockup-ipad-2.png", "tablet"),
      new Preview("/screenshots/tidynote/mockup-ipad-3.png", "tablet"),
      new Preview("/screenshots/tidynote/mockup-ipad-4.png", "tablet"),
      new Preview("/screenshots/tidynote/mockup-ipad-5.png", "tablet"),
      new Preview("/screenshots/tidynote/mockup-ipad-6.png", "tablet"),
      new Preview("/screenshots/tidynote/mockup-ipad-7.png", "tablet"),
      new Preview("/screenshots/tidynote/mockup-ipad-8.png", "tablet"),
      new Preview("/screenshots/tidynote/mockup-desktop-1.png", "desktop"),
      new Preview("/screenshots/tidynote/mockup-desktop-2.png", "desktop"),
      new Preview("/screenshots/tidynote/mockup-desktop-3.png", "desktop"),
      new Preview("/screenshots/tidynote/mockup-desktop-4.png", "desktop"),
    ],
    ["7XBPR7qe268", "S-Pudcpqsjk"],
    "https://apps.apple.com/us/app/tidynoteapp/id1588417206",
    null,
    null
  ),
  new ProjectItem(
    RENTR_ID,
    RENTR_ID,
    "Peer-to-peer Rentals App",
    "Rentr",
    "Peer-to-peer rentals app for iOS built with Stripe",
    "Peer-to-peer Rentals App",
    null,
    RENTR_ID,
    RENTR_SKILLS,
    "Personal",
    null,
    "Remote",
    "Personal",
    "June 2021",
    "April 2021",

    [
      "Web/Mobile Design",
      "iOS Development",
      "Web Development",
      "Backend Development",
    ],
    [
      "Rentr is a peer-to-peer rentals platform that enables anyone to rent anything",
      "Collaborated with designer & multiple freelance developers to develop SwiftUI frontend ",
      "Developed backend using Firebase, Google Cloud, and Algolia",
      "Developed bank integrations and payments backend with Stripe",
    ],
    [
      new Preview("/previews/rentr/mockup-1.png", "phone"),
      new Preview("/previews/rentr/mockup-2.png", "phone"),
    ],
    [
      new Preview("/screenshots/rentr/mockup-1.png", "phone"),
      new Preview("/screenshots/rentr/mockup-2.png", "phone"),
    ],
    ["o4sNjBulD9Y"],
    "https://apps.apple.com/us/app/rentr-app/id1552998611",
    null,
    null
  ),
];
