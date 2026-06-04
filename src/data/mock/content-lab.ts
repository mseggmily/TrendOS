import type {
  BrandVoice,
  BrandVoiceId,
  ContentToolId,
  GeneratedContent,
  RepurposeOutput,
} from "@/types";

export const brandVoices: BrandVoice[] = [
  {
    id: "founder",
    name: "Founder",
    description: "Raw, first-person, building in public",
    sampleTone: "Honest · Story-driven · No corporate fluff",
  },
  {
    id: "professional",
    name: "Professional",
    description: "Thought leadership for B2B audiences",
    sampleTone: "Credible · Data-backed · Executive-ready",
  },
  {
    id: "creator",
    name: "Creator",
    description: "Engaging, platform-native creator energy",
    sampleTone: "Conversational · Hook-heavy · Community-first",
  },
  {
    id: "playful",
    name: "Playful Startup",
    description: "Witty, bold, meme-aware brand voice",
    sampleTone: "Punchy · Irreverent · Shareable",
  },
  {
    id: "web3",
    name: "Web3 Native",
    description: "Crypto Twitter / onchain community dialect",
    sampleTone: "Degen-friendly · Token-aware · CT-native",
  },
];

export const defaultTopic = "How TrendOS helps growth teams spot trends before competitors";

const posts: Record<BrandVoiceId, GeneratedContent[]> = {
  founder: [
    {
      id: "post-founder-1",
      tool: "post",
      voice: "founder",
      platform: "X",
      title: "Thread · 6 posts",
      score: 91,
      meta: "Est. 2.1% ER · Best for Tue 9am",
      body: `1/ We almost missed the AI Agents trend by 72 hours.

2/ Our team was drowning in dashboards — 12 tabs, zero signal. So we built TrendOS: one war room for trends, competitors, and campaigns.

3/ Last week alone:
→ Spotted Vibe Coding at velocity 93
→ Caught Nova Analytics copying our positioning
→ Repurposed 1 thread into 4 platforms in 20 min

4/ The unlock wasn't more data. It was faster decisions.

5/ If you're a growth lead running social for a startup: you don't need another analytics tool. You need a command center.

6/ We're opening 50 beta seats. Reply "WAR ROOM" and I'll send access.`,
    },
  ],
  professional: [
    {
      id: "post-professional-1",
      tool: "post",
      voice: "professional",
      platform: "LinkedIn",
      title: "Article-style post",
      score: 88,
      meta: "Est. 3.4% ER · C-suite audience",
      body: `The best marketing teams aren't reacting faster — they're seeing signals earlier.

After analyzing 200+ B2B SaaS launches, we found a consistent pattern: winners detect category trends 48–96 hours before competitors publish.

TrendOS consolidates trend velocity, share of voice, and campaign momentum into a single operating layer for growth teams.

Three outcomes our customers report:
• 34% faster content cycle times
• 2.4× improvement in trend-jacking win rate
• 18% reduction in wasted ad spend on stale angles

Social isn't a channel problem. It's an intelligence problem.

If your team is still stitching together native analytics + spreadsheets, you're flying blind in a market that moves hourly.`,
    },
  ],
  creator: [
    {
      id: "post-creator-1",
      tool: "post",
      voice: "creator",
      platform: "Instagram",
      title: "Carousel caption + slide hooks",
      score: 94,
      meta: "Est. 5.8% ER · Save-worthy format",
      body: `POV: you finally stopped guessing what to post 📡

Slide 1: "Your competitors aren't smarter. They're faster."
Slide 2: Trend velocity score — what it means
Slide 3: 3 trends you should post about THIS week
Slide 4: How to turn 1 idea into 5 formats
Slide 5: Comment "LAB" for our free content calendar

Caption:
Stop posting into the void. TrendOS shows you what's about to pop BEFORE it hits your feed. I used it to plan my last 2 weeks of content in 45 minutes. Link in bio ✨

#contentstrategy #creatoreconomy #socialmediatips`,
    },
  ],
  playful: [
    {
      id: "post-playful-1",
      tool: "post",
      voice: "playful",
      platform: "X",
      title: "Single post",
      score: 89,
      meta: "Est. 4.2% ER · High share potential",
      body: `your marketing stack:

❌ 7 dashboards
❌ 3 spreadsheets named "FINAL_v2_REAL"
❌ a intern manually checking competitor LinkedIns

✅ one war room that tells you "post about AI Agents NOW or enjoy irrelevance"

TrendOS. because chaos isn't a strategy (unless you're us before we built this).`,
    },
  ],
  web3: [
    {
      id: "post-web3-1",
      tool: "post",
      voice: "web3",
      platform: "X",
      title: "CT-native thread",
      score: 86,
      meta: "Est. 3.8% ER · CT peak hours",
      body: `gm growth maxis 🫡

narratives move faster than chains finality now

TrendOS = onchain-grade signal for offchain social:
→ trend velocity (think: mempool but for memes)
→ competitor watch (who's farming your mindshare)
→ content lab (ship threads before CT copies you)

we're not building another dashboard
we're building the war room CT deserved

beta list open. RT + reply "SIGNAL" for early access`,
    },
  ],
};

const hooks: Record<BrandVoiceId, GeneratedContent[]> = {
  founder: [
    {
      id: "hook-founder-1",
      tool: "hook",
      voice: "founder",
      platform: "X",
      title: "Hook option A",
      score: 92,
      body: "We lost $40K in pipeline because we posted about the wrong trend. Here's the 3-signal framework we use now.",
    },
    {
      id: "hook-founder-2",
      tool: "hook",
      voice: "founder",
      platform: "LinkedIn",
      title: "Hook option B",
      score: 87,
      body: "I stopped hiring more marketers and started giving my team a war room. Output doubled in 30 days.",
    },
  ],
  professional: [
    {
      id: "hook-professional-1",
      tool: "hook",
      voice: "professional",
      platform: "LinkedIn",
      title: "Hook option A",
      score: 90,
      body: "McKinsey won't tell you this: 68% of B2B trend-jacking attempts fail because teams detect signals too late.",
    },
    {
      id: "hook-professional-2",
      tool: "hook",
      voice: "professional",
      platform: "X",
      title: "Hook option B",
      score: 85,
      body: "Your share of voice is a lagging indicator. Trend velocity is the leading one.",
    },
  ],
  creator: [
    {
      id: "hook-creator-1",
      tool: "hook",
      voice: "creator",
      platform: "TikTok",
      title: "Hook option A",
      score: 96,
      body: "Stop scrolling — this is why your content isn't hitting (and the free tool I use to fix it)",
    },
    {
      id: "hook-creator-2",
      tool: "hook",
      voice: "creator",
      platform: "Instagram",
      title: "Hook option B",
      score: 91,
      body: "I planned 14 days of content in one coffee. No burnout. No guesswork. Here's how ↓",
    },
  ],
  playful: [
    {
      id: "hook-playful-1",
      tool: "hook",
      voice: "playful",
      platform: "X",
      title: "Hook option A",
      score: 93,
      body: `your competitor just posted about AI Agents. you're still scheduling "motivational Monday." we need to talk.`,
    },
    {
      id: "hook-playful-2",
      tool: "hook",
      voice: "playful",
      platform: "TikTok",
      title: "Hook option B",
      score: 88,
      body: "POV: your boss asks why engagement is down and you have 47 browser tabs open",
    },
  ],
  web3: [
    {
      id: "hook-web3-1",
      tool: "hook",
      voice: "web3",
      platform: "X",
      title: "Hook option A",
      score: 89,
      body: "CT is rotating narratives faster than L2s launch. if you're not tracking velocity, you're exit liquidity for someone else's thread",
    },
    {
      id: "hook-web3-2",
      tool: "hook",
      voice: "web3",
      platform: "Farcaster",
      title: "Hook option B",
      score: 84,
      body: "new meta just dropped and your social team is still A/B testing font colors. ngmi (unless you fix this)",
    },
  ],
};

const captions: Record<BrandVoiceId, GeneratedContent[]> = {
  founder: [
    {
      id: "caption-founder-1",
      tool: "caption",
      voice: "founder",
      platform: "Instagram",
      title: "Reel caption",
      score: 88,
      meta: "142 chars hook · 12 hashtags",
      body: `Built TrendOS because I was tired of finding trends on Monday that peaked on Friday.

This reel: 60 sec on how we use trend velocity to pick what to post.

Save this if you're a founder doing your own marketing.`,
    },
  ],
  professional: [
    {
      id: "caption-professional-1",
      tool: "caption",
      voice: "professional",
      platform: "LinkedIn",
      title: "Document post caption",
      score: 86,
      meta: "PDF carousel · 8 slides",
      body: `New playbook: "Trend Intelligence for B2B Growth Teams"

Inside:
→ Defining trend velocity vs. vanity metrics
→ 5-step weekly war room ritual
→ Case study: 3× pipeline from timely content

Download link in comments. Tag a growth lead who needs this.`,
    },
  ],
  creator: [
    {
      id: "caption-creator-1",
      tool: "caption",
      voice: "creator",
      platform: "TikTok",
      title: "Short-form caption",
      score: 95,
      meta: "Sound: trending · 18s loop",
      body: `the tool that replaced my content anxiety ✨

trend radar → hook gen → post in 20 min

not sponsored just obsessed

#marketingtok #contentcreator #saas`,
    },
  ],
  playful: [
    {
      id: "caption-playful-1",
      tool: "caption",
      voice: "playful",
      platform: "Instagram",
      title: "Story + feed caption",
      score: 90,
      meta: "Poll sticker recommended",
      body: `poll: how many tabs is your "social media research" right now?

a) 1-3 (liar)
b) 4-10 (relatable)
c) enough to crash Chrome (our target demographic)

TrendOS users chose "what tabs?" — link in bio`,
    },
  ],
  web3: [
    {
      id: "caption-web3-1",
      tool: "caption",
      voice: "web3",
      platform: "X",
      title: "Quote-tweet caption",
      score: 87,
      meta: "Attach trend chart screenshot",
      body: `velocity on "AI Agents" just hit 96

last cycle we slept on a similar spike and watched a competitor 10x their mindshare

not missing this one. war room loaded 🫡`,
    },
  ],
};

