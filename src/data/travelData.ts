export interface Destination {
  id: string;
  name: string;
  stateOrCountry: string;
  category: 'domestic' | 'international';
  startingPrice: string;
  duration: string;
  bestTime: string;
  image: string;
  tagline: string;
  keyAttractions: string[];
  description: string;
  highlights: string[];
}

export interface TourPackage {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  days: number;
  nights: number;
  startingPrice: number;
  formattedPrice: string;
  category: 'domestic' | 'international';
  image: string;
  rating: number;
  reviewsCount: number;
  route: string;
  inclusions: string[];
  exclusions: string[];
  dayWiseItinerary: {
    day: number;
    title: string;
    description: string;
    highlights: string[];
    meals: string;
  }[];
  stayType: string;
  idealFor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  destination: string;
  tripDate: string;
  comment: string;
  rating: number;
  avatar: string;
}

export const AGENCY_DETAILS = {
  name: 'Pinkcityroutes',
  tagline: 'Premier Travel & Tour Agency',
  founder: 'Harshvardhan',
  phone: '+91 98932 21141',
  phoneRaw: '919893221141',
  instagram: 'https://www.instagram.com/pinkcityroutes',
  instagramHandle: '@pinkcityroutes',
  email: 'trips@pinkcityroutes.com',
  address: 'Pink City Tower, MI Road / C-Scheme, Jaipur, Rajasthan 302001, India',
  whatsappBase: 'https://wa.me/919893221141',
};

export const TOP_DESTINATIONS: Destination[] = [
  {
    id: 'rajasthan',
    name: 'Royal Rajasthan & Pink City',
    stateOrCountry: 'Jaipur, Jodhpur & Udaipur, India',
    category: 'domestic',
    startingPrice: '₹12,999',
    duration: '4 - 8 Days',
    bestTime: 'October to March',
    image: '/assets/aistudio/Rajasthan-1_c57fba4b.jpg',
    tagline: 'Palaces, Forts & Desert Royalty',
    keyAttractions: [
      'Amber Fort & Hawa Mahal',
      'City Palace Jaipur',
      'Mehrangarh Fort Jodhpur',
      'Lake Pichola Udaipur',
      'Sam Sand Dunes Jaisalmer',
    ],
    description:
      'Immerse yourself in grand palace courtyards, majestic hilltop fortresses, colorful bazaars, and golden desert sunsets guided by Jaipur-native hospitality.',
    highlights: ['Heritage Haveli Stays', 'Chokhi Dhani Cultural Night', 'Private Chauffeur', 'Sunset Camel Safari'],
  },
  {
    id: 'kashmir',
    name: 'Kashmir Valleys & Paradise',
    stateOrCountry: 'Srinagar, Gulmarg & Pahalgam, India',
    category: 'domestic',
    startingPrice: '₹22,999',
    duration: '5 - 7 Days',
    bestTime: 'Year-Round (Snow in Dec-Feb)',
    image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Heaven on Earth & Alpine Meadows',
    keyAttractions: [
      'Dal Lake Shikara & Houseboats',
      'Gulmarg Gondola Ride',
      'Betaab & Aru Valleys',
      'Sonmarg Thajiwas Glacier',
      'Mughal Gardens Srinagar',
    ],
    description:
      'Glide through serene Dal Lake waters on a cedar houseboat, witness snow-laden pines in Gulmarg, and breathe pristine alpine air in Pahalgam.',
    highlights: ['Carved Cedar Houseboat', 'Gondola Cable Car', 'Saffron Valley Drive', 'River Rafting in Lidder'],
  },
  {
    id: 'kerala',
    name: 'Kerala Backwaters & Tropical Coast',
    stateOrCountry: 'Alleppey, Munnar & Kochi, India',
    category: 'domestic',
    startingPrice: '₹16,499',
    duration: '5 - 7 Days',
    bestTime: 'September to March',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Emerald Canals, Mist & Tea Hills',
    keyAttractions: [
      'Alleppey Luxury Houseboat',
      'Munnar Tea Plantations',
      'Periyar Wildlife Sanctuary',
      'Fort Kochi Chinese Fishing Nets',
      'Kovalam Sunset Beaches',
    ],
    description:
      'Relax aboard a private thatched houseboat drifting along palm-shaded canals and inhale crisp mountain air among sweeping Munnar tea estates.',
    highlights: ['Private Houseboat Cruise', 'Ayurvedic Wellness', 'Tea Estate Walk', 'Kathakali Dance Show'],
  },
  {
    id: 'dubai',
    name: 'Dubai City Escapes & Safari',
    stateOrCountry: 'Dubai & Abu Dhabi, UAE',
    category: 'international',
    startingPrice: '₹39,999',
    duration: '4 - 6 Days',
    bestTime: 'October to April',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Futuristic Skylines & Golden Dunes',
    keyAttractions: [
      'Burj Khalifa 124th Observation',
      'Red Dune Desert 4x4 Safari',
      'Dubai Marina Dhow Cruise Dinner',
      'Museum of the Future & Souks',
      'Palm Jumeirah & Atlantis',
    ],
    description:
      'Experience high-voltage modern architecture, luxury marina dining, exhilarating 4x4 dune bashing, and authentic Bedouin barbecue beneath desert stars.',
    highlights: ['Burj Khalifa At The Top', 'Red Dune 4x4 Safari', 'Marina Yacht Cruise', 'Gold & Spice Souks'],
  },
  {
    id: 'bali',
    name: 'Bali Island Tropical Retreat',
    stateOrCountry: 'Ubud, Seminyak & Nusa Penida, Indonesia',
    category: 'international',
    startingPrice: '₹34,999',
    duration: '6 - 8 Days',
    bestTime: 'April to October',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Lush Terraces, Temples & Coastal Cliffs',
    keyAttractions: [
      'Ubud Tegallalang Rice Terraces',
      'Nusa Penida Kelingking Beach',
      'Tanah Lot & Uluwatu Temples',
      'Mount Batur Sunrise Trek',
      'Seminyak Beach Sunsets',
    ],
    description:
      'Immerse in Bali’s spiritual calm, emerald jungle swings, turquoise cliffside beaches of Nusa Penida, and world-class island hospitality.',
    highlights: ['Private Pool Villa Option', 'Nusa Penida Day Tour', 'Balinese Spa Treatment', 'Kecak Fire Dance'],
  },
  {
    id: 'thailand',
    name: 'Thailand Wonders & Islands',
    stateOrCountry: 'Bangkok, Pattaya & Phuket, Thailand',
    category: 'international',
    startingPrice: '₹28,999',
    duration: '5 - 7 Days',
    bestTime: 'November to April',
    image: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Golden Temples, Speedboats & Tropical Shores',
    keyAttractions: [
      'Bangkok Wat Pho & Grand Palace',
      'Coral Island Pattaya Speedboat',
      'Phuket Phi Phi Island Cruise',
      'Chao Phraya River Dinner Cruise',
      'Vibrant Floating Night Markets',
    ],
    description:
      'Blend Bangkok’s vibrant street culture and golden temples with sun-drenched Andaman beaches, coral reefs, and legendary Thai hospitality.',
    highlights: ['Coral Island Speedboat Tour', 'Chao Phraya Dinner Cruise', 'Island Snorkeling', 'Night Market Walk'],
  },
];

