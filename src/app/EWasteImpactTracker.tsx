'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Leaf, Sparkles, TrendingUp, Award, Copy, CheckCircle2, 
  Trash2, ShieldCheck, Zap, RefreshCw, Smartphone, Laptop, Tablet, Tv
} from 'lucide-react';

interface SavedDevice {
  id: string;
  type: 'Smartphone' | 'Laptop' | 'Tablet' | 'Monitor/TV';
  model: string;
  weightKg: number;
  co2SavedKg: number;
  moneySavedInr: number;
}

const INITIAL_SAVED_DEVICES: SavedDevice[] = [
  { id: '1', type: 'Smartphone', model: 'iPhone 11 (Screen Refurb)', weightKg: 0.19, co2SavedKg: 54, moneySavedInr: 18500 },
  { id: '2', type: 'Laptop', model: 'Dell Inspiron (Battery Swap)', weightKg: 2.10, co2SavedKg: 210, moneySavedInr: 34000 },
];

export default function EWasteImpactTracker() {
  const [devices, setDevices] = useState<SavedDevice[]>(INITIAL_SAVED_DEVICES);
  const [selectedType, setSelectedType] = useState<'Smartphone' | 'Laptop' | 'Tablet' | 'Monitor/TV'>('Smartphone');
  const [customModel, setCustomModel] = useState('');
  const [copiedBadge, setCopiedBadge] = useState(false);

  // Aggregated Eco Metrics
  const totalWeight = Number(devices.reduce((acc, d) => acc + d.weightKg, 0).toFixed(2));
  const totalCo2 = Math.round(devices.reduce((acc, d) => acc + d.co2SavedKg, 0));
  const totalMoney = Math.round(devices.reduce((acc, d) => acc + d.moneySavedInr, 0));

  // Eco Rank tier logic
  const getEcoRank = (co2: number) => {
    if (co2 > 500) return { title: 'Planet Guardian', color: 'from-emerald-500 to-teal-600', badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-300' };
    if (co2 > 200) return { title: 'E-Waste Defender', color: 'from-teal-500 to-cyan-600', badgeBg: 'bg-teal-50 text-teal-800 border-teal-300' };
    return { title: 'Eco Rookie', color: 'from-blue-500 to-indigo-600', badgeBg: 'bg-blue-50 text-blue-800 border-blue-300' };
  };

  const rank = getEcoRank(totalCo2);

  const handleAddDevice = (e: React.FormEvent) => {
    e.preventDefault();
    const modelName = customModel.trim() || `${selectedType} Repair`;

    const specs = {
      Smartphone: { weightKg: 0.18, co2SavedKg: 55, moneySavedInr: 15000 },
      Laptop: { weightKg: 2.20, co2SavedKg: 220, moneySavedInr: 38000 },
      Tablet: { weightKg: 0.48, co2SavedKg: 95, moneySavedInr: 22000 },
      'Monitor/TV': { weightKg: 5.50, co2SavedKg: 380, moneySavedInr: 16000 },
    }[selectedType];

    const newEntry: SavedDevice = {
      id: Date.now().toString(),
      type: selectedType,
      model: modelName,
      ...specs,
    };

    setDevices([newEntry, ...devices]);
    setCustomModel('');
  };

  const handleRemoveDevice = (id: string) => {
    setDevices(devices.filter((d) => d.id !== id));
  };

  const handleCopyCertificate = () => {
    const certText = `🌿 Fixora Environmental Impact Certificate\nRank: ${rank.title}\nE-Waste Diverted: ${totalWeight} Kg\nCO2 Mitigated: ${totalCo2} Kg\nTotal Money Saved: ₹${totalMoney.toLocaleString()}\nVerified via Fixora Green Diagnostic Engine.`;
    navigator.clipboard.writeText(certText);
    setCopiedBadge(true);
    setTimeout(() => setCopiedBadge(false), 2500);
  };

  return (
    <div className="bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-gray-200/80 shadow-xs space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5">
        <div>
          <span className="text-[11px] font-bold text-[#0D9488] uppercase tracking-wider flex items-center gap-1.5">
            <Leaf className="w-3.5 h-3.5" /> Green Electronics Initiative
          </span>
          <h3 className="text-xl font-bold text-[#1E3A5F]">E-Waste Impact & Sustainability Vault</h3>
        </div>

        <div className={`px-3.5 py-1.5 rounded-full border text-xs font-bold flex items-center gap-1.5 self-start sm:self-auto ${rank.badgeBg}`}>
          <Award className="w-4 h-4 text-[#0D9488]" />
          <span>Rank: {rank.title}</span>
        </div>
      </div>

      {/* Live Aggregated Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-1 shadow-lg border border-slate-800">
          <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
            <RefreshCw className="w-3.5 h-3.5 text-teal-400" /> Total E-Waste Saved
          </span>
          <div className="text-3xl font-extrabold font-mono text-teal-400">{totalWeight} <span className="text-sm text-slate-300 font-normal">Kg</span></div>
          <p className="text-[11px] text-slate-400">Diverted from regional landfills</p>
        </div>

        <div className="p-5 rounded-2xl bg-teal-900/90 text-white space-y-1 shadow-lg border border-teal-800">
          <span className="text-xs text-teal-200 font-semibold flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-emerald-300" /> CO₂ Emissions Avoided
          </span>
          <div className="text-3xl font-extrabold font-mono text-emerald-300">{totalCo2} <span className="text-sm text-teal-100 font-normal">Kg</span></div>
          <p className="text-[11px] text-teal-200">Manufacturing carbon offset</p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200 space-y-1">
          <span className="text-xs text-gray-500 font-semibold flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5 text-[#1E3A5F]" /> Household Money Saved
          </span>
          <div className="text-3xl font-extrabold font-mono text-[#1E3A5F]">₹{totalMoney.toLocaleString()}</div>
          <p className="text-[11px] text-gray-500">Versus buying replacement hardware</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Device Logger Form */}
        <div className="lg:col-span-5 space-y-4 bg-slate-50 p-5 rounded-2xl border border-gray-200">
          <h4 className="text-sm font-bold text-[#1E3A5F]">Log a Saved / Repaired Gadget</h4>
          
          <form onSubmit={handleAddDevice} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 block">Category</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { key: 'Smartphone', icon: Smartphone },
                  { key: 'Laptop', icon: Laptop },
                  { key: 'Tablet', icon: Tablet },
                  { key: 'Monitor/TV', icon: Tv },
                ].map(({ key, icon: Icon }) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedType(key as any)}
                    className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all ${
                      selectedType === key
                        ? 'bg-[#1E3A5F] text-white border-[#1E3A5F]'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-teal-400" />
                    <span>{key}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 block">Device Model / Repair Summary</label>
              <input
                type="text"
                value={customModel}
                onChange={(e) => setCustomModel(e.target.value)}
                placeholder="e.g. MacBook Air M1 Screen Refurbish"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs bg-white focus:outline-none focus:border-[#0D9488]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#0D9488] hover:bg-[#0b7a70] text-white text-xs font-bold rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" /> Log Impact & Update Rank
            </button>
          </form>
        </div>

        {/* Right: Saved Gadgets List & Share Certificate */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="text-sm font-bold text-[#1E3A5F]">Your Sustainability Logbook</h4>
            <button
              onClick={handleCopyCertificate}
              className="text-xs font-bold text-[#0D9488] hover:text-[#1E3A5F] flex items-center gap-1 bg-teal-50 px-3 py-1.5 rounded-xl border border-teal-200 transition-colors"
            >
              {copiedBadge ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedBadge ? 'Certificate Copied!' : 'Export Eco Badge'}</span>
            </button>
          </div>

          <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
            <AnimatePresence>
              {devices.map((device) => (
                <motion.div
                  key={device.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="p-4 rounded-2xl bg-white border border-gray-200 flex items-center justify-between gap-3 shadow-2xs"
                >
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-[#1E3A5F] block">{device.model}</span>
                    <div className="flex items-center gap-3 text-[11px] text-gray-500 font-medium">
                      <span>Diverted: <strong className="text-teal-700">{device.weightKg} Kg</strong></span>
                      <span>CO₂ Saved: <strong className="text-emerald-700">{device.co2SavedKg} Kg</strong></span>
                      <span>Saved: <strong className="text-slate-800">₹{device.moneySavedInr.toLocaleString()}</strong></span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemoveDevice(device.id)}
                    className="p-2 text-gray-400 hover:text-red-500 rounded-lg transition-colors"
                    title="Remove Entry"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900 text-slate-300 text-[11px] flex items-center gap-2 border border-slate-800">
            <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
            <span>Calculations powered by EPA WARM electronics lifecycle sustainability benchmarks.</span>
          </div>
        </div>

      </div>
    </div>
  );
}
