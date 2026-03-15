import React from 'react';
import Header from '../components/Header';
import Founders from '../components/Founders';
import Departments from '../components/Departments';
import Leadership from '../components/Leadership';
import Footer from '../components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <Header />
      
      <main className="bg-black">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center px-8 md:px-24 relative overflow-hidden pt-20">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="text-[10px] font-bold tracking-[0.4em] text-white/60">WE ARE JSPM NTC</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl md:text-[120px] font-black text-white leading-[0.9] tracking-tighter mb-12"
            >
              THE FUTURE OF <br />
              <span className="text-white">TECHNOVISION.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <button className="btn-minimal">
                EXPLORE EVENTS
              </button>
            </motion.div>
          </div>

          {/* Pagination Indicators (Visual only) */}
          <div className="absolute bottom-12 left-8 flex gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/20'}`} />
            ))}
          </div>
        </section>

        <Founders />
        <div id="departments">
          <Departments />
        </div>
        <div id="leadership">
          <Leadership />
        </div>
      </main>

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
