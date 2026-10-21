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
  logo: '/assets/aistudio/pinkcityroutes_logo_c1ea2897.jpg',
  email: 'harshvardhanrajpuria@gmail.com',
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

export interface OneDayTour {
  id: string;
  title: string;
  badge: string;
  duration: string;
  hours: string;
  routeHighlights: string;
  stops: string[];
  startingPrice: string;
  inclusions: string[];
  image: string;
  bestFor: string;
}

export const ONE_DAY_TOURS: OneDayTour[] = [
  {
    id: 'jaipur-sightseeing',
    title: 'Full-Day Royal Jaipur Sightseeing',
    badge: 'Signature Tour',
    duration: '8–10 Hours',
    hours: 'Flexible Morning Start (8:00 AM – 10:00 AM)',
    routeHighlights:
      'Hawa Mahal, Amer Fort, Jal Mahal, City Palace, Jantar Mantar, and local Pink City artisan bazaars.',
    stops: [
      'Amer Fort & Maota Lake photo stop',
      'Hawa Mahal (Palace of Winds)',
      'Jal Mahal (Water Palace)',
      'City Palace & Royal Armoury Museum',
      'Jantar Mantar Astronomical Observatory',
      'Johari & Bapu Bazaar Artisan Handicrafts',
    ],
    startingPrice: '₹1,999 / Cab',
    inclusions: [
      'Dedicated AC Sedan / SUV with verified chauffeur',
      'Pick-up & drop from any Jaipur hotel / railway station / airport',
      'All toll taxes, parking fees & fuel included',
      'Local shopping assistance & verified artisan recommendation',
    ],
    image: '/assets/aistudio/Rajasthan-1_c57fba4b.jpg',
    bestFor: 'Couples, families, solo explorers & heritage enthusiasts',
  },
  {
    id: 'delhi-historical',
    title: 'Full-Day Historical Delhi Tour',
    badge: 'Capital Heritage',
    duration: '8–10 Hours',
    hours: 'Flexible Morning Start (8:30 AM – 9:30 AM)',
    routeHighlights:
      'India Gate, Qutub Minar, Red Fort, Humayun’s Tomb, Lotus Temple, and Connaught Place.',
    stops: [
      'Red Fort (Lal Qila) & Old Delhi panorama',
      'India Gate & Kartavya Path memorial drive',
      'Humayun’s Tomb (Mughal architectural jewel)',
      'Qutub Minar complex & Iron Pillar',
      'Lotus Temple (Baháʼí House of Worship)',
      'Connaught Place colonial shopping & dining walk',
    ],
    startingPrice: '₹2,499 / Cab',
    inclusions: [
      'Pick-up & drop across any location in Delhi NCR (Delhi, Gurugram, Noida)',
      'Private air-conditioned chauffeur-driven vehicle',
      'Inter-state border permits, tolls & parking covered',
      'Customizable lunch halt at legendary culinary hubs',
    ],
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80',
    bestFor: 'History buffs, transit travelers & family weekend explorers',
  },
  {
    id: 'agra-taj-heritage',
    title: 'Same-Day Agra Taj Heritage Tour',
    badge: 'Wonder of the World',
    duration: '10–12 Hours',
    hours: 'Early Morning Departure (Sunrise or 6:00 AM)',
    routeHighlights:
      'Taj Mahal sunrise/day view, Agra Fort, Mehtab Bagh, and local marble craft markets.',
    stops: [
      'Iconic Taj Mahal (UNESCO World Heritage Site)',
      'Agra Fort (Red sandstone royal imperial palaces)',
      'Mehtab Bagh sunset garden view of Taj across the Yamuna River',
      'Petha tasting & Agra marble inlay artisan ateliers',
    ],
    startingPrice: '₹3,499 / Cab',
    inclusions: [
      'Convenient same-day round-trip from Jaipur or Delhi via Yamuna / Agra Expressway',
      'Experienced highway chauffeur trained for smooth express travel',
      'All express highway tolls, state permits & parking covered',
      'Assistance with skip-the-line monument entry ticketing',
    ],
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    bestFor: 'Couples, international visitors & same-day transit itineraries',
  },
  {
    id: 'custom-excursions',
    title: 'Custom Same-Day Excursions',
    badge: 'Spiritual & Heritage',
    duration: '8–12 Hours',
    hours: 'Flexible custom itinerary tailored to your pace',
    routeHighlights:
      'Pushkar Holy Lake & Brahma Temple / Ajmer Sharif Dargah / Mathura-Vrindavan Krishna Janmabhoomi circuits.',
    stops: [
      'Circuit A: Jaipur → Ajmer Sharif Dargah → Pushkar Holy Ghats & Brahma Temple',
      'Circuit B: Delhi / Agra → Mathura Shri Krishna Janmabhoomi → Vrindavan Bankey Bihari Temple',
      'Circuit C: Jaipur → Shekhawati Painted Havelis / Abhaneri Stepwell',
      'Tailored halt for spiritual aarti and sacred temple prasadam',
    ],
    startingPrice: '₹2,999 / Cab',
    inclusions: [
      'Doorstep private pick-up & return transfer in sanitized AC vehicle',
      'Courteous chauffeur knowledgeable in temple timings & parking',
      'All interstate road taxes, union tolls & parking included',
      'Full flexibility to stop at traditional highway dhabas & tea stalls',
    ],
    image: 'https://images.unsplash.com/photo-1609137144822-0a1835749f50?auto=format&fit=crop&w=1200&q=80',
    bestFor: 'Devotional pilgrimages, families, and cultural wanderers',
  },
];

