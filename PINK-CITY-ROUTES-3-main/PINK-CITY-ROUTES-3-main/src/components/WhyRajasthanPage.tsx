import React from 'react';
import {
  Sparkles,
  MapPin,
  Compass,
  ArrowLeft,
  ChevronRight,
  MessageSquare,
  PhoneCall,
  Heart,
  Landmark,
  Sun,
  Palette,
  Shield,
  CheckCircle2,
} from 'lucide-react';
import { AGENCY_DETAILS } from '../data/travelData';
import { getGeneralWhatsAppLink, createWhatsAppUrl } from '../utils/whatsapp';

interface WhyRajasthanPageProps {
  onBackToHome: () => void;
  onExplorePackages: () => void;
  onOpenPlanner: () => void;
}

export const WhyRajasthanPage: React.FC<WhyRajasthanPageProps> = ({
  onBackToHome,
  onExplorePackages,
  onOpenPlanner,
}) => {
  const sections = [
    {
      id: 'architecture',
      badge: 'Living Stone Heritage',
      icon: Landmark,
      title: 'Architectural Marvels: Citadel Bastions & Lake Palaces',
      lead: 'Nowhere else in the world do 800-year-old fortresses pulse with active everyday life.',
      desc: 'From the golden limestone of Jaisalmer’s Sonar Qila where generational families still reside within medieval bastions, to the clifftop ramparts of Jodhpur’s Mehrangarh towering 400 feet above the azure city, Rajasthan is an open-air living museum. In Udaipur, white marble palaces float weightlessly above the placid waters of Lake Pichola against the sunset silhouette of the Aravallis.',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Amer Fort ramparts and courtyards, Jaipur',
      highlights: ['Amer Fort & Jaigarh Fort cannons', 'Sonar Qila living citadel in Jaisalmer', 'Mehrangarh Fort clifftop bastion in Jodhpur', 'City Palace & Lake Pichola in Udaipur'],
      reverse: false,
    },
    {
      id: 'landscapes',
      badge: 'Nature’s Poetry',
      icon: Sun,
      title: 'Landscape Contrasts: From Ancient Aravalli Ridges to Thar Dunes',
      lead: 'A dramatic geography that transitions from lush hill passes to whispering desert sands.',
      desc: 'Rajasthan is far more than sand dunes. It is cradled by the Aravalli Range—one of the oldest mountain systems on Earth—folding into misty forested valleys around Kumbhalgarh, Ranakpur, and Mount Abu. Drive just a few hours west, and the granite peaks yield to the sweeping golden dunes of the Great Thar Desert, where clear constellations ignite the desert night sky over Sam and Khuri.',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Golden sand dunes in Thar Desert Rajasthan',
      highlights: ['Ancient Aravalli granite mountain passes', 'Sam & Khuri golden sand dunes', 'Ranthambore dry deciduous tiger forests', 'Nakki Lake & Mount Abu hill station'],
      reverse: true,
    },
    {
      id: 'culture',
      badge: 'Vibrant Traditions',
      icon: Palette,
      title: 'Living Culture & Craft: Hand-Block Textiles, Folk Melodies & Royal Cuisine',
      lead: 'Centuries of royal patronage fostered master artisanal communities that flourish today.',
      desc: 'Every region in Rajasthan has a distinct creative fingerprint. Bagru and Sanganer preserve centuries-old botanical woodblock printing techniques. The air resonates with the soulful melodies of the Kamaycha and Ravanahatha played by Manganiyar and Langa folk musicians. Savor authentic culinary heritage—from slow-cooked Dal Baati Churma and fragrant Ker Sangri to rich Ghevar drenched in saffron syrup.',
      image: '/assets/aistudio/Rajasthan-1_c57fba4b.jpg',
      imageAlt: 'Royal courtyards and heritage motifs of Rajasthan',
      highlights: ['Sanganeri & Bagru organic block printing', 'Manganiyar & Langa desert folk music', 'Authentic Dal Baati Churma & Laal Maas', 'Handcrafted blue pottery & Johari silver jewelry'],
      reverse: false,
    },
    {
      id: 'sacred',
      badge: 'Spiritual Corridors',
      icon: Heart,
      title: 'Sacred Corridors: The Harmony of Ajmer Sharif & Holy Pushkar',
      lead: 'A sacred land where Sufi mysticism and ancient Vedic rituals exist just 14 kilometers apart.',
      desc: 'Rajasthan holds profound spiritual peace. At the foot of the Taragarh hill lies the revered shrine of Khwaja Moinuddin Chishti (Dargah Sharif) in Ajmer, welcoming seekers of all faiths with qawwalis of universal love. Just across the Snake Mountain (Nag Pahar) lies Pushkar, encircling its holy lake and 52 sacred ghats, home to the rare 14th-century temple dedicated to Lord Brahma.',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Pushkar Lake 52 ghats and evening aarti',
      highlights: ['Ajmer Sharif Dargah & Ana Sagar Lake', 'Pushkar 52 holy ghats evening maha aarti', 'Jagatpita Brahma Temple', 'Ranakpur & Dilwara marble Jain sanctuaries'],
      reverse: true,
    },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-slate-800 antialiased pb-24">
      {/* Top Banner */}
      <div className="bg-[#111A24] text-white pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-amber-900/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Navigation Bar & Badge with Decent Gap */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
            <button
              type="button"
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-amber-300 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all group shrink-0 shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </button>

            <span className="h-4 w-px bg-white/20 hidden sm:inline-block shrink-0" aria-hidden="true" />

            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/20 px-3.5 py-1.5 rounded-full shrink-0">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>Why Rajasthan • Our Homeland</span>
            </div>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl leading-tight">
            Why Rajasthan is Our Heart, Soul & Everyday Priority
          </h1>

          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            We don’t just book itineraries in Rajasthan. We were born here, our families live here, and every highway turn holds memories. Discover why Rajasthan is one of the most culturally rich and emotionally evocative lands on Earth.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-20">
        {/* Alternating Highlight Sections */}
        {sections.map((sec) => {
          const Icon = sec.icon;
          return (
            <section
              key={sec.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                sec.reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div
                className={`lg:col-span-6 space-y-4 ${
                  sec.reverse ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C83E5C] bg-rose-50 border border-rose-100 px-3 py-1 rounded-full">
                  <Icon className="w-3.5 h-3.5" />
                  {sec.badge}
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                  {sec.title}
                </h2>

                <p className="text-xs sm:text-sm font-semibold text-amber-700">
                  {sec.lead}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {sec.desc}
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700">
                  {sec.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`lg:col-span-6 ${
                  sec.reverse ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-stone-200 group">
                  <img
                    src={sec.image}
                    alt={sec.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider drop-shadow-md">
                      {sec.imageAlt}
                    </span>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* 5. Local Commitment & Native Roots */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-md">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
              <Shield className="w-3.5 h-3.5" />
              Our Commitment to Local Communities
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              Why We Partner Exclusively with Native Chauffeurs & Craftsmen
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When you travel with Pinkcityroutes, your tourism money stays directly with native Rajasthani families. We partner with local chauffeurs who treat travelers like personal guests, support traditional woodblock artisans in Sanganer and Bagru, and prioritize family-run heritage havelis over faceless corporate chains.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5 bg-stone-100 px-3 py-1.5 rounded-full">
                ✓ Fair Chauffeur Wages & Dignity
              </span>
              <span className="flex items-center gap-1.5 bg-stone-100 px-3 py-1.5 rounded-full">
                ✓ Direct Artisan Patronage
              </span>
              <span className="flex items-center gap-1.5 bg-stone-100 px-3 py-1.5 rounded-full">
                ✓ Heritage Stay Preservation
              </span>
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="bg-gradient-to-r from-[#101B2B] via-[#1B2A3E] to-[#101B2B] rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden border border-white/10 shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Let Us Show You Our Homeland Through Native Eyes
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Explore our 13 carefully planned multi-day packages or consult directly with Harsh Vardhan Gupta for a tailor-made road itinerary.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 text-xs sm:text-sm font-bold py-3.5 px-7 rounded-xl shadow-lg transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950/20" />
                <span>Chat on WhatsApp (+91 98932 21141)</span>
              </a>

              <button
                onClick={onExplorePackages}
                className="inline-flex items-center gap-2 bg-[#C83E5C] hover:bg-[#B03450] text-white text-xs sm:text-sm font-semibold py-3.5 px-6 rounded-xl shadow-md transition-all"
              >
                <span>Browse 13 Tour Packages</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
