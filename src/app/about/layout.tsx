import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us & Leadership | OctoTech Ltd',
  description: 'Founder Telly Paul and Technical Lead Destiny Mwafulirwa — operating across Auckland, New Zealand and Lilongwe, Malawi.',
  openGraph: {
    title: 'About Us & Leadership | OctoTech Ltd',
    description: 'Founder Telly Paul and Technical Lead Destiny Mwafulirwa — operating across Auckland, New Zealand and Lilongwe, Malawi.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
