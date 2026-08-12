import Link from 'next/link';
import { Laptop, Server, Database, Shield, ArrowRight, Settings, CheckCircle2 } from 'lucide-react';
import ConversionCTA from '@/components/ConversionCTA';

const serviceCategories = [
  {
    id: 'web-mobile',
    title: 'Web & Mobile Applications',
    icon: Laptop,
    description: 'We develop high-performance interfaces and client applications. We focus on fast loads, cross-platform stability, and robust state management.',
    outcomes: [
      'Customer-facing dashboards and e-commerce checkouts',
      'Flutter-based mobile applications running on iOS and Android',
      'API-driven content architectures and server-rendered portals',
      'Fully responsive UI with accessible keyboard focus states'
    ],
    techStack: ['React', 'Next.js', 'Flutter', 'TypeScript', 'Tailwind CSS', 'Redux / Riverpod']
  },
  {
    id: 'infrastructure',
    title: 'IT Infrastructure & VPN',
    icon: Server,
    description: 'We design and configure private network layers, custom gateways, and secure routing pipelines to keep your communications protected.',
    outcomes: [
      'Custom censorship-evasion routing and port-hopping configurations',
      'Office VPN gateways and secure remote working networks',
      'Nginx reverse proxy setups and SSL/TLS certificate automation',
      'Server security auditing, firewall rules, and port tightening'
    ],
    techStack: ['WireGuard', 'Obfs4 / Shadowsocks', 'Nginx', 'Docker', 'Linux Core', 'SSL/TLS']
  },
  {
    id: 'databases',
    title: 'Databases & Custom APIs',
    icon: Database,
    description: 'We build backend foundations that stand up under load. We organize data cleanly and automate the manual steps in between.',
    outcomes: [
      'Relational database design and multi-tenant schema structures',
      'REST and GraphQL custom APIs with validation middleware',
      'Automated background jobs, stock triggers, and report compilers',
      'Third-party payment gateways (Stripe) and wallet API connections'
    ],
    techStack: ['PostgreSQL', 'Node.js', 'Express', 'Redis', 'Python / Bash', 'SQL Optimization']
  },
  {
    id: 'maintenance',
    title: 'System Maintenance & Diagnostics',
    icon: Shield,
    description: 'Software degrades if ignored. We provide active monitoring, bug diagnostics, and software updates to ensure continuous operation.',
    outcomes: [
      'Active application error tracking and Sentry setups',
      'System dependency audits and version migration support',
      'Automated database backups and disaster recovery verification',
      'SLA-backed systems management and diagnostic investigations'
    ],
    techStack: ['Sentry', 'Prometheus', 'Docker Compose', 'Cron jobs', 'Git Version Control', 'Uptime Kuma']
  }
];

export default function ServicesPage() {
  return (
    <div className="w-full flex flex-col">
      {/* Page Header */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-hairline">
        <div className="max-w-4xl space-y-4">
          <span className="font-mono text-sm tracking-widest text-accent uppercase font-bold">Capabilities</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-ink">
            What We Do
          </h1>
          <p className="text-lg sm:text-xl text-slate leading-snug">
            A clear, engineering-led breakdown of what we build, deploy, and maintain. No industry jargon — just reliable technical execution.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {serviceCategories.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className="p-8 border border-hairline bg-[#FAFAF7] flex flex-col justify-between space-y-8 hover:border-accent/40 transition-colors"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-ink/5 border border-hairline">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h2 className="font-display text-xl font-bold text-ink">{service.title}</h2>
                  </div>
                  
                  <p className="text-base text-slate leading-snug">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-slate/70 font-semibold block">Deliverable Outcomes:</span>
                    <ul className="space-y-2.5 text-sm text-slate">
                      {service.outcomes.map((outcome, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-hairline/60">
                  <span className="font-mono text-xs uppercase tracking-wider text-slate/70 font-semibold block">Tooling & Environment:</span>
                  <div className="flex flex-wrap gap-2">
                    {service.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-ink/5 border border-hairline text-slate px-2 py-0.5 rounded-sm font-mono text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="border border-hairline bg-slate/5 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-display font-bold text-lg text-ink">Have a specific project in mind?</h3>
            <p className="text-sm text-slate">Tell us what you need — we reply within 24 hours with a scope and fixed-price quote.</p>
          </div>
          <div className="flex gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold uppercase tracking-wider text-ink bg-accent hover:bg-accent/90 border border-ink/10 transition-colors"
            >
              Start a project <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link 
              href="/solutions" 
              className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold uppercase tracking-wider text-slate hover:text-ink hover:bg-hairline/25 border border-hairline transition-colors"
            >
              See Solutions
            </Link>
          </div>
        </div>
      </section>

      <ConversionCTA />
    </div>
  );
}
