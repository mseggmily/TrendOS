import { AreaChartCard } from "@/components/charts/area-chart-card";
import { BarChartCard } from "@/components/charts/bar-chart-card";
import { MetricCard } from "@/components/cards/metric-card";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { keywordVolume, mentions, sentimentOverTime } from "@/data/mock/listening";
import { formatNumber } from "@/lib/utils";

const sentimentVariant = {
  positive: "success" as const,
  neutral: "secondary" as const,
  negative: "destructive" as const,
};

export default function SocialListeningPage() {
  return (
    <div className="space-y-10 pb-8">
      <PageHeader
        title="Brand listening"
        description="Monitor mentions, track sentiment, and spot opportunities in real time."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <AreaChartCard
          title="Sentiment over time"
          description="Positive % vs. negative %"
          data={sentimentOverTime}
          secondaryKey="secondary"
        />
        <BarChartCard
          title="Keyword volume"
          description="Mentions in the last 24h"
          data={keywordVolume}
          layout="vertical"
        />
      </div>

      <MetricCard title="Latest mentions" description="Across monitored keywords">
        <ul className="space-y-4">
          {mentions.map((m) => (
            <li
              key={m.id}
              className="rounded-lg border border-border/50 bg-muted/15 p-4"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium">{m.author}</span>
                <Badge variant="outline" className="text-[10px]">
                  {m.platform}
                </Badge>
                <Badge variant={sentimentVariant[m.sentiment]} className="capitalize">
                  {m.sentiment}
                </Badge>
                <span className="ml-auto text-xs text-muted-foreground">{m.timestamp}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{m.content}&rdquo;
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Est. reach {formatNumber(m.reach)}
              </p>
            </li>
          ))}
        </ul>
      </MetricCard>
    </div>
  );
}
