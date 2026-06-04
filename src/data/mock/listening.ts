import type { ChartPoint, Mention } from "@/types";

export const mentions: Mention[] = [
  {
    id: "m1",
    author: "@startupfan",
    platform: "X",
    content: "TrendOS war room is exactly what our marketing team needed. Clean UI.",
    sentiment: "positive",
    reach: 4200,
    timestamp: "8m ago",
  },
  {
    id: "m2",
    author: "@growthlead",
    platform: "LinkedIn",
    content: "Comparing social listening tools — anyone using TrendOS for competitor tracking?",
    sentiment: "neutral",
    reach: 8900,
    timestamp: "34m ago",
  },
  {
    id: "m3",
    author: "@skepticdev",
    platform: "X",
    content: "Another dashboard tool? Show me the signal, not more charts.",
    sentiment: "negative",
    reach: 1200,
    timestamp: "1h ago",
  },
];

export const sentimentOverTime: ChartPoint[] = [
  { label: "Mon", value: 68, secondary: 22 },
  { label: "Tue", value: 72, secondary: 18 },
  { label: "Wed", value: 65, secondary: 25 },
  { label: "Thu", value: 78, secondary: 14 },
  { label: "Fri", value: 81, secondary: 12 },
  { label: "Sat", value: 74, secondary: 16 },
  { label: "Sun", value: 76, secondary: 15 },
];

export const keywordVolume: ChartPoint[] = [
  { label: "brand", value: 420 },
  { label: "product", value: 280 },
  { label: "competitor", value: 190 },
  { label: "pricing", value: 145 },
  { label: "support", value: 98 },
];
