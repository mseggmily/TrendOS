"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { AIInsight } from "@/types";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const priorityStyles = {
  urgent: "border-red-500/40 bg-red-500/5",
  high: "border-primary/40 bg-primary/5",
  medium: "border-border/60 bg-muted/15",
};

const priorityBadge = {
  urgent: "destructive" as const,
  high: "default" as const,
  medium: "secondary" as const,
};

type AIInsightsPanelProps = {
  insights: AIInsight[];
};

export function AIInsightsPanel({ insights }: AIInsightsPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay: 0.15 }}
      className="flex h-full flex-col rounded-xl glass-card gradient-border border-primary/25 bg-gradient-to-b from-primary/10 via-card/60 to-card/40 p-6 shadow-lg shadow-primary/5"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 ring-1 ring-primary/30">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-semibold">AI insights</h3>
            <p className="text-xs text-muted-foreground">Prioritized actions for your team</p>
          </div>
        </div>
        <Badge className="shrink-0 bg-primary/20 text-primary hover:bg-primary/20">
          {insights.length} recommended
        </Badge>
      </div>

      <ul className="mt-5 flex-1 space-y-3">
        {insights.map((insight, i) => (
          <motion.li
            key={insight.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.08 }}
            className={cn("rounded-lg border p-4", priorityStyles[insight.priority])}
          >
            <div className="flex items-center justify-between gap-2">
              <Badge variant={priorityBadge[insight.priority]} className="capitalize text-[10px]">
                {insight.priority}
              </Badge>
            </div>
            <p className="mt-2 text-sm font-semibold leading-snug">{insight.title}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{insight.summary}</p>
            <p className="mt-2 text-xs font-medium text-primary/90">{insight.impact}</p>
            <Button
              variant="ghost"
              size="sm"
              className="mt-3 h-8 gap-1 px-0 text-xs text-primary hover:bg-primary/10 hover:text-primary"
            >
              {insight.action}
              <ArrowRight className="h-3 w-3" />
            </Button>
          </motion.li>
        ))}
      </ul>

      <p className="mt-4 text-center text-[10px] text-muted-foreground">
        Insights refresh every 15 min · Models not connected in demo
      </p>
    </motion.div>
  );
}
