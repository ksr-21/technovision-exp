/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DepartmentDetail from './pages/DepartmentDetail';
import ThreeScene from './components/ThreeScene';
import CursorEffect from './components/CursorEffect';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans selection:bg-white selection:text-black cursor-none bg-black">
        <CursorEffect />
        
        {/* 3D Background */}
        <ThreeScene />

        {/* Main Content */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/department/:id" element={<DepartmentDetail />} />
          </Routes>
        </div>

        {/* Minimal Accents */}
        <div className="fixed inset-0 pointer-events-none z-20">
          <div className="absolute top-8 left-8 w-8 h-[1px] bg-white/20" />
          <div className="absolute top-8 left-8 w-[1px] h-8 bg-white/20" />

          <div className="absolute top-8 right-8 w-8 h-[1px] bg-white/20" />
          <div className="absolute top-8 right-8 w-[1px] h-8 bg-white/20" />
        </div>
      </div>
    </Router>
  );
}
