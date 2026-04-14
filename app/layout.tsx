import { ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeInit } from "../.flowbite-react/init";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sri Sambuddhaloka Dhamma School | Kahathuduwa",
  description: "Sri Sambuddhaloka Dhamma School - One of the finest Buddhist Dhamma schools in Udagahapaththuwa Balamandalaya, Kahathuduwa, Sri Lanka. Nurturing wisdom and compassion through traditional Theravāda Buddhist education.",
  keywords: "Sri Sambuddhaloka, Dhamma School, Kahathuduwa, Buddhist Education, Theravāda Buddhism, Dhamma School Sri Lanka, Udagahapaththuwa Balamandalaya",
  authors: [{ name: "Sri Sambuddhaloka Temple" }],
  openGraph: {
    title: "Sri Sambuddhaloka Dhamma School | Buddhist Education in Kahathuduwa",
    description: "One of the finest Dhamma schools in Udagahapaththuwa Balamandalaya, providing quality Buddhist education since 1998.",
    url: "https://srisambuddhaloka.lk",
    siteName: "Sri Sambuddhaloka Dhamma School",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sri Sambuddhaloka Dhamma School",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Sambuddhaloka Dhamma School",
    description: "Quality Buddhist education in Kahathuduwa, Sri Lanka",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Add canonical URL */}
        <link rel="canonical" href="https://srisambuddhaloka.lk" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeInit />
        {children}
      </body>
    </html>
  );
}