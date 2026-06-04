import { Badge } from "@/components/ui/badge";
import { MetricCard } from "@/components/cards/metric-card";
import type { CompetitorAlert } from "@/types";
import { AlertTriangle, Swords } from "lucide-react";
import { cn } from "@/lib/utils";

const severityStyles = {
  critical: "border-red-500/30 bg-red-500/5",
  high: "border-amber-500/30 bg-amber-500/5",
  medium: "border-border/60 bg-muted/20",
};

const severityBadge = {
  critical: "destructive" as const,
  high: "warning" as const,
  medium: "secondary" as const,
};

type CompetitorAlertFeedProps = {
  alerts: CompetitorAlert[];
};

export function CompetitorAlertFeed({ alerts }: CompetitorAlertFeedProps) {
  return (
    <MetricCard
      title="Competitor alerts"
      description="Real-time rival movements"
      className="h-full"
      action={
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Swords className="h-3.5 w-3.5" />
          {alerts.length} active
        </span>
      }
    >
      <ul className="space-y-3">
        {alerts.map((alert) => (
          <li
            key={alert.id}
            className={cn(
              "rounded-xl border p-4 transition-colors hover:border-border",
              severityStyles[alert.severity]
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                {alert.severity === "critical" && (
                  <AlertTriangle className="h-4 w-4 shrink-0 text-red-400" />
                )}
                <span className="text-sm font-semibold">{alert.competitor}</span>
                <Badge variant="outline" className="text-[10px]">
                  {alert.platform}
                </Badge>
              </div>
              <Badge variant={severityBadge[alert.severity]} className="shrink-0 capitalize text-[10px]">
                {alert.severity}
              </Badge>
            </div>
            <p className="mt-2 text-sm font-medium leading-snug">{alert.headline}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{alert.detail}</p>
            <p className="mt-2 text-[11px] text-muted-foreground">{alert.timestamp}</p>
          </li>
        ))}
      </ul>
    </MetricCard>
  );
}
