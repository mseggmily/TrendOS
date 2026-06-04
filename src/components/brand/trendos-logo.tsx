import { cn } from "@/lib/utils";

type TrendOSLogoMarkProps = {
  className?: string;
};

/** TrendOS brand mark — rising bars + signal dot (trend momentum) */
export function TrendOSLogoMark({ className }: TrendOSLogoMarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-full w-full", className)}
      aria-hidden
    >
      <rect x="5" y="19" width="5.5" height="8" rx="2.75" fill="currentColor" opacity="0.45" />
      <rect x="13.25" y="14" width="5.5" height="13" rx="2.75" fill="currentColor" opacity="0.7" />
      <rect x="21.5" y="9" width="5.5" height="18" rx="2.75" fill="currentColor" />
      <circle cx="24.25" cy="6" r="3" fill="currentColor" />
      <path
        d="M7.5 6.5C11 9.5 15.5 8 19 5.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

type TrendOSLogoProps = {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
};

export function TrendOSLogo({
  className,
  markClassName,
  showWordmark = false,
}: TrendOSLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary p-2 text-primary-foreground shadow-md shadow-primary/25",
          markClassName
        )}
      >
        <TrendOSLogoMark />
      </div>
      {showWordmark && (
        <div className="min-w-0">
          <p className="truncate text-lg font-semibold tracking-tight">TrendOS</p>
          <p className="truncate text-xs text-muted-foreground">Scale your social media</p>
        </div>
      )}
    </div>
  );
}
