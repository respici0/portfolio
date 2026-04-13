import type { CaseStudy } from './caseStudies';

export type Project = {
  projectId: string;
  title: string;
  description: string;
  links: {
    type: "case study" | "case study in progress" | "live" | "github";
    url?: string;
  }[];
  tech: string[];
};

export type Company = {
  tag: "Fetch Rewards" | "Tensoriot" | "Eleveight" | "Personal Projects";
  year?: string;
  projects: Project[];

};



export const companies: Company[] = [
  {
    tag: "Fetch Rewards",
    year: "2022 - 2025",
    projects: [
      {
        projectId: "fetch-rewards-001",
        title: "Campaign Management Dashboard",
        description:
          "Owned frontend architecture from scratch. Turned a multi-department campaign setup into a self-service workflow which dropped launch times from days to minutes.",
        links: [
          {
            type: "case study",
          },
        ],
        tech: [
          "sveltekit",
          "typescript",
          "vite",
          "vitest",
          "tailwind",
          "shadcn",
          "rest api",
          "connect rpc",
          "protobuf",
          "okta auth",
          "sst",
          "aws",
        ],
      },
      {
        projectId: "fetch-rewards-002",
        title: "Self-serve Dashboard Tooling",
        description:
          "Built a workflow enabling non-technical stakeholders to create, deploy, and maintain dashboards independently. Reducing recurring engineering involvement.",
        links: [
          {
            type: "case study in progress",
          },
        ],
        tech: ["npm", "internal template tool", "sst", "aws", "claude"],
      },
    ],
  },
  {
    tag: "Tensoriot",
    year: "2019 - 2022",
    projects: [
      {
        projectId: "tensoriot-001",
        title: "Real-time Translator",
        description:
          "Designed and built a translation tool for a Canadian client — French Canadian to English and back, powered by AWS Translate.",
        links: [
          {
            type: "case study in progress",
          },
        ],
        tech: ["react", "typescript", "websockets", "mui", "aws"],
      },
      {
        projectId: "tensoriot-002",
        title: "Smart Store Analytics Dashboard",
        description:
          "Drove the frontend for a smart store analytics dashboard that surfaced consumer dwell time (heat maps) and purchase patterns (charts) across store sections.",
        links: [
          {
            type: "case study in progress",
          },
        ],
        tech: [
          "react",
          "recharts",
          "konva.js",
          "rest api",
          "websockets",
          "aws",
        ],
      },
    ],
  },
  {
    tag: "Eleveight",
    year: "2018 - 2019",
    projects: [
      {
        projectId: "eleveight-001",
        title: "Case management platform",
        description:
          "Built a case management platform serving students, job seekers, schools, and social service organizations.",
        links: [
          {
            type: "case study in progress",
          },
        ],
        tech: ["react", "typescript", "websockets", "mui", "rest api", "aws"],
      },
    ],
  },
  {
    tag: "Personal Projects",
    projects: [
      {
        projectId: "portfolio",
        title: "respicio.dev",
        description:
         "Although I have an eye for design, I'm not a UI/UX designer, so the collaboration with Claude on the design process (and some technical decisions) is worth reflecting on.",
        links: [
          {
            type: "case study in progress",
          },
          {
            type: "github",
            url: "https://github.com/respici0/portfolio",
          },
        ],
        tech: [
          "astro",
          "typescript",
          "vanilla js",
          "vanilla css",
          "vercel",
          "claude (ui/ux designer)",
        ],
      },
      {
        projectId: "nextsteps",
        title: "Next Steps",
        description:
          "Full-stack with a friend. Auth, data layer, and UI built from the ground up. Features I wanted for the job search.",
        links: [
          {
            type: "case study in progress",
          },
          {
            type: "live",
            url: "https://next-steps-amber.vercel.app",
          },
          {
            type: "github",
            url: "https://github.com/respici0/next-steps",
          },
        ],
        tech: [
          "next.js",
          "typescript",
          "tailwind",
          "server actions",
          "better auth",
          "mongodb",
          "mongoose",
          "vercel",
        ],
      },
    ],
  },
];