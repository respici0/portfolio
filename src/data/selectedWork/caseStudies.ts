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

 const CAMPAIGN_MANAGEMENT_DASHBOARD: CaseStudy = {
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

 const PORTFOLIO_CASE_STUDY: CaseStudy = {
  meta: {
    role: {
      value: "Frontend Engineer",
      sub: "developer + designer",
    },
    stack: {
      value: "Astro + TypeScript",
      sub: "Vercel · vanilla JS & CSS",
    },
    outcome: {
      value: "Portfolio that showcases me",
      sub: "personal + professional",
    },
  },
  problem: [
    "I was a developer with a full-time job, husband and father to a now toddler. I didn't have a portfolio to show who I am, as a person or as an engineer.",
    "I wanted to learn Astro and get back to fundamentals. No frameworks, no CSS libraries, just vanilla JS and vanilla CSS. Astro was the right fit for a fast, responsive site with minimal JavaScript.",
    "But time was limited. I didn't want to spend weeks figuring out UI and UX from scratch, so I brought in Claude as a design collaborator to close that gap without slowing me down.",
  ],
  beforeAfter: {
    before: [
      "No portfolio at all",
      "Generic minimal developer aesthetic",
      "\"Senior frontend engineer who ships\"",
      "Card grid for projects?",
      "No reflection in // how i think",
    ],
    after: [
      "A full person, not a stack list",
      "Minimalistic + personal aesthetic",
      "Showcase in DevX and UX philosophy",
      "Grouped work by employer + personal",
      "8 statements in // how i think",
    ],
  },
  hardParts: [
    {
      title: "Getting back to the fundamentals",
      description:
        "I've been writing Svelte and React for years. Going back to vanilla JS took some adjustment. Event delegation and manual DOM management are second nature once you're back in it, but that first week required unlearning some habits (and picking up new ones).",
    },
    {
      title: "Vercel vs. SST/AWS + GitHub Actions",
      description:
        "I wanted an easy way to deploy my portfolio with no hassle and built-in observability. A few factors pointed me toward Vercel. It offers zero-config deployment and observability out of the box, and it's free for one hobby project, which was the deciding factor. The alternative was SST with AWS and GitHub Actions. SST does make it easier to spin up S3, Route 53, and CloudFront, but setup still takes time and I would have needed to wire up observability separately in AWS. If Vercel wasn't free, I would have put in the extra time to go that route.",
    },
    {
      title: "Claude doesn't know Astro",
      description:
        "Claude generated patterns that worked in other frameworks but weren't idiomatic Astro. The most common issue showed up while building the matrix theme. It kept attaching onclick handlers and global functions directly to buttons instead of using event delegation with addEventListener, which is the approach Astro's documentation recommends. It's simpler, cleaner, and more in line with how Astro handles client-side interactivity. I caught these, but it was a reminder that AI output still needs an engineer's eye.",
    },
    {
      title: "Mobile-first design thinking",
      description:
        "Designing mobile-first is always a challenge. Getting the warmth, contrast, text sizes, grid layout right across screen sizes took more iteration than expected.",
    },
  ],
  outcome: {
    heading: "A portfolio that is uniquely me",
    body: "Minimal design, no CSS libraries, responsive across devices, and barely any JavaScript. The fundamentals are on display. More importantly, it's a portfolio I can talk about confidently, because every decision in it has a reason, and that reason is mine.",
  },
  thoughts: [
    "If I could do it again I'd build a backend to serve the selected work data. I wanted to ship fast so I hardcoded it for now, but the data schema is already defined. When I find the time it won't be a big lift.",
    "This isn't my first time using AI to speed up production. I've used it professionally, especially in the later half of my time at Fetch. What was different here was using Claude specifically as a UI/UX collaborator. I'd share what I was thinking, push back on ideas I didn't like, and Claude would take my direction and elevate it. It filled in my knowledge gaps in design without taking the wheel.",
    "The Matrix easter egg was the one place I leaned on Claude for actual code generation. I have no issue with that, but I did have to push back on the logic in a few spots where it was overcomplicating things. I also used Claude to sanity check my own functions and talk through decisions. That part felt natural.",
    "The experience was genuinely fun. It felt less like prompting a tool and more like working with someone who happened to know a lot about design.",
  ],
};

export const caseStudies = {
  "fetch-rewards-001": CAMPAIGN_MANAGEMENT_DASHBOARD,
  "portfolio": PORTFOLIO_CASE_STUDY,
};