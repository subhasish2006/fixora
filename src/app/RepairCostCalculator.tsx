'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, Smartphone, Laptop, Tablet, AlertTriangle, 
  CheckCircle2, Sparkles, Copy, ShieldCheck 
} from 'lucide-react';

interface DamageOption {
  id: string;
  label: string;
  basePartsCost: number;
  baseLaborCost: number;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
}

const DAMAGE_OPTIONS: DamageOption[] = [
  { id: 'screen', label: 'Screen / Digitizer Fracture', basePartsCost: 1800, baseLaborCost: 500, severity: 'Medium' },
  { id: 'battery', label: 'Battery Degradation / Swell', basePartsCost: 1200, baseLaborCost: 400, severity: 'Low' },
  { id: 'charging', label: 'Charging Port & IC Failure', basePartsCost: 850, baseLaborCost: 450, severity: 'Medium' },
  { id: 'liquid', label: 'Liquid Damage & Corrosion', basePartsCost: 2500, baseLaborCost: 900, severity: 'High' },
  { id: 'motherboard', label: 'Motherboard Chip-Level Fault', basePartsCost: 3400, baseLaborCost: 1200, severity: 'Critical' },
];

export default function RepairCostCalculator() {
  const [deviceCategory, setDeviceCategory] = useState<'phone' | 'laptop' | 'tablet'>('phone');
  const [selectedDamage, setSelectedDamage] = useState<DamageOption>(DAMAGE_OPTIONS[0]);
  const [deviceAgeYears, setDeviceAgeYears] = useState<number>(2);
  const [copiedQuote, setCopiedQuote] = useState(false);

  const typeMultiplier = deviceCategory === 'laptop' ? 1.65 : deviceCategory === 'tablet' ? 1.25 : 1.0;
  const ageDepreciationFactor = Math.max(0.7, 1 - (deviceAgeYears * 0.08));

  const partsCost = Math.round(selectedDamage.basePartsCost * typeMultiplier);
  const laborCost = Math.round(selectedDamage.baseLaborCost * typeMultiplier);
  const totalRepairCost = partsCost + laborCost;

  const estimatedNewDeviceCost = Math.round(
    (deviceCategory === 'laptop' ? 55000 : deviceCategory === 'tablet' ? 28000 : 22000) * ageDepreciationFactor
  );
  const userSavings = Math.max(0, estimatedNewDeviceCost - totalRepairCost);
  const savingsPercentage = Math.min(92, Math.round((userSavings / estimatedNewDeviceCost) * 100));

  const handleCopyQuote = () => {
    const quoteText = `Fixora Repair Estimate\nDevice: ${deviceCategory.toUpperCase()}\nIssue: ${selectedDamage.label}\nParts: ₹${partsCost}\nLabor: ₹${laborCost}\nTotal Quote: ₹${totalRepairCost}\nSavings vs New: ₹${userSavings} (${savingsPercentage}% Saved)`;
    navigator.clipboard.writeText(quoteText);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2500);
  };

  return (
    <div className="bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-gray-200/80 shadow-xs space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5">
        <div>
          <span className="text-[11px] font-bold text-[#0D9488] uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Instant Cost Engine
          </span>
          <h3 className="text-xl font-bold text-[#1E3A5F]">Interactive Repair Cost Estimator</h3>
        </div>
        <div className="px-3 py-1.5 rounded-xl bg-teal-50 border border-teal-200 text-[#0D9488] text-xs font-bold flex items-center gap-1.5 self-start sm:self-auto">
          <Calculator className="w-4 h-4" /> Real-time Pricing
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Device Category Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#1E3A5F] block">1. Select Device Type</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { key: 'phone', label: 'Smartphone', icon: Smartphone },
                { key: 'laptop', label: 'Laptop', icon: Laptop },
                { key: 'tablet', label: 'Tablet', icon: Tablet },
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setDeviceCategory(key as any)}
                  className={`p-3.5 rounded-2xl border text-xs font-bold transition-all flex flex-col items-center gap-2 ${
                    deviceCategory === key
                      ? 'bg-[#1E3A5F] text-white border-[#1E3A5F] shadow-sm'
                      : 'bg-slate-50 text-gray-600 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Damage Issue Picker */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#1E3A5F] block">2. Select Primary Damage / Fault</label>
            <div className="space-y-2">
              {DAMAGE_OPTIONS.map((dmg) => (
                <button
                  key={dmg.id}
                  type="button"
                  onClick={() => setSelectedDamage(dmg)}
                  className={`w-full p-3.5 rounded-2xl border text-xs font-semibold transition-all flex items-center justify-between ${
                    selectedDamage.id === dmg.id
                      ? 'bg-teal-50/80 border-[#0D9488] text-[#1E3A5F] shadow-xs'
                      : 'bg-white border-gray-200 text-gray-700 hover:border-teal-200'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <AlertTriangle className={`w-4 h-4 ${selectedDamage.id === dmg.id ? 'text-[#0D9488]' : 'text-gray-400'}`} />
                    {dmg.label}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    dmg.severity === 'Critical' ? 'bg-red-50 text-red-700 border border-red-200' :
                    dmg.severity === 'High' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                    'bg-slate-100 text-slate-700'
                  }`}>
                    {dmg.severity}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Device Age Slider */}
          <div className="space-y-2 pt-2">
            <div className="flex justify-between items-center text-xs font-bold">
              <label className="text-[#1E3A5F]">3. Device Age: <span className="text-[#0D9488] font-mono">{deviceAgeYears} Year{deviceAgeYears > 1 ? 's' : ''}</span></label>
              <span className="text-gray-400 font-normal">Depreciation adjusted</span>
            </div>
            <input
              type="range"
              min="0"
              max="5"
              step="1"
              value={deviceAgeYears}
              onChange={(e) => setDeviceAgeYears(Number(e.target.value))}
              className="w-full accent-[#0D9488] cursor-pointer"
            />
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-5 bg-slate-900 text-white p-6 rounded-3xl space-y-6 shadow-xl border border-slate-800">
          <div className="space-y-1 border-b border-slate-800 pb-4">
            <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest font-mono">FIXORA ESTIMATE RECEIPT</span>
            <h4 className="text-lg font-bold text-white capitalize">{deviceCategory} Repair Quote</h4>
          </div>

          {/* Breakdown */}
          <div className="space-y-3 text-xs">
            <div className="flex justify-between text-slate-300">
              <span>Genuine OEM Component</span>
              <span className="font-mono font-semibold">₹{partsCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Verified Technician Labor</span>
              <span className="font-mono font-semibold">₹{laborCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Diagnostic Assessment</span>
              <span className="font-mono font-semibold text-emerald-400">FREE</span>
            </div>

            <div className="border-t border-slate-800 pt-3 flex justify-between items-center text-sm font-bold">
              <span>Total Estimated Cost</span>
              <span className="text-2xl font-extrabold text-teal-400 font-mono">₹{totalRepairCost.toLocaleString()}</span>
            </div>
          </div>

          {/* Savings Meter */}
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-300">Savings vs Buying Replacement</span>
              <span className="text-emerald-400 font-mono">₹{userSavings.toLocaleString()} ({savingsPercentage}%)</span>
            </div>
            <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${savingsPercentage}%` }}
                transition={{ duration: 0.6 }}
                className="h-full bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full" 
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-2">
            <button
              onClick={handleCopyQuote}
              className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 border border-slate-700"
            >
              {copiedQuote ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedQuote ? 'Quotation Copied to Clipboard!' : 'Copy Diagnostic Quote'}</span>
            </button>

            <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              Price lock guaranteed across all partner shops
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}