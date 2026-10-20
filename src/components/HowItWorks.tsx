import React, { useState } from 'react';
import {
  Send,
  FileCheck2,
  CalendarCheck,
  Headphones,
  Sparkles,
  Users,
  Compass,
  Check,
  MessageSquare,
  Copy,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { AGENCY_DETAILS, TOP_DESTINATIONS } from '../data/travelData';
import { getCustomPlanWhatsAppLink } from '../utils/whatsapp';

interface HowItWorksProps {
  initialDestination?: string;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ initialDestination }) => {
  // Custom Planner State
  const [destination, setDestination] = useState(initialDestination || 'Royal Rajasthan & Pink City');
  const [travelers, setTravelers] = useState(2);
  const [days, setDays] = useState(5);
  const [comfort, setComfort] = useState('Premium 4-Star Boutique');
  const [travelMonth, setTravelMonth] = useState('Next Month');
  const [wishes, setWishes] = useState<string[]>([
    'Private Chauffeur & Vehicle',
    'Daily Breakfast Buffet',
  ]);
  const [customNotes, setCustomNotes] = useState('');
  const [copied, setCopied] = useState(false);

  // Toggle special wish
  const toggleWish = (wish: string) => {
    if (wishes.includes(wish)) {
      setWishes(wishes.filter((w) => w !== wish));
    } else {
      setWishes([...wishes, wish]);
    }
  };

  // Dynamic budget calculation heuristic
  const baseRatePerDay: Record<string, number> = {
    'Budget Friendly (3-Star)': 2800,
    'Premium 4-Star Boutique': 4400,
    'Royal Heritage & 5-Star Luxury': 7800,
  };

  const isInternational =
    destination.includes('Dubai') || destination.includes('Bali') || destination.includes('Thailand');
  const intlMultiplier = isInternational ? 1.6 : 1.0;
  const ratePerPersonDay = (baseRatePerDay[comfort] || 4400) * intlMultiplier;
  const estimatedTotal = Math.round(ratePerPersonDay * days * travelers);
  const estimatedPerPerson = Math.round(ratePerPersonDay * days);

  const estimatedBudgetStr = `₹${estimatedPerPerson.toLocaleString('en-IN')} / person (₹${estimatedTotal.toLocaleString('en-IN')} total for ${travelers} travelers)`;

  const allNotes = [...wishes, customNotes].filter(Boolean).join(', ');

  const whatsappUrl = getCustomPlanWhatsAppLink({
    destination,
    travelers,
    days,
    comfort,
    travelMonth,
    notes: allNotes,
    estimatedBudget: estimatedBudgetStr,
  });

  const handleCopySummary = () => {
    const text = `Pinkcityroutes Custom Plan:\nDestination: ${destination}\nTravelers: ${travelers}\nDays: ${days}\nHotel Tier: ${comfort}\nMonth: ${travelMonth}\nPreferences: ${allNotes}\nEstimated Budget: ${estimatedBudgetStr}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const steps = [
    {
      number: '01',
      title: 'Tell us your destination, dates, and group size',
      description:
        'Share your preferred travel style, dream places, companion count, and target month. No cookie-cutter packages — your brief sets the foundation.',
      icon: Send,
      badge: 'Step 1: Your Brief',
    },
    {
      number: '02',
      title: 'Receive a tailor-made day-by-day itinerary with transparent pricing from Harshvardhan',
      description:
        'Harshvardhan reviews your request personally and crafts a bespoke route with handpicked boutique stays, scenic stops, and zero hidden markups.',
      icon: FileCheck2,
      badge: 'Step 2: Founder Curation',
    },
    {
      number: '03',
      title: 'Confirm with flexible booking, verified vouchers, and round-the-clock on-trip assistance',
      description:
        'Lock your dates with easy milestone deposits. Receive verified hotel vouchers, dedicated driver credentials, and 24/7 on-call coordinator support.',
      icon: CalendarCheck,
      badge: 'Step 3: Verified Booking',
    },
    {
      number: '04',
      title: 'Pack your bags and embark on a memory of a lifetime with on-ground concierge support',
      description:
        'Relax and explore seamlessly. Harshvardhan and our local fleet concierge stay connected on WhatsApp to ensure your comfort at every step.',
      icon: Headphones,
      badge: 'Step 4: Seamless Travel',
    },
  ];

  const availableWishes = [
    'Private Chauffeur & Vehicle',
    'Daily Breakfast Buffet',
    'Houseboat / Heritage Stay',
    'Honeymoon Special Setup',
    'Pure Veg / Jain Food Preference',
    'Airport Pickup & Drop Off',
    'Family with Kids / Senior Friendly',
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#F5F0E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C83E5C] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Effortless 4-Step Journey
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            How It Works / Custom Tour Planning
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            From your first spark of inspiration to your return flight, experience seamless travel
            curation guided personally by Harshvardhan and team.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group"
              >
                {/* Step indicator */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-3xl font-bold text-stone-300 group-hover:text-[#C83E5C] transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#C83E5C] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C83E5C] block mb-2">
                    {step.badge}
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-900 leading-snug mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Harshvardhan Supervised</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Custom Tour Planning / Cost Estimator Tool */}
        <div id="planner" className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Form Controls (Left 7 Cols) */}
            <div className="p-8 lg:p-10 lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C83E5C] block mb-1">
                  Interactive Planner
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                  Build Your Custom Itinerary
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Select your preferences below to get an indicative quote and connect with Harshvardhan directly on WhatsApp.
                </p>
              </div>

              {/* Destination & Month */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    1. Destination
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
                  >
                    {TOP_DESTINATIONS.map((d) => (
                      <option key={d.id} value={d.name}>
                        {d.name}
                      </option>
                    ))}
                    <option value="Custom Multi-City India">Custom Multi-City India Tour</option>
                    <option value="International Custom Itinerary">International Custom Itinerary</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    2. Preferred Travel Month
                  </label>
                  <select
                    value={travelMonth}
                    onChange={(e) => setTravelMonth(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
                  >
                    <option value="Within Next 2 Weeks">Within Next 2 Weeks</option>
                    <option value="Next Month">Next Month</option>
                    <option value="November - December">November - December</option>
                    <option value="January - February">January - February</option>
                    <option value="Summer (April - June)">Summer (April - June)</option>
                    <option value="Flexible / Exploring Dates">Flexible / Exploring Dates</option>
                  </select>
                </div>
              </div>

              {/* Travelers & Duration */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      3. Group Size
                    </label>
                    <span className="text-xs font-semibold text-[#C83E5C]">
                      {travelers} {travelers === 1 ? 'Traveler' : 'Travelers'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {[1, 2, 4, 6, 8].map((count) => (
                      <button
                        key={count}
                        type="button"
                        onClick={() => setTravelers(count)}
                        className={`flex-1 py-2 text-xs font-bold rounded-lg border transition-all ${
                          travelers === count
                            ? 'bg-[#C83E5C] text-white border-[#C83E5C]'
                            : 'bg-stone-50 text-slate-700 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        {count === 8 ? '8+' : count}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      4. Duration
                    </label>
                    <span className="text-xs font-semibold text-[#C83E5C]">
                      {days} Days / {days - 1} Nights
                    </span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="14"
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    className="w-full accent-[#C83E5C] h-2 bg-stone-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>3 Days (Weekend)</span>
                    <span>7 Days (Standard)</span>
                    <span>14 Days (Grand)</span>
                  </div>
                </div>
              </div>

              {/* Hotel Tier */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  5. Accommodation Preference
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { label: 'Budget Friendly (3-Star)', desc: 'Clean, verified standard hotels' },
                    { label: 'Premium 4-Star Boutique', desc: 'Handpicked boutique & 4-star stays' },
                    { label: 'Royal Heritage & 5-Star Luxury', desc: 'Palace havelis & luxury resorts' },
                  ].map((tier) => (
                    <button
                      key={tier.label}
                      type="button"
                      onClick={() => setComfort(tier.label)}
                      className={`text-left p-3 rounded-xl border transition-all ${
                        comfort === tier.label
                          ? 'border-[#C83E5C] bg-[#FAF7F2] ring-1 ring-[#C83E5C]'
                          : 'border-stone-200 bg-stone-50/50 hover:bg-stone-100'
                      }`}
                    >
                      <div className="text-xs font-bold text-slate-900">{tier.label.split(' ')[0]}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{tier.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Inclusions & Wishes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  6. Special Preferences & Inclusions
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableWishes.map((wish) => {
                    const active = wishes.includes(wish);
                    return (
                      <button
                        key={wish}
                        type="button"
                        onClick={() => toggleWish(wish)}
                        className={`text-xs px-3 py-1.5 rounded-lg border flex items-center gap-1.5 transition-all ${
                          active
                            ? 'bg-[#C83E5C] text-white border-[#C83E5C]'
                            : 'bg-white text-slate-700 border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        <Check className={`w-3 h-3 ${active ? 'opacity-100' : 'opacity-30'}`} />
                        <span>{wish}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Custom message box */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  7. Any Specific Requests or Notes (Optional)
                </label>
                <input
                  type="text"
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="e.g., Honeymoon bed decoration, want Lake view room, Jain food only..."
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C83E5C]"
                />
              </div>
            </div>

            {/* Live Estimation & WhatsApp Action Card (Right 5 Cols) */}
            <div className="bg-[#121E2C] text-white p-8 lg:p-10 lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs uppercase tracking-wider text-amber-300 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Bespoke Trip Summary
                  </span>
                  <span className="text-[11px] text-slate-400">Jaipur HQ Desk</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Destination</span>
                    <span className="font-semibold text-white text-right">{destination}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Travel Period</span>
                    <span className="font-semibold text-white">{travelMonth}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Duration & Size</span>
                    <span className="font-semibold text-white">
                      {days} Days · {travelers} Traveler(s)
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Comfort Level</span>
                    <span className="font-semibold text-white">{comfort}</span>
                  </div>
                  {wishes.length > 0 && (
                    <div className="pt-1">
                      <span className="text-slate-400 block mb-1">Preferences Selected:</span>
                      <div className="flex flex-wrap gap-1 text-[11px] text-amber-200">
                        {wishes.map((w, i) => (
                          <span key={i} className="bg-slate-800/80 px-2 py-0.5 rounded">
                            {w}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Calculated Indicative Price */}
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-700/60">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block">
                    Estimated Budget Range
                  </span>
                  <div className="font-display text-3xl font-bold text-amber-300 mt-1">
                    ₹{estimatedPerPerson.toLocaleString('en-IN')}{' '}
                    <span className="text-xs font-normal text-slate-400">/ person</span>
                  </div>
                  <div className="text-xs text-slate-300 mt-1 font-medium">
                    Total Estimated Package: ₹{estimatedTotal.toLocaleString('en-IN')} for {travelers} traveler(s)
                  </div>

                  <div className="mt-3 p-3 rounded-xl bg-slate-950/70 border border-slate-700/80 text-[11px] leading-relaxed text-slate-300">
                    <span className="font-semibold text-amber-300 block mb-1">
                      Transparent Custom Add-ons & Pricing Notice:
                    </span>
                    Base package prices cover core travel essentials. Upgrading hotel tiers, private vehicles, or special sightseeing activities will be calculated transparently with zero hidden charges. Chat directly with Harshvardhan on WhatsApp (+91 98932 21141) for a customized real-time quote.
                  </div>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="pt-6 space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-bold text-sm py-3.5 px-6 rounded-xl shadow-lg transition-all"
                >
                  <MessageSquare className="w-5 h-5 fill-slate-950/20" />
                  <span>Send Request to Harshvardhan on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Trip Summary'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
