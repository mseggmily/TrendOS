export const ABOUT_SHORT =
  "TrendOS is a social media marketing workspace that helps teams spot market trends, track competitors, plan campaigns, find influencers, and create on-brand content — in one place.";

export type AboutFeature = {
  title: string;
  summary: string;
  details: string[];
  href: string;
};

export const ABOUT_DETAIL = {
  title: "What is TrendOS?",
  intro:
    "TrendOS is built for marketing teams and brands that want to scale their social presence without juggling a dozen tools. It brings research, strategy, and content into a single, focused workspace — so your team always knows what's trending, what competitors are doing, and what to publish next.",
  functions: [
    {
      title: "Overview",
      href: "/dashboard",
      summary:
        "Your marketing command center — key metrics, AI recommendations, and what's trending this week.",
      details: [
        "Track trend momentum, share of voice, brand sentiment, and content potential in one dashboard instead of switching between spreadsheets and native analytics.",
        "Marketing recommendations summarize what matters: which channels are growing, where competitors are gaining ground, and which topics deserve budget this week.",
        "See trending market conversations and recent campaign activity so leadership and content leads stay aligned without a separate status meeting.",
      ],
    },
    {
      title: "Trends",
      href: "/trends-radar",
      summary:
        "Spot rising topics early and decide which platforms to prioritize before rivals publish.",
      details: [
        "Surface breakout topics with heat scores and growth rates so you can plan campaigns around momentum, not guesswork.",
        "Understand where each topic is heating up — TikTok, LinkedIn, X, and more — so channel mix matches where the conversation actually lives.",
        "Focus on a short list of high-opportunity trends with low competitor saturation, giving your team a clear window to publish first.",
      ],
    },
    {
      title: "Competitors",
      href: "/competitor-watch",
      summary:
        "Track rival brands' engagement, share of voice, and recent moves in your category.",
      details: [
        "Compare your engagement trends against category averages to see if you're gaining or losing ground week over week.",
        "Monitor share of voice across tracked competitors so positioning and messaging stay intentional, not reactive.",
        "Review follower counts, posting cadence, sentiment, and recent strategic moves in one table — useful for battlecards and weekly marketing standups.",
      ],
    },
    {
      title: "Content",
      href: "/content-lab",
      summary:
        "Generate on-brand posts, hooks, and captions — then repurpose across platforms.",
      details: [
        "Choose a brand voice (founder, professional, creator, and more) so AI output matches how your company actually speaks online.",
        "Use dedicated tools for full posts, scroll-stopping hooks, and platform-native captions instead of starting from a blank doc every time.",
        "Repurpose one core idea into threads, carousels, short-form scripts, and email snippets to scale output without scaling headcount.",
        "Save strong outputs to campaigns so creative and growth teams work from the same source material.",
      ],
    },
    {
      title: "Campaigns",
      href: "/campaign-planner",
      summary:
        "Plan launches, allocate budget, and track performance across channels.",
      details: [
        "Maintain a roster of active and upcoming campaigns with dates, status, channel mix, and budget in one view.",
        "See reach and funnel-style performance so you know which launches are on track before month-end reporting.",
        "Keep influencer sprints, product launches, and always-on programs organized instead of scattered across Notion and Slack.",
      ],
    },
    {
      title: "Influencers",
      href: "/creator-tracker",
      summary:
        "Find creators for partnerships, compare fit, and manage your influencer pipeline.",
      details: [
        "Discover creators by platform, niche, followers, and engagement rate with a brand-fit score to shortlist faster.",
        "Compare candidates side by side before outreach so partnerships align with campaign goals and audience overlap.",
        "Use this as a lightweight pipeline view while scaling influencer programs — from prospecting through confirmed partners.",
      ],
    },
    {
      title: "Listening",
      href: "/social-listening",
      summary:
        "Monitor brand mentions, sentiment, and what people are saying about you online.",
      details: [
        "Track sentiment over time to catch shifts in how your brand is perceived before they show up in sales calls.",
        "Review recent mentions across platforms with context — who said it, where, and estimated reach.",
        "Pair listening with trends and competitor intel to respond to opportunities, criticism, or category conversations while they're still relevant.",
      ],
    },
  ] satisfies AboutFeature[],
};
