export type Job = {
  id: string;
  title: string;
  team: "Engineering" | "Research" | "Operations";
  location: string;
  type: "Full-time" | "Internship";
  description: string;
};

export const jobs: Job[] = [
  {
    id: "platform-engineer",
    title: "Platform Engineer",
    team: "Engineering",
    location: "New York / Remote (US)",
    type: "Full-time",
    description:
      "Build developer platforms, observability, and reliability tooling that scales with the firm.",
  },
  {
    id: "frontend-engineer",
    title: "Frontend Engineer (Web)",
    team: "Engineering",
    location: "New York / Remote (US)",
    type: "Full-time",
    description:
      "Deliver premium UI with rigorous accessibility, performance, and design systems discipline.",
  },
  {
    id: "market-structure-analyst",
    title: "Market Structure Analyst",
    team: "Research",
    location: "Chicago / Hybrid",
    type: "Full-time",
    description:
      "Analyze liquidity, venue microstructure, and propose actionable improvements in execution quality.",
  },
  {
    id: "sre-intern",
    title: "SRE Intern",
    team: "Operations",
    location: "Austin / On-site",
    type: "Internship",
    description:
      "Partner with engineers to improve monitoring, runbooks, and incident response workflows.",
  },
];

