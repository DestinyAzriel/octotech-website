'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, BarChart3, AppWindow, GitBranch, ShieldAlert, ArrowRight, CheckCircle2, Cpu } from 'lucide-react';
import ConversionCTA from '@/components/ConversionCTA';

const solutionsList = [
  {
    id: 'online-store',
    clientQuote: 'I need an online store to sell my products.',
    icon: ShoppingCart,
    capability: 'Web & Mobile Applications',
    capabilityLink: '/services#web-mobile',
    businessContext: 'You have inventory or services and need a storefront that handles traffic, calculates shipping, and takes payments securely without constant manual oversight.',
    deliverables: [
      'Visual storefront optimized for desktop and mobile devices',
      'Integration with secure payment gateways like Stripe or local payment networks',
      'Automatic inventory checking, cart validation, and order management dashboard',
      'Transactional email & SMS notifications for client confirmation'
    ],
    technicalUnderpinnings: 'Built using Next.js for server-rendered page speeds, Postgres for transactional safety, and Stripe API for secure checkout compliance.'
  },
  {
    id: 'track-stock',
    clientQuote: 'I need to track my stock and inventory levels.',
    icon: BarChart3,
    capability: 'Databases & Custom APIs',
    capabilityLink: '/services#databases',
    businessContext: 'Your inventory resides across multiple rooms, warehouses, or lists. You are tired of discrepancies, late updates, and losing sales because of inaccurate records.',
    deliverables: [
      'Custom inventory database with atomic transactional operations (no double-allocations)',
      'Simplified web dashboard for warehouse managers to increment and decrement counts',
      'Low-stock threshold email alerts and automatic report compilers',
      'API endpoints for integration with external sales systems or retail POS'
    ],
    technicalUnderpinnings: 'Built using PostgreSQL relational integrity, Redis for real-time stock allocation queues, and cron scheduler tasks.'
  },
  {
    id: 'business-app',
    clientQuote: 'I need a custom application for my business.',
    icon: AppWindow,
    capability: 'Web & Mobile Applications',
    capabilityLink: '/services#web-mobile',
    businessContext: 'Your staff operates on the move, or you need a distinct application that can be run on desktop and mobile without requiring separate codebases for every platform.',
    deliverables: [
      'Single-codebase Flutter app running natively on Android, iOS, and Web',
      'Offline-first capabilities enabling workers to capture data without cellular service',
      'Encrypted client-server state synchronization via REST/Websocket protocols',
      'Push notification channel to alert workers of assigned jobs'
    ],
    technicalUnderpinnings: 'Built using Flutter with Riverpod state architecture, Node.js API server, and automated APK/iOS builds.'
  },
  {
    id: 'automate-process',
    clientQuote: 'I want to automate a manual process.',
    icon: GitBranch,
    capability: 'Databases & Custom APIs',
    capabilityLink: '/services#databases',
    businessContext: 'Your staff spends hours copy-pasting numbers between spreadsheets, manually compiling reports, or matching invoices. This process is slow and prone to errors.',
    deliverables: [
      'Custom data extraction scripts that parse inputs (CSVs, APIs, emails)',
      'Automated background jobs that run reconciliation logic without human input',
      'Audit log generation showing precisely what data was transferred and when',
      'Dashboard showing status of background tasks and any error alerts'
    ],
    technicalUnderpinnings: 'Built using Python scripts, Node.js worker queues, Docker Compose for isolated execution, and Sentry for error alerts.'
  },
  {
    id: 'secure-it',
    clientQuote: 'I need my IT infrastructure secured.',
    icon: ShieldAlert,
    capability: 'IT Infrastructure & VPN',
    capabilityLink: '/services#infrastructure',
    businessContext: 'Your office files, internal applications, or customer data is exposed. You need secure remote access for employees without leaving open ports for attackers.',
    deliverables: [
      'Encrypted VPN gateway (WireGuard or Shadowsocks) for secure employee entry',
      'Network perimeter setup with firewalls, intrusion blocking, and port audits',
      'Access control structure separating user privileges (Principle of Least Privilege)',
      'Encrypted automated offsite backups with scheduled recovery tests'
    ],
    technicalUnderpinnings: 'Built using Linux system configuration, WireGuard VPN tunnels, custom shell backup scripts, and automated validation logs.'
  }
];

