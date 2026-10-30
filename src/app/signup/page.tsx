'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cpu, Mail, Lock, User, Eye, EyeOff, ArrowLeft, CheckCircle2 } from 'lucide-react';
import MonkeyMascot from '../MonkeyMascot';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen circuit-grid bg-[#F8FAFC] flex flex-col justify-between p-6">
      <header className="max-w-7xl w-full mx-auto flex items-center justify-between">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E3A5F] hover:text-[#0D9488] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#1E3A5F] flex items-center justify-center text-teal-400">
            <Cpu className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-[#1E3A5F]">Fixora</span>
        </div>
      </header>

      <main className="w-full max-w-md mx-auto my-auto py-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="glass-card p-8 rounded-3xl shadow-xl space-y-4"
        >
          {/* Animated Cute Monkey Mascot */}
          <MonkeyMascot 
            isPasswordFocused={isPasswordFocused} 
            showPassword={showPassword} 
          />

          <div className="text-center space-y-1">
            <h1 className="text-2xl font-bold text-[#1F2937]">Create an Account</h1>
            <p className="text-xs text-[#6B7280]">Join Fixora to manage repairs and track device history.</p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3"
            >
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h2 className="text-base font-bold text-emerald-900">Account Created!</h2>
              <p className="text-xs text-emerald-700">You can now proceed to diagnose your devices.</p>
              <Link
                href="/diagnose"
                className="inline-block mt-2 px-6 py-2.5 bg-[#0D9488] text-white text-xs font-semibold rounded-xl hover:bg-[#0b7a70] transition-colors"
              >
                Go to Diagnosis
              </Link>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#1F2937] block">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0D9488] text-xs text-[#1F2937] bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#1F2937] block">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0D9488] text-xs text-[#1F2937] bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#1F2937] block">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onFocus={() => setIsPasswordFocused(true)}
                    onBlur={() => setIsPasswordFocused(false)}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0D9488] text-xs text-[#1F2937] bg-white transition-colors"
                  />
                  {/* Eye Toggle Icon */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0D9488] transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#1E3A5F] hover:bg-[#152a45] text-white font-semibold text-xs rounded-xl shadow-md transition-all duration-200 active:scale-[0.98] mt-2"
              >
                Sign Up
              </button>
            </form>
          )}

          <div className="text-center text-xs text-[#6B7280] pt-2">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-[#0D9488] hover:underline">
              Sign In
            </Link>
          </div>
        </motion.div>
      </main>

      <footer className="text-center text-xs text-[#6B7280] py-4">
        © Fixora. Verified Electronics Repair.
      </footer>
    </div>
  );
}