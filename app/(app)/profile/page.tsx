'use client';

import { Header } from '@/components/ui/header';
import { LogOut, Settings, Github, CreditCard, Bell, Shield } from 'lucide-react';
import Link from 'next/link';

export default function Profile() {
  return (
    <>
      <Header title="Profile" />
      <div className="p-6 space-y-8">
         
         {/* Profile Card */}
         <div className="p-6 rounded-3xl bg-gitpo-card border border-gitpo-border text-center relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-gitpo-primary/20 to-transparent" />
            <div className="relative z-10">
               <div className="w-20 h-20 mx-auto rounded-full bg-gitpo-bg border-4 border-gitpo-card overflow-hidden flex items-center justify-center mb-4">
                  <Github className="w-10 h-10" />
               </div>
               <h2 className="text-xl font-semibold tracking-tight">zerocoffe0</h2>
               <p className="text-sm text-gitpo-text-secondary mt-1">zerocoffe0@gmail.com</p>
               
               <div className="mt-6 flex justify-center gap-6 text-sm">
                  <div className="text-center">
                     <p className="font-semibold text-lg">24</p>
                     <p className="text-xs text-gitpo-text-secondary uppercase tracking-wider font-medium">Followers</p>
                  </div>
                  <div className="text-center">
                     <p className="font-semibold text-lg">12</p>
                     <p className="text-xs text-gitpo-text-secondary uppercase tracking-wider font-medium">Following</p>
                  </div>
                  <div className="text-center">
                     <p className="font-semibold text-lg">42</p>
                     <p className="text-xs text-gitpo-text-secondary uppercase tracking-wider font-medium">Repos</p>
                  </div>
               </div>
            </div>
         </div>
         
         {/* Settings Links */}
         <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gitpo-text-secondary mb-4 px-2">Account</h3>
            
            <SettingRow icon={<Github className="w-4 h-4" />} title="Connected Account" value="zerocoffe0" />
            <SettingRow icon={<CreditCard className="w-4 h-4" />} title="Subscription plan" value="Pro" />
            <SettingRow icon={<Bell className="w-4 h-4" />} title="Notifications" />
            <SettingRow icon={<Shield className="w-4 h-4" />} title="Privacy & Security" />
            <SettingRow icon={<Settings className="w-4 h-4" />} title="App Settings" />
         </div>
         
         <div className="pt-4">
            <Link href="/" className="flex items-center justify-center gap-2 w-full p-4 rounded-xl border border-gitpo-danger/30 text-gitpo-danger hover:bg-gitpo-danger/10 transition-colors font-medium text-sm">
               <LogOut className="w-4 h-4" />
               Sign out
            </Link>
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
