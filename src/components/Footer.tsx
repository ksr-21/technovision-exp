import React from 'react';

export default function Footer() {
  return (
    <footer className="py-24 px-8 md:px-24 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-24">
          <div>
            <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-12 uppercase">
              SHAPING THE <br />
              <span className="text-gray-500">FUTURE.</span>
            </h2>
            <button className="btn-minimal">
              ADMISSIONS 2026
            </button>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-8">Navigation</h4>
              <ul className="space-y-4">
                {['Admissions', 'Departments', 'Placements', 'Research', 'Contact'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-8">Social</h4>
              <ul className="space-y-4">
                {['LinkedIn', 'Twitter', 'Instagram', 'Email'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
          <div className="flex items-center gap-4">
            <span className="text-white font-black text-xl tracking-tighter">JSPM.</span>
            <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest">© 2026</span>
          </div>
          <div className="text-white/20 text-[10px] font-bold uppercase tracking-[0.4em]">
            NARHE TECHNICAL CAMPUS • PUNE • INDIA
          </div>
        </div>
      </div>
    </footer>
  );
}
