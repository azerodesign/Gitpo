import { BottomNav } from '@/components/ui/bottom-nav';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] bg-[#000000] flex justify-center">
      {/* Mobile App Container */}
      <div className="w-full max-w-md bg-gitpo-bg min-h-[100dvh] relative overflow-x-hidden shadow-2xl flex flex-col">
        <main className="flex-1 pb-20 relative">
          {children}
        </main>
        
        {/* Mobile Bottom Nav */}
        <BottomNav />
      </div>
    </div>
  );
}
