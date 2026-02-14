import { Eye, Flame, Sparkles } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="relative overflow-hidden border-b border-gold/10 bg-card">
      {/* Subtle occult pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(212,175,55,1) 20px,
            rgba(212,175,55,1) 21px
          )`,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-6 md:flex-row md:items-end md:justify-between md:py-8">
        {/* Logo + Title */}
        <div className="flex items-center gap-4">
          {/* Occult eye symbol */}
          <div className="relative flex h-12 w-12 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gold/5 animate-pulse-glow" />
            <Eye className="h-7 w-7 text-gold" aria-hidden="true" />
          </div>
          <div>
            <h1 className="font-serif text-2xl tracking-[0.2em] text-gold uppercase text-glow-gold md:text-3xl">
              Deadlock Coach AI
            </h1>
            <p className="mt-0.5 text-[11px] tracking-[0.3em] text-muted-foreground uppercase">
              The Occult Guide to Mastering the Lanes
            </p>
          </div>
        </div>

        {/* Quick status */}
        <div className="mt-4 flex items-center gap-6 text-sm md:mt-0">
          <div className="flex items-center gap-1.5">
            <Flame className="h-4 w-4 text-gold/60" aria-hidden="true" />
            <span className="text-xs tracking-wider text-muted-foreground uppercase">
              Ranked:
            </span>
            <span className="font-serif text-sm text-gold">Phantom IV</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-green-team/60" aria-hidden="true" />
            <span className="text-xs tracking-wider text-muted-foreground uppercase">
              Streak:
            </span>
            <span className="font-bold text-green-team text-glow-green">
              {"W5"}
            </span>
          </div>
        </div>
      </div>

      {/* Art Deco bottom border pattern */}
      <div className="flex h-1 w-full">
        <div className="flex-1 bg-gradient-to-r from-transparent via-gold/30 to-gold/50" />
        <div className="w-4 bg-gold/50" />
        <div className="flex-1 bg-gradient-to-l from-transparent via-gold/30 to-gold/50" />
      </div>
    </header>
  )
}
