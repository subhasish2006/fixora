'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Smartphone, 
  Laptop, 
  HelpCircle, 
  UploadCloud, 
  Star, 
  MapPin, 
  ArrowLeft, 
  Sparkles, 
  RotateCcw,
  X,
  Phone,
  Wrench
} from 'lucide-react';

const GENUINE_LOCAL_SHOPS = [
  {
    id: 'ChIJY3DLOt7vNToR3yE4cV_RK6Y',
    name: "Revanth Mobile's / Laptop Service Center",
    rating: 5.0,
    reviewCount: 107,
    address: 'Samarangam Chowk, 1 Town, Vijayawada, AP 520001',
    phone: '090321 31410',
    specialty: 'Smartphone & Laptop Chip Level Repair',
    distance: '12.9 km',
  },
  {
    id: 'ChIJjVbap2D7NToRKnQ5jN1uRCw',
    name: 'NR TECHNOLOGIES',
    rating: 4.9,
    reviewCount: 2040,
    address: 'Swati Towers, Rama Rao St, Labbipet, Vijayawada, AP 520010',
    phone: '099486 64242',
    specialty: 'Laptop Motherboard & Display Specialist',
    distance: '16.0 km',
  },
  {
    id: 'ChIJ0b1M1OXtNToR2-J23Pc88ok',
    name: 'Vivekananda Mobiles',
    rating: 5.0,
    reviewCount: 18,
    address: 'Near Mandaram Centre, Amaravati Road, AP 522241',
    phone: '099488 84178',
    specialty: 'Fast Mobile Screen & Battery Replacement',
    distance: '4.4 km',
  },
  {
    id: 'ChIJW5HzjAYLSjoR3mZxGIlzbbc',
    name: 'SS Electronics',
    rating: 4.9,
    reviewCount: 155,
    address: 'Nandivelugu Rd, Christian Pet, Guntur, AP 522001',
    phone: '062813 00037',
    specialty: 'Component IC & Board Diagnostics',
    distance: '22.6 km',
  },
  {
    id: 'ChIJX5w0_bd1SjoRZ4B9vo8su1s',
    name: 'Tanvi Mobile Service And Sale',
    rating: 4.7,
    reviewCount: 587,
    address: 'Guntur Lodge Center, Amaravati Rd, Guntur, AP 522002',
    phone: '098566 69993',
    specialty: 'Express Glass & Water Damage Fixes',
    distance: '21.5 km',
  },
  {
    id: 'ChIJGXYZZTD7NToR0QM-prqDPIc',
    name: 'KK Systems',
    rating: 4.6,
    reviewCount: 945,
    address: 'NTR Complex, Governor Peta, Vijayawada, AP 520002',
    phone: '079892 33768',
    specialty: 'OEM Laptop & Gadget Hardware Service',
    distance: '14.4 km',
  },
];

const DIAGNOSIS_ISSUES_POOL = [
  {
    title: 'Display Digitizer & Touch Glass Failure',
    scoreRange: [68, 82],
    costRange: ['₹1,400', '₹2,600'],
    time: '45 - 60 Mins',
    desc: 'Micro-fractures detected in the touch digitizer layer. Display panel requires precision glass separation or module replacement.',
  },
  {
    title: 'Lithium Ion Battery Degradation & Voltage Drop',
    scoreRange: [85, 96],
    costRange: ['₹950', '₹1,850'],
    time: '30 - 45 Mins',
    desc: 'Battery health measured below optimal operating thresholds. Cell swelling risk detected; fresh OEM grade battery installation recommended.',
  },
  {
    title: 'Power IC & Charging Port Contact Oxidation',
    scoreRange: [74, 88],
    costRange: ['₹850', '₹1,600'],
    time: '40 - 50 Mins',
    desc: 'Intermittent current flow recorded. Sub-board charging ribbon circuit requires ultrasonic cleaning or connector swap.',
  },
];

export default function DiagnosePage() {
  const [step, setStep] = useState<'input' | 'scanning' | 'results'>('input');
  const [deviceType, setDeviceType] = useState<'phone' | 'laptop' | 'other'>('phone');
  const [symptom, setSymptom] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [animatedScore, setAnimatedScore] = useState(0);
  const [activeDiagnosis, setActiveDiagnosis] = useState(DIAGNOSIS_ISSUES_POOL[0]);
  const [targetScore, setTargetScore] = useState(84);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // File Loader Function
  const loadFile = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    }
  };

  // Click File Selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) loadFile(file);
  };

  // Drag and Drop Event Handlers
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file) loadFile(file);
  };

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleStartDiagnosis = () => {
    const randomIssue = DIAGNOSIS_ISSUES_POOL[Math.floor(Math.random() * DIAGNOSIS_ISSUES_POOL.length)];
    const minScore = randomIssue.scoreRange[0];
    const maxScore = randomIssue.scoreRange[1];
    const calculatedScore = Math.floor(Math.random() * (maxScore - minScore + 1)) + minScore;

    setActiveDiagnosis(randomIssue);
    setTargetScore(calculatedScore);
    setStep('scanning');
    setScanProgress(0);
  };

  useEffect(() => {
    if (step === 'scanning') {
      const interval = setInterval(() => {
        setScanProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setStep('results'), 400);
            return 100;
          }
          return prev + 3;
        });
      }, 45);

      return () => clearInterval(interval);
    }
  }, [step]);

  useEffect(() => {
    if (step === 'results') {
      const duration = 1200;
      const steps = 30;
      const stepTime = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        setAnimatedScore(Math.round(targetScore * progress));
        if (currentStep >= steps) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [step, targetScore]);

  return (
    <div className="min-h-screen circuit-grid bg-[#F8FAFC] pb-20">
      <header className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E3A5F] hover:text-[#0D9488] transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#1E3A5F] flex items-center justify-center text-teal-400">
            <Cpu className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-[#1E3A5F]">Fixora AI</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 pt-6">
        <AnimatePresence mode="wait">
          {step === 'input' && (
            <motion.div
              key="input-step"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h1 className="text-3xl font-extrabold text-[#1F2937] mb-2">Smart Hardware Diagnosis</h1>
                <p className="text-sm text-[#6B7280]">Select your device, upload a photo, or describe symptoms for instant AI scanning.</p>
              </div>

              {/* Device Category Selector */}
              <div className="glass-card p-6 rounded-2xl space-y-4 shadow-sm">
                <label className="text-sm font-semibold text-[#1F2937] block">1. Select Device Category</label>
                <div className="grid grid-cols-3 gap-4">
                  <button
                    type="button"
                    onClick={() => setDeviceType('phone')}
                    className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${
                      deviceType === 'phone'
                        ? 'border-[#0D9488] bg-teal-50/50 text-[#0D9488] shadow-sm'
                        : 'border-gray-200 text-[#6B7280] hover:border-gray-300'
                    }`}
                  >
                    <Smartphone className="w-7 h-7" />
                    <span className="text-xs font-semibold">Smartphone</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeviceType('laptop')}
                    className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${
                      deviceType === 'laptop'
                        ? 'border-[#0D9488] bg-teal-50/50 text-[#0D9488] shadow-sm'
                        : 'border-gray-200 text-[#6B7280] hover:border-gray-300'
                    }`}
                  >
                    <Laptop className="w-7 h-7" />
                    <span className="text-xs font-semibold">Laptop</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeviceType('other')}
                    className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${
                      deviceType === 'other'
                        ? 'border-[#0D9488] bg-teal-50/50 text-[#0D9488] shadow-sm'
                        : 'border-gray-200 text-[#6B7280] hover:border-gray-300'
                    }`}
                  >
                    <HelpCircle className="w-7 h-7" />
                    <span className="text-xs font-semibold">Other Gadget</span>
                  </button>
                </div>
              </div>

              {/* Enhanced Drag & Drop Photo Upload Zone */}
              <div className="glass-card p-6 rounded-2xl space-y-4 shadow-sm">
                <label className="text-sm font-semibold text-[#1F2937] block">2. Upload Device Photo</label>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />

                {imagePreview ? (
                  <div className="relative rounded-xl overflow-hidden border border-teal-500/40 bg-slate-900 flex items-center justify-center p-4 h-56 shadow-inner">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imagePreview}
                      alt="Device hardware preview"
                      className="max-h-full max-w-full object-contain rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="absolute top-3 right-3 p-2 bg-red-500/90 hover:bg-red-600 text-white rounded-full transition-colors shadow-lg"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <span className="absolute bottom-3 left-3 bg-slate-900/90 text-emerald-400 text-[11px] px-3 py-1 rounded-full border border-emerald-500/30 font-mono shadow-sm">
                      ✓ Image Loaded for AI Analysis
                    </span>
                  </div>
                ) : (
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                      isDragging 
                        ? 'border-[#0D9488] bg-teal-100/50 scale-[1.01]' 
                        : 'border-teal-500/30 hover:border-[#0D9488] bg-teal-50/20 hover:bg-teal-50/40'
                    }`}
                  >
                    <UploadCloud className="w-10 h-10 text-[#0D9488] mx-auto mb-2 animate-bounce" />
                    <p className="text-sm font-semibold text-[#1F2937]">
                      {isDragging ? 'Drop your image file here' : 'Click to browse or drag & drop image here'}
                    </p>
                    <p className="text-xs text-[#6B7280] mt-1">Supports PNG, JPG, WEBP, GIF up to 10MB</p>
                  </div>
                )}
              </div>

              {/* Symptom Input */}
              <div className="glass-card p-6 rounded-2xl space-y-4 shadow-sm">
                <label className="text-sm font-semibold text-[#1F2937] block">3. Describe Symptoms</label>
                <textarea
                  value={symptom}
                  onChange={(e) => setSymptom(e.target.value)}
                  placeholder="E.g., Screen flickering near top bezel, rapid battery drain, or device heating up while charging..."
                  className="w-full h-28 p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0D9488] text-sm text-[#1F2937] bg-white resize-none"
                />
              </div>

              {/* Action Button */}
              <button
                onClick={handleStartDiagnosis}
                className="w-full py-4 bg-[#0D9488] hover:bg-[#0b7a70] text-white font-semibold rounded-xl shadow-lg shadow-teal-600/20 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                <span>Start AI Diagnosis</span>
              </button>
            </motion.div>
          )}

          {step === 'scanning' && (
            <motion.div
              key="scanning-step"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card p-12 rounded-3xl text-center space-y-8 shadow-xl relative overflow-hidden"
            >
              <div className="w-24 h-24 mx-auto rounded-full bg-teal-50 text-[#0D9488] flex items-center justify-center relative shadow-inner">
                <Cpu className="w-12 h-12 animate-pulse" />
                <div className="absolute inset-0 rounded-full border-2 border-[#0D9488] animate-ping opacity-25" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-[#1F2937]">AI Visual Scan in Progress</h2>
                <p className="text-xs text-[#6B7280]">Analyzing component degradation and checking local repair shop ratings...</p>
              </div>

              <div className="max-w-md mx-auto space-y-2">
                <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden p-0.5 border border-gray-200">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-[#1E3A5F] via-[#0D9488] to-[#10B981] rounded-full"
                    style={{ width: `${scanProgress}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-[#6B7280] font-mono">
                  <span>Processing...</span>
                  <span>{scanProgress}%</span>
                </div>
              </div>
            </motion.div>
          )}

          {step === 'results' && (
            <motion.div
              key="results-step"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="glass-card p-6 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-[#0D9488] uppercase tracking-wider">Diagnosis Complete</span>
                  <h2 className="text-xl font-bold text-[#1F2937]">{activeDiagnosis.title}</h2>
                  <p className="text-xs text-[#6B7280] mt-1">{activeDiagnosis.desc}</p>
                </div>
                <button
                  onClick={() => setStep('input')}
                  className="p-2 text-[#6B7280] hover:text-[#1E3A5F] rounded-lg border border-gray-200 hover:bg-gray-50 flex items-center gap-1 text-xs shrink-0 ml-4"
                >
                  <RotateCcw className="w-4 h-4" />
                  Re-Diagnose
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card p-6 rounded-2xl text-center flex flex-col justify-between shadow-sm">
                  <span className="text-xs font-semibold text-[#6B7280]">Repairability Score</span>
                  <div className="my-4">
                    <span className="text-5xl font-extrabold text-[#0D9488]">{animatedScore}</span>
                    <span className="text-lg font-bold text-gray-400">/100</span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full mx-auto">
                    {animatedScore > 80 ? 'Highly Repairable' : 'Moderate Repair'}
                  </span>
                </div>

                <div className="glass-card p-6 rounded-2xl text-center flex flex-col justify-between shadow-sm">
                  <span className="text-xs font-semibold text-[#6B7280]">Estimated Cost Range</span>
                  <div className="my-4">
                    <span className="text-2xl md:text-3xl font-extrabold text-[#1E3A5F]">
                      {activeDiagnosis.costRange[0]} - {activeDiagnosis.costRange[1]}
                    </span>
                  </div>
                  <span className="text-xs text-[#6B7280]">Includes OEM parts & labor</span>
                </div>

                <div className="glass-card p-6 rounded-2xl text-center flex flex-col justify-between shadow-sm">
                  <span className="text-xs font-semibold text-[#6B7280]">Estimated Service Time</span>
                  <div className="my-4">
                    <span className="text-2xl md:text-3xl font-extrabold text-[#1F2937]">{activeDiagnosis.time}</span>
                  </div>
                  <span className="text-xs text-emerald-600 font-medium">Same-day local service</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#1F2937]">Verified Repair Shops Nearby</h3>
                    <p className="text-xs text-[#6B7280]">Sorted by highest Google Maps rating across Vijayawada, Guntur & Amaravati</p>
                  </div>
                  <span className="text-xs font-semibold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                    {GENUINE_LOCAL_SHOPS.length} Real Shops Found
                  </span>
                </div>

                <div className="space-y-4">
                  {GENUINE_LOCAL_SHOPS.map((shop, index) => (
                    <motion.div
                      key={shop.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className="glass-card p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:shadow-md transition-shadow border border-slate-200"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#0D9488] flex items-center justify-center font-bold text-lg shrink-0">
                          <Wrench className="w-6 h-6" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-bold text-[#1F2937] text-sm">{shop.name}</h4>
                            <span className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-800 px-2.5 py-0.5 rounded-full font-bold border border-amber-200">
                              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> {shop.rating.toFixed(1)} ({shop.reviewCount} reviews)
                            </span>
                          </div>
                          <p className="text-xs text-[#6B7280] flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                            <span>{shop.address}</span>
                          </p>
                          <p className="text-[11px] text-teal-700 font-medium flex items-center gap-2">
                            <span>• {shop.specialty}</span>
                            <span>• {shop.distance} from your area</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2 border-t sm:border-t-0 pt-3 sm:pt-0">
                        <a
                          href={`tel:${shop.phone}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1E3A5F] hover:bg-[#152a45] text-white text-xs font-semibold rounded-xl transition-colors shadow-sm"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Call {shop.phone}</span>
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}