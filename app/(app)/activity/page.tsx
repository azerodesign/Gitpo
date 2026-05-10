'use client';

import { Header } from '@/components/ui/header';
import { GitCommit, GitPullRequest, GitMerge, Star, MessageSquare } from 'lucide-react';

export default function Activity() {
  return (
    <>
      <Header title="Activity" subtitle="Global Feed" />
      <div className="p-6">
         <div className="relative border-l border-gitpo-border ml-4 space-y-8 pb-8">
            <TimelineItem 
               icon={<GitCommit className="w-4 h-4 text-white" />}
               iconBg="bg-gitpo-primary"
               title="Pushed 3 commits to gitpo-mobile"
               time="2 hours ago"
               details="feat: responsive layouts, fix: bottom nav z-index"
            />
            <TimelineItem 
               icon={<GitPullRequest className="w-4 h-4 text-white" />}
               iconBg="bg-gitpo-success"
               title="Opened PR #42 in solid-ui"
               time="5 hours ago"
               details="feat: new card components"
            />
            <TimelineItem 
               icon={<MessageSquare className="w-4 h-4 text-gitpo-text" />}
               iconBg="bg-gitpo-card border border-gitpo-border"
               title="Commented on issue #12"
               time="1 day ago"
               details="I think we should use framer-motion for this."
            />
            <TimelineItem 
               icon={<Star className="w-4 h-4 text-gitpo-bg" />}
               iconBg="bg-gitpo-secondary"
               title="Starred vibe-engine"
               time="2 days ago"
            />
            <TimelineItem 
               icon={<GitMerge className="w-4 h-4 text-white" />}
               iconBg="bg-purple-500"
               title="Merged PR #41 in solid-ui"
               time="3 days ago"
            />
         </div>
      </div>
    </>
  );
}

function TimelineItem({ icon, iconBg, title, time, details }: { 
   icon: React.ReactNode, iconBg: string, title: string, time: string, details?: string 
}) {
   return (
      <div className="relative pl-8">
         <div className={`absolute -left-4 top-0 w-8 h-8 rounded-full ${iconBg} flex items-center justify-center ring-4 ring-gitpo-bg`}>
            {icon}
         </div>
         <div className="pt-1">
            <div className="flex items-center justify-between mb-1">
               <p className="text-sm font-medium">{title}</p>
               <span className="text-[10px] text-gitpo-text-secondary uppercase tracking-wider font-semibold">{time}</span>
            </div>
            {details && (
               <div className="p-3 mt-2 rounded-xl bg-gitpo-card border border-gitpo-border text-sm text-gitpo-text-secondary">
                  {details}
               </div>
            )}
         </div>
      </div>
   )
}
