import { cn } from "@/lib/utils"
import { DecoFrame, DecoHeading } from "@/components/deco-frame"

const roles = [
  { name: "Duelist", progress: 82, tier: "III" },
  { name: "Controller", progress: 65, tier: "II" },
  { name: "Guardian", progress: 91, tier: "IV" },
  { name: "Initiator", progress: 45, tier: "I" },
]

export function RoleMastery() {
  return (
    <DecoFrame>
      <div className="bg-card p-5 glow-gold">
        <DecoHeading as="h3" className="mb-4 text-sm">
          Role Mastery
        </DecoHeading>
        <div className="flex flex-col gap-4">
          {roles.map((role) => (
            <div key={role.name} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-wider text-foreground uppercase">
                  {role.name}
                </span>
                <span className="font-serif text-xs text-gold">
                  {"Tier "}{role.tier}
                </span>
              </div>
              <div className="relative h-2 w-full overflow-hidden bg-secondary">
                <div
                  className={cn(
                    "absolute inset-y-0 left-0 transition-all duration-700",
                    role.progress >= 80
                      ? "bg-gold glow-gold"
                      : role.progress >= 50
                        ? "bg-green-team"
                        : "bg-muted-foreground"
                  )}
                  style={{ width: `${role.progress}%` }}
                />
                {/* Shimmer overlay */}
                {role.progress >= 80 && (
                  <div
                    className="absolute inset-y-0 left-0 animate-shimmer"
                    style={{
                      width: `${role.progress}%`,
                      backgroundImage:
                        "linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)",
                      backgroundSize: "200% 100%",
                    }}
                  />
                )}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground tabular-nums">
                  {role.progress}%
                </span>
                <span className="text-[10px] text-muted-foreground">
                  {100 - role.progress}{"% to next tier"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DecoFrame>
  )
}
