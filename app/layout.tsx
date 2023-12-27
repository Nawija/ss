import "@/styles/globals.css";

import Nav from "@/ui/header/Nav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seovileo | Strony Internetowe",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head>
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} mx-auto max-w-[2000px] `}>
        <Nav />
        <main className="w-full overflow-x-hidden lg:overflow-x-visible">
          {children}
        </main>
      </body>
    </html>
  );
}
