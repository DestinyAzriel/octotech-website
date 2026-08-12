'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const [times, setTimes] = useState({ lilongwe: '', auckland: '' });

  useEffect(() => {
    setMounted(true);
    const updateTimes = () => {
      try {
        const timeFormatter = (timeZone: string) => {
          return new Intl.DateTimeFormat('en-GB', {
            timeZone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
          }).format(new Date());
        };

        setTimes({
          lilongwe: timeFormatter('Africa/Blantyre'),
          auckland: timeFormatter('Pacific/Auckland'),
        });
      } catch {
        // Silently fallback if DateTimeFormat fails
      }
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-[#FAFAF7] border-t border-hairline py-12 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-1.5 font-display text-base font-bold tracking-tight text-ink">
            <span>OctoTech</span>
          </div>
          <p className="text-sm font-mono text-slate max-w-sm leading-snug">
            Founded in Auckland, NZ & Lilongwe, MW by Founder Telly Paul and Co-Founder & Technical Lead Destiny Mwafulirwa. Delivering software platforms, mobile applications, databases, and secure network infrastructure.
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
          <a href="https://github.com/DestinyAzriel" target="_blank" rel="noopener noreferrer" className="text-sm font-mono tracking-wider text-slate hover:text-ink transition-colors">
            GITHUB
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-hairline mt-8 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] font-mono text-slate/70">
        <span>© {new Date().getFullYear()} OctoTech Ltd. All rights reserved.</span>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-slate/70">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
            </span>
            <span>Auckland, NZ</span>
            <span className="text-slate/90 font-medium">{mounted ? `${times.auckland} NZST/NZDT` : '--:--:--'}</span>
          </div>

          <span className="text-hairline">|</span>

          <div className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
            </span>
            <span>Lilongwe, MW</span>
            <span className="text-slate/90 font-medium">{mounted ? `${times.lilongwe} CAT` : '--:--:--'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
