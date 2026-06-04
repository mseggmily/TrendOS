"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { MetricCard } from "@/components/cards/metric-card";
import { CHART_COLORS, chartTooltipStyle } from "@/components/charts/chart-theme";
import type { PlatformMetric } from "@/types";

type PlatformPerformanceChartProps = {
  data: PlatformMetric[];
};

export function PlatformPerformanceChart({ data }: PlatformPerformanceChartProps) {
  const chartData = data.map((d) => ({
    platform: d.platform,
    reach: d.reach,
    engagement: d.engagement * 100,
    growth: d.growth,
  }));

  return (
    <MetricCard
      title="Channel performance"
      description="Reach, engagement & growth by platform"
      className="h-full"
    >
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
            <XAxis
              dataKey="platform"
              tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip {...chartTooltipStyle} />
            <Legend
              wrapperStyle={{ fontSize: 11, paddingTop: 12 }}
              formatter={(value) =>
                value === "reach" ? "Reach index" : value === "engagement" ? "Engagement %" : "Growth %"
              }
            />
            <Bar dataKey="reach" fill={CHART_COLORS[0]} radius={[4, 4, 0, 0]} maxBarSize={28} />
            <Bar dataKey="engagement" fill={CHART_COLORS[1]} radius={[4, 4, 0, 0]} maxBarSize={28} />
            <Bar dataKey="growth" fill={CHART_COLORS[2]} radius={[4, 4, 0, 0]} maxBarSize={28} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </MetricCard>
  );
}
