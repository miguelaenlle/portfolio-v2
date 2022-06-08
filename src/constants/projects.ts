import Preview from "../shared/models/Preview";
import ProjectItem from "../shared/models/ProjectItem";
import {
  ASJH_SKILLS,
  REDDDIT_SKILLS,
  RENTR_SKILLS,
  SCATTER_SKILLS,
  TIDYNOTE_SKILLS,
} from "./skills";

export const REDDIT_ID = "reddit-clone";
export const SCATTER_ID = "scatter";
export const TIDYNOTE_ID = "tidynote";
export const RENTR_ID = "rentr";
export const ASJH_ID = "asjh";

export const PROJECTS = [
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
    [],
    ["SUX5xflrFCo"],
    null,
    null,
    null
  ),
  new ProjectItem(
    SCATTER_ID,
    SCATTER_ID,
    "Student ID Data Retrieval App",
    "Scatter",
    "App for John Hersey High School administrators to access student data by scanning student IDs",
    "Student ID Data Retrieval App",
    "2,000+ students tracked",
    SCATTER_ID,
    SCATTER_SKILLS,

    "John Hersey High School",
    "https://www.d214.org/jhhs",
    "Arlington Heights, IL / Remote",
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
    [],
    ["2u8icwKUNTA", "KpK1cfwpVfg"],
    null,
    null,
    null
  ),
  new ProjectItem(
    ASJH_ID,
    ASJH_ID,
    "Custom Legal Forms Builder",
    "TidyNote",
    "Legal forms builder custom-made for national nonprofit",
    "Legal forms builder custom-made for A Soldier's Journey Home, national nonprofit",
    "500+ applicants/year",
    ASJH_ID,
    ASJH_SKILLS,

    "A Soldier's Journey Home",
    "https://www.asoldiersjourneyhome.org/",
    "Chattanooga, TN / Remote",
    "Freelance",
    "October 2021",
    "Present",

    ["Web/Mobile Design", "Web Development", "Backend Development"],

    [
      "TidyNote is an Swift app and Typescript React website that gives students a virtual student notebook integrated with their schedules from district databases",
      "Educators can view student notebooks via the app or the website to provide additional support and instruction for students",
      "Actively used by 220+ students and educators at John Hersey High School",
    ],
    [new Preview("/previews/asjh/mockup-laptop.png", "laptop")],
    [],
    ["Bo9bA7gGNrU", "mez8lr4Ch1U"],
    null,
    null,
    null
  ),
  new ProjectItem(
    TIDYNOTE_ID,
    TIDYNOTE_ID,
    "Assignment Notebook App",
    "TidyNote",
    "iPad/iPhone app that lets students track assignments and teachers view students' progress",
    "Assignment Notebook App",
    "220+ students/teachers using the app",
    TIDYNOTE_ID,
    TIDYNOTE_SKILLS,

    "John Hersey High School",
    "https://www.d214.org/jhhs",
    "Arlington Heights, IL / Remote",
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
      "Developed the legal forms platform with Typescript React used by A Soldier’s Journey Home (ASJH), a national nonprofit",

      "Provides easy-to-use, mobile-friendly legal application form for volunteers",

      "Admin page enables ASJH administrators to build forms and manage data effortlessly",

      "Handles 500+ legal applications per year",
    ],
    [new Preview("/previews/tidynote/mockup-tablet.png", "tablet")],
    [],
    ["7XBPR7qe268", "S-Pudcpqsjk"],
    null,
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
    [],
    ["o4sNjBulD9Y"],
    null,
    null,
    null
  ),
];
