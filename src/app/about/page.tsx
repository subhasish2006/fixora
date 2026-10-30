'use client';

import React from 'react';
import Link from 'next/link';
import { Cpu, ArrowLeft, ShieldCheck, HeartHandshake, Leaf, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen circuit-grid bg-[#F8FAFC] pb-16">
      <header className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between border-b border-gray-200/60 bg-white/50 backdrop-blur-md">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E3A5F] hover:text-[#0D9488]">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#1E3A5F] flex items-center justify-center text-teal-400">
            <Cpu className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-[#1E3A5F]">Fixora Mission</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-12 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-[#1F2937]">Making Repair the First Choice</h1>
          <p className="text-base text-[#6B7280] max-w-2xl mx-auto">
            Fixora is built to reduce premature electronic replacement, lower local e-waste, and connect users with trusted, transparent repair technicians.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6 rounded-2xl space-y-3">
            <Leaf className="w-8 h-8 text-[#0D9488]" />
            <h3 className="text-lg font-bold text-[#1F2937]">E-Waste Reduction</h3>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              Every device repaired extends product lifecycles and keeps toxic electronic heavy metals out of local landfills.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#1E3A5F]" />
            <h3 className="text-lg font-bold text-[#1F2937]">Verified Local Network</h3>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              We vet and feature neighborhood electronics repair shops, supporting local campus communities and small businesses.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}