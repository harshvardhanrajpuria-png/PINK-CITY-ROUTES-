import React, { useState } from 'react';
import { Users, Briefcase, Car, ShieldCheck, MessageSquare, Sparkles, Phone, Check } from 'lucide-react';
import { FLEET_CATEGORIES, FleetCategory, AGENCY_DETAILS } from '../data/travelData';
import { getFleetBookingWhatsAppLink } from '../utils/whatsapp';

export const FleetSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'sedan' | 'suv' | 'luxury' | 'coach'>('all');

  const filteredFleet = FLEET_CATEGORIES.filter((vehicle) => {
    if (activeCategory === 'all') return true;
    return vehicle.category === activeCategory;
  });

  return (
    <section id="fleet" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C83E5C] mb-2">
              <Car className="w-3.5 h-3.5" />
              Verified Private Chauffeur Fleet
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Pinkcityroutes Fleet & Rental Categories
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              From economical city sedans to royal Maharaja luxury tempos and Volvo coaches.
              Every vehicle is commercially licensed, sanitized, and driven by a polite, vetted chauffeur.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="inline-flex p-1 bg-stone-200/80 rounded-xl self-start md:self-auto flex-wrap">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Categories ({FLEET_CATEGORIES.length})
            </button>
            <button
              onClick={() => setActiveCategory('sedan')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'sedan'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Sedans
            </button>
            <button
              onClick={() => setActiveCategory('suv')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'suv'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              SUVs & MUVs
            </button>
            <button
              onClick={() => setActiveCategory('luxury')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'luxury'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Luxury & VIP
            </button>
            <button
              onClick={() => setActiveCategory('coach')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'coach'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Group Tempos & Coaches
            </button>
          </div>
        </div>

        {/* Structured Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFleet.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div>
                {/* Vehicle Image */}
                <div className="relative h-44 overflow-hidden bg-stone-100">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Rate Badge in Image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                    <span className="font-display text-base font-bold text-amber-300">
                      {vehicle.rateEstimate}
                    </span>
                    <span className="text-[10px] text-slate-300 bg-slate-950/60 backdrop-blur-xs px-2 py-0.5 rounded">
                      Chauffeur Included
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 space-y-4">
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900 leading-tight">
                      {vehicle.name}
                    </h3>
                    <p className="text-xs text-[#C83E5C] font-semibold mt-0.5">
                      {vehicle.models}
                    </p>
                  </div>

                  {/* Capacity Metrics */}
                  <div className="grid grid-cols-2 gap-2 p-2.5 bg-[#FAF7F2] rounded-xl border border-stone-100 text-xs">
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Users className="w-3.5 h-3.5 text-[#C83E5C] shrink-0" />
                      <span className="font-medium text-[11px] truncate">{vehicle.passengerCapacity}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Briefcase className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span className="font-medium text-[11px] truncate">{vehicle.luggageCapacity}</span>
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Ideal Use Case:
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {vehicle.idealFor}
                    </p>
                  </div>

                  {/* Key Features */}
                  <ul className="space-y-1">
                    {vehicle.features.slice(0, 2).map((feat, fIdx) => (
                      <li key={fIdx} className="text-[11px] text-slate-500 flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Book Button */}
              <div className="p-5 pt-0">
                <a
                  href={getFleetBookingWhatsAppLink(vehicle.name, vehicle.passengerCapacity)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#128C7E] hover:bg-[#075E54] text-white text-xs font-bold py-2.5 px-3 rounded-xl shadow-xs transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Book with Chauffeur</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Global Fleet CTA Banner */}
        <div className="mt-14 max-w-4xl mx-auto bg-gradient-to-r from-slate-900 to-[#101B2B] rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-white">
                Book Any Vehicle Instantly with Chauffeur
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Flexible hourly packages, outstation charters, and airport transfers guided directly by Harsh Vardhan Gupta, Ananya Gupta and our fleet ops.
              </p>
            </div>
          </div>

          <a
            href={getFleetBookingWhatsAppLink('Any Fleet Vehicle (Custom Selection)', 'Flexible Group Size')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-bold text-xs sm:text-sm py-3.5 px-6 rounded-xl shadow-lg transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950/20" />
            <span>Book via WhatsApp (+91 98932 21141)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
