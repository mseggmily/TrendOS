"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MetricCard } from "@/components/cards/metric-card";
import type { PlatformHeatmapCell } from "@/types";
import { cn } from "@/lib/utils";

type PlatformHeatmapProps = {
  cells: PlatformHeatmapCell[];
  topics: string[];
  platforms: string[];
};

function intensityColor(value: number, hovered: boolean): string {
  if (value >= 90) return hovered ? "bg-primary shadow-md" : "bg-primary/80";
  if (value >= 75) return hovered ? "bg-primary/90" : "bg-primary/55";
  if (value >= 60) return hovered ? "bg-rose-400/90" : "bg-rose-400/45";
  if (value >= 45) return hovered ? "bg-amber-400/80" : "bg-amber-400/40";
  if (value >= 30) return hovered ? "bg-amber-300/70" : "bg-amber-300/25";
  return hovered ? "bg-muted-foreground/30" : "bg-muted/50";
}

export function PlatformHeatmap({ cells, topics, platforms }: PlatformHeatmapProps) {
  const [hovered, setHovered] = useState<PlatformHeatmapCell | null>(null);

  const lookup = useMemo(() => {
    const map = new Map<string, number>();
    cells.forEach((c) => map.set(`${c.topic}-${c.platform}`, c.intensity));
    return map;
  }, [cells]);

  return (
    <MetricCard
      title="Where it's popping"
      description="Which topics are hot on each platform"
      className="h-full border-border bg-card shadow-sm"
      action={
        <AnimatePresence mode="wait">
          {hovered ? (
            <motion.span
              key={`${hovered.topic}-${hovered.platform}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-[10px] tabular-nums text-primary"
            >
              {hovered.topic} · {hovered.platform} · {hovered.intensity}
            </motion.span>
          ) : (
            <span className="text-[10px] text-muted-foreground">Hover a square</span>
          )}
        </AnimatePresence>
      }
    >
      <div className="overflow-x-auto">
        <div className="min-w-[480px]">
          <div
            className="grid gap-1"
            style={{ gridTemplateColumns: `100px repeat(${platforms.length}, 1fr)` }}
          >
            <div />
            {platforms.map((p) => (
              <div
                key={p}
                className="pb-1 text-center text-[10px] font-medium text-muted-foreground"
              >
                {p}
              </div>
            ))}
            {topics.flatMap((topic) => [
              <div
                key={`label-${topic}`}
                className="flex items-center pr-2 font-sans text-[11px] font-medium leading-tight text-foreground/90"
              >
                {topic}
              </div>,
              ...platforms.map((platform) => {
                const intensity = lookup.get(`${topic}-${platform}`) ?? 0;
                const isHovered =
                  hovered?.topic === topic && hovered?.platform === platform;
                return (
                  <motion.button
                    key={`${topic}-${platform}`}
                    type="button"
                    onMouseEnter={() => setHovered({ topic, platform, intensity })}
                    onMouseLeave={() => setHovered(null)}
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className={cn(
                      "aspect-square min-h-[36px] w-full rounded-md border border-transparent transition-shadow",
                      intensityColor(intensity, isHovered),
                      isHovered && "z-10 ring-2 ring-foreground/20"
                    )}
                    aria-label={`${topic} on ${platform}: ${intensity}`}
                  />
                );
              }),
            ])}
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2">
        <div className="flex h-2 flex-1 max-w-[200px] overflow-hidden rounded-full">
          {[20, 40, 60, 80, 100].map((_, i) => (
            <div
              key={i}
              className={cn(
                "flex-1",
                i === 0 && "bg-muted/50",
                i === 1 && "bg-amber-600/30",
                i === 2 && "bg-amber-500/45",
                i === 3 && "bg-primary/45",
                i === 4 && "bg-primary/80"
              )}
            />
          ))}
        </div>
        <span className="text-[9px] text-muted-foreground">Quiet → Buzzing</span>
      </div>
    </MetricCard>
  );
}
