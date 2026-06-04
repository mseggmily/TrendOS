import { EmergingTrendsSection } from "@/components/trends-radar/emerging-trends-section";
import { MemeDetectionSection } from "@/components/trends-radar/meme-detection-section";
import { PlatformHeatmap } from "@/components/trends-radar/platform-heatmap";
import { RadarVelocityChart } from "@/components/trends-radar/radar-velocity-chart";
import { TickerStrip } from "@/components/trends-radar/ticker-strip";
import { TopicGrowthTable } from "@/components/trends-radar/topic-growth-table";
import { TrendLifecycleViz } from "@/components/trends-radar/trend-lifecycle-viz";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  emergingTrendsRadar,
  FEATURED_TOPICS,
  lifecycleStages,
  lifecycleTimeline,
  memeSignals,
  platformHeatmap,
  radarVelocityData,
  topicGrowthTable,
} from "@/data/mock/trends";
import { Bell, Filter, Sparkles } from "lucide-react";

const PLATFORMS = ["X", "TikTok", "Instagram", "LinkedIn", "YouTube"];

export default function TrendsRadarPage() {
  return (
    <div className="space-y-10 pb-8">
      <PageHeader
        title="Market trends"
        description="Spot rising topics early and turn them into campaign opportunities before competitors do."
        actions={
          <>
            <Button variant="outline" size="sm" className="gap-1.5 rounded-full text-xs">
              <Filter className="h-3.5 w-3.5" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="gap-1.5 rounded-full">
              <Bell className="h-3.5 w-3.5" />
              Get alerts
            </Button>
          </>
        }
      />

      <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-primary/15 bg-primary/5 px-5 py-4">
        <Sparkles className="h-5 w-5 shrink-0 text-primary" />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium">
            <span className="text-primary">4 rising topics</span> worth building campaigns around — low
            competitor activity on AI Agents & AI Video
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Best window: next 2–3 days before rival brands publish
          </p>
        </div>
        <Badge variant="success" className="shrink-0 rounded-full text-[10px]">
          Hot right now
        </Badge>
      </div>

      <TickerStrip />

      <RadarVelocityChart data={radarVelocityData} />

      <section className="grid gap-6 xl:grid-cols-2">
        <TopicGrowthTable rows={topicGrowthTable} />
        <PlatformHeatmap
          cells={platformHeatmap}
          topics={[...FEATURED_TOPICS]}
          platforms={PLATFORMS}
        />
      </section>

      <EmergingTrendsSection trends={emergingTrendsRadar.slice(0, 4)} />

      <MemeDetectionSection memes={memeSignals.slice(0, 3)} />

      <TrendLifecycleViz stages={lifecycleStages} timeline={lifecycleTimeline} />
    </div>
  );
}
