import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PugArch - Innovative Technology Solutions',
  description: 'Strategic IT partnerships delivering cutting-edge technology solutions for Education, Government, and Industry sectors.',
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* ✅ Preload Spline resources */}
        <link
          rel="preconnect"
          href="https://prod.spline.design"
          crossOrigin="anonymous"
        />
        <link
          rel="dns-prefetch"
          href="https://prod.spline.design"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
