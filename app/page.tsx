import { Trophy, Swords, Target, TrendingUp } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { HeroCard } from "@/components/hero-card"
import { MatchHistoryCard } from "@/components/match-history-card"
import { StatCard } from "@/components/stat-card"
import { PerformanceChart } from "@/components/performance-chart"
import { AiInsightPanel } from "@/components/ai-insight-panel"
import { RoleMastery } from "@/components/role-mastery"
import { DecoDivider, DecoHeading } from "@/components/deco-frame"

const heroes = [
  {
    name: "Wraith",
    role: "Assassin",
    winRate: 68,
    gamesPlayed: 142,
    kda: "8.2 / 3.1 / 5.4",
    image: "/images/hero-wraith.jpg",
    isFavorite: true,
  },
  {
    name: "Dynamo",
    role: "Support",
    winRate: 57,
    gamesPlayed: 89,
    kda: "3.8 / 4.2 / 12.1",
    image: "/images/hero-dynamo.jpg",
  },
  {
    name: "Ivy",
    role: "Controller",
    winRate: 62,
    gamesPlayed: 76,
    kda: "5.1 / 3.6 / 9.7",
    image: "/images/hero-ivy.jpg",
  },
  {
    name: "Haze",
    role: "Carry",
    winRate: 44,
    gamesPlayed: 34,
    kda: "9.4 / 5.8 / 3.2",
    image: "/images/hero-haze.jpg",
  },
  {
    name: "Abrams",
    role: "Bruiser",
    winRate: 71,
    gamesPlayed: 63,
    kda: "6.7 / 2.9 / 7.8",
    image: "/images/hero-abrams.jpg",
  },
  {
    name: "Kelvin",
    role: "Guardian",
    winRate: 53,
    gamesPlayed: 41,
    kda: "2.4 / 3.3 / 14.6",
    image: "/images/hero-kelvin.jpg",
  },
]

const matches = [
  {
    heroName: "Wraith",
    heroImage: "/images/hero-wraith.jpg",
    result: "victory" as const,
    kills: 14,
    deaths: 2,
    assists: 8,
    duration: "32:18",
    souls: "24.3k",
    timeAgo: "2 hours ago",
  },
  {
    heroName: "Dynamo",
    heroImage: "/images/hero-dynamo.jpg",
    result: "victory" as const,
    kills: 5,
    deaths: 4,
    assists: 18,
    duration: "28:42",
    souls: "18.7k",
    timeAgo: "4 hours ago",
  },
  {
    heroName: "Haze",
    heroImage: "/images/hero-haze.jpg",
    result: "defeat" as const,
    kills: 11,
    deaths: 8,
    assists: 4,
    duration: "35:06",
    souls: "22.1k",
    timeAgo: "6 hours ago",
  },
  {
    heroName: "Wraith",
    heroImage: "/images/hero-wraith.jpg",
    result: "victory" as const,
    kills: 12,
    deaths: 3,
    assists: 6,
    duration: "26:54",
    souls: "21.8k",
    timeAgo: "8 hours ago",
  },
  {
    heroName: "Abrams",
    heroImage: "/images/hero-abrams.jpg",
    result: "victory" as const,
    kills: 9,
    deaths: 1,
    assists: 11,
    duration: "31:22",
    souls: "19.5k",
    timeAgo: "Yesterday",
  },
  {
    heroName: "Ivy",
    heroImage: "/images/hero-ivy.jpg",
    result: "defeat" as const,
    kills: 6,
    deaths: 7,
    assists: 9,
    duration: "38:11",
    souls: "20.4k",
    timeAgo: "Yesterday",
  },
  {
    heroName: "Kelvin",
    heroImage: "/images/hero-kelvin.jpg",
    result: "victory" as const,
    kills: 3,
    deaths: 2,
    assists: 19,
    duration: "29:48",
    souls: "16.2k",
    timeAgo: "2 days ago",
  },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="mx-auto max-w-7xl px-4 py-8">
        {/* Stats Row */}
        <section aria-label="Overview statistics">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            <StatCard
              label="Win Rate"
              value="63.2%"
              change="+4.1% this week"
              changeType="positive"
              icon={Trophy}
            />
            <StatCard
              label="Matches"
              value="445"
              change="12 this week"
              changeType="neutral"
              icon={Swords}
            />
            <StatCard
              label="Avg KDA"
              value="6.2 / 3.8 / 8.4"
              change="+0.3 improvement"
              changeType="positive"
              icon={Target}
            />
            <StatCard
              label="MMR"
              value="2,847"
              change="+126 this week"
              changeType="positive"
              icon={TrendingUp}
            />
          </div>
        </section>

        <DecoDivider className="my-8" />

        {/* Hero Roster */}
        <section aria-label="Hero roster">
          <DecoHeading as="h2" className="mb-5 text-base">
            Hero Roster
          </DecoHeading>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-6">
            {heroes.map((hero) => (
              <HeroCard key={hero.name} {...hero} />
            ))}
          </div>
        </section>

        <DecoDivider className="my-8" />

        {/* Middle Section: Chart + Insights + Mastery */}
        <div className="grid gap-4 lg:grid-cols-3">
          {/* Performance Chart */}
          <div className="lg:col-span-2">
            <PerformanceChart />
          </div>
          {/* Role Mastery */}
          <div>
            <RoleMastery />
          </div>
        </div>

        <DecoDivider className="my-8" />

        {/* Match History + AI Insights */}
        <div className="grid gap-4 lg:grid-cols-3">
          <section className="lg:col-span-2" aria-label="Match history">
            <DecoHeading as="h2" className="mb-5 text-base">
              Match History
            </DecoHeading>
            <div className="flex flex-col gap-2">
              {matches.map((match, i) => (
                <MatchHistoryCard key={`${match.heroName}-${i}`} {...match} />
              ))}
            </div>
          </section>

          <aside aria-label="AI coaching insights">
            <AiInsightPanel />
          </aside>
        </div>

        {/* Footer deco line */}
        <div className="mt-12 mb-8">
          <DecoDivider />
          <p className="mt-4 text-center text-[10px] tracking-[0.4em] text-muted-foreground/40 uppercase">
            {"The eye sees all \u00B7 Deadlock Coach AI \u00B7 Season IV"}
          </p>
        </div>
      </main>
    </div>
  )
}
