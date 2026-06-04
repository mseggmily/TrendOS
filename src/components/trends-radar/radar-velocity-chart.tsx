"use client";

import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { MetricCard } from "@/components/cards/metric-card";
import { CHART_COLORS, chartTooltipStyle } from "@/components/charts/chart-theme";
import type { ChartPoint } from "@/types";

type RadarVelocityChartProps = {
  data: ChartPoint[];
};

export function RadarVelocityChart({ data }: RadarVelocityChartProps) {
  const latest = data[data.length - 1]?.value ?? 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <MetricCard
        title="Trend heat over time"
        description="How hot your niche is · last 7 days"
        className="border-black/[0.05] bg-white shadow-sm"
        action={
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold tabular-nums text-primary">{latest}</span>
            <span className="text-xs text-muted-foreground">/ 100</span>
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
              ↑ 36% this week
            </span>
          </div>
        }
      >
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="radarVelocityFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={CHART_COLORS[0]} stopOpacity={0.45} />
                  <stop offset="100%" stopColor={CHART_COLORS[0]} stopOpacity={0} />
                </linearGradient>
                <linearGradient id="radarPriorFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={CHART_COLORS[4]} stopOpacity={0.12} />
                  <stop offset="100%" stopColor={CHART_COLORS[4]} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="1 4" stroke="var(--border)" vertical={false} />
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
                  fontSize: 12,
                }}
              />
              <Area
                type="monotone"
                dataKey="secondary"
                stroke="var(--muted-foreground)"
                fill="url(#radarPriorFill)"
                strokeWidth={1}
                strokeOpacity={0.4}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke={CHART_COLORS[0]}
                fill="url(#radarVelocityFill)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </MetricCard>
    </motion.div>
  );
}
