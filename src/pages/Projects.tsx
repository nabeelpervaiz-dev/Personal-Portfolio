/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ExternalLink, Github, CheckCircle2, Search, Utensils, Users, ListTodo, ShieldCheck } from 'lucide-react';
import Footer from '../components/Footer.tsx';
import { img } from 'motion/react-client';

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  featuredBadge?: string;
  img:string;
  // previewUi: React.ReactNode;
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
        'A React-based Employee Task Management System built to practice and strengthen my React concepts. The project focuses on    component-based architecture, props, state management, Context API, and task assignment workflows. Admin: admin1@me.com  & Employee:qaiser@me.com or diya@me.com and password is (123) for all using LocalStorage ',
      tags: ['React', 'Context API', 'State Management', 'Props Architecture', 'Tailwind CSS'],
      liveDemoUrl: 'https://nabeelpervaiz-dev.github.io/Employee-Management-Project/',
      githubUrl: 'https://github.com/nabeelpervaiz-dev/Employee-Management-Project',
      featuredBadge: 'React · Role-Based Workflow',
      img:'/images/EMS.png'
    },
    {
      title: 'Recipe Finder',
      category: 'Vanilla JavaScript Application',
      description:
        'A JavaScript-based Recipe Finder application built to practice API data fetching and dynamically displaying recipe information. The project helped me understand how to retrieve data from an API and present it through an interactive user interface. To Test : Enter recipe item e.g: rice, chicken, chocolate etc.',
      tags: ['Vanilla JavaScript', 'Fetch API', 'DOM Manipulation', 'Async/Await', 'Responsive UI'],
      liveDemoUrl: 'https://nabeelpervaiz-dev.github.io/Recipe-Finder-/',
      githubUrl: 'https://github.com/nabeelpervaiz-dev/Recipe-Finder-',
      featuredBadge: 'Vanilla JS · API Driven',
       img:'/images/res.jpeg'
     
    },
    {
  title: 'Weather App',
  category: 'React.js Application',
  description:
    'A responsive Weather Application built with React.js that fetches real-time weather information using the OpenWeather API and Axios. Users can search for a city to view its current weather conditions. This project helped me practice API integration, asynchronous data fetching, React state management, and conditional rendering.',
  tags: [
    'React.js',
    'OpenWeather API',
    'Axios',
    'Async/Await',
    'useState',
    'useEffect',
    'Tailwind CSS'
  ],
  liveDemoUrl: 'https://nabeelpervaiz-dev.github.io/OpenWeather/',
  githubUrl: 'https://github.com/nabeelpervaiz-dev/OpenWeather',
  featuredBadge: 'React · API Integration',
   img:'/images/weather.jpeg'
},
{
  title: 'Password Generator',
  category: 'React.js Application',
  description:
    'A simple and interactive Password Generator built with React.js that generates random passwords based on user preferences. Developed to practice React hooks, component state management, and performance optimization using useEffect, useCallback, and useRef.',
  tags: [
    'React.js',
    'useState',
    'useEffect',
    'useCallback',
    'useRef',
    'React Hooks',
    'Tailwind CSS'
  ],
  liveDemoUrl: 'https://nabeelpervaiz-dev.github.io/Password-Generator/',
  githubUrl: 'https://github.com/nabeelpervaiz-dev/Password-Generator',
  featuredBadge: 'React · Hooks Practice',
   img:'/images/passwordmin.jpeg'
},
{
  title: 'BMI Calculator',
  category: 'React.js Application',
  description:
    'A lightweight BMI Calculator built with React.js that calculates Body Mass Index based on user-provided height and weight. It displays the calculated BMI score along with a basic weight classification, helping users understand their BMI category. This project helped me practice React state management, event handling, and conditional rendering.',
  tags: [
    'React.js',
    'JavaScript',
    'useState',
    'Event Handling',
    'Conditional Rendering',
    'Tailwind CSS'
  ],
  liveDemoUrl: 'https://nabeelpervaiz-dev.github.io/BMI-Calculator/',
  githubUrl: 'https://github.com/nabeelpervaiz-dev/BMI-Calculator',
  featuredBadge: 'React · Logic & State',
   img:'/images/BMI.jpeg'
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
            Featured Works 
           
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
              <div className="relative">
               <img src={project.img} alt="" />
               {/* <img src={`${import.meta.env.BASE_URL}${project.img}`} */}
                 {/* alt={project.title}  /> */}
        
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
