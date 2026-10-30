'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cpu, Clock, CheckCircle2, ArrowRight, Wrench, ArrowLeft, User } from 'lucide-react';

export default function DashboardPage() {
  const history = [
    {
      id: 'FIX-8921',
      device: 'iPhone 13 Pro',
      issue: 'Lithium Battery Degradation',
      date: 'Oct 28, 2026',
      status: 'Completed',
      cost: '₹1,800',
      technician: 'Apex iFix Hub',
    },
    {
      id: 'FIX-7402',
      device: 'MacBook Air M1',
      issue: 'Display Backlight Flickering',
      date: 'Sep 14, 2026',
      status: 'Diagnosed Only',
      cost: '₹3,200 (Est.)',
      technician: 'N/A',
    },
  ];

  return (
    <div className="min-h-screen circuit-grid bg-[#F8FAFC] pb-12">
      <header className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between border-b border-gray-200/60 bg-white/50 backdrop-blur-md">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E3A5F] hover:text-[#0D9488]">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#1E3A5F] flex items-center justify-center text-teal-400">
            <Cpu className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-[#1E3A5F]">Fixora</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-10 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#1F2937]">User Dashboard</h1>
            <p className="text-xs text-[#6B7280]">Track your active repair quotes and diagnostic history.</p>
          </div>
          <Link
            href="/diagnose"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0D9488] hover:bg-[#0b7a70] text-white text-xs font-semibold rounded-xl shadow-md transition-all"
          >
            <span>New Diagnosis</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl">
            <span className="text-xs font-medium text-[#6B7280]">Saved E-Waste Impact</span>
            <div className="text-3xl font-extrabold text-[#0D9488] mt-2">1.4 kg</div>
            <p className="text-xs text-gray-400 mt-1">2 devices kept out of landfills</p>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <span className="text-xs font-medium text-[#6B7280]">Estimated Savings</span>
            <div className="text-3xl font-extrabold text-[#1E3A5F] mt-2">₹14,200</div>
            <p className="text-xs text-gray-400 mt-1">Compared to new device purchases</p>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <span className="text-xs font-medium text-[#6B7280]">Total Diagnostics</span>
            <div className="text-3xl font-extrabold text-[#1F2937] mt-2">2 Reports</div>
            <p className="text-xs text-gray-400 mt-1">1 active technician match</p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 space-y-4">
          <h2 className="text-base font-bold text-[#1F2937]">Recent Diagnostic History</h2>
          <div className="divide-y divide-gray-100">
            {history.map((item) => (
              <div key={item.id} className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0D9488] flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-[#1F2937]">{item.device}</h3>
                      <span className="text-[10px] font-mono bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{item.id}</span>
                    </div>
                    <p className="text-xs text-[#6B7280]">{item.issue} • {item.date}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-6">
                  <div className="text-right">
                    <span className="text-xs font-bold text-[#1E3A5F] block">{item.cost}</span>
                    <span className="text-[11px] text-emerald-600 font-medium">{item.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}