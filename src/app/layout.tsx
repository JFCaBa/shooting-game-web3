import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Shooting Game DApp - Web3 Gaming Platform",
  description: "Join the next generation of blockchain gaming with Shooting Game DApp. Earn tokens, collect NFTs, and compete in thrilling multiplayer matches.",
  metadataBase: new URL('https://shootingdapp.com'),
  openGraph: {
    title: "Shooting Game DApp - Web3 Gaming Platform",
    description: "Join the next generation of blockchain gaming with Shooting Game DApp. Earn tokens, collect NFTs, and compete in thrilling multiplayer matches.",
    url: 'https://shootingdapp.com',
    siteName: 'Shooting Game DApp',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shooting Game DApp Preview',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Shooting Game DApp - Web3 Gaming Platform",
    description: "Join the next generation of blockchain gaming with Shooting Game DApp. Earn tokens, collect NFTs, and compete in thrilling multiplayer matches.",
    images: ['/og-image.jpg'],
    creator: '@shootingdapp',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'google-site-verification=c5YZ16iHGqb7a6bhyeCCWP_hQ4hgjooSXvO78DNoYfA',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
