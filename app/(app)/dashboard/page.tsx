import { Header } from '@/components/ui/header';
import { RepoCard } from '@/components/ui/repo-card';
import { GitCommit, Star, GitBranch, Terminal, LineChart } from 'lucide-react';
import Link from 'next/link';
import { auth } from '@/lib/auth';
import { getUser, getRepos, getEvents } from '@/lib/github';
import { redirect } from 'next/navigation';
import { formatDistanceToNow } from 'date-fns';

export default async function Dashboard() {
  const session = await auth();
  
  if (!session || !(session as any).accessToken) {
    redirect('/');
  }

  const token = (session as any).accessToken;

  // Fetch real data
  const user = await getUser(token);
  const [repos, events] = await Promise.all([
    getRepos(token, 'updated', 3),
    getEvents(token, user.login, 5)
  ]);

  const totalRepos = user.public_repos + (user.total_private_repos || 0);
  const pushEvents = events.filter((e: any) => e.type === 'PushEvent');

  return (
    <>
      <Header title="Dashboard" subtitle="Overview" />
      <div className="p-4 md:p-6 space-y-6">
        
        {/* Quick Stats Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard title="Total Repos" value={totalRepos.toString()} icon={<Terminal className="w-4 h-4" />} />
          <StatCard title="Followers" value={user.followers?.toString() || "0"} icon={<ActivityIcon className="w-4 h-4 text-gitpo-success" />} />
          <StatCard title="Following" value={user.following?.toString() || "0"} icon={<GitBranch className="w-4 h-4" />} />
          <StatCard title="Gists" value={(user.public_gists + (user.private_gists || 0)).toString()} icon={<Star className="w-4 h-4 text-gitpo-secondary" />} />
        </section>

        {/* Global Leaderboards link */}
        <Link href="/repositories" className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-gitpo-primary/20 to-gitpo-secondary/20 border border-gitpo-border hover:border-gitpo-primary/50 transition-all">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-gitpo-card flex items-center justify-center">
                <Star className="w-5 h-5 text-yellow-500" />
             </div>
             <div>
                <p className="text-sm font-semibold">My Repositories</p>
                <p className="text-xs text-gitpo-text-secondary">View and manage your projects</p>
             </div>
          </div>
          <div className="px-3 py-1.5 rounded-full bg-gitpo-card border border-gitpo-border text-xs font-medium">View</div>
        </Link>
        
        <div className="grid grid-cols-1 gap-6">
          {/* Top Repositories */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium tracking-tight">Recent Repositories</h2>
              <Link href="/repositories" className="text-sm text-gitpo-text-secondary hover:text-white transition-colors">See all</Link>
            </div>
            <div className="space-y-3">
              {repos.length > 0 ? repos.map((repo: any) => (
                <RepoCard 
                  key={repo.id}
                  name={repo.name} 
                  owner={repo.owner?.login}
                  access={repo.private ? "Private" : "Public"} 
                  description={repo.description || "No description provided."} 
                  stars={repo.stargazers_count} 
                  lang={repo.language} 
                  langColor={getLangColor(repo.language)} 
                />
              )) : (
                <div className="text-sm text-gitpo-text-secondary">No repositories found.</div>
              )}
            </div>
          </section>

          {/* Activity Feed */}
          <section className="space-y-4">
             <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium tracking-tight">Recent Activity</h2>
              <Link href="/activity" className="text-sm text-gitpo-text-secondary hover:text-white transition-colors">See all</Link>
            </div>
            <div className="p-3 rounded-2xl bg-gitpo-card border border-gitpo-border flex flex-col gap-4">
               {pushEvents.length > 0 ? pushEvents.slice(0, 3).map((event: any) => (
                 <ActivityItem 
                   key={event.id}
                   icon={<GitCommit className="w-4 h-4 text-gitpo-text-secondary" />}
                   title={`Pushed to ${event.payload.ref?.replace('refs/heads/', '')}`}
                   repo={event.repo.name}
                   desc={event.payload.commits?.[0]?.message || 'No commit message'}
                   time={formatDistanceToNow(new Date(event.created_at), { addSuffix: true })}
                 />
               )) : (
                 <div className="text-sm text-gitpo-text-secondary">No recent push activity.</div>
               )}
            </div>
          </section>
        </div>

      </div>
    </>
  );
}

function StatCard({ title, value, icon }: { title: string, value: string, icon: React.ReactNode }) {
  return (
    <div className="p-4 rounded-2xl bg-gitpo-card border border-gitpo-border hover:border-gitpo-border-hover transition-colors">
      <div className="flex items-center gap-2 mb-3 text-gitpo-text-secondary">
        {icon}
        <span className="text-xs font-medium uppercase tracking-wider truncate">{title}</span>
      </div>
      <p className="text-2xl sm:text-3xl font-semibold tracking-tight truncate">{value}</p>
    </div>
  )
}

function ActivityIcon(props: any) {
  // Just a simple dot icon for 'Active'
  return <div className={`w-2 h-2 rounded-full bg-current ${props.className}`} />
}

function getLangColor(lang: string | null) {
  if (!lang) return 'bg-gray-400';
  const colors: Record<string, string> = {
    TypeScript: 'bg-blue-400',
    JavaScript: 'bg-yellow-400',
    Python: 'bg-blue-500',
    Rust: 'bg-orange-400',
    Go: 'bg-cyan-400',
    HTML: 'bg-orange-500',
    CSS: 'bg-blue-300'
  };
  return colors[lang] || 'bg-gitpo-text-secondary';
}

function ActivityItem({ icon, title, repo, desc, time }: { icon: React.ReactNode, title: string, repo: string, desc: string, time: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-8 h-8 rounded-full bg-gitpo-bg border border-gitpo-border flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
         <p className="text-sm font-medium truncate">
           {title} <span className="font-normal text-gitpo-text-secondary">in</span> {repo}
         </p>
         {desc && <p className="text-xs text-gitpo-text-secondary mt-1 truncate">{desc}</p>}
         <p className="text-[10px] text-gitpo-text-secondary uppercase tracking-wider font-semibold mt-2">{time}</p>
      </div>
    </div>
  )
}
