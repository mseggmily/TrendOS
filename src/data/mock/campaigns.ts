import type { Campaign, ChartPoint } from "@/types";

export const campaigns: Campaign[] = [
  {
    id: "cp1",
    name: "Spring Launch",
    status: "active",
    startDate: "May 1",
    endDate: "May 31",
    channels: ["X", "LinkedIn", "Email"],
    budget: 12000,
    reach: 840000,
  },
  {
    id: "cp2",
    name: "Influencer Sprint",
    status: "planning",
    startDate: "Jun 3",
    endDate: "Jun 17",
    channels: ["TikTok", "Instagram"],
    budget: 8000,
    reach: 0,
  },
  {
    id: "cp3",
    name: "Webinar Series",
    status: "active",
    startDate: "Apr 15",
    endDate: "Jun 30",
    channels: ["LinkedIn", "YouTube"],
    budget: 5000,
    reach: 320000,
  },
];

export const campaignFunnelData: ChartPoint[] = [
  { label: "Awareness", value: 100 },
  { label: "Interest", value: 68 },
  { label: "Consideration", value: 42 },
  { label: "Conversion", value: 18 },
];
