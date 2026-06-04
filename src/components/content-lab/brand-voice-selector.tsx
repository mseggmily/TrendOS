"use client";

import { motion } from "framer-motion";
import type { BrandVoice, BrandVoiceId } from "@/types";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const voiceAccent: Record<BrandVoiceId, string> = {
  founder: "border-fuchsia-500/40 bg-fuchsia-500/10 ring-fuchsia-500/30",
  professional: "border-cyan-500/40 bg-cyan-500/10 ring-cyan-500/30",
  creator: "border-pink-500/40 bg-pink-500/10 ring-pink-500/30",
  playful: "border-orange-500/40 bg-orange-500/10 ring-orange-500/30",
  web3: "border-yellow-500/40 bg-yellow-500/10 ring-yellow-500/30",
};

type BrandVoiceSelectorProps = {
  voices: BrandVoice[];
  selected: BrandVoiceId;
  onSelect: (id: BrandVoiceId) => void;
};

export function BrandVoiceSelector({ voices, selected, onSelect }: BrandVoiceSelectorProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Brand voice
        </h2>
        <span className="text-xs text-muted-foreground">Shapes tone across all generators</span>
      </div>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
        {voices.map((voice, i) => {
          const isSelected = selected === voice.id;
          return (
            <motion.button
              key={voice.id}
              type="button"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => onSelect(voice.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "relative rounded-xl border p-4 text-left transition-all",
                isSelected
                  ? cn("ring-2", voiceAccent[voice.id])
                  : "border-border/60 bg-card/40 hover:border-border hover:bg-card/70"
              )}
            >
              {isSelected && (
                <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3 w-3" />
                </span>
              )}
              <p className="text-sm font-semibold">{voice.name}</p>
              <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                {voice.description}
              </p>
              <p className="mt-2 text-[10px] text-muted-foreground/80">{voice.sampleTone}</p>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
