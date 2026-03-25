"use client";

import { motion } from "motion/react";
import { QrCode, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function TicketsPage() {
  return (
    <div className="px-6 space-y-12 max-w-2xl mx-auto pb-20">
      {/* Editorial Header */}
      <section className="pt-4">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-headline text-6xl font-black tracking-tighter leading-[0.85] mb-4 text-on-surface"
        >
          TICKETS<br /><span className="text-primary">& HISTORY</span>
        </motion.h2>
        <p className="text-on-surface-variant font-black text-xs tracking-[0.3em] uppercase opacity-60">Your Cinematic Archive</p>
      </section>

      {/* Filters */}
      <div className="flex gap-3 overflow-x-auto pb-4 hide-scrollbar">
        {['All', 'Active', 'Past', 'Wishlist'].map((filter, i) => (
          <motion.button 
            key={filter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
              i === 0 ? 'bg-inverse-surface text-background shadow-lg shadow-black/10' : 'bg-surface text-on-surface-variant hover:bg-surface-variant'
            }`}
          >
            {filter}
          </motion.button>
        ))}
      </div>

      {/* Active Tickets Section */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="font-headline text-2xl font-black tracking-tighter text-on-surface">Active Admission</h3>
          <span className="text-primary font-black text-[10px] uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">1 New Alert</span>
        </div>

        <motion.div 
          initial={{ rotate: -2, y: 20, opacity: 0 }}
          animate={{ rotate: -2, y: 0, opacity: 1 }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          className="bg-white rounded-[2rem] shadow-2xl border border-outline-variant/5 flex overflow-hidden relative group cursor-pointer transition-all duration-500"
        >
          <div className="flex-grow p-8 pr-4">
            <div className="flex gap-6 mb-8">
              <div className="w-24 h-32 rounded-xl overflow-hidden shadow-xl flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=300" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-surface text-[10px] font-black uppercase rounded-lg mb-3 w-fit shadow-sm">
                  Premiering Now
                </span>
                <h4 className="font-headline text-2xl font-black leading-none mb-3 tracking-tighter">THE SILENT<br />CHORUS</h4>
                <div className="flex gap-4">
                  <Stat label="Seat" value="H12" color="text-primary" />
                  <Stat label="Row" value="H" />
                  <Stat label="Screen" value="04" />
                </div>
              </div>
            </div>
            <div className="pt-6 border-t-2 border-dashed border-outline-variant/10 flex justify-between items-end">
              <div>
                <p className="text-[10px] font-black text-on-surface-variant tracking-[0.2em] uppercase mb-1.5">Date & Time</p>
                <p className="font-headline font-black text-xl tracking-tighter">OCT 24, 20:45</p>
              </div>
            </div>
          </div>
          <div className="w-px border-r-2 border-dashed border-outline-variant/20 my-6"></div>
          <div className="w-28 flex flex-col items-center justify-center p-6 bg-surface/20">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="bg-white p-3 rounded-2xl shadow-lg border border-outline-variant/5 mb-4"
            >
              <QrCode className="w-10 h-10 text-on-surface" />
            </motion.div>
            <p className="text-[9px] font-black uppercase tracking-tighter text-on-surface-variant text-center leading-tight opacity-60">ADM-982-CHOR</p>
          </div>
        </motion.div>
      </section>

      {/* Collection History */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="font-headline text-2xl font-black tracking-tighter text-on-surface">Recent History</h3>
          <Link href="/archive" className="text-secondary font-black text-[10px] uppercase tracking-widest border-b border-secondary pb-0.5">View Archive</Link>
        </div>
        <div className="space-y-5">
          <HistoryItem 
            title="Elysium Protocol" 
            meta="Oct 12 • Grand Odeon Cinema" 
            img="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80&w=300"
          />
          <HistoryItem 
            title="Nocturnal Muse" 
            meta="Sep 28 • The Rialto Loft" 
            img="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=300"
          />
          <HistoryItem 
            title="Velvet Horizon" 
            meta="Sep 15 • Downtown IMAX" 
            img="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=300"
          />
        </div>
      </section>

      {/* Stats Bento Grid */}
      <section className="space-y-8">
        <h3 className="font-headline text-2xl font-black tracking-tighter text-on-surface">Your Stats</h3>
        <div className="grid grid-cols-2 gap-6">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-sm"
          >
            <Sparkles className="w-8 h-8 text-primary mb-4" />
            <p className="text-5xl font-headline font-black text-primary tracking-tighter">12</p>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 mt-1">Films Seen</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-secondary/5 p-8 rounded-[2.5rem] border border-secondary/10 shadow-sm flex flex-col justify-between"
          >
            <div>
              <p className="text-3xl font-headline font-black text-secondary tracking-tighter">Elite</p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/60 mt-1">Curator Status</p>
            </div>
            <div className="w-full bg-secondary/10 h-2 rounded-full mt-6 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="bg-secondary h-full rounded-full shadow-[0_0_10px_rgba(0,82,206,0.3)]"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value, color = "text-on-surface" }) {
  return (
    <div>
      <p className="text-[9px] uppercase font-black text-on-surface-variant tracking-[0.2em] mb-1">{label}</p>
      <p className={`font-headline font-black text-lg tracking-tighter ${color}`}>{value}</p>
    </div>
  );
}

function HistoryItem({ title, meta, img }) {
  return (
    <motion.div 
      whileHover={{ x: 10, backgroundColor: 'var(--color-surface)' }}
      className="group flex items-center gap-5 bg-surface/40 p-4 rounded-[2rem] transition-all cursor-pointer border border-outline-variant/5"
    >
      <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-700 shadow-md">
        <img className="w-full h-full object-cover" src={img} referrerPolicy="no-referrer" />
      </div>
      <div className="flex-grow">
        <h5 className="font-headline font-black text-xl text-on-surface group-hover:text-primary transition-colors uppercase tracking-tighter">{title}</h5>
        <p className="text-[11px] text-on-surface-variant font-bold uppercase tracking-widest mt-1 opacity-70">{meta}</p>
      </div>
      <ChevronRight className="w-6 h-6 text-outline-variant group-hover:text-on-surface transition-colors mr-2" />
    </motion.div>
  );
}
