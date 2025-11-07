import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GradientCircle from "@/app/components/GradientCircle";
import FooterGradient from "@/app/components/FooterGradient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
    title: "MBSE Chat",
    description: "AI-powered system design workspace",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className="bg-[#111114] w-full h-full text-bolt-elements-textPrimary">
        <div id="root" className="w-full min-h-dvh flex flex-col">
              <FooterGradient />
              {/*<GradientCircle/>*/}
              {children}
          </div>
      </body>
      </html>
);
}
