/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import Footer from '../components/Footer.tsx';

interface SkillItem {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  img: string; 
}

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const skills: SkillItem[] = [
    {
      id: 'html',
      name: 'HTML',
      category: 'Markup & Structure',
       img:'https://pngdownload.io/wp-content/uploads/2023/12/HTML5-Logo-PNG-Symbol-for-Web-Development-Transparent-jpg-768x806.webp',
      description:
        'Crafting semantic, accessible (WCAG AA), and search-engine optimized markup that forms robust document outlines.',
      tags: ['HTML5', 'Semantic Tags', 'ARIA', 'SEO & OpenGraph', 'Web Standards'],
    },
    {
      id: 'css',
      name: 'CSS',
      category: 'Styling & Layout',
       img:'https://pngdownload.io/wp-content/uploads/2023/12/CSS-Logo-PNG-Symbol-for-Web-Development-Transparent-jpg-975x1024.webp',
      description:
        'Modern layout orchestration with Flexbox and CSS Grid, custom properties, responsive design, animations, and typography.',
      tags: ['CSS3', 'Flexbox & Grid', 'Custom Properties', 'Responsive Design', 'Keyframes'],

    },
    {
      id: 'js',
      name: 'JavaScript',
      category: 'Core Logic & Scripting',
       img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlJiZlFwHkmOtwLwFSBvpMTZKDUGyVDzidEF9GkcrHhw&s=10',
      description:
        'Deep understanding of ES6+, DOM manipulation, asynchronous programming (Promises, async/await), and event loop mechanics.',
      tags: ['ES6+', 'Async / Await', 'DOM API', 'Data Structures', 'Modules'],
    },
    {
      id: 'react',
      name: 'React',
      category: 'UI Architecture',
       img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZHBHSBpt1CFUph03wiNAgd88F01UuszWvKP1lnD2jlIiS2pE-PHh57w&s=10',
      description:
        'Building high-performance component systems, custom hooks, predictable state management, and seamless SPA architectures.',
      tags: ['React 19', 'Custom Hooks', 'Virtual DOM', 'Component Architecture', 'Performance'],
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      category: 'Utility-First Systems',
      img:'https://explore-feed.github.com/topics/tailwind/tailwind.png',
      description:
        'Rapid, consistent design system implementation with Tailwind v4, custom theme tokens, modern responsive prefixes, and transitions.',
      tags: ['Tailwind v4', 'Design Tokens', 'Dark Theme', 'Responsive Grid', 'JIT Engine'],
     
    },
  ];

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Headline reveal
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
        );
      }

      // Staggered cards reveal
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.skill-card');
        gsap.fromTo(
          cards,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.85,
            delay: 0.2,
            ease: 'power2.out',
          }
        );
      }

      // Line expand
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1,
            delay: 0.75,
            transformOrigin: 'left',
            ease: 'power3.inOut',
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[100dvh] w-full bg-[#050505] font-hn text-cream pt-28 pb-32 sm:pt-36 sm:pb-36 px-6 sm:px-10 flex flex-col justify-between"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/40 via-[#050505] to-[#050505] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* Section kicker */}
        <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-widest uppercase text-cream/50">
          <span>02</span>
          <span className="w-8 h-[1px] bg-cream/30" />
          <span>Technical Capabilities</span>
        </div>

        {/* Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16">
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-6xl font-light tracking-tight text-cream leading-[1.1]"
          >
            Core Toolkit & <br />
            <span className="font-normal italic">Frontend Disciplines</span>
          </h1>
          <p className="max-w-md text-sm sm:text-base text-cream/70 font-light leading-relaxed">
            Focused on mastering the modern web standard: clean markup, bespoke styling systems, robust scripting, and component architecture.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className={`skill-card group relative p-6 sm:p-7 rounded-2xl bg-[#111111] border border-cream/15 hover:border-cream/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between ${
                index === 3 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Header: Icon & Category */}
                <div className="flex items-start justify-between mb-5">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-cream/10 text-cream group-hover:scale-105 transition-transform duration-300">
                    {/* {skill.iconSvg} */}
                    <img className='h-12 rounded' src={skill.img} alt="" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-cream/50">
                    {skill.category}
                  </span>
                </div>

                {/* Name */}
                <h2 className="text-2xl font-medium tracking-tight text-cream mb-2.5">
                  {skill.name}
                </h2>

                {/* Description */}
                <p className="text-sm text-cream/70 font-light leading-relaxed mb-6">
                  {skill.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-cream/10 flex flex-wrap gap-1.5">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono text-cream/60 bg-white/[0.03] px-2.5 py-1 rounded-md border border-cream/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Cream Line & Footer */}
      <div className="mt-20 w-full">
        <div
          ref={lineRef}
          className="w-full h-0.5 bg-cream mb-8"
          aria-hidden="true"
        />
        <Footer isAbsolute={false} className="px-0 pb-0 sm:px-0 sm:pb-0" />
      </div>
    </div>
  );
}
