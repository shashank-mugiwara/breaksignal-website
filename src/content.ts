/**
 * src/content.ts
 * Single source of truth for site content.
 * Every string is verified against claims C1-C21 in docs/ash-ck1w/claims.md
 * and amended by corrections.md and review_report.md.
 */

export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface OfferItem {
  readonly id: string;
  readonly title: string;
  readonly summary: string;
  readonly points: readonly string[];
}

export interface PipelineStep {
  readonly stepNumber: number;
  readonly title: string;
  readonly description: string;
}

export interface SafeguardItem {
  readonly text: string;
}

export interface AgentRoleItem {
  readonly role: string;
  readonly description: string;
}

export interface ProductFact {
  readonly label: string;
  readonly value: string;
}

export interface ProductCard {
  readonly id: string;
  readonly name: string;
  readonly statusBadge: string;
  readonly summary: string;
  readonly facts: readonly ProductFact[];
}

export interface EngagementStep {
  readonly stepNumber: number;
  readonly title: string;
  readonly description: string;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export const SITE_METADATA = {
  title: "BreakSignal: software built by AI agents, reviewed by people",
  description:
    "BreakSignal builds software with AI agents running inside our own harness, reviewed and approved by people. Systems engineering for finance, banking, and insurance.",
  canonical: "https://breaksignal.ai/",
  email: "hello@breaksignal.com",
} as const;

export const NAV_LINKS: readonly NavItem[] = [
  { label: "What we do", href: "#what-we-do" },
  { label: "How we build", href: "#how-we-build" },
  { label: "Products", href: "#products" },
  { label: "Engagements", href: "#engagements" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const HERO_CONTENT = {
  headline: "Software built by AI agents, reviewed by people.",
  lede: "BreakSignal builds software with AI agents running inside its own harness, with people reviewing and approving the work before delivery. The agency works for small insurance intermediaries, third-party administrators (TPAs), small NBFCs and fintechs.",
  primaryAction: { label: "How we build", href: "#how-we-build" },
  secondaryAction: { label: "Contact", href: "mailto:hello@breaksignal.com" },
} as const;

export const WHAT_WE_DO_CONTENT = {
  heading: "What we do",
  lede: "One company operating a single harness across three distinct uses: our own software products, hosted application creation through AgentManage, and a software agency.",
  offers: [
    {
      id: "own-products",
      title: "Own products",
      summary:
        "We design, build, and operate independent software products, such as our iOS health application AtomicSync.",
      points: [
        "Software engineered and maintained in-house using our own harness.",
        "Mobile health software on iOS with an Apple Watch companion.",
      ],
    },
    {
      id: "hosted-creation",
      title: "Hosted creation",
      summary:
        "Users create applications on BreakSignal infrastructure through AgentManage.",
      points: [
        "AgentManage is the path for hosted creation of new applications. It is in development.",
        "It is also designed to run and maintain existing applications, including ones built elsewhere.",
      ],
    },
    {
      id: "software-agency",
      title: "Software agency",
      summary:
        "We build software systems for finance, banking, and insurance organizations based on client requirements.",
      points: [
        "Engineering focused on finance, banking and insurance.",
        "Work begins with client requirements, followed by delivery into client infrastructure or hosted operation.",
      ],
    },
  ],
} as const;

export const HOW_WE_BUILD_CONTENT = {
  heading: "How we build",
  lede: "Our engineering pipeline pairs AI-assisted execution inside our own harness with a human review gate before any work is delivered.",
  pipeline: [
    {
      stepNumber: 1,
      title: "Requirements definition",
      description: "Requirements come directly from the client or product owner.",
    },
    {
      stepNumber: 2,
      title: "Task decomposition",
      description:
        "The Chief of Staff role tracks work as tasks (beads) and assigns each task to an agent.",
    },
    {
      stepNumber: 3,
      title: "Harness execution",
      description: "AI agents build software inside our harness.",
    },
    {
      stepNumber: 4,
      title: "Automated checks",
      description:
        "AgentManage is designed so that every change carries a diff summary, test output, a risk class and a rollback plan.",
    },
    {
      stepNumber: 5,
      title: "Human review",
      description:
        "A person reviews and approves the work before it is delivered; the process is built around a human gate.",
    },
    {
      stepNumber: 6,
      title: "Delivery and hand-over",
      description:
        "BreakSignal delivers the software into your infrastructure or transitions it to hosted operation.",
    },
  ],
  safeguardsHeading: "How AgentManage is designed",
  safeguards: [
    {
      text: "Designed so that agents never hold production deploy credentials (a separate deployer executes an approved change).",
    },
    {
      text: "Designed so that the Gatekeeper auto-approves only low-risk changes with green tests and a recorded rollback, never schema, access-control, secrets or customer-data changes.",
    },
  ],
} as const;

export const PRODUCTS_CONTENT = {
  heading: "Products",
  lede: "We build and operate software products using our agent harness.",
  atomicSync: {
    id: "atomicsync",
    name: "AtomicSync",
    statusBadge: "Release pending",
    summary:
      'AtomicSync is BreakSignal\'s own product: an iOS health app with the App Store name "Atomic Sync: Digital Twin". A digital twin (avatar) shows your daily state and evolves as you do. An Apple Watch companion shows a glance of the avatar.',
    facts: [
      {
        label: "Core experience",
        value: "A digital twin avatar that shows your daily state and evolves as you do.",
      },
      {
        label: "Watch companion",
        value: "An Apple Watch companion app that displays a glance of the avatar.",
      },
      { label: "Availability", value: "Not yet on the App Store." },
    ],
  },
  agentManage: {
    id: "agentmanage",
    name: "AgentManage",
    statusBadge: "In development",
    summary:
      "AgentManage is designed to run and maintain applications (run, maintain, fix, small enhancements), including applications built elsewhere, and is built to provide the path for hosted creation of new apps. It is in development and not generally available.",
    rolesCaption: "Five fixed roles. Customers cannot define their own agents.",
    roles: [
      {
        role: "Chief of Staff",
        description: "Tracks work as tasks (beads) and assigns each task to an agent.",
      },
      {
        role: "Engineer",
        description: "Fixed role.",
      },
      {
        role: "Watchdog",
        description: "Fixed role.",
      },
      {
        role: "Support",
        description: "Fixed role.",
      },
      {
        role: "Gatekeeper",
        description:
          "Auto-approves only low-risk changes with green tests and a recorded rollback, never schema, access-control, secrets or customer-data changes.",
      },
    ],
    facts: [
      {
        label: "Audit and isolation",
        value:
          "The control plane is designed to keep an append-only audit log per organisation and isolate each organisation's data with database row-level security.",
      },
      {
        label: "Deployment options",
        value:
          "Designed to be offered two ways: managed by BreakSignal in its cloud, or installed on-prem in the customer's own AWS account or servers (with infrastructure billed to the customer).",
      },
      {
        label: "Current availability",
        value: "In development and not generally available.",
      },
    ],
  },
} as const;

export const ENGAGEMENTS_CONTENT = {
  heading: "Engagements",
  lede: "Software for regulated finance, banking and insurance organisations, built to your requirements.",
  audience:
    "Our agency builds software for small insurance intermediaries, third-party administrators (TPAs), small NBFCs, and fintechs.",
  pipeline: [
    {
      stepNumber: 1,
      title: "Introductory conversation",
      description:
        "Every engagement starts with a conversation; there is no public self-serve checkout.",
    },
    {
      stepNumber: 2,
      title: "Requirements and boundary definition",
      description:
        "Requirements come from the client. Mobile (iOS) apps are outside the agency's scope for client work.",
    },
    {
      stepNumber: 3,
      title: "AI-assisted build with human review",
      description:
        "BreakSignal builds the software using AI agents inside its own harness, with a person reviewing and approving the work before it is delivered.",
    },
    {
      stepNumber: 4,
      title: "Cloud delivery",
      description:
        "Default delivery is into the client's own cloud in an India region, with limited vendor access.",
    },
    {
      stepNumber: 5,
      title: "Hand-over or hosted operation",
      description:
        "BreakSignal hands the software over to the client, or hosts and maintains it after a compliance audit and at the client's request. Ongoing maintenance can be delivered through AgentManage.",
    },
  ],
  regulatoryNote:
    "RBI, IRDAI, CERT-In, and DPDP rules put duties on vendors that host or maintain regulated finance data. These rules shape our default of delivering software into the client's own cloud in an India region rather than operating a shared host. BreakSignal makes no compliance, certification, or audit claims on this page.",
  pricingNote: "We do not publish pricing yet.",
} as const;

export const FAQ_CONTENT = {
  heading: "Frequently asked questions",
  items: [
    {
      question: "Who reviews and approves the work?",
      answer:
        "A person reviews and approves work before it is delivered. The engineering process is built around a human gate.",
    },
    {
      question: "Where does client application data live?",
      answer:
        "Default delivery is into the client's own cloud in an India region, with limited vendor access.",
    },
    {
      question: "Does BreakSignal host client applications?",
      answer:
        "BreakSignal-hosted operation is provided only after a compliance audit and at the client's explicit request. Default delivery is into your own cloud.",
    },
    {
      question: "Do you build mobile applications for agency clients?",
      answer: "No. Mobile (iOS) apps are outside the agency's scope for client work.",
    },
    {
      question: "What does an agency engagement cost?",
      answer:
        "We do not publish pricing yet. Every engagement begins with a conversation.",
    },
    {
      question: "Is AtomicSync available on the App Store?",
      answer: "AtomicSync is not yet on the App Store. Release pending.",
    },
    {
      question: "Can our team use AgentManage today?",
      answer: "AgentManage is in development and not generally available.",
    },
    {
      question: "Can I sign up or purchase services online?",
      answer:
        "There is no public self-serve checkout. Every engagement starts with a conversation.",
    },
    {
      question: "Is BreakSignal compliant or certified under financial regulations?",
      answer:
        "We make no compliance, certification, or audit claims on this page. RBI, IRDAI, CERT-In, and DPDP rules put duties on vendors that host or maintain regulated finance data, and these rules shape our default of delivering into your own cloud.",
    },
  ],
} as const;

export const CONTACT_CONTENT = {
  heading: "Contact",
  lede: "Start a conversation about your software requirements.",
  email: "hello@breaksignal.com",
  advice:
    "When writing, describe the problem you need solved, your financial or operational domain, and where the software should run (in your own cloud infrastructure or hosted).",
} as const;

export const FOOTER_CONTENT = {
  wordmark: "BreakSignal",
  email: "hello@breaksignal.com",
  privacyStatement:
    "This site has no analytics, trackers or forms. It stores one thing in your browser, your light or dark choice.",
} as const;
