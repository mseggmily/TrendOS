import { Badge } from "@/components/ui/badge";
import { MetricCard } from "@/components/cards/metric-card";
import type { TrendingTopicRow } from "@/types";
import { ArrowUpRight } from "lucide-react";

const sentimentVariant = {
  positive: "success" as const,
  neutral: "secondary" as const,
  negative: "destructive" as const,
};

type TrendingTopicsTableProps = {
  topics: TrendingTopicRow[];
};

export function TrendingTopicsTable({ topics }: TrendingTopicsTableProps) {
  return (
    <MetricCard
      title="Trending topics"
      description="Market conversations worth building content around"
      className="h-full"
      action={
        <Badge variant="outline" className="rounded-full text-[10px] font-normal">
          Live ✨
        </Badge>
      }
    >
      <div className="overflow-x-auto -mx-2">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs text-muted-foreground">
              <th className="px-2 pb-3 w-10">#</th>
              <th className="px-2 pb-3">Topic</th>
              <th className="px-2 pb-3">Platform</th>
              <th className="px-2 pb-3 text-right">Hot score</th>
              <th className="px-2 pb-3 text-right">Growth</th>
              <th className="px-2 pb-3">Vibe</th>
            </tr>
          </thead>
          <tbody>
            {topics.map((row) => (
              <tr
                key={row.id}
                className="group border-b border-border/40 transition-colors last:border-0 hover:bg-muted/25"
              >
                <td className="px-2 py-3.5 tabular-nums text-muted-foreground">{row.rank}</td>
                <td className="px-2 py-3.5">
                  <p className="font-medium group-hover:text-primary transition-colors">
                    {row.topic}
                  </p>
                  <p className="text-[11px] text-muted-foreground">{row.category}</p>
                </td>
                <td className="px-2 py-3.5">
                  <Badge variant="outline" className="text-[10px] font-normal">
                    {row.platform}
                  </Badge>
                </td>
                <td className="px-2 py-3.5 text-right">
                  <span className="font-semibold tabular-nums text-primary">{row.velocity}</span>
                </td>
                <td className="px-2 py-3.5 text-right">
                  <span className="inline-flex items-center gap-0.5 font-medium tabular-nums text-emerald-600">
                    <ArrowUpRight className="h-3 w-3" />
                    {row.growth}%
                  </span>
                </td>
                <td className="px-2 py-3.5">
                  <Badge variant={sentimentVariant[row.sentiment]} className="capitalize text-[10px]">
                    {row.sentiment}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MetricCard>
  );
}
