'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FolderGit2, ActivitySquare, BarChart2, User, Github } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const NAV_ITEMS = [
  { name: 'Dashboard', icon: Home, href: '/dashboard' },
  { name: 'Repositories', icon: FolderGit2, href: '/repositories' },
  { name: 'Activity', icon: ActivitySquare, href: '/activity' },
  { name: 'Analytics', icon: BarChart2, href: '/analytics' },
  { name: 'Profile', icon: User, href: '/profile' },
];

export function SideNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex flex-col w-64 border-r border-gitpo-border bg-gitpo-bg/50 backdrop-blur-xl h-screen sticky top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gitpo-primary flex items-center justify-center">
          <span className="font-bold text-white tracking-tighter">G</span>
        </div>
        <span className="font-semibold text-xl tracking-tight">Gitpo</span>
      </div>

      <div className="flex-1 px-4 py-6 space-y-2">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex items-center gap-3 px-3 py-2.5 rounded-xl group"
            >
              {isActive && (
                <motion.div
                  layoutId="side-nav-active"
                  className="absolute inset-0 bg-gitpo-primary/10 rounded-xl"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Icon 
                className={cn(
                  "w-5 h-5 relative z-10 transition-colors duration-200",
                  isActive ? "text-gitpo-primary" : "text-gitpo-text-secondary group-hover:text-gitpo-text"
                )} 
              />
              <span className={cn(
                "text-sm font-medium relative z-10 transition-colors duration-200",
                isActive ? "text-gitpo-primary" : "text-gitpo-text-secondary group-hover:text-gitpo-text"
              )}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>

      <div className="p-4 mt-auto">
        <div className="p-4 rounded-xl border border-gitpo-border bg-gitpo-card flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gitpo-bg overflow-hidden flex items-center justify-center border border-gitpo-border">
             <Github className="w-5 h-5" />
          </div>
          <div className="flex-1 overflow-hidden">
             <p className="text-sm font-medium truncate">zerocoffe0</p>
             <p className="text-xs text-gitpo-text-secondary truncate">Pro Plan</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
