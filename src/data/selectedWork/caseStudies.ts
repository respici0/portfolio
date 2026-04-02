export type CaseStudy = {
  meta: {
    role: { value: string; sub: string };
    stack: { value: string; sub: string };
    outcome: { value: string; sub: string };
  };
  problem: string[];
  beforeAfter: {
    before: string[];
    after: string[];
  };
  screenshot?: {
    caption: string;
    description: string;
  };
  hardParts: {
    title: string;
    description: string | string[];
  }[];
  outcome: {
    heading: string;
    body: string;
  };
  thoughts?: string[];
};

export const CAMPAIGN_MANAGEMENT_DASHBOARD: CaseStudy = {
  meta: {
    role: { value: "Frontend engineer", sub: "sole frontend owner" },
    stack: { value: "SvelteKit + TypeScript", sub: "connectrpc · protobuf" },
    outcome: { value: "Days → minutes", sub: "campaign launch time" },
  },
  problem: [
    "Multiple departments at Fetch were building and launching campaigns manually with no dedicated tooling and no source of truth. The process lived in documents, handoffs were brittle, and every launch took days of coordination.",
    "This wasn't a tooling problem waiting to be solved. It was a business constraint actively slowing growth.",
  ],
  beforeAfter: {
    before: [
      "Workflow lived in multiple documents",
      "Fragile handoffs between teams",
      "Days to launch a single campaign",
      "No audit trail or history",
    ],
    after: [
      "Guided multi-step campaign builder",
      "Single source of truth for all campaigns",
      "Minutes to launch",
      "Full history and status visibility",
    ],
  },
  screenshot: {
    caption: "no screenshot provided",
    description: "for confidentiality",
  },
  hardParts: [
    {
      title: "Form state",
      description:
        "Campaign creation was a multi-step flow with interdependent fields. Change the campaign type and the next two or three fields needed to adapt. Getting that state model right without leaking complexity into the UI took more care than anything else on this project.",
    },
    {
      title: "Shaping the API, not just consuming it",
      description:
        ["There was no existing backend to build against. I worked with the backend engineers to define the contracts early, and it was a genuine collaboration. I pushed for shapes that made the UI straightforward. They pushed back where things weren't feasible. That back and forth made the difference between a clean frontend and a messy one.", "We started with REST, but toward the end of the project we migrated to gRPC on the backend and I adopted ConnectRPC on the frontend. Going contract first made the integration cleaner and gave both sides a shared source of truth to build against."],
    },
    {
      title: "I lived in the ambiguity",
      description:
       "Nothing like this existed internally. No designs to lean on. Every decision was a first draft. Component structure, data flow, error handling patterns. There were multiple component libraries in play, none fully built out. Consistency suffered and became a moving target. Scope grew after the fact. Components that weren't built for it ended up carrying business logic they shouldn't have.",
    },
  ],
  outcome: {
    heading: "Campaign launch time went from days to minutes.",
    body: "It collapsed a multi-department process down to a single campaign manager, reduced manual errors, and gave the team visibility through logging. No more pulling in engineering for every launch. The tool is still in use.",
  },
  thoughts: [
    "If I were starting over, I'd push harder for a design system earlier. We never landed on a shared component library, so I built most components from scratch. It added friction, but it kept the UI consistent on my terms.",
    "Switching to protobuf was painful at first but ended up being one of the best parts of the project. Having a typed contract between frontend and backend caught issues before they became bugs.",
    "I underestimated how much the product would evolve during development. Building flexibility into the components and state models would have saved several rounds of refactoring.",
  ],
};

export const caseStudies = {
  "fetch-rewards-001": CAMPAIGN_MANAGEMENT_DASHBOARD,
};