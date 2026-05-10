'use client';

import { useState } from 'react';
import { Search, Plus, Filter } from 'lucide-react';
import { RepoCard } from '@/components/ui/repo-card';

export function RepoList({ initialRepos }: { initialRepos: any[] }) {
  const [search, setSearch] = useState('');
  
  const filteredRepos = initialRepos.filter(repo => 
    repo.name.toLowerCase().includes(search.toLowerCase()) || 
    (repo.description && repo.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gitpo-text-secondary" />
          <input 
            type="text" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Find a repository..." 
            className="w-full bg-gitpo-card border border-gitpo-border rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:border-gitpo-primary focus:ring-1 focus:ring-gitpo-primary transition-all placeholder:text-gitpo-text-secondary text-gitpo-text"
          />
        </div>
        <button className="w-11 h-11 flex items-center justify-center rounded-xl bg-gitpo-card border border-gitpo-border hover:bg-gitpo-border transition-colors">
            <Filter className="w-4 h-4 text-gitpo-text-secondary" />
        </button>
      </div>

      <div className="space-y-3">
        {filteredRepos.length > 0 ? filteredRepos.map((repo: any) => (
          <RepoCard 
            key={repo.id}
            name={repo.name} 
            owner={repo.owner?.login}
            access={repo.private ? "Private" : "Public"} 
            description={repo.description || "No description provided."} 
            stars={repo.stargazers_count} 
            lang={repo.language} 
            langColor={getLangColor(repo.language)} 
          />
        )) : (
          <div className="text-center py-10 text-gitpo-text-secondary">
            No repositories found matching &quot;{search}&quot;.
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-gitpo-primary rounded-full shadow-lg shadow-gitpo-primary/40 flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all z-40 max-w-[calc(100vw-3rem)] md:right-[calc(50vw-200px)]">
          <Plus className="w-6 h-6" />
      </button>
    </div>
  );
}

function getLangColor(lang: string | null) {
  if (!lang) return 'bg-gray-400';
  const colors: Record<string, string> = {
    TypeScript: 'bg-blue-400',
    JavaScript: 'bg-yellow-400',
    Python: 'bg-blue-500',
    Rust: 'bg-orange-400',
    Go: 'bg-cyan-400',
    HTML: 'bg-orange-500',
    CSS: 'bg-blue-300'
  };
  return colors[lang] || 'bg-gitpo-text-secondary';
}
