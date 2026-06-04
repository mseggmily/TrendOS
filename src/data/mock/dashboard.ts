import type {
  AIInsight,
  CampaignActivityItem,
  ChartPoint,
  CompetitorAlert,
  ExecutiveBriefing,
  PlatformMetric,
  StatMetric,
  TrendingTopicRow,
} from "@/types";

export const heroMetrics: StatMetric[] = [
  {
    id: "trend-velocity",
    label: "Trend momentum",
    value: 87,
    change: 14.3,
    trend: "up",
    helperText: "Category trend index this week",
    accent: "violet",
  },
  {
    id: "viral-score",
    label: "Content potential",
    value: "8.4",
    change: 1.2,
    trend: "up",
    helperText: "Above category average for your niche",
    accent: "emerald",
  },
  {
    id: "share-of-voice",
    label: "Share of voice",
    value: "34%",
    change: 5.8,
    trend: "up",
    helperText: "Up from 28% last week vs. competitors",
    accent: "sky",
  },
  {
    id: "audience-sentiment",
    label: "Brand sentiment",
    value: "76%",
    change: 3.4,
    trend: "up",
    helperText: "Positive mentions across monitored channels",
    accent: "amber",
  },
  {
    id: "creator-activity",
    label: "Influencer pipeline",
    value: 24,
    change: 8,
    trend: "up",
    helperText: "Active creator partnerships this week",
    accent: "rose",
  },
  {
    id: "campaign-momentum",
    label: "Campaign Momentum",
    value: 92,
    change: -2.1,
    trend: "down",
    helperText: "Weighted pipeline velocity",
    accent: "orange",
  },
];

export const trendVelocityData: ChartPoint[] = [
  { label: "00:00", value: 52, secondary: 48 },
  { label: "04:00", value: 48, secondary: 46 },
  { label: "08:00", value: 61, secondary: 50 },
  { label: "12:00", value: 74, secondary: 55 },
  { label: "16:00", value: 82, secondary: 58 },
  { label: "20:00", value: 85, secondary: 60 },
  { label: "Now", value: 87, secondary: 61 },
];

export const trendingTopics: TrendingTopicRow[] = [
  {
    id: "tt1",
    rank: 1,
    topic: "Agentic marketing workflows",
    platform: "X",
    category: "AI / SaaS",
    velocity: 97,
    growth: 312,
    mentions: 68400,
    sentiment: "positive",
    opportunity: "high",
  },
  {
    id: "tt2",
    rank: 2,
    topic: "PLG launch threads",
    platform: "X",
    category: "Growth",
    velocity: 91,
    growth: 186,
    mentions: 42100,
    sentiment: "positive",
    opportunity: "high",
  },
  {
    id: "tt3",
    rank: 3,
    topic: "Founder-led LinkedIn",
    platform: "LinkedIn",
    category: "B2B",
    velocity: 84,
    growth: 94,
    mentions: 28900,
    sentiment: "positive",
    opportunity: "medium",
  },
  {
    id: "tt4",
    rank: 4,
    topic: "60s product demos",
    platform: "TikTok",
    category: "Video",
    velocity: 88,
    growth: 142,
    mentions: 112000,
    sentiment: "neutral",
    opportunity: "high",
  },
  {
    id: "tt5",
    rank: 5,
    topic: "Pricing transparency",
    platform: "LinkedIn",
    category: "SaaS",
    velocity: 71,
    growth: 48,
    mentions: 12400,
    sentiment: "negative",
    opportunity: "medium",
  },
  {
    id: "tt6",
    rank: 6,
    topic: "Build in public",
    platform: "X",
    category: "Startup",
    velocity: 79,
    growth: 67,
    mentions: 35600,
    sentiment: "positive",
    opportunity: "low",
  },
];

