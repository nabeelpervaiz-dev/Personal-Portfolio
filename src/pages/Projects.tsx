/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ExternalLink, Github, CheckCircle2, Search, Utensils, Users, ListTodo, ShieldCheck } from 'lucide-react';
import Footer from '../components/Footer.tsx';

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  featuredBadge?: string;
  previewUi: React.ReactNode;
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: 'Employee Task Management System',
      category: 'React Application',
      description:
        'A React-based Employee Task Management System built to practice and strengthen my React concepts. The project focuses on component-based architecture, props, state management, Context API, and task assignment workflows.',
      tags: ['React', 'Context API', 'State Management', 'Props Architecture', 'Tailwind CSS'],
      liveDemoUrl: 'https://nabeelpervaiz-dev.github.io/Employee-Management-Project/',
      githubUrl: 'https://github.com/nabeelpervaiz-dev/Employee-Management-Project',
      featuredBadge: 'React · Role-Based Workflow',
      previewUi: (
        <div className="w-full h-full p-4 sm:p-5 flex flex-col justify-between bg-gradient-to-br from-[#161618] to-[#09090b] text-cream">
          {/* Mock Header */}
          <div className="flex items-center justify-between pb-3 border-b border-cream/10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cream/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-cream/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-cream/20" />
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.04] text-[11px] font-mono text-cream/60">
              <ShieldCheck size={11} className="text-cream/80" />
              <span>admin-portal / task-hub</span>
            </div>
          </div>

          {/* Mock Tasks View */}
          <div className="my-auto py-3 space-y-2 text-left">
            <div className="flex items-center justify-between text-xs px-1">
              <span className="font-mono text-[11px] text-cream/50">ACTIVE ASSIGNMENTS</span>
              <span className="text-[10px] text-cream/70 bg-cream/10 px-2 py-0.5 rounded font-mono">
                Admin Mode
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-cream/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ListTodo size={14} className="text-cream/70" />
                <div>
                  <div className="text-xs font-medium text-cream">Responsive Nav Redesign</div>
                  <div className="text-[10px] text-cream/50">Assigned: Alex M. · Due Today</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/30">
                In Progress
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-cream/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <div>
                  <div className="text-xs font-medium text-cream">Context API Error Boundary</div>
                  <div className="text-[10px] text-cream/50">Assigned: Sarah K. · Verified</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
                Completed
              </span>
            </div>
          </div>

          {/* Mock Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-cream/10 text-[11px] font-mono text-cream/50">
            <span className="flex items-center gap-1.5">
              <Users size={12} /> Multi-user Roles
            </span>
            <span>Task Orchestration</span>
          </div>
        </div>
      ),
    },
    {
      title: 'Recipe Finder',
      category: 'Vanilla JavaScript Application',
      description:
        'A JavaScript-based Recipe Finder application built to practice API data fetching and dynamically displaying recipe information. The project helped me understand how to retrieve data from an API and present it through an interactive user interface.',
      tags: ['Vanilla JavaScript', 'Fetch API', 'DOM Manipulation', 'Async/Await', 'Responsive UI'],
      liveDemoUrl: 'https://nabeelpervaiz-dev.github.io/Recipe-Finder-/',
      githubUrl: 'https://github.com/nabeelpervaiz-dev/Recipe-Finder-',
      featuredBadge: 'Vanilla JS · API Driven',
      previewUi: (
        <div className="w-full h-full p-4 sm:p-5 flex flex-col justify-between bg-gradient-to-br from-[#18181b] to-[#0c0c0e] text-cream">
          {/* Mock Browser Header */}
          <div className="flex items-center justify-between pb-3 border-b border-cream/10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cream/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-cream/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-cream/20" />
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.04] text-[11px] font-mono text-cream/60">
              <Utensils size={11} className="text-cream/80" />
              <span>recipe-finder.js</span>
            </div>
          </div>

          {/* Mock App Content */}
          <div className="my-auto py-3 space-y-3">
            {/* Search Bar */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.05] border border-cream/15 text-xs text-cream/70">
              <Search size={14} className="text-cream/40" />
              <span>Search ingredients, cuisines, or dishes...</span>
            </div>

            {/* Recipe cards preview */}
            <div className="grid grid-cols-2 gap-2 text-left">
              <div className="p-2.5 rounded-lg bg-white/[0.03] border border-cream/10">
                <div className="h-14 rounded bg-amber-950/30 border border-amber-500/20 mb-2 flex items-center justify-center text-[10px] font-mono text-amber-300">
                  Mediterranean Bowl
                </div>
                <div className="text-[11px] font-medium text-cream truncate">Avocado Salad</div>
                <div className="text-[10px] text-cream/50">20 mins · 4 Ingredients</div>
              </div>

              <div className="p-2.5 rounded-lg bg-white/[0.03] border border-cream/10">
                <div className="h-14 rounded bg-emerald-950/30 border border-emerald-500/20 mb-2 flex items-center justify-center text-[10px] font-mono text-emerald-300">
                  Quick Entree
                </div>
                <div className="text-[11px] font-medium text-cream truncate">Sesame Teriyaki</div>
                <div className="text-[10px] text-cream/50">35 mins · Asian Fusion</div>
              </div>
            </div>
          </div>

          {/* Mock Status */}
          <div className="flex items-center justify-between pt-2 border-t border-cream/10 text-[11px] font-mono text-cream/50">
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              API Connected
            </span>
            <span>Vanilla JS Fetch</span>
          </div>
        </div>
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
        const cards = cardsRef.current.querySelectorAll('.project-card');
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.9,
            delay: 0.2,
            ease: 'power3.out',
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
            delay: 0.7,
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
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/40 via-[#050505] to-[#050505] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* Section kicker */}
        <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-widest uppercase text-cream/50">
          <span>03</span>
          <span className="w-8 h-[1px] bg-cream/30" />
          <span>Selected Projects</span>
        </div>

        {/* Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16">
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-6xl font-light tracking-tight text-cream leading-[1.1]"
          >
            Featured Works & <br />
            <span className="font-normal italic">Interactive Applications</span>
          </h1>
          <p className="max-w-md text-sm sm:text-base text-cream/70 font-light leading-relaxed">
            Real-world software built with clean React principles, vanilla JavaScript, API data streams, and thoughtful user workflows.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card group relative rounded-2xl bg-[#111111] border border-cream/15 hover:border-cream/40 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
            >
              {/* Thumbnail / Visual UI Showcase */}
              <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-cream/10 bg-black">
                {project.previewUi}
                {project.featuredBadge && (
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-cream/20 text-[10px] font-mono uppercase tracking-wider text-cream/90">
                    {project.featuredBadge}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-cream/50 mb-2">
                    {project.category}
                  </div>
                  <h2 className="text-2xl font-medium tracking-tight text-cream mb-3">
                    {project.title}
                  </h2>
                  <p className="text-sm text-cream/70 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags & Action Links */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono text-cream/60 bg-white/[0.03] px-2.5 py-1 rounded-md border border-cream/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-cream/10">
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream text-[#050505] text-xs font-medium tracking-wide transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95 shadow-[0_2px_10px_rgba(239,238,233,0.2)]"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={13} />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-cream/20 text-cream text-xs font-medium tracking-wide transition-all duration-300 hover:border-cream/60 hover:bg-white/[0.1]"
                      >
                        <Github size={13} />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
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
