/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer.tsx';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Rise & settle centered portrait image
      if (portraitRef.current) {
        gsap.fromTo(
          portraitRef.current,
          { opacity: 0, scale: 0.96, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.4,
            delay: 0.25,
            ease: 'power3.out',
          }
        );
      }

      // 2. Fade up Marquee wrapper
      if (marqueeRef.current) {
        gsap.fromTo(
          marqueeRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.45,
            ease: 'power2.out',
          }
        );
      }

      // 3. Reveal bottom bar (title & links directly above divider)
      if (bottomBarRef.current) {
        gsap.fromTo(
          bottomBarRef.current,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            delay: 0.75,
            ease: 'power2.out',
          }
        );
      }

      // 4. Expand horizontal cream rule
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.1,
            delay: 0.95,
            transformOrigin: 'left',
            ease: 'power3.inOut',
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[100dvh] w-full overflow-hidden bg-[#050505] select-none font-hn text-cream"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/40 via-[#050505] to-[#050505] pointer-events-none" />

      {/* 1. Marquee name (z-10, rolling behind centered portrait) */}
      <div
        ref={marqueeRef}
        className="pointer-events-none absolute inset-x-0 top-[13vh] z-10 overflow-hidden sm:top-[11vh] lg:top-[10vh]"
        aria-hidden="true"
      >
        <div className="marquee flex w-max whitespace-nowrap font-hn text-[15vh] leading-none text-cream select-none sm:text-[23vh] lg:text-[26vh] font-normal tracking-tight">
          <span className="pr-[6vw]">Nabeel Pervaiz &mdash;&nbsp;</span>
          <span className="pr-[6vw]">Nabeel Pervaiz &mdash;&nbsp;</span>
        </div>
      </div>

      {/* 2. Main Visual Focus: Center Portrait anchored from bottom (z-20) */}
      <div
        ref={portraitRef}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center items-end"
      >
        <div className="relative h-[87vh] sm:h-[80vh] w-auto max-w-[96vw] sm:max-w-2xl flex items-end justify-center">
          <img
            src="/assets/aistudio/removed_bg_image-Photoroom_16e9b35b.png"
            alt="Nabeel Pervaiz"
            className="h-full w-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
          />
        </div>
      </div>

      {/* 3. Bottom Area: Title and Projects Link directly above horizontal ruler (z-30) */}
      <div
        ref={bottomBarRef}
        className="absolute inset-x-6 sm:inset-x-10 bottom-[6.25rem] sm:bottom-[7.75rem] z-30 pointer-events-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6"
      >
        {/* Animated Title: "Frontend Developer" with rounded slightly transparent background */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-cream/20 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-cream animate-pulse shadow-[0_0_8px_rgba(239,238,233,0.8)]" />
          <span className="text-xs sm:text-sm font-hn uppercase tracking-[0.25em] text-cream font-medium">
            Frontend Developer
          </span>
        </div>

        {/* Associated Projects Link */}
        <Link
          to="/project"
          className="group inline-flex items-center gap-2 text-xs sm:text-sm font-hn uppercase tracking-widest text-cream/70 hover:text-cream transition-colors duration-300 py-1"
        >
          <span>View Featured Projects</span>
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>

      {/* 4. Horizontal cream rule (z-10, above footer) */}
      <div
        ref={lineRef}
        className="absolute inset-x-6 bottom-[5.5rem] z-10 h-0.5 bg-cream sm:inset-x-10 sm:bottom-28"
        aria-hidden="true"
      />

      {/* 5. Footer (z-30 on mobile, sm:z-10 on desktop) */}
      <Footer isAbsolute={true} />
    </section>
  );
}
