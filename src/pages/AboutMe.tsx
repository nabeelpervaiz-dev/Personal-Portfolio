/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Mail, Github, Linkedin, ArrowUpRight, Sparkles, MapPin, Code2 } from 'lucide-react';
import Footer from '../components/Footer.tsx';

// Clean SVG for Twitter / X
function TwitterXIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function AboutMe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const ctaBtnRef = useRef<HTMLAnchorElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const userEmail = 'nabeelpervaiz.dev@gmail.com';
  // const mailtoLink = `mailto:${userEmail}?subject=Let%27s%20Connect`;

  const mailtoLink = `mailto:${userEmail}?subject=${encodeURIComponent(
  "Let's Connect"
)}`;

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

      // Photo reveal
      if (photoRef.current) {
        gsap.fromTo(
          photoRef.current,
          { opacity: 0, scale: 0.96, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 1.1, delay: 0.15, ease: 'power3.out' }
        );
      }

      // Bio text reveal
      if (bioRef.current) {
        gsap.fromTo(
          bioRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 1, delay: 0.25, ease: 'power3.out' }
        );
      }

      // Button reveal
      if (ctaBtnRef.current) {
        gsap.fromTo(
          ctaBtnRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.45, ease: 'power3.out' }
        );
      }

      // Socials reveal
      if (socialsRef.current) {
        const links = socialsRef.current.querySelectorAll('.social-link-item');
        gsap.fromTo(
          links,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.7, delay: 0.55, ease: 'power2.out' }
        );
      }

      // Line expand
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 1, delay: 0.7, transformOrigin: 'left', ease: 'power3.inOut' }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const socialLinks = [
    {
      name: 'Twitter / X',
      url: 'https://x.com/Nabeelpervaiz76',
      icon: <TwitterXIcon size={18} />,
      handle: '@nabeelpervaiz',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/nabeelpervaiz-dev',
      icon: <Github size={18} />,
      handle: 'nabeelpervaiz-dev',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nabeel-pervaiz/',
      icon: <Linkedin size={18} />,
      handle: 'in/nabeelpervaiz',
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-[100dvh] w-full bg-[#050505] font-hn text-cream pt-28 pb-32 sm:pt-36 sm:pb-36 px-6 sm:px-10 flex flex-col justify-between"
    >
      {/* Background subtle noise / ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/15 via-[#050505] to-[#050505] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* Section kicker */}
        <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-widest uppercase text-cream/50">
          <span>01</span>
          <span className="w-8 h-[1px] bg-cream/30" />
          <span>About Me</span>
        </div>

        {/* Main headline */}
        <h1
          ref={headlineRef}
          className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-cream mb-12 sm:mb-16 leading-[1.08]"
        >
          Building interactive, <br />
          <span className="font-normal italic">thoughtful web experiences</span>.
        </h1>

        {/* 2-Column Split: Portrait & Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Portrait Column (5 cols) */}
          <div ref={photoRef} className="lg:col-span-5">
            <div className="relative group overflow-hidden rounded-2xl border border-cream/20 bg-[#121212] aspect-[3/4] max-w-md mx-auto lg:max-w-none shadow-2xl">
              <img
                src="/assets/aistudio/removed_bg_image-Photoroom_16e9b35b.png"
                alt="Nabeel Pervaiz"
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Badge on photo bottom */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-cream/90 backdrop-blur-md bg-black/50 px-4 py-2 rounded-xl border border-cream/15">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for new roles
                </span>
                <span className="text-cream/50 font-mono text-[11px]">Frontend Dev</span>
              </div>
            </div>
          </div>

          {/* Biography & CTA Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-8">
            {/* The exact requested introduction text */}
            <div ref={bioRef} className="space-y-6">
              <p className="text-xl sm:text-2xl font-light leading-relaxed text-cream/90 text-pretty">
                "I'm a passionate frontend developer focused on building modern, responsive, and interactive web experiences. I enjoy transforming ideas into clean, user-friendly interfaces using React, JavaScript, and modern styling techniques. I'm continuously improving my skills, learning new technologies, and building real-world projects to grow as a developer."
              </p>

              <div className="flex flex-wrap gap-6 pt-2 text-xs uppercase tracking-widest text-cream/50 font-mono">
                <span className="flex items-center gap-1.5">
                  <Code2 size={14} className="text-cream/70" /> React & Modern JS
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles size={14} className="text-cream/70" /> Clean UI & Motion
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-cream/70" /> Remote / Global
                </span>
              </div>
            </div>

            {/* Prominent "Connect With Me" button */}
            
<div className="pt-2">
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=nabeelpervaiz.dev@gmail.com&su=Let's%20Connect"
    target="_blank"
    rel="noopener noreferrer"
    className="connect-btn group relative inline-flex items-center justify-between gap-6 px-8 py-4 bg-cream text-[#050505] rounded-full font-hn font-medium text-base sm:text-lg tracking-wide transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(239,238,233,0.3)] hover:scale-[1.02] active:scale-[0.98]"
  >
    <span className="flex items-center gap-3">
      <Mail size={20} className="text-[#050505]" />
      <span>Connect With Me</span>
    </span>

    <ArrowUpRight
      size={20}
      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    />
  </a>

  <p className="text-xs text-cream/40 mt-2.5 font-mono">
    Opens Gmail to compose an email
  </p>
</div>


            {/* Social links directly in About Me */}
            <div className="pt-4 border-t border-cream/15">
              <span className="block text-xs font-mono uppercase tracking-widest text-cream/50 mb-4">
                Social Profiles & Networks
              </span>
              <div
                ref={socialsRef}
                className="grid grid-cols-1 sm:grid-cols-3 gap-3"
              >
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-item group flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-cream/10 hover:border-cream/40 hover:bg-white/[0.08] transition-all duration-300"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-cream/70 group-hover:text-cream transition-colors">
                        {item.icon}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-cream group-hover:underline">
                          {item.name}
                        </span>
                        <span className="text-[11px] text-cream/40 font-mono">
                          {item.handle}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-cream/30 group-hover:text-cream group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
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
