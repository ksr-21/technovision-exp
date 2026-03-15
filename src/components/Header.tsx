import React from 'react';
import { motion } from 'motion/react';

export default function Header() {
  return (
    <header className="w-full bg-black/80 backdrop-blur-md border-b border-white/5 py-4 px-8 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-6"
        >
          <img
            src="https://jspmntc.edu.in/storage/Menus/ListMenu/20/1750230968jspm1.webp"
            alt="JSPM Logo"
            className="h-8 w-auto invert brightness-0 grayscale"
            referrerPolicy="no-referrer"
          />
          <img
            src="https://jspmntc.edu.in/storage/Menus/ListMenu/20/17502310382Logo.png"
            alt="Campus Logo"
            className="h-8 w-auto invert brightness-0 grayscale"
            referrerPolicy="no-referrer"
          />
          <span className="text-[10px] font-black tracking-[0.3em] text-white ml-2 hidden sm:inline">JSPM NTC</span>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {['HOME', 'DEPARTMENTS', 'LEADERSHIP', 'CONTACT'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] font-bold tracking-[0.2em] text-gray-500 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-[10px] font-bold tracking-[0.2em]">LIVE 2026</span>
        </div>
      </div>
    </header>
  );
}