export const FEATURED_PACKAGES: TourPackage[] = [
  {
    id: 'royal-rajasthan',
    title: 'Royal Rajasthan Heritage',
    subtitle: 'Jaipur, Amber & Cultural Heritage',
    duration: '4 Days / 3 Nights',
    days: 4,
    nights: 3,
    startingPrice: 12999,
    formattedPrice: '₹12,999',
    category: 'domestic',
    image: '/assets/aistudio/Rajasthan-1_c57fba4b.jpg',
    rating: 4.95,
    reviewsCount: 148,
    route: 'Jaipur · Amber · Nahargarh · Cultural Village',
    stayType: '4-Star Verified Heritage Boutique Hotel',
    idealFor: 'Couples, Families & Heritage Enthusiasts',
    inclusions: [
      '3 Nights accommodation in verified 4-Star Heritage Hotel',
      'Daily complimentary lavish buffet breakfast',
      'Full-day private air-conditioned vehicle with dedicated chauffeur',
      'Comprehensive guided sightseeing: Amber Fort, Hawa Mahal, City Palace, Jantar Mantar',
      'Traditional Rajasthani cultural evening experience with welcome refreshments',
      'All toll taxes, parking fees, state road taxes & driver allowances included',
    ],
    exclusions: [
      'Airfare or train tickets to/from Jaipur',
      'Monument entry fees, audio guides, or optional elephant/jeep ride at Amber',
      'Personal expenses, laundry, tips, and porterage',
      'Lunches, dinners, and personal beverages not mentioned in inclusions',
      'Travel and medical insurance',
    ],
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Royal Welcome to the Pink City & Cultural Evening',
        description:
          'Arrive at Jaipur Airport / Railway Station where your private chauffeur welcomes you in traditional Rajasthani style. Transfer to your heritage hotel and relax. In the evening, visit the illuminated Albert Hall Museum and enjoy an authentic cultural folk dance experience.',
        highlights: ['Private airport/station pick-up', 'Check-in at heritage hotel', 'Albert Hall photo stop', 'Evening cultural folk show'],
        meals: 'Breakfast included from Day 2',
      },
      {
        day: 2,
        title: 'Amber Fort Majesty, Jal Mahal & Pink City Palaces',
        description:
          'Ascend the royal ramps of Amber Fort and marvel at the Sheesh Mahal (Mirror Palace). En route, pause at the photogenic Jal Mahal floating in Man Sagar Lake. Continue through the iconic pink facade of Hawa Mahal and tour the sprawling City Palace complex and Jantar Mantar observatory.',
        highlights: ['Amber Fort & Sheesh Mahal', 'Jal Mahal lake view', 'Hawa Mahal photo stop', 'City Palace & Royal Museum'],
        meals: 'Buffet Breakfast',
      },
      {
        day: 3,
        title: 'Nahargarh Sunset Fort & Vibrant Bazaars of Jaipur',
        description:
          'Explore Jaigarh Fort and the world’s largest wheeled cannon (Jaivana). Spend the afternoon shopping for authentic Jaipur blue pottery, bandhani sarees, and silver jewelry in Johari and Bapu Bazaars. End the day watching the sunset sweep over the Pink City from Nahargarh Fort.',
        highlights: ['Jaigarh Fort exploration', 'Panoramic Nahargarh sunset view', 'Bapu & Johari Bazaar shopping', 'Local street food walk'],
        meals: 'Buffet Breakfast',
      },
      {
        day: 4,
        title: 'Heritage Farewell & Seamless Departure',
        description:
          'Savor a relaxed breakfast at your hotel. Depending on your departure flight or train schedule, enjoy leisure time or pick up handcrafted Rajasthani souvenirs. Your chauffeur transfers you comfortably to the airport or railway station.',
        highlights: ['Relaxed morning breakfast', 'Last-minute souvenir stops', 'Private drop-off to Airport / Railway Station'],
        meals: 'Buffet Breakfast',
      },
    ],
  },
  {
    id: 'kashmir-valley',
    title: 'Kashmir Valley Getaway',
    subtitle: 'Srinagar, Dal Lake, Gulmarg & Pahalgam',
    duration: '6 Days / 5 Nights',
    days: 6,
    nights: 5,
    startingPrice: 22999,
    formattedPrice: '₹22,999',
    category: 'domestic',
    image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80',
    rating: 4.98,
    reviewsCount: 215,
    route: 'Srinagar · Dal Lake · Gulmarg · Pahalgam · Mughal Gardens',
    stayType: 'Deluxe Carved Houseboat (1N) + Premium Valley Resorts (4N)',
    idealFor: 'Honeymooners, Nature Lovers & Families',
    inclusions: [
      '1 Night stay in Premium Hand-Carved Cedar Houseboat on Dal Lake',
      '4 Nights stay in handpicked 4-star mountain view resorts (Srinagar & Pahalgam)',
      'Daily delicious breakfast and gourmet dinner (MAP Meal Plan)',
      'Complimentary 1-hour romantic Shikara ride on Dal Lake at golden hour',
      'Dedicated private heated vehicle (Innova / Sedan) for all transfers and excursions',
      'All union permit charges, state toll taxes, parking, and driver allowances',
    ],
    exclusions: [
      'Airfare to and from Srinagar Sheikh ul-Alam Airport',
      'Gulmarg Gondola Cable Car tickets (Phases 1 & 2)',
      'Pony rides, sledging, snow bikes, or local internal union taxi in Pahalgam (Aru/Chandanwari)',
      'Lunches, personal snacks, and monument entry tickets',
      'Tips to Shikara drivers or hotel staff',
    ],
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Arrival in Srinagar & Dal Lake Houseboat Experience',
        description:
          'Receive a warm welcome at Srinagar Airport and transfer to your ornate cedar houseboat moored peacefully on Dal Lake. In the late afternoon, enjoy an enchanting 1-hour Shikara boat ride across floating gardens and lotus beds as the sun sets over the Zabarwan mountains.',
        highlights: ['Private airport reception', 'Cedar wood houseboat check-in', '1-hour sunset Shikara ride', 'Traditional Kashmiri dinner'],
        meals: 'Dinner included',
      },
      {
        day: 2,
        title: 'Excursion to Gulmarg – The Meadow of Flowers',
        description:
          'Drive through picturesque willow and walnut orchards toward Gulmarg. Gaze at the towering snow peaks of the Pir Panjal range and ride the famous Gulmarg Gondola cable car toward Kongdoori and Apharwat Peak. Return to Srinagar hotel in the evening.',
        highlights: ['Scenic drive to Gulmarg', 'Gondola Cable Car ride', 'Snow activities & alpine vistas', 'Golf course & church views'],
        meals: 'Breakfast & Dinner',
      },
      {
        day: 3,
        title: 'Srinagar to Pahalgam – Saffron Valleys & Lidder River',
        description:
          'Journey along the Lidder River toward the valley of Pahalgam. En route, stop at the world-renowned saffron fields of Pampore and the ancient ruins of Avantipur. Check in at your riverfront resort and listen to the murmuring mountain stream.',
        highlights: ['Pampore saffron fields visit', 'Avantipur temple ruins', 'Lidder riverfront resort check-in', 'Evening riverbank stroll'],
        meals: 'Breakfast & Dinner',
      },
      {
        day: 4,
        title: 'Pahalgam Vistas – Betaab Valley, Aru & Baisaran',
        description:
          'Spend the day taking in Pahalgam’s legendary valleys. Visit Betaab Valley (named after the Bollywood classic) framed by dense deodar forests, explore picturesque Aru Valley, or opt for a scenic pony trek to the mini-Switzerland of Baisaran.',
        highlights: ['Betaab Valley exploration', 'Pristine Aru Valley streams', 'Optional pony ride to Baisaran', 'Bonfire evening'],
        meals: 'Breakfast & Dinner',
      },
      {
        day: 5,
        title: 'Mughal Splendors & Srinagar Heritage Walk',
        description:
          'Return to Srinagar and tour the iconic terraced Mughal Gardens: Nishat Bagh (Garden of Pleasure), Shalimar Bagh (Abode of Love), and Chashme Shahi. In the evening, browse authentic Pashmina shawls, saffron, walnut woodcraft, and dry fruits in Lal Chowk.',
        highlights: ['Nishat Bagh & Shalimar Bagh', 'Chashme Shahi natural spring', 'Pashmina & Kashmiri handicraft shopping', 'Dinner in Srinagar'],
        meals: 'Breakfast & Dinner',
      },
      {
        day: 6,
        title: 'Farewell Kashmir – Departure Transfer',
        description:
          'Enjoy your final breakfast overlooking the valley before your private chauffeur transfers you to Srinagar Airport for your return flight with memories that linger for a lifetime.',
        highlights: ['Leisurely breakfast', 'Souvenir packing', 'Assisted airport transfer'],
        meals: 'Breakfast',
      },
    ],
  },
  {
    id: 'dubai-desert',
    title: 'Dubai Highlights & Desert Safari',
    subtitle: 'Burj Khalifa, Desert Dunes & Marina Dhow Cruise',
    duration: '5 Days / 4 Nights',
    days: 5,
    nights: 4,
    startingPrice: 39999,
    formattedPrice: '₹39,999',
    category: 'international',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    rating: 4.96,
    reviewsCount: 184,
    route: 'Downtown Dubai · Arabian Dunes · Dubai Marina · Palm Jumeirah',
    stayType: '4-Star Contemporary City/Marina Hotel',
    idealFor: 'Adventure Seekers, Couples & Luxury Travelers',
    inclusions: [
      '4 Nights accommodation in premium 4-Star City/Marina Hotel',
      'Daily international buffet breakfast at hotel',
      'Thrilling Red Dune Desert Safari in 4x4 Land Cruiser with dune bashing and sandboarding',
      'Bedouin Camp evening with BBQ dinner, Tanoura dance, fire show & Henna painting',
      'Dubai Marina Dhow Cruise with international 5-star buffet dinner & live music',
      'Official Burj Khalifa Observation Deck ticket (124th & 125th Floors) with transfers',
      'Half-day panoramic city tour covering Palm Jumeirah, Dubai Frame & Burj Al Arab view',
      'Round-trip private Dubai International Airport (DXB) transfers',
    ],
    exclusions: [
      'International flight tickets',
      'UAE Tourist Visa & OK to Board (can be added on request)',
      'Mandatory Tourism Dirham fee (approx. 15 AED / room / night paid at check-in)',
      'Optional adventure upgrades (Quad Biking, Dune Buggy, VIP Desert lounge seating)',
      'Personal expenses, tips, and items not explicitly listed',
    ],
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Arrival in Dubai & Marina Dhow Cruise Dinner',
        description:
          'Land at Dubai International Airport where our airport representative welcomes you and escorts you via private AC vehicle to your hotel. Unpack and rest. In the evening, step aboard a traditional wooden Dhow cruise through Dubai Marina, admiring glittering illuminated skyscrapers and enjoying a lavish buffet dinner.',
        highlights: ['Private airport welcome & transfer', 'Hotel check-in & relaxation', 'Marina Dhow Cruise dinner', 'Skyline views by night'],
        meals: 'Dinner on cruise',
      },
      {
        day: 2,
        title: 'Panoramic City Tour & Burj Khalifa At The Top',
        description:
          'Begin with a guided city tour: photograph the sail-shaped Burj Al Arab, drive across the Palm Jumeirah trunk past Atlantis The Palm, and capture the iconic Dubai Frame. In the late afternoon, take the high-speed elevator to the 124th and 125th floors of Burj Khalifa for 360-degree vistas across the Arabian Gulf, followed by the world-famous Dubai Fountain show.',
        highlights: ['Palm Jumeirah & Atlantis view', 'Burj Al Arab photo stop', 'Burj Khalifa 124th & 125th floor entry', 'Dubai Fountain spectacle'],
        meals: 'Breakfast',
      },
      {
        day: 3,
        title: 'Shopping Leisure & 4x4 Red Dune Desert Safari with BBQ',
        description:
          'Enjoy a relaxed morning exploring the Dubai Mall or Gold and Spice Souks. At 3:00 PM, a 4x4 Land Cruiser picks you up for an adrenaline-charged dune bashing adventure in the golden Arabian desert. Watch a breathtaking desert sunset, try sandboarding, and gather at a traditional desert camp for a barbecue dinner, Tanoura whirling dervish show, and fire dance.',
        highlights: ['Free morning for shopping', '4x4 red dune bashing thrill', 'Camel ride & sandboarding', 'Bedouin camp BBQ & cultural shows'],
        meals: 'Breakfast & BBQ Dinner',
      },
      {
        day: 4,
        title: 'Miracle Garden or Museum of the Future & Global Village',
        description:
          'Experience the architectural wonder of the Museum of the Future or wander through millions of blooming flowers at Dubai Miracle Garden (seasonal). In the evening, immerse yourself in Global Village, tasting delicacies and witnessing cultural pavilions from over 90 countries.',
        highlights: ['Museum of the Future / Miracle Garden', 'Global Village cultural pavilions', 'World street food tasting', 'Souvenir shopping'],
        meals: 'Breakfast',
      },
      {
        day: 5,
        title: 'Last-Minute Shopping & Airport Departure',
        description:
          'Relish a hearty breakfast before packing your bags. Depending on your flight time, spend your last hours picking up dates, chocolates, and perfumes. Our chauffeur transfers you seamlessly to Dubai International Airport for your flight back home.',
        highlights: ['Buffet breakfast', 'Souk Madinat Jumeirah / Mall visit', 'Private transfer to DXB Airport'],
        meals: 'Breakfast',
      },
    ],
  },
];

