import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PokeDashboard",
  description: "Pokemon database in a single page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen font-[family-name:var(--font-geist-sans)] bg-slate-100 overflow-x-hidden">
          <header className="w-screen bg-green-300 h-[100px] px-5 md:px-28 py-10 bg-[url(/header-background.jpg)] bg-cover bg-bottom lg:bg-bottom">
            <Link href="/">
              <div className="flex justify-center">
                <h1 className="font-semibold text-slate-700 text-3xl bg-green-200 rounded-full px-5">PokeDashboard</h1>
              </div>
            </Link>
          </header>
          <main className="flex flex-col gap-8 row-start-2 p-5 ">
            {children}
          </main>
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          </footer>
        </div>
      </body>
    </html>
  );
}
