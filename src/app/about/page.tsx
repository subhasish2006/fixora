'use client';

import React from 'react';
import Link from 'next/link';
import { Cpu, ArrowLeft, Sparkles, Wrench, ShieldCheck, Heart } from 'lucide-react';

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
          <span className="text-xl font-bold text-[#1E3A5F]">Fixora About</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-12 space-y-8">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#0D9488] flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-extrabold text-[#1F2937]">About Fixora</h1>
          <p className="text-xs text-[#6B7280]">Connecting AI diagnostics with verified local electronics technicians.</p>
        </div>

        <div className="glass-card p-8 rounded-3xl space-y-6 text-sm text-[#4B5563] leading-relaxed shadow-sm">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#1F2937] flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#0D9488]" /> Our Mission
            </h2>
            <p className="text-xs text-[#6B7280]">
              Fixora empowers users to extend the life of their electronic devices instead of discarding them. By pairing instant AI vision analysis with verified local repair shops in Vijayawada, Guntur, and Amaravati, we make device repair transparent, reliable, and accessible.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#1F2937] flex items-center gap-2">
              <Wrench className="w-4 h-4 text-[#0D9488]" /> Verified Local Network
            </h2>
            <p className="text-xs text-[#6B7280]">
              We curate Google Maps-verified local service centers based on authentic user ratings and specialized component-level capabilities.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#1F2937] flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#0D9488]" /> Sustainable Future
            </h2>
            <p className="text-xs text-[#6B7280]">
              Every device repaired prevents electronic waste and reduces carbon footprint across our communities.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}