import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const departments = [
  { id: 'aids', name: 'AI & DS', fullName: 'AI & Data Science', date: 'MARCH 15, 2026', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400' },
  { id: 'civil', name: 'Civil', fullName: 'Civil Engineering', date: 'MARCH 15, 2026', image: 'https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80&w=400' },
  { id: 'computer', name: 'Computer', fullName: 'Computer Engineering', date: 'MARCH 16, 2026', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400' },
  { id: 'etc', name: 'E&TC', fullName: 'Electronics & Telecomm', date: 'MARCH 16, 2026', image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=400' },
  { id: 'fe', name: 'FE', fullName: 'First Year Engineering', date: 'MARCH 17, 2026', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400' },
  { id: 'mba', name: 'MBA', fullName: 'Business Administration', date: 'MARCH 17, 2026', image: 'https://images.unsplash.com/photo-1454165833767-027ffea7025c?auto=format&fit=crop&q=80&w=400' },
  { id: 'mca', name: 'MCA', fullName: 'Computer Applications', date: 'MARCH 18, 2026', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400' },
  { id: 'mech', name: 'Mech', fullName: 'Mechanical Engineering', date: 'MARCH 18, 2026', image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=400' },
];

export default function Departments() {
  return (
    <section className="py-32 px-8 md:px-24 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-black text-white mb-24 tracking-tighter uppercase">
          DEPARTMENTS
        </h2>

        <div className="flex flex-col">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group border-b border-white/10 py-12 flex flex-col md:flex-row items-start md:items-center gap-12"
            >
              <div className="flex-1">
                <p className="text-[10px] font-bold text-white/40 tracking-[0.2em] mb-4 uppercase">{dept.date}</p>
                <h3 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tighter uppercase group-hover:text-gray-300 transition-colors leading-tight">
                  {dept.name}
                </h3>
                <p className="text-[10px] font-bold text-white/40 tracking-[0.2em] mb-8 uppercase">{dept.fullName}</p>
                
                <Link to={`/department/${dept.id}`}>
                  <button className="btn-minimal">EXPLORE DEPARTMENT</button>
                </Link>
              </div>

              <div className="w-full md:w-80 h-48 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/10">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
