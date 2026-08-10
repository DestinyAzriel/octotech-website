'use client';

import { useState } from 'react';
import { Shield, CreditCard, Send, Lock, Server, Terminal, Smartphone, Sparkles, CheckCircle } from 'lucide-react';
import ConversionCTA from '@/components/ConversionCTA';

export default function ProductsPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full flex flex-col">
      {/* Page Header */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-hairline">
        <div className="max-w-3xl space-y-4">
          <span className="font-mono text-sm tracking-widest text-accent uppercase font-bold">Our Products</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-ink">
            What We Build
          </h1>
          <p className="text-lg sm:text-xl text-slate leading-snug">
            We don&apos;t just consult for clients — we engineer and run our own standalone software services. These products prove we can design, secure, scale, and support systems end to end.
          </p>
        </div>
      </section>

      {/* Product 1: OctoVVPN (LIVE) */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-hairline">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Details (Left) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-green-500/10 border border-green-500/20 rounded-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="font-mono text-[11px] tracking-wider text-green-700 uppercase font-bold">
                  Live & Operational
                </span>
              </div>
              
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
                OctoVVPN
              </h2>
            </div>
            
            <p className="text-lg text-slate leading-snug">
              A VPN built for places where the open internet isn&apos;t guaranteed. OctoVVPN gives you a fast, private connection with no compromise on reliability — available now at{' '}
              <a 
                href="https://octovvpn.net" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-ink font-semibold underline decoration-accent hover:text-accent transition-colors"
              >
                octovvpn.net
              </a>.
            </p>
            
            <div className="space-y-4">
              <h3 className="font-display font-bold text-base text-ink uppercase tracking-wider">Engineering Specs</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 border border-hairline bg-[#FAFAF7] space-y-2">
                  <div className="flex items-center gap-2 text-ink">
                    <Smartphone className="w-4 h-4 text-accent" />
                    <span className="text-sm font-bold font-mono">Cross-Platform UI</span>
                  </div>
                  <p className="text-sm text-slate">
                    Flutter-based client interface with desktop dark cyberpunk aesthetics, using Riverpod for clean reactive state management.
                  </p>
                </div>
                <div className="p-4 border border-hairline bg-[#FAFAF7] space-y-2">
                  <div className="flex items-center gap-2 text-ink">
                    <Server className="w-4 h-4 text-accent" />
                    <span className="text-sm font-bold font-mono">Resilient Protocol Tunnels</span>
                  </div>
                  <p className="text-sm text-slate">
                    Utilizes custom Shadowsocks and Obfs4 transports, running port-hopping strategies to evade network blocking.
                  </p>
                </div>
                <div className="p-4 border border-hairline bg-[#FAFAF7] space-y-2">
                  <div className="flex items-center gap-2 text-ink">
                    <Lock className="w-4 h-4 text-accent" />
                    <span className="text-sm font-bold font-mono">Network Core</span>
                  </div>
                  <p className="text-sm text-slate">
                    Full server migrations to HTTPS/TLS certificate chains, combined with automated MTU optimization for packet stability.
                  </p>
                </div>
                <div className="p-4 border border-hairline bg-[#FAFAF7] space-y-2">
                  <div className="flex items-center gap-2 text-ink">
                    <CreditCard className="w-4 h-4 text-accent" />
                    <span className="text-sm font-bold font-mono">Stripe Subscriptions</span>
                  </div>
                  <p className="text-sm text-slate">
                    Integration of billing portals, plan webhooks, secure credit-card processing, and dynamic activation keys.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href="https://octovvpn.net" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold uppercase tracking-wider text-[#FAFAF7] bg-ink hover:bg-ink/90 border border-ink/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Visit octovvpn.net
              </a>
            </div>
          </div>

          {/* Visual Shell mockup (Right) */}
          <div className="lg:col-span-5 border border-hairline bg-ink text-[#FAFAF7] p-6 font-mono text-xs rounded-sm space-y-4 shadow-md">
            <div className="flex items-center justify-between border-b border-[#FAFAF7]/10 pb-3">
              <span className="text-xs text-slate font-bold">OCTOVVPN CLIENT V1.2.0</span>
              <span className="text-green-400">● LIVE</span>
            </div>
            
            <div className="space-y-2 text-xs">
              <p className="text-slate"># Fetching connection metrics...</p>
              <div className="grid grid-cols-2 gap-2 text-slate/90">
                <div>Client IP: <span className="text-[#FAFAF7]">102.164.21.3</span></div>
                <div>Server Node: <span className="text-[#FAFAF7]">de-frankfurt-04</span></div>
                <div>Protocol: <span className="text-accent">Shadowsocks+Obfs4</span></div>
                <div>MTU size: <span className="text-[#FAFAF7]">1280 (optimised)</span></div>
              </div>
              
              <div className="border-t border-b border-[#FAFAF7]/10 py-2.5 my-3 space-y-1">
                <div className="flex justify-between">
                  <span>Downlink Speed:</span>
                  <span className="text-green-400">48.2 Mbps</span>
                </div>
                <div className="flex justify-between">
                  <span>Uplink Speed:</span>
                  <span className="text-green-400">12.5 Mbps</span>
                </div>
                <div className="flex justify-between">
                  <span>Active Session:</span>
                  <span className="text-[#FAFAF7]">04 hrs 32 mins</span>
                </div>
              </div>

              <div className="p-2 bg-accent/15 border border-accent/20 rounded-sm text-center text-accent text-xs font-bold">
                ENCRYPTED TUNNEL SECURELY ESTABLISHED
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product 2: OctoPay (COMING SOON) */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Terminal visual (Left) */}
          <div className="lg:col-span-5 order-2 lg:order-1 border border-hairline bg-[#FAFAF7] p-6 space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-slate/70 font-semibold block">Supported Networks Matrix</span>
              <div className="grid grid-cols-3 gap-2">
                {['PayPal', 'Google Pay', 'Apple Pay', 'Cash App', 'Venmo', 'Pix', 'Alipay', 'M-Pesa', 'Orange Money'].map((wallet) => (
                  <div key={wallet} className="p-2.5 border border-hairline bg-slate/5 text-center rounded-sm font-mono text-[11px] text-ink font-semibold">
                    {wallet}
                  </div>
                ))}
              </div>
              <div className="p-3 bg-ink text-[#FAFAF7] font-mono text-xs leading-relaxed rounded-sm">
                <span className="text-accent font-bold">SYSTEM MAP:</span> Send from <span className="underline decoration-accent font-semibold">PayPal (NZ)</span> ⇆ Route through OctoPay Intermediary Ledger ⇆ Settlement in <span className="underline decoration-accent font-semibold">M-Pesa (MW)</span>. Direct wallet-to-wallet clearing.
              </div>
            </div>
          </div>

          {/* Details & Capture (Right) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-accent/15 border border-accent/25 rounded-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="font-mono text-[11px] tracking-wider text-ink uppercase font-bold">
                  Coming Soon
                </span>
              </div>
              
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
                Send money from any wallet. Received in any wallet.
              </h2>
              <span className="font-mono text-sm text-slate uppercase tracking-wider font-semibold block">
                OctoPay // Cross-Wallet Money Settlement
              </span>
            </div>

            <p className="text-lg text-slate leading-snug">
              Most transfer apps assume everyone uses the same platform. OctoPay doesn&apos;t. It sits between the wallets people already have — PayPal, Google Pay, Apple Pay, Cash App, Venmo, Alipay, WeChat Pay, M-Pesa, Orange Money, MTN Mobile Money, and more — so you can send from what you use to what they use, at a fraction of the cost of traditional transfer providers.
            </p>

            <div className="p-6 border border-hairline bg-[#FAFAF7] space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-mono font-bold text-ink">Get Notified When OctoPay Launches</span>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow px-4 py-2.5 text-sm bg-white border border-hairline focus:border-accent focus:ring-1 focus:ring-accent outline-none font-mono focus-ring"
                    aria-label="Email address for notifications"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-ink bg-accent hover:bg-accent/90 border border-ink/10 transition-colors focus-ring"
                  >
                    Notify Me
                  </button>
                </form>
              ) : (
                <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-800 text-sm font-mono rounded-sm flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                  <span>Success! We will notify <strong>{email}</strong> when OctoPay launches.</span>
                </div>
              )}
            </div>

            <p className="text-xs font-mono text-slate/70 leading-relaxed">
              * Fine Print: OctoPay is in active development. Availability and supported wallets will vary by region at launch. Settlement times and fees are dependent on gateway processing and network corridors.
            </p>
          </div>
        </div>
      </section>

      <ConversionCTA />
    </div>
  );
}
