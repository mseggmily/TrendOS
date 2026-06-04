"use client";

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

type TrendVelocityChartProps = {
  data: ChartPoint[];
};

export function TrendVelocityChart({ data }: TrendVelocityChartProps) {
  return (
    <MetricCard
      title="Your trend momentum"
      description="Brand performance vs. category benchmark"
      className="h-full border-border bg-card shadow-sm"
      action={
        <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium tabular-nums text-emerald-700">
          +14% today
        </span>
      }
    >
      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 12, right: 12, left: -8, bottom: 0 }}>
            <defs>
              <linearGradient id="velocityFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={CHART_COLORS[0]} stopOpacity={0.4} />
                <stop offset="100%" stopColor={CHART_COLORS[0]} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="benchmarkFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={CHART_COLORS[1]} stopOpacity={0.15} />
                <stop offset="100%" stopColor={CHART_COLORS[1]} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
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
              formatter={(value: number, name: string) => [
                value,
                name === "value" ? "Your velocity" : "Benchmark",
              ]}
            />
            <Area
              type="monotone"
              dataKey="secondary"
              stroke={CHART_COLORS[1]}
              fill="url(#benchmarkFill)"
              strokeWidth={1.5}
              strokeDasharray="4 4"
              strokeOpacity={0.7}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke={CHART_COLORS[0]}
              fill="url(#velocityFill)"
              strokeWidth={2.5}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2 flex gap-6 text-xs text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="h-0.5 w-4 rounded bg-[var(--chart-1)]" />
          Your brand
        </span>
        <span className="flex items-center gap-2">
          <span className="h-0.5 w-4 rounded border border-dashed border-[var(--chart-2)]" />
          Category avg
        </span>
      </div>
    </MetricCard>
  );
}
