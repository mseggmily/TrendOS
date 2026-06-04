"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { campaigns } from "@/data/mock/campaigns";
import type { ContentToolId, GeneratedContent } from "@/types";
import { Bookmark, Check, Copy, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type GeneratedOutputCardProps = {
  content: GeneratedContent;
  index?: number;
  onSave: (content: GeneratedContent, campaignId: string, campaignName: string) => void;
  savedCampaignId?: string;
};

export function GeneratedOutputCard({
  content,
  index = 0,
  onSave,
  savedCampaignId,
}: GeneratedOutputCardProps) {
  const [showCampaignPicker, setShowCampaignPicker] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content.body);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = (campaignId: string, campaignName: string) => {
    onSave(content, campaignId, campaignName);
    setShowCampaignPicker(false);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      whileHover={{ y: -2 }}
      className="group relative overflow-hidden glass-card glass-card-hover border-white/[0.06] bg-card/25"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="border-b border-border/50 px-5 py-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-semibold">{content.title}</h3>
              <Badge variant="outline" className="text-[10px]">
                {content.platform}
              </Badge>
            </div>
            {content.meta && (
              <p className="mt-1 text-xs text-muted-foreground">{content.meta}</p>
            )}
          </div>
          {content.score && (
            <div className="flex items-center gap-1.5 rounded-lg bg-primary/10 px-2.5 py-1">
              <Sparkles className="h-3 w-3 text-primary" />
              <span className="text-sm font-bold tabular-nums text-primary">{content.score}</span>
            </div>
          )}
        </div>
      </div>

      <div className="px-5 py-4">
        <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-foreground/90">
          {content.body}
        </pre>
      </div>

      <div className="flex flex-wrap items-center gap-2 border-t border-border/50 bg-muted/10 px-5 py-3">
        <Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs" onClick={handleCopy}>
          {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
          {copied ? "Copied" : "Copy"}
        </Button>

        {savedCampaignId ? (
          <Badge variant="success" className="gap-1 text-[10px]">
            <Check className="h-3 w-3" />
            Saved to {campaigns.find((c) => c.id === savedCampaignId)?.name}
          </Badge>
        ) : (
          <Button
            variant="default"
            size="sm"
            className="h-8 gap-1.5 text-xs"
            onClick={() => setShowCampaignPicker(!showCampaignPicker)}
          >
            <Bookmark className="h-3 w-3" />
            Save to campaign
          </Button>
        )}
      </div>

      {showCampaignPicker && !savedCampaignId && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-border/50 bg-muted/20 px-5 py-3"
        >
          <p className="mb-2 text-[11px] font-medium text-muted-foreground">
            Select campaign
          </p>
          <div className="flex flex-wrap gap-2">
            {campaigns.map((campaign) => (
              <button
                key={campaign.id}
                type="button"
                onClick={() => handleSave(campaign.id, campaign.name)}
                className={cn(
                  "rounded-lg border border-border/60 bg-card px-3 py-2 text-left text-xs transition-colors hover:border-primary/40 hover:bg-primary/5",
                  campaign.status === "active" && "border-emerald-500/20"
                )}
              >
                <span className="font-medium">{campaign.name}</span>
                <span className="ml-2 capitalize text-muted-foreground">{campaign.status}</span>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.article>
  );
}

export function RepurposeOutputCard({
  platform,
  format,
  content,
  index = 0,
}: {
  platform: string;
  format: string;
  content: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.06 }}
      className="rounded-xl glass-card glass-card-hover border-white/[0.06] bg-card/25 p-4"
    >
      <div className="flex items-center gap-2">
        <Badge variant="default" className="text-[10px]">
          {platform}
        </Badge>
        <span className="text-xs text-muted-foreground">{format}</span>
      </div>
      <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-relaxed text-foreground/85">
        {content}
      </pre>
    </motion.div>
  );
}

export type SaveHandler = (
  content: GeneratedContent,
  campaignId: string,
  campaignName: string
) => void;

export function getToolLabel(tool: ContentToolId): string {
  const labels: Record<ContentToolId, string> = {
    post: "Post",
    hook: "Hook",
    caption: "Caption",
    repurpose: "Repurpose",
  };
  return labels[tool];
}
