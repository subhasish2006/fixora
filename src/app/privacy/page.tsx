'use client';

import React from 'react';
import Link from 'next/link';
import { Cpu, ArrowLeft, ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPage() {
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
          <span className="text-xl font-bold text-[#1E3A5F]">Fixora Privacy</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-12 space-y-8">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#0D9488] flex items-center justify-center mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-extrabold text-[#1F2937]">Privacy Policy</h1>
          <p className="text-xs text-[#6B7280]">Last updated: October 2026 • Fixora AI Electronics Diagnostics</p>
        </div>

        <div className="glass-card p-8 rounded-3xl space-y-6 text-sm text-[#4B5563] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#1F2937] flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#0D9488]" /> 1. Uploaded Device Photos
            </h2>
            <p className="text-xs text-[#6B7280]">
              Photos uploaded to Fixora for diagnostic scanning are processed in memory to identify hardware defects. Photos are never sold, rented, or stored permanently without user consent.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#1F2937] flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#0D9488]" /> 2. Local Technician Matching
            </h2>
            <p className="text-xs text-[#6B7280]">
              When requesting repairs, only your general region (e.g., Vijayawada, Guntur, Amaravati) and device defect summary are shared with local repair shops to calculate estimates.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#1F2937] flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#0D9488]" /> 3. Data Protection Rights
            </h2>
            <p className="text-xs text-[#6B7280]">
              You hold full rights to clear your diagnostic history or delete your registered Fixora account at any time via your user dashboard.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}