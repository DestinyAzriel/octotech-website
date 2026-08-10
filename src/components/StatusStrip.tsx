'use client';

import { useEffect, useState } from 'react';

export default function StatusStrip() {
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
    <div className="w-full bg-[#FAFAF7] border-b border-hairline px-4 md:px-8 py-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] font-mono font-medium text-slate tracking-tight">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span>Lilongwe, MW</span>
          <span className="text-ink font-semibold">{mounted ? `${times.lilongwe} CAT` : '--:--:--'}</span>
        </div>
        <span className="hidden sm:inline text-hairline">|</span>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span>Auckland, NZ</span>
          <span className="text-ink font-semibold">{mounted ? `${times.auckland} NZST/NZDT` : '--:--:--'}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 text-[11px] font-medium tracking-widest text-slate/70 uppercase">
        <span>Active Networks & Shipped Work</span>
      </div>
    </div>
  );
}
