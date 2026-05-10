'use client';

import { Header } from '@/components/ui/header';
import { Search, Plus, Filter } from 'lucide-react';
import { RepoCard } from '@/components/ui/repo-card';

export default function Repositories() {
  return (
    <>
      <Header title="Repositories" />
      <div className="p-6 space-y-6 relative h-full">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gitpo-text-secondary" />
            <input 
              type="text" 
              placeholder="Find a repository..." 
              className="w-full bg-gitpo-card border border-gitpo-border rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:border-gitpo-primary focus:ring-1 focus:ring-gitpo-primary transition-all placeholder:text-gitpo-text-secondary text-gitpo-text"
            />
          </div>
          <button className="w-11 h-11 flex items-center justify-center rounded-xl bg-gitpo-card border border-gitpo-border hover:bg-gitpo-border transition-colors">
             <Filter className="w-4 h-4 text-gitpo-text-secondary" />
          </button>
        </div>

        <div className="space-y-3">
          <RepoCard name="gitpo-mobile" access="Private" description="Mobile first GitHub control center." stars={0} lang="TypeScript" langColor="bg-blue-400" />
          <RepoCard name="solid-ui" access="Public" description="A minimal UI library for Next.js." stars={342} lang="TypeScript" langColor="bg-blue-400" />
          <RepoCard name="vibe-engine" access="Public" description="Game engine for vibecoders." stars={1024} lang="Rust" langColor="bg-orange-400" />
          <RepoCard name="dotfiles" access="Public" description="My macOS configurations." stars={12} lang="Shell" langColor="bg-green-400" />
          <RepoCard name="personal-website" access="Public" description="Portfolio and blog." stars={45} lang="TypeScript" langColor="bg-blue-400" />
        </div>

        {/* Floating Action Button (Mobile) */}
        <button className="md:hidden fixed bottom-24 right-6 w-14 h-14 bg-gitpo-primary rounded-full shadow-lg shadow-gitpo-primary/40 flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all z-40">
           <Plus className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}
