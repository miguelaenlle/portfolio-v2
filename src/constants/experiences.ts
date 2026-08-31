export type ExperienceRole = {
  title: string;
  dates: string;
  summary: string;
  bullets: string[];
};

export type ExperienceLink = {
  label: string;
  href: string;
};

export type Experience = {
  id: string;
  company: string;
  logo: string;
  logoFull?: boolean;
  current?: boolean;
  summary: string;
  keywords: string[];
  roles: ExperienceRole[];
  link?: string;
  linkLabel?: string;
  references?: ExperienceLink[];
};

export const EXPERIENCES: Experience[] = [
  {
    id: "prairielearn-engineer",
    company: "PrairieLearn",
    logo: "/icons/organizations/prairielearn.png",
    logoFull: true,
    current: true,
    summary:
      "Distributed, sandboxed AI agents for code-based course development",
    keywords: ["Applied AI/ML", "Distributed Systems", "Cloud"],
    roles: [
      {
        title: "Software Engineer",
        dates: "Aug 2026 – Present",
        summary: "",
        bullets: [
          "Building a cloud-hosted coding agent to automate course authoring, autograder debugging, and other workflows currently performed manually by instructors and TAs.",
          "Architecting a serverless agent fleet on Cloudflare Workers with isolated per-conversation Linux VM sandboxes.",
          "Designing sandbox lifecycle management that checkpoints workspaces to R2 after idle periods and restores agent state on demand.",
          "Building approval-gated Git workflows so instructors can inspect and authorize agent-generated repository changes before publication.",
        ],
      },
    ],
  },
  {
    id: "ssail",
    company: "UIUC SSAIL",
    logo: "/icons/organizations/uiuc-block-i.png",
    current: true,
    summary:
      "GPU inference cluster optimization using autoresearch and RL environments",
    keywords: ["ML Systems", "Autoresearch", "Agent Environments"],
    roles: [
      {
        title: "ML Systems Research Intern",
        dates: "Aug 2026 – Present",
        summary: "",
        bullets: [
          "Building an agentic environment to optimize scheduling, routing, and autoscaling policies for NVIDIA Dynamo LLM inference clusters.",
          "Developing autoresearch-style policy optimization loops and RL fine-tuning infrastructure.",
          "Testing policies with NVIDIA DynoSim at up to 1,200× real-time simulation speed.",
        ],
      },
    ],
  },
  {
    id: "adobe",
    company: "Adobe",
    logo: "/icons/organizations/adobe.png",
    summary:
      "Multi-agent and multimodal AI for enterprise advertising",
    keywords: ["Applied AI/ML", "Multi-Agent Systems", "Multimodal Systems"],
    roles: [
      {
        title: "Software Engineer Intern",
        dates: "May 2026 – Aug 2026",
        summary: "",
        bullets: [
          "Reduced Fortune 500 ad campaign creation to ~5 minutes by architecting a multi-agent asset search and generation workflow.",
          "Built a multimodal retrieval pipeline using transcription, Gemini extraction, and VLM filtering over 10,000+ assets and Adobe templates per client",
          "Partnered with product managers on 30+ real-world evaluation scenarios and built a harness measuring output correctness and latency.",
        ],
      },
    ],
  },
  {
    id: "prairielearn-intern",
    company: "PrairieLearn",
    logo: "/icons/organizations/prairielearn.png",
    logoFull: true,
    summary:
      "Vision-LLM autograding and assessment infrastructure for handwritten student work",
    keywords: ["Applied AI/ML", "Cloud", "Security"],
    references: [
      {
        label: "Read the arXiv paper",
        href: "https://arxiv.org/abs/2605.19043v1",
      },
      {
        label: "See the product release",
        href: "https://www.prairielearn.com/about/blog/introducing-ai-grading",
      },
    ],
    roles: [
      {
        title: "Software Engineer Intern",
        dates: "Dec 2024 – May 2026",
        summary: "",
        bullets: [
          "Led R&D of a vision-LLM system that autograded handwritten mathematical work with 99% accuracy across 10,000+ submissions; co-authored an AIED 2026 paper on the results.",
          "Built image-capture infrastructure for students to submit handwritten work from webcams, phones, and document cameras during live assessments.",
          "Productized AI grading across a platform serving 180,000+ students with concurrent batch inference and real-time, socket-streamed grading progress.",
          "Built usage-based billing and metering for AI grading, including instructor-facing cost tracking and Stripe-backed payments.",
          "Developed durable PostgreSQL-backed workflows for long-running, resumable multi-agent rubric editing and grading operations.",
        ],
      },
    ],
  },
  {
    id: "google-summer-of-code",
    company: "Google Summer of Code · Emory University",
    logo: "/icons/organizations/gsoc.png",
    summary:
      "GANs/Diffusion models augmenting Deep Neural Networks for GI tract disease diagnosis",
    keywords: ["Applied AI/ML", "Computer Vision", "Diffusion Models/GANs"],
    roles: [
      {
        title: "Research Software Developer",
        dates: "Jun 2025 – Feb 2026",
        summary: "",
        bullets: [
          "Expanded a limited proprietary gastric MRI training set by 1,600% using custom-trained conditional diffusion and GAN models.",
          "Improved UNet segmentation accuracy from 39% to 80% on held-out gastric scans through synthetic-data augmentation and hyperparameter tuning.",
        ],
      },
    ],
    link: "https://summerofcode.withgoogle.com/programs/2025/projects/QB45Mcpx",
    linkLabel: "View Project Report",
  },
  {
    id: "uiuc-research",
    company: "University of Illinois Urbana-Champaign",
    logo: "/icons/organizations/uiuc-block-i.png",
    summary: "Adversarial ML and generative computer vision research",
    keywords: ["Applied AI/ML", "Computer Vision", "Adversarial ML"],
    roles: [
      {
        title: "Undergraduate Researcher",
        dates: "2024 – 2025",
        summary: "",
        bullets: [
          "Engineered an immunization algorithm that injects imperceptible noise into audio to disrupt deepfake generation.",
          "Developed a diffusion-based computer vision model to redirect a subject’s eye gaze and head orientation.",
          "Used large vision models, diffusion models, PyTorch, OpenCV, and Weights & Biases to develop and evaluate the systems.",
        ],
      },
    ],
  },
  {
    id: "normandy",
    company: "Normandy Remodeling",
    logo: "/icons/organizations/normandy.png",
    summary:
      "Cloud-based data management and analytics platform",
    keywords: ["Full-Stack Systems", "Production Security", "Cloud"],
    roles: [
      {
        title: "Software Engineer",
        dates: "Aug 2022 – Jan 2025",
        summary: "",
        bullets: [
          "Rebuilt a legacy Microsoft Access database as a full-stack web platform managing 200,000 leads, 33,000 customers, and 9,900 projects.",
          "Built authentication and role-based access control from scratch, governing data entry, search, analytics, and administrative access across 10+ staff roles.",
        ],
      },
    ],
  },
  {
    id: "pathwayos",
    company: "Vector Solutions (PATHWAYos)",
    logo: "/icons/organizations/pathways.png",
    summary:
      "Work-based learning opportunity matching system for a 500,000+ student platform",
    keywords: ["Product Engineering", "Recommendation Systems", "Full-Stack Systems"],
    roles: [
      {
        title: "Software Engineer Intern",
        dates: "Jun 2023 – Aug 2023",
        summary: "",
        bullets: [
          "Built an opportunity matching system helping students discover relevant internships, jobs, and work-based learning experiences.",
          "Developed low-latency backend APIs matching opportunities by student preferences, location, experience, and availability.",
          "Built full-stack product features using React, TypeScript, Swift, Vapor, Fluent ORM, and MySQL.",
        ],
      },
    ],
  },
];

