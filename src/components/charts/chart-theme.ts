export const CHART_COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

export const CHART_GRADIENTS = [
  { start: "var(--chart-1)", end: "oklch(0.72 0.26 340 / 0)" },
  { start: "var(--chart-2)", end: "oklch(0.78 0.15 195 / 0)" },
  { start: "var(--chart-3)", end: "oklch(0.8 0.19 55 / 0)" },
];

export const chartAnimation = {
  animationDuration: 1400,
  animationEasing: "ease-out" as const,
  isAnimationActive: true,
};

export const chartGridStyle = {
  strokeDasharray: "3 6",
  stroke: "var(--border)",
  strokeOpacity: 0.6,
  vertical: false,
};

export const chartAxisStyle = {
  tick: { fill: "var(--muted-foreground)", fontSize: 11 },
  axisLine: false,
  tickLine: false,
};

export const chartTooltipStyle = {
  contentStyle: {
    backgroundColor: "var(--popover)",
    backdropFilter: "blur(12px)",
    border: "1px solid var(--border)",
    borderRadius: "10px",
    fontSize: "12px",
    color: "var(--popover-foreground)",
    boxShadow: "0 8px 32px oklch(0 0 0 / 0.15)",
    padding: "10px 14px",
  },
  itemStyle: { color: "var(--popover-foreground)", padding: "2px 0" },
  labelStyle: {
    color: "var(--muted-foreground)",
    marginBottom: 6,
    fontSize: 11,
    fontWeight: 500,
  },
  cursor: { fill: "oklch(0.72 0.26 340 / 0.08)", opacity: 1, radius: 6 },
};
