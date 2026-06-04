"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandVoiceSelector } from "@/components/content-lab/brand-voice-selector";
import {
  GeneratedOutputCard,
  RepurposeOutputCard,
} from "@/components/content-lab/generated-output-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { OutputCardSkeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/shared/empty-state";
import {
  brandVoices,
  defaultTopic,
  getGenerations,
  getRepurposeOutputs,
  repurposeSource,
} from "@/data/mock/content-lab";
import type {
  BrandVoiceId,
  ContentToolId,
  GeneratedContent,
  SavedContentIdea,
} from "@/types";
import {
  FileText,
  Layers,
  Loader2,
  MessageSquare,
  Sparkles,
  Wand2,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const tools: { id: ContentToolId; label: string; icon: typeof FileText; description: string }[] =
  [
    {
      id: "post",
      label: "Post Generator",
      icon: FileText,
      description: "Full posts, threads, and long-form",
    },
    {
      id: "hook",
      label: "Hook Generator",
      icon: Zap,
      description: "Scroll-stopping openers",
    },
    {
      id: "caption",
      label: "Caption Generator",
      icon: MessageSquare,
      description: "Platform-native captions",
    },
    {
      id: "repurpose",
      label: "Repurposing Engine",
      icon: Layers,
      description: "One source → many formats",
    },
  ];

export function ContentLabWorkspace() {
  const [voice, setVoice] = useState<BrandVoiceId>("founder");
  const [tool, setTool] = useState<ContentToolId>("post");
  const [topic, setTopic] = useState(defaultTopic);
  const [generating, setGenerating] = useState(false);
  const [outputs, setOutputs] = useState<GeneratedContent[]>([]);
  const [repurposeResults, setRepurposeResults] = useState<
    ReturnType<typeof getRepurposeOutputs>
  >([]);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [savedIdeas, setSavedIdeas] = useState<SavedContentIdea[]>([]);
  const [savedMap, setSavedMap] = useState<Record<string, string>>({});

  const handleGenerate = useCallback(async () => {
    setGenerating(true);
    setHasGenerated(false);
    await new Promise((r) => setTimeout(r, 900));

    if (tool === "repurpose") {
      setRepurposeResults(getRepurposeOutputs(voice));
      setOutputs([]);
    } else {
      setOutputs(getGenerations(tool, voice));
      setRepurposeResults([]);
    }
    setGenerating(false);
    setHasGenerated(true);
  }, [tool, voice]);

  const handleSave = useCallback(
    (content: GeneratedContent, campaignId: string, campaignName: string) => {
      const idea: SavedContentIdea = {
        id: `saved-${Date.now()}`,
        contentId: content.id,
        campaignId,
        campaignName,
        savedAt: "Just now",
        preview: content.body.slice(0, 80) + "…",
        tool: content.tool,
        voice: content.voice,
      };
      setSavedIdeas((prev) => [idea, ...prev]);
      setSavedMap((prev) => ({ ...prev, [content.id]: campaignId }));
    },
    []
  );

  const activeTool = tools.find((t) => t.id === tool)!;

  return (
    <div className="space-y-8">
      <BrandVoiceSelector voices={brandVoices} selected={voice} onSelect={setVoice} />

      <div className="grid gap-6 xl:grid-cols-12">
        {/* Tool panel */}
        <div className="xl:col-span-4">
          <div className="sticky top-20 space-y-4 glass-card p-5">
            <div className="flex items-center gap-2">
              <Wand2 className="h-4 w-4 text-primary" />
              <h2 className="text-sm font-semibold">AI generators</h2>
            </div>

            <div className="space-y-1">
              {tools.map((t) => {
                const Icon = t.icon;
                const isActive = tool === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => {
                      setTool(t.id);
                      setHasGenerated(false);
                    }}
                    className={cn(
                      "flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
                      isActive
                        ? "bg-primary/10 text-foreground"
                        : "text-muted-foreground hover:bg-muted/30 hover:text-foreground"
                    )}
                  >
                    <Icon
                      className={cn("mt-0.5 h-4 w-4 shrink-0", isActive && "text-primary")}
                    />
                    <div>
                      <p className="text-sm font-medium">{t.label}</p>
                      <p className="text-[11px] text-muted-foreground">{t.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="space-y-2 border-t border-border/50 pt-4">
              <label htmlFor="topic" className="text-xs font-medium text-muted-foreground">
                Topic / brief
              </label>
              <Input
                id="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="What should we generate?"
                className="bg-background/50"
              />
            </div>

            {tool === "repurpose" && (
              <div className="rounded-lg border border-dashed border-border/80 bg-muted/15 p-3">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Source content
                </p>
                <p className="mt-1 text-xs font-medium">{repurposeSource.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                  {repurposeSource.body}
                </p>
              </div>
            )}

            <Button
              className="w-full gap-2"
              onClick={handleGenerate}
              disabled={generating}
            >
              {generating ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Generating…
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" />
                  Generate {activeTool.label.replace(" Generator", "").replace(" Engine", "")}
                </>
              )}
            </Button>

            <p className="text-center text-[10px] text-muted-foreground">
              Demo mode · pre-written examples per voice
            </p>
          </div>
        </div>

        {/* Output panel */}
        <div className="xl:col-span-8">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold">Generated output</h2>
              <p className="text-xs text-muted-foreground">
                {brandVoices.find((v) => v.id === voice)?.name} voice · {activeTool.label}
              </p>
            </div>
            {hasGenerated && (
              <Badge variant="outline" className="gap-1 font-normal">
                <Sparkles className="h-3 w-3 text-primary" />
                {tool === "repurpose" ? repurposeResults.length : outputs.length} variants
              </Badge>
            )}
          </div>

          <AnimatePresence mode="wait">
            {generating && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="h-5 w-5 text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-sm font-medium">Crafting {activeTool.label.toLowerCase()}…</p>
                    <p className="text-xs text-muted-foreground">
                      Applying {brandVoices.find((v) => v.id === voice)?.name} voice
                    </p>
                  </div>
                </div>
                <OutputCardSkeleton />
                <OutputCardSkeleton />
              </motion.div>
            )}

            {!generating && !hasGenerated && (
              <EmptyState
                key="empty"
                icon={Wand2}
                title="Ready to generate"
                description="Select a brand voice, choose a generator, and hit Generate to see AI-crafted content examples."
                action={{ label: "Generate now", onClick: handleGenerate }}
              />
            )}

            {!generating && hasGenerated && tool !== "repurpose" && (
              <motion.div key="outputs" className="space-y-4">
                {outputs.map((output, i) => (
                  <GeneratedOutputCard
                    key={output.id}
                    content={output}
                    index={i}
                    onSave={handleSave}
                    savedCampaignId={savedMap[output.id]}
                  />
                ))}
              </motion.div>
            )}

            {!generating && hasGenerated && tool === "repurpose" && (
              <motion.div key="repurpose" className="space-y-4">
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Repurposing complete
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    1 source → {repurposeResults.length} platform-native formats
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {repurposeResults.map((item, i) => (
                    <RepurposeOutputCard
                      key={`${item.platform}-${i}`}
                      platform={item.platform}
                      format={item.format}
                      content={item.content}
                      index={i}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Saved ideas */}
      {savedIdeas.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5"
        >
          <div className="mb-4 flex items-center gap-2">
            <Badge variant="success">{savedIdeas.length} saved</Badge>
            <h2 className="text-sm font-semibold">Ideas added to campaigns</h2>
          </div>
          <ul className="space-y-2">
            {savedIdeas.map((idea) => (
              <li
                key={idea.id}
                className="flex flex-col gap-1 rounded-lg border border-border/50 bg-card/60 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-sm font-medium">{idea.campaignName}</p>
                  <p className="text-xs text-muted-foreground line-clamp-1">{idea.preview}</p>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                  <Badge variant="outline" className="capitalize text-[9px]">
                    {idea.tool}
                  </Badge>
                  <span>{idea.savedAt}</span>
                </div>
              </li>
            ))}
          </ul>
        </motion.section>
      )}
    </div>
  );
}
