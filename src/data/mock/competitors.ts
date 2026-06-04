import type { ChartPoint, Competitor } from "@/types";

export const competitors: Competitor[] = [
  {
    id: "c1",
    name: "Nova Analytics",
    handle: "@novaanalytics",
    followers: 48200,
    engagementRate: 3.2,
    postFrequency: "4.2 / week",
    sentiment: 72,
    recentMove: "Launched free tier comparison thread",
  },
  {
    id: "c2",
    name: "Pulse Metrics",
    handle: "@pulsemetrics",
    followers: 31800,
    engagementRate: 4.8,
    postFrequency: "6.1 / week",
    sentiment: 81,
    recentMove: "Hired creator for product demos",
  },
  {
    id: "c3",
    name: "SignalStack",
    handle: "@signalstack",
    followers: 22400,
    engagementRate: 2.9,
    postFrequency: "2.8 / week",
    sentiment: 65,
    recentMove: "Paused LinkedIn ads, doubled X output",
  },
];

export const shareOfVoiceData: ChartPoint[] = [
  { label: "You", value: 34 },
  { label: "Nova", value: 28 },
  { label: "Pulse", value: 22 },
  { label: "SignalStack", value: 16 },
];

export const competitorEngagementTrend: ChartPoint[] = [
  { label: "W1", value: 3.1, secondary: 2.8 },
  { label: "W2", value: 3.4, secondary: 3.0 },
  { label: "W3", value: 3.2, secondary: 3.5 },
  { label: "W4", value: 3.8, secondary: 3.3 },
  { label: "W5", value: 4.1, secondary: 3.6 },
  { label: "W6", value: 4.0, secondary: 4.2 },
];
