import Link from 'next/link';
import { ArrowRight, Server, Shield, Laptop, CheckCircle, Database, Calendar, Clock, DollarSign, MessageSquare, FileText, Hammer, Rocket } from 'lucide-react';
import ConversionCTA from '@/components/ConversionCTA';

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* AVAILABILITY STRIP */}
      <div className="w-full bg-ink text-[#FAFAF7] px-4 sm:px-6 lg:px-8 py-2.5 text-center">
        <p className="text-sm font-mono font-medium tracking-wide">
          <span className="text-accent font-bold">Currently taking on new projects</span>
          <span className="mx-2 text-[#FAFAF7]/30">|</span>
          <span className="text-[#FAFAF7]/80">We reply within 24 hours</span>
        </p>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-b border-hairline">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Content (Left) */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-[1.05]">
              From Lilongwe to Auckland, we build and ship.
            </h1>

            <p className="text-lg sm:text-xl text-slate max-w-xl leading-snug">
              OctoTech is a two-country technology company. We take on client work —
              web, mobile, infrastructure, automation — and we build our own products end to end.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-ink bg-accent hover:bg-accent/90 border border-ink/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Start a project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold uppercase tracking-wider text-slate hover:text-ink hover:bg-hairline/20 border border-hairline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                View Solutions
              </Link>
            </div>
          </div>

          {/* Hero Visual Mock Terminal (Right) */}
          <div className="lg:col-span-5 bg-ink text-[#FAFAF7] p-6 rounded-sm shadow-xl border border-[#FAFAF7]/10 font-mono text-sm space-y-4">
            <div className="flex items-center justify-between border-b border-[#FAFAF7]/10 pb-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-slate uppercase tracking-wider">octotech-core-sys</span>
            </div>

            <div className="space-y-2">
              <p className="text-slate">$ ssh telly@auckland-node.octotech</p>
              <p className="text-green-400">✓ Establish secure tunnel [Auckland ⇆ Lilongwe]</p>
              <p className="text-slate">$ status --all-nodes</p>

              <div className="bg-[#1e2e4f] p-3 rounded-sm space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate">Node A (Auckland):</span>
                  <span className="text-accent">ONLINE (NZST/NZDT UTC+12)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate">Node B (Lilongwe):</span>
                  <span className="text-accent">ONLINE (CAT UTC+2)</span>
                </div>
                <div className="flex justify-between border-t border-[#FAFAF7]/10 mt-1.5 pt-1.5">
                  <span className="text-slate">Tunnels Active:</span>
                  <span className="text-[#FAFAF7]">OctoVVPN (live), OctoPay (dev)</span>
                </div>
              </div>

              <p className="text-slate">$ npm run build --workspace=client-projects</p>
              <p className="text-green-400 animate-pulse">● Compiling production assets... Success</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 border-b border-hairline">
        <div className="space-y-4 mb-12">
          <span className="font-mono text-sm tracking-widest text-accent uppercase font-bold">How It Works</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
            From first message to live system.
          </h2>
          <p className="text-slate max-w-xl text-base leading-snug">
            Every engagement follows the same transparent framework. No surprises on price, scope, or timeline.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="relative p-6 border border-hairline bg-[#FAFAF7] space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 border border-accent/20">
                <MessageSquare className="w-5 h-5 text-accent" />
              </div>
              <span className="font-mono text-xs text-slate/60 font-bold">STEP 1</span>
            </div>
            <h3 className="font-display text-base font-bold text-ink">Tell us what you need</h3>
            <p className="text-sm text-slate leading-snug">
              Describe the problem in plain language. No technical spec required. We ask the right questions.
            </p>
          </div>

          <div className="relative p-6 border border-hairline bg-[#FAFAF7] space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 border border-accent/20">
                <FileText className="w-5 h-5 text-accent" />
              </div>
              <span className="font-mono text-xs text-slate/60 font-bold">STEP 2</span>
            </div>
            <h3 className="font-display text-base font-bold text-ink">We scope and quote</h3>
            <p className="text-sm text-slate leading-snug">
              You receive a fixed-price scope document with deliverables, timeline, and payment schedule. No work starts until you approve.
            </p>
          </div>

          <div className="relative p-6 border border-hairline bg-[#FAFAF7] space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 border border-accent/20">
                <Hammer className="w-5 h-5 text-accent" />
              </div>
              <span className="font-mono text-xs text-slate/60 font-bold">STEP 3</span>
            </div>
            <h3 className="font-display text-base font-bold text-ink">We build and iterate</h3>
            <p className="text-sm text-slate leading-snug">
              Weekly progress updates, direct access to the code, and milestone reviews so nothing drifts from what you asked for.
            </p>
          </div>

          <div className="relative p-6 border border-hairline bg-[#FAFAF7] space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 border border-accent/20">
                <Rocket className="w-5 h-5 text-accent" />
              </div>
              <span className="font-mono text-xs text-slate/60 font-bold">STEP 4</span>
            </div>
            <h3 className="font-display text-base font-bold text-ink">You review and launch</h3>
            <p className="text-sm text-slate leading-snug">
              Final review, production deployment, documentation handover, and post-launch support window.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-ink bg-accent hover:bg-accent/90 border border-ink/10 transition-colors"
          >
            Start a project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 3. WHAT WE DO (CAPABILITIES) */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 border-b border-hairline">
        <div className="space-y-4 mb-12">
          <span className="font-mono text-sm tracking-widest text-accent uppercase font-bold">Capabilities</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
            What We Do
          </h2>
          <p className="text-slate max-w-xl text-base leading-snug">
            Software execution and infrastructure reliability. No buzzwords, just engineered solutions you can put in front of customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 border border-hairline bg-[#FAFAF7] hover:border-accent/40 transition-colors flex flex-col justify-between h-56">
            <div className="space-y-3">
              <Laptop className="w-6 h-6 text-accent" />
              <h3 className="font-display text-lg font-bold text-ink">Web & Mobile Apps</h3>
              <p className="text-sm text-slate">React, Next.js, Flutter, and native mobile. Optimized for speed and scaling.</p>
            </div>
            <span className="font-mono text-[11px] text-slate/50">#development</span>
          </div>

          <div className="p-6 border border-hairline bg-[#FAFAF7] hover:border-accent/40 transition-colors flex flex-col justify-between h-56">
            <div className="space-y-3">
              <Server className="w-6 h-6 text-accent" />
              <h3 className="font-display text-lg font-bold text-ink">IT Infrastructure & VPN</h3>
              <p className="text-sm text-slate">Secure tunnel routing, custom networks, firewalls, and tailored virtual private systems.</p>
            </div>
            <span className="font-mono text-[11px] text-slate/50">#networks</span>
          </div>

          <div className="p-6 border border-hairline bg-[#FAFAF7] hover:border-accent/40 transition-colors flex flex-col justify-between h-56">
            <div className="space-y-3">
              <Database className="w-6 h-6 text-accent" />
              <h3 className="font-display text-lg font-bold text-ink">Databases & Automation</h3>
              <p className="text-sm text-slate">Efficient database architecture, custom APIs, script automation, and integrations.</p>
            </div>
            <span className="font-mono text-[11px] text-slate/50">#data-systems</span>
          </div>

          <div className="p-6 border border-hairline bg-[#FAFAF7] hover:border-accent/40 transition-colors flex flex-col justify-between h-56">
            <div className="space-y-3">
              <Shield className="w-6 h-6 text-accent" />
              <h3 className="font-display text-lg font-bold text-ink">System Maintenance</h3>
              <p className="text-sm text-slate">SLA-backed systems management, security reviews, error diagnostics, and upgrades.</p>
            </div>
            <span className="font-mono text-[11px] text-slate/50">#ops</span>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-mono tracking-wider uppercase text-ink hover:text-accent font-semibold transition-colors">
            Full services breakdown <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. PROBLEMS WE SOLVE */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 border-b border-hairline bg-slate/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-4">
            <span className="font-mono text-sm tracking-widest text-accent uppercase font-bold">Solutions</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
              Problems We Solve
            </h2>
            <p className="text-slate text-base leading-snug">
              You don&apos;t need to know the database model or network protocol. Tell us the outcome you need.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-ink bg-accent hover:bg-accent/90 border border-ink/10 transition-colors">
                Start a project <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <div className="border border-hairline bg-[#FAFAF7] divide-y divide-hairline">
              {[
                { label: 'E-COMMERCE', quote: 'I need an online store to sell my products.', desc: 'Secure payments, catalogs, and inventory synced to checkout dashboards.', cap: 'Web & Mobile Apps' },
                { label: 'LOGISTICS & DATA', quote: 'I need to track my stock and inventory levels.', desc: 'Custom database with real-time stock registers and reporting.', cap: 'Databases & Automation' },
                { label: 'CUSTOM APP', quote: 'I need an app for my business.', desc: 'Cross-platform mobile or desktop application built to your workflow.', cap: 'Web & Mobile Apps' },
                { label: 'OPERATIONS', quote: 'I want to automate a manual process.', desc: 'Scripts and data pipelines to replace repetitive tasks and entry errors.', cap: 'Automation & AI' },
                { label: 'SECURITY', quote: 'I need my IT infrastructure secured.', desc: 'Firewalls, secure VPN gateways, user privileges, and offsite backups.', cap: 'IT Infrastructure' },
              ].map((item, idx) => (
                <div key={idx} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-slate/50">{item.label}</span>
                    <h4 className="font-display font-bold text-base text-ink">&ldquo;{item.quote}&rdquo;</h4>
                    <p className="text-sm text-slate">{item.desc}</p>
                  </div>
                  <div className="flex sm:justify-end">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-ink/5 border border-hairline text-slate font-mono text-xs">
                      <CheckCircle className="w-3.5 h-3.5 text-accent" />
                      {item.cap}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY WORK WITH US / PRODUCTS */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 border-b border-hairline">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-sm tracking-widest text-accent uppercase font-bold">Why Us</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
                We ship our own products, too.
              </h2>
              <p className="text-slate text-base leading-snug">
                We don&apos;t just build for clients. We design, ship, and maintain our own software — which means we understand what it takes to keep a product running after launch day.
              </p>
            </div>

            <div className="flex gap-4">
              <Link href="/products" className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAFAF7] bg-ink hover:bg-ink/90 transition-colors">
                Our Products
              </Link>
              <Link href="/about" className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate hover:text-ink hover:bg-hairline/25 border border-hairline transition-colors">
                Our Story
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {/* OctoVVPN */}
            <div className="p-6 border border-hairline bg-[#FAFAF7] hover:border-accent/40 transition-colors space-y-4">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="font-mono text-xs text-accent tracking-widest uppercase font-bold">ACTIVE & SHIPPED</span>
                  <h3 className="font-display text-xl font-bold text-ink">OctoVVPN</h3>
                </div>
                <a
                  href="https://octovvpn.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-ink hover:text-accent font-semibold underline underline-offset-4"
                >
                  octovvpn.net
                </a>
              </div>
              <p className="text-sm text-slate leading-snug">
                A VPN built for places where the open internet isn&apos;t guaranteed. OctoVVPN gives you a fast, private connection with no compromise on reliability.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-slate/70">
                <span className="bg-ink/5 border border-hairline px-2 py-0.5 rounded-sm">Flutter / Desktop</span>
                <span className="bg-ink/5 border border-hairline px-2 py-0.5 rounded-sm">Riverpod State</span>
                <span className="bg-ink/5 border border-hairline px-2 py-0.5 rounded-sm">Stripe Payments</span>
                <span className="bg-ink/5 border border-hairline px-2 py-0.5 rounded-sm">Shadowsocks / Obfs4</span>
              </div>
            </div>

            {/* OctoPay */}
            <div className="p-6 border border-hairline bg-[#FAFAF7] hover:border-accent/40 transition-colors space-y-4">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="font-mono text-xs text-slate/50 tracking-widest uppercase font-bold">IN DEVELOPMENT</span>
                  <h3 className="font-display text-xl font-bold text-ink">OctoPay</h3>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 text-[11px] uppercase tracking-wider font-bold bg-accent/25 text-ink border border-accent/20">
                  Coming Soon
                </span>
              </div>
              <p className="text-sm text-slate leading-snug">
                Send money from any wallet. Received in any wallet. A cross-wallet transfer layer so two people never need the same app.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-slate/70">
                <span className="bg-ink/5 border border-hairline px-2 py-0.5 rounded-sm">Interoperability</span>
                <span className="bg-ink/5 border border-hairline px-2 py-0.5 rounded-sm">Wallet APIs</span>
                <span className="bg-ink/5 border border-hairline px-2 py-0.5 rounded-sm">Micro-transactions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONVERSION CTA */}
      <ConversionCTA />
    </div>
  );
}
