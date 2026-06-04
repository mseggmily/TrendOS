"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { MetricCard } from "@/components/cards/metric-card";
import {
  CHART_COLORS,
  chartAnimation,
  chartTooltipStyle,
} from "@/components/charts/chart-theme";
import type { ChartPoint } from "@/types";

type DonutChartCardProps = {
  title: string;
  description?: string;
  data: ChartPoint[];
  height?: number;
  delay?: number;
};

export function DonutChartCard({
  title,
  description,
  data,
  height = 280,
  delay = 0,
}: DonutChartCardProps) {
  return (
    <MetricCard title={title} description={description} delay={delay}>
      <div style={{ height }} className="w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip {...chartTooltipStyle} />
            <Pie
              data={data}
              dataKey="value"
              nameKey="label"
              cx="50%"
              cy="50%"
              innerRadius="58%"
              outerRadius="78%"
              paddingAngle={4}
              strokeWidth={0}
              {...chartAnimation}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={CHART_COLORS[index % CHART_COLORS.length]}
                  className="transition-opacity hover:opacity-80"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2">
        {data.map((item, index) => (
          <div
            key={item.label}
            className="flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <span
              className="h-2 w-2 rounded-full ring-2 ring-transparent transition-all hover:ring-white/20"
              style={{ backgroundColor: CHART_COLORS[index % CHART_COLORS.length] }}
            />
            {item.label} ({item.value}%)
          </div>
        ))}
      </div>
    </MetricCard>
  );
}
