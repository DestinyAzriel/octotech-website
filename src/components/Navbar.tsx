'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAFAF7]/95 backdrop-blur-md border-b border-hairline transition-all">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-1.5 font-display text-lg font-bold tracking-tight text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm px-1 py-0.5"
        >
          <span>OctoTech</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[15px] font-medium tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm px-1 py-0.5 relative ${
                  isActive 
                    ? 'text-ink font-semibold after:absolute after:bottom-[-22px] after:left-0 after:w-full after:h-[2px] after:bg-accent' 
                    : 'text-slate hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-ink bg-accent hover:bg-accent/90 border border-ink/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Start a project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 md:hidden text-slate hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Links Panel */}
      {isOpen && (
        <div className="md:hidden border-b border-hairline bg-[#FAFAF7] px-4 py-4 space-y-3 flex flex-col">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                onClick={() => setIsOpen(false)}
                href={link.href}
                className={`text-base font-medium py-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm ${
                  isActive ? 'text-ink font-bold border-l-2 border-accent pl-2' : 'text-slate pl-2'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            onClick={() => setIsOpen(false)}
            href="/contact"
            className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-semibold uppercase tracking-wider text-ink bg-accent hover:bg-accent/90 border border-ink/10 transition-colors text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Start a project
          </Link>
        </div>
      )}
    </header>
  );
}
