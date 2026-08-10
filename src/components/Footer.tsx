import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAFAF7] border-t border-hairline py-12 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-1.5 font-display text-base font-bold tracking-tight text-ink">
            <span>OctoTech</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          </div>
          <p className="text-sm font-mono text-slate max-w-sm leading-snug">
            Founded in Auckland, NZ & Lilongwe, MW by Founder Telly Paul and Technical Lead Destiny Mwafulirwa. Delivering software platforms, mobile applications, databases, and secure network infrastructure.
          </p>
          <div className="text-xs font-mono font-medium text-slate/85 space-y-1 pt-1.5">
            <p>● Projects typically start at $5,000 NZD</p>
            <p>● Fixed-price scope before development</p>
            <p>● We review and reply within 24 hours</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          <Link href="/services" className="text-sm font-mono tracking-wider text-slate hover:text-ink transition-colors">
            SERVICES
          </Link>
          <Link href="/solutions" className="text-sm font-mono tracking-wider text-slate hover:text-ink transition-colors">
            SOLUTIONS
          </Link>
          <Link href="/products" className="text-sm font-mono tracking-wider text-slate hover:text-ink transition-colors">
            PRODUCTS
          </Link>
          <Link href="/about" className="text-sm font-mono tracking-wider text-slate hover:text-ink transition-colors">
            ABOUT
          </Link>
          <Link href="/contact" className="text-sm font-mono tracking-wider text-slate hover:text-ink transition-colors">
            CONTACT
          </Link>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm font-mono tracking-wider text-slate hover:text-ink transition-colors">
            GITHUB
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-hairline mt-8 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-slate/80">
        <span>© {new Date().getFullYear()} OctoTech Ltd. All rights reserved.</span>
        <span>Auckland, NZ & Lilongwe, MW</span>
      </div>
    </footer>
  );
}
