"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { ExecutiveBriefing, ExecutiveInsightCategory } from "@/types";
import { EASE } from "@/lib/motion";
import {
  ChevronDown,
  ChevronUp,
  RefreshCw,
  Sparkles,
  Swords,
  TrendingUp,
  BookOpen,
  BarChart3,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";

const categoryConfig: Record<
  ExecutiveInsightCategory,
  { label: string; icon: typeof BarChart3; color: string }
> = {
  content: { label: "Content", icon: BookOpen, color: "text-orange-700 bg-orange-50 border-orange-200/60" },
  platform: { label: "Platforms", icon: Layers, color: "text-sky-700 bg-sky-50 border-sky-200/60" },
  campaign: { label: "Campaigns", icon: BarChart3, color: "text-emerald-700 bg-emerald-50 border-emerald-200/60" },
  competitive: { label: "Competition", icon: Swords, color: "text-amber-700 bg-amber-50 border-amber-200/60" },
  trends: { label: "Market trends", icon: TrendingUp, color: "text-rose-700 bg-rose-50 border-rose-200/60" },
};

function ConfidenceBar({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-1 flex-1 overflow-hidden rounded-full bg-muted/50">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE.spring }}
          className={cn(
            "h-full rounded-full",
            value >= 90 ? "bg-emerald-500" : value >= 80 ? "bg-primary" : "bg-amber-400"
          )}
        />
      </div>
      <span className="text-[10px] tabular-nums text-muted-foreground">{value}%</span>
    </div>
  );
}

function InsightCard({ insight, index }: { insight: ExecutiveBriefing["insights"][0]; index: number }) {
  const [expanded, setExpanded] = useState(index === 0);
  const config = categoryConfig[insight.category];
  const Icon = config.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.07, duration: 0.45, ease: EASE.spring }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-black/[0.05] bg-white shadow-sm transition-all duration-300",
        expanded ? "ring-1 ring-primary/15 shadow-md" : "hover:border-black/[0.08] hover:shadow-md"
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="relative p-5">
        <div className="flex items-start justify-between gap-3">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-medium",
              config.color
            )}
          >
            <Icon className="h-3 w-3" />
            {config.label}
          </span>
          {insight.metricValue && (
            <span className="text-sm font-semibold tabular-nums text-foreground">
              {insight.metricValue}
            </span>
          )}
        </div>

        <h4 className="mt-3 text-base font-semibold leading-snug tracking-tight md:text-[17px]">
          {insight.headline}
        </h4>

        <AnimateExpand expanded={expanded}>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{insight.analysis}</p>

          <div className="mt-4 rounded-lg border border-primary/15 bg-primary/5 px-4 py-3">
            <p className="text-[10px] font-medium text-primary/90">Try this →</p>
            <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">
              {insight.recommendation}
            </p>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between text-[10px] text-muted-foreground">
              <span>How sure we are</span>
              <span>{insight.dataSource}</span>
            </div>
            <ConfidenceBar value={insight.confidence} />
          </div>
        </AnimateExpand>

        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex items-center gap-1 text-xs font-medium text-primary transition-colors hover:text-primary/80"
        >
          {expanded ? (
            <>
              Collapse <ChevronUp className="h-3.5 w-3.5" />
            </>
          ) : (
            <>
              View details <ChevronDown className="h-3.5 w-3.5" />
            </>
          )}
        </button>
      </div>
    </motion.article>
  );
}

function AnimateExpand({
  expanded,
  children,
}: {
  expanded: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={false}
      animate={{
        height: expanded ? "auto" : 0,
        opacity: expanded ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: EASE.outExpo }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
}

type ExecutiveInsightsPanelProps = {
  briefing: ExecutiveBriefing;
};

export function ExecutiveInsightsPanel({ briefing }: ExecutiveInsightsPanelProps) {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    await new Promise((r) => setTimeout(r, 1200));
    setRefreshing(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE.spring }}
      className="relative overflow-hidden rounded-2xl border border-black/[0.05] bg-white shadow-sm"
    >
      <div className="px-6 py-5 md:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Marketing recommendations</h2>
              <p className="text-sm text-muted-foreground">
                AI insights based on your {briefing.period.toLowerCase()}
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-1.5 rounded-full text-xs"
            onClick={handleRefresh}
            disabled={refreshing}
          >
            <RefreshCw className={cn("h-3.5 w-3.5", refreshing && "animate-spin")} />
            Refresh insights
          </Button>
        </div>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {briefing.summary}
        </p>
      </div>

      <div className="grid gap-3 px-6 pb-6 md:grid-cols-2 md:px-8">
        {briefing.insights.slice(0, 4).map((insight, i) => (
          <InsightCard key={insight.id} insight={insight} index={i} />
        ))}
      </div>
    </motion.section>
  );
}
