import Link from 'next/link';
import { MapPin, Briefcase, FileCode2, ArrowRight, Zap, DollarSign, Globe2 } from 'lucide-react';
import ConversionCTA from '@/components/ConversionCTA';

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col">
      {/* Page Header */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-hairline">
        <div className="max-w-3xl space-y-4">
          <span className="font-mono text-sm tracking-widest text-accent uppercase font-bold">About Us</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-ink">
            Your IT Solution Starts Here
          </h1>
          <p className="text-lg sm:text-xl text-slate leading-snug">
            We build to your exact specifications, with global reach and the reliability of a team that ships. Whether you need a new system, a custom build, or strategic IT leadership, you&apos;re in safe hands with Founder Telly Paul (Auckland, New Zealand) and Co-Founder & Technical Lead Destiny Mwafulirwa (Lilongwe, Malawi).
          </p>
        </div>
      </section>

      {/* Why Choose OctoTech Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-hairline bg-[#FAFAF7]">
        <div className="space-y-4 mb-12">
          <span className="font-mono text-sm tracking-widest text-accent uppercase font-bold">Value Proposition</span>
          <h2 className="font-display text-3xl font-bold text-ink">Why Choose OctoTech</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-hairline bg-white space-y-3">
            <div className="p-2.5 bg-ink/5 border border-hairline w-fit">
              <Zap className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-display font-bold text-lg text-ink">Speed & Agility</h3>
            <p className="text-sm text-slate leading-snug">
              We deliver fast results without bureaucratic delay or agency overhead.
            </p>
          </div>

          <div className="p-6 border border-hairline bg-white space-y-3">
            <div className="p-2.5 bg-ink/5 border border-hairline w-fit">
              <DollarSign className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-display font-bold text-lg text-ink">Cost-Effectiveness</h3>
            <p className="text-sm text-slate leading-snug">
              Premium quality engineering without the premium price tag.
            </p>
          </div>

          <div className="p-6 border border-hairline bg-white space-y-3">
            <div className="p-2.5 bg-ink/5 border border-hairline w-fit">
              <Globe2 className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-display font-bold text-lg text-ink">Bi-Continental Expertise</h3>
            <p className="text-sm text-slate leading-snug">
              A skilled team spanning New Zealand and Malawi, ready to tackle your toughest IT requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story Section (Placed after Why Choose OctoTech) */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-hairline">
        <div className="max-w-3xl space-y-4">
          <span className="font-mono text-sm tracking-widest text-accent uppercase font-bold">Our Foundation</span>
          <h2 className="font-display text-3xl font-bold text-ink">Profit with Purpose</h2>
          <p className="text-base sm:text-lg text-slate leading-relaxed">
            OctoTech began in 2018 as a New Zealand export business, built on a simple idea: profit with purpose. That early success funded a bigger ambition — a world-class technology practice. Today that vision spans two continents, building software, systems, and infrastructure for clients everywhere.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-hairline">
        <div className="space-y-4 mb-12">
          <span className="font-mono text-sm tracking-widest text-accent uppercase font-bold">Leadership</span>
          <h2 className="font-display text-3xl font-bold text-ink">Who We Are</h2>
          <p className="text-slate max-w-xl text-base leading-snug">
            We are hands-on builders, not remote executives. Your project is shaped, scoped, and coded directly by us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Telly Paul - FIRST */}
          <div className="p-8 border border-hairline bg-[#FAFAF7] space-y-6">
            <div className="flex items-start justify-between">
              <div className="space-y-1.5">
                <span className="font-mono text-xs tracking-wider text-accent uppercase font-bold">FOUNDER & FRONTEND</span>
                <h3 className="font-display text-2xl font-bold text-ink">Telly Paul</h3>
                <span className="font-mono text-sm text-slate font-semibold block">Founder</span>
              </div>
              <div className="p-2.5 bg-ink/5 border border-hairline text-slate">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate bg-ink/5 px-3 py-1.5 rounded-sm w-fit">
              <MapPin className="w-4 h-4 text-accent" />
              <span>Auckland, New Zealand</span>
            </div>

            <div className="text-base text-slate space-y-4 leading-snug">
              <p>
                Telly leads business development, client engagement, product scoping, and frontend engineering across web and mobile platforms.
              </p>
              <p>
                Telly bridges commercial requirements and technical execution, translating complex client workflows into clean user-experience layouts. Telly specializes in Flutter application structure and Next.js reactive portals, ensuring code is visually refined and keyboard-accessible.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-[11px] font-mono text-slate/70 border-t border-hairline/60 pt-4">
              <span>#nextjs-react</span>
              <span>#flutter-ui</span>
              <span>#product-scoping</span>
              <span>#accessibility</span>
            </div>
          </div>

          {/* Destiny Mwafulirwa - SECOND */}
          <div className="p-8 border border-hairline bg-[#FAFAF7] space-y-6">
            <div className="flex items-start justify-between">
              <div className="space-y-1.5">
                <span className="font-mono text-xs tracking-wider text-accent uppercase font-bold">TECHNICAL LEADERSHIP</span>
                <h3 className="font-display text-2xl font-bold text-ink">Destiny Mwafulirwa</h3>
                <span className="font-mono text-sm text-slate font-semibold block">Co-Founder & Technical Lead</span>
              </div>
              <div className="p-2.5 bg-ink/5 border border-hairline text-slate">
                <FileCode2 className="w-6 h-6 text-accent" />
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate bg-ink/5 px-3 py-1.5 rounded-sm w-fit">
              <MapPin className="w-4 h-4 text-accent" />
              <span>Lilongwe, Malawi</span>
            </div>

            <div className="text-base text-slate space-y-4 leading-snug">
              <p>
                Destiny serves as Co-Founder & Technical Lead, directing system operations, networking architectures, database engines, and secure tunnels behind our products.
              </p>
              <p>
                With a track record of developing large-scale systems, Destiny previously designed and deployed a municipal traffic management platform. This real-world experience in high-concurrency traffic routing informs how OctoTech architectures handle data integrity, queuing, and server failovers today.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-[11px] font-mono text-slate/70 border-t border-hairline/60 pt-4">
              <span>#linux-sysops</span>
              <span>#networking</span>
              <span>#postgresql</span>
              <span>#vpn-transports</span>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-slate/5">
        <div className="space-y-4 mb-12">
          <span className="font-mono text-sm tracking-widest text-accent uppercase font-bold">Roadmap</span>
          <h2 className="font-display text-3xl font-bold text-ink">Our Growth Path</h2>
          <p className="text-slate max-w-xl text-base leading-snug">
            We believe in honest capacity reporting. Here is how we plan to grow our operational scale as client commitments increase.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Phase 1 */}
          <div className="p-6 border border-accent bg-[#FAFAF7] relative space-y-4">
            <div className="absolute top-4 right-4 px-2 py-0.5 text-[11px] uppercase tracking-wider font-bold bg-accent/20 text-ink border border-accent/30 font-mono">
              Current State
            </div>
            <div className="space-y-1">
              <span className="font-mono text-xs text-slate/60">PHASE 01</span>
              <h3 className="font-display font-bold text-lg text-ink">Leadership Core</h3>
            </div>
            <p className="text-sm text-slate leading-snug">
              Telly Paul and Destiny Mwafulirwa personally direct all client deliverables and manage the core codebase of OctoVVPN and OctoPay, maintaining zero-overhead execution.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="p-6 border border-hairline bg-[#FAFAF7] space-y-4">
            <div className="space-y-1">
              <span className="font-mono text-xs text-slate/60">PHASE 02</span>
              <h3 className="font-display font-bold text-lg text-ink">Sub-contractor Network</h3>
            </div>
            <p className="text-sm text-slate leading-snug">
              Bringing in vetted contract developers in both Auckland and Lilongwe to support frontend builds (React/Flutter) and secondary scripting, under core leadership supervision.
            </p>
          </div>

          {/* Phase 3 */}
          <div className="p-6 border border-hairline bg-[#FAFAF7] space-y-4">
            <div className="space-y-1">
              <span className="font-mono text-xs text-slate/60">PHASE 03</span>
              <h3 className="font-display font-bold text-lg text-ink">Physical Studios</h3>
            </div>
            <p className="text-sm text-slate leading-snug">
              Establishing physical co-working spaces in Lilongwe and Auckland, enabling 24-hour maintenance coverage and a team of full-time engineering specialists.
            </p>
          </div>
        </div>

        {/* Bottom Closing Line & Contact Bridge */}
        <div className="mt-16 p-8 border border-hairline bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-display font-bold text-xl text-ink">
              Reach out today. Let&apos;s build something extraordinary.
            </h3>
            <p className="text-sm text-slate">
              Get in touch directly with our leadership team for fixed-price project scoping.
            </p>
          </div>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-ink bg-accent hover:bg-accent/90 border border-ink/10 transition-colors shrink-0"
          >
            <span>Start a project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <ConversionCTA />
    </div>
  );
}
