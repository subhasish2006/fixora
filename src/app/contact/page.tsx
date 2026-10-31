'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Cpu, ArrowLeft, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

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
          <span className="text-xl font-bold text-[#1E3A5F]">Fixora Contact</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-12 space-y-8">
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-extrabold text-[#1F2937]">Get in Touch</h1>
          <p className="text-xs text-[#6B7280]">Have questions about AI diagnostics or listed repair shops? Drop us a line.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl text-center space-y-2">
            <Mail className="w-6 h-6 text-[#0D9488] mx-auto" />
            <h3 className="text-sm font-bold text-[#1F2937]">Email Support</h3>
            <p className="text-xs text-[#6B7280]">support@fixora.in</p>
          </div>

          <div className="glass-card p-6 rounded-2xl text-center space-y-2">
            <Phone className="w-6 h-6 text-[#1E3A5F] mx-auto" />
            <h3 className="text-sm font-bold text-[#1F2937]">Helpline</h3>
            <p className="text-xs text-[#6B7280]">090321 31410</p>
          </div>

          <div className="glass-card p-6 rounded-2xl text-center space-y-2">
            <MapPin className="w-6 h-6 text-emerald-600 mx-auto" />
            <h3 className="text-sm font-bold text-[#1F2937]">Location</h3>
            <p className="text-xs text-[#6B7280]">Vijayawada - Amaravati Region</p>
          </div>
        </div>

        <div className="glass-card p-8 rounded-3xl shadow-sm max-w-xl mx-auto">
          {submitted ? (
            <div className="text-center space-y-3 py-6">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-bold text-emerald-900">Message Sent!</h3>
              <p className="text-xs text-emerald-700">Thanks for reaching out. Our team will respond shortly.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-[#1F2937] block mb-1">Your Name</label>
                <input required type="text" placeholder="John Doe" className="w-full p-3 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#0D9488]" />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#1F2937] block mb-1">Email Address</label>
                <input required type="email" placeholder="name@example.com" className="w-full p-3 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#0D9488]" />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#1F2937] block mb-1">Message</label>
                <textarea required rows={4} placeholder="How can we help you?" className="w-full p-3 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#0D9488] resize-none" />
              </div>
              <button type="submit" className="w-full py-3.5 bg-[#0D9488] hover:bg-[#0b7a70] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}