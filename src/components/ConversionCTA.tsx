import Link from 'next/link';
import { ArrowRight, Calendar, Clock, DollarSign } from 'lucide-react';

export default function ConversionCTA() {
  return (
    <section className="w-full bg-ink text-[#FAFAF7] border-t border-[#FAFAF7]/10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <span className="font-mono text-sm text-accent uppercase tracking-widest font-bold">
            Work With Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Let&apos;s build your system.
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto leading-snug" style={{ color: '#A0AEC0' }}>
            Translate your operational bottlenecks into stable, custom software assets. Get a dedicated delivery team — led by Founder Telly Paul and Technical Lead Destiny Mwafulirwa — without agency overhead.
          </p>
        </div>

        {/* Value signals grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left border-t border-b border-[#FAFAF7]/10 py-8">
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <h4 className="text-sm font-mono font-bold tracking-tight uppercase">Availability</h4>
              <p className="text-sm" style={{ color: '#E2E8F0' }}>Taking on projects. 2 slots open this quarter.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <h4 className="text-sm font-mono font-bold tracking-tight uppercase">Response Time</h4>
              <p className="text-sm" style={{ color: '#E2E8F0' }}>We reply with a technical plan within 24 hours.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <DollarSign className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <h4 className="text-sm font-mono font-bold tracking-tight uppercase">Pricing Policy</h4>
              <p className="text-sm" style={{ color: '#E2E8F0' }}>Projects start at $5,000 NZD. Fixed-price quotes.</p>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-ink bg-accent hover:bg-accent/90 border border-ink/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span>Start a project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
