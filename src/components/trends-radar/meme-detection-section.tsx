"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Sparkles, MessageSquare } from "lucide-react";
import type { MemeSignal } from "@/types";

type MemeDetectionSectionProps = {
  memes: MemeSignal[];
};

export function MemeDetectionSection({ memes }: MemeDetectionSectionProps) {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-amber-500" />
          <h2 className="text-base font-medium">Meme & format ideas</h2>
          <Badge variant="warning" className="rounded-full text-[10px]">
            Easy wins
          </Badge>
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {memes.map((meme, i) => (
          <motion.div
            key={meme.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ scale: 1.02 }}
            className="group w-[280px] shrink-0 rounded-2xl border border-amber-200/60 bg-gradient-to-br from-amber-50/80 to-white p-4 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="font-medium leading-snug group-hover:text-amber-700 transition-colors">
                {meme.name}
              </p>
              <span className="text-lg font-semibold tabular-nums text-amber-600">
                {meme.viralScore}
              </span>
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <Badge variant="outline" className="rounded-full text-[9px]">
                {meme.platform}
              </Badge>
              <Badge variant="secondary" className="rounded-full text-[9px]">
                {meme.format}
              </Badge>
            </div>
            <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
              <MessageSquare className="mt-0.5 h-3 w-3 shrink-0 text-muted-foreground/60" />
              {meme.sample}
            </p>
            <div className="mt-3 flex items-center justify-between border-t border-border/40 pt-3 text-[10px]">
              <span className="font-medium text-emerald-600">+{meme.growth24h}% today</span>
              <span className="text-muted-foreground">→ {meme.relatedTrend}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
