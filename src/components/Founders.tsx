import React from 'react';
import { motion } from 'motion/react';

export default function Founders() {
  return (
    <section className="py-32 px-8 md:px-24 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase mb-8 block">THE VISIONARY</span>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-12 uppercase">
              HON. PROF. DR. <br />
              <span className="text-gray-500">T. J. SAWANT SIR</span>
            </h2>
            <p className="text-gray-400 text-lg font-medium leading-relaxed mb-12 max-w-xl">
              A pioneer in technical education, creating world-class infrastructure and empowering
              thousands of young minds through quality education and innovative learning environments.
            </p>
            <div className="flex gap-12">
              <div>
                <p className="text-3xl font-black text-white">20+</p>
                <p className="text-[8px] font-bold text-white/40 tracking-widest uppercase mt-2">Institutes</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">50K+</p>
                <p className="text-[8px] font-bold text-white/40 tracking-widest uppercase mt-2">Alumni</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="aspect-square grayscale border border-white/10 overflow-hidden">
              <img
                src="https://jspmntc.edu.in/storage/Menus/ListMenu/3/1632652215TJSawant.jpeg"
                alt="Founder"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Minimal Corner Frame */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-white/20" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