export const ACTIVITIES: Experience[] = [
  {
    id: "hackillinois",
    company: "HackIllinois",
    logo: "/icons/organizations/hackillinois.png",
    summary:
      "Web platform engineering for UIUC's flagship hackathon.",
    keywords: ["React & TypeScript", "Team Leadership", "Event Operations"],
    roles: [
      {
        title: "Web Team Lead",
        dates: "Jul 2025 – Mar 2026",
        summary:
          "Led a four-engineer team across the event's public, registration, logistics, and administrative systems.",
        bullets: [
          "Led a four-engineer team to ship admin, logistics, and marketing systems garnering 500,000+ page views.",
          "Shipped registration and logistics tooling for 2,000+ attendees and 50+ staff members.",
          "Coordinated with design, operations, and engineering leads throughout the event lifecycle.",
        ],
      },
    ],
    link: "https://2026.hackillinois.org",
    linkLabel: "Visit HackIllinois 2026 website",
  },
  {
    id: "reflections-projections",
    company: "Reflections Projections",
    logo: "/icons/organizations/rp.png",
    summary:
      "Sponsor and attendee tools for the Midwest's largest collegiate technology conference.",
    keywords: ["React & TypeScript", "Search UX", "Accessible UI"],
    roles: [
      {
        title: "Software Developer",
        dates: "Mar 2025 – Sep 2025",
        summary:
          "Improved sponsor resume discovery and developed interactive conference experiences.",
        bullets: [
          "Revamped the sponsor resumebook with faster search, secure export, and quick navigation across 2,000+ resumes.",
          "Developed bespoke schedule, speaker, and Q&A pages for conference attendees.",
          "Built the experiences with React, TypeScript, reusable UI components, and accessible interaction patterns.",
        ],
      },
    ],
  },
];
