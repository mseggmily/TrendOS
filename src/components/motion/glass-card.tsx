"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  delay?: number;
};

export function GlassCard({
  children,
  className,
  hover = true,
  glow = false,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: EASE.spring }}
      whileHover={
        hover
          ? {
              y: -3,
              transition: { duration: 0.25, ease: EASE.outExpo },
            }
          : undefined
      }
      className={cn(
        "glass-card glass-card-hover",
        glow && "gradient-border",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

type StaggerGridProps = {
  children: React.ReactNode;
  className?: string;
};

export function StaggerGrid({ children, className }: StaggerGridProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        animate: { transition: { staggerChildren: 0.06 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE.spring } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
