import { ContentLabWorkspace } from "@/components/content-lab/content-lab-workspace";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ContentLabPage() {
  return (
    <div className="space-y-10 pb-6">
      <PageHeader
        title="Content studio"
        description="Generate posts, hooks, and captions aligned to your brand voice — ready for any platform."
        actions={
          <>
            <Badge variant="outline" className="gap-1.5 px-2.5 py-1">
              AI ready
            </Badge>
            <Button variant="outline" size="sm" className="gap-1.5 rounded-full">
              History
            </Button>
          </>
        }
      />

      <ContentLabWorkspace />
    </div>
  );
}
