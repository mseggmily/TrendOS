"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Flame } from "lucide-react";
import type { EmergingTrend } from "@/types";
import { cn } from "@/lib/utils";

const competitorVariant = {
  low: "success" as const,
  medium: "warning" as const,
  high: "destructive" as const,
};

type EmergingTrendsSectionProps = {
  trends: EmergingTrend[];
};

export function EmergingTrendsSection({ trends }: EmergingTrendsSectionProps) {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Flame className="h-4 w-4 text-primary" />
          <h2 className="text-base font-medium">Rising market topics</h2>
          <Badge variant="secondary" className="rounded-full text-[10px]">
            First mover
          </Badge>
        </div>
        <span className="text-xs text-muted-foreground">
          {trends.length} to watch · low competitor saturation
        </span>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {trends.map((trend, i) => (
          <motion.article
            key={trend.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative overflow-hidden rounded-2xl border border-black/[0.05] bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
                  {trend.topic}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {trend.tagline}
                </p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-2xl font-semibold tabular-nums text-primary">
                  {trend.velocity}
                </p>
                <p className="text-[10px] text-muted-foreground">heat score</p>
              </div>
            </div>
            <div className="relative mt-4 flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="rounded-full text-[10px]">
                {trend.primaryPlatform}
              </Badge>
              <Badge variant="secondary" className="rounded-full text-[10px]">
                {trend.category}
              </Badge>
              <span className="inline-flex items-center gap-0.5 text-xs font-medium text-emerald-600">
                <ArrowUpRight className="h-3 w-3" />
                +{trend.growth}% this week
              </span>
            </div>
            <div className="relative mt-4 flex items-center justify-between border-t border-border/50 pt-3 text-[11px] text-muted-foreground">
              <span>Spotted {trend.firstDetected}</span>
              <span className="flex items-center gap-1.5">
                Others posting{" "}
                <Badge
                  variant={competitorVariant[trend.competitorActivity]}
                  className={cn("rounded-full text-[9px] capitalize")}
                >
                  {trend.competitorActivity}
                </Badge>
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
