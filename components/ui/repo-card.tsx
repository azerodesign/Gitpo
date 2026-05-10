import Link from 'next/link';
import { Star } from 'lucide-react';

export function RepoCard({ name, access, description, stars, lang, langColor }: { name: string, access: string, description: string, stars: number, lang: string, langColor: string }) {
  return (
    <Link href={`/repositories/${name}`} className="block p-5 rounded-3xl bg-gitpo-card border border-gitpo-border hover:border-gitpo-border-hover transition-colors group">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[15px] group-hover:text-gitpo-primary transition-colors">{name}</span>
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border border-gitpo-border text-gitpo-text-secondary">
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
      <p className="text-sm text-gitpo-text-secondary mb-4 line-clamp-1">{description}</p>
      <div className="flex items-center gap-2 text-xs font-medium text-gitpo-text-secondary">
        <div className={`w-2 h-2 rounded-full ${langColor}`} />
        <span>{lang}</span>
      </div>
    </Link>
  )
}
