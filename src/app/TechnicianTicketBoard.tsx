'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Phone, CheckCircle2, Clock, AlertCircle, 
  FileText, MapPin, ChevronRight, X, Building2 
} from 'lucide-react';

export interface Ticket {
  id: string;
  customerName: string;
  customerPhone: string;
  deviceModel: string;
  region: 'Vijayawada' | 'Guntur' | 'Amaravati';
  defectSummary: string;
  estimatedCost: number;
  status: 'Pending AI Scan' | 'In Repair' | 'Completed';
  timestamp: string;
}

const INITIAL_TICKETS: Ticket[] = [
  {
    id: 'FX-8941',
    customerName: 'Anil Kumar',
    customerPhone: '090321 31410',
    deviceModel: 'iPhone 13 Pro',
    region: 'Vijayawada',
    defectSummary: 'Display Digitizer & Touch Glass Micro-Fracture',
    estimatedCost: 2900,
    status: 'Pending AI Scan',
    timestamp: '10 Mins ago'
  },
  {
    id: 'FX-8942',
    customerName: 'Sita Ram',
    customerPhone: '099486 64242',
    deviceModel: 'MacBook Air M1',
    region: 'Vijayawada',
    defectSummary: 'Battery Degradation & Voltage Drop',
    estimatedCost: 4600,
    status: 'In Repair',
    timestamp: '25 Mins ago'
  },
  {
    id: 'FX-8943',
    customerName: 'Praveen Raju',
    customerPhone: '099488 84178',
    deviceModel: 'Samsung Galaxy S22',
    region: 'Amaravati',
    defectSummary: 'USB-C Charging Port Oxidation',
    estimatedCost: 1250,
    status: 'Pending AI Scan',
    timestamp: '40 Mins ago'
  },
  {
    id: 'FX-8944',
    customerName: 'K. Venkatesh',
    customerPhone: '062813 00037',
    deviceModel: 'Dell XPS 15',
    region: 'Guntur',
    defectSummary: 'Thermal Paste Re-application & Fan Swap',
    estimatedCost: 1800,
    status: 'In Repair',
    timestamp: '1 Hour ago'
  },
  {
    id: 'FX-8945',
    customerName: 'Meghana Rao',
    customerPhone: '098566 69993',
    deviceModel: 'OnePlus 11',
    region: 'Guntur',
    defectSummary: 'OLED Display Green Line IC Repair',
    estimatedCost: 3200,
    status: 'Completed',
    timestamp: '2 Hours ago'
  }
];

