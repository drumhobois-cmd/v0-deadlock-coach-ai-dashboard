"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"

interface IntroSequenceProps {
  onComplete: () => void
}

export function IntroSequence({ onComplete }: IntroSequenceProps) {
  const [phase, setPhase] = useState<
    "black" | "push" | "reveal" | "title" | "subtitle" | "fade"
  >("black")

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []
    // Brief black hold
    timers.push(setTimeout(() => setPhase("push"), 600))
    // Begin the push-through
    timers.push(setTimeout(() => setPhase("reveal"), 3200))
    // Title appears over skyline
    timers.push(setTimeout(() => setPhase("title"), 4400))
    // Subtitle fades in
    timers.push(setTimeout(() => setPhase("subtitle"), 5600))
    // Fade out to dashboard
    timers.push(setTimeout(() => setPhase("fade"), 7200))
    // Complete
    timers.push(setTimeout(() => onComplete(), 8400))
    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  const skip = useCallback(() => {
    setPhase("fade")
    setTimeout(() => onComplete(), 400)
  }, [onComplete])

  const phaseIndex = ["black", "push", "reveal", "title", "subtitle", "fade"].indexOf(phase)

  return (
    <div
      className="fixed inset-0 z-50 cursor-pointer overflow-hidden"
      style={{ backgroundColor: "#0a0a0c" }}
      onClick={skip}
      role="button"
      tabIndex={0}
      aria-label="Skip intro animation"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " " || e.key === "Escape") skip()
      }}
    >
      {/* Ambient fog / atmosphere base */}
      <div
        className="absolute inset-0 transition-opacity duration-[2000ms]"
        style={{
          opacity: phaseIndex >= 1 ? 0.3 : 0,
          background:
            "radial-gradient(ellipse at 50% 80%, rgba(212,175,55,0.06) 0%, transparent 60%)",
        }}
      />

      {/* ---- Layer 1: Skyline (furthest back, moves slowest) ---- */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-all ease-out"
        style={{
          transitionDuration: "3500ms",
          transform:
            phaseIndex >= 1 ? "scale(1.15) translateY(-2%)" : "scale(0.9) translateY(2%)",
          opacity: phaseIndex >= 1 ? 1 : 0,
        }}
      >
        <div className="relative h-full w-full">
          <Image
            src="/images/skyline.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            style={{ filter: "brightness(0.5) saturate(0.4) sepia(0.3)" }}
            priority
          />
        </div>
      </div>

      {/* Skyline atmospheric haze overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-[3000ms]"
        style={{
          opacity: phaseIndex >= 1 ? 1 : 0,
          background:
            "linear-gradient(to top, rgba(10,10,12,0.9) 0%, rgba(10,10,12,0.3) 40%, rgba(10,10,12,0.1) 60%, rgba(10,10,12,0.5) 100%)",
        }}
      />

      {/* ---- Layer 2: Dust motes / particles (mid-field) ---- */}
      <div
        className="absolute inset-0 transition-opacity duration-[2000ms]"
        style={{ opacity: phaseIndex >= 1 && phaseIndex < 5 ? 0.6 : 0 }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              backgroundColor: "rgba(212,175,55,0.4)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-mote-${i % 4} ${6 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* ---- Layer 3: Art Deco Window Frame (closest, moves fastest) ---- */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-all ease-out"
        style={{
          transitionDuration: "3000ms",
          transform:
            phaseIndex >= 1
              ? "scale(4.5) translateY(-5%)"
              : "scale(1) translateY(0%)",
          opacity: phaseIndex >= 2 ? 0 : 1,
        }}
      >
        <div className="relative h-full w-full">
          <Image
            src="/images/deco-window.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            style={{ filter: "brightness(0.6) saturate(0.3)" }}
            priority
          />
        </div>
        {/* Gold edges on the window frame */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            boxShadow: "inset 0 0 80px 20px rgba(10,10,12,0.9)",
          }}
        />
      </div>

      {/* ---- Layer 4: Occult geometric overlay ---- */}
      <svg
        className="absolute inset-0 h-full w-full transition-opacity duration-[2000ms]"
        style={{
          opacity: phaseIndex >= 2 && phaseIndex < 5 ? 0.12 : 0,
        }}
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* Outer circle */}
        <circle
          cx="500"
          cy="500"
          r="300"
          fill="none"
          stroke="rgba(212,175,55,0.4)"
          strokeWidth="0.5"
        />
        {/* Inner circle */}
        <circle
          cx="500"
          cy="500"
          r="200"
          fill="none"
          stroke="rgba(212,175,55,0.3)"
          strokeWidth="0.5"
        />
        {/* Triangle */}
        <polygon
          points="500,220 720,700 280,700"
          fill="none"
          stroke="rgba(212,175,55,0.25)"
          strokeWidth="0.5"
        />
        {/* Inverted triangle */}
        <polygon
          points="500,780 720,300 280,300"
          fill="none"
          stroke="rgba(212,175,55,0.2)"
          strokeWidth="0.5"
        />
        {/* Center eye shape */}
        <ellipse
          cx="500"
          cy="500"
          rx="80"
          ry="40"
          fill="none"
          stroke="rgba(212,175,55,0.5)"
          strokeWidth="0.8"
        />
        <circle
          cx="500"
          cy="500"
          r="15"
          fill="rgba(212,175,55,0.15)"
          stroke="rgba(212,175,55,0.5)"
          strokeWidth="0.5"
        />
        {/* Radiating lines */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180
          const x1 = 500 + Math.cos(angle) * 200
          const y1 = 500 + Math.sin(angle) * 200
          const x2 = 500 + Math.cos(angle) * 300
          const y2 = 500 + Math.sin(angle) * 300
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(212,175,55,0.2)"
              strokeWidth="0.3"
            />
          )
        })}
      </svg>

      {/* ---- Layer 5: Volumetric light rays ---- */}
      <div
        className="absolute inset-0 transition-opacity duration-[2500ms]"
        style={{
          opacity: phaseIndex >= 2 && phaseIndex < 5 ? 0.15 : 0,
          background:
            "conic-gradient(from 180deg at 50% 40%, transparent 0deg, rgba(212,175,55,0.08) 15deg, transparent 30deg, transparent 60deg, rgba(212,175,55,0.05) 75deg, transparent 90deg, transparent 150deg, rgba(212,175,55,0.06) 165deg, transparent 180deg, transparent 210deg, rgba(212,175,55,0.07) 225deg, transparent 240deg, transparent 300deg, rgba(212,175,55,0.04) 315deg, transparent 330deg)",
        }}
      />

      {/* ---- Layer 6: Title sequence ---- */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Art Deco top ornament */}
        <div
          className="mb-6 flex items-center gap-3 transition-all duration-[1200ms]"
          style={{
            opacity: phaseIndex >= 3 ? 1 : 0,
            transform: phaseIndex >= 3 ? "translateY(0)" : "translateY(10px)",
          }}
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/60 md:w-20" />
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="text-gold"
            aria-hidden="true"
          >
            <path
              d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z"
              fill="currentColor"
              opacity="0.8"
            />
          </svg>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/60 md:w-20" />
        </div>

        {/* Main title */}
        <h1
          className="text-balance text-center font-serif tracking-[0.15em] text-gold transition-all duration-[1500ms]"
          style={{
            opacity: phaseIndex >= 3 ? 1 : 0,
            transform: phaseIndex >= 3 ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
            fontSize: "clamp(2rem, 6vw, 4.5rem)",
            textShadow:
              "0 0 30px rgba(212,175,55,0.4), 0 0 60px rgba(212,175,55,0.15), 0 2px 4px rgba(0,0,0,0.8)",
            letterSpacing: "0.2em",
          }}
        >
          DEADLOCK
        </h1>

        {/* Subtitle with wider tracking */}
        <p
          className="mt-1 text-center font-serif tracking-[0.5em] text-gold/70 transition-all duration-[1200ms] md:mt-2"
          style={{
            opacity: phaseIndex >= 3 ? 1 : 0,
            transform: phaseIndex >= 3 ? "translateY(0)" : "translateY(10px)",
            fontSize: "clamp(0.6rem, 1.8vw, 1.1rem)",
            textShadow: "0 0 20px rgba(212,175,55,0.3)",
            transitionDelay: "300ms",
          }}
        >
          COACH AI
        </p>

        {/* Art Deco bottom ornament */}
        <div
          className="mt-6 flex items-center gap-3 transition-all duration-[1200ms]"
          style={{
            opacity: phaseIndex >= 3 ? 1 : 0,
            transform: phaseIndex >= 3 ? "translateY(0)" : "translateY(-10px)",
            transitionDelay: "200ms",
          }}
        >
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-gold/40 md:w-16" />
          <div className="h-1.5 w-1.5 rotate-45 bg-gold/50" />
          <div className="h-px w-4 bg-gold/30 md:w-8" />
          <div className="h-1.5 w-1.5 rotate-45 bg-gold/50" />
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-gold/40 md:w-16" />
        </div>

        {/* Tagline */}
        <p
          className="mt-8 text-center text-[10px] tracking-[0.35em] text-gold/40 uppercase transition-all duration-[1200ms] md:text-xs"
          style={{
            opacity: phaseIndex >= 4 ? 1 : 0,
            transform: phaseIndex >= 4 ? "translateY(0)" : "translateY(8px)",
          }}
        >
          The eye sees all
        </p>
      </div>

      {/* ---- Skip prompt ---- */}
      <div
        className="absolute bottom-6 left-0 right-0 text-center text-[10px] tracking-[0.3em] text-gold/25 uppercase transition-opacity duration-700"
        style={{
          opacity: phaseIndex >= 1 && phaseIndex < 5 ? 1 : 0,
        }}
      >
        Click anywhere to skip
      </div>

      {/* ---- Final fade-to-black overlay ---- */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-[1200ms]"
        style={{
          backgroundColor: "#0a0a0c",
          opacity: phase === "fade" ? 1 : 0,
        }}
      />

      {/* Inline keyframes for floating motes */}
      <style jsx>{`
        @keyframes float-mote-0 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          50% { transform: translate(15px, -20px) scale(1.5); opacity: 0.7; }
        }
        @keyframes float-mote-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.2; }
          50% { transform: translate(-10px, -15px) scale(1.3); opacity: 0.6; }
        }
        @keyframes float-mote-2 {
          0%, 100% { transform: translate(0, 0) scale(1.2); opacity: 0.4; }
          50% { transform: translate(8px, -25px) scale(1); opacity: 0.8; }
        }
        @keyframes float-mote-3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          50% { transform: translate(-12px, -18px) scale(1.4); opacity: 0.5; }
        }
      `}</style>
    </div>
  )
}
