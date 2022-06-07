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
    null,
    REDDIT_ID,
    REDDDIT_SKILLS,

    "Personal",
    "Remote",
    "Personal",
    "March 2022",
    "June 2022",

    ["Web Design", "Web Development", "Backend Development"],
    [],
    [new Preview("/previews/reddit-clone/mockup-1.png", "laptop")],
    [],

    [],
    null,
    null,
    null
  ),
  new ProjectItem(
    SCATTER_ID,
    SCATTER_ID,
    "QR Student Data App",
    "Scatter",
    "App for John Hersey High School administrators to access student data by scanning student IDs",
    "2,000+ students tracked",
    SCATTER_ID,
    SCATTER_SKILLS,

    "John Hersey High School (JHHS)",
    "Arlington Heights, IL",
    "Freelance",
    "October 2021",
    "Present",

    [
      "Web/Mobile Design",
      "iOS Development",
      "Web Development",
      "Backend Development",
    ],

    [],
    [
      new Preview("/previews/scatter/mockup-1.png", "phone"),
      new Preview("/previews/scatter/mockup-2.png", "phone"),
    ],
    [],
    [],
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
    "500+ applicants/year",
    ASJH_ID,
    ASJH_SKILLS,

    "Chattanooga, TN",
    "A Soldier's Journey Home",
    "Freelance",
    "October 2021",
    "Present",

    ["Web/Mobile Design", "Web Development", "Backend Development"],

    [],
    [new Preview("/previews/asjh/mockup-laptop.png", "laptop")],
    [],
    [],
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
    "220+ students/teachers using the app",
    TIDYNOTE_ID,
    TIDYNOTE_SKILLS,

    "Arlington Heights, IL",
    "John Hersey High School",
    "Freelance",
    "June 2021",
    "Present",

    [
      "Web/Mobile Design",
      "iOS Development",
      "Web Development",
      "Backend Development",
    ],

    [],
    [new Preview("/previews/tidynote/mockup-tablet.png", "tablet")],
    [],
    [],
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
    null,
    RENTR_ID,
    RENTR_SKILLS,
    "Arlington Heights, IL",
    "John Hersey High School",
    "Freelance",
    "June 2021",
    "Present",

    [
      "Web/Mobile Design",
      "iOS Development",
      "Web Development",
      "Backend Development",
    ],
    [],
    [
      new Preview("/previews/rentr/mockup-1.png", "phone"),
      new Preview("/previews/rentr/mockup-2.png", "phone"),
    ],
    [],
    [],
    null,
    null,
    null
  ),
];
