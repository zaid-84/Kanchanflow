
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KanchanFlow | Manufacturing CRM",
    template: "%s | KanchanFlow",
  },
  description:
    "Manage manufacturing quotations, bills of materials, sales pipelines and work orders in one connected workspace.",
  openGraph: {
    title: "KanchanFlow | Manufacturing CRM",
    description:
      "Bring your manufacturing sales and operations into one connected workflow.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
