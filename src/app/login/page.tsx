'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cpu, ArrowLeft, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import MonkeyMascot from '../MonkeyMascot';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-900 flex flex-col justify-between p-6">
      
      {/* Cool Animated Background Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#1E3A5F]/60 blur-3xl"
        />
        <motion.div 
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 -right-20 w-[30rem] h-[30rem] rounded-full bg-[#0D9488]/40 blur-3xl"
        />
        <motion.div 
          animate={{
            scale: [1, 1.25, 1],
            x: [0, 40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-20 left-1/4 w-96 h-96 rounded-full bg-cyan-500/25 blur-3xl"
        />
        <div className="absolute inset-0 opacity-10 circuit-grid" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between max-w-7xl mx-auto w-full">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-200 hover:text-teal-400 transition-colors bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#1E3A5F] flex items-center justify-center text-teal-400 shadow-md border border-teal-500/30">
            <Cpu className="w-4 h-4" />
          </div>
          <span className="text-lg font-bold text-white tracking-tight">Fixora</span>
        </div>
      </header>

      {/* Login Card */}
      <main className="relative z-10 flex items-center justify-center my-auto py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-full max-w-md bg-white/95 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/20 shadow-2xl space-y-6"
        >
          <div className="text-center space-y-2">
            <div className="flex justify-center mb-2">
              <MonkeyMascot isPasswordFocused={isPasswordFocused} showPassword={showPassword} />
            </div>
            <h1 className="text-2xl font-extrabold text-[#1E3A5F] tracking-tight">Welcome Back</h1>
            <p className="text-xs text-gray-500">Sign in to access your saved diagnostic reports.</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 block">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  type="email" 
                  required
                  placeholder="name@example.com" 
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:border-[#0D9488] transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 block">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  required
                  placeholder="••••••••" 
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                  className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:border-[#0D9488] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full py-3.5 bg-[#1E3A5F] hover:bg-[#162a45] text-white text-xs font-bold rounded-xl transition-all shadow-md mt-2"
            >
              Sign In
            </button>
          </form>

          <div className="text-center text-xs text-gray-500 pt-2">
            Don't have an account?{' '}
            <Link href="/signup" className="font-bold text-[#0D9488] hover:underline">
              Create Account
            </Link>
          </div>
        </motion.div>
      </main>

      <footer className="relative z-10 text-center text-xs text-slate-400">
        @ Fixora. Verified Electronics Repair.
      </footer>
    </div>
  );
}