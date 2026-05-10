'use client';

import { Header } from '@/components/ui/header';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Jan', commits: 400, stars: 240, amt: 2400 },
  { name: 'Feb', commits: 300, stars: 139, amt: 2210 },
  { name: 'Mar', commits: 200, stars: 980, amt: 2290 },
  { name: 'Apr', commits: 278, stars: 390, amt: 2000 },
  { name: 'May', commits: 189, stars: 480, amt: 2181 },
  { name: 'Jun', commits: 239, stars: 380, amt: 2500 },
  { name: 'Jul', commits: 349, stars: 430, amt: 2100 },
];

export default function Analytics() {
  return (
    <>
      <Header title="Analytics" />
      <div className="p-4 md:p-6 space-y-6">
        
        {/* Main Growth Graph */}
        <section className="space-y-4">
           <div>
             <h2 className="text-lg font-medium tracking-tight">Repository Growth</h2>
             <p className="text-sm text-gitpo-text-secondary">Combined stars across all public repositories</p>
           </div>
           
           <div className="h-[220px] w-full p-3 md:p-4 rounded-2xl bg-gitpo-card border border-gitpo-border">
             <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorStars" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22D3EE" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#22D3EE" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(243,244,246,0.1)" vertical={false} />
                  <XAxis dataKey="name" stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#162033', border: '1px solid rgba(243,244,246,0.1)', borderRadius: '12px' }}
                    itemStyle={{ color: '#F3F4F6' }}
                  />
                  <Area type="monotone" dataKey="stars" stroke="#22D3EE" strokeWidth={2} fillOpacity={1} fill="url(#colorStars)" />
                </AreaChart>
             </ResponsiveContainer>
           </div>
        </section>

        {/* Commit Frequency */}
        <section className="space-y-4">
           <div>
             <h2 className="text-lg font-medium tracking-tight">Commit Frequency</h2>
             <p className="text-sm text-gitpo-text-secondary">Total commits per month</p>
           </div>
           
           <div className="h-[220px] w-full p-3 md:p-4 rounded-2xl bg-gitpo-card border border-gitpo-border">
             <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(243,244,246,0.1)" vertical={false} />
                  <XAxis dataKey="name" stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#162033', border: '1px solid rgba(243,244,246,0.1)', borderRadius: '12px' }}
                    itemStyle={{ color: '#F3F4F6' }}
                  />
                  <Line type="monotone" dataKey="commits" stroke="#2563EB" strokeWidth={2} dot={{ r: 4, fill: '#0A0F1F', strokeWidth: 2 }} activeDot={{ r: 6 }} />
                </LineChart>
             </ResponsiveContainer>
           </div>
        </section>

      </div>
    </>
  );
}
