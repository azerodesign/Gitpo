'use client';

import { Header } from '@/components/ui/header';
import { Trophy, TrendingUp, Star, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function Leaderboard() {
  return (
    <>
      <header className="sticky top-0 z-40 bg-gitpo-bg/80 backdrop-blur-xl border-b border-gitpo-border px-6 pt-safe pb-4">
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-3">
             <Link href="/dashboard" className="w-8 h-8 rounded-full border border-gitpo-border flex items-center justify-center hover:bg-gitpo-card transition-colors">
                <ChevronLeft className="w-4 h-4" />
             </Link>
             <h1 className="font-semibold text-lg tracking-tight">Leaderboard</h1>
          </div>
        </div>
      </header>
      
      <div className="p-6 space-y-6">
         {/* Categories */}
         <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            <button className="px-4 py-2 rounded-full bg-gitpo-primary text-white text-sm font-medium whitespace-nowrap">
               Trending Repos
            </button>
            <button className="px-4 py-2 rounded-full border border-gitpo-border bg-gitpo-card text-gitpo-text text-sm font-medium whitespace-nowrap">
               Most Active
            </button>
            <button className="px-4 py-2 rounded-full border border-gitpo-border bg-gitpo-card text-gitpo-text text-sm font-medium whitespace-nowrap">
               Top Contributors
            </button>
         </div>

         <div className="space-y-4">
            <LeaderboardRow rank={1} repo="facebook/react" author="facebook" stars="220k" trend="+1.2k" />
            <LeaderboardRow rank={2} repo="vercel/next.js" author="vercel" stars="120k" trend="+800" />
            <LeaderboardRow rank={3} repo="gitpo-mobile" author="zerocoffe0" stars="1.2k" trend="+400" />
            <LeaderboardRow rank={4} repo="tailwindlabs/tailwindcss" author="tailwindlabs" stars="80k" trend="+300" />
         </div>
      </div>
    </>
  );
}

function LeaderboardRow({ rank, repo, author, stars, trend }: { rank: number, repo: string, author: string, stars: string, trend: string }) {
   return (
      <div className="flex items-center gap-4 p-4 rounded-2xl bg-gitpo-card border border-gitpo-border hover:border-gitpo-border-hover transition-colors">
         <div className="w-8 flex justify-center text-lg font-bold text-gitpo-text-secondary">
            {rank === 1 ? <Trophy className="w-5 h-5 text-yellow-400" /> : rank}
         </div>
         <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate group-hover:text-gitpo-primary transition-colors">{repo}</p>
            <p className="text-xs text-gitpo-text-secondary truncate mt-0.5">{author}</p>
         </div>
         <div className="text-right">
            <div className="flex items-center justify-end gap-1 text-sm font-medium">
               <Star className="w-3 h-3 text-gitpo-secondary" />
               {stars}
            </div>
            <div className="flex items-center justify-end gap-1 text-xs text-gitpo-success mt-0.5">
               <TrendingUp className="w-3 h-3" />
               {trend}
            </div>
         </div>
      </div>
   )
}
