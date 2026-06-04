import { MetricCard } from "@/components/cards/metric-card";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { reports } from "@/data/mock/reports";
import { FileText, Plus } from "lucide-react";

const typeLabels = {
  weekly: "Weekly",
  campaign: "Campaign",
  competitive: "Competitive",
};

export default function ReportsPage() {
  return (
    <div className="space-y-10 pb-8">
      <PageHeader
        title="Marketing reports"
        description="Executive-ready summaries for stakeholders — export performance and share in one click."
        actions={
          <Button size="sm" className="gap-1.5">
            <Plus className="h-3.5 w-3.5" />
            Generate report
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2">
        {reports.map((report) => (
          <MetricCard
            key={report.id}
            title={report.title}
            description={report.createdAt}
            action={
              <Badge variant={report.status === "ready" ? "success" : "warning"}>
                {report.status}
              </Badge>
            }
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <Badge variant="outline" className="text-[10px]">
                    {typeLabels[report.type]}
                  </Badge>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {report.pages > 0 ? `${report.pages} pages` : "Preparing…"}
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                disabled={report.status !== "ready"}
              >
                Download
              </Button>
            </div>
          </MetricCard>
        ))}
      </div>
    </div>
  );
}
