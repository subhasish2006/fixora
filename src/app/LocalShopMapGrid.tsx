'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  MapPin, Phone, Star, Wrench, Search, Calendar, 
  Clock, CheckCircle2, X, ShieldCheck, Navigation, 
  ChevronRight, Filter, Sparkles, User, FileText
} from 'lucide-react';

export interface Shop {
  id: string;
  name: string;
  region: 'Vijayawada' | 'Guntur' | 'Amaravati';
  area: string;
  rating: number;
  reviewCount: number;
  address: string;
  phone: string;
  specialty: string;
  distance: string;
  turnaround: string;
  verified: boolean;
}

const REGIONAL_SHOPS: Shop[] = [
  {
    id: 'shop-1',
    name: "Revanth Mobile's / Laptop Service Center",
    region: 'Vijayawada',
    area: 'Samarangam Chowk, 1 Town',
    rating: 5.0,
    reviewCount: 107,
    address: 'Samarangam Chowk, 1 Town, Vijayawada, AP 520001',
    phone: '090321 31410',
    specialty: 'Smartphone & Laptop Chip Level Repair',
    distance: '12.9 km',
    turnaround: '30-45 Mins',
    verified: true,
  },
  {
    id: 'shop-2',
    name: 'NR TECHNOLOGIES',
    region: 'Vijayawada',
    area: 'Labbipet',
    rating: 4.9,
    reviewCount: 2040,
    address: 'Swati Towers, Rama Rao St, Labbipet, Vijayawada, AP 520010',
    phone: '099486 64242',
    specialty: 'Laptop Motherboard & Display Specialist',
    distance: '16.0 km',
    turnaround: '45-60 Mins',
    verified: true,
  },
  {
    id: 'shop-3',
    name: 'Vivekananda Mobiles',
    region: 'Amaravati',
    area: 'Amaravati Road',
    rating: 5.0,
    reviewCount: 18,
    address: 'Near Mandaram Centre, Amaravati Road, AP 522241',
    phone: '099488 84178',
    specialty: 'Fast Mobile Screen & Battery Replacement',
    distance: '4.4 km',
    turnaround: '20-30 Mins',
    verified: true,
  },
  {
    id: 'shop-4',
    name: 'SS Electronics',
    region: 'Guntur',
    area: 'Christian Pet',
    rating: 4.9,
    reviewCount: 155,
    address: 'Nandivelugu Rd, Christian Pet, Guntur, AP 522001',
    phone: '062813 00037',
    specialty: 'Component IC & Board Diagnostics',
    distance: '22.6 km',
    turnaround: '60 Mins',
    verified: true,
  },
  {
    id: 'shop-5',
    name: 'Tanvi Mobile Service And Sale',
    region: 'Guntur',
    area: 'Guntur Lodge Center',
    rating: 4.7,
    reviewCount: 587,
    address: 'Guntur Lodge Center, Amaravati Rd, Guntur, AP 522002',
    phone: '098566 69993',
    specialty: 'Express Glass & Water Damage Fixes',
    distance: '21.5 km',
    turnaround: '30 Mins',
    verified: true,
  },
  {
    id: 'shop-6',
    name: 'KK Systems',
    region: 'Vijayawada',
    area: 'Governor Peta',
    rating: 4.6,
    reviewCount: 945,
    address: 'NTR Complex, Governor Peta, Vijayawada, AP 520002',
    phone: '079892 33768',
    specialty: 'OEM Laptop & Gadget Hardware Service',
    distance: '14.4 km',
    turnaround: '45 Mins',
    verified: true,
  },
];

