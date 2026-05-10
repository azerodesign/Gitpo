'use client';

import { motion } from 'motion/react';
import { Github, Code2, LineChart, Rocket, Zap, ArrowRight, Activity, GitCommit, GitPullRequest, GitMerge } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gitpo-bg overflow-x-hidden selection:bg-gitpo-primary/30">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gitpo-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-gitpo-secondary/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        {/* Navigation */}
        <nav className="flex items-center justify-between py-6 mb-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gitpo-primary flex items-center justify-center">
              <span className="font-bold text-white tracking-tighter">G</span>
            </div>
            <span className="font-semibold text-xl tracking-tight">Gitpo</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-sm font-medium text-gitpo-text-secondary hover:text-white transition-colors">
              Preview App
            </Link>
            <Link 
              href="/dashboard"
              className="group relative inline-flex items-center gap-2 justify-center px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-gitpo-card border border-gitpo-border rounded-full hover:bg-gitpo-bg-secondary hover:border-gitpo-border-hover focus:outline-none focus:ring-2 focus:ring-gitpo-primary focus:ring-offset-2 focus:ring-offset-gitpo-bg"
            >
              <Github className="w-4 h-4" />
              <span>Login</span>
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto mt-20 mb-32 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gitpo-border bg-gitpo-card/50 backdrop-blur-md text-xs font-medium text-gitpo-text-secondary"
          >
            <span className="w-2 h-2 rounded-full bg-gitpo-secondary animate-pulse" />
            Introducing Gitpo Mobile
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gitpo-text-secondary leading-[1.1]"
          >
            Manage GitHub repositories faster on mobile.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gitpo-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            The premium control center for your repositories. Quick commits, release management, and deep analytics—all designed for your thumb.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link 
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white transition-all duration-200 bg-gitpo-primary rounded-full hover:bg-gitpo-primary/90 focus:outline-none focus:ring-2 focus:ring-gitpo-primary focus:ring-offset-2 focus:ring-offset-gitpo-bg w-full sm:w-auto hover:scale-105 active:scale-95"
            >
              <Github className="w-5 h-5" />
              <span>Continue with GitHub</span>
            </Link>
          </motion.div>
        </section>

        {/* Dashboard Preview / Mockup */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative mx-auto max-w-lg mb-32"
        >
          {/* Mobile phone mock */}
          <div className="relative rounded-[40px] border border-gitpo-border bg-gitpo-card p-2 shadow-2xl overflow-hidden shadow-gitpo-primary/10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gitpo-bg rounded-b-xl z-20"></div>
            <div className="relative rounded-[32px] overflow-hidden bg-gitpo-bg aspect-[9/19.5] border border-gitpo-border">
              {/* Fake App Header */}
              <div className="px-6 pt-12 pb-4 flex justify-between items-center border-b border-gitpo-border">
                <div>
                  <p className="text-xs text-gitpo-text-secondary font-medium">Overview</p>
                  <p className="font-semibold text-lg">Dashboard</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gitpo-card border border-gitpo-border overflow-hidden p-0.5">
                   <div className="w-full h-full rounded-full bg-gradient-to-tr from-gitpo-primary to-gitpo-secondary" />
                </div>
              </div>
              {/* Fake App Content */}
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-gitpo-card border border-gitpo-border">
                    <p className="text-xs text-gitpo-text-secondary mb-1">Total Repos</p>
                    <p className="font-semibold text-2xl">42</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-gitpo-card border border-gitpo-border">
                    <p className="text-xs text-gitpo-text-secondary mb-1">Stars</p>
                    <p className="font-semibold text-2xl text-gitpo-secondary">1.2k</p>
                  </div>
                </div>
                
                <div className="p-4 rounded-2xl bg-gitpo-card border border-gitpo-border space-y-4">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium">Recent Activity</p>
                    <LineChart className="w-4 h-4 text-gitpo-text-secondary" />
                  </div>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex gap-3 items-center">
                        <div className="w-8 h-8 rounded-full bg-gitpo-bg border border-gitpo-border flex items-center justify-center">
                          <GitCommit className="w-4 h-4 text-gitpo-text-secondary" />
                        </div>
                        <div>
                          <p className="text-sm">Update README.md</p>
                          <p className="text-xs text-gitpo-text-secondary">2 hours ago</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4 tracking-tight">Everything you need. In your pocket.</h2>
            <p className="text-gitpo-text-secondary">Designed for speed, clarity, and action.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Code2 className="w-5 h-5 text-gitpo-primary" />}
              title="Quick Commits"
              description="Edit files, view beautiful diffs, and push changes directly from your mobile device."
            />
            <FeatureCard 
              icon={<Rocket className="w-5 h-5 text-gitpo-secondary" />}
              title="Release Management"
              description="Draft releases, attach binaries, generate changelogs, and publish on the go."
            />
            <FeatureCard 
              icon={<Activity className="w-5 h-5 text-gitpo-success" />}
              title="Repository Analytics"
              description="Track stars, clones, traffic, and contributor activity with beautiful, clear graphs."
            />
          </div>
        </section>
        
        {/* Workflow Section */}
        <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6 tracking-tight">The workflow, simplified.</h2>
            <div className="space-y-6">
              <WorkflowStep number="01" title="Login securely" desc="Connect instantly using GitHub OAuth." />
              <WorkflowStep number="02" title="Select repository" desc="Navigate through your active projects." />
              <WorkflowStep number="03" title="Act quickly" desc="Manage issues, pushes, and releases in taps." />
              <WorkflowStep number="04" title="Analyze growth" desc="Watch your repositories gain traction." />
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-gitpo-card border border-gitpo-border aspect-square flex flex-col justify-center">
             <div className="space-y-4">
                <div className="p-4 rounded-xl bg-gitpo-bg border border-gitpo-border flex gap-4 items-center animate-pulse opacity-50">
                   <div className="w-10 h-10 rounded-full bg-gitpo-card" />
                   <div className="flex-1 space-y-2">
                     <div className="h-3 w-1/3 bg-gitpo-card rounded" />
                     <div className="h-2 w-1/4 bg-gitpo-card rounded" />
                   </div>
                </div>
                <div className="p-4 rounded-xl bg-gitpo-bg border border-gitpo-primary/30 flex gap-4 items-center">
                   <div className="w-10 h-10 rounded-full bg-gitpo-primary/20 flex items-center justify-center">
                      <GitPullRequest className="w-5 h-5 text-gitpo-primary" />
                   </div>
                   <div className="flex-1 space-y-1">
                     <div className="flex items-center justify-between">
                       <p className="text-sm font-medium">feat: ui update</p>
                       <span className="text-[10px] uppercase font-bold tracking-wider text-gitpo-primary bg-gitpo-primary/10 px-2 py-0.5 rounded">Open</span>
                     </div>
                     <p className="text-xs text-gitpo-text-secondary">#42 opened by zerocoffe0</p>
                   </div>
                </div>
                <div className="p-4 rounded-xl bg-gitpo-bg border border-gitpo-border flex gap-4 items-center animate-pulse opacity-50">
                   <div className="w-10 h-10 rounded-full bg-gitpo-card" />
                   <div className="flex-1 space-y-2">
                     <div className="h-3 w-1/2 bg-gitpo-card rounded" />
                     <div className="h-2 w-1/3 bg-gitpo-card rounded" />
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-20 px-6 rounded-3xl bg-gitpo-card border border-gitpo-border relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gitpo-primary/10 blur-[80px] rounded-full mix-blend-screen pointer-events-none" />
          <h2 className="text-3xl font-semibold mb-6 tracking-tight relative z-10">Ready to take control?</h2>
          <p className="text-gitpo-text-secondary mb-8 max-w-md mx-auto relative z-10">
            Join thousands of developers managing their GitHub workload directly from their mobile devices.
          </p>
          <Link 
            href="/dashboard"
            className="inline-flex relative z-10 items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white transition-all duration-200 bg-gitpo-primary rounded-full hover:bg-gitpo-primary/90 hover:scale-105 active:scale-95"
          >
            <Github className="w-5 h-5" />
            <span>Login with GitHub</span>
          </Link>
        </section>
        
        <footer className="mt-20 pt-8 border-t border-gitpo-border text-center text-sm text-gitpo-text-secondary">
           <p>© {new Date().getFullYear()} Gitpo. The mobile control center.</p>
        </footer>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-gitpo-card border border-gitpo-border hover:border-gitpo-border-hover transition-colors">
      <div className="w-10 h-10 rounded-xl bg-gitpo-bg border border-gitpo-border flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-medium text-lg mb-2">{title}</h3>
      <p className="text-sm text-gitpo-text-secondary leading-relaxed tracking-wide">{description}</p>
    </div>
  );
}

function WorkflowStep({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1">
        <span className="text-xs font-mono font-bold tracking-widest text-gitpo-text-secondary bg-gitpo-card border border-gitpo-border px-2 py-1 rounded">
          {number}
        </span>
      </div>
      <div>
        <h4 className="font-medium text-base mb-1">{title}</h4>
        <p className="text-sm text-gitpo-text-secondary">{desc}</p>
      </div>
    </div>
  )
}
