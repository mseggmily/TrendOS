"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bell, Info, Menu, Plus, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MAIN_NAV, WORKSPACE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 shrink-0">
      <div className="relative overflow-hidden rounded-b-[1.75rem] border-b border-primary/10 bg-gradient-to-b from-[#fff8f4] via-[#fffdfb] to-background shadow-[0_8px_32px_-12px_oklch(0.62_0.19_25/0.12)] dark:from-card dark:via-background dark:to-background dark:shadow-[0_8px_32px_-12px_oklch(0_0_0/0.35)]">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/8 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 pt-4 md:px-8 md:pt-5">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="flex shrink-0 items-center">
              <Image
                src="/brand/trendos-logo.png"
                alt="TrendOS"
                width={180}
                height={48}
                priority
                className="h-9 w-auto object-contain sm:h-10"
              />
            </Link>

            <div className="hidden items-center gap-2 md:flex">
              <span className="text-muted-foreground/40">·</span>
              <Badge variant="secondary" className="rounded-full px-2.5 py-0.5 text-[11px] font-normal">
                {WORKSPACE.name}
              </Badge>
              <Badge variant="outline" className="rounded-full border-primary/20 px-2 py-0.5 text-[10px] font-normal text-primary">
                {WORKSPACE.plan}
              </Badge>
            </div>

            <div className="ml-auto flex items-center gap-2">
              <ThemeToggle />
              <Button size="sm" className="rounded-full" asChild>
                <Link href="/about">
                  <Info className="h-3.5 w-3.5" />
                  About
                </Link>
              </Button>
              <Button size="sm" className="hidden rounded-full sm:inline-flex">
                <Plus className="h-3.5 w-3.5" />
                Draft
              </Button>
              <Button variant="ghost" size="icon" className="relative rounded-full">
                <Bell className="h-4 w-4" />
                <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-primary ring-2 ring-background" />
              </Button>
              <Avatar className="hidden h-9 w-9 border-2 border-background shadow-sm sm:flex">
                <AvatarFallback className="bg-primary/10 text-xs text-primary">AG</AvatarFallback>
              </Avatar>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full lg:hidden"
                onClick={() => setMobileMenuOpen((o) => !o)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <nav className="mt-4 hidden lg:block" aria-label="Main navigation">
            <div className="relative flex items-center gap-1 rounded-2xl bg-card/80 p-1.5 shadow-inner shadow-black/[0.03] ring-1 ring-border dark:bg-card/50 dark:shadow-none">
              {MAIN_NAV.map((item) => {
                const isActive =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);
                const Icon = item.icon;

                return (
                  <Link key={item.href} href={item.href} className="relative flex-1">
                    {isActive && (
                      <motion.div
                        layoutId="header-nav-pill"
                        className="absolute inset-0 rounded-xl bg-background shadow-sm ring-1 ring-border dark:bg-card"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span
                      className={cn(
                        "relative flex flex-col items-center gap-1 rounded-xl px-2 py-2.5 text-center transition-colors",
                        isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <Icon className={cn("h-4 w-4", isActive && "scale-110")} />
                      <span className="text-[11px] font-medium leading-none">{item.title}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>

          <nav
            className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-none lg:hidden"
            aria-label="Main navigation"
          >
            {MAIN_NAV.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex shrink-0 items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                      : "bg-card/80 text-muted-foreground ring-1 ring-border"
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.button
                type="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] lg:hidden"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              />
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="relative z-50 border-t border-primary/10 bg-card px-4 py-4 shadow-lg lg:hidden"
              >
                <div className="grid grid-cols-2 gap-2">
                  {MAIN_NAV.map((item) => {
                    const isActive =
                      pathname === item.href || pathname.startsWith(`${item.href}/`);
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium",
                          isActive
                            ? "bg-primary/10 text-primary ring-1 ring-primary/20"
                            : "bg-muted/50 text-muted-foreground"
                        )}
                      >
                        <Icon className="h-4 w-4 shrink-0" />
                        {item.title}
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
