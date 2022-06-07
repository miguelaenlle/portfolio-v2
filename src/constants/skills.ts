import Skill from "../shared/models/Skill";

export const SWIFT = new Skill("Swift", "swift");
export const SWIFT_UI = new Skill("SwiftUI", "swift");

export const HTML5 = new Skill("HTML5", "html");
export const CSS3 = new Skill("CSS3", "css");
export const JSON = new Skill("JSON", "json");
export const JS = new Skill("JavaScript", "js");
export const TS = new Skill("TypeScript", "ts");
export const JSX = new Skill("JSX", "react");
export const REACT = new Skill("React", "react");
export const REACT_TS = new Skill("ReactTS", "react");
export const REDUX = new Skill("Redux", "redux");
export const TAILWIND_CSS = new Skill("TailwindCSS", "tailwind");

export const FRONTEND_SKILLS = [
  SWIFT,
  SWIFT_UI,
  HTML5,
  CSS3,
  JSON,
  JS,
  TS,
  JSX,
  REACT,
  REACT_TS,
  REDUX,
  TAILWIND_CSS,
];

export const NODE_JS = new Skill("NodeJS", "node");
export const EXPRESS = new Skill("ExpressJS", "express");
export const MONGO_DB = new Skill("MongoDB", "mongodb");
export const MONGOOSE = new Skill("Mongoose", "mongoose");
export const FIREBASE = new Skill("Firebase", "firebase");
export const AMPLIFY = new Skill("Amplify", "aws");
export const STRIPE = new Skill("Stripe", "stripe");
export const PYTHON = new Skill("Python", "py");
export const SENDGRID = new Skill("Sendgrid", "sendgrid");
export const JWT = new Skill("JWT", "jwt");
export const BCRYPT = new Skill("BCrypt", "bcrypt");
export const AIRTABLES = new Skill("Airtables", "airtables");
export const GCLOUD = new Skill("GCloud", "gcloud");
export const ALGOLIA = new Skill("Algolia", "algolia");
export const HEROKU = new Skill("Heroku", "heroku");

export const BACKEND_SKILLS = [
  NODE_JS,
  EXPRESS,
  MONGO_DB,
  MONGOOSE,
  HEROKU,
  FIREBASE,
  ALGOLIA,
  GCLOUD,
  AMPLIFY,
  STRIPE,
  PYTHON,
  SENDGRID,
  JWT,
  BCRYPT,
  AIRTABLES,
];

export const PLANNING = new Skill("Planning", "planning");
export const COLLABORATION = new Skill("Collaboration", "collaboration");
export const DESIGN = new Skill("Design", "design");
export const TIME_MANAGEMENT = new Skill("Time Management", "time-management");

export const SOFT_SKILLS = [PLANNING, COLLABORATION, DESIGN, TIME_MANAGEMENT];

export const NOTION = new Skill("Notion", "notion");
export const TRELLO = new Skill("Trello", "trello");
export const GITHUB = new Skill("GitHub", "github");
export const FIGMA = new Skill("Figma", "figma");
export const VSCODE = new Skill("Visual Studio Code", "vscode");
export const POSTMAN = new Skill("Postman", "postman");
export const DEVTOOLS = new Skill("Chrome DevTools", "devtools");

export const TOOLS = [NOTION, TRELLO, GITHUB, FIGMA, VSCODE, POSTMAN, DEVTOOLS];

export const SKILLS: { [key: string]: Skill[] } = {
  FRONTEND: FRONTEND_SKILLS,
  BACKEND: BACKEND_SKILLS,
  SOFT: SOFT_SKILLS,
  TOOLS: TOOLS,
};

