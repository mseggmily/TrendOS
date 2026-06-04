import type {
  ChartPoint,
  EmergingTrend,
  LifecycleStage,
  MemeSignal,
  PlatformHeatmapCell,
  TopicGrowthRow,
  TrendItem,
} from "@/types";

export const FEATURED_TOPICS = [
  "AI Agents",
  "Vibe Coding",
  "Creator Monetization",
  "TikTok Shop",
  "Founder Branding",
  "AI Video",
] as const;

export const radarVelocityData: ChartPoint[] = [
  { label: "Mon", value: 58, secondary: 52 },
  { label: "Tue", value: 64, secondary: 54 },
  { label: "Wed", value: 71, secondary: 56 },
  { label: "Thu", value: 78, secondary: 58 },
  { label: "Fri", value: 85, secondary: 59 },
  { label: "Sat", value: 91, secondary: 60 },
  { label: "Sun", value: 94, secondary: 61 },
];

export const topicGrowthTable: TopicGrowthRow[] = [
  {
    id: "tg1",
    topic: "AI Agents",
    category: "AI / Automation",
    velocity: 96,
    growth7d: 284,
    growth30d: 412,
    mentions: 89200,
    platforms: ["X", "LinkedIn", "YouTube"],
    lifecycle: "accelerating",
  },
  {
    id: "tg2",
    topic: "Vibe Coding",
    category: "DevTools",
    velocity: 93,
    growth7d: 198,
    growth30d: 340,
    mentions: 56400,
    platforms: ["X", "TikTok", "YouTube"],
    lifecycle: "peak",
  },
  {
    id: "tg3",
    topic: "Creator Monetization",
    category: "Creator Economy",
    velocity: 88,
    growth7d: 124,
    growth30d: 218,
    mentions: 128000,
    platforms: ["TikTok", "Instagram", "YouTube"],
    lifecycle: "accelerating",
  },
  {
    id: "tg4",
    topic: "TikTok Shop",
    category: "E-commerce",
    velocity: 91,
    growth7d: 156,
    growth30d: 290,
    mentions: 245000,
    platforms: ["TikTok", "Instagram"],
    lifecycle: "peak",
  },
  {
    id: "tg5",
    topic: "Founder Branding",
    category: "B2B / Growth",
    velocity: 82,
    growth7d: 67,
    growth30d: 142,
    mentions: 34100,
    platforms: ["LinkedIn", "X"],
    lifecycle: "accelerating",
  },
  {
    id: "tg6",
    topic: "AI Video",
    category: "AI / Media",
    velocity: 89,
    growth7d: 172,
    growth30d: 305,
    mentions: 71800,
    platforms: ["TikTok", "YouTube", "Instagram"],
    lifecycle: "nascent",
  },
  {
    id: "tg7",
    topic: "PLG launch threads",
    category: "SaaS",
    velocity: 76,
    growth7d: 42,
    growth30d: 98,
    mentions: 28900,
    platforms: ["X"],
    lifecycle: "declining",
  },
  {
    id: "tg8",
    topic: "Build in public",
    category: "Startup",
    velocity: 71,
    growth7d: 18,
    growth30d: 54,
    mentions: 41200,
    platforms: ["X", "LinkedIn"],
    lifecycle: "declining",
  },
];

const platforms = ["X", "TikTok", "Instagram", "LinkedIn", "YouTube"];
const heatmapTopics = FEATURED_TOPICS;

function buildHeatmap(): PlatformHeatmapCell[] {
  const matrix: Record<string, Record<string, number>> = {
    "AI Agents": { X: 92, TikTok: 45, Instagram: 38, LinkedIn: 78, YouTube: 71 },
    "Vibe Coding": { X: 88, TikTok: 82, Instagram: 52, LinkedIn: 41, YouTube: 86 },
    "Creator Monetization": { X: 62, TikTok: 94, Instagram: 89, LinkedIn: 48, YouTube: 85 },
    "TikTok Shop": { X: 55, TikTok: 98, Instagram: 76, LinkedIn: 22, YouTube: 44 },
    "Founder Branding": { X: 74, TikTok: 38, Instagram: 55, LinkedIn: 91, YouTube: 42 },
    "AI Video": { X: 68, TikTok: 90, Instagram: 84, LinkedIn: 35, YouTube: 88 },
  };
  const cells: PlatformHeatmapCell[] = [];
  for (const topic of heatmapTopics) {
    for (const platform of platforms) {
      cells.push({
        platform,
        topic,
        intensity: matrix[topic][platform],
      });
    }
  }
  return cells;
}