export interface PromoCoupon {
  code: string;
  discount: string;
  percentageNumber: number;
  title: string;
  description: string;
  badge: string;
}

export interface ComplimentaryPerk {
  id: string;
  iconEmoji: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rohan & Sneha Sharma',
    location: 'Delhi',
    destination: 'Udaipur & Jaipur Anniversary Tour',
    tripDate: 'February 2026',
    comment:
      'Harshvardhan planned our entire Udaipur and Jaipur anniversary trip flawlessly. Handpicked hotels and smooth transfers throughout!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '2',
    name: 'Amit Verma',
    location: 'Bengaluru',
    destination: 'Kashmir Family Tour',
    tripDate: 'January 2026',
    comment:
      'Booked the Kashmir family tour. The houseboat, driver, and Shikara ride were top-notch. Truly personalized support.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '3',
    name: 'Pooja Patel',
    location: 'Ahmedabad',
    destination: 'Royal Rajasthan Heritage Circuit',
    tripDate: 'December 2025',
    comment:
      'Best experience in Rajasthan! Transparent pricing and loved the surprise welcome goodies. Harshvardhan was available 24/7.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
  },
];

export const PROMO_COUPONS: PromoCoupon[] = [
  {
    code: 'pinkcityroutes10',
    discount: 'Flat 6% OFF',
    percentageNumber: 6,
    title: 'All Domestic Itineraries',
    description: 'Flat 6% OFF on all domestic itineraries across Rajasthan, Kashmir, Kerala & beyond.',
    badge: 'Popular',
  },
  {
    code: 'harshdostspecial',
    discount: 'Flat 10% OFF',
    percentageNumber: 10,
    title: 'VIP Friends & Referrals',
    description: 'Flat 10% OFF VIP discount for friends, community travelers & direct referrals.',
    badge: 'Highest Savings',
  },
  {
    code: 'PINKCITYEARLY',
    discount: 'Flat 8% OFF',
    percentageNumber: 8,
    title: '30+ Days Advance Booking',
    description: 'Flat 8% OFF for bookings made 30+ days in advance with guaranteed date locking.',
    badge: 'Early Bird',
  },
  {
    code: 'ROYALGROUP',
    discount: 'Flat 7% OFF',
    percentageNumber: 7,
    title: 'Group Bookings (4+ Persons)',
    description: 'Flat 7% OFF for group bookings and joint family departures of 4 or more travelers.',
    badge: 'Group Special',
  },
  {
    code: 'EXPLOREINDIA',
    discount: 'Flat 5% OFF',
    percentageNumber: 5,
    title: 'Rajasthan Heritage Tours',
    description: 'Flat 5% OFF on all signature Rajasthan heritage, palace, and desert safari routes.',
    badge: 'Heritage Classic',
  },
];

