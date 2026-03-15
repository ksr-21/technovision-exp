import React from 'react';
import { motion } from 'motion/react';

const leaders = [
  {
    name: 'Hon. Mr. Rushiraj T. Sawant',
    designation: 'Trustee JSPM & TSSM',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Dr. S. R. Thite',
    designation: 'Campus Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Dr. S. P. Bhosle',
    designation: 'Director, JSPM NTC',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Dr. M. M. Sardeshmukh',
    designation: 'Deputy Director, JSPM NTC',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Prof. S. P. Naik',
    designation: 'HOD AI & DS Engg.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Dr. B. B. Khapale',
    designation: 'HOD Civil Engg.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
  },
];

export default function Leadership() {
  return (
    <section className="bg-black py-32 overflow-hidden">
      {/* Caution Tape */}
      <div className="caution-tape -rotate-2 scale-110 mb-24">
        <div className="flex gap-8 whitespace-nowrap">
          {Array(20).fill(0).map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              OUR TEAM <span className="text-black/20">/</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className="aspect-[3/4] overflow-hidden grayscale border border-white/10 mb-6 group">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-black text-white tracking-tighter uppercase mb-2">{leader.name}</h3>
              <p className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase">{leader.designation}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
