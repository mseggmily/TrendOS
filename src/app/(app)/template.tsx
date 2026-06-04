"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

export default function PageTemplate({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: EASE.spring }}
    >
      {children}
    </motion.div>
  );
}
