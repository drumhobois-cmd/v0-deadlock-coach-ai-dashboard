"use client"

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { DecoFrame, DecoHeading } from "@/components/deco-frame"

const data = [
  { match: "1", winRate: 48, souls: 12400 },
  { match: "2", winRate: 50, souls: 14200 },
  { match: "3", winRate: 46, souls: 11800 },
  { match: "4", winRate: 52, souls: 15600 },
  { match: "5", winRate: 55, souls: 16800 },
  { match: "6", winRate: 53, souls: 14900 },
  { match: "7", winRate: 58, souls: 18200 },
  { match: "8", winRate: 56, souls: 17100 },
  { match: "9", winRate: 61, souls: 19400 },
  { match: "10", winRate: 63, souls: 20100 },
  { match: "11", winRate: 60, souls: 18800 },
  { match: "12", winRate: 65, souls: 21300 },
]

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: Array<{ value: number; dataKey: string; color: string }>
  label?: string
}) {
  if (!active || !payload) return null
  return (
    <div className="bg-card border border-gold/20 p-3 text-sm">
      <p className="font-serif text-gold text-xs tracking-wider uppercase mb-1.5">
        {"Match "}{label}
      </p>
      {payload.map((entry) => (
        <p key={entry.dataKey} className="text-foreground tabular-nums">
          <span className="text-muted-foreground text-xs mr-2">
            {entry.dataKey === "winRate" ? "Win Rate:" : "Souls:"}
          </span>
          <span style={{ color: entry.color }}>
            {entry.dataKey === "winRate" ? `${entry.value}%` : entry.value.toLocaleString()}
          </span>
        </p>
      ))}
    </div>
  )
}

export function PerformanceChart() {
  return (
    <DecoFrame>
      <div className="bg-card p-5 glow-gold">
        <DecoHeading as="h3" className="mb-4 text-sm">
          Performance Trend
        </DecoHeading>
        <div className="h-56 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#d4af37" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#d4af37" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6ba368" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#6ba368" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(212,175,55,0.06)"
                vertical={false}
              />
              <XAxis
                dataKey="match"
                tick={{ fill: "rgba(212,175,55,0.4)", fontSize: 11 }}
                axisLine={{ stroke: "rgba(212,175,55,0.1)" }}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "rgba(212,175,55,0.4)", fontSize: 11 }}
                axisLine={{ stroke: "rgba(212,175,55,0.1)" }}
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="winRate"
                stroke="#d4af37"
                strokeWidth={2}
                fill="url(#goldGradient)"
              />
              <Area
                type="monotone"
                dataKey="souls"
                stroke="#6ba368"
                strokeWidth={1.5}
                fill="url(#greenGradient)"
                yAxisId={0}
                hide
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DecoFrame>
  )
}
