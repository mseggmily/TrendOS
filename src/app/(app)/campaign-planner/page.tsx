import { BarChartCard } from "@/components/charts/bar-chart-card";
import { MetricCard } from "@/components/cards/metric-card";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { campaignFunnelData, campaigns } from "@/data/mock/campaigns";
import { formatNumber } from "@/lib/utils";
import { Plus } from "lucide-react";

const statusVariant = {
  planning: "secondary" as const,
  active: "success" as const,
  completed: "outline" as const,
};

export default function CampaignPlannerPage() {
  return (
    <div className="space-y-10 pb-8">
      <PageHeader
        title="Campaign planner"
        description="Plan launches, track funnel performance, and keep every channel aligned."
        actions={
          <Button size="sm" className="gap-1.5">
            <Plus className="h-3.5 w-3.5" />
            Plan campaign
          </Button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <MetricCard title="Active & upcoming" description="Campaign roster">
          <div className="space-y-4">
            {campaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="rounded-lg border border-border/60 p-4 transition-colors hover:bg-muted/20"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium">{campaign.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {campaign.startDate} – {campaign.endDate}
                    </p>
                  </div>
                  <Badge variant={statusVariant[campaign.status]} className="capitalize">
                    {campaign.status}
                  </Badge>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {campaign.channels.map((ch) => (
                    <Badge key={ch} variant="outline" className="text-[10px]">
                      {ch}
                    </Badge>
                  ))}
                </div>
                <div className="mt-3 flex gap-6 text-xs text-muted-foreground">
                  <span>
                    Budget{" "}
                    <strong className="text-foreground">
                      ${campaign.budget.toLocaleString()}
                    </strong>
                  </span>
                  <span>
                    Reach{" "}
                    <strong className="text-foreground">
                      {campaign.reach ? formatNumber(campaign.reach) : "—"}
                    </strong>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </MetricCard>
        <BarChartCard
          title="Spring Launch funnel"
          description="Relative stage conversion (indexed)"
          data={campaignFunnelData}
        />
      </div>
    </div>
  );
}