export default function LocalShopMapGrid() {
  const [selectedRegion, setSelectedRegion] = useState<'All' | 'Vijayawada' | 'Guntur' | 'Amaravati'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookingShop, setBookingShop] = useState<Shop | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Form State
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [bookingDate, setBookingDate] = useState('2026-11-04');
  const [bookingTime, setBookingTime] = useState('11:00 AM');
  const [deviceNotes, setDeviceNotes] = useState('iPhone display replacement scan #FX-8941');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const filteredShops = REGIONAL_SHOPS.filter((shop) => {
    const matchesRegion = selectedRegion === 'All' || shop.region === selectedRegion;
    const matchesSearch = 
      shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shop.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shop.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <div className="space-y-8">
      {/* Top Filter & Search Controls */}
      <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-gray-200/80 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-[#1E3A5F] flex items-center gap-2">
              <Navigation className="w-4 h-4 text-[#0D9488]" /> Regional Repair Shop Matchmaker
            </h3>
            <p className="text-xs text-[#6B7280]">
              Google Maps verified independent technicians across Vijayawada, Guntur, and Amaravati.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by shop name, chip level, display..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:border-[#0D9488] transition-all"
            />
          </div>
        </div>

        {/* Region Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 text-xs font-semibold">
          <span className="text-gray-400 flex items-center gap-1 mr-2 text-[11px] uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5" /> Region:
          </span>
          {(['All', 'Vijayawada', 'Guntur', 'Amaravati'] as const).map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
                selectedRegion === region
                  ? 'bg-[#1E3A5F] text-white shadow-xs'
                  : 'bg-slate-100 text-[#4B5563] hover:bg-slate-200'
              }`}
            >
              {region === 'All' ? 'All Locations (6)' : `${region}`}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Shops */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredShops.map((shop) => (
          <motion.div
            key={shop.id}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-gray-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group relative overflow-hidden"
          >
            <div className="space-y-3">
              {/* Header Badge */}
              <div className="flex items-start justify-between gap-2">
                <div className="p-2.5 rounded-xl bg-teal-50 text-[#0D9488]">
                  <Wrench className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5">
                  {shop.verified && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-teal-50 text-[#0D9488] text-[10px] font-bold border border-teal-200">
                      <ShieldCheck className="w-3 h-3" /> Verified Partner
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-[10px] font-bold border border-amber-200">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> {shop.rating.toFixed(1)} ({shop.reviewCount})
                  </span>
                </div>
              </div>

              {/* Title & Address */}
              <div>
                <h4 className="font-bold text-[#1E3A5F] text-sm group-hover:text-[#0D9488] transition-colors leading-snug">
                  {shop.name}
                </h4>
                <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span className="truncate">{shop.address}</span>
                </p>
              </div>

              {/* Specialty & Turnaround */}
              <div className="p-3 rounded-2xl bg-slate-50 border border-gray-100 space-y-1.5 text-xs">
                <div className="text-teal-800 font-semibold flex items-center justify-between">
                  <span>{shop.specialty}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-gray-500 font-medium">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-teal-600" /> Avg: {shop.turnaround}</span>
                  <span className="font-mono text-teal-700 font-bold">{shop.distance} away</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100">
              <a
                href={`tel:${shop.phone}`}
                className="py-2.5 bg-slate-100 hover:bg-slate-200 text-[#1E3A5F] text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 border border-gray-200"
              >
                <Phone className="w-3.5 h-3.5" /> Direct Call
              </a>
              <button
                onClick={() => {
                  setBookingShop(shop);
                  setBookingConfirmed(false);
                }}
                className="py-2.5 bg-[#0D9488] hover:bg-[#0b7a70] text-white text-xs font-bold rounded-xl transition-all shadow-xs flex items-center justify-center gap-1"
              >
                Book Repair <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Booking Modal */}
      <AnimatePresence>
        {bookingShop && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-gray-100 relative space-y-6"
            >
              <button
                onClick={() => setBookingShop(null)}
                className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-600 rounded-full bg-slate-100 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {bookingConfirmed ? (
                <div className="text-center space-y-5 py-4">
                  <div className="w-16 h-16 rounded-full bg-teal-50 text-[#0D9488] flex items-center justify-center mx-auto shadow-inner border border-teal-200">
                    <CheckCircle2 className="w-8 h-8 animate-bounce" />
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-[#0D9488] uppercase tracking-wider">Booking Slot Reserved</span>
                    <h3 className="text-xl font-bold text-[#1E3A5F]">Ticket #FX-BOOK-{Math.floor(1000 + Math.random() * 9000)}</h3>
                    <p className="text-xs text-gray-500 max-w-xs mx-auto">
                      Your diagnostic report and priority service slot have been dispatched to <span className="font-semibold text-[#1E3A5F]">{bookingShop.name}</span>.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-gray-200 text-left text-xs space-y-2">
                    <div className="flex justify-between text-gray-600">
                      <span>Technician Address:</span>
                      <span className="font-semibold text-[#1E3A5F]">{bookingShop.area}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Scheduled Date & Time:</span>
                      <span className="font-semibold text-[#0D9488]">{bookingDate} • {bookingTime}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Customer Contact:</span>
                      <span className="font-semibold text-[#1E3A5F]">{userPhone || '+91 90321 31410'}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setBookingShop(null)}
                    className="w-full py-3.5 bg-[#1E3A5F] hover:bg-[#162a45] text-white text-xs font-bold rounded-xl transition-all shadow-md"
                  >
                    Done & Return to Map
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[#0D9488] uppercase tracking-wider flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Priority Reservation
                    </span>
                    <h3 className="text-xl font-bold text-[#1E3A5F]">Book Repair at {bookingShop.name}</h3>
                    <p className="text-xs text-gray-500">Lock in your diagnostic quotation and skip shop queues.</p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="text-xs font-semibold text-gray-700 block mb-1">Your Name</label>
                      <div className="relative">
                        <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          required
                          type="text"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          placeholder="e.g., Subhasish Dash"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:border-[#0D9488]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-700 block mb-1">Mobile Number</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          required
                          type="tel"
                          value={userPhone}
                          onChange={(e) => setUserPhone(e.target.value)}
                          placeholder="+91 90321 31410"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:border-[#0D9488]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-semibold text-gray-700 block mb-1">Preferred Date</label>
                        <input
                          type="date"
                          value={bookingDate}
                          onChange={(e) => setBookingDate(e.target.value)}
                          className="w-full p-2.5 rounded-xl border border-gray-200 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:border-[#0D9488]"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-700 block mb-1">Preferred Time</label>
                        <select
                          value={bookingTime}
                          onChange={(e) => setBookingTime(e.target.value)}
                          className="w-full p-2.5 rounded-xl border border-gray-200 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:border-[#0D9488]"
                        >
                          <option>10:00 AM</option>
                          <option>11:30 AM</option>
                          <option>02:00 PM</option>
                          <option>04:30 PM</option>
                          <option>06:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-700 block mb-1">Device Issue Notes</label>
                      <input
                        type="text"
                        value={deviceNotes}
                        onChange={(e) => setDeviceNotes(e.target.value)}
                        placeholder="Device model and defect brief..."
                        className="w-full p-2.5 rounded-xl border border-gray-200 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:border-[#0D9488]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#0D9488] hover:bg-[#0b7a70] text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 mt-4"
                  >
                    <Calendar className="w-4 h-4" /> Confirm Repair Reservation
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}