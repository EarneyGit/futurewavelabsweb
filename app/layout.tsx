import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import { SplashCursor } from "@/components/ui/splash-cursor.js";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["800"],
});

export const metadata: Metadata = {
      title: "Future Wave Labs | Innovation across diverse and critical sectors",
  description: "Leading AI automation company specializing in intelligent agents, website development, mobile apps, software solutions, and cutting-edge digital transformation.",
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} antialiased bg-black text-white`}
        suppressHydrationWarning={true}
      >
        {children}
        <SplashCursor />
      </body>
    </html>
  );
}
