"use client";

import { Space_Grotesk, Manrope } from "next/font/google";
import "../index.css";
import Link from "next/link";
import { Menu, Film, Ticket, Archive, Edit3 } from "lucide-react";
import NavLink from "@/components/NavLink";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-headline",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <body className="bg-background font-body text-on-surface min-h-screen selection:bg-primary selection:text-white">
        {/* Top Navigation Bar */}
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-4">
            <Menu className="w-6 h-6 text-on-surface cursor-pointer" />
            <Link href="/">
              <h1 className="font-headline font-black text-3xl tracking-tighter uppercase text-primary">
                CURATOR
              </h1>
            </Link>
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container shadow-sm">
            <img
              alt="User Profile"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200"
              referrerPolicy="no-referrer"
            />
          </div>
        </header>

        <main className="pt-20 pb-32">
          {children}
        </main>

        {/* Bottom Navigation Bar */}
        <nav className="fixed bottom-0 left-0 w-full flex flex-row justify-around items-center pb-8 pt-4 px-4 bg-background/90 backdrop-blur-2xl z-50 rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] border-t border-outline-variant/10">
          <NavLink href="/" icon={Film} label="Explore" />
          <NavLink href="/tickets" icon={Ticket} label="Tickets" />
          <NavLink href="/archive" icon={Archive} label="Archive" />
          <NavLink href="/curate" icon={Edit3} label="Curate" />
        </nav>
      </body>
    </html>
  );
}
