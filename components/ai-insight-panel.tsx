import { BrainCircuit, Lightbulb, TrendingUp, AlertTriangle } from "lucide-react"
import { DecoFrame, DecoHeading, DecoDivider } from "@/components/deco-frame"

const insights = [
  {
    icon: TrendingUp,
    type: "strength" as const,
    title: "Lane Dominance Rising",
    description:
      "Your laning phase performance has improved 18% over the last 12 matches. Soul farm efficiency is now top percentile.",
  },
  {
    icon: Lightbulb,
    type: "tip" as const,
    title: "Item Build Adaptation",
    description:
      'Consider building Spirit Armor earlier against heavy caster compositions. Your late-game survivability drops when you delay it past the 15-minute mark.',
  },
  {
    icon: AlertTriangle,
    type: "warning" as const,
    title: "Positioning Vulnerability",
    description:
      "Analysis shows 62% of your deaths occur in the same mid-lane corridor. Vary your approach angles to reduce predictability.",
  },
]

export function AiInsightPanel() {
  return (
    <DecoFrame>
      <div className="bg-card p-5 glow-gold">
        <div className="mb-4 flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-gold animate-pulse-glow" aria-hidden="true" />
          <DecoHeading as="h3" className="text-sm">
            Oracle Insights
          </DecoHeading>
        </div>
        <DecoDivider className="mb-4" />
        <div className="flex flex-col gap-4">
          {insights.map((insight) => (
            <div
              key={insight.title}
              className="group flex gap-3 rounded-sm p-3 transition-colors hover:bg-surface"
            >
              <div className="flex-shrink-0 mt-0.5">
                <insight.icon
                  className={`h-4 w-4 ${
                    insight.type === "strength"
                      ? "text-green-team"
                      : insight.type === "warning"
                        ? "text-red-enemy"
                        : "text-gold"
                  }`}
                  aria-hidden="true"
                />
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground">
                  {insight.title}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {insight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DecoFrame>
  )
}
