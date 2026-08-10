import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services & Capabilities | OctoTech Ltd',
  description: 'Technical breakdown of services by OctoTech Ltd: Web & mobile applications, IT infrastructure & VPN tunnels, database architecture & custom APIs, and SLA system maintenance.',
  openGraph: {
    title: 'Services & Capabilities | OctoTech Ltd',
    description: 'Technical breakdown of services by OctoTech Ltd: Web & mobile applications, IT infrastructure & VPN tunnels, database architecture & custom APIs, and SLA system maintenance.',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