export const repurposeSource = {
  title: "Source: LinkedIn thought leadership post",
  body: `The best marketing teams aren't reacting faster — they're seeing signals earlier. TrendOS consolidates trend velocity, share of voice, and campaign momentum into one operating layer.`,
};

export const repurposeOutputs: Record<BrandVoiceId, RepurposeOutput[]> = {
  founder: [
    {
      platform: "X",
      format: "Thread (4 posts)",
      content:
        "1/ Hot take: speed beats budget in social.\n2/ We built TrendOS when we kept missing trends by 72h.\n3/ One war room > twelve dashboards.\n4/ Who else is done with spreadsheet marketing?",
    },
    {
      platform: "TikTok",
      format: "15s talking head",
      content:
        "Hook: 'We almost went viral on the WRONG trend.' Body: explain velocity score. CTA: link in bio.",
    },
    {
      platform: "Instagram",
      format: "Carousel (5 slides)",
      content:
        "Slide hooks: Signal > Noise / What is trend velocity? / 3 trends this week / Competitor watch / CTA",
    },
    {
      platform: "Email",
      format: "Newsletter blurb",
      content:
        "Subject: The 72-hour rule\nPreview: Why late trend-jacking costs pipeline.\nBody: 150-word summary + CTA to war room demo.",
    },
  ],
  professional: [
    {
      platform: "X",
      format: "Single post",
      content:
        "Leading indicator > lagging indicator.\nTrend velocity predicts share of voice shifts 48–96h early.\nIntelligence layer > channel tactics.",
    },
    {
      platform: "LinkedIn",
      format: "Document carousel",
      content: "8-slide deck: Problem → Framework → Data → Case study → CTA. Export from Content Lab.",
    },
    {
      platform: "YouTube",
      format: "Short script",
      content:
        "0:00 Hook: 68% of trend-jacking fails\n0:05 Problem\n0:12 Solution: unified war room\n0:18 CTA",
    },
  ],
  creator: [
    {
      platform: "TikTok",
      format: "Reel script",
      content: "Hook → 3 quick tips on trend spotting → 'I use TrendOS' → comment CTA",
    },
    {
      platform: "Instagram",
      format: "Reel + carousel combo",
      content: "Reel: 30s demo. Carousel: deep dive. Cross-link in caption.",
    },
    {
      platform: "X",
      format: "Thread",
      content: "5-post thread with emoji bullets, screenshot of trend radar, engagement question at end",
    },
  ],
  playful: [
    {
      platform: "X",
      format: "Meme + caption",
      content: "Drake meme: rejecting 12 dashboards / embracing one war room. Caption: you're welcome.",
    },
    {
      platform: "TikTok",
      format: "Skits",
      content: "Two personas: 'spreadsheet marketer' vs 'war room marketer'. TrendOS logo at punchline.",
    },
  ],
  web3: [
    {
      platform: "X",
      format: "CT thread",
      content: "gm → narrative velocity thesis → TrendOS as signal layer → reply GAIA for beta",
    },
    {
      platform: "Farcaster",
      format: "Cast + frame",
      content: "Short cast linking to trend velocity frame. Embed weekly CT meta snapshot.",
    },
  ],
};

export function getGenerations(
  tool: ContentToolId,
  voice: BrandVoiceId
): GeneratedContent[] {
  switch (tool) {
    case "post":
      return posts[voice];
    case "hook":
      return hooks[voice];
    case "caption":
      return captions[voice];
    default:
      return [];
  }
}

export function getRepurposeOutputs(voice: BrandVoiceId): RepurposeOutput[] {
  return repurposeOutputs[voice];
}

// Legacy
export const contentDrafts = [
  {
    id: "cd1",
    title: "Why we rebuilt our analytics stack",
    platform: "X",
    status: "review" as const,
    updatedAt: "2h ago",
    performanceScore: 87,
  },
  {
    id: "cd2",
    title: "Product demo — 60 second hook",
    platform: "TikTok",
    status: "draft" as const,
    updatedAt: "5h ago",
    performanceScore: 72,
  },
  {
    id: "cd3",
    title: "Founder story carousel",
    platform: "Instagram",
    status: "scheduled" as const,
    updatedAt: "1d ago",
    performanceScore: 91,
  },
  {
    id: "cd4",
    title: "Case study: 3x pipeline from social",
    platform: "LinkedIn",
    status: "published" as const,
    updatedAt: "3d ago",
    performanceScore: 94,
  },
];

export const contentPerformance = [
  { format: "Thread", avgEngagement: 5.2, posts: 12 },
  { format: "Short video", avgEngagement: 8.1, posts: 18 },
  { format: "Carousel", avgEngagement: 4.6, posts: 9 },
  { format: "Article", avgEngagement: 3.1, posts: 6 },
];
