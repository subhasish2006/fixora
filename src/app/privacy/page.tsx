'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Cpu, ArrowLeft, ShieldCheck, Lock, Eye, Database, 
  UserCheck, Bell, Server, HelpCircle, Mail 
} from 'lucide-react';

export default function PrivacyPage() {
  const sections = [
    {
      icon: <Eye className="w-5 h-5 text-[#0D9488]" />,
      title: "1. Information We Collect",
      content: "Fixora collects data strictly necessary to deliver accurate AI diagnostics and match you with regional repair centers. This includes uploaded device photos, selected fault descriptions, device specifications (brand and model), and approximate geographic region (e.g., Vijayawada, Guntur, Amaravati). We do not perform continuous background location tracking."
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#0D9488]" />,
      title: "2. AI Diagnostic Vision Processing",
      content: "Photos uploaded during the diagnostic flow are processed transiently through computer vision neural networks to detect physical screen cracks, liquid damage, battery swelling, or port degradation. These images are used solely to generate diagnostic reports and calculate estimated repair costs."
    },
    {
      icon: <Server className="w-5 h-5 text-[#0D9488]" />,
      title: "3. Local Repair Shop Matchmaking",
      content: "To generate accurate repair estimates, your diagnostic summary and device fault category are shared with verified technician partners in your vicinity. Your personally identifiable information (such as your full name or phone number) is never exposed to repair shops until you explicitly confirm a service booking."
    },
    {
      icon: <Lock className="w-5 h-5 text-[#0D9488]" />,
      title: "4. Encryption & Data Protection",
      content: "All photo uploads and API payloads are transmitted over SSL/TLS 256-bit encrypted channels. Session data and diagnostic history logs are tokenized to maintain user confidentiality across our database architecture."
    },
    {
      icon: <UserCheck className="w-5 h-5 text-[#0D9488]" />,
      title: "5. User Rights & Data Control",
      content: "You retain full ownership of your data. You can inspect, download, or permanently wipe your diagnostic scans and personal account records at any time directly through your user dashboard settings."
    },
    {
      icon: <Bell className="w-5 h-5 text-[#0D9488]" />,
      title: "6. Updates & Inquiries",
      content: "We periodically review this policy as Fixora adds new hardware diagnostic models or expands into new territories. Any structural policy revisions will be prominently announced on our platform header."
    }
  ];

  return (
    <div className="min-h-screen circuit-grid bg-[#F8FAFC] text-[#1F2937] pb-20">
      {/* Header Bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E3A5F] hover:text-[#0D9488] transition-colors">
            <ArrowLeft className="w-4 h-4" /> Return to Home
          </Link>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#1E3A5F] flex items-center justify-center text-teal-400 shadow-sm">
              <Cpu className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold text-[#1E3A5F] tracking-tight">Fixora</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-6 pt-12 space-y-10">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-[#0D9488] text-xs font-semibold">
            <ShieldCheck className="w-4 h-4" /> Verified Data Privacy Standard
          </div>
          <h1 className="text-4xl font-extrabold text-[#1E3A5F] tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-[#6B7280] max-w-xl mx-auto leading-relaxed">
            How Fixora safeguards your device hardware data, photo scans, and local technician interactions.
          </p>
          <div className="text-xs text-[#9CA3AF] font-medium">
            Effective Date: October 2026 • Fixora Platform Architecture
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-gray-200/80 shadow-xs space-y-1.5">
            <div className="text-xs font-bold text-[#1E3A5F] flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#0D9488]" /> Protected Uploads
            </div>
            <p className="text-xs text-[#6B7280]">Diagnostic photos are encrypted and never distributed to third parties.</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-gray-200/80 shadow-xs space-y-1.5">
            <div className="text-xs font-bold text-[#1E3A5F] flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#0D9488]" /> Shielded Contact
            </div>
            <p className="text-xs text-[#6B7280]">Local shop owners only receive contact information after booking approval.</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-gray-200/80 shadow-xs space-y-1.5">
            <div className="text-xs font-bold text-[#1E3A5F] flex items-center gap-2">
              <Database className="w-4 h-4 text-[#0D9488]" /> On-Demand Deletion
            </div>
            <p className="text-xs text-[#6B7280]">Instantly purge your diagnostic history directly from your user dashboard.</p>
          </div>
        </div>

        {/* Legal Clauses Card */}
        <div className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-gray-200/80 shadow-sm space-y-8">
          {sections.map((sec, idx) => (
            <div key={idx} className="space-y-2.5 border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-teal-50">
                  {sec.icon}
                </div>
                <h2 className="text-base font-bold text-[#1E3A5F]">{sec.title}</h2>
              </div>
              <p className="text-xs text-[#4B5563] leading-relaxed pl-11">
                {sec.content}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Banner */}
        <div className="bg-[#1E3A5F] text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-base font-bold flex items-center justify-center md:justify-start gap-2">
              <HelpCircle className="w-5 h-5 text-teal-400" /> Have privacy questions?
            </h3>
            <p className="text-xs text-gray-300">
              Get in touch with our team for questions about data handling or local shop verification.
            </p>
          </div>
          <Link href="/contact" className="px-5 py-3 bg-[#0D9488] hover:bg-[#0b7a70] text-white text-xs font-semibold rounded-xl transition-all shadow-sm flex items-center gap-2 whitespace-nowrap">
            <Mail className="w-4 h-4" /> Contact Team
          </Link>
        </div>
      </main>
    </div>
  );
}