"use client";

import { motion } from "framer-motion";
import { MetricCard } from "@/components/cards/metric-card";
import { formatNumber } from "@/lib/utils";
import type { TopicGrowthRow } from "@/types";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const lifecycleStyles = {
  nascent: "text-sky-700 bg-sky-50 border-sky-200/60",
  accelerating: "text-emerald-700 bg-emerald-50 border-emerald-200/60",
  peak: "text-amber-700 bg-amber-50 border-amber-200/60",
  declining: "text-muted-foreground bg-muted/50 border-border",
};

const lifecycleLabels = {
  nascent: "Just starting",
  accelerating: "Taking off",
  peak: "Peak hype",
  declining: "Cooling down",
};

type TopicGrowthTableProps = {
  rows: TopicGrowthRow[];
};

export function TopicGrowthTable({ rows }: TopicGrowthTableProps) {
  return (
    <MetricCard
      title="Topic growth"
      description="What's growing and where to post it"
      className="h-full border-black/[0.05] bg-white shadow-sm"
    >
      <div className="overflow-x-auto -mx-1">
        <table className="w-full min-w-[640px] text-xs">
          <thead>
            <tr className="border-b border-border text-left text-[11px] text-muted-foreground">
              <th className="px-2 pb-3 font-medium">Topic</th>
              <th className="px-2 pb-3 text-right font-medium">Heat</th>
              <th className="px-2 pb-3 text-right font-medium">This week</th>
              <th className="px-2 pb-3 text-right font-medium">This month</th>
              <th className="px-2 pb-3 text-right font-medium">Posts</th>
              <th className="px-2 pb-3 font-medium">Where</th>
              <th className="px-2 pb-3 font-medium">Vibe</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <motion.tr
                key={row.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                className="group cursor-default border-b border-border/30 transition-colors last:border-0 hover:bg-primary/5"
              >
                <td className="px-2 py-3">
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {row.topic}
                  </p>
                  <p className="text-[10px] text-muted-foreground">{row.category}</p>
                </td>
                <td className="px-2 py-3 text-right">
                  <span
                    className={cn(
                      "tabular-nums font-semibold",
                      row.velocity >= 90 ? "text-primary" : "text-foreground"
                    )}
                  >
                    {row.velocity}
                  </span>
                </td>
                <td className="px-2 py-3 text-right">
                  <span className="inline-flex items-center gap-0.5 tabular-nums font-medium text-emerald-600">
                    <ArrowUpRight className="h-3 w-3" />
                    {row.growth7d}%
                  </span>
                </td>
                <td className="px-2 py-3 text-right tabular-nums text-muted-foreground">
                  +{row.growth30d}%
                </td>
                <td className="px-2 py-3 text-right tabular-nums text-muted-foreground">
                  {formatNumber(row.mentions)}
                </td>
                <td className="px-2 py-3">
                  <div className="flex flex-wrap gap-1">
                    {row.platforms.map((p) => (
                      <span
                        key={p}
                        className="rounded-full border border-border/60 px-1.5 py-0.5 text-[9px] text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-foreground"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-2 py-3">
                  <span
                    className={cn(
                      "inline-block rounded-full border px-2 py-0.5 text-[9px] font-medium",
                      lifecycleStyles[row.lifecycle]
                    )}
                  >
                    {lifecycleLabels[row.lifecycle]}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </MetricCard>
  );
}
