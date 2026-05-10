import { Header } from '@/components/ui/header';
import { ChevronLeft, Folder, FileText, GitBranch, Share, MoreVertical } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { auth } from '@/lib/auth';
import { getRepoConfig, getRepoReadme, getRepoCommits } from '@/lib/github';
import { redirect } from 'next/navigation';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { formatDistanceToNow } from 'date-fns';

export default async function RepositoryDetail({ params }: { params: Promise<{ owner: string, repo: string }> }) {
  const session = await auth();
  
  if (!session || !(session as any).accessToken) {
    redirect('/');
  }

  const { owner, repo } = await params;
  const token = (session as any).accessToken;

  // Fetch real data
  const [repoData, readmeData, commits] = await Promise.all([
    getRepoConfig(token, owner, repo),
    getRepoReadme(token, owner, repo).catch(() => null),
    getRepoCommits(token, owner, repo).catch(() => [])
  ]);

  const latestCommit = commits[0];

  return (
    <>
      <header className="sticky top-0 z-40 bg-gitpo-bg/80 backdrop-blur-xl border-b border-gitpo-border px-6 pt-safe pb-4">
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-3">
             <Link href="/repositories" className="w-8 h-8 rounded-full border border-gitpo-border flex items-center justify-center hover:bg-gitpo-card transition-colors">
                <ChevronLeft className="w-4 h-4" />
             </Link>
             <h1 className="font-semibold text-lg tracking-tight truncate max-w-[200px] md:max-w-xs">{repo}</h1>
          </div>
          <div className="flex items-center gap-2">
             <button className="w-8 h-8 rounded-full border border-gitpo-border flex items-center justify-center hover:bg-gitpo-card transition-colors">
                <Share className="w-4 h-4 text-gitpo-text-secondary" />
             </button>
             <button className="w-8 h-8 rounded-full border border-gitpo-border flex items-center justify-center hover:bg-gitpo-card transition-colors">
                <MoreVertical className="w-4 h-4 text-gitpo-text-secondary" />
             </button>
          </div>
        </div>
      </header>
      
      <div className="p-4 md:p-6 space-y-4 md:space-y-6">
         {/* Top Action Bar */}
         <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
            <Link href={`/repositories/${owner}/${repo}/releases`} className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border border-gitpo-border bg-gitpo-card text-sm font-medium hover:bg-gitpo-border transition-colors">
               <Share className="w-4 h-4 text-gitpo-text-secondary" />
               Releases
            </Link>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gitpo-border bg-gitpo-card text-sm font-medium hover:bg-gitpo-border transition-colors cursor-pointer">
               <GitBranch className="w-4 h-4 text-gitpo-text-secondary" />
               Branch: <span className="font-bold">{repoData.default_branch || 'main'}</span>
            </div>
         </div>
         
         {/* Minimal commit history / info pane */}
         {latestCommit && (
           <div className="rounded-2xl border border-gitpo-border bg-gitpo-card overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-gitpo-border bg-gitpo-bg/30">
                 <div className="flex items-center gap-2 overflow-hidden flex-1">
                    <img src={latestCommit.author?.avatar_url || 'https://github.com/github.png'} alt="author" className="w-6 h-6 rounded-full shrink-0" />
                    <span className="text-xs font-medium text-gitpo-text-secondary truncate">{latestCommit.commit.message.split('\n')[0]}</span>
                 </div>
                 <span className="text-xs text-gitpo-text-secondary shrink-0 ml-2">
                    {formatDistanceToNow(new Date(latestCommit.commit.author.date), { addSuffix: true })}
                 </span>
              </div>
           </div>
         )}
         
         {/* README Preview */}
         <div className="rounded-2xl border border-gitpo-border bg-gitpo-card p-4 pb-12 overflow-hidden">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gitpo-border">
               <FileText className="w-4 h-4 text-gitpo-text-secondary shrink-0" />
               <span className="text-sm font-medium">README.md</span>
            </div>
            {readmeData ? (
              <div className="prose prose-invert prose-sm sm:prose-base max-w-none break-words">
                 <Markdown remarkPlugins={[remarkGfm]}>{readmeData}</Markdown>
              </div>
            ) : (
              <div className="text-center py-10 text-gitpo-text-secondary text-sm">
                 No README.md found in this repository.
              </div>
            )}
         </div>
      </div>
    </>
  );
}
