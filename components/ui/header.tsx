import { Bell } from 'lucide-react';

export function Header({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <header className="md:hidden sticky top-0 z-40 bg-gitpo-bg/80 backdrop-blur-xl border-b border-gitpo-border px-6 pt-safe pb-4">
      <div className="flex justify-between items-center mt-2">
        <div>
          {subtitle && <p className="text-xs text-gitpo-text-secondary font-medium uppercase tracking-wider">{subtitle}</p>}
          <h1 className="font-semibold text-2xl tracking-tight">{title}</h1>
        </div>
        <button className="w-10 h-10 rounded-full border border-gitpo-border flex items-center justify-center hover:bg-gitpo-card transition-colors">
          <Bell className="w-5 h-5 text-gitpo-text-secondary" />
        </button>
      </div>
    </header>
  );
}
