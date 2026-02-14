import { cn } from "@/lib/utils"

export function DecoFrame({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("relative", className)}>
      {/* Corner ornaments */}
      <svg
        className="absolute -top-1 -left-1 h-5 w-5 text-gold"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path d="M0 0 L20 0 L20 4 L4 4 L4 20 L0 20 Z" fill="currentColor" opacity="0.6" />
        <path d="M0 0 L8 0 L0 8 Z" fill="currentColor" opacity="0.3" />
      </svg>
      <svg
        className="absolute -top-1 -right-1 h-5 w-5 text-gold"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path d="M20 0 L0 0 L0 4 L16 4 L16 20 L20 20 Z" fill="currentColor" opacity="0.6" />
        <path d="M20 0 L12 0 L20 8 Z" fill="currentColor" opacity="0.3" />
      </svg>
      <svg
        className="absolute -bottom-1 -left-1 h-5 w-5 text-gold"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path d="M0 20 L20 20 L20 16 L4 16 L4 0 L0 0 Z" fill="currentColor" opacity="0.6" />
        <path d="M0 20 L8 20 L0 12 Z" fill="currentColor" opacity="0.3" />
      </svg>
      <svg
        className="absolute -bottom-1 -right-1 h-5 w-5 text-gold"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path d="M20 20 L0 20 L0 16 L16 16 L16 0 L20 0 Z" fill="currentColor" opacity="0.6" />
        <path d="M20 20 L12 20 L20 12 Z" fill="currentColor" opacity="0.3" />
      </svg>

      {children}
    </div>
  )
}

export function DecoDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)} role="separator">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <svg
        className="h-3 w-3 text-gold/60"
        viewBox="0 0 12 12"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M6 0 L12 6 L6 12 L0 6 Z" />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </div>
  )
}

export function DecoHeading({
  children,
  className,
  as: Tag = "h2",
}: {
  children: React.ReactNode
  className?: string
  as?: "h1" | "h2" | "h3" | "h4"
}) {
  return (
    <Tag
      className={cn(
        "font-serif tracking-wider text-gold uppercase text-glow-gold",
        className
      )}
    >
      {children}
    </Tag>
  )
}