export const COMPLIMENTARY_PERKS: ComplimentaryPerk[] = [
  {
    id: 'welcome-goodies',
    iconEmoji: '🎁',
    title: 'Welcome Goodies',
    subtitle: 'Jaipur Royal Welcome',
    description: 'Traditional welcome kit & refreshments on arrival at your destination hotel.',
    tag: 'On Arrival',
  },
  {
    id: 'goodbye-goodies',
    iconEmoji: '🛍️',
    title: 'Good Bye Goodies',
    subtitle: 'Memorable Souvenirs',
    description: 'Authentic local souvenirs & farewell gifts handpicked to remember your journey.',
    tag: 'Farewell Gift',
  },
  {
    id: 'guide-services',
    iconEmoji: '🏛️',
    title: 'Complimentary Guide Services',
    subtitle: 'Certified Storytellers',
    description: 'Verified, licensed local destination guides at iconic monuments and heritage forts.',
    tag: 'Licensed Experts',
  },
  {
    id: 'pickup-drop',
    iconEmoji: '🚗',
    title: 'Seamless Pick-up & Drop',
    subtitle: 'Dedicated Chauffeur Fleet',
    description: 'Dedicated airport & railway station transfers in air-conditioned private vehicles.',
    tag: 'Private & Punctual',
  },
  {
    id: 'exclusive-vouchers',
    iconEmoji: '🎟️',
    title: 'Exclusive Vouchers*',
    subtitle: 'Food & Artisan Privileges',
    description: 'Complimentary vouchers for local food, artisan shopping, and select monument entries (*T&C apply).',
    tag: 'Exclusive Perks',
  },
];

