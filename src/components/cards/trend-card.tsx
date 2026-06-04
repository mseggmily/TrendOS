"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatNumber } from "@/lib/utils";
import { EASE } from "@/lib/motion";
import type { TrendItem } from "@/types";

const sentimentVariant = {
  positive: "success" as const,
  neutral: "secondary" as const,
  negative: "destructive" as const,
};

type TrendCardProps = {
  trend: TrendItem;
  index?: number;
};

export function TrendCard({ trend, index = 0 }: TrendCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05, duration: 0.35, ease: EASE.spring }}
      whileHover={{ x: 4, transition: { duration: 0.2 } }}
    >
      <Card className="glass-card glass-card-hover cursor-default border-white/[0.06] bg-card/25">
        <CardContent className="flex items-center justify-between gap-4 p-4">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <p className="truncate font-medium transition-colors group-hover:text-primary">
                {trend.topic}
              </p>
              <Badge variant="outline" className="text-[10px]">
                {trend.platform}
              </Badge>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              {trend.category} · {formatNumber(trend.mentions)} mentions
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-1">
            <motion.span
              key={trend.velocity}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-lg font-semibold tabular-nums text-primary"
            >
              {trend.velocity}
            </motion.span>
            <Badge variant={sentimentVariant[trend.sentiment]} className="capitalize">
              {trend.sentiment}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
