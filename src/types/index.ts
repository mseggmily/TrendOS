export type MetricTrend = "up" | "down" | "neutral";

export type StatMetric = {
  id: string;
  label: string;
  value: string | number;
  change?: number;
  trend?: MetricTrend;
  helperText?: string;
  icon?: string;
  accent?: "violet" | "emerald" | "amber" | "sky" | "rose" | "orange";
};

export type TrendingTopicRow = {
  id: string;
  rank: number;
  topic: string;
  platform: string;
  category: string;
  velocity: number;
  growth: number;
  mentions: number;
  sentiment: "positive" | "neutral" | "negative";
  opportunity: "high" | "medium" | "low";
};

export type CompetitorAlert = {
  id: string;
  competitor: string;
  severity: "critical" | "high" | "medium";
  headline: string;
  detail: string;
  timestamp: string;
  platform: string;
};

export type AIInsight = {
  id: string;
  priority: "urgent" | "high" | "medium";
  title: string;
  summary: string;
  impact: string;
  action: string;
};

export type ExecutiveInsightCategory =
  | "content"
  | "platform"
  | "competitive"
  | "trends"
  | "campaign";

export type ExecutiveInsight = {
  id: string;
  headline: string;
  category: ExecutiveInsightCategory;
  analysis: string;
  recommendation: string;
  confidence: number;
  dataSource: string;
  metricLabel?: string;
  metricValue?: string;
};

export type ExecutiveBriefing = {
  generatedAt: string;
  period: string;
  signalCount: number;
  summary: string;
  insights: ExecutiveInsight[];
};

export type CampaignActivityItem = {
  id: string;
  campaign: string;
  event: string;
  metric?: string;
  delta?: string;
  timestamp: string;
  status: "milestone" | "update" | "warning";
};

export type PlatformMetric = {
  platform: string;
  reach: number;
  engagement: number;
  growth: number;
};

export type ChartPoint = {
  label: string;
  value: number;
  secondary?: number;
};

export type TrendItem = {
  id: string;
  topic: string;
  platform: string;
  velocity: number;
  sentiment: "positive" | "neutral" | "negative";
  mentions: number;
  category: string;
};

export type TopicGrowthRow = {
  id: string;
  topic: string;
  category: string;
  velocity: number;
  growth7d: number;
  growth30d: number;
  mentions: number;
  platforms: string[];
  lifecycle: "nascent" | "accelerating" | "peak" | "declining";
};

export type PlatformHeatmapCell = {
  platform: string;
  topic: string;
  intensity: number;
};

export type EmergingTrend = {
  id: string;
  topic: string;
  tagline: string;
  velocity: number;
  growth: number;
  primaryPlatform: string;
  category: string;
  firstDetected: string;
  competitorActivity: "low" | "medium" | "high";
};

export type MemeSignal = {
  id: string;
  name: string;
  format: string;
  platform: string;
  viralScore: number;
  growth24h: number;
  relatedTrend: string;
  sample: string;
};

export type LifecycleStage = {
  stage: "nascent" | "accelerating" | "peak" | "declining";
  label: string;
  count: number;
  trends: string[];
};

export type Competitor = {
  id: string;
  name: string;
  handle: string;
  followers: number;
  engagementRate: number;
  postFrequency: string;
  sentiment: number;
  recentMove: string;
};

export type ContentDraft = {
  id: string;
  title: string;
  platform: string;
  status: "draft" | "review" | "scheduled" | "published";
  updatedAt: string;
  performanceScore?: number;
};

export type BrandVoiceId =
  | "founder"
  | "professional"
  | "creator"
  | "playful"
  | "web3";

export type ContentToolId = "post" | "hook" | "caption" | "repurpose";

export type BrandVoice = {
  id: BrandVoiceId;
  name: string;
  description: string;
  sampleTone: string;
};

export type GeneratedContent = {
  id: string;
  tool: ContentToolId;
  voice: BrandVoiceId;
  platform: string;
  title: string;
  body: string;
  meta?: string;
  score?: number;
};

export type RepurposeOutput = {
  platform: string;
  format: string;
  content: string;
};

export type SavedContentIdea = {
  id: string;
  contentId: string;
  campaignId: string;
  campaignName: string;
  savedAt: string;
  preview: string;
  tool: ContentToolId;
  voice: BrandVoiceId;
};

export type Campaign = {
  id: string;
  name: string;
  status: "planning" | "active" | "completed";
  startDate: string;
  endDate: string;
  channels: string[];
  budget: number;
  reach: number;
};

export type Creator = {
  id: string;
  name: string;
  handle: string;
  platform: string;
  followers: number;
  avgEngagement: number;
  niche: string;
  fitScore: number;
};

export type Mention = {
  id: string;
  author: string;
  platform: string;
  content: string;
  sentiment: "positive" | "neutral" | "negative";
  reach: number;
  timestamp: string;
};

export type Report = {
  id: string;
  title: string;
  type: "weekly" | "campaign" | "competitive";
  createdAt: string;
  status: "ready" | "generating";
  pages: number;
};
