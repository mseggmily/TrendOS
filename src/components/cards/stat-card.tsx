"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedMetric } from "@/components/motion/animated-metric";
import { cn, formatPercent } from "@/lib/utils";
import { EASE } from "@/lib/motion";
import type { StatMetric } from "@/types";
import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";

type StatCardProps = {
  metric: StatMetric;
  index?: number;
};

export function StatCard({ metric, index = 0 }: StatCardProps) {
  const TrendIcon =
    metric.trend === "up" ? ArrowUpRight : metric.trend === "down" ? ArrowDownRight : Minus;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: EASE.spring }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <Card className="group relative overflow-hidden glass-card glass-card-hover border-white/[0.06] bg-card/30">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <CardContent className="relative p-5">
          <p className="text-xs font-medium text-muted-foreground">{metric.label}</p>
          <div className="mt-2 flex items-end justify-between gap-3">
            <p className="text-2xl font-semibold tracking-tight">
              <AnimatedMetric value={metric.value} delay={index * 0.08} />
            </p>
            {metric.change !== undefined && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className={cn(
                  "inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-medium",
                  metric.trend === "up" && "bg-cyan-500/15 text-cyan-400",
                  metric.trend === "down" && "bg-red-500/15 text-red-400",
                  metric.trend === "neutral" && "bg-muted text-muted-foreground"
                )}
              >
                <TrendIcon className="h-3 w-3" />
                {formatPercent(metric.change)}
              </motion.span>
            )}
          </div>
          {metric.helperText && (
            <p className="mt-2 text-xs text-muted-foreground">{metric.helperText}</p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
