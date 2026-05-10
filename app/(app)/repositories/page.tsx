import { Header } from '@/components/ui/header';
import { auth } from '@/lib/auth';
import { getRepos } from '@/lib/github';
import { redirect } from 'next/navigation';
import { RepoList } from './repo-list';

export default async function Repositories() {
  const session = await auth();
  
  if (!session || !(session as any).accessToken) {
    redirect('/');
  }

  const token = (session as any).accessToken;
  const repos = await getRepos(token, 'updated', 100);

  return (
    <>
      <Header title="Repositories" />
      <div className="p-4 md:p-6 relative h-full">
        <RepoList initialRepos={repos} />
      </div>
    </>
  );
}
