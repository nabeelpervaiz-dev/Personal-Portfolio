/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface FooterProps {
  className?: string;
  isAbsolute?: boolean;
}

export default function Footer({ className = '', isAbsolute = true }: FooterProps) {
  return (
    <footer
      className={`${
        isAbsolute ? 'absolute inset-x-0 bottom-0 z-30 sm:z-10' : 'relative z-10 w-full'
      } flex items-end justify-between px-6 pb-5 font-hn text-xs leading-relaxed text-cream sm:px-10 sm:pb-8 sm:text-sm ${className}`}
    >
      {/* Footer left (three lines) */}
      <div className="text-left font-light tracking-wide text-cream/80">
        <div>Frontend Developer</div>
        <div>Digital Crafter</div>
        <div>Interactive UI & React</div>
      </div>

      {/* Footer right (two lines, right-aligned) */}
      <div className="text-right font-light tracking-wide text-cream/80">
        <div>Portfolio 2026</div>
        <div className="font-normal text-cream">Nabeel Pervaiz</div>
      </div>
    </footer>
  );
}
