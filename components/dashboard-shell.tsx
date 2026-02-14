"use client"

import { useState, useCallback } from "react"
import { IntroSequence } from "@/components/intro-sequence"

interface DashboardShellProps {
  children: React.ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  const [introComplete, setIntroComplete] = useState(false)

  const handleComplete = useCallback(() => {
    setIntroComplete(true)
  }, [])

  return (
    <>
      {!introComplete && <IntroSequence onComplete={handleComplete} />}
      <div
        className="transition-opacity duration-[1200ms]"
        style={{ opacity: introComplete ? 1 : 0 }}
      >
        {children}
      </div>
    </>
  )
}
