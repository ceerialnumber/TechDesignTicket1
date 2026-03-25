"use client";

import { motion } from "motion/react";
import { Plus, QrCode } from "lucide-react";
import Link from "next/link";

export default function ExplorePage() {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Editorial Section */}
      <section className="px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full h-[700px] rounded-[4rem] overflow-hidden bg-inverse-surface group shadow-3xl"
        >
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 2, ease: "easeOut" }}
            alt="Classical Bust Hero"
            className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity transition-transform duration-1000 group-hover:scale-110"
            src="https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&q=80&w=1920"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/20 to-transparent opacity-95"></div>
          <div className="absolute inset-x-0 bottom-0 p-16 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="px-6 py-2 bg-primary text-white font-headline text-[10px] font-black tracking-[0.4em] uppercase rounded-full shadow-2xl shadow-primary/40">
                Feature Presentation
              </span>
              <span className="text-white/40 font-black text-[10px] uppercase tracking-[0.2em]">Vol. 04 • 2026</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="font-headline text-8xl md:text-[10rem] font-black text-white leading-[0.75] tracking-tighter uppercase mb-8"
            >
              EXPLORE<br /><span className="text-primary">RECENT</span>
            </motion.h2>
            <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-10">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-outline-variant font-body text-base max-w-sm leading-relaxed opacity-70"
              >
                A curated selection of cinematic masterpieces, where classical art meets the contemporary screen. Every frame is a legacy.
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black font-headline font-black px-12 py-5 rounded-full uppercase text-xs tracking-[0.3em] shadow-2xl hover:bg-primary hover:text-white transition-all"
              >
                Discover More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* My Tickets - Horizontal Scroll */}
      <section>
        <div className="px-10 flex justify-between items-end mb-12">
          <h3 className="font-headline text-6xl font-black tracking-tighter uppercase">My Tickets</h3>
          <Link href="/tickets" className="text-primary font-black text-xs tracking-[0.3em] uppercase border-b-2 border-primary pb-2">
            View All
          </Link>
        </div>
        <div className="flex overflow-x-auto hide-scrollbar gap-12 px-10 pb-20 pt-4">
          <TicketCard 
            title="The Great Gatsby" 
            color="#FF6B35" 
            time="19:30" 
            seat="Row G • Seat 12" 
            rotation="-rotate-3"
            delay={0.2}
          />
          <TicketCard 
            title="Blade Runner" 
            color="#4361EE" 
            time="21:15" 
            seat="Row A • Seat 04" 
            rotation="rotate-2"
            delay={0.4}
          />
          <TicketCard 
            title="Amélie" 
            color="#4CC9F0" 
            time="16:45" 
            seat="Row C • Seat 21" 
            rotation="-rotate-1"
            delay={0.6}
          />
        </div>
      </section>

      {/* Recently Added - Bento Grid */}
      <section className="px-8 mb-24">
        <h3 className="font-headline text-6xl font-black tracking-tighter mb-12 uppercase">Recently Added</h3>
        <div className="grid grid-cols-2 gap-10">
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="col-span-2 relative h-[500px] rounded-[4rem] overflow-hidden shadow-3xl group"
          >
            <img
              alt="Citizen Kane"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1920"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
            <div className="absolute bottom-12 left-12 right-12">
              <span className="bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.3em] mb-6 inline-block shadow-2xl">
                Masterpiece
              </span>
              <h4 className="font-headline text-6xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4 leading-none">Citizen Kane</h4>
              <p className="text-white/50 text-sm font-black uppercase tracking-[0.3em]">Released 1941 • 119 MIN • DRAMA</p>
            </div>
          </motion.div>
          
          <MovieCard 
            title="Parasite" 
            meta="Thriller • 2019" 
            img="https://images.unsplash.com/photo-1594908900066-3f47337549d8?auto=format&fit=crop&q=80&w=800"
          />
          <MovieCard 
            title="Vertigo" 
            meta="Mystery • 1958" 
            img="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=800"
          />
        </div>
      </section>

      {/* Floating Action Button */}
      <motion.button 
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-32 right-10 w-20 h-20 bg-primary text-white rounded-[2rem] shadow-3xl flex items-center justify-center z-50 transition-all shadow-primary/40"
      >
        <Plus className="w-10 h-10 font-bold" />
      </motion.button>
    </div>
  );
}

function TicketCard({ title, color, time, seat, rotation, delay }) {
  const rotVal = parseInt(rotation.replace('rotate-', '-').replace('rotate', '')) || 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50, rotate: 0 }}
      animate={{ opacity: 1, x: 0, rotate: rotVal }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
      className={`flex-shrink-0 w-96 h-56 rounded-[3rem] relative shadow-2xl overflow-hidden ticket-cutout cursor-pointer transition-all duration-500`}
      style={{ backgroundColor: color }}
    >
      <div className="relative z-10 flex h-full">
        <div className="flex-1 p-10 flex flex-col justify-between">
          <div>
            <p className="text-white/70 text-[10px] font-black uppercase tracking-[0.4em] mb-3">Admits One</p>
            <p className="font-headline font-black text-4xl text-white leading-none uppercase tracking-tighter">{title}</p>
            <p className="text-white/60 text-[10px] font-black uppercase mt-6 tracking-[0.3em]">{seat}</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-3 h-3 rounded-full bg-white animate-pulse shadow-[0_0_15px_white]"></span>
            <span className="text-white/90 text-[10px] font-black uppercase tracking-[0.3em]">Now Showing</span>
          </div>
        </div>
        <div className="w-px h-full ticket-divider text-white/30"></div>
        <div className="w-32 p-10 flex flex-col justify-between items-center text-white">
          <div className="text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 mb-2">Time</p>
            <span className="font-headline font-black text-3xl tracking-tighter">{time}</span>
          </div>
          <div className="bg-white p-3 rounded-2xl shadow-2xl">
            <QrCode className="w-8 h-8" style={{ color }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MovieCard({ title, meta, img }) {
  return (
    <motion.div 
      whileHover={{ y: -15 }}
      className="bg-surface rounded-[4rem] p-6 flex flex-col gap-6 shadow-2xl border border-outline-variant/5 group"
    >
      <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-inner relative">
        <img 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" 
          src={img} 
          referrerPolicy="no-referrer" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="px-4 pb-4">
        <h4 className="font-headline text-3xl font-black text-on-surface leading-tight uppercase tracking-tighter">{title}</h4>
        <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-[0.3em] mt-3 opacity-60">{meta}</p>
      </div>
    </motion.div>
  );
}
