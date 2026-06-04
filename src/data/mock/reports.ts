import type { Report } from "@/types";

export const reports: Report[] = [
  {
    id: "r1",
    title: "Weekly Marketing Summary",
    type: "weekly",
    createdAt: "May 28, 2026",
    status: "ready",
    pages: 12,
  },
  {
    id: "r2",
    title: "Spring Launch — Mid-campaign",
    type: "campaign",
    createdAt: "May 26, 2026",
    status: "ready",
    pages: 18,
  },
  {
    id: "r3",
    title: "Competitive Landscape Q2",
    type: "competitive",
    createdAt: "May 24, 2026",
    status: "ready",
    pages: 24,
  },
  {
    id: "r4",
    title: "Influencer Sprint — Pre-launch",
    type: "campaign",
    createdAt: "Generating…",
    status: "generating",
    pages: 0,
  },
];
