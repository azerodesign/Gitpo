import { BottomNav } from '@/components/ui/bottom-nav';
import { SideNav } from '@/components/ui/side-nav';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gitpo-bg flex">
      {/* Desktop Sidebar (hidden on mobile) */}
      <SideNav />

      {/* Main Content Area */}
      <div className="flex-1 min-h-screen pb-24 md:pb-0 mx-auto max-w-3xl w-full">
        <main className="min-h-screen">
          {children}
        </main>
      </div>
      
      {/* Mobile Bottom Nav (hidden on desktop) */}
      <BottomNav />
    </div>
  );
}
