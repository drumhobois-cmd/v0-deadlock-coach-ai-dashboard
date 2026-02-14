"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { Clock, Crosshair, Shield, Skull, Target } from "lucide-react"

interface MatchHistoryCardProps {
  heroName: string
  heroImage: string
  result: "victory" | "defeat"
  kills: number
  deaths: number
  assists: number
  duration: string
  souls: string
  timeAgo: string
}

export function MatchHistoryCard({
  heroName,
  heroImage,
  result,
  kills,
  deaths,
  assists,
  duration,
  souls,
  timeAgo,
}: MatchHistoryCardProps) {
  const isVictory = result === "victory"

  return (
    <div
      className={cn(
        "group relative flex items-center gap-4 bg-card p-4 transition-all duration-300 hover:bg-surface-raised",
        isVictory
          ? "border-l-2 border-l-green-team glow-green"
          : "border-l-2 border-l-red-enemy glow-red"
      )}
    >
      {/* Result indicator + Portrait */}
      <div className="relative flex-shrink-0">
        <div
          className={cn(
            "absolute inset-0 rounded-full blur-sm",
            isVictory ? "bg-green-team/15" : "bg-red-enemy/15"
          )}
        />
        <div
          className={cn(
            "relative h-12 w-12 overflow-hidden rounded-full border-2",
            isVictory ? "border-green-team/50" : "border-red-enemy/50"
          )}
        >
          <Image
            src={heroImage}
            alt={`${heroName} portrait`}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Hero name + result */}
      <div className="flex min-w-0 flex-col">
        <span className="font-serif text-sm tracking-wider text-gold uppercase truncate">
          {heroName}
        </span>
        <span
          className={cn(
            "text-xs font-bold tracking-widest uppercase",
            isVictory
              ? "text-green-team text-glow-green"
              : "text-red-enemy text-glow-red"
          )}
        >
          {result}
        </span>
      </div>

      {/* Stats */}
      <div className="ml-auto flex items-center gap-4 md:gap-6">
        {/* KDA */}
        <div className="flex items-center gap-1.5 text-sm tabular-nums">
          <Crosshair className="h-3.5 w-3.5 text-green-team/70" aria-hidden="true" />
          <span className="text-green-team">{kills}</span>
          <span className="text-muted-foreground/40">/</span>
          <Skull className="h-3.5 w-3.5 text-red-enemy/70" aria-hidden="true" />
          <span className="text-red-enemy">{deaths}</span>
          <span className="text-muted-foreground/40">/</span>
          <Shield className="h-3.5 w-3.5 text-gold/70" aria-hidden="true" />
          <span className="text-gold">{assists}</span>
        </div>

        {/* Souls */}
        <div className="hidden items-center gap-1.5 text-sm md:flex">
          <Target className="h-3.5 w-3.5 text-gold/50" aria-hidden="true" />
          <span className="tabular-nums text-foreground">{souls}</span>
        </div>

        {/* Duration */}
        <div className="hidden items-center gap-1.5 text-xs text-muted-foreground lg:flex">
          <Clock className="h-3 w-3" aria-hidden="true" />
          <span>{duration}</span>
        </div>

        {/* Time ago */}
        <span className="hidden text-xs text-muted-foreground/60 xl:block">
          {timeAgo}
        </span>
      </div>
    </div>
  )
}
