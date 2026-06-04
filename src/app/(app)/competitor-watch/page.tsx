import { AreaChartCard } from "@/components/charts/area-chart-card";
import { DonutChartCard } from "@/components/charts/donut-chart-card";
import { MetricCard } from "@/components/cards/metric-card";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  competitorEngagementTrend,
  competitors,
  shareOfVoiceData,
} from "@/data/mock/competitors";
import { formatNumber } from "@/lib/utils";
import { Eye } from "lucide-react";

export default function CompetitorWatchPage() {
  return (
    <div className="space-y-10 pb-8">
      <PageHeader
        title="Competitor intelligence"
        description="Track what similar brands are posting, how they're growing, and where you can differentiate."
        actions={
          <Button size="sm" className="gap-1.5 rounded-full">
            <Eye className="h-3.5 w-3.5" />
            Add competitor
          </Button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <AreaChartCard
            title="Engagement rate trend"
            description="You vs. category average (weekly)"
            data={competitorEngagementTrend}
            secondaryKey="secondary"
          />
        </div>
        <DonutChartCard title="Share of voice" description="Mention volume %" data={shareOfVoiceData} />
      </div>

      <MetricCard title="Tracked competitors" description="Latest intelligence snapshots">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs text-muted-foreground">
                <th className="pb-3 pr-4 font-medium">Brand</th>
                <th className="pb-3 pr-4 font-medium">Followers</th>
                <th className="pb-3 pr-4 font-medium">Engagement</th>
                <th className="pb-3 pr-4 font-medium">Cadence</th>
                <th className="pb-3 pr-4 font-medium">Sentiment</th>
                <th className="pb-3 font-medium">Recent move</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((c) => (
                <tr key={c.id} className="border-b border-border/50 last:border-0">
                  <td className="py-4 pr-4">
                    <p className="font-medium">{c.name}</p>
                    <p className="text-xs text-muted-foreground">{c.handle}</p>
                  </td>
                  <td className="py-4 pr-4 tabular-nums">{formatNumber(c.followers)}</td>
                  <td className="py-4 pr-4 tabular-nums">{c.engagementRate}%</td>
                  <td className="py-4 pr-4 text-muted-foreground">{c.postFrequency}</td>
                  <td className="py-4 pr-4">
                    <Badge variant={c.sentiment >= 75 ? "success" : "secondary"}>
                      {c.sentiment}%
                    </Badge>
                  </td>
                  <td className="py-4 text-muted-foreground">{c.recentMove}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </MetricCard>
    </div>
  );
}