export interface FleetCategory {
  id: string;
  name: string;
  models: string;
  category: 'sedan' | 'suv' | 'luxury' | 'coach';
  passengerCapacity: string;
  luggageCapacity: string;
  rateEstimate: string;
  idealFor: string;
  features: string[];
  image: string;
}

export const FLEET_CATEGORIES: FleetCategory[] = [
  {
    id: 'sedan',
    name: 'Budget & Executive Sedans',
    models: 'Maruti Suzuki Swift Dzire, Toyota Etios',
    category: 'sedan',
    passengerCapacity: '4 Passengers',
    luggageCapacity: '2 Large Bags + 2 Handbags',
    rateEstimate: 'Starting ₹1,799 / Day',
    idealFor: 'Couples, solo travelers, and city sightseeing.',
    features: ['Chilled Air-Conditioning', 'Clean & Sanitized Interiors', 'Experienced City Chauffeur', 'Mobile Charging Ports'],
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'family-suv',
    name: 'Family SUVs',
    models: 'Maruti Suzuki Ertiga, Kia Carens',
    category: 'suv',
    passengerCapacity: '6 Passengers',
    luggageCapacity: '3–4 Medium Bags',
    rateEstimate: 'Starting ₹2,499 / Day',
    idealFor: 'Comfortable legroom for medium families and airport transfers.',
    features: ['Tri-Zone Roof AC Vents', 'Ample Legroom & Reclining Rows', 'Punctual Chauffeur Service', 'Smooth Highway Drive'],
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'premium-muv',
    name: 'Premium MUVs',
    models: 'Toyota Innova Crysta',
    category: 'suv',
    passengerCapacity: '6–7 Passengers',
    luggageCapacity: '4–5 Large Bags',
    rateEstimate: 'Starting ₹3,499 / Day',
    idealFor: 'Long-distance highway comfort, executive business travel.',
    features: ['Superior Highway Shock Absorption', 'Plush Captain Seat Options', 'Professional Uniformed Chauffeur', 'High Luggage Boot Space'],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ultra-luxury-suv',
    name: 'Ultra-Luxury SUVs',
    models: 'Toyota Fortuner 4x4',
    category: 'luxury',
    passengerCapacity: '6 Passengers',
    luggageCapacity: '4 Large Bags',
    rateEstimate: 'Starting ₹6,999 / Day',
    idealFor: 'VIP travel, royal heritage tours, premium event arrivals.',
    features: ['Commanding Road Presence', 'Leather Seating & Sunroof', 'All-Terrain Smooth Stability', 'VIP Chauffeur Concierge'],
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'luxury-executive',
    name: 'Luxury Executive Cars',
    models: 'Audi A6, BMW 5 Series, Mercedes-Benz E-Class',
    category: 'luxury',
    passengerCapacity: '4 Passengers',
    luggageCapacity: '3 Suitcases',
    rateEstimate: 'Starting ₹9,999 / Day',
    idealFor: 'Wedding convoys, VIP guests, and high-end luxury transfers.',
    features: ['Signature German Luxury', 'Rear Passenger Climate Control', 'Chauffeur with White-Glove Protocol', 'Mineral Water & Refreshments'],
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'tempo-12',
    name: 'Standard Tempo Traveler',
    models: 'Force Motors (9 to 12 Seater)',
    category: 'coach',
    passengerCapacity: '9–12 Passengers',
    luggageCapacity: '8–10 Large Bags',
    rateEstimate: 'Starting ₹4,999 / Day',
    idealFor: 'Small group tours, pushback seats, individual AC vents.',
    features: ['High-Roof Walkthrough Cabin', 'Individual AC Vents per Row', 'Pushback Ergonomic Seats', 'Dedicated Music & Mic System'],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'tempo-maharaja',
    name: 'Luxury Maharaja Tempo Traveler',
    models: 'Force Maharaja Modified (16 to 20 Seater)',
    category: 'coach',
    passengerCapacity: '16–20 Passengers',
    luggageCapacity: '14–16 Bags in Rear Boot',
    rateEstimate: 'Starting ₹6,499 / Day',
    idealFor: 'Reclining luxury captain seats, ample luggage space, audio-video setups.',
    features: ['Ultra-Plush 1x1 Captain Recliners', 'Ambient LED Mood Ceiling Lighting', 'Wide LED TV & Dolby Surround Sound', 'Rear Luggage Compartment'],
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'volvo-coach',
    name: 'Luxury Volvo & Mini Coaches',
    models: 'BharatBenz & Volvo Multi-Axle (27 to 45 Seater)',
    category: 'coach',
    passengerCapacity: 'Up to 45 Passengers',
    luggageCapacity: 'Massive Undercarriage Storage',
    rateEstimate: 'Custom Route Quotation',
    idealFor: 'Large corporate outings, wedding delegations, and state tour groups.',
    features: ['Air-Suspension Glide Ride', 'Huge Luggage Undercarriage', 'Dual Chauffeur Support on Long Routes', 'Public Address Mic System'],
    image: 'https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?auto=format&fit=crop&w=800&q=80',
  },
];

