'use client';

import { Header } from '@/components/ui/header';
import { RepoCard } from '@/components/ui/repo-card';
import { motion } from 'motion/react';
import { GitCommit, Star, GitBranch, Terminal, LineChart } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <>
      <Header title="Dashboard" subtitle="Overview" />
      <div className="p-6 space-y-8">
        
        {/* Quick Stats Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard title="Total Repos" value="42" icon={<Terminal className="w-4 h-4" />} />
          <StatCard title="Active" value="12" icon={<ActivityIcon className="w-4 h-4 text-gitpo-success" />} />
          <StatCard title="Commits" value="842" icon={<GitCommit className="w-4 h-4" />} />
          <StatCard title="Stars" value="1.2k" icon={<Star className="w-4 h-4 text-gitpo-secondary" />} />
        </section>

        {/* Global Leaderboards link */}
        <Link href="/leaderboard" className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-gitpo-primary/20 to-gitpo-secondary/20 border border-gitpo-border hover:border-gitpo-primary/50 transition-all">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-gitpo-card flex items-center justify-center">
                <Star className="w-5 h-5 text-yellow-500" />
             </div>
             <div>
                <p className="text-sm font-semibold">Global Leaderboard</p>
                <p className="text-xs text-gitpo-text-secondary">See top repositories this week</p>
             </div>
          </div>
          <div className="px-3 py-1.5 rounded-full bg-gitpo-card border border-gitpo-border text-xs font-medium">View</div>
        </Link>

        {/* Contribution Graph Placeholder */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
             <h2 className="text-lg font-medium tracking-tight">Contributions</h2>
             <Link href="/analytics" className="text-sm text-gitpo-primary hover:underline">View details</Link>
          </div>
          <div className="p-4 rounded-3xl bg-gitpo-card border border-gitpo-border overflow-x-auto no-scrollbar">
            <div className="min-w-[500px]">
              <div className="flex gap-1">
                {Array.from({ length: 52 }).map((_, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-1">
                    {Array.from({ length: 7 }).map((_, dayIndex) => {
                      const rand = Math.random();
                      let opacity = 'bg-gitpo-border';
                      if (rand > 0.8) opacity = 'bg-gitpo-primary';
                      else if (rand > 0.6) opacity = 'bg-gitpo-primary/60';
                      else if (rand > 0.4) opacity = 'bg-gitpo-primary/30';

                      return (
                        <div 
                          key={dayIndex} 
                          className={`w-3 h-3 rounded-sm ${opacity} transition-colors hover:border hover:border-white`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Top Repositories */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium tracking-tight">Top Repositories</h2>
              <Link href="/repositories" className="text-sm text-gitpo-text-secondary hover:text-white transition-colors">See all</Link>
            </div>
            <div className="space-y-3">
              <RepoCard name="gitpo-mobile" access="Private" description="Mobile first GitHub control center." stars={0} lang="TypeScript" langColor="bg-blue-400" />
              <RepoCard name="solid-ui" access="Public" description="A minimal UI library for Next.js." stars={342} lang="TypeScript" langColor="bg-blue-400" />
              <RepoCard name="vibe-engine" access="Public" description="Game engine for vibecoders." stars={1024} lang="Rust" langColor="bg-orange-400" />
            </div>
          </section>

          {/* Activity Feed */}
          <section className="space-y-4">
             <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium tracking-tight">Recent Activity</h2>
              <Link href="/activity" className="text-sm text-gitpo-text-secondary hover:text-white transition-colors">See all</Link>
            </div>
            <div className="p-4 rounded-3xl bg-gitpo-card border border-gitpo-border flex flex-col gap-5">
               <ActivityItem 
                 icon={<GitCommit className="w-4 h-4 text-gitpo-text-secondary" />}
                 title="Pushed to main"
                 repo="gitpo-mobile"
                 desc="feat: implemented mobile bottom navigation"
                 time="2 hours ago"
               />
               <ActivityItem 
                 icon={<GitBranch className="w-4 h-4 text-gitpo-text-secondary" />}
                 title="Created branch"
                 repo="solid-ui"
                 desc="feature/new-cards"
                 time="4 hours ago"
               />
               <ActivityItem 
                 icon={<Star className="w-4 h-4 text-gitpo-secondary" />}
                 title="Starred repository"
                 repo="vercel/next.js"
                 desc=""
                 time="1 day ago"
               />
            </div>
          </section>
        </div>

      </div>
    </>
  );
}

function StatCard({ title, value, icon }: { title: string, value: string, icon: React.ReactNode }) {
  return (
    <div className="p-5 rounded-3xl bg-gitpo-card border border-gitpo-border hover:border-gitpo-border-hover transition-colors">
      <div className="flex items-center gap-2 mb-3 text-gitpo-text-secondary">
        {icon}
        <span className="text-xs font-medium uppercase tracking-wider">{title}</span>
      </div>
      <p className="text-3xl font-semibold tracking-tight">{value}</p>
    </div>
  )
}

function ActivityIcon(props: any) {
  // Just a simple dot icon for 'Active'
  return <div className={`w-2 h-2 rounded-full bg-current ${props.className}`} />
}

function ActivityItem({ icon, title, repo, desc, time }: { icon: React.ReactNode, title: string, repo: string, desc: string, time: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-8 h-8 rounded-full bg-gitpo-bg border border-gitpo-border flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
         <p className="text-sm font-medium">
           {title} <span className="font-normal text-gitpo-text-secondary">in</span> {repo}
         </p>
         {desc && <p className="text-xs text-gitpo-text-secondary mt-1">{desc}</p>}
         <p className="text-[10px] text-gitpo-text-secondary uppercase tracking-wider font-semibold mt-2">{time}</p>
      </div>
    </div>
  )
}
