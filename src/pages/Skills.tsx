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
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-cream" aria-hidden="true">
          <path d="M12 2L3 5.5v13L12 22l9-3.5v-13L12 2zm6.2 5.2l-.7 8.3-5.5 2.1-5.5-2.1-.7-8.3h12.4zm-2.2 2.5H8.3l.2 2.3h5.2l-.3 3.2-1.4.4-1.4-.4-.1-1.3H9.2l.2 2.4 2.6.8 2.6-.8.5-5.3H9.8l-.1-1.3h6.5l-.2 0z" />
        </svg>
      ),
    },
    {
      id: 'css',
      name: 'CSS',
      category: 'Styling & Layout',
       img:'https://pngdownload.io/wp-content/uploads/2023/12/CSS-Logo-PNG-Symbol-for-Web-Development-Transparent-jpg-975x1024.webp',
      description:
        'Modern layout orchestration with Flexbox and CSS Grid, custom properties, responsive design, animations, and typography.',
      tags: ['CSS3', 'Flexbox & Grid', 'Custom Properties', 'Responsive Design', 'Keyframes'],
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-cream" aria-hidden="true">
          <path d="M12 2L3 5.5v13L12 22l9-3.5v-13L12 2zm6.2 5.2l-.7 8.3-5.5 2.1-5.5-2.1-.7-8.3h12.4zm-2.2 2.5H8.3l.2 2.3h5.2l-.3 3.2-1.4.4-1.4-.4-.1-1.3H9.2l.2 2.4 2.6.8 2.6-.8.5-5.3H8.5l-.2-2.3h7.9l-.2 2.3z" />
        </svg>
      ),
    },
    {
      id: 'js',
      name: 'JavaScript',
      category: 'Core Logic & Scripting',
       img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlJiZlFwHkmOtwLwFSBvpMTZKDUGyVDzidEF9GkcrHhw&s=10',
      description:
        'Deep understanding of ES6+, DOM manipulation, asynchronous programming (Promises, async/await), and event loop mechanics.',
      tags: ['ES6+', 'Async / Await', 'DOM API', 'Data Structures', 'Modules'],
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-cream" aria-hidden="true">
          <path d="M3 3h18v18H3V3zm13.7 13.9c.7 0 1.3-.3 1.7-.8.3-.4.4-.9.4-1.6h2c0 1.2-.4 2.2-1.2 2.9-.8.7-1.8 1.1-3 1.1-1.2 0-2.2-.4-2.9-1.2-.7-.8-1.1-1.9-1.1-3.3 0-1.5.4-2.6 1.2-3.4.8-.8 1.8-1.2 3.1-1.2 1.1 0 2 .3 2.7 1 .7.6 1.1 1.5 1.1 2.6h-2c0-.6-.2-1.1-.5-1.4-.4-.3-.9-.5-1.5-.5-.7 0-1.3.3-1.7.8-.4.5-.6 1.3-.6 2.3 0 1.1.2 1.9.6 2.4.4.5 1 .7 1.8.7zm-6.8 1.5H8.2c-.4 0-.7-.1-.9-.3-.2-.2-.3-.5-.3-.9V12h1.8v4.9c0 .2 0 .3.1.4.1.1.2.1.4.1h.6v1.9z" />
        </svg>
      ),
    },
    {
      id: 'react',
      name: 'React',
      category: 'UI Architecture',
       img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZHBHSBpt1CFUph03wiNAgd88F01UuszWvKP1lnD2jlIiS2pE-PHh57w&s=10',
      description:
        'Building high-performance component systems, custom hooks, predictable state management, and seamless SPA architectures.',
      tags: ['React 19', 'Custom Hooks', 'Virtual DOM', 'Component Architecture', 'Performance'],
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-cream" aria-hidden="true">
          <ellipse cx="12" cy="12" rx="3" ry="3" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            transform="rotate(30 12 12)"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            transform="rotate(90 12 12)"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            transform="rotate(150 12 12)"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
      ),
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      category: 'Utility-First Systems',
      img:'https://explore-feed.github.com/topics/tailwind/tailwind.png',
      description:
        'Rapid, consistent design system implementation with Tailwind v4, custom theme tokens, modern responsive prefixes, and transitions.',
      tags: ['Tailwind v4', 'Design Tokens', 'Dark Theme', 'Responsive Grid', 'JIT Engine'],
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-cream" aria-hidden="true">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      ),
      
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