export const platformHeatmap = buildHeatmap();

export const emergingTrendsRadar: EmergingTrend[] = [
  {
    id: "em1",
    topic: "AI Agents",
    tagline: "Autonomous workflows replacing manual growth ops",
    velocity: 96,
    growth: 284,
    primaryPlatform: "X",
    category: "AI",
    firstDetected: "12 days ago",
    competitorActivity: "low",
  },
  {
    id: "em2",
    topic: "Vibe Coding",
    tagline: "Aesthetic dev content driving tool discovery",
    velocity: 93,
    growth: 198,
    primaryPlatform: "TikTok",
    category: "DevTools",
    firstDetected: "8 days ago",
    competitorActivity: "medium",
  },
  {
    id: "em3",
    topic: "AI Video",
    tagline: "Generative video ads at sub-$1 CPM equivalents",
    velocity: 89,
    growth: 172,
    primaryPlatform: "TikTok",
    category: "AI / Media",
    firstDetected: "5 days ago",
    competitorActivity: "low",
  },
  {
    id: "em4",
    topic: "Creator Monetization",
    tagline: "Platforms racing to retain top creators with rev-share",
    velocity: 88,
    growth: 124,
    primaryPlatform: "YouTube",
    category: "Creator",
    firstDetected: "21 days ago",
    competitorActivity: "high",
  },
];

export const memeSignals: MemeSignal[] = [
  {
    id: "m1",
    name: "“Just shipped” iceberg",
    format: "Carousel / thread",
    platform: "X",
    viralScore: 94,
    growth24h: 340,
    relatedTrend: "Vibe Coding",
    sample: "Tier list of things founders say vs. what they mean",
  },
  {
    id: "m2",
    name: "AI agent as coworker",
    format: "Skits / reels",
    platform: "TikTok",
    viralScore: 91,
    growth24h: 280,
    relatedTrend: "AI Agents",
    sample: "POV: your Slack has 12 autonomous agents",
  },
  {
    id: "m3",
    name: "TikTok Shop haul",
    format: "UGC unboxing",
    platform: "TikTok",
    viralScore: 88,
    growth24h: 195,
    relatedTrend: "TikTok Shop",
    sample: "$12 gadget → 2M views → sold out in 4h",
  },
  {
    id: "m4",
    name: "Founder face cam",
    format: "Talking head",
    platform: "LinkedIn",
    viralScore: 76,
    growth24h: 89,
    relatedTrend: "Founder Branding",
    sample: "Raw camera, no polish — authenticity > production",
  },
  {
    id: "m5",
    name: "AI video “before/after”",
    format: "Split screen",
    platform: "Instagram",
    viralScore: 85,
    growth24h: 156,
    relatedTrend: "AI Video",
    sample: "iPhone clip → studio ad in 60 seconds",
  },
];

export const lifecycleStages: LifecycleStage[] = [
  {
    stage: "nascent",
    label: "Nascent",
    count: 2,
    trends: ["AI Video", "Agentic SEO"],
  },
  {
    stage: "accelerating",
    label: "Accelerating",
    count: 3,
    trends: ["AI Agents", "Creator Monetization", "Founder Branding"],
  },
  {
    stage: "peak",
    label: "Peak",
    count: 2,
    trends: ["Vibe Coding", "TikTok Shop"],
  },
  {
    stage: "declining",
    label: "Declining",
    count: 2,
    trends: ["PLG threads", "Build in public"],
  },
];

export const lifecycleTimeline: ChartPoint[] = [
  { label: "W-6", value: 12 },
  { label: "W-5", value: 18 },
  { label: "W-4", value: 28 },
  { label: "W-3", value: 45 },
  { label: "W-2", value: 62 },
  { label: "W-1", value: 78 },
  { label: "Now", value: 94 },
];

// Legacy exports
export const trendVelocityData = radarVelocityData;
export const categoryTrends: ChartPoint[] = [
  { label: "AI", value: 95 },
  { label: "Creator", value: 88 },
  { label: "E-com", value: 84 },
  { label: "DevTools", value: 82 },
  { label: "B2B", value: 76 },
];
export const emergingTrends: TrendItem[] = emergingTrendsRadar.map((t) => ({
  id: t.id,
  topic: t.topic,
  platform: t.primaryPlatform,
  velocity: t.velocity,
  sentiment: "positive" as const,
  mentions: topicGrowthTable.find((r) => r.topic === t.topic)?.mentions ?? 50000,
  category: t.category,
}));
