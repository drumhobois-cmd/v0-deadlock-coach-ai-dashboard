import { cn } from "@/lib/utils"
import { DecoFrame } from "@/components/deco-frame"
import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  label: string
  value: string
  change?: string
  changeType?: "positive" | "negative" | "neutral"
  icon: LucideIcon
}

export function StatCard({ label, value, change, changeType = "neutral", icon: Icon }: StatCardProps) {
  return (
    <DecoFrame>
      <div className="relative flex flex-col bg-card p-5 glow-gold transition-all duration-300 hover:bg-surface-raised">
        <div className="flex items-start justify-between">
          <span className="text-[11px] font-medium tracking-widest text-muted-foreground uppercase">
            {label}
          </span>
          <Icon className="h-4 w-4 text-gold/40" aria-hidden="true" />
        </div>
        <span className="mt-2 font-serif text-2xl tracking-wide text-gold text-glow-gold">
          {value}
        </span>
        {change && (
          <span
            className={cn(
              "mt-1 text-xs tabular-nums",
              changeType === "positive" && "text-green-team text-glow-green",
              changeType === "negative" && "text-red-enemy text-glow-red",
              changeType === "neutral" && "text-muted-foreground"
            )}
          >
            {change}
          </span>
        )}
      </div>
    </DecoFrame>
  )
}
