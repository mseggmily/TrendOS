"use client";

import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { MetricCard } from "@/components/cards/metric-card";
import { CHART_COLORS, chartTooltipStyle } from "@/components/charts/chart-theme";
import type { ChartPoint, LifecycleStage } from "@/types";
import { cn } from "@/lib/utils";

const stageColors = {
  nascent: "border-sky-200/60 bg-sky-50",
  accelerating: "border-emerald-200/60 bg-emerald-50",
  peak: "border-amber-200/60 bg-amber-50",
  declining: "border-border bg-muted/30",
};

const stageDot = {
  nascent: "bg-sky-400",
  accelerating: "bg-emerald-500",
  peak: "bg-amber-400",
  declining: "bg-muted-foreground/50",
};

type TrendLifecycleVizProps = {
  stages: LifecycleStage[];
  timeline: ChartPoint[];
};

export function TrendLifecycleViz({ stages, timeline }: TrendLifecycleVizProps) {
  return (
    <MetricCard
      title="Trend lifecycle"
      description="Where topics are in their hype cycle"
      className="border-black/[0.05] bg-white shadow-sm"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute left-4 right-4 top-6 h-0.5 bg-border" aria-hidden />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className={cn(
                  "relative rounded-lg border p-4 transition-shadow hover:shadow-md",
                  stageColors[stage.stage]
                )}
              >
                <div
                  className={cn(
                    "absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full ring-4 ring-background",
                    stageDot[stage.stage]
                  )}
                />
                <p className="mt-2 text-[10px] font-medium text-muted-foreground">
                  {stage.label}
                </p>
                <p className="mt-1 text-3xl font-semibold tabular-nums">{stage.count}</p>
                <ul className="mt-3 space-y-1">
                  {stage.trends.map((t) => (
                    <li
                      key={t}
                      className="truncate text-[11px] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-[11px] font-medium text-muted-foreground">
            Overall momentum · last 6 weeks
          </p>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={timeline} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
                <defs>
                  <linearGradient id="lifecycleFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={CHART_COLORS[2]} stopOpacity={0.35} />
                    <stop offset="100%" stopColor={CHART_COLORS[2]} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="label"
                  tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  domain={[0, 100]}
                  tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  {...chartTooltipStyle}
                  contentStyle={{
                    ...chartTooltipStyle.contentStyle,
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke={CHART_COLORS[2]}
                  fill="url(#lifecycleFill)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </MetricCard>
  );
}
