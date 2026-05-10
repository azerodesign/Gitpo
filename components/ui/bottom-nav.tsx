'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FolderGit2, ActivitySquare, BarChart2, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const NAV_ITEMS = [
  { name: 'Home', icon: Home, href: '/dashboard' },
  { name: 'Repos', icon: FolderGit2, href: '/repositories' },
  { name: 'Activity', icon: ActivitySquare, href: '/activity' },
  { name: 'Analytics', icon: BarChart2, href: '/analytics' },
  { name: 'Profile', icon: User, href: '/profile' },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 w-full max-w-md mx-auto left-1/2 -translate-x-1/2 z-50 bg-gitpo-card/90 backdrop-blur-xl border-t border-gitpo-border pb-safe">
      <div className="max-w-md mx-auto px-6 h-16 flex items-center justify-between">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex flex-col items-center justify-center w-12 h-12"
            >
              {isActive && (
                <motion.div
                  layoutId="bottom-nav-active"
                  className="absolute inset-0 bg-gitpo-primary/10 rounded-xl"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Icon 
                className={cn(
                  "w-5 h-5 relative z-10 transition-colors duration-200",
                  isActive ? "text-gitpo-primary" : "text-gitpo-text-secondary"
                )} 
              />
              <span className={cn(
                "text-[10px] mt-1 font-medium relative z-10 transition-colors duration-200",
                isActive ? "text-gitpo-primary" : "text-gitpo-text-secondary"
              )}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
