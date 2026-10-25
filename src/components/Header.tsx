/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onNavigate?: () => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  // Close drawer on path change
  useEffect(() => {
    setIsDrawerOpen(false);
    if (onNavigate) onNavigate();
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDrawerOpen]);

  const navItems = [
    { label: 'About Me', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Project', path: '/project' },
  ];

  const socialLinks = [
    { label: 'Twitter / X', url: 'https://x.com/Nabeelpervaiz76' },// twiter
    { label: 'GitHub', url: 'https://github.com/nabeelpervaiz-dev' }, // github account
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/nabeel-pervaiz/' },/// linkdin links
  ];

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8">
        {/* Brand / logo link (top-left) */}
        <Link
          to="/"
          className="font-hn text-2xl tracking-wide text-cream transition-opacity duration-300 hover:opacity-70 group flex items-center gap-2"
        >
          <span>Nabeel Pervaiz</span>
          <span className="text-[10px] tracking-widest uppercase opacity-40 group-hover:opacity-80 transition-opacity">
            · Portfolio
          </span>
        </Link>

        {/* Desktop right cluster */}
        <div className="hidden sm:flex items-start gap-12 lg:gap-20">
          {/* Year */}
          <span className="text-sm font-hn text-cream/70 pt-0.5">2026</span>

          {/* Navigation items */}
          <nav
            className="flex flex-col gap-1 text-sm font-hn"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive =
                item.path === '/project'
                  ? location.pathname === '/project' || location.pathname === '/projects'
                  : location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative transition-all duration-300 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-cream font-medium opacity-100'
                      : 'text-cream/60 hover:text-cream hover:opacity-100'
                  }`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cream inline-block animate-pulse" />
                  )}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Social column */}
          <div
            className="flex flex-col gap-1 text-sm font-hn"
            aria-label="Social Links"
          >
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/60 transition-opacity duration-300 hover:text-cream hover:opacity-100 flex items-center gap-1 group"
              >
                <span>{item.label}</span>
                <ArrowUpRight
                  size={12}
                  className="opacity-0 -translate-x-1 group-hover:opacity-80 group-hover:translate-x-0 transition-all"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Hamburger toggle button (sm:hidden, z-50 always on top) */}
        <button
          type="button"
          onClick={() => setIsDrawerOpen((prev) => !prev)}
          className="relative z-50 flex h-10 w-10 items-center justify-center p-2 text-cream sm:hidden focus:outline-none"
          aria-label={isDrawerOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={isDrawerOpen}
        >
          <div className="relative flex h-4 w-6 flex-col justify-between">
            <span
              className={`h-0.5 w-6 rounded-full bg-cream transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center ${
                isDrawerOpen ? 'translate-y-[7px] rotate-45' : 'translate-y-0 rotate-0'
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded-full bg-cream transition-opacity duration-300 ${
                isDrawerOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded-full bg-cream transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center ${
                isDrawerOpen ? '-translate-y-[7px] -rotate-45' : 'translate-y-0 rotate-0'
              }`}
            />
          </div>
        </button>
      </header>

      {/* Mobile Drawer (sm:hidden, z-40) */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-md transition-opacity duration-500 sm:hidden ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsDrawerOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`fixed top-0 right-0 bottom-0 z-40 flex w-[85%] max-w-sm flex-col justify-between bg-[#141414] px-8 py-10 transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] sm:hidden ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile Navigation"
      >
        {/* Close Button inside drawer */}
        <button
          type="button"
          onClick={() => setIsDrawerOpen(false)}
          className={`absolute top-6 right-6 p-2 text-cream transition-all duration-300 ${
            isDrawerOpen ? 'rotate-0 opacity-100 delay-300' : 'rotate-90 opacity-0'
          }`}
          aria-label="Close navigation drawer"
        >
          <X size={26} strokeWidth={1.5} />
        </button>

        {/* Site Index Section */}
        <div className="mt-12 flex flex-col gap-6">
          <span
            className={`text-xs font-medium tracking-[0.2em] uppercase text-cream/50 transition-all duration-500 ease-out ${
              isDrawerOpen
                ? 'translate-y-0 opacity-100 delay-[250ms]'
                : 'translate-y-4 opacity-0'
            }`}
          >
            Site Index
          </span>
          <nav className="flex flex-col gap-4">
            <Link
              to="/"
              onClick={() => setIsDrawerOpen(false)}
              className={`font-hn text-3xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                location.pathname === '/'
                  ? 'text-cream font-medium opacity-100'
                  : 'text-cream/60 hover:text-cream'
              } ${
                isDrawerOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-6 opacity-0'
              }`}
              style={{
                transitionDelay: isDrawerOpen ? '280ms' : '0ms',
              }}
            >
              Home
            </Link>

            {navItems.map((link, idx) => {
              const isActive =
                link.path === '/project'
                  ? location.pathname === '/project' || location.pathname === '/projects'
                  : location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsDrawerOpen(false)}
                  className={`font-hn text-3xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center justify-between ${
                    isActive
                      ? 'text-cream font-medium opacity-100'
                      : 'text-cream/60 hover:text-cream'
                  } ${
                    isDrawerOpen
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-6 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isDrawerOpen
                      ? `${340 + idx * 70}ms`
                      : '0ms',
                  }}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="text-xs uppercase tracking-widest text-cream/60">
                      Active
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Find Me Section */}
        <div className="mt-auto flex flex-col gap-4 pt-10">
          <span
            className={`text-xs font-medium tracking-[0.2em] uppercase text-cream/50 transition-all duration-500 ease-out ${
              isDrawerOpen
                ? 'translate-y-0 opacity-100 delay-[500ms]'
                : 'translate-y-4 opacity-0'
            }`}
          >
            Find Me
          </span>
          <div className="flex flex-col gap-2.5 text-sm">
            {socialLinks.map((social, idx) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsDrawerOpen(false)}
                className={`font-hn text-cream/80 hover:text-cream transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center justify-between ${
                  isDrawerOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isDrawerOpen
                    ? `${550 + idx * 60}ms`
                    : '0ms',
                }}
              >
                <span>{social.label}</span>
                <ArrowUpRight size={14} className="opacity-60" />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
