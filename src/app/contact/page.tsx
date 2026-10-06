'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ShieldAlert, ArrowUpRight, CheckCircle2, AlertTriangle } from 'lucide-react';

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

function ContactFormContent() {
  const searchParams = useSearchParams();
  const reasonParam = searchParams.get('reason') || 'general';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: reasonParam,
    budget: 'mid',
    details: '',
  });
  const [prevReasonParam, setPrevReasonParam] = useState(reasonParam);
  if (reasonParam !== prevReasonParam) {
    setPrevReasonParam(reasonParam);
    setFormData((prev) => ({ ...prev, reason: reasonParam }));
  }
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('https://formspree.io/f/xgawapll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          reason: formData.reason,
          budget: formData.budget,
          details: formData.details,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json().catch(() => ({}));
        if (data && data.errors && data.errors.length > 0) {
          setErrorMessage(data.errors.map((err: { message: string }) => err.message).join(', '));
        } else {
          setErrorMessage('Submission failed due to a service error. Please try submitting again in a few moments.');
        }
      }
    } catch {
      setErrorMessage('Network transmission error. Please check your internet connection and resubmit.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Form (Left Panel) */}
      <div className="lg:col-span-7 p-6 sm:p-8 border border-hairline bg-[#FAFAF7] space-y-6">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-ink">Submit an Inquiry</h2>
            <p className="text-sm text-slate">
              Please fill out the details below. Telly or Destiny will review your request and get back to you directly within 24 hours.
            </p>

            {errorMessage && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-800 text-sm font-mono rounded-sm flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-bold">Transmission Failed</p>
                  <p className="text-xs">{errorMessage}</p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-slate/80 font-bold block">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 text-base bg-white border border-hairline focus:border-accent outline-none font-mono focus-ring"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-slate/80 font-bold block">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="e.g. john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full px-3 py-2 text-base bg-white border border-hairline focus:border-accent outline-none font-mono focus-ring"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="reason" className="font-mono text-xs uppercase tracking-wider text-slate/80 font-bold block">
                  What do you need?
                </label>
                <select
                  id="reason"
                  value={formData.reason}
                  onChange={(e) => setFormData((prev) => ({ ...prev, reason: e.target.value }))}
                  className="w-full px-3 py-2 text-base bg-white border border-hairline focus:border-accent outline-none font-mono focus-ring"
                >
                  <option value="general">General Software Work</option>
                  <option value="online-store">Setup an Online Store</option>
                  <option value="track-stock">Track Stock & Inventory</option>
                  <option value="business-app">Custom Business App</option>
                  <option value="automate-process">Automate a Manual Process</option>
                  <option value="secure-it">Secure IT Infrastructure</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="budget" className="font-mono text-xs uppercase tracking-wider text-slate/80 font-bold block">
                  Estimated Budget Range
                </label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData((prev) => ({ ...prev, budget: e.target.value }))}
                  className="w-full px-3 py-2 text-base bg-white border border-hairline focus:border-accent outline-none font-mono focus-ring"
                >
                  <option value="small">Under $5,000 NZD</option>
                  <option value="mid">$5,000 - $15,000 NZD</option>
                  <option value="large">$15,000 - $50,000 NZD</option>
                  <option value="enterprise">$50,000+ NZD</option>
                  <option value="undecided">To be discussed / Undecided</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="details" className="font-mono text-xs uppercase tracking-wider text-slate/80 font-bold block">
                Project Scope (in plain language)
              </label>
              <textarea
                id="details"
                required
                rows={5}
                placeholder="Describe your operational challenge, current setup, and target timelines..."
                value={formData.details}
                onChange={(e) => setFormData((prev) => ({ ...prev, details: e.target.value }))}
                className="w-full px-3 py-2 text-sm bg-white border border-hairline focus:border-accent outline-none font-mono focus-ring resize-y"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 text-sm font-semibold uppercase tracking-wider text-ink bg-accent hover:bg-accent/90 border border-ink/10 transition-colors focus-ring disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {submitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-ink border-t-transparent rounded-full animate-spin" />
                  <span>Transmitting Inquiry...</span>
                </>
              ) : (
                <span>Send Inquiry</span>
              )}
            </button>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-accent mx-auto" />
            <h3 className="font-display font-bold text-xl text-ink">Message sent — we&apos;ll get back to you within 24 hours</h3>
            <p className="text-sm text-slate max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. Your project scope has been transmitted to our leadership team. Telly or Destiny will review your details and respond to <strong>{formData.email}</strong> within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', reason: 'general', budget: 'mid', details: '' });
                }}
                className="text-sm font-mono font-semibold text-slate hover:text-ink underline"
              >
                Submit another inquiry
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Credibility Sidebar (Right Panel) */}
      <div className="lg:col-span-5 space-y-6">
        {/* Direct contact info */}
        <div className="p-6 border border-hairline bg-[#FAFAF7] space-y-4">
          <span className="font-mono text-xs uppercase tracking-wider text-slate/70 font-semibold block">
            Direct Reach & Verification
          </span>
          <h3 className="font-display text-lg font-bold text-ink">Verify Our Footprint</h3>
          <p className="text-sm text-slate leading-relaxed">
            If you are reviewing our capacity for a role on Seek, TradeMe, or via an outreach conversation, feel free to inspect our code and live networks directly.
          </p>

          <div className="space-y-3 pt-2">
            <a
              href="https://connectamericas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 border border-hairline bg-white hover:border-accent transition-colors text-sm text-slate hover:text-ink focus-ring"
              title="OCTOTECH LIMITED (6863136) is verified on ConnectAmericas"
            >
              <div className="flex items-center gap-2.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/verifiedbadge.png"
                  alt="ConnectAmericas Verified Company"
                  className="h-5 w-auto object-contain shrink-0"
                  width={88}
                  height={31}
                />
                <span className="font-mono text-xs">OCTOTECH LIMITED (6863136)</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </a>

            <a
              href="https://github.com/DestinyAzriel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 border border-hairline bg-white hover:border-accent transition-colors text-sm text-slate hover:text-ink focus-ring"
            >
              <div className="flex items-center gap-2.5">
                <Github className="w-4 h-4 text-accent" />
                <span className="font-mono">github.com/DestinyAzriel</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://octovvpn.net"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 border border-hairline bg-white hover:border-accent transition-colors text-sm text-slate hover:text-ink focus-ring"
            >
              <div className="flex items-center gap-2.5">
                <ShieldAlert className="w-4 h-4 text-accent" />
                <span className="font-mono">Live Network: octovvpn.net</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Location notes */}
        <div className="p-6 border border-hairline bg-ink text-[#FAFAF7] space-y-3 font-mono text-xs">
          <div className="flex items-center gap-1.5 text-accent font-bold">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span>Bi-Continental Service Availability</span>
          </div>
          <p className="text-xs text-slate/90 leading-relaxed">
            By operating across Auckland, NZ and Lilongwe, MW, we cover both Southern African and Australasian business hours. We handle outages and urgent support SLAs without time-zone delays.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col">
      {/* Page Header */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-hairline">
        <div className="max-w-4xl space-y-4">
          <span className="font-mono text-sm tracking-widest text-accent uppercase font-bold">Start a project</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-ink">
            Tell us what you need.
          </h1>
          <p className="text-lg sm:text-xl text-slate leading-snug">
            Describe the problem in plain language. No sales representatives — you talk straight to the builders. We reply within 24 hours with a scope and fixed-price quote.
          </p>

          {/* Conversion trust signals */}
          <div className="flex flex-wrap gap-4 pt-2 text-sm font-mono text-ink">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-accent/10 border border-accent/20 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Taking on new projects
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-ink/5 border border-hairline rounded-sm">
              2 slots open this quarter
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-ink/5 border border-hairline rounded-sm">
              Most projects start around $5,000 NZD — smaller enquiries welcome
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <Suspense fallback={<div className="font-mono text-xs text-slate">Loading routing parameters...</div>}>
          <ContactFormContent />
        </Suspense>
      </section>
    </div>
  );
}
