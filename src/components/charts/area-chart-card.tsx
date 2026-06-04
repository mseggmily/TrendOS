"use client";

import { useId } from "react";
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
import {
  CHART_COLORS,
  chartAnimation,
  chartAxisStyle,
  chartGridStyle,
  chartTooltipStyle,
} from "@/components/charts/chart-theme";
import type { ChartPoint } from "@/types";

type AreaChartCardProps = {
  title: string;
  description?: string;
  data: ChartPoint[];
  dataKey?: keyof ChartPoint;
  secondaryKey?: keyof ChartPoint;
  height?: number;
  delay?: number;
  gradientId?: string;
};

export function AreaChartCard({
  title,
  description,
  data,
  dataKey = "value",
  secondaryKey,
  height = 280,
  delay = 0,
  gradientId: gradientIdProp,
}: AreaChartCardProps) {
  const uid = useId().replace(/:/g, "");
  const gradientId = gradientIdProp ?? `area-${uid}`;
  const secondaryGradId = `${gradientId}-secondary`;

  return (
    <MetricCard title={title} description={description} delay={delay}>
      <div style={{ height }} className="w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 12, right: 12, left: -8, bottom: 0 }}>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={CHART_COLORS[0]} stopOpacity={0.45} />
                <stop offset="100%" stopColor={CHART_COLORS[0]} stopOpacity={0} />
              </linearGradient>
              {secondaryKey && (
                <linearGradient id={secondaryGradId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={CHART_COLORS[1]} stopOpacity={0.2} />
                  <stop offset="100%" stopColor={CHART_COLORS[1]} stopOpacity={0} />
                </linearGradient>
              )}
            </defs>
            <CartesianGrid {...chartGridStyle} />
            <XAxis dataKey="label" {...chartAxisStyle} />
            <YAxis
              {...chartAxisStyle}
              tickFormatter={(v) => (v >= 1000 ? `${(v / 1000).toFixed(0)}k` : String(v))}
            />
            <Tooltip {...chartTooltipStyle} />
            {secondaryKey && (
              <Area
                type="monotone"
                dataKey={secondaryKey}
                stroke={CHART_COLORS[1]}
                fill={`url(#${secondaryGradId})`}
                strokeWidth={1.5}
                strokeOpacity={0.5}
                strokeDasharray="4 4"
                {...chartAnimation}
              />
            )}
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke={CHART_COLORS[0]}
              fill={`url(#${gradientId})`}
              strokeWidth={2.5}
              {...chartAnimation}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </MetricCard>
  );
}