export default function TechnicianTicketBoard() {
  const [tickets, setTickets] = useState<Ticket[]>(INITIAL_TICKETS);
  const [activeTab, setActiveTab] = useState<'All' | 'Pending AI Scan' | 'In Repair' | 'Completed'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [receiptTicket, setReceiptTicket] = useState<Ticket | null>(null);

  const totalActive = tickets.filter(t => t.status !== 'Completed').length;
  const pendingScans = tickets.filter(t => t.status === 'Pending AI Scan').length;
  const completedToday = tickets.filter(t => t.status === 'Completed').length;

  const handleStatusChange = (ticketId: string, newStatus: Ticket['status']) => {
    setTickets(prev => prev.map(t => t.id === ticketId ? { ...t, status: newStatus } : t));
  };

  const filteredTickets = tickets.filter(t => {
    const matchesTab = activeTab === 'All' || t.status === activeTab;
    const matchesSearch = 
      t.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.deviceModel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.region.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-gray-200/80 shadow-xs space-y-8">
      {/* Header & Quick Stats */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-5">
          <div>
            <span className="text-[11px] font-bold text-[#0D9488] uppercase tracking-wider flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5" /> Partner Technician Portal
            </span>
            <h3 className="text-xl font-bold text-[#1E3A5F]">Regional Ticket Dispatch Board</h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-[#1E3A5F] text-xs font-bold border border-gray-200">
              Region: AP Central (Vijayawada / Guntur)
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-gray-200/80 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-xs font-semibold text-gray-500">Active Queue Jobs</span>
              <div className="text-2xl font-extrabold text-[#1E3A5F] font-mono">{totalActive}</div>
            </div>
            <div className="p-3 rounded-xl bg-blue-50 text-[#1E3A5F]">
              <Clock className="w-5 h-5" />
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-xs font-semibold text-amber-800">Pending Diagnostics</span>
              <div className="text-2xl font-extrabold text-amber-900 font-mono">{pendingScans}</div>
            </div>
            <div className="p-3 rounded-xl bg-amber-100 text-amber-800">
              <AlertCircle className="w-5 h-5" />
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-xs font-semibold text-emerald-800">Completed Today</span>
              <div className="text-2xl font-extrabold text-emerald-900 font-mono">{completedToday}</div>
            </div>
            <div className="p-3 rounded-xl bg-emerald-100 text-emerald-800">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-semibold p-1 bg-slate-100 rounded-2xl border border-gray-200">
          {(['All', 'Pending AI Scan', 'In Repair', 'Completed'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setActiveTab(status)}
              className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap ${
                activeTab === status
                  ? 'bg-[#1E3A5F] text-white shadow-xs'
                  : 'text-gray-600 hover:text-[#1E3A5F]'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Ticket ID or Customer..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:border-[#0D9488] transition-all"
          />
        </div>
      </div>

      {/* Tickets List */}
      <div className="space-y-3">
        {filteredTickets.map((ticket) => (
          <motion.div
            key={ticket.id}
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-5 rounded-2xl bg-white border border-gray-200/90 hover:border-teal-300 shadow-2xs hover:shadow-xs transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="space-y-1.5 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono font-bold text-[#1E3A5F] bg-slate-100 px-2 py-0.5 rounded-md border border-gray-200">
                  {ticket.id}
                </span>
                <span className="font-bold text-xs text-gray-900">{ticket.customerName}</span>
                <span className="text-[11px] text-gray-400">• {ticket.timestamp}</span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                  ticket.status === 'Completed' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                  ticket.status === 'In Repair' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                  'bg-amber-50 text-amber-700 border border-amber-200'
                }`}>
                  {ticket.status}
                </span>
              </div>

              <div className="text-xs font-semibold text-[#1E3A5F]">
                {ticket.deviceModel} — <span className="text-gray-600 font-normal">{ticket.defectSummary}</span>
              </div>

              <div className="flex items-center gap-3 text-[11px] text-gray-500 font-medium">
                <span className="flex items-center gap-1 text-teal-700 font-semibold">
                  <MapPin className="w-3 h-3 text-[#0D9488]" /> {ticket.region}
                </span>
                <span>Quoted Total: <strong className="font-mono text-[#1E3A5F]">₹{ticket.estimatedCost.toLocaleString()}</strong></span>
              </div>
            </div>

            <div className="flex items-center gap-2 border-t md:border-t-0 pt-3 md:pt-0 shrink-0">
              <a
                href={`tel:${ticket.customerPhone}`}
                className="p-2.5 bg-slate-100 hover:bg-slate-200 text-[#1E3A5F] text-xs font-bold rounded-xl transition-colors border border-gray-200 flex items-center gap-1"
                title="Call Customer"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>

              {ticket.status === 'Pending AI Scan' && (
                <button
                  onClick={() => handleStatusChange(ticket.id, 'In Repair')}
                  className="px-3.5 py-2.5 bg-[#1E3A5F] hover:bg-[#152a45] text-white text-xs font-bold rounded-xl transition-all shadow-2xs flex items-center gap-1"
                >
                  Accept Ticket <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}

              {ticket.status === 'In Repair' && (
                <button
                  onClick={() => handleStatusChange(ticket.id, 'Completed')}
                  className="px-3.5 py-2.5 bg-[#0D9488] hover:bg-[#0b7a70] text-white text-xs font-bold rounded-xl transition-all shadow-2xs flex items-center gap-1"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" /> Mark Ready
                </button>
              )}

              <button
                onClick={() => setReceiptTicket(ticket)}
                className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#1E3A5F] text-xs font-bold rounded-xl transition-colors border border-gray-200 flex items-center gap-1"
              >
                <FileText className="w-3.5 h-3.5 text-teal-600" /> Receipt
              </button>
            </div>
          </motion.div>
        ))}

        {filteredTickets.length === 0 && (
          <div className="p-8 text-center text-xs text-gray-500 bg-slate-50 rounded-2xl border border-dashed border-gray-200">
            No repair tickets matching your active filter.
          </div>
        )}
      </div>

      {/* Printable Receipt Modal */}
      <AnimatePresence>
        {receiptTicket && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-100 relative space-y-5"
            >
              <button
                onClick={() => setReceiptTicket(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center space-y-1 pt-2">
                <span className="text-[10px] font-bold text-[#0D9488] uppercase tracking-widest font-mono">FIXORA REPAIR SLIP</span>
                <h3 className="text-lg font-bold text-[#1E3A5F]">Ticket {receiptTicket.id}</h3>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-gray-200 space-y-2 text-xs">
                <div className="flex justify-between text-gray-600">
                  <span>Customer Name:</span>
                  <span className="font-bold text-[#1E3A5F]">{receiptTicket.customerName}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Device Hardware:</span>
                  <span className="font-semibold text-[#1E3A5F]">{receiptTicket.deviceModel}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Isolated Defect:</span>
                  <span className="font-medium text-gray-800">{receiptTicket.defectSummary}</span>
                </div>
                <div className="flex justify-between text-gray-600 border-t border-gray-200 pt-2">
                  <span>Service Region:</span>
                  <span className="font-semibold text-teal-700">{receiptTicket.region}</span>
                </div>
                <div className="flex justify-between text-gray-900 font-bold border-t border-gray-200 pt-2 text-sm">
                  <span>Final Quoted Total:</span>
                  <span className="text-[#0D9488] font-mono">₹{receiptTicket.estimatedCost.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={() => setReceiptTicket(null)}
                className="w-full py-3 bg-[#1E3A5F] hover:bg-[#162a45] text-white text-xs font-bold rounded-xl shadow-md"
              >
                Close Printable Slip
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}