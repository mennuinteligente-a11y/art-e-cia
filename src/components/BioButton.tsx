import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { ReactNode, MouseEvent } from "react";

interface BioButtonProps {
  href?: string;
  onClick?: (e: MouseEvent) => void;
  icon: LucideIcon;
  label: string;
  sub?: string;
  external?: boolean;
  variant?: "default" | "primary";
  delay?: number;
  rightSlot?: ReactNode;
  compact?: boolean;
}

export function BioButton({
  href,
  onClick,
  icon: Icon,
  label,
  sub,
  external = true,
  variant = "default",
  delay = 0,
  rightSlot,
  compact = false,
}: BioButtonProps) {
  const isPrimary = variant === "primary";
  const Tag: any = href ? motion.a : motion.button;
  const interactiveProps = href
    ? { href, target: external ? "_blank" : undefined, rel: external ? "noopener noreferrer" : undefined }
    : { type: "button", onClick };

  return (
    <Tag
      {...interactiveProps}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative flex w-full items-center gap-3 rounded-2xl transition-all
        ${compact ? "px-4 py-2.5" : "px-5 py-3.5"}
        ${
          isPrimary
            ? "bg-gradient-to-br from-[oklch(0.82_0.08_75)] to-[oklch(0.62_0.1_70)] text-noir shadow-[0_12px_40px_-10px_oklch(0.74_0.09_75/0.55)]"
            : "glass-card text-foreground hover:border-gold"
        }`}
    >
      <span
        className={`flex shrink-0 items-center justify-center rounded-xl transition-transform group-hover:scale-110 ${
          compact ? "h-9 w-9" : "h-10 w-10"
        } ${
          isPrimary
            ? "bg-noir/20 text-noir"
            : "bg-gold/10 text-gold ring-1 ring-gold/30"
        }`}
      >
        <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
      </span>
      <span className="flex-1 text-left">
        <span className="block text-[14px] font-medium tracking-wide leading-tight">{label}</span>
        {sub && (
          <span className={`mt-0.5 block text-[11px] leading-tight ${isPrimary ? "text-noir/70" : "text-muted-foreground"}`}>
            {sub}
          </span>
        )}
      </span>
      {rightSlot}
      {!isPrimary && (
        <span
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100"
          style={{ boxShadow: "inset 0 0 0 1px var(--gold), 0 0 30px -8px var(--gold)" }}
        />
      )}
    </Tag>
  );
}
