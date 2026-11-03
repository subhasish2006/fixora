'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { 
  Upload, Cpu, Sparkles, CheckCircle2, AlertTriangle, 
  ShieldCheck, Zap, RefreshCw, FileText, MapPin, 
  ArrowRight, Smartphone, Laptop, Layers, Eye
} from 'lucide-react';

interface PresetSample {
  id: string;
  name: string;
  category: string;
  image: string;
  faults: Array<{ title: string; confidence: number; severity: 'High' | 'Medium' | 'Low'; bbox: { top: string; left: string; width: string; height: string } }>;
  partsCost: number;
  laborCost: number;
  timeEstimate: string;
}

const PRESET_SAMPLES: PresetSample[] = [
  {
    id: 'sample-1',
    name: 'iPhone 13 Pro',
    category: 'Smartphone',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80',
    faults: [
      { 
        title: 'Primary OLED Glass Fracture', 
        confidence: 97.8, 
        severity: 'High', 
        bbox: { top: '20%', left: '15%', width: '65%', height: '50%' } 
      },
      { 
        title: 'Digitizer Sensor Disruption', 
        confidence: 89.4, 
        severity: 'Medium', 
        bbox: { top: '40%', left: '30%', width: '40%', height: '30%' } 
      }
    ],
    partsCost: 2400,
    laborCost: 500,
    timeEstimate: '45 Mins'
  },
  {
    id: 'sample-2',
    name: 'MacBook Air M1',
    category: 'Laptop',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    faults: [
      { 
        title: 'Lithium Battery Degradation & Swell', 
        confidence: 94.2, 
        severity: 'High', 
        bbox: { top: '55%', left: '20%', width: '60%', height: '35%' } 
      }
    ],
    partsCost: 3800,
    laborCost: 800,
    timeEstimate: '60 Mins'
  },
  {
    id: 'sample-3',
    name: 'Samsung Galaxy S22',
    category: 'Smartphone',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
    faults: [
      { 
        title: 'USB-C Port Pin Corrosion', 
        confidence: 91.5, 
        severity: 'Medium', 
        bbox: { top: '75%', left: '35%', width: '30%', height: '20%' } 
      }
    ],
    partsCost: 850,
    laborCost: 400,
    timeEstimate: '30 Mins'
  }
];

