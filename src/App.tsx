/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import Header from './components/Header.tsx';
import Hero from './pages/Hero.tsx';
import AboutMe from './pages/AboutMe.tsx';
import Skills from './pages/Skills.tsx';
import Projects from './pages/Projects.tsx';

function PageTransitionWrapper() {
  const location = useLocation();
  const pageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' });

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    if (pageContainerRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          pageContainerRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
        );
      }, pageContainerRef);

      return () => ctx.revert();
    }
  }, [location.pathname]);

  return (
    <div ref={pageContainerRef} className="w-full">
      <Routes location={location}>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Hero />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-[100dvh] w-full bg-[#050505] font-hn text-cream antialiased selection:bg-cream selection:text-black">
        <Header />
        <main className="w-full">
          <PageTransitionWrapper />
        </main>
      </div>
    </BrowserRouter>
  );
}
