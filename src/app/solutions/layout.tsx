import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Problems We Solve | OctoTech Ltd',
  description: 'Interactive problem-mapping matrix: Online stores, inventory registers, custom business apps, process automation, and IT infrastructure security.',
  openGraph: {
    title: 'Problems We Solve | OctoTech Ltd',
    description: 'Interactive problem-mapping matrix: Online stores, inventory registers, custom business apps, process automation, and IT infrastructure security.',
  },
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
