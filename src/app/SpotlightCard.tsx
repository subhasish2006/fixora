'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-3xl border border-teal-100/80 bg-white/80 backdrop-blur-md p-8 md:p-10 shadow-sm ${className}`}>
      
      {/* 1. Continuous Circular Orbiting Gradient Spotlight */}
      <motion.div
        animate={{
          x: ['0%', '45%', '0%', '-45%', '0%'],
          y: ['-45%', '0%', '45%', '0%', '-45%'],
          scale: [1, 1.15, 1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-r from-teal-400/35 via-emerald-400/25 to-cyan-400/35 blur-3xl pointer-events-none z-0"
      />

      {/* 2. Secondary Opposing Counter-Orbiting Glow */}
      <motion.div
        animate={{
          x: ['0%', '-45%', '0%', '45%', '0%'],
          y: ['45%', '0%', '-45%', '0%', '45%'],
          scale: [1.15, 1, 1.15, 1, 1.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-r from-[#0D9488]/30 via-teal-300/20 to-sky-400/25 blur-3xl pointer-events-none z-0"
      />

      {/* 3. Infinite Circular Tracing Border Beam */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -inset-[180%] pointer-events-none z-0 opacity-30"
        style={{
          background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 270deg, #0D9488 320deg, #2DD4BF 360deg)',
        }}
      />

      {/* Card Content Layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}