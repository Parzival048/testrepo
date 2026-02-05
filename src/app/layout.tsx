import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Elite Gym | Transform Your Body & Mind",
  description: "Experience the ultimate fitness journey with state-of-the-art equipment, expert trainers, and a community that pushes you beyond limits. Join Elite Gym today!",
  keywords: "gym, fitness, personal training, workout, health, wellness, membership",
  authors: [{ name: "Elite Gym" }],
  openGraph: {
    title: "Elite Gym | Transform Your Body & Mind",
    description: "Experience the ultimate fitness journey with state-of-the-art equipment, expert trainers, and a community that pushes you beyond limits.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Gym | Transform Your Body & Mind",
    description: "Experience the ultimate fitness journey with state-of-the-art equipment, expert trainers, and a community that pushes you beyond limits.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4DRYGZRWGB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4DRYGZRWGB');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
