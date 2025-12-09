import type { Metadata } from 'next';
import { Geist } from 'next/font/google';

import { StyledComponentsRegistry } from '@/lib/styled-components';

import './global.css';

const geistSans = Geist({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Padel Score',
  description: 'Created by Mikołaj Pęcak',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geistSans.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