export const competitorAlerts: CompetitorAlert[] = [
  {
    id: "ca1",
    competitor: "Nova Analytics",
    severity: "critical",
    headline: "Launched aggressive X thread series",
    detail: "4 posts in 6 hours targeting your ICP keywords — estimated 48K impressions.",
    timestamp: "8m ago",
    platform: "X",
  },
  {
    id: "ca2",
    competitor: "Pulse Metrics",
    severity: "high",
    headline: "Creator partnership announced",
    detail: "@alexbuilds (890K) teased co-marketing — overlap with your Influencer Sprint.",
    timestamp: "42m ago",
    platform: "TikTok",
  },
  {
    id: "ca3",
    competitor: "SignalStack",
    severity: "medium",
    headline: "Share of voice spike on LinkedIn",
    detail: "+18% mention volume in DevTools category over 48 hours.",
    timestamp: "2h ago",
    platform: "LinkedIn",
  },
  {
    id: "ca4",
    competitor: "Nova Analytics",
    severity: "high",
    headline: "Paid boost detected on comparison post",
    detail: "Promoted post ranking for “social listening tools” — monitor conversion impact.",
    timestamp: "5h ago",
    platform: "X",
  },
];

export const aiInsights: AIInsight[] = [
  {
    id: "ai1",
    priority: "urgent",
    title: "Capture agentic marketing trend",
    summary:
      "Velocity hit 97 with 312% growth. Your last post on AI workflows underperformed category median by 22%.",
    impact: "+Est. 120K impressions if published within 12h",
    action: "Draft thread from Content Lab template",
  },
  {
    id: "ai2",
    priority: "high",
    title: "Counter Nova’s thread series",
    summary:
      "Competitor is owning 3 of top 5 keywords in your space. Recommended: founder response + data hook.",
    impact: "Protect 8% share of voice at risk",
    action: "View competitor playbook",
  },
  {
    id: "ai3",
    priority: "medium",
    title: "Reallocate TikTok budget",
    summary:
      "60s demos outperforming carousels 2.4× on engagement. Spring Launch TikTok spend is 40% below optimal.",
    impact: "+14% campaign momentum potential",
    action: "Adjust Campaign Planner",
  },
];

export const executiveBriefing: ExecutiveBriefing = {
  generatedAt: "May 29, 2026 · 9:14 AM",
  period: "Last 7 days",
  signalCount: 6,
  summary:
    "Founder-led content is outperforming product posts, TikTok is your fastest-growing channel, and AI Agents is the trend to build a campaign around this week. Here's where to focus budget and content.",
  insights: [
    {
      id: "ex1",
      headline: "Founder-led content is outperforming product posts by 42%.",
      category: "content",
      analysis:
        "Founder story threads and face-cam reels averaged 6.8% ER vs. 4.0% on product feature posts. Audience responds to narrative and transparency over feature lists.",
      recommendation:
        "Shift Spring Launch calendar to 60% founder-led / 40% product for the next 14 days. Use Content Lab Founder voice templates.",
      confidence: 94,
      dataSource: "Content Lab · 47 posts · 7d",
      metricLabel: "ER gap",
      metricValue: "+42%",
    },
    {
      id: "ex2",
      headline: "TikTok engagement is accelerating faster than LinkedIn.",
      category: "platform",
      analysis:
        "TikTok growth rate hit +38% WoW vs. LinkedIn at +18%. Short-form demos drive 2.1× the saves and shares of LinkedIn carousels in your category.",
      recommendation:
        "Reallocate 15% of LinkedIn Spring Launch budget to TikTok Influencer Sprint. Prioritize 60s demo format from Content Lab.",
      confidence: 91,
      dataSource: "Platform performance · WoW",
      metricLabel: "TikTok growth",
      metricValue: "+38%",
    },
    {
      id: "ex3",
      headline:
        "Competitor Nova Analytics is gaining share of voice through educational content.",
      category: "competitive",
      analysis:
        "Nova published 12 educational threads this week (+48% output). Their share of voice rose from 22% to 28% while yours held at 34% — gap narrowing.",
      recommendation:
        "Launch a counter-education series: data-backed teardowns in Professional voice. Monitor in Competitor Watch daily.",
      confidence: 88,
      dataSource: "Competitor Watch · SOV trend",
      metricLabel: "Nova SOV",
      metricValue: "28%",
    },
    {
      id: "ex4",
      headline: "AI Agents is the fastest growing conversation category this week.",
      category: "trends",
      analysis:
        "Velocity index at 96 with +284% mention growth. Competitor saturation remains low — only 2 of 5 tracked rivals have published on-topic content.",
      recommendation:
        "Publish within 48h: founder thread + TikTok demo on AI workflow use cases. First-mover window estimated at 72 hours.",
      confidence: 96,
      dataSource: "Trends Radar · Category index",
      metricLabel: "Velocity",
      metricValue: "96",
    },
    {
      id: "ex5",
      headline: "Influencer partnerships are driving 3× the reach of owned posts.",
      category: "campaign",
      analysis:
        "Influencer Sprint collabs averaged 124K reach per post vs. 41K on owned channels. @maya.dev and @alexbuilds content outperformed category benchmarks by 28%.",
      recommendation:
        "Expand Influencer Sprint from 3 to 5 partners. Prioritize DevTools and SaaS niches with brand-fit scores above 88.",
      confidence: 87,
      dataSource: "Influencer Tracker · Campaign data",
      metricLabel: "Reach multiplier",
      metricValue: "3.0×",
    },
    {
      id: "ex6",
      headline: "Audience sentiment dips when pricing is mentioned without context.",
      category: "content",
      analysis:
        "Posts referencing pricing without a value frame saw -18% sentiment vs. category average. Transparency threads with ROI data scored +24% positive.",
      recommendation:
        "Pair any pricing content with case study proof points. Avoid standalone price announcements on LinkedIn this week.",
      confidence: 82,
      dataSource: "Social Listening · Sentiment",
      metricLabel: "Sentiment delta",
      metricValue: "-18%",
    },
  ],
};

