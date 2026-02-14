"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { DecoFrame } from "@/components/deco-frame"

interface HeroCardProps {
  name: string
  role: string
  winRate: number
  gamesPlayed: number
  kda: string
  image: string
  isFavorite?: boolean
}

export function HeroCard({
  name,
  role,
  winRate,
  gamesPlayed,
  kda,
  image,
  isFavorite = false,
}: HeroCardProps) {
  const winColor = winRate >= 55 ? "text-green-team text-glow-green" : winRate >= 45 ? "text-gold" : "text-red-enemy text-glow-red"

  return (
    <DecoFrame className="group">
      <div className="relative flex flex-col items-center bg-card p-5 transition-all duration-300 hover:bg-surface-raised glow-gold">
        {/* Mystical glow ring behind portrait */}
        <div className="relative mb-4">
          <div className="absolute inset-0 rounded-full bg-gold/10 blur-md animate-pulse-glow" />
          <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-gold/40 transition-all duration-300 group-hover:border-gold/70 group-hover:glow-gold-strong">
            <Image
              src={image}
              alt={`Portrait of ${name}`}
              fill
              className="object-cover"
            />
          </div>
          {isFavorite && (
            <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-background text-xs font-bold">
              <span className="sr-only">Favorite hero</span>
              {"*"}
            </div>
          )}
        </div>

        {/* Hero info */}
        <h3 className="font-serif text-lg tracking-wider text-gold uppercase text-glow-gold">
          {name}
        </h3>
        <span className="text-xs tracking-widest text-muted-foreground uppercase">
          {role}
        </span>

        {/* Occult divider */}
        <div className="my-3 flex items-center gap-2 w-full">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/20" />
          <svg className="h-2 w-2 text-gold/40" viewBox="0 0 8 8" fill="currentColor" aria-hidden="true">
            <circle cx="4" cy="4" r="3" />
          </svg>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/20" />
        </div>

        {/* Stats */}
        <div className="flex w-full items-center justify-between text-sm">
          <div className="flex flex-col items-center">
            <span className={cn("text-base font-bold tabular-nums", winColor)}>
              {winRate}%
            </span>
            <span className="text-[10px] tracking-wider text-muted-foreground uppercase">Win Rate</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-base font-bold tabular-nums text-foreground">
              {gamesPlayed}
            </span>
            <span className="text-[10px] tracking-wider text-muted-foreground uppercase">Games</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-base font-bold tabular-nums text-gold">
              {kda}
            </span>
            <span className="text-[10px] tracking-wider text-muted-foreground uppercase">KDA</span>
          </div>
        </div>
      </div>
    </DecoFrame>
  )
}
