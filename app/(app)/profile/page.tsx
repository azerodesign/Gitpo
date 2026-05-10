import { Header } from '@/components/ui/header';
import { LogOut, Settings, Github, CreditCard, Bell, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { auth } from '@/lib/auth';
import { getUser } from '@/lib/github';
import { redirect } from 'next/navigation';
import { LogoutButton } from './logout-button';

export default async function Profile() {
  const session = await auth();
  
  if (!session || !(session as any).accessToken) {
    redirect('/');
  }

  const token = (session as any).accessToken;
  const user = await getUser(token);

  return (
    <>
      <Header title="Profile" />
      <div className="p-4 md:p-6 space-y-6">
         
         {/* Profile Card */}
         <div className="p-5 rounded-2xl bg-gitpo-card border border-gitpo-border text-center relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-gitpo-primary/20 to-transparent" />
            <div className="relative z-10">
               <div className="w-16 h-16 mx-auto rounded-full border-4 border-gitpo-card overflow-hidden flex items-center justify-center mb-3 relative">
                  <Image src={user.avatar_url || 'https://github.com/github.png'} alt="Avatar" fill className="object-cover" />
               </div>
               <h2 className="text-xl font-semibold tracking-tight">{user.name || user.login}</h2>
               <p className="text-sm text-gitpo-text-secondary mt-1">{user.email || `@${user.login}`}</p>
               
               <div className="mt-6 flex justify-center gap-6 text-sm">
                  <div className="text-center">
                     <p className="font-semibold text-lg">{user.followers || 0}</p>
                     <p className="text-xs text-gitpo-text-secondary uppercase tracking-wider font-medium">Followers</p>
                  </div>
                  <div className="text-center">
                     <p className="font-semibold text-lg">{user.following || 0}</p>
                     <p className="text-xs text-gitpo-text-secondary uppercase tracking-wider font-medium">Following</p>
                  </div>
                  <div className="text-center">
                     <p className="font-semibold text-lg">{user.public_repos + (user.total_private_repos || 0)}</p>
                     <p className="text-xs text-gitpo-text-secondary uppercase tracking-wider font-medium">Repos</p>
                  </div>
               </div>
            </div>
         </div>
         
         {/* Settings Links */}
         <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gitpo-text-secondary mb-4 px-2">Account</h3>
            
            <SettingRow icon={<Github className="w-4 h-4" />} title="Connected Account" value={user.login} />
            <SettingRow icon={<CreditCard className="w-4 h-4" />} title="Subscription plan" value="Pro" />
            <SettingRow icon={<Bell className="w-4 h-4" />} title="Notifications" />
            <SettingRow icon={<Shield className="w-4 h-4" />} title="Privacy & Security" />
            <SettingRow icon={<Settings className="w-4 h-4" />} title="App Settings" />
         </div>
         
         <div className="pt-4">
            <LogoutButton />
         </div>
      </div>
    </>
  );
}

function SettingRow({ icon, title, value }: { icon: React.ReactNode, title: string, value?: string }) {
   return (
      <div className="flex items-center justify-between p-4 rounded-2xl bg-gitpo-card border border-gitpo-border hover:border-gitpo-border-hover transition-colors cursor-pointer">
         <div className="flex items-center gap-3">
            <div className="text-gitpo-text-secondary">{icon}</div>
            <span className="text-sm font-medium">{title}</span>
         </div>
         {value && <span className="text-xs text-gitpo-text-secondary">{value}</span>}
      </div>
   )
}
