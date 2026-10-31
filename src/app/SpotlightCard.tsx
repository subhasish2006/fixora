'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-3xl p-[2px] shadow-lg ${className}`}>
      
      {/* 1. High-Contrast 360° Spinning Conic Border Beam */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-[150%] -left-[150%] w-[400%] h-[400%] pointer-events-none z-0"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, #0D9488 310deg, #2DD4BF 340deg, #06B6D4 360deg)',
        }}
      />

      {/* 2. Orbiting Radial Glow Orbs */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="w-full h-full relative"
        >
          {/* Top Orbiting Glow */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-teal-400/35 blur-2xl" />
          {/* Bottom Orbiting Glow */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-[#1E3A5F]/30 blur-2xl" />
        </motion.div>
      </div>

      {/* 3. Inner White Shield (Protects readability while revealing glowing border edge) */}
      <div className="relative z-10 rounded-[22px] bg-white/95 backdrop-blur-md p-8 md:p-10 h-full w-full">
        {children}
      </div>
    </div>
  );
}