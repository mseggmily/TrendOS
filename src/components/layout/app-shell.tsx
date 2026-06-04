import { SiteHeader } from "@/components/layout/site-header";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="relative flex-1 overflow-y-auto">
        <div className="pointer-events-none absolute inset-0 gradient-mesh opacity-30" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-8 md:px-8 md:py-10">
          {children}
        </div>
      </main>

      <footer className="border-t border-border/50 bg-background py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 text-center text-xs text-muted-foreground sm:flex-row sm:justify-between md:px-8">
          <p>TrendOS · Scale your social media</p>
          <p>Built for marketing teams</p>
        </div>
      </footer>
    </div>
  );
}
