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
    description: string;
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
    "Campaign managers at Fetch were building and launching campaigns manually — no dedicated tooling, no shared process. Work lived in spreadsheets, handoffs were fragile, and every launch took days of coordination.",
    "This wasn't a tooling problem waiting to be solved. It was a business constraint actively slowing growth.",
  ],
  beforeAfter: {
    before: [
      "Manual data entry across spreadsheets",
      "Fragile handoffs between teams",
      "Days to launch a single campaign",
      "No audit trail or history",
    ],
    after: [
      "Guided multi-step campaign builder",
      "Single source of truth for all campaigns",
      "Minutes to launch, zero regressions",
      "Full history and status visibility",
    ],
  },
  screenshot: {
    caption: "redacted screenshot",
    description: "campaign builder — step 2 of 4\ndetails blurred for confidentiality",
  },
  hardParts: [
    {
      title: "Form state that actually held together",
      description:
        "Campaign creation was a multi-step flow with deeply interdependent fields — change the campaign type on step one and half of steps two and three needed to adapt. Getting that state model right without leaking complexity into the UI took more care than anything else on this project.",
    },
    {
      title: "Shaping the API, not just consuming it",
      description:
        "There was no existing backend to build against. I worked closely with the backend engineer to define the contracts — advocating for shapes that made the UI straightforward rather than adapting to whatever was easiest server-side. That collaboration made the difference between a clean frontend and a messy one.",
    },
    {
      title: "No prior art to lean on",
      description:
        "Nothing like this existed internally. Every architectural decision was a first draft — component structure, data flow, error handling patterns. I kept it conservative: fewer abstractions, more readable code. The next engineer who touches it should feel relief, not dread.",
    },
  ],
  outcome: {
    heading: "Campaign launch time went from days to minutes. The tool is still in use.",
    body: "No regressions at go-live. The campaign managers who used it stopped asking engineering for help with every launch — which was the whole point.",
  },
  thoughts: [
    "If I were starting over, I'd push harder for a design system earlier. We made consistent UI decisions, but they lived in our heads rather than in shared components — which cost time during handoffs.",
    "The protobuf contract process was painful at first but ended up being one of the best parts of the project. Having a typed contract between frontend and backend caught issues before they became bugs.",
    "I underestimated how much the product would evolve during development. Building flexibility into the state model upfront would have saved several rounds of refactoring.",
  ],
};

export const caseStudies = {
  "fetch-rewards-001": CAMPAIGN_MANAGEMENT_DASHBOARD,
};