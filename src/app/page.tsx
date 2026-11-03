'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { 
  Cpu, Sparkles, ShieldCheck, Zap, MapPin, 
  ArrowRight, CheckCircle2, Wrench, Recycle, 
  Smartphone, Laptop, Activity, Lock, Heart,
  Calculator, Building2, Leaf
} from 'lucide-react';

// Core UI Components
import SpotlightCard from './SpotlightCard';
import ParticleBackground from './ParticleBackground';

// Interactive Feature Modules
import LocalShopMapGrid from './LocalShopMapGrid';
import EWasteImpactTracker from './EWasteImpactTracker';
import RepairCostCalculator from './RepairCostCalculator';
import TechnicianTicketBoard from './TechnicianTicketBoard';

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    }
  };

  const features = [
    {
      icon: <Cpu className="w-6 h-6 text-[#0D9488]" />,
      title: "Computer Vision Defect Analysis",
      description: "Upload a photo of your damaged smartphone, laptop, or tablet. Our neural network detects physical cracks, liquid damage, and port corrosion in seconds."
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#0D9488]" />,
      title: "Hyper-Local Technician Matching",
      description: "Connect directly with verified independent repair shops in Vijayawada, Guntur, and Amaravati. Support your local community technicians."
    },
    {
      icon: <Zap className="w-6 h-6 text-[#0D9488]" />,
      title: "Instant Transparent Pricing",
      description: "Get itemized spare-part estimates and fair labor cost ranges upfront before committing to any repair booking."
    },
    {
      icon: <Recycle className="w-6 h-6 text-[#0D9488]" />,
      title: "Sustainable E-Waste Prevention",
      description: "Extend device lifetimes through component-level repairs instead of premature replacement, reducing electronic waste in landfills."
    }
  ];

  const deviceCategories = [
    { name: "Smartphones", icon: <Smartphone className="w-5 h-5" />, desc: "Screen, battery, and charging port fault diagnosis" },
    { name: "Laptops & PCs", icon: <Laptop className="w-5 h-5" />, desc: "Keyboard, hinge, liquid spill, and motherboard inspection" },
    { name: "Gadgets & Wearables", icon: <Activity className="w-5 h-5" />, desc: "Smartwatches, audio gear, and peripheral hardware checks" }
  ];

  return (
    <div className="min-h-screen circuit-grid bg-[#F8FAFC] text-[#1F2937] relative overflow-hidden">
      
      {/* Background Interactive Particle Mesh */}
      <ParticleBackground />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#1E3A5F] flex items-center justify-center text-teal-400 shadow-xs">
              <Cpu className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-[#1E3A5F] tracking-tight">Fixora</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-[#4B5563]">
            <a href="#cost-calculator" className="hover:text-[#0D9488] transition-colors">Estimator</a>
            <a href="#e-waste-tracker" className="hover:text-[#0D9488] transition-colors">E-Waste Vault</a>
            <a href="#local-shops" className="hover:text-[#0D9488] transition-colors">Local Shops</a>
            <a href="#technician-portal" className="hover:text-[#0D9488] transition-colors">Partner Portal</a>
            <Link href="/about" className="hover:text-[#0D9488] transition-colors">About</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link 
              href="/login" 
              className="px-4 py-2 text-xs font-semibold text-[#1E3A5F] hover:text-[#0D9488] transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/diagnose" 
              className="px-4.5 py-2.5 bg-[#0D9488] hover:bg-[#0b7a70] text-white text-xs font-bold rounded-xl transition-all shadow-xs flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" /> Start AI Scan
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-12 pb-20 space-y-20 relative z-10">
        
        {/* 1. Hero Section */}
        <section className="text-center space-y-6 pt-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-[#0D9488] text-xs font-semibold shadow-2xs"
          >
            <Sparkles className="w-4 h-4 animate-pulse" /> AI Hardware Vision Engine • Vijayawada & Guntur
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-[#1E3A5F] tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Instant AI Electronics Diagnosis & <br />
            <span className="bg-gradient-to-r from-[#0D9488] to-[#1E3A5F] bg-clip-text text-transparent">
              Verified Local Repair Matchmaking
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base text-[#6B7280] max-w-2xl mx-auto leading-relaxed"
          >
            Snap a photo of your broken device. Fixora's computer vision neural network detects physical hardware faults, estimates repair costs, and routes you to top-rated regional repair shops.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-4 pt-2"
          >
            <Link 
              href="/diagnose" 
              className="px-7 py-4 bg-[#0D9488] hover:bg-[#0b7a70] text-white text-xs font-bold rounded-2xl transition-all shadow-md flex items-center gap-2.5 group"
            >
              <Sparkles className="w-4 h-4" /> Start Free AI Scan 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="#cost-calculator" 
              className="px-7 py-4 bg-white/80 hover:bg-white text-[#1E3A5F] border border-gray-200 text-xs font-bold rounded-2xl transition-all shadow-2xs"
            >
              Estimate Repair Cost
            </a>
          </motion.div>

          {/* Quick Security Badges */}
          <div className="pt-6 flex flex-wrap justify-center items-center gap-6 text-xs text-[#6B7280] font-medium">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#0D9488]" /> Verified Technicians</span>
            <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-[#0D9488]" /> SSL Encrypted Scans</span>
            <span className="flex items-center gap-1.5"><Heart className="w-4 h-4 text-[#0D9488]" /> Zero Hidden Fees</span>
          </div>
        </section>

        {/* 2. Device Support Grid */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-[#1E3A5F]">Supported Device Categories</h2>
            <p className="text-xs text-[#6B7280]">Select your hardware type for instant vision analysis.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deviceCategories.map((cat, idx) => (
              <div 
                key={idx} 
                className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-200/80 shadow-2xs hover:shadow-xs transition-all flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-teal-50 text-[#0D9488] flex-shrink-0">
                  {cat.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-[#1E3A5F]">{cat.name}</h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. How It Works / Key Features Grid */}
        <section id="how-it-works" className="space-y-10 pt-6">
          <div className="text-center space-y-2">
            <div className="text-xs font-bold text-[#0D9488] uppercase tracking-wider">How Fixora Works</div>
            <h2 className="text-3xl font-extrabold text-[#1E3A5F]">Smart Hardware Repair Flow</h2>
            <p className="text-xs text-[#6B7280] max-w-lg mx-auto">From image capture to local technician dispatch in four effortless steps.</p>
          </div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((feat, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-200/80 shadow-2xs hover:border-teal-300 transition-all space-y-3 group"
              >
                <div className="p-3 rounded-xl bg-teal-50 w-fit group-hover:bg-[#0D9488] group-hover:text-white transition-colors duration-300">
                  {feat.icon}
                </div>
                <h3 className="text-base font-bold text-[#1E3A5F]">{feat.title}</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">{feat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 4. Interactive Module: Repair Cost Calculator */}
        <section id="cost-calculator" className="space-y-3 pt-4 scroll-mt-20">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-teal-50 text-[#0D9488] border border-teal-200">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1E3A5F]">Instant Repair Cost Estimator</h2>
              <p className="text-xs text-[#6B7280]">Calculate real-time OEM parts vs. labor fee breakdowns.</p>
            </div>
          </div>
          <RepairCostCalculator />
        </section>

        {/* 5. Interactive Module: E-Waste Sustainability Vault */}
        <section id="e-waste-tracker" className="space-y-3 pt-4 scroll-mt-20">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1E3A5F]">E-Waste Impact & Eco-Rank Vault</h2>
              <p className="text-xs text-[#6B7280]">Log your salvaged gadgets and track carbon offset savings.</p>
            </div>
          </div>
          <EWasteImpactTracker />
        </section>

        {/* 6. Interactive Module: Local Shop Matchmaker Grid */}
        <section id="local-shops" className="space-y-3 pt-4 scroll-mt-20">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-teal-50 text-[#0D9488] border border-teal-200">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1E3A5F]">Verified Local Repair Shops</h2>
              <p className="text-xs text-[#6B7280]">Book certified technicians in Vijayawada, Guntur, and Amaravati.</p>
            </div>
          </div>
          <LocalShopMapGrid />
        </section>

        {/* 7. Interactive Module: Technician Dispatch Portal */}
        <section id="technician-portal" className="space-y-3 pt-4 scroll-mt-20">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-slate-100 text-[#1E3A5F] border border-gray-300">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1E3A5F]">Partner Repair Shop Owner Board</h2>
              <p className="text-xs text-[#6B7280]">Regional repair ticket dispatch and customer receipt generator.</p>
            </div>
          </div>
          <TechnicianTicketBoard />
        </section>

        {/* 8. Spotlight Card: Measurable Environmental Impact Section */}
        <section className="pt-6">
          <SpotlightCard className="max-w-5xl mx-auto">
            <div className="text-center space-y-3 mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-[#0D9488] text-[11px] font-bold">
                <Recycle className="w-3.5 h-3.5" /> Sustainability Metrics
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1E3A5F]">
                Measurable Environmental Impact
              </h2>
              <p className="text-xs md:text-sm text-[#6B7280] max-w-lg mx-auto">
                Fixing devices reduces premature e-waste and saves thousands compared to buying new.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 rounded-2xl bg-white/50 border border-gray-100">
                <div className="text-3xl md:text-4xl font-extrabold text-[#1E3A5F]">12,400+</div>
                <div className="text-xs text-[#6B7280] mt-1 font-medium">Devices Diagnosed</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/50 border border-gray-100">
                <div className="text-3xl md:text-4xl font-extrabold text-[#0D9488]">4.8 Tons</div>
                <div className="text-xs text-[#6B7280] mt-1 font-medium">E-Waste Avoided</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/50 border border-gray-100">
                <div className="text-3xl md:text-4xl font-extrabold text-[#1E3A5F]">88%</div>
                <div className="text-xs text-[#6B7280] mt-1 font-medium">Avg. Repair Score</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/50 border border-gray-100">
                <div className="text-3xl md:text-4xl font-extrabold text-[#0D9488]">₹1,800</div>
                <div className="text-xs text-[#6B7280] mt-1 font-medium">Avg. User Savings</div>
              </div>
            </div>
          </SpotlightCard>
        </section>

        {/* 9. Ready To Fix CTA Banner */}
        <section className="pt-6">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            className="bg-[#1E3A5F] text-white p-8 md:p-12 rounded-3xl text-center space-y-6 shadow-md relative overflow-hidden"
          >
            <div className="space-y-3 relative z-10">
              <h3 className="text-3xl font-extrabold">Ready to fix your device?</h3>
              <p className="text-xs md:text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                Get an instant AI diagnosis and cost estimate in less than 2 minutes. Connect with verified shops near you.
              </p>
            </div>
            <div className="relative z-10 flex flex-wrap justify-center gap-4">
              <Link 
                href="/diagnose" 
                className="px-7 py-3.5 bg-[#0D9488] hover:bg-[#0b7a70] text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" /> Start AI Diagnosis <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>

      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-8 border-t border-gray-200/60 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#1E3A5F]">Fixora</span>
            <span>• AI Diagnostics & Local Repair Platform</span>
          </div>
          <div className="flex items-center gap-6 font-medium">
            <Link href="/about" className="hover:text-[#0D9488] transition-colors">About</Link>
            <a href="#how-it-works" className="hover:text-[#0D9488] transition-colors">Features</a>
            <Link href="/contact" className="hover:text-[#0D9488] transition-colors">Contact</Link>
            <Link href="/privacy" className="hover:text-[#0D9488] transition-colors">Privacy</Link>
          </div>
          <div>© 2026 Fixora. All rights reserved.</div>
        </div>
      </footer>

    </div>
  );
}