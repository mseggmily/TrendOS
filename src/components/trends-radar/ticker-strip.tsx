"use client";

import { motion } from "framer-motion";
import { FEATURED_TOPICS, topicGrowthTable } from "@/data/mock/trends";

const tickerItems = FEATURED_TOPICS.map((topic) => {
  const row = topicGrowthTable.find((r) => r.topic === topic);
  return {
    topic,
    velocity: row?.velocity ?? 0,
    growth: row?.growth7d ?? 0,
  };
});

export function TickerStrip() {
  const duplicated = [...tickerItems, ...tickerItems];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-black/[0.05] bg-white py-2.5 shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent" />
      <motion.div
        className="flex w-max gap-8 px-4 text-xs"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {duplicated.map((item, i) => (
          <span key={`${item.topic}-${i}`} className="flex shrink-0 items-center gap-3 whitespace-nowrap">
            <span className="font-medium text-foreground">{item.topic}</span>
            <span className="tabular-nums text-primary">Heat {item.velocity}</span>
            <span className="tabular-nums text-emerald-600">↑ {item.growth}%</span>
            <span className="text-muted-foreground/30">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
