import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ARE YOU READY? | Prepper Event",
  description: "Friday, February 27th at 6PM. Food. Survival gear giveaways. Are you ready for the end?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} font-mono antialiased grain bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
