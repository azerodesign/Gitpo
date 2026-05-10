'use client';

import { Header } from '@/components/ui/header';
import { Share, Plus, ChevronLeft, Download } from 'lucide-react';
import Link from 'next/link';
import { use } from 'react';

export default function ReleasesPage({ params }: { params: Promise<{ repo: string, owner: string }> }) {
  const resolvedParams = use(params);

  return (
    <>
      <header className="sticky top-0 z-40 bg-gitpo-bg/80 backdrop-blur-xl border-b border-gitpo-border px-6 pt-safe pb-4">
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-3">
             <Link href={`/repositories/${resolvedParams.owner}/${resolvedParams.repo}`} className="w-8 h-8 rounded-full border border-gitpo-border flex items-center justify-center hover:bg-gitpo-card transition-colors">
                <ChevronLeft className="w-4 h-4" />
             </Link>
             <h1 className="font-semibold text-lg tracking-tight">Releases</h1>
          </div>
        </div>
      </header>

      <div className="p-4 md:p-6 space-y-4 md:space-y-6">
        <div className="space-y-4">
           {[{
              version: "v1.2.0", type: "Latest", title: "Mobile UI Polish", time: "2 hours ago"
           }, {
              version: "v1.1.0", type: "Stable", title: "Authentication Flow", time: "2 days ago"
           }, {
              version: "v1.0.0", type: "Stable", title: "Initial Release", time: "1 week ago"
           }].map((release, i) => (
             <ReleaseCard key={i} {...release} />
           ))}
        </div>

        {/* Floating Action Button (Mobile) */}
        <button className="fixed bottom-24 right-6 w-14 h-14 bg-gitpo-primary rounded-full shadow-lg shadow-gitpo-primary/40 flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all z-40">
           <Plus className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}

function ReleaseCard({ version, type, title, time }: { version: string, type: string, title: string, time: string }) {
  const isLatest = type === 'Latest';
  
  return (
    <div className="p-4 rounded-2xl bg-gitpo-card border border-gitpo-border hover:border-gitpo-border-hover transition-colors">
       <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
             <span className="font-mono text-sm font-semibold">{version}</span>
             <span className={`text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded border ${isLatest ? 'bg-gitpo-success/10 text-gitpo-success border-gitpo-success/30' : 'bg-gitpo-bg text-gitpo-text-secondary border-gitpo-border'}`}>{type}</span>
          </div>
          <span className="text-xs text-gitpo-text-secondary">{time}</span>
       </div>
       <h3 className="text-base font-medium mb-4">{title}</h3>
       
       <button className="flex items-center gap-2 text-sm text-gitpo-text-secondary hover:text-white transition-colors">
          <Download className="w-4 h-4" />
          <span>Source code (zip)</span>
       </button>
    </div>
  )
}
