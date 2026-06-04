import { MetricCard } from "@/components/cards/metric-card";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { creators } from "@/data/mock/creators";
import { formatNumber } from "@/lib/utils";
import { UserPlus } from "lucide-react";

export default function CreatorTrackerPage() {
  return (
    <div className="space-y-10 pb-8">
      <PageHeader
        title="Influencer marketing"
        description="Discover creators who match your brand, compare reach & engagement, and manage partnerships."
        actions={
          <Button size="sm" className="gap-1.5">
            <UserPlus className="h-3.5 w-3.5" />
            Add influencer
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2">
        {creators.map((creator) => (
          <MetricCard
            key={creator.id}
            title={creator.name}
            description={`${creator.handle} · ${creator.platform}`}
            action={
              <Badge variant={creator.fitScore >= 90 ? "success" : "default"}>
                Brand fit {creator.fitScore}
              </Badge>
            }
            className="bg-card/40"
          >
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-xs text-muted-foreground">Followers</p>
                <p className="mt-1 font-semibold tabular-nums">
                  {formatNumber(creator.followers)}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Engagement</p>
                <p className="mt-1 font-semibold tabular-nums">{creator.avgEngagement}%</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Niche</p>
                <p className="mt-1 font-medium">{creator.niche}</p>
              </div>
            </div>
          </MetricCard>
        ))}
      </div>
    </div>
  );
}
