"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import type { AboutFeature } from "@/lib/about";
import { cn } from "@/lib/utils";

type AboutFeaturesAccordionProps = {
  features: AboutFeature[];
};

export function AboutFeaturesAccordion({ features }: AboutFeaturesAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(features[0]?.title ?? null);

  return (
    <ul className="space-y-3">
      {features.map((item) => {
        const isOpen = openId === item.title;

        return (
          <li
            key={item.title}
            className="overflow-hidden rounded-2xl border border-black/[0.05] bg-white shadow-sm"
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.title)}
              className="flex w-full items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-muted/30"
              aria-expanded={isOpen}
            >
              <span className="min-w-0 flex-1">
                <span className="block font-medium text-foreground">{item.title}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{item.summary}</span>
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </button>

            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-200 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <div className="border-t border-border/50 px-5 pb-5 pt-2">
                  <ul className="list-disc space-y-3 pl-5 marker:text-primary">
                    {item.details.map((line) => (
                      <li key={line} className="text-sm leading-relaxed text-muted-foreground">
                        {line}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={item.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80"
                  >
                    Open {item.title}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
