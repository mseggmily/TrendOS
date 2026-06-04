import { HeroMetricCard } from "@/components/dashboard/hero-metric-card";
import { ExecutiveInsightsPanel } from "@/components/dashboard/executive-insights-panel";
import { CampaignActivityFeed } from "@/components/dashboard/campaign-activity-feed";
import { PlatformPerformanceChart } from "@/components/dashboard/platform-performance-chart";
import { TrendVelocityChart } from "@/components/dashboard/trend-velocity-chart";
import { TrendingTopicsTable } from "@/components/dashboard/trending-topics-table";
import { PageHeader } from "@/components/shared/page-header";
import {
  campaignActivity,
  executiveBriefing,
  heroMetrics,
  platformPerformance,
  trendVelocityData,
  trendingTopics,
} from "@/data/mock/dashboard";

export default function DashboardPage() {
  const topMetrics = heroMetrics.slice(0, 4);

  return (
    <div className="space-y-10 pb-8">
      <PageHeader
        title="Marketing overview"
        description="Trend momentum, share of voice, and campaign performance — your week at a glance."
      />

      <section className="space-y-4">
        <h2 className="text-base font-medium text-foreground">Key metrics</h2>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {topMetrics.map((metric, i) => (
            <HeroMetricCard key={metric.id} metric={metric} index={i} />
          ))}
        </div>
      </section>

      <ExecutiveInsightsPanel briefing={executiveBriefing} />

      <section className="grid gap-6 xl:grid-cols-5">
        <div className="xl:col-span-3">
          <TrendVelocityChart data={trendVelocityData} />
        </div>
        <div className="xl:col-span-2">
          <PlatformPerformanceChart data={platformPerformance} />
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <TrendingTopicsTable topics={trendingTopics.slice(0, 5)} />
        <CampaignActivityFeed items={campaignActivity.slice(0, 4)} />
      </section>
    </div>
  );
}
