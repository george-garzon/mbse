import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GradientCircle from "@/app/components/GradientCircle";
import FooterGradient from "@/app/components/FooterGradient";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
    title: "Arcfield AI Chat",
    description: "Powered by OpenAI",
    openGraph: {
        title: "Arcfield AI Chat",
        description: "Learn about Arcfield STC’s secure systems and advanced aerospace design initiatives.",
        url: "https://arcfield.garzn.com/",
        siteName: "Arcfield AI Chat",
        images: [
            {
                url: "https://mbse.garzn.com/site_image.png",
                width: 1200,
                height: 630,
                alt: "Arcfield AI",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Arcfield STC",
        description: "Ask AI about Arcfield MBSE",
        images: ["https://mbse.garzn.com/site_image.png"],
    },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <head>
          <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
      </head>
      <body className="bg-[#111114] w-full h-full textPrimary">
      <div id="root" className="w-full min-h-dvh flex flex-col">
              {/*<GradientCircle/>*/}
            <Header />
              {children}
          </div>
      </body>
      </html>
);
}
