import { Header } from '@/components/ui/header';
import { GitCommit, GitPullRequest, GitMerge, Star, MessageSquare } from 'lucide-react';
import { auth } from '@/lib/auth';
import { getEvents, getUser } from '@/lib/github';
import { redirect } from 'next/navigation';
import { formatDistanceToNow } from 'date-fns';

export default async function Activity() {
  const session = await auth();
  
  if (!session || !(session as any).accessToken || !session.user?.name) {
    redirect('/');
  }

  const token = (session as any).accessToken;
  const user = await getUser(token);
  const events = await getEvents(token, user.login, 30);

  return (
    <>
      <Header title="Activity" subtitle="Global Feed" />
      <div className="p-4 md:p-6">
         <div className="relative border-l border-gitpo-border ml-4 space-y-8 pb-8">
            {events.length > 0 ? events.map((event: any) => {
              const timeStr = formatDistanceToNow(new Date(event.created_at), { addSuffix: true });
              
              if (event.type === 'PushEvent') {
                return (
                  <TimelineItem 
                    key={event.id}
                    icon={<GitCommit className="w-4 h-4 text-white" />}
                    iconBg="bg-gitpo-primary"
                    title={`Pushed ${event.payload.commits?.length || 0} commit(s) to ${event.repo.name}`}
                    time={timeStr}
                    details={event.payload.commits?.[0]?.message}
                  />
                );
              }
              if (event.type === 'PullRequestEvent') {
                return (
                  <TimelineItem 
                    key={event.id}
                    icon={<GitPullRequest className="w-4 h-4 text-white" />}
                    iconBg="bg-gitpo-success"
                    title={`${event.payload.action === 'opened' ? 'Opened' : 'Updated'} PR in ${event.repo.name}`}
                    time={timeStr}
                    details={event.payload.pull_request?.title}
                  />
                );
              }
              if (event.type === 'IssueCommentEvent') {
                return (
                  <TimelineItem 
                    key={event.id}
                    icon={<MessageSquare className="w-4 h-4 text-gitpo-text" />}
                    iconBg="bg-gitpo-card border border-gitpo-border"
                    title={`Commented on issue in ${event.repo.name}`}
                    time={timeStr}
                    details={event.payload.comment?.body?.substring(0, 50) + "..."}
                  />
                );
              }
              if (event.type === 'WatchEvent') {
                return (
                  <TimelineItem 
                    key={event.id}
                    icon={<Star className="w-4 h-4 text-gitpo-bg" />}
                    iconBg="bg-gitpo-secondary"
                    title={`Starred ${event.repo.name}`}
                    time={timeStr}
                  />
                );
              }

              return null; // Ignore other events for now to keep it clean
            }) : (
               <div className="pl-8 text-sm text-gitpo-text-secondary">No recent activity found.</div>
            )}
         </div>
      </div>
    </>
  );
}

function TimelineItem({ icon, iconBg, title, time, details }: { 
   icon: React.ReactNode, iconBg: string, title: string, time: string, details?: string 
}) {
   return (
      <div className="relative pl-8">
         <div className={`absolute -left-4 top-0 w-8 h-8 rounded-full ${iconBg} flex items-center justify-center ring-4 ring-gitpo-bg`}>
            {icon}
         </div>
         <div className="pt-1">
            <div className="flex items-center justify-between mb-1">
               <p className="text-sm font-medium">{title}</p>
               <span className="text-[10px] text-gitpo-text-secondary uppercase tracking-wider font-semibold">{time}</span>
            </div>
            {details && (
               <div className="p-3 mt-2 rounded-xl bg-gitpo-card border border-gitpo-border text-sm text-gitpo-text-secondary">
                  {details}
               </div>
            )}
         </div>
      </div>
   )
}
