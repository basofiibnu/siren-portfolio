import type { Metadata } from 'next';
import { Poppins } from '@next/font/google';
import './globals.css';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const poppins = Poppins({ weight: '400', subsets: ['latin'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'Hyperhire - Coin Siren Portfolio',
  description: 'Developed to complete Hyperhire Assignment by basofiibnu',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
