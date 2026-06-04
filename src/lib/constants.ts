import {
  BarChart3,
  CalendarRange,
  FlaskConical,
  LayoutDashboard,
  Flame,
  Radio,
  Eye,
  UserRoundSearch,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  description?: string;
};

export const APP_NAME = "TrendOS";
export const APP_TAGLINE = "Scale your social media";

export const MAIN_NAV: NavItem[] = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
    description: "Marketing performance at a glance",
  },
  {
    title: "Trends",
    href: "/trends-radar",
    icon: Flame,
    description: "Topics to build campaigns around",
  },
  {
    title: "Competitors",
    href: "/competitor-watch",
    icon: Eye,
    description: "Track rival brands & strategies",
  },
  {
    title: "Content",
    href: "/content-lab",
    icon: FlaskConical,
    description: "Generate on-brand posts & copy",
  },
  {
    title: "Campaigns",
    href: "/campaign-planner",
    icon: CalendarRange,
    description: "Plan and track launches",
  },
  {
    title: "Influencers",
    href: "/creator-tracker",
    icon: UserRoundSearch,
    description: "Find creators for partnerships",
  },
  {
    title: "Listening",
    href: "/social-listening",
    icon: Radio,
    description: "Brand mentions & sentiment",
  },
  {
    title: "Reports",
    href: "/reports",
    icon: BarChart3,
    description: "Share results with stakeholders",
  },
];

export const WORKSPACE = {
  name: "Acme Co.",
  plan: "Marketing Pro",
};
