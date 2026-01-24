"use client";
import { Database, Workflow, Bot, Settings2, FileSpreadsheet, Mail, Phone, Github, Linkedin, MessageCircle, Users, Target, BarChart3, TrendingUp, Shield, Zap, Briefcase } from "lucide-react";

type IconName = "db"|"workflow"|"bot"|"ops"|"sheets"|"mail"|"phone"|"github"|"linkedin"|"tg"|"team"|"kpi"|"analytics"|"quality"|"strategy"|"process"|"leadership";

const map = {
  db: Database,
  workflow: Workflow,
  bot: Bot,
  ops: Settings2,
  sheets: FileSpreadsheet,
  mail: Mail,
  phone: Phone,
  github: Github,
  linkedin: Linkedin,
  tg: MessageCircle,
  team: Users,
  kpi: Target,
  analytics: BarChart3,
  quality: Shield,
  strategy: TrendingUp,
  process: Zap,
  leadership: Briefcase
} as const;

export function IconBadge({ name, label }: { name: IconName; label: string }) {
  const Ico = map[name];
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm border-border-subtle/50 bg-[--bg-elev] lift glow-hover" data-gsap-hover>
      <Ico size={16} className="opacity-80" />
      <span className="opacity-90">{label}</span>
    </span>
  );
}
