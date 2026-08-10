import type { Metadata } from "next";
import { Inter, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OctoTech Ltd | Custom Web Apps, Mobile Apps & Networks",
  description: "Growing technology and engineering studio led by Founder Telly Paul (Auckland, NZ) and Technical Lead Destiny Mwafulirwa (Lilongwe, MW). We build high-performance web apps, mobile apps, secure VPN infrastructure, and custom database automation.",
  keywords: ["OctoTech", "Software Development", "VPN", "Web Apps", "Mobile Apps", "New Zealand IT", "Malawi IT", "Telly Paul", "Destiny Mwafulirwa"],
  authors: [{ name: "Telly Paul" }, { name: "Destiny Mwafulirwa" }],
  openGraph: {
    title: "OctoTech Ltd | Custom Web Apps, Mobile Apps & Networks",
    description: "Growing technology and engineering studio led by Founder Telly Paul (Auckland, NZ) and Technical Lead Destiny Mwafulirwa (Lilongwe, MW).",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-paper text-slate antialiased">
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
