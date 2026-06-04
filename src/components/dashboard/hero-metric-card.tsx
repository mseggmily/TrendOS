"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedMetric } from "@/components/motion/animated-metric";
import { cn, formatPercent } from "@/lib/utils";
import { EASE } from "@/lib/motion";
import type { StatMetric } from "@/types";
import {
  ArrowDownRight,
  ArrowUpRight,
  Gauge,
  Megaphone,
  Minus,
  Radio,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const iconMap = {
  "trend-velocity": TrendingUp,
  "viral-score": Sparkles,
  "share-of-voice": Radio,
  "audience-sentiment": Gauge,
  "creator-activity": Users,
  "campaign-momentum": Megaphone,
} as const;

const accentStyles = {
  violet: "from-rose-100 to-orange-50 text-rose-600 ring-rose-200/60",
  emerald: "from-emerald-100 to-teal-50 text-emerald-600 ring-emerald-200/60",
  sky: "from-sky-100 to-blue-50 text-sky-600 ring-sky-200/60",
  amber: "from-amber-100 to-yellow-50 text-amber-600 ring-amber-200/60",
  rose: "from-pink-100 to-rose-50 text-pink-600 ring-pink-200/60",
  orange: "from-orange-100 to-amber-50 text-orange-600 ring-orange-200/60",
};

type HeroMetricCardProps = {
  metric: StatMetric;
  index?: number;
};

export function HeroMetricCard({ metric, index = 0 }: HeroMetricCardProps) {
  const Icon = iconMap[metric.id as keyof typeof iconMap] ?? Zap;
  const accent = metric.accent ?? "violet";
  const TrendIcon =
    metric.trend === "up" ? ArrowUpRight : metric.trend === "down" ? ArrowDownRight : Minus;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: EASE.spring }}
      whileHover={{ y: -5, transition: { duration: 0.22, ease: EASE.outExpo } }}
    >
      <Card className="group relative overflow-hidden rounded-2xl border border-black/[0.05] bg-white shadow-sm transition-shadow hover:shadow-md">
        <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-40" />
        <CardContent className="relative p-5">
          <div className="flex items-start justify-between gap-3">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ring-1 ring-inset",
                accentStyles[accent]
              )}
            >
              <Icon className="h-4 w-4" />
            </motion.div>
            {metric.change !== undefined && (
              <motion.span
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + index * 0.05 }}
                className={cn(
                  "inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-medium tabular-nums",
                  metric.trend === "up" && "bg-emerald-100 text-emerald-700",
                  metric.trend === "down" && "bg-red-100 text-red-600",
                  metric.trend === "neutral" && "bg-muted text-muted-foreground"
                )}
              >
                <TrendIcon className="h-3 w-3" />
                {formatPercent(metric.change)}
              </motion.span>
            )}
          </div>
          <p className="mt-4 text-sm font-medium text-muted-foreground">
            {metric.label}
          </p>
          <p className="mt-1 text-2xl font-semibold tracking-tight">
            <AnimatedMetric value={metric.value} delay={0.15 + index * 0.08} />
          </p>
          {metric.helperText && (
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{metric.helperText}</p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
