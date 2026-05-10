'use client';

import { Header } from '@/components/ui/header';
import { ChevronLeft, Folder, FileText, GitBranch, Share, MoreVertical } from 'lucide-react';
import Link from 'next/link';
import { use } from 'react';

export default function RepositoryDetail({ params }: { params: Promise<{ repo: string }> }) {
  const resolvedParams = use(params);
  
  return (
    <>
      <header className="sticky top-0 z-40 bg-gitpo-bg/80 backdrop-blur-xl border-b border-gitpo-border px-6 pt-safe pb-4">
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-3">
             <Link href="/repositories" className="w-8 h-8 rounded-full border border-gitpo-border flex items-center justify-center hover:bg-gitpo-card transition-colors">
                <ChevronLeft className="w-4 h-4" />
             </Link>
             <h1 className="font-semibold text-lg tracking-tight truncate max-w-[200px] md:max-w-xs">{resolvedParams.repo}</h1>
          </div>
          <div className="flex items-center gap-2">
             <button className="w-8 h-8 rounded-full border border-gitpo-border flex items-center justify-center hover:bg-gitpo-card transition-colors">
                <Share className="w-4 h-4 text-gitpo-text-secondary" />
             </button>
             <button className="w-8 h-8 rounded-full border border-gitpo-border flex items-center justify-center hover:bg-gitpo-card transition-colors">
                <MoreVertical className="w-4 h-4 text-gitpo-text-secondary" />
             </button>
          </div>
        </div>
      </header>
      
      <div className="p-6 space-y-6">
         {/* Top Action Bar */}
         <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
            <Link href={`/repositories/${resolvedParams.repo}/releases`} className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border border-gitpo-border bg-gitpo-card text-sm font-medium hover:bg-gitpo-border transition-colors">
               <Share className="w-4 h-4 text-gitpo-text-secondary" />
               Releases (12)
            </Link>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gitpo-border bg-gitpo-card text-sm font-medium hover:bg-gitpo-border transition-colors cursor-pointer">
               <GitBranch className="w-4 h-4 text-gitpo-text-secondary" />
               Branch: <span className="font-bold">main</span>
            </div>
         </div>
         
         {/* File Explorer */}
         <div className="rounded-3xl border border-gitpo-border bg-gitpo-card overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gitpo-border bg-gitpo-bg/30">
               <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gitpo-bg border border-gitpo-border flex items-center justify-center overflow-hidden">
                     <span className="text-[10px] font-bold">G</span>
                  </div>
                  <span className="text-xs font-medium text-gitpo-text-secondary truncate">Initial commit</span>
               </div>
               <span className="text-xs text-gitpo-text-secondary">2h ago</span>
            </div>
            
            <div className="divide-y divide-gitpo-border">
               <FileRow icon={<Folder className="w-4 h-4 text-gitpo-primary" />} name="src" message="update components" time="2h" />
               <FileRow icon={<Folder className="w-4 h-4 text-gitpo-primary" />} name="public" message="add OG image" time="1d" />
               <FileRow icon={<FileText className="w-4 h-4 text-gitpo-text-secondary" />} name=".gitignore" message="Initial commit" time="4d" />
               <FileRow icon={<FileText className="w-4 h-4 text-gitpo-text-secondary" />} name="package.json" message="add framer-motion" time="2h" />
               <FileRow icon={<FileText className="w-4 h-4 text-gitpo-text-secondary" />} name="README.md" message="update docs" time="1h" />
            </div>
         </div>
         
         {/* README Preview */}
         <div className="rounded-3xl border border-gitpo-border bg-gitpo-card p-6 pb-12">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gitpo-border">
               <FileText className="w-4 h-4 text-gitpo-text-secondary" />
               <span className="text-sm font-medium">README.md</span>
            </div>
            <article className="prose prose-invert prose-sm max-w-none">
               <h1>{resolvedParams.repo}</h1>
               <p>This is a simulated repository view. Built for the Gitpo control center.</p>
               <pre><code>npm install gitpo-mobile</code></pre>
            </article>
         </div>
      </div>
      
      {/* Quick Commit Action Bar */}
      <div className="fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-sm rounded-[32px] p-2 bg-gitpo-primary/20 border border-gitpo-primary/30 backdrop-blur-md flex items-center justify-center z-40">
         <button className="flex-1 rounded-full py-3 bg-gitpo-primary text-white text-sm font-medium hover:bg-gitpo-primary/90 transition-colors">
            Quick Commit
         </button>
      </div>
    </>
  );
}

function FileRow({ icon, name, message, time }: { icon: React.ReactNode, name: string, message: string, time: string }) {
   return (
      <div className="flex items-center justify-between p-4 hover:bg-gitpo-border/50 transition-colors cursor-pointer">
         <div className="flex items-center gap-3 w-1/3">
            {icon}
            <span className="text-sm font-medium truncate">{name}</span>
         </div>
         <span className="text-xs text-gitpo-text-secondary truncate w-1/3 text-center">{message}</span>
         <span className="text-xs text-gitpo-text-secondary w-1/6 text-right">{time}</span>
      </div>
   )
}
