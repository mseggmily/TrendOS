"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { MetricCard } from "@/components/cards/metric-card";
import {
  CHART_COLORS,
  chartAnimation,
  chartAxisStyle,
  chartGridStyle,
  chartTooltipStyle,
} from "@/components/charts/chart-theme";
import type { ChartPoint } from "@/types";

type BarChartCardProps = {
  title: string;
  description?: string;
  data: ChartPoint[];
  dataKey?: keyof ChartPoint;
  height?: number;
  layout?: "horizontal" | "vertical";
  delay?: number;
};

export function BarChartCard({
  title,
  description,
  data,
  dataKey = "value",
  height = 280,
  layout = "horizontal",
  delay = 0,
}: BarChartCardProps) {
  const isVertical = layout === "vertical";

  return (
    <MetricCard title={title} description={description} delay={delay}>
      <div style={{ height }} className="w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout={isVertical ? "vertical" : "horizontal"}
            margin={{ top: 12, right: 12, left: isVertical ? 4 : -8, bottom: 0 }}
          >
            <CartesianGrid {...chartGridStyle} />
            {isVertical ? (
              <>
                <XAxis type="number" hide />
                <YAxis
                  type="category"
                  dataKey="label"
                  {...chartAxisStyle}
                  width={72}
                />
              </>
            ) : (
              <>
                <XAxis dataKey="label" {...chartAxisStyle} />
                <YAxis {...chartAxisStyle} />
              </>
            )}
            <Tooltip {...chartTooltipStyle} />
            <Bar
              dataKey={dataKey}
              fill={CHART_COLORS[0]}
              radius={isVertical ? [0, 6, 6, 0] : [6, 6, 0, 0]}
              maxBarSize={44}
              {...chartAnimation}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </MetricCard>
  );
}