export const FAQS = [
  {
    question: 'How do I book a tour with Pinkcityroutes?',
    answer:
      'Booking is effortless and transparent! You can click any package on this page to chat directly with founder Harshvardhan on WhatsApp (+91 98932 21141) or use our Custom Tour Planner. We discuss your preferred dates, hotel style, and requirements, provide a finalized day-by-day itinerary, and confirm your booking with verified hotel & driver vouchers.',
  },
  {
    question: 'Can all tour packages be customized to our preferences?',
    answer:
      'Yes, 100%! While our 3 featured packages are meticulously optimized for the best experience, we can add extra days, upgrade to ultra-luxury heritage suites, include special candlelight dinners, modify routes, or adjust meal plans to your exact preference.',
  },
  {
    question: 'How does payment and booking confirmation work?',
    answer:
      'We operate on transparent milestone payments with zero hidden fees. You secure your booking with an initial advance to lock hotel rooms and private vehicles. The remaining balance is handled via flexible schedules before or upon arrival. Official digital receipts and confirmation vouchers are shared directly on WhatsApp & email.',
  },
  {
    question: 'Will someone assist us during our trip?',
    answer:
      'Yes! Unlike impersonal commercial travel websites, founder Harshvardhan and our on-ground operations team are available 24/7 on WhatsApp and direct call (+91 98932 21141). Whether you need an early breakfast, a route tweak, or restaurant advice, we are just a quick message away.',
  },
  {
    question: 'Do you arrange flights, train tickets, and international visas?',
    answer:
      'Yes, we provide end-to-end assistance! For domestic packages, we can suggest or book optimal flight connections, and for international journeys (like Dubai, Bali, Thailand), we assist with tourist visa filing, travel insurance, and flight ticketing.',
  },
];