export default function DiagnosticSimulator() {
  const [selectedSample, setSelectedSample] = useState<PresetSample>(PRESET_SAMPLES[0]);
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [scanStep, setScanStep] = useState<'idle' | 'scanning' | 'complete'>('idle');
  const [progress, setProgress] = useState(0);
  const [scanStageText, setScanStageText] = useState('Initializing Vision Neural Net...');

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, staggerChildren: 0.1 } 
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  const startScan = () => {
    setScanStep('scanning');
    setProgress(0);

    const stages = [
      { pct: 20, text: 'Preprocessing image resolution & EXIF data...' },
      { pct: 45, text: 'Executing YOLOv8 object defect detection...' },
      { pct: 75, text: 'Mapping bounding box coordinate vectors...' },
      { pct: 90, text: 'Calculating regional component & labor pricing...' },
      { pct: 100, text: 'Diagnostic analysis complete!' }
    ];

    let currentStage = 0;
    const interval = setInterval(() => {
      if (currentStage < stages.length) {
        setProgress(stages[currentStage].pct);
        setScanStageText(stages[currentStage].text);
        currentStage++;
      } else {
        clearInterval(interval);
        setTimeout(() => setScanStep('complete'), 400);
      }
    }, 600);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomImage(url);
      setScanStep('idle');
    }
  };

  const activeImage = customImage || selectedSample.image;

  return (
    <div className="space-y-8">
      {/* Top Controls: Preset Sample Picker & Upload Option */}
      <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-gray-200/80 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-[#1E3A5F] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#0D9488]" /> Select Test Device or Upload Photo
            </h3>
            <p className="text-xs text-[#6B7280]">
              Choose a preset defect sample to test the computer vision model or upload your own image.
            </p>
          </div>

          <label className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-teal-50 text-[#1E3A5F] hover:text-[#0D9488] border border-gray-200 hover:border-teal-300 text-xs font-bold rounded-xl cursor-pointer transition-all whitespace-nowrap shadow-2xs">
            <Upload className="w-4 h-4" /> Upload Custom Photo
            <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
          </label>
        </div>

        {/* Preset Thumbnails */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          {PRESET_SAMPLES.map((sample) => (
            <button
              key={sample.id}
              onClick={() => {
                setSelectedSample(sample);
                setCustomImage(null);
                setScanStep('idle');
              }}
              className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                !customImage && selectedSample.id === sample.id
                  ? 'bg-teal-50/80 border-[#0D9488] shadow-xs'
                  : 'bg-white border-gray-200 hover:border-teal-200'
              }`}
            >
              <img 
                src={sample.image} 
                alt={sample.name} 
                className="w-12 h-12 rounded-xl object-cover border border-gray-200 flex-shrink-0" 
              />
              <div className="min-w-0">
                <div className="text-xs font-bold text-[#1E3A5F] truncate">{sample.name}</div>
                <div className="text-[11px] text-[#0D9488] font-medium">{sample.category}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Scanner Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Viewport: Scan Screen & Overlay */}
        <div className="lg:col-span-6 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-gray-200/80 shadow-sm space-y-4">
          <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-slate-900 border border-slate-700">
            <img 
              src={activeImage} 
              alt="Device for diagnosis" 
              className={`w-full h-full object-cover transition-all duration-500 ${scanStep === 'scanning' ? 'brightness-75 contrast-125' : ''}`}
            />

            {/* Scanning Laser Beam Overlay */}
            {scanStep === 'scanning' && (
              <div className="absolute inset-0 pointer-events-none">
                <motion.div
                  animate={{ y: ['0%', '100%', '0%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-full h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent shadow-[0_0_15px_#2DD4BF]"
                />
                <div className="absolute inset-0 bg-teal-500/10 backdrop-blur-[1px]" />
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-3 rounded-xl border border-teal-500/30 text-white text-xs space-y-1">
                  <div className="flex justify-between font-mono text-[11px]">
                    <span className="text-teal-400 font-semibold">{scanStageText}</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-teal-400" 
                      style={{ width: `${progress}%` }} 
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Bounding Box Visual Overlays when Completed */}
            {scanStep === 'complete' && !customImage && (
              <div className="absolute inset-0 pointer-events-none">
                {selectedSample.faults.map((fault, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.2 }}
                    style={{
                      top: fault.bbox.top,
                      left: fault.bbox.left,
                      width: fault.bbox.width,
                      height: fault.bbox.height
                    }}
                    className="absolute border-2 border-dashed border-teal-400 bg-teal-400/15 rounded-lg flex items-start p-1.5 shadow-[0_0_12px_rgba(45,212,191,0.4)]"
                  >
                    <span className="bg-[#1E3A5F] text-teal-300 text-[10px] font-mono px-2 py-0.5 rounded shadow-sm font-bold border border-teal-400/40">
                      {fault.title} ({fault.confidence}%)
                    </span>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Idle Prompt overlay */}
            {scanStep === 'idle' && (
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center p-6 text-center">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-teal-300 flex items-center justify-center mx-auto border border-white/30">
                    <Eye className="w-6 h-6" />
                  </div>
                  <p className="text-xs text-white font-medium max-w-xs">
                    Ready for vision analysis. Click below to initiate AI defect identification.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Action Trigger Button */}
          <div className="flex gap-3">
            {scanStep === 'idle' ? (
              <button
                onClick={startScan}
                className="w-full py-3.5 bg-[#0D9488] hover:bg-[#0b7a70] text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Cpu className="w-4 h-4" /> Run AI Neural Diagnostics
              </button>
            ) : scanStep === 'scanning' ? (
              <button
                disabled
                className="w-full py-3.5 bg-slate-200 text-slate-500 text-xs font-bold rounded-xl flex items-center justify-center gap-2 cursor-not-allowed"
              >
                <RefreshCw className="w-4 h-4 animate-spin text-[#0D9488]" /> Analyzing Vision Tokens...
              </button>
            ) : (
              <button
                onClick={() => setScanStep('idle')}
                className="w-full py-3.5 bg-slate-100 hover:bg-slate-200 text-[#1E3A5F] text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 border border-gray-200"
              >
                <RefreshCw className="w-4 h-4" /> Reset & Re-Scan
              </button>
            )}
          </div>
        </div>

        {/* Right Viewport: Live Generated Report */}
        <div className="lg:col-span-6 space-y-6">
          {scanStep === 'complete' ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-gray-200/80 shadow-sm space-y-6"
            >
              {/* Header Badge */}
              <motion.div variants={itemVariants} className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-[#0D9488] uppercase tracking-wider">AI Diagnostic Report #FX-8941</span>
                  <h3 className="text-xl font-bold text-[#1E3A5F]">
                    {customImage ? 'Custom Device Analysis' : selectedSample.name}
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> High Confidence
                </div>
              </motion.div>

              {/* Detected Faults List */}
              <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="text-xs font-bold text-[#1E3A5F] uppercase tracking-wider flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500" /> Isolated Hardware Faults
                </h4>

                <div className="space-y-2">
                  {(customImage 
                    ? [{ title: 'Surface Screen Fracture', confidence: 93.4, severity: 'High' as const }] 
                    : selectedSample.faults
                  ).map((fault, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-gray-200/80 flex items-center justify-between text-xs">
                      <div className="space-y-0.5">
                        <div className="font-bold text-[#1E3A5F]">{fault.title}</div>
                        <div className="text-[11px] text-gray-500">Neural Detection Match: <span className="font-semibold text-teal-700">{fault.confidence}%</span></div>
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        fault.severity === 'High' ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {fault.severity} Severity
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Cost Estimate Breakdown */}
              <motion.div variants={itemVariants} className="bg-slate-900 text-white p-5 rounded-2xl space-y-3">
                <div className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Itemized Cost Breakdown
                </div>
                <div className="space-y-2 text-xs border-b border-slate-800 pb-3">
                  <div className="flex justify-between text-gray-300">
                    <span>Genuine Replacement Part</span>
                    <span className="font-mono font-semibold">₹{customImage ? '1,800' : selectedSample.partsCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Technician Labor Fee</span>
                    <span className="font-mono font-semibold">₹{customImage ? '400' : selectedSample.laborCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Estimated Repair Time</span>
                    <span className="font-mono font-semibold text-teal-300">{customImage ? '45 Mins' : selectedSample.timeEstimate}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm font-bold pt-1">
                  <span className="text-white">Estimated Total</span>
                  <span className="text-xl font-extrabold text-teal-400 font-mono">
                    ₹{customImage ? '2,200' : (selectedSample.partsCost + selectedSample.laborCost).toLocaleString()}
                  </span>
                </div>
              </motion.div>

              {/* Regional Shop Dispatch CTA */}
              <motion.div variants={itemVariants} className="pt-2 space-y-3">
                <Link
                  href="/contact"
                  className="w-full py-4 bg-[#0D9488] hover:bg-[#0b7a70] text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4" /> Match Local Shops in Vijayawada / Guntur <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center justify-center gap-2 text-[11px] text-[#6B7280]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0D9488]" /> Instant quotation locking • 100% genuine component match guarantee
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-gray-200/80 shadow-xs text-center space-y-4 py-16">
              <div className="w-14 h-14 rounded-2xl bg-teal-50 text-[#0D9488] flex items-center justify-center mx-auto border border-teal-100">
                <Layers className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#1E3A5F]">No Diagnostic Data Loaded</h3>
                <p className="text-xs text-[#6B7280] max-w-xs mx-auto">
                  Click <span className="font-semibold text-[#0D9488]">Run AI Neural Diagnostics</span> on the left panel to execute defect scanning and view itemized cost estimates.
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}