import Link from "next/link";
import { AboutFeaturesAccordion } from "@/components/about/about-features-accordion";
import { PageHeader } from "@/components/shared/page-header";
import { ABOUT_DETAIL } from "@/lib/about";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-10 pb-12">
      <PageHeader
        title={ABOUT_DETAIL.title}
        description={ABOUT_DETAIL.intro}
        actions={
          <Button variant="outline" size="sm" className="rounded-full" asChild>
            <Link href="/dashboard">
              <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
              Back to overview
            </Link>
          </Button>
        }
      />

      <section className="space-y-4">
        <div>
          <h2 className="text-base font-medium text-foreground">What you can do here</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Tap a section to expand — each area of TrendOS is built for a specific part of
            your marketing workflow.
          </p>
        </div>
        <AboutFeaturesAccordion features={ABOUT_DETAIL.functions} />
      </section>
    </div>
  );
}
