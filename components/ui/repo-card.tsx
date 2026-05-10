import Link from 'next/link';
import { Star } from 'lucide-react';

export function RepoCard({ name, owner, access, description, stars, lang, langColor }: { name: string, owner?: string, access: string, description: string, stars: number, lang: string, langColor: string }) {
  const href = owner ? `/repositories/${owner}/${name}` : `/repositories/${name}`;
  return (
    <Link href={href} className="block p-4 rounded-xl bg-gitpo-card border border-gitpo-border hover:border-gitpo-border-hover transition-colors group">
      <div className="flex justify-between items-start mb-1.5">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[14px] group-hover:text-gitpo-primary transition-colors">{name}</span>
          <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded border border-gitpo-border text-gitpo-text-secondary">
            {access}
          </span>
        </div>
        {stars > 0 && (
          <div className="flex items-center gap-1 text-gitpo-text-secondary text-xs font-medium">
            <Star className="w-3 h-3" />
            <span>{stars}</span>
          </div>
        )}
      </div>
      <p className="text-xs text-gitpo-text-secondary mb-3 line-clamp-1">{description}</p>
      <div className="flex items-center gap-1.5 text-[11px] font-medium text-gitpo-text-secondary">
        <div className={`w-2 h-2 rounded-full ${langColor}`} />
        <span>{lang}</span>
      </div>
    </Link>
  )
}