export default function SolutionsPage() {
  const [activeSolution, setActiveSolution] = useState(solutionsList[0]);

  return (
    <div className="w-full flex flex-col">
      {/* Page Header */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-hairline">
        <div className="max-w-3xl space-y-4">
          <span className="font-mono text-sm tracking-widest text-accent uppercase font-bold">Solutions</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-ink">
            Problems We Solve
          </h1>
          <p className="text-lg sm:text-xl text-slate leading-snug">
            We map common operational problems to technical answers. Select a problem statement to inspect how we solve it.
          </p>
        </div>
      </section>

      {/* Solutions Interactive Grid */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Problem Selector (Left Panel) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-slate/70 font-semibold block px-1">
              Select your business challenge:
            </span>
            <div className="flex flex-col gap-2">
              {solutionsList.map((sol) => {
                const Icon = sol.icon;
                const isSelected = activeSolution.id === sol.id;
                return (
                  <button
                    key={sol.id}
                    onClick={() => setActiveSolution(sol)}
                    className={`w-full p-4 text-left border transition-all flex items-center justify-between gap-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                      isSelected
                        ? 'border-accent bg-[#FAFAF7] font-semibold text-ink shadow-sm'
                        : 'border-hairline hover:border-slate/40 hover:bg-slate/5 text-slate'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 shrink-0 ${isSelected ? 'text-accent' : 'text-slate/60'}`} />
                      <span className="text-sm sm:text-base font-display tracking-tight">&ldquo;{sol.clientQuote}&rdquo;</span>
                    </div>
                    <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'translate-x-1 text-accent' : 'text-slate/30'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Details Panel (Right Panel) */}
          <div className="lg:col-span-7 border border-hairline bg-[#FAFAF7] p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-hairline/60 pb-6">
              <div className="space-y-1">
                <span className="font-mono text-[11px] uppercase tracking-wider bg-accent/15 text-accent border border-accent/20 px-2 py-0.5 rounded-sm">
                  Active Solution Map
                </span>
                <h3 className="font-display text-xl font-bold text-ink pt-1.5">
                  &ldquo;{activeSolution.clientQuote}&rdquo;
                </h3>
              </div>
            </div>

            {/* Business Need */}
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-slate/70 font-semibold block">Business Context & Impact</span>
              <p className="text-base text-slate leading-snug">
                {activeSolution.businessContext}
              </p>
            </div>

            {/* Deliverables */}
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-slate/70 font-semibold block">Concrete Deliverables</span>
              <ul className="space-y-2.5 text-sm text-slate">
                {activeSolution.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Capability Link */}
            <div className="p-4 bg-ink/5 border border-hairline space-y-2">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-accent" />
                <span className="font-mono text-xs uppercase tracking-wider text-ink font-semibold">Mapped Capability:</span>
                <Link 
                  href={activeSolution.capabilityLink}
                  className="font-mono text-xs uppercase tracking-wider text-accent font-bold hover:underline"
                >
                  {activeSolution.capability}
                </Link>
              </div>
              <p className="text-sm text-slate/90 leading-snug pl-6">
                <strong className="text-ink">Technical blueprint:</strong> {activeSolution.technicalUnderpinnings}
              </p>
            </div>

            {/* Contact Bridge */}
            <div className="pt-2 flex justify-end">
              <Link 
                href={`/contact?reason=${activeSolution.id}`}
                className="inline-flex items-center gap-2 text-sm font-mono tracking-wider uppercase text-ink hover:text-accent font-semibold transition-colors"
              >
                Start a project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ConversionCTA />
    </div>
  );
}
