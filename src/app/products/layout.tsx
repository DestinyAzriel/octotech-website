import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products & Platforms | OctoTech Ltd',
  description: 'Standalone software engineered and operated by OctoTech Ltd: OctoVVPN censorship-resilient VPN gateway and OctoPay cross-wallet settlement platform.',
  openGraph: {
    title: 'Products & Platforms | OctoTech Ltd',
    description: 'Standalone software engineered and operated by OctoTech Ltd: OctoVVPN censorship-resilient VPN gateway and OctoPay cross-wallet settlement platform.',
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
