"use client";

import { useEffect, useState } from "react";
import { useSpring, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

type ParsedMetric = {
  prefix: string;
  num: number;
  suffix: string;
  decimals: number;
  useLocale: boolean;
};

function parseMetric(value: string | number): ParsedMetric {
  if (typeof value === "number") {
    return {
      prefix: "",
      num: value,
      suffix: "",
      decimals: Number.isInteger(value) ? 0 : 1,
      useLocale: value >= 1000,
    };
  }

  const match = value.match(/^([^0-9]*)([\d,.]+)(.*)$/);
  if (!match) {
    return { prefix: "", num: 0, suffix: value, decimals: 0, useLocale: false };
  }

  const raw = match[2].replace(/,/g, "");
  const num = parseFloat(raw);
  const decimals = raw.includes(".") ? raw.split(".")[1]?.length ?? 0 : 0;

  return {
    prefix: match[1],
    num: Number.isNaN(num) ? 0 : num,
    suffix: match[3],
    decimals,
    useLocale: num >= 1000 && !match[3],
  };
}

function formatValue(current: number, parsed: ParsedMetric): string {
  const formatted = parsed.useLocale
    ? Math.round(current).toLocaleString()
    : current.toFixed(parsed.decimals);
  return `${parsed.prefix}${formatted}${parsed.suffix}`;
}

type AnimatedMetricProps = {
  value: string | number;
  className?: string;
  delay?: number;
};

export function AnimatedMetric({ value, className, delay = 0 }: AnimatedMetricProps) {
  const parsed = parseMetric(value);
  const spring = useSpring(0, { stiffness: 60, damping: 20, mass: 0.8 });
  const [display, setDisplay] = useState(() => formatValue(0, parsed));

  useMotionValueEvent(spring, "change", (current) => {
    setDisplay(formatValue(current, parsed));
  });

  useEffect(() => {
    const timeout = setTimeout(() => spring.set(parsed.num), delay * 1000);
    return () => clearTimeout(timeout);
  }, [parsed.num, spring, delay]);

  return <span className={cn("tabular-nums", className)}>{display}</span>;
}
