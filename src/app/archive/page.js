"use client";

import { motion } from "motion/react";
import { SlidersHorizontal } from "lucide-react";

export default function ArchivePage() {
  return (
    <div className="px-6 space-y-16 max-w-5xl mx-auto pb-20">
      {/* History & Stats Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-10 pt-4">
        <div className="space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-headline text-primary font-black tracking-[0.4em] uppercase text-xs"
          >
            Legacy Collection
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline text-7xl md:text-9xl font-black tracking-tighter text-on-surface leading-[0.8]"
          >
            Archive
          </motion.h2>
        </div>
        <div className="grid grid-cols-2 gap-6 md:w-1/3">
          <StatCard value="42" label="Films Seen" border="border-primary" />
          <StatCard value="3" label="Collections" border="border-secondary" />
        </div>
      </section>

      {/* Filtering Bar */}
      <nav className="flex items-center gap-4 overflow-x-auto pb-6 hide-scrollbar">
        {['All Time', 'Year', 'Genre', 'Rating'].map((filter, i) => (
          <motion.button 
            key={filter}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
              i === 0 ? 'bg-inverse-surface text-background shadow-xl' : 'bg-surface text-on-surface-variant hover:bg-surface-variant'
            }`}
          >
            {filter}
          </motion.button>
        ))}
        <div className="ml-auto p-2 bg-surface rounded-full">
          <SlidersHorizontal className="w-5 h-5 text-on-surface-variant" />
        </div>
      </nav>

      {/* Cinematic Timeline */}
      <div className="space-y-32 relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant/10 hidden md:block"></div>
        
        <TimelineEntry 
          title="The Godfather" 
          director="Francis Ford Coppola" 
          year="1972" 
          rating="10/10" 
          date="Oct 14, 2023" 
          theater="Apollo Screen 4"
          img="https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&q=80&w=1000"
          label="COPPOLA'S MASTERPIECE"
          asymmetric="-rotate-2"
          delay={0.2}
        />

        <TimelineEntry 
          title="Pulp Fiction" 
          director="Quentin Tarantino" 
          year="1994" 
          rating="9.2" 
          date="Sept 02, 2023" 
          theater="Grand Lux Cinema"
          img="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80&w=1000"
          label="TARANTINO RETROSPECTIVE"
          asymmetric="rotate-2"
          reverse
          delay={0.4}
        />

        <TimelineEntry 
          title="Inception" 
          director="Christopher Nolan" 
          year="2010" 
          rating="8.8" 
          date="Aug 15, 2023" 
          theater="IMAX Dome 1"
          img="https://images.unsplash.com/photo-1500462859194-8457286482d1?auto=format&fit=crop&q=80&w=1000"
          label="DREAM WITHIN A DREAM"
          asymmetric="-rotate-2"
          delay={0.6}
        />
      </div>
    </div>
  );
}

function StatCard({ value, label, border }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className={`bg-surface p-8 rounded-2xl flex flex-col justify-center border-l-8 ${border} shadow-sm`}
    >
      <span className="font-headline text-5xl font-black text-on-surface tracking-tighter">{value}</span>
      <span className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-black mt-2 opacity-60">{label}</span>
    </motion.div>
  );
}

function TimelineEntry({ title, director, year, rating, date, theater, img, label, asymmetric, reverse, delay }) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 group ${reverse ? 'md:flex-row-reverse' : ''}`}
    >
      <div className="w-full md:w-1/2 flex justify-center">
        <motion.div 
          whileHover={{ rotate: 0, scale: 1.05 }}
          className={`bg-white p-8 shadow-2xl w-full max-w-sm border border-stone-100 relative rounded-sm transition-all duration-500 ${asymmetric}`}
        >
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="font-headline text-3xl font-black leading-none tracking-tighter mb-2">{title}</h3>
              <p className="text-[11px] text-on-surface-variant font-black uppercase tracking-widest opacity-60">{director} • {year}</p>
            </div>
            <span className="font-headline text-primary text-2xl font-black tracking-tighter">{rating}</span>
          </div>
          <div className="border-t-2 border-dashed border-stone-200 my-6"></div>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-black mb-1">Date</p>
              <p className="font-black text-sm">{date}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-black mb-1">Theater</p>
              <p className="font-black text-sm">{theater}</p>
            </div>
          </div>
          <div className="w-full h-14 bg-stone-900 flex items-center justify-center rounded-sm">
            <div className="flex gap-1.5 px-4 w-full justify-center">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="h-10 bg-white/20 rounded-full" style={{ width: Math.random() * 12 + 2, opacity: Math.random() * 0.5 + 0.1 }}></div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="relative w-full aspect-[4/5] md:aspect-square overflow-hidden rounded-[3rem] bg-surface shadow-2xl transition-transform group-hover:scale-[1.02] duration-700">
          <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" src={img} referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          <div className="absolute bottom-10 left-10 text-white">
            <p className="font-headline text-5xl font-black tracking-tighter leading-none uppercase">{label}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
