import type { Metadata } from "next";
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import "./globals.css";
import { Web3Provider } from "@/providers/web3Provider";

export const metadata: Metadata = {
  title: 'CoinLink',
  description: 'Connecting you to seamless crypto transfers',
};

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
      <Web3Provider>

        {children}
        </Web3Provider>

      </body>
    </html>
  );
}