export const platformPerformance: PlatformMetric[] = [
  { platform: "X", reach: 840, engagement: 5.2, growth: 24 },
  { platform: "TikTok", reach: 620, engagement: 8.4, growth: 38 },
  { platform: "Instagram", reach: 480, engagement: 4.1, growth: 12 },
  { platform: "LinkedIn", reach: 320, engagement: 3.8, growth: 18 },
  { platform: "YouTube", reach: 180, engagement: 2.9, growth: 8 },
];

export const campaignActivity: CampaignActivityItem[] = [
  {
    id: "cp-a1",
    campaign: "Spring Launch",
    event: "Crossed 500K impressions",
    metric: "Reach",
    delta: "+18% vs. target",
    timestamp: "23m ago",
    status: "milestone",
  },
  {
    id: "cp-a2",
    campaign: "Influencer Sprint",
    event: "3 influencers confirmed",
    metric: "Pipeline",
    delta: "75% staffed",
    timestamp: "1h ago",
    status: "update",
  },
  {
    id: "cp-a3",
    campaign: "Webinar Series",
    event: "Registration pace slowing",
    metric: "Signups",
    delta: "-12% WoW",
    timestamp: "3h ago",
    status: "warning",
  },
  {
    id: "cp-a4",
    campaign: "Spring Launch",
    event: "LinkedIn carousel published",
    metric: "Engagement",
    delta: "4.2% ER",
    timestamp: "5h ago",
    status: "update",
  },
  {
    id: "cp-a5",
    campaign: "Product Hunt Prep",
    event: "Asset review completed",
    metric: "Readiness",
    delta: "On track for Jun 3",
    timestamp: "Yesterday",
    status: "milestone",
  },
];

// Legacy exports for other pages if needed
export const dashboardMetrics = heroMetrics;
export const hotTrends = trendingTopics.map((t) => ({
  id: t.id,
  topic: t.topic,
  platform: t.platform,
  velocity: t.velocity,
  sentiment: t.sentiment,
  mentions: t.mentions,
  category: t.category,
}));
export const reachTrendData = trendVelocityData;
export const channelBreakdown = [
  { label: "X", value: 32 },
  { label: "Instagram", value: 28 },
  { label: "TikTok", value: 24 },
  { label: "LinkedIn", value: 10 },
  { label: "YouTube", value: 6 },
];
export const activityFeed = campaignActivity.map((c) => ({
  id: c.id,
  title: `${c.campaign}: ${c.event}`,
  time: c.timestamp,
  type: (c.status === "warning" ? "alert" : c.status === "milestone" ? "success" : "info") as
    | "alert"
    | "success"
    | "trend"
    | "info",
}));
