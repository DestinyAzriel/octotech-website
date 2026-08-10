import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Start a Project | Contact OctoTech Ltd',
  description: 'Inquire directly with Founder Telly Paul and Technical Lead Destiny Mwafulirwa. Scoped and quoted with 24-hour response guarantee.',
  openGraph: {
    title: 'Start a Project | Contact OctoTech Ltd',
    description: 'Inquire directly with Founder Telly Paul and Technical Lead Destiny Mwafulirwa. Scoped and quoted with 24-hour response guarantee.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
