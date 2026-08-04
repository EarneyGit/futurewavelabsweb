import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import { SplashCursor } from "@/components/ui/splash-cursor.js";
import { OrganizationSchema } from "./schema";

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
  metadataBase: new URL('https://www.futurewavelabs.in'),

  title: "Future Wave Labs | Innovation across diverse and critical sectors",
  description: "Leading AI automation company specializing in intelligent agents, website development, mobile apps, software solutions, and cutting-edge digital transformation.",

  keywords: [
    "AI automation",
    "artificial intelligence",
    "web development",
    "mobile app development",
    "software development",
    "digital transformation",
    "SaaS solutions",
    "intelligent agents",
    "AI agents",
    "India tech company"
  ],

  authors: [{ name: "Future Wave Labs" }],
  creator: "Future Wave Labs",
  publisher: "Future Wave Labs",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: 'https://www.futurewavelabs.in',
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.futurewavelabs.in',
    siteName: 'Future Wave Labs',
    title: "Future Wave Labs | Innovation across diverse and critical sectors",
    description: "Leading AI automation company specializing in intelligent agents, website development, mobile apps, software solutions, and cutting-edge digital transformation.",
    images: [
      {
        url: '/fwl-logo-white.png',
        width: 1200,
        height: 630,
        alt: 'Future Wave Labs - AI Automation Company',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: "Future Wave Labs | Innovation across diverse and critical sectors",
    description: "Leading AI automation company specializing in intelligent agents, website development, mobile apps, software solutions, and cutting-edge digital transformation.",
    images: ['/fwl-logo-white.png'],
    creator: '@futurewavelabs',
  },

  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },

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
    <html lang="en" className="dark" style={{ backgroundColor: '#000000', colorScheme: 'dark' }} suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
          html, body { 
            background-color: #000000 !important; 
            color: #ededed !important;
            color-scheme: dark !important;
          }
        `}} />
        <OrganizationSchema />
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