export interface TravelDiary {
  id: string;
  title: string;
  author: string;
  date: string;
  location: string;
  excerpt: string;
  fullStory: string;
  highlights: string[];
  image: string;
  travelerType: string;
  readTime?: string;
}

export const TRAVEL_DIARIES: TravelDiary[] = [
  {
    id: 'amer-fort-sunrise',
    title: 'Day 1 in the Pink City: Exploring Amer Fort at Sunrise',
    author: 'Sneha & Rohan (Delhi)',
    date: 'October 2026',
    location: 'Amer Fort, Jaipur',
    travelerType: 'Couple Anniversary Trip',
    readTime: '4 min read',
    excerpt:
      'We started our day at 6:30 AM to catch the morning sun glowing against Maota Lake. Harshvardhan had arranged our driver Vikram, who navigated effortlessly and showed us hidden photography courtyards away from the rush...',
    fullStory:
      'We booked our anniversary journey with Pinkcityroutes on short notice, but Harshvardhan personally curated every detail. Our morning started at 6:30 AM as our clean Dzire pulled up in front of our heritage hotel in C-Scheme. The morning air in Jaipur was crisp. As we approached Amer Fort, the reflection of the sunlit golden fortifications in Maota Lake took our breath away. Our driver Vikram ji guided us to the best viewpoint right by Kesar Kyari garden before the tourist crowd arrived. We toured the Sheesh Mahal (Mirror Palace) where thousands of concave mirrors sparkle with a single matchstick. After Amer, we stopped for piping hot Pyaaz Kachoris and kulhad chai. Having Harshvardhan check in with us on WhatsApp during lunch to ensure everything was perfect made us feel like family rather than tourists.',
    highlights: [
      'Sunrise photography at Maota Lake & Kesar Kyari',
      'Intricate glasswork inside Sheesh Mahal',
      'Authentic Jaipur street food stop for Pyaaz Kachori',
      'Seamless chauffeur coordination and zero parking hassles',
    ],
    image: '/assets/aistudio/Rajasthan-1_c57fba4b.jpg',
  },
  {
    id: 'taj-mahal-expedition',
    title: 'Cruising the Yamuna Expressway: Our Same-Day Taj Mahal Expedition',
    author: 'Amit Verma (Bengaluru)',
    date: 'September 2026',
    location: 'Yamuna Expressway & Taj Mahal, Agra',
    travelerType: 'Family Vacation',
    readTime: '5 min read',
    excerpt:
      'A prompt 6:00 AM pick-up from our hotel in an Innova Crysta. Within three smooth hours on the Yamuna Expressway, our kids were standing in awe before the majestic white marble domes of the Taj Mahal...',
    fullStory:
      'Visiting the Taj Mahal was on our family’s bucket list for years, but we only had one free weekend in North India. Harshvardhan recommended the same-day Agra circuit in a Toyota Innova Crysta. The car was spotless with child-safe booster seating and chilled AC. We zoomed down the Yamuna Expressway without any hiccups, and the driver had already bought cold water bottles and arranged a licensed government guide at the gate. Seeing the Taj Mahal bathed in morning light is an unforgettable sight. After the Taj and Agra Fort, we stopped at an authentic marble inlay artisan workshop and savored fresh Agra Petha. We were safely back at our Delhi hotel by 8:30 PM. Truly 5-star personalized hospitality!',
    highlights: [
      'Effortless 3-hour smooth highway drive via Yamuna Expressway',
      'Skip-the-line guided entrance to Taj Mahal',
      'Agra Fort historical chambers and Shah Jahan’s river balcony',
      'Safe and comfortable same-day return for the entire family',
    ],
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'dal-lake-snow',
    title: 'Chasing Snow & Shikaras: A Day on Dal Lake',
    author: 'Pooja Patel (Ahmedabad)',
    date: 'August 2026',
    location: 'Dal Lake & Gulmarg, Kashmir',
    travelerType: 'Solo Cultural Traveler',
    readTime: '4 min read',
    excerpt:
      'Waking up inside an intricately carved cedar wood houseboat felt like stepping into an old romantic classic. Drinking steaming saffron kahwa while wooden Shikaras glided past floating flower gardens...',
    fullStory:
      'As a solo female traveler, safety and trustworthy on-ground support were my biggest priorities. Booking with Pinkcityroutes gave me 100% peace of mind because Harshvardhan gave me his direct personal WhatsApp and connected me with our verified Kashmiri chauffeur, Farooq. My morning on Dal Lake began with the soothing call to prayer and the gentle splash of cedar paddles. The Shikara boatman served authentic saffron Kahwa brewed with crushed almonds. We visited floating vegetable markets and photographed pink lotus blossoms. The next day in Gulmarg, Farooq assisted with the Gondola phase boarding without any lines. The level of care, respect, and hospitality shown by Pinkcityroutes made this trip the best memory of my life.',
    highlights: [
      'Traditional cedar houseboat stay with hot Kahwa at dawn',
      'Peaceful sunset Shikara ride across the lotus waterways',
      'Safe, respectful, and verified on-ground chauffeur care',
      '24/7 direct founder availability on WhatsApp',
    ],
    image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'jaipur-sunset-secrets',
    title: "Harshvardhan's Insider Guide: Sunset at Nahargarh & Secret Bazaars",
    author: 'Harshvardhan (Founder)',
    date: 'October 2026',
    location: 'Nahargarh Fort & Johari Bazaar, Jaipur',
    travelerType: "Founder's Guide",
    readTime: '6 min read',
    excerpt:
      'Growing up in Jaipur, I know the exact 45 minutes when the Pink City turns molten gold from the ramparts of Nahargarh. Here are my favorite local spots that standard guidebooks miss...',
    fullStory:
      'Most visitors rush between Amber Fort and City Palace and miss the magical twilight of Jaipur. When clients ask me for one memory they must take home, I tell them to head up the serpentine hills of Nahargarh Fort around 5:15 PM. As the sun dips behind the Aravallis, the entire Pink City spreads out beneath you like a carpet of warm terracotta.\n\nAfter soaking in the breeze at Padao open-air deck, take a leisurely drive down into the walled city. Head straight to LMB in Johari Bazaar for their authentic Ghewar, or stop by Samrat on Chaura Rasta for piping hot Samosas with mint chutney. Traveling with our dedicated private chauffeur means you never have to haggle with local auto rickshaws or worry about one-way heritage gates.',
    highlights: [
      'Golden hour panoramic vista at Nahargarh Fort ramparts',
      'Heritage evening walk through illuminated Johari Bazaar gates',
      'Authentic Ghewar and street food tasting at generational sweetshops',
      'Pre-planned vehicle parking with zero traffic stress',
    ],
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'rajasthan-highway-cabs',
    title: 'Choosing the Right Vehicle: Dzire vs Innova Crysta for Rajasthan Roads',
    author: 'Harshvardhan (Founder)',
    date: 'September 2026',
    location: 'Jaipur - Jodhpur - Udaipur Circuit',
    travelerType: 'Travel Advice',
    readTime: '5 min read',
    excerpt:
      'Planning a 7-day Rajasthan road trip? Here is a practical breakdown of boot space, suspension, passenger comfort, and highway handling to help you choose the best ride...',
    fullStory:
      'Rajasthan is best experienced through the windshield of a car. The drive between Jaipur, Pushkar, Jodhpur, and Udaipur transitions from six-lane expressways to scenic desert curves.\n\nFor couples or solo travelers with 2 medium bags, the Maruti Suzuki Swift Dzire or Toyota Etios offers unbeatable fuel efficiency, nippy maneuverability in narrow old-city alleys, and chilled AC. But if you are traveling with family (4 to 6 people) or have elderly parents, the Toyota Innova Crysta is in a class of its own. Its long-wheelbase suspension absorbs highway undulations effortlessly, captain seats allow afternoon naps, and the large boot swallows 4 full-sized suitcases without crowding passenger legroom.\n\nAll our vehicles come with commercial permits, clean seat covers, chilled water bottles, and experienced highway drivers.',
    highlights: [
      'Swift Dzire: Perfect for 2–3 passengers and old-city bazaar lanes',
      'Innova Crysta: Supreme comfort and luggage space for families & highways',
      'Tempo Traveler: Maharaja recliners for group journeys of 9–16 people',
      'Verified commercial chauffeurs with interstate border permits included',
    ],
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
  },
];
