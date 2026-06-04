import { Badge } from "@/components/ui/badge";
import { MetricCard } from "@/components/cards/metric-card";
import type { CampaignActivityItem } from "@/types";
import { CalendarRange, CheckCircle2, CircleAlert } from "lucide-react";
import { cn } from "@/lib/utils";

const statusIcon = {
  milestone: CheckCircle2,
  update: CalendarRange,
  warning: CircleAlert,
};

const statusColor = {
  milestone: "text-emerald-600",
  update: "text-primary",
  warning: "text-amber-600",
};

type CampaignActivityFeedProps = {
  items: CampaignActivityItem[];
};

export function CampaignActivityFeed({ items }: CampaignActivityFeedProps) {
  return (
    <MetricCard
      title="Campaign activity"
      description="Latest updates across active campaigns"
      className="h-full"
    >
      <ul className="relative space-y-0">
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border" aria-hidden />
        {items.map((item) => {
          const Icon = statusIcon[item.status];
          return (
            <li key={item.id} className="relative flex gap-4 pb-5 last:pb-0">
              <div
                className={cn(
                  "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-card",
                  item.status === "milestone" && "border-emerald-200 bg-emerald-50"
                )}
              >
                <Icon className={cn("h-3.5 w-3.5", statusColor[item.status])} />
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold">{item.campaign}</span>
                  {item.metric && (
                    <Badge variant="outline" className="text-[10px] font-normal">
                      {item.metric}
                    </Badge>
                  )}
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">{item.event}</p>
                {item.delta && (
                  <p className="mt-1 text-xs font-medium tabular-nums text-foreground/80">
                    {item.delta}
                  </p>
                )}
                <p className="mt-1.5 text-[11px] text-muted-foreground">{item.timestamp}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </MetricCard>
  );
}
