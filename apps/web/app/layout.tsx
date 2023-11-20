import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@turboplus/ui/dist/index.css";
import { meta } from "../config/meta";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = meta;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html className="bg-black" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
