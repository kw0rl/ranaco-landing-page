import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RETI - Ranaco Education & Training Institute | Program Diploma",
  description: "Institut pendidikan diploma terkemuka dengan program Maritime, Oil & Gas, Logistics, Safety & Health, dan Hospitality. Jaminan kerja selepas tamat pengajian.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
