import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sri Sambuddhaloka Dhamma School | Kahathuduwa",
  description: "Sri Sambuddhaloka Dhamma School - One of the finest Buddhist Dhamma schools in Udagahapaththuwa Balamandalaya, Kahathuduwa, Sri Lanka.",
  keywords: "Sri Sambuddhaloka, Dhamma School, Kahathuduwa, Buddhist Education, Sri Lanka",
  openGraph: {
    title: "Sri Sambuddhaloka Dhamma School | Kahathuduwa",
    description: "One of the finest Dhamma schools in Udagahapaththuwa Balamandalaya.",
    url: "https://srisambuddhaloka.lk",
    siteName: "Sri Sambuddhaloka Dhamma School",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4A1D1D",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="canonical" href="https://srisambuddhaloka.lk" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}