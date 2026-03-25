"use client";

import { motion } from "motion/react";
import { Search } from "lucide-react";

export default function CuratePage() {
  return (
    <div className="px-6 space-y-20 max-w-4xl mx-auto pb-20">
      {/* Hero Header Section */}
      <section className="pt-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-headline font-black text-7xl md:text-9xl leading-[0.8] tracking-tighter uppercase text-on-surface mb-10"
        >
          CURATE YOUR <br /> <span className="text-primary">COLLECTION</span>
        </motion.h2>
        <div className="relative group max-w-2xl">
          <input 
            className="w-full bg-surface border-none rounded-[2rem] py-8 px-10 text-on-surface placeholder:text-outline-variant font-headline font-black text-2xl focus:ring-4 focus:ring-primary/10 transition-all shadow-2xl" 
            placeholder="Search for a masterpiece" 
            type="text"
          />
          <div className="absolute right-10 top-1/2 -translate-y-1/2 text-primary">
            <Search className="w-10 h-10" />
          </div>
        </div>
      </section>

      {/* Search Results */}
      <div className="space-y-20">
        <SearchResult 
          title="Sunset Boulevard" 
          director="Billy Wilder" 
          meta="1954 • NOIR CRIME" 
          img="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=600"
          rotation="-rotate-3"
          delay={0.2}
        />
        <SearchResult 
          title="Portrait of a Lady on Fire" 
          director="Céline Sciamma" 
          meta="2019 • DRAMA" 
          img="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=600"
          rotation="rotate-3"
          reverse
          delay={0.4}
        />
        <SearchResult 
          title="L'Avventura" 
          director="Michelangelo Antonioni" 
          meta="1960 • THRILLER" 
          img="https://images.unsplash.com/photo-1512070679279-8988d32161be?auto=format&fit=crop&q=80&w=600"
          rotation="-rotate-2"
          delay={0.6}
        />

        {/* Request Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 bg-inverse-surface p-16 rounded-[4rem] relative overflow-hidden shadow-2xl transform -rotate-1 group"
        >
          <div className="absolute inset-0 opacity-20 mix-blend-overlay transition-transform duration-1000 group-hover:scale-110">
            <img 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=1200" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 text-center max-w-xl mx-auto">
            <h4 className="font-headline text-background text-4xl font-black uppercase mb-4 tracking-tighter">Can't find it?</h4>
            <p className="text-outline-variant font-body mb-10 text-base opacity-80">Our archives are deep, but sometimes a masterpiece slips through. Request an addition to the library.</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-tertiary-fixed text-on-surface font-headline font-black px-12 py-4 rounded-full uppercase text-sm tracking-[0.3em] shadow-xl"
            >
              Request Archival
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function SearchResult({ title, director, meta, img, rotation, reverse, delay }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: reverse ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className={`relative flex gap-10 items-end group ${reverse ? 'flex-row-reverse text-right' : ''}`}
    >
      <motion.div 
        whileHover={{ rotate: 0, scale: 1.05 }}
        className={`w-40 h-60 sm:w-52 sm:h-80 flex-shrink-0 relative overflow-hidden rounded-2xl transition-transform duration-500 shadow-2xl ${rotation}`}
      >
        <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" src={img} referrerPolicy="no-referrer" />
      </motion.div>
      <div className="flex-grow pb-4">
        <span className="text-primary font-headline font-black text-xs uppercase tracking-[0.3em] block mb-3">{meta}</span>
        <h3 className="font-headline text-4xl md:text-6xl font-black uppercase leading-[0.85] mb-4 tracking-tighter">{title}</h3>
        <p className="text-on-surface-variant font-black text-sm uppercase tracking-widest opacity-60 mb-8">{director}</p>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-primary text-white font-headline font-black px-10 py-3 rounded-full uppercase text-xs tracking-[0.2em] shadow-lg shadow-primary/20"
        >
          ADD
        </motion.button>
      </div>
    </motion.div>
  );
}
