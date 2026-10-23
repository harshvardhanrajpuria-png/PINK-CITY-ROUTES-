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
  pricingType: 'on_request' | 'fixed';
  category: 'domestic' | 'international';
  circuitCategory?: 'jaipur' | 'desert' | 'mewar' | 'wildlife' | 'golden-triangle' | 'grand';
  image: string;
  images: string[];
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
  badge?: string;
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
  founder: 'Harsh Vardhan Gupta & Ananya Gupta',
  founders: [
    {
      name: 'Harsh Vardhan Gupta',
      role: 'Co-Founder & Chief Travel Architect',
      focus: 'Heritage Routes, Fleet Logistics & Custom Itineraries',
    },
    {
      name: 'Ananya Gupta',
      role: 'Co-Founder & Experience Director',
      focus: 'Boutique Stays, Cultural Curation & Guest Relations',
    },
  ],
  phone: '+91 98932 21141',
  phoneRaw: '919893221141',
  instagram: 'https://www.instagram.com/pinkcityroutes',
  instagramHandle: '@pinkcityroutes',
  logo: '/assets/aistudio/pinkcityroutes_logo_c1ea2897.jpg',
  email: 'info@pinkcityroutes.in', // Primary Email
  businessEmail: 'harshvardhanrajpuria@gmail.com', // Secondary Business Email
  address: 'Pink City Tower, MI Road / C-Scheme, Jaipur, Rajasthan 302001, India',
  whatsappBase: 'https://wa.me/919893221141',
};

export const TOP_DESTINATIONS: Destination[] = [
  {
    id: 'rajasthan',
    name: 'Royal Rajasthan & Pink City',
    stateOrCountry: 'Jaipur, Jodhpur & Udaipur, India',
    category: 'domestic',
    startingPrice: 'Price on Request',
    duration: '4 - 15 Days',
    bestTime: 'October to March',
    image: '/assets/aistudio/Rajasthan-1_c57fba4b.jpg',
    tagline: 'Palaces, Forts & Desert Royalty',
    keyAttractions: [
      'Amer Fort & Hawa Mahal',
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
    id: 'golden-triangle',
    name: 'The Golden Triangle',
    stateOrCountry: 'Delhi, Agra & Jaipur, India',
    category: 'domestic',
    startingPrice: 'Price on Request',
    duration: '4 - 6 Days',
    bestTime: 'October to April',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Mughal Wonders & Rajput Citadels',
    keyAttractions: [
      'Taj Mahal Sunrise',
      'Agra Fort & Mehtab Bagh',
      'Fatehpur Sikri Buland Darwaza',
      'Amer Fort & City Palace',
      'India Gate & Qutub Minar',
    ],
    description:
      'Experience India’s most celebrated cultural corridor connecting the Mughal marvels of Agra with the grand citadels of Jaipur and the historic landmarks of Delhi.',
    highlights: ['Yamuna Expressway Chauffeur', 'Sunrise Taj Mahal Tour', 'Fatehpur Sikri Stop', 'Amer Fort Guided Tour'],
  },
  {
    id: 'thar-desert',
    name: 'Thar Desert & Golden Citadels',
    stateOrCountry: 'Jaisalmer, Bikaner & Thar Dunes, India',
    category: 'domestic',
    startingPrice: 'Price on Request',
    duration: '3 - 9 Days',
    bestTime: 'October to March',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Golden Dunes, Havelis & Starry Camps',
    keyAttractions: [
      'Sam Sand Dunes Sunset Camel Safari',
      'Jaisalmer Living Golden Fort',
      'Patwon Ki Haveli Filigree',
      'Junagarh Fort Bikaner',
      'Gadisar Lake Shrines',
    ],
    description:
      'Drift across rolling sand dunes at sunset, listen to soulful desert folk songs around crackling bonfires, and wander the medieval living stone fortresses of Jaisalmer and Bikaner.',
    highlights: ['Swiss Luxury Tent Camp', 'Sunset Camel Safari', 'Kalbelia Folk Dance Night', 'Living Golden Fort Tour'],
  },
  {
    id: 'mewar-lakes',
    name: 'Mewar Palaces & Sacred Lakes',
    stateOrCountry: 'Udaipur, Pushkar & Ajmer, India',
    category: 'domestic',
    startingPrice: 'Price on Request',
    duration: '3 - 6 Days',
    bestTime: 'October to March',
    image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Romantic Lakes, Ghats & Marble Temples',
    keyAttractions: [
      'Lake Pichola Sunset Boat Cruise',
      'Udaipur City Palace & Jag Mandir',
      'Pushkar 52 Sacred Ghats & Brahma Temple',
      'Ajmer Sharif Sufi Dargah',
      'Ranakpur 1444 Marble Pillar Temple',
    ],
    description:
      'Glide over tranquil waters overlooking the Taj Lake Palace, experience the holy evening aarti on sacred ghats, and admire the most intricate marble stone carvings in the world.',
    highlights: ['Lake Pichola Boat Cruise', 'Evening Maha Aarti on Holy Ghats', 'Ranakpur Marble Sanctuary', 'Heritage Lakeview Stays'],
  },
  {
    id: 'wildlife-safari',
    name: 'Wild Havens & Tiger Safari Circuits',
    stateOrCountry: 'Ranthambore, Sariska & Keoladeo, India',
    category: 'domestic',
    startingPrice: 'Price on Request',
    duration: '3 - 7 Days',
    bestTime: 'October to June',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Royal Bengal Tigers & Wetland Birdlife',
    keyAttractions: [
      'Ranthambore Tiger Core Zone Safari',
      'UNESCO Ranthambore Hill Fort',
      'Keoladeo Ghana Bird Sanctuary Rickshaw Safari',
      'Sariska Tiger Reserve Valleys',
      'Ancient Trinetra Ganesha Temple',
    ],
    description:
      'Embark on dawn and dusk open-top Gypsy safaris tracking the Royal Bengal Tiger through ancient forest ruins, and cycle through the world’s most celebrated birding wetlands.',
    highlights: ['Open-top Safari Gypsies', 'Certified Forest Naturalists', 'UNESCO Forest Fortresses', 'Luxury Jungle Lodges'],
  },
  {
    id: 'shekhawati-havelis',
    name: 'Shekhawati Frescoes & Painted Havelis',
    stateOrCountry: 'Mandawa & Shekhawati, India',
    category: 'domestic',
    startingPrice: 'Price on Request',
    duration: '2 - 6 Days',
    bestTime: 'October to March',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    tagline: 'The Open-Air Art Gallery of Rajasthan',
    keyAttractions: [
      'Mandawa Heritage Frescoed Mansions',
      'Chokhani & Ladia Painted Havelis',
      'Traditional Shekhawati Courtyards',
      'Stepwells & Cenotaphs',
      'Rural Artisan Ateliers',
    ],
    description:
      'Step into an open-air art museum where every mansion wall is adorned with vibrant 18th-century frescoes depicting mythology, royal processions, and silk-route stories.',
    highlights: ['Centuries-Old Fresco Murals', 'Heritage Haveli Stays', 'Chauffeur Guided Walks', 'Authentic Shekhawati Cuisine'],
  },
];

export const FEATURED_PACKAGES: TourPackage[] = [
  // ==========================================
  // PACKAGE 1
  // ==========================================
  {
    id: 'pkg-1-pink-city-express',
    title: 'The Pink City Royal Forts & Palaces Express',
    subtitle: 'Jaipur Hilltop Forts, Jal Mahal & Walled City Heritage',
    duration: '1 Night / 2 Days',
    days: 2,
    nights: 1,
    startingPrice: 0,
    formattedPrice: 'Price on Request',
    pricingType: 'on_request',
    category: 'domestic',
    circuitCategory: 'jaipur',
    badge: 'Express Gateway',
    image: '/assets/aistudio/pi1_2087e314.jpg',
    images: ['/assets/aistudio/pi1_2087e314.jpg'],
    rating: 4.96,
    reviewsCount: 168,
    route: 'Jaipur Airport / Station · Amer Fort · Jaigarh · Nahargarh · Jal Mahal · City Palace · Jantar Mantar · Hawa Mahal',
    stayType: 'Heritage Boutique Haveli / Hotel (Upgradable to 5-Star Palace)',
    idealFor: 'Weekend Travelers, Transit Visitors, Couples & Photography Lovers',
    inclusions: [
      '1 Night accommodation in verified heritage hotel with breakfast',
      'Dedicated private air-conditioned vehicle with professional chauffeur',
      'Doorstep pick-up & drop from Jaipur Airport / Railway Station',
      'All toll taxes, parking fees, state road taxes & driver allowances included',
      'Chauffeur assistance at all monuments and old-city artisan bazaars',
    ],
    exclusions: [
      'Monument entrance tickets, camera permits, and audio guides (paid on-site)',
      'Optional elephant or jeep ride at Amer Fort',
      'Lunches, dinners, and personal food expenses',
      'Vehicle tier upgrades (Innova Crysta / SUV / Luxury) or 5-Star palace upgrades',
      'Tips to driver or hotel staff',
    ],
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Chauffeur Reception, Royal Hilltop Fortresses & Sunset Vistas',
        description:
          'Warm welcome by your private chauffeur at Jaipur Airport or Railway Station followed by check-in at your heritage hotel. Ascend to Amer Fort and Maota Lake to explore royal courtyards, Diwan-e-Aam, and the mirror work of Sheesh Mahal. Continue to Jaigarh Fort, home to the colossal Jaivana cannon. Reach Nahargarh Fort before twilight for panoramic cliffside sunset views overlooking the Pink City. On the return drive, enjoy an evening photo stop at illuminated Jal Mahal, then stroll through Johari Bazaar and Bapu Bazaar.',
        highlights: [
          'Amer Fort royal courtyards & Sheesh Mahal mirror work',
          'Jaigarh Fort & colossal Jaivana cannon',
          'Nahargarh Fort cliffside panoramic sunset',
          'Jal Mahal evening photo stop on Man Sagar Lake',
          'Bapu Bazaar & Johari Bazaar textile walk',
        ],
        meals: 'Welcome drink on arrival (Breakfast included next morning)',
      },
      {
        day: 2,
        title: 'Walled City Heritage, Royal Palaces & Seamless Departure',
        description:
          'Begin with an early morning exterior photo stop at the iconic honeycomb facade of Hawa Mahal (Palace of Winds). Tour the royal residence of City Palace, visiting the Mubarak Mahal textile gallery, Diwan-e-Khas, and Chandra Mahal courtyards. Walk next door to Jantar Mantar, the UNESCO World Heritage astronomical observatory. Conclude with a photo stop at the Indo-Saracenic Albert Hall Museum before your chauffeur transfers you to Jaipur Airport or Railway Station.',
        highlights: [
          'Hawa Mahal morning breeze photography',
          'City Palace museum & Peacock Gate courtyards',
          'Jantar Mantar stone astronomical sundial',
          'Albert Hall Museum exterior photo stop',
          'Comfortable drop-off at Airport / Railway Station',
        ],
        meals: 'Buffet Breakfast at hotel',
      },
    ],
  },

  // ==========================================
  // PACKAGE 2
  // ==========================================
  {
    id: 'pkg-2-amber-to-ghats',
    title: 'Amber to Ghats: Complete Jaipur Heritage & Cultural Immersion',
    subtitle: 'Stepwells, Three Hill Forts, Sacred Temples & Chokhi Dhani Folk Village',
    duration: '2 Nights / 3 Days',
    days: 3,
    nights: 2,
    startingPrice: 0,
    formattedPrice: 'Price on Request',
    pricingType: 'on_request',
    category: 'domestic',
    circuitCategory: 'jaipur',
    badge: 'Best Seller',
    image: '/assets/aistudio/pi2_0f88c286.jpg',
    images: ['/assets/aistudio/pi2_0f88c286.jpg'],
    rating: 4.98,
    reviewsCount: 220,
    route: 'Jaipur · Birla Mandir · Albert Hall · Patrika Gate · Chokhi Dhani · Amer Fort · Panna Meena Stepwell · Jaigarh · Nahargarh · City Palace · Jantar Mantar',
    stayType: '4-Star Verified Heritage Boutique Hotel (Palace upgrades available)',
    idealFor: 'Families, First-Time Rajasthan Visitors, Culture Enthusiasts',
    inclusions: [
      '2 Nights accommodation in handpicked heritage boutique hotel',
      'Daily lavish buffet breakfast at hotel',
      'Dedicated AC Sedan / SUV with experienced local chauffeur',
      'Comprehensive sightseeing covering all key heritage sights and stepwells',
      'Evening visit to Chokhi Dhani / Ethnic Village with authentic dinner experience',
      'All toll taxes, parking fees, state road taxes & driver allowances included',
    ],
    exclusions: [
      'Monument entrance tickets, camera permits, and audio guides (paid on-site)',
      'Optional elephant ride or golf cart at Amer Fort',
      'Lunches, beverages, and personal expenses',
      'Vehicle tier upgrades (Innova Crysta / SUV / Luxury)',
      'Tips and porterage',
    ],
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Pink City Welcome, White Marble Shrines & Festive Cultural Night',
        description:
          'Arrival pick-up from Jaipur Airport or Railway Station and hotel check-in. Visit the pristine white marble Birla Mandir (Laxmi Narayan Temple) nestled beneath Moti Dungri. Tour the Indo-Saracenic Albert Hall Museum surrounded by Ram Niwas Gardens. Admire the vibrant hand-painted arches of Patrika Gate at Jawahar Circle. In the evening, immerse in traditional Rajasthani culture at Chokhi Dhani ethnic village with folk dances, puppet shows, acrobatics, and an authentic Rajasthani Thali dinner.',
        highlights: [
          'White marble carvings of Birla Mandir',
          'Albert Hall Museum & Ram Niwas Gardens',
          'Patrika Gate Instagram photography',
          'Chokhi Dhani ethnic village cultural dinner show',
        ],
        meals: 'Traditional Rajasthani Thali Dinner at Chokhi Dhani',
      },
      {
        day: 2,
        title: 'The Great Aravalli Citadels & Ancient Geometric Stepwell',
        description:
          'Head into the rugged Aravalli hills to Amer Fort, ascending via the royal elephant pathway. Marvel at Sheesh Mahal, Diwan-e-Aam, and Sukh Niwas. Step down to Panna Meena Ka Kund, a mesmerizing 16th-century symmetrical stepwell. Stop at Jal Mahal floating serenely in Man Sagar Lake. Ascend Jaigarh Fort to witness the world’s largest wheeled cannon (Jaivana), then conclude at Nahargarh Fort for a sweeping golden-hour sunset overlooking the entire pink sprawl.',
        highlights: [
          'Amer Fort & Sheesh Mahal mirror palace',
          'Panna Meena Ka Kund geometric stepwell',
          'Jal Mahal panoramic lake stop',
          'Jaigarh Fort & Jaivana giant cannon',
          'Nahargarh Fort panoramic city sunset',
        ],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 3,
        title: 'Walled City Heart, UNESCO Observatory & Artisan Bazaars',
        description:
          'Begin with morning photography at Hawa Mahal before the city wakes. Walk through City Palace, admiring the Peacock Gate, royal armory, and Mubarak Mahal. Visit the monumental Jantar Mantar observatory, studying the world’s largest stone sundial. In the afternoon, visit traditional block-printing workshops in Sanganer or browse blue pottery and gemstones in Johari Bazaar. Seamless chauffeur drop-off at Jaipur Airport or Railway Station.',
        highlights: [
          'Hawa Mahal morning breeze architecture',
          'City Palace museum & Pritam Niwas Chowk',
          'Jantar Mantar UNESCO sundial instruments',
          'Sanganeri block-printing & blue pottery ateliers',
          'Assisted departure transfer',
        ],
        meals: 'Buffet Breakfast at hotel',
      },
    ],
  },

  // ==========================================
  // PACKAGE 3
  // ==========================================
  {
    id: 'pkg-3-sacred-sands-pushkar',
    title: 'Sacred Sands & Sufi Shrines: Jaipur, Ajmer & Pushkar Trail',
    subtitle: 'From Pink City Forts to Ajmer Sharif Dargah & Pushkar Holy Lake',
    duration: '2 Nights / 3 Days',
    days: 3,
    nights: 2,
    startingPrice: 0,
    formattedPrice: 'Price on Request',
    pricingType: 'on_request',
    category: 'domestic',
    circuitCategory: 'desert',
    badge: 'Spiritual Trail',
    image: '/assets/aistudio/pi3_6369dce4.jpg',
    images: ['/assets/aistudio/pi3_6369dce4.jpg'],
    rating: 4.95,
    reviewsCount: 142,
    route: 'Jaipur · Amer Fort · Jal Mahal · Ajmer Sharif Dargah · Adhai Din Ka Jhonpra · Pushkar Holy Lake · Brahma Temple · Savitri Hill',
    stayType: 'Heritage Boutique Hotel (Jaipur 1N) + Desert Resort / Haveli (Pushkar 1N)',
    idealFor: 'Spiritual Seekers, Couples, Families & Photography Travelers',
    inclusions: [
      '1 Night in Jaipur heritage hotel + 1 Night in Pushkar resort/haveli',
      'Daily buffet breakfast at both properties',
      'Dedicated AC Sedan / SUV with highway-trained chauffeur for entire circuit',
      'All interstate highway tolls, state permits, parking & fuel charges',
      'Chauffeur assistance for sacred Darshan at Ajmer Sharif and Pushkar Ghats',
    ],
    exclusions: [
      'Monument entrance tickets, Dargah offerings (Chadars/flowers), and camera permits',
      'Pushkar ropeway ticket to Savitri Mata Temple',
      'Lunches, dinners, and personal shopping',
      'Vehicle tier upgrades (Innova Crysta / SUV / Luxury)',
      'Tips to local guides or drivers',
    ],
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Jaipur Heritage Forts & Pink City Palaces',
        description:
          'Morning arrival reception in Jaipur. Tour the majestic Amer Fort overlooking Maota Lake and admire the mirror mosaics in Sheesh Mahal. Pause at Jal Mahal for photographs. Tour the royal City Palace complex and take photos of Hawa Mahal’s honeycomb facade. Evening leisure exploring the aromatic spice and handicraft lanes of Johari Bazaar.',
        highlights: [
          'Amer Fort courtyards & Sheesh Mahal',
          'Jal Mahal lake view',
          'City Palace heritage galleries',
          'Hawa Mahal photo stop',
          'Jaipur overnight stay',
        ],
        meals: 'Breakfast next morning',
      },
      {
        day: 2,
        title: 'Scenic Highway to Ajmer Sharif Dargah & Sacred Pushkar Lake',
        description:
          'After breakfast, embark on a scenic drive through the Aravalli hills to the holy city of Ajmer. Pay respects at the revered Sufi shrine of Khwaja Moinuddin Chishti (Ajmer Sharif Dargah). Explore the historic arches of Adhai Din Ka Jhonpra. Cross the Nag Pahar mountain pass into sacred Pushkar. Check in to your desert resort or haveli. In the late afternoon, visit the rare 14th-century Lord Brahma Temple and partake in the mesmerizing Maha Aarti on the 52 sacred Ghats of Pushkar Lake as sunset reflects over holy waters.',
        highlights: [
          'Ajmer Sharif Dargah Sufi blessings',
          'Adhai Din Ka Jhonpra historic arches',
          'Lord Brahma Temple Darshan',
          'Pushkar Lake 52 sacred Ghats & evening Maha Aarti',
          'Vibrant Pushkar rose bazaar walk',
        ],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 3,
        title: 'Savitri Hilltop Panorama, Desert Bazaars & Return to Jaipur',
        description:
          'Begin with an early morning trek or ropeway ride to Savitri Mata Temple perched atop Ratnagiri Hill for a breathtaking 360-degree sunrise view over Pushkar Lake and the surrounding Thar sand dunes. Browse Pushkar’s bohemian bazaars famous for rose water, camel leather goods, and embroidered textiles. In the afternoon, take a comfortable highway drive back to Jaipur for drop-off at the Airport or Railway Station.',
        highlights: [
          'Sunrise view from Savitri Mata Temple (Ropeway/Trek)',
          'Pushkar bohemian shopping & artisanal rose products',
          'Smooth express highway drive back to Jaipur',
          'Assisted drop-off at Airport / Railway Station',
        ],
        meals: 'Buffet Breakfast at hotel',
      },
    ],
  },

  // ==========================================
  // PACKAGE 4
  // ==========================================
  {
    id: 'pkg-4-ranthambore-tiger',
    title: 'Fortresses to Forests: Jaipur Heritage & Ranthambore Tiger Escape',
    subtitle: 'Jaipur Pink City Grandeur Combined with Royal Bengal Tiger Safaris',
    duration: '2 Nights / 3 Days',
    days: 3,
    nights: 2,
    startingPrice: 0,
    formattedPrice: 'Price on Request',
    pricingType: 'on_request',
    category: 'domestic',
    circuitCategory: 'wildlife',
    badge: 'Wildlife Adventure',
    image: '/assets/aistudio/pi4_8fe5132c.jpg',
    images: ['/assets/aistudio/pi4_8fe5132c.jpg'],
    rating: 4.97,
    reviewsCount: 154,
    route: 'Jaipur · Amer Fort · Jal Mahal · Sawai Madhopur · Ranthambore Tiger Reserve Safari · Ranthambore Fort · Trinetra Ganesha',
    stayType: 'Heritage Boutique Stay (Jaipur 1N) + Premium Jungle Resort (Ranthambore 1N)',
    idealFor: 'Wildlife Photographers, Families, Nature Lovers & Adventure Seekers',
    inclusions: [
      '1 Night in Jaipur heritage hotel + 1 Night in Ranthambore jungle resort',
      'Breakfast included at both properties (+ Dinner at Ranthambore jungle resort)',
      'Dedicated AC Sedan / SUV with chauffeur for Jaipur and Sawai Madhopur route',
      'Assistance with government booking for Ranthambore Gypsy / Canter Safari permits',
      'All toll taxes, state permits, parking & driver night charges included',
    ],
    exclusions: [
      'Official Forest Department Safari Gypsy / Canter ticket & naturalist fee (paid directly as per govt rates)',
      'Monument tickets & camera permits at Amer & Ranthambore Fort',
      'Lunches and personal beverages',
      'Vehicle tier upgrades (Innova Crysta / SUV / Luxury)',
      'Tips to jungle trackers and chauffeurs',
    ],
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Jaipur Morning Forts & Scenic Highway Drive to Ranthambore',
        description:
          'Morning pickup in Jaipur. Tour the royal Amer Fort and stop for lake photos at Jal Mahal. Drive through the picturesque countryside to Sawai Madhopur, the gateway to Ranthambore National Park. Check in at your luxury jungle resort. Enjoy an evening nature briefing or unwind beside a crackling bonfire with Rajasthani folk musicians.',
        highlights: [
          'Amer Fort morning heritage exploration',
          'Jal Mahal lake view stop',
          'Picturesque highway drive to Sawai Madhopur',
          'Jungle resort check-in & evening bonfire',
        ],
        meals: 'Gourmet Dinner at jungle resort',
      },
      {
        day: 2,
        title: 'Royal Bengal Tiger Safari & UNESCO Ranthambore Hill Fort',
        description:
          'Board an open-top Gypsy or Canter at dawn for an exhilarating jungle safari deep into the core zones of Ranthambore Tiger Reserve. Track the legendary Royal Bengal Tiger, leopards, marsh crocodiles, and sambar deer through ancient banyan trees and lake ruins. In the afternoon, ascend the 10th-century UNESCO World Heritage Ranthambore Fort resting atop high cliffs inside the forest, and seek blessings at the sacred Trinetra Ganesha Temple.',
        highlights: [
          'Dawn jungle safari with certified forest naturalist',
          'Royal Bengal Tiger tracking across lakes and forests',
          'UNESCO Ranthambore Fort cliffside panoramic exploration',
          'Historic Trinetra Ganesha Temple visit',
          'Evening relaxation at jungle lodge',
        ],
        meals: 'Buffet Breakfast & Dinner at resort',
      },
      {
        day: 3,
        title: 'Artisan Village Walk & Scenic Return to Jaipur',
        description:
          'Enjoy a leisurely breakfast or opt for a second dawn safari. Visit the Dastkar Ranthambore women’s craft cooperative to witness authentic patchwork and block-printed textiles. Embark on a comfortable drive back to Jaipur, with assisted drop-off at Jaipur Airport or Railway Station.',
        highlights: [
          'Dastkar artisan cooperative visit',
          'Scenic countryside highway drive back to Jaipur',
          'Prompt drop-off at Airport / Railway Station',
        ],
        meals: 'Buffet Breakfast at resort',
      },
    ],
  },

  // ==========================================
  // PACKAGE 5
  // ==========================================
  {
    id: 'pkg-5-jaipur-agra-taj',
    title: 'Rajput Ramparts to Mughal Marble: Jaipur & Taj Mahal Weekend Gateway',
    subtitle: 'Chand Baori Stepwell, Fatehpur Sikri Imperial Capital & Sunrise at Taj Mahal',
    duration: '1 Night / 2 Days',
    days: 2,
    nights: 1,
    startingPrice: 0,
    formattedPrice: 'Price on Request',
    pricingType: 'on_request',
    category: 'domestic',
    circuitCategory: 'golden-triangle',
    badge: 'Weekend Special',
    image: '/assets/aistudio/pi5_133ea296.jpg',
    images: ['/assets/aistudio/pi5_133ea296.jpg'],
    rating: 4.96,
    reviewsCount: 188,
    route: 'Jaipur · Chand Baori Stepwell (Abhaneri) · Fatehpur Sikri · Mehtab Bagh · Taj Mahal Sunrise · Agra Fort',
    stayType: '4-Star Premium Hotel in Agra (Taj View room upgrade available)',
    idealFor: 'Weekend Travelers, Heritage Buffs, Couples & Transit Visitors',
    inclusions: [
      '1 Night accommodation in premium 4-Star hotel in Agra with breakfast',
      'Dedicated AC vehicle (Sedan / Innova Crysta) for entire Jaipur-Agra circuit',
      'Assistance at Chand Baori, Fatehpur Sikri, and Taj Mahal',
      'All interstate highway tolls, state taxes, parking & fuel included',
      'Drop-off flexibility in Jaipur, Agra, or Delhi (as requested)',
    ],
    exclusions: [
      'Taj Mahal, Agra Fort, Fatehpur Sikri & Chand Baori entrance tickets (paid on-site)',
      'Audio guides or licensed local monument guides',
      'Lunches, dinners, and personal marble souvenir shopping',
      'Vehicle tier upgrades (Innova Crysta / SUV / Luxury)',
      'Tips to driver or hotel staff',
    ],
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Jaipur to Agra via Chand Baori Stepwell & Fatehpur Sikri',
        description:
          'Early morning pickup from Jaipur in your private AC vehicle. Drive to Abhaneri to marvel at the 8th-century Chand Baori, one of the world’s deepest and largest stepwells featuring 3,500 symmetrical steps. Continue to Fatehpur Sikri, Emperor Akbar’s abandoned red sandstone imperial capital; marvel at Buland Darwaza, Jama Masjid, and the white marble Tomb of Salim Chishti. Arrive in Agra, check in, and view the Taj Mahal across the Yamuna River from Mehtab Bagh at sunset.',
        highlights: [
          'Chand Baori stepwell architectural marvel in Abhaneri',
          'Fatehpur Sikri UNESCO World Heritage red sandstone complex',
          'Buland Darwaza (Gate of Magnificence)',
          'Mehtab Bagh sunset view of the Taj Mahal across Yamuna',
          'Overnight stay in Agra',
        ],
        meals: 'Breakfast next morning',
      },
      {
        day: 2,
        title: 'Dawn at the Magnificent Taj Mahal, Agra Fort & Departure',
        description:
          'Witness the sunrise bathe the white Makrana marble of the Taj Mahal in golden pink light. Tour the mausoleum and reflecting pools of this eternal Wonder of the World. Return to hotel for breakfast. Explore the imposing red sandstone Agra Fort, walking through Jahangiri Mahal, Khas Mahal, and Musamman Burj where Emperor Shah Jahan gazed at the Taj. After sampling famous Agra Petha, drive back to Jaipur (or transfer to Delhi / Agra station as scheduled).',
        highlights: [
          'Sunrise tour of the Taj Mahal (UNESCO World Heritage Site)',
          'Agra Fort imperial palaces and Musamman Burj balcony',
          'Agra marble inlay craft workshop & Petha tasting',
          'Comfortable highway return transfer to Jaipur / Delhi',
        ],
        meals: 'Buffet Breakfast at hotel',
      },
    ],
  },

  // ==========================================
  // PACKAGE 6
  // ==========================================
  {
    id: 'pkg-6-jaipur-to-udaipur-corridor',
    title: 'Palaces, Lakes & Sacred Ghats: Jaipur to Udaipur Royal Corridor',
    subtitle: 'Pink City Grandeur, Ajmer Sufi Dargah, Holy Pushkar Lake & City of Lakes',
    duration: '4 Nights / 5 Days',
    days: 5,
    nights: 4,
    startingPrice: 0,
    formattedPrice: 'Price on Request',
    pricingType: 'on_request',
    category: 'domestic',
    circuitCategory: 'mewar',
    badge: 'Royal Corridor',
    image: '/assets/aistudio/pi6_0d128b89.jpg',
    images: ['/assets/aistudio/pi6_0d128b89.jpg'],
    rating: 4.98,
    reviewsCount: 195,
    route: 'Jaipur · Ajmer Sharif · Pushkar Lake · Udaipur · Lake Pichola Boat Cruise · City Palace · Saheliyon Ki Bari · Sajjangarh Monsoon Palace',
    stayType: 'Heritage Hotels (Jaipur 1N, Pushkar 1N, Udaipur 2N)',
    idealFor: 'Honeymooners, Couples, Families, Scenic Explorers',
    inclusions: [
      '4 Nights accommodation in handpicked heritage hotels across all 3 cities',
      'Daily buffet breakfast at all hotels',
      'Dedicated AC Sedan / SUV with chauffeur for complete 5-day route',
      'Sunset boat ride ticket on Lake Pichola past Jag Mandir',
      'All toll taxes, parking fees, state road taxes & driver allowances included',
    ],
    exclusions: [
      'Monument entrance tickets and camera permits (paid directly on site)',
      'Bagore Ki Haveli Dharohar cultural show ticket',
      'Lunches, dinners, and personal shopping expenses',
      'Vehicle tier upgrades (Innova Crysta / SUV / Luxury)',
      'Tips to driver and hotel staff',
    ],
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Arrival in Jaipur & Pink City Royal Sights',
        description:
          'Chauffeur welcome at Jaipur Airport or Railway Station. Visit the majestic Amer Fort, photograph Jal Mahal floating in Man Sagar Lake, and explore the City Palace and Hawa Mahal. In the evening, stroll through the vibrant jewelers’ and textile markets of Johari Bazaar.',
        highlights: ['Amer Fort & Sheesh Mahal', 'Jal Mahal lake view', 'City Palace courtyards', 'Hawa Mahal photo stop'],
        meals: 'Breakfast next morning',
      },
      {
        day: 2,
        title: 'Jaipur to Ajmer Sharif & Holy Pushkar Lake',
        description:
          'Drive to Ajmer to visit the sacred Sufi shrine of Khwaja Moinuddin Chishti (Ajmer Sharif Dargah). Continue across the scenic Nag Pahar hills into Pushkar. Tour the Lord Brahma Temple and witness the sacred sunset Maha Aarti with glowing oil lamps along the 52 holy Ghats of Pushkar Lake.',
        highlights: ['Ajmer Sharif Dargah Sufi blessings', 'Lord Brahma Temple Darshan', 'Pushkar 52 Ghats sunset Aarti', 'Pushkar overnight stay'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 3,
        title: 'Pushkar to Udaipur – The City of Lakes',
        description:
          'Drive through the heart of Mewar towards the romantic lake city of Udaipur. Check in to your heritage hotel overlooking the water. In the golden afternoon, board a private or shared boat cruise on Lake Pichola, floating past the marble pavilions of Jag Mandir and the majestic Taj Lake Palace as sunset bathes the Aravalli hills.',
        highlights: ['Scenic Mewar countryside drive', 'Lake Pichola sunset boat cruise', 'Jag Mandir & Taj Lake Palace vistas', 'Udaipur overnight stay'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 4,
        title: 'Udaipur Palatial Splendors, Fountains & Folk Heritage',
        description:
          'Tour Udaipur City Palace, the largest royal complex in Rajasthan, admiring Peacock Square, mirror mosaics, and the crystal gallery. Visit the intricately carved Jagdish Temple and the lush fountains of Saheliyon Ki Bari (Garden of the Maidens). In the evening, attend the Dharohar folk dance show at Bagore Ki Haveli on Gangaur Ghat.',
        highlights: ['Udaipur City Palace & museum', 'Jagdish Temple stone carvings', 'Saheliyon Ki Bari fountains', 'Bagore Ki Haveli evening folk dance'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 5,
        title: 'Monsoon Palace Vistas & Departure',
        description:
          'Ascend to Sajjangarh Palace (Monsoon Palace) perched high in the hills for breathtaking panoramic views of Udaipur’s lakes and palaces. Transfer seamlessly to Udaipur Maharana Pratap Airport or Railway Station (or return journey to Jaipur as requested).',
        highlights: ['Sajjangarh Monsoon Palace hilltop vistas', 'Lake Fateh Sagar photo stop', 'Assisted departure transfer'],
        meals: 'Buffet Breakfast at hotel',
      },
    ],
  },

  // ==========================================
  // PACKAGE 7
  // ==========================================
  {
    id: 'pkg-7-forts-sun-city-lakes',
    title: 'Forts of the Sun & City of Lakes: Jaipur, Udaipur & Jodhpur Panorama',
    subtitle: 'Pink City, Holy Pushkar, Lake Pichola, Ranakpur Marble Temples & Blue City',
    duration: '5 Nights / 6 Days',
    days: 6,
    nights: 5,
    startingPrice: 0,
    formattedPrice: 'Price on Request',
    pricingType: 'on_request',
    category: 'domestic',
    circuitCategory: 'mewar',
    badge: 'Popular Grand Circuit',
    image: '/assets/aistudio/pu7_ec8ec6c1.jpg',
    images: ['/assets/aistudio/pu7_ec8ec6c1.jpg'],
    rating: 4.99,
    reviewsCount: 234,
    route: 'Jaipur · Ajmer & Pushkar · Udaipur · Ranakpur Jain Temples · Jodhpur (Mehrangarh, Jaswant Thada, Blue City)',
    stayType: 'Heritage Hotels & Havelis (Jaipur 1N, Pushkar 1N, Udaipur 2N, Jodhpur 1N)',
    idealFor: 'Couples, Families, Culture Travelers, International Guests',
    inclusions: [
      '5 Nights accommodation in verified heritage boutique hotels',
      'Daily buffet breakfast at all hotels',
      'Dedicated AC vehicle (Sedan / Innova Crysta) for entire 6-day journey',
      'Sunset boat ride on Lake Pichola in Udaipur',
      'All interstate highway tolls, state taxes, parking & fuel charges included',
    ],
    exclusions: [
      'Monument entry tickets, audio guides, and elevator passes at Mehrangarh (paid on-site)',
      'Ranakpur temple camera permits',
      'Lunches, dinners, and personal expenses',
      'Vehicle tier upgrades (Innova Crysta / SUV / Luxury)',
      'Tips to driver or local guides',
    ],
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Pink City Royal Forts & Heritage Bazaars',
        description:
          'Chauffeur reception at Jaipur Airport or Railway Station. Visit the majestic Amer Fort, Sheesh Mahal, Jal Mahal, and the City Palace museum. Overnight stay in Jaipur.',
        highlights: ['Amer Fort & Sheesh Mahal', 'Jal Mahal lake view', 'City Palace royal museum', 'Jaipur overnight stay'],
        meals: 'Breakfast next morning',
      },
      {
        day: 2,
        title: 'Jaipur to Ajmer Sharif & Holy Pushkar',
        description:
          'Drive to Ajmer to visit Ajmer Sharif Dargah. Cross over to Pushkar to visit the Brahma Temple and experience the serene sunset Maha Aarti on the 52 sacred Ghats of Pushkar Lake. Overnight in Pushkar.',
        highlights: ['Ajmer Sharif Dargah', 'Pushkar Brahma Temple', 'Pushkar Lake sunset aarti', 'Pushkar overnight stay'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 3,
        title: 'Pushkar to Udaipur – Lake Pichola Boat Cruise',
        description:
          'Scenic morning drive to Udaipur. Check in to your lakefront heritage hotel. In the late afternoon, enjoy a romantic boat cruise on Lake Pichola, admiring Jag Mandir and the majestic Taj Lake Palace. Overnight in Udaipur.',
        highlights: ['Scenic Mewar highway drive', 'Lake Pichola sunset boat cruise', 'Jag Mandir view', 'Udaipur overnight stay'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 4,
        title: 'Udaipur Royal Palaces, Gardens & Cultural Evening',
        description:
          'Tour Udaipur City Palace complex, Jagdish Temple, and the royal fountain gardens of Saheliyon Ki Bari. Evening walk along Gangaur Ghat or enjoy the Dharohar folk dance show. Overnight in Udaipur.',
        highlights: ['Udaipur City Palace', 'Jagdish Temple', 'Saheliyon Ki Bari gardens', 'Gangaur Ghat evening walk'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 5,
        title: 'Udaipur to Jodhpur via Ranakpur Jain Temples',
        description:
          'Drive to Jodhpur stopping at the world-renowned 15th-century Ranakpur Jain Temple, famous for its 1,444 uniquely carved white marble pillars. Continue to the "Blue City" Jodhpur. Check in to your heritage hotel with a view of Mehrangarh Fort. Overnight in Jodhpur.',
        highlights: ['Ranakpur Jain Temple 1444 carved marble pillars', 'Scenic Aravalli valley drive', 'Arrival in Jodhpur Blue City'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 6,
        title: 'Mehrangarh Citadel, Jaswant Thada & Jodhpur Departure',
        description:
          'Explore Mehrangarh Fort towering on a 400-foot perpendicular cliff, visiting Moti Mahal, Phool Mahal, and the royal armory. Visit Jaswant Thada, the serene white marble royal cenotaphs. Stroll through the blue alleys of Brahmpuri and the Clock Tower (Ghanta Ghar) spice market before drop-off at Jodhpur Airport / Railway Station.',
        highlights: ['Mehrangarh Fort ramparts & palaces', 'Jaswant Thada white marble memorial', 'Blue City alleyway walk', 'Departure transfer'],
        meals: 'Buffet Breakfast at hotel',
      },
    ],
  },

  // ==========================================
  // PACKAGE 8
  // ==========================================
  {
    id: 'pkg-8-great-thar-expedition',
    title: 'Golden Sands to Azure Streets: The Great Thar Desert & Palaces Expedition',
    subtitle: 'Jaipur, Bikaner, Jaisalmer Sand Dunes Camp, Jodhpur, Udaipur & Pushkar',
    duration: '8 Nights / 9 Days',
    days: 9,
    nights: 8,
    startingPrice: 0,
    formattedPrice: 'Price on Request',
    pricingType: 'on_request',
    category: 'domestic',
    circuitCategory: 'desert',
    badge: 'Epic Desert Safari',
    image: '/assets/aistudio/pu8_5178fc62.jpg',
    images: ['/assets/aistudio/pu8_5178fc62.jpg'],
    rating: 4.99,
    reviewsCount: 260,
    route: 'Jaipur · Bikaner · Jaisalmer (Sam Sand Dunes) · Jodhpur · Udaipur · Chittorgarh · Pushkar · Jaipur',
    stayType: 'Heritage Hotels (7N) + Swiss Luxury Desert Tent Camp (1N in Sam Dunes)',
    idealFor: 'Bucket-List Explorers, Families, Photographers, Adventure Lovers',
    inclusions: [
      '7 Nights in verified heritage boutique hotels + 1 Night in luxury desert Swiss camp',
      'Daily buffet breakfast at all hotels + Traditional Rajasthani dinner at desert camp',
      'Camel sunset safari & cultural folk dance night with bonfire in Sam Sand Dunes',
      'Dedicated AC vehicle (Innova Crysta / SUV / Sedan) for the full 9-day circuit',
      'All toll taxes, state permits, parking & driver night charges included',
    ],
    exclusions: [
      'Monument entrance tickets, safari passes & camera permits (paid on site)',
      'Optional desert quad biking or parasailing',
      'Lunches, dinners (except camp dinner), and personal shopping',
      'Vehicle tier upgrades or luxury 5-star palace upgrades',
      'Tips to driver or local guides',
    ],
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Jaipur Arrival & Amber Fort Welcome',
        description: 'Chauffeur pickup in Jaipur, check-in, and tour Amer Fort, Jal Mahal, and City Palace. Overnight in Jaipur.',
        highlights: ['Amer Fort & Sheesh Mahal', 'Jal Mahal photo stop', 'Jaipur overnight stay'],
        meals: 'Breakfast next morning',
      },
      {
        day: 2,
        title: 'Jaipur to Bikaner – Junagarh Fort & Camel Country',
        description: 'Drive to Bikaner. Tour the unconquered Junagarh Fort with its gilded halls and visit the National Research Centre on Camel. Overnight in Bikaner.',
        highlights: ['Junagarh Fort palaces & museum', 'Karni Mata Temple / Camel farm visit', 'Bikaner overnight stay'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 3,
        title: 'Bikaner to Jaisalmer – Gateway to the Thar Desert',
        description: 'Drive through the desert highway to the golden city of Jaisalmer. Evening visit to Gadisar Lake surrounded by carved chattris. Overnight in Jaisalmer.',
        highlights: ['Scenic Thar desert highway drive', 'Gadisar Lake sunset & chattris', 'Jaisalmer overnight stay'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 4,
        title: 'Jaisalmer Golden Fort & Sam Sand Dunes Luxury Camp',
        description: 'Tour the living Golden Fort (Sonar Qella) and Patwon Ki Haveli. Drive to Sam Sand Dunes for a sunset camel ride, bonfire, Kalbelia folk dance, and luxury tent stay. Overnight in desert camp.',
        highlights: ['Jaisalmer living Golden Fort', 'Patwon Ki Haveli stone carvings', 'Camel safari on Sam Sand Dunes', 'Campfire & Kalbelia cultural show'],
        meals: 'Breakfast & Traditional Camp Dinner',
      },
      {
        day: 5,
        title: 'Jaisalmer to Jodhpur – The Blue City',
        description: 'Drive to Jodhpur. Visit the majestic Mehrangarh Fort rising 400 feet above the blue houses, and Jaswant Thada memorial. Overnight in Jodhpur.',
        highlights: ['Mehrangarh Fort exploration', 'Jaswant Thada white marble memorial', 'Clock tower blue bazaar walk'],
        meals: 'Buffet Breakfast at camp',
      },
      {
        day: 6,
        title: 'Jodhpur to Udaipur via Ranakpur Marble Temples',
        description: 'Drive towards Udaipur, halting at Ranakpur Jain Temple with 1,444 intricate marble pillars. Arrive in the romantic City of Lakes. Overnight in Udaipur.',
        highlights: ['Ranakpur Jain Temple architecture', 'Scenic Aravalli valleys', 'Udaipur arrival & check-in'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 7,
        title: 'Udaipur City Palace & Lake Pichola Boat Cruise',
        description: 'Tour Udaipur City Palace, Saheliyon Ki Bari, and enjoy a golden hour boat ride on Lake Pichola past Jag Mandir. Overnight in Udaipur.',
        highlights: ['City Palace royal museum', 'Saheliyon Ki Bari fountains', 'Lake Pichola sunset boat cruise'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 8,
        title: 'Udaipur to Pushkar via Chittorgarh Fort',
        description: 'Drive to Pushkar, pausing at Chittorgarh Fort, India’s largest citadel (Vijay Stambha & Rani Padmini Palace). In Pushkar, witness sunset on the sacred Ghats. Overnight in Pushkar.',
        highlights: ['Chittorgarh Fort UNESCO site & Vijay Stambha', 'Pushkar Holy Lake & Brahma Temple', 'Pushkar overnight stay'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 9,
        title: 'Pushkar to Jaipur & Airport Departure',
        description: 'Morning visit to Savitri Mata Temple, then smooth highway drive back to Jaipur for drop-off at Airport / Railway Station.',
        highlights: ['Pushkar morning bazaars', 'Comfortable return drive to Jaipur', 'Assisted departure transfer'],
        meals: 'Buffet Breakfast at hotel',
      },
    ],
  },

  // ==========================================
  // PACKAGE 9
  // ==========================================
  {
    id: 'pkg-9-wild-havens-safari',
    title: 'Wild Havens & Historic Capitals: Delhi, Sariska, Bharatpur & Ranthambore',
    subtitle: 'Royal Bengal Tigers, UNESCO Keoladeo Wetland Birds & North India Heritage',
    duration: '6 Nights / 7 Days',
    days: 7,
    nights: 6,
    startingPrice: 0,
    formattedPrice: 'Price on Request',
    pricingType: 'on_request',
    category: 'domestic',
    circuitCategory: 'wildlife',
    badge: 'National Park Special',
    image: '/assets/aistudio/pi9_7717741d.jpg',
    images: ['/assets/aistudio/pi9_7717741d.jpg'],
    rating: 4.95,
    reviewsCount: 110,
    route: 'Delhi · Sariska Tiger Reserve · Keoladeo Bharatpur Bird Sanctuary · Ranthambore Tiger Safari · Jaipur Forts · Delhi',
    stayType: 'Nature Lodges & Heritage Hotels (Delhi 1N, Sariska 1N, Bharatpur 1N, Ranthambore 2N, Jaipur 1N)',
    idealFor: 'Birdwatchers, Wildlife Photographers, Families, Nature Enthusiasts',
    inclusions: [
      '6 Nights accommodation in handpicked nature resorts and heritage stays',
      'Daily buffet breakfast at all hotels (+ dinners at wildlife lodges)',
      'Dedicated AC vehicle with chauffeur across the entire inter-state safari route',
      'Assistance with national park safari booking and certified naturalists',
      'All toll taxes, state permits, parking & driver charges included',
    ],
    exclusions: [
      'Official Forest Department safari gypsy/canter tickets and naturalist fees (paid on-site)',
      'Cycle-rickshaw guide charges at Keoladeo Bharatpur',
      'Monument entrance tickets in Delhi & Jaipur',
      'Vehicle tier upgrades (Innova Crysta / SUV / Luxury)',
      'Tips to trackers and drivers',
    ],
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Delhi Reception & Historic Capital Highlights',
        description: 'Chauffeur pickup in Delhi. Tour Qutub Minar, drive past India Gate and Rashtrapati Bhavan, and visit Humayun’s Tomb. Overnight in Delhi.',
        highlights: ['Qutub Minar & Humayun’s Tomb', 'India Gate ceremonial boulevard drive', 'Delhi overnight stay'],
        meals: 'Breakfast next morning',
      },
      {
        day: 2,
        title: 'Delhi to Sariska Tiger Reserve',
        description: 'Drive to Sariska National Park nestled in the Aravalli hills. Enjoy an afternoon jungle safari looking for tigers, leopards, and sambars, and visit Kankwari Fort. Overnight in Sariska.',
        highlights: ['Scenic drive to Sariska', 'Afternoon wildlife safari in Sariska valley', 'Sariska nature lodge stay'],
        meals: 'Breakfast & Dinner at lodge',
      },
      {
        day: 3,
        title: 'Sariska to Keoladeo National Park (Bharatpur)',
        description: 'Drive to Bharatpur. Take a leisurely cycle-rickshaw safari through UNESCO-listed Keoladeo Ghana National Park, one of the world’s richest bird feeding grounds hosting thousands of migratory species. Overnight in Bharatpur.',
        highlights: ['Keoladeo Ghana Bird Sanctuary cycle rickshaw safari', 'Stork, spoonbill & heron colonies photography', 'Bharatpur overnight stay'],
        meals: 'Breakfast & Dinner',
      },
      {
        day: 4,
        title: 'Bharatpur to Ranthambore National Park',
        description: 'Drive to Sawai Madhopur, the home of Ranthambore Tiger Reserve. Check in to your jungle lodge and enjoy an evening nature documentary and campfire briefing. Overnight in Ranthambore.',
        highlights: ['Drive to Sawai Madhopur', 'Jungle lodge check-in & nature briefing', 'Ranthambore overnight stay'],
        meals: 'Breakfast & Dinner',
      },
      {
        day: 5,
        title: 'Ranthambore Dawn Tiger Safari & Ranthambore Fort',
        description: 'Dawn open-top Gypsy/Canter safari tracking the Royal Bengal Tiger across core zones. Afternoon visit to 10th-century Ranthambore Fort and Trinetra Ganesha Temple. Overnight in Ranthambore.',
        highlights: ['Core zone tiger tracking safari', 'UNESCO Ranthambore Fort cliffside exploration', 'Ranthambore overnight stay'],
        meals: 'Breakfast & Dinner',
      },
      {
        day: 6,
        title: 'Ranthambore to Jaipur Pink City Forts',
        description: 'Drive to Jaipur. Tour the hilltop Amer Fort, photograph Jal Mahal, and explore the City Palace and Hawa Mahal. Overnight in Jaipur.',
        highlights: ['Amer Fort & Sheesh Mahal', 'Jal Mahal lake view', 'City Palace & Hawa Mahal', 'Jaipur overnight stay'],
        meals: 'Buffet Breakfast at lodge',
      },
      {
        day: 7,
        title: 'Jaipur to Delhi Departure Transfer',
        description: 'After breakfast, take a smooth highway drive via the Delhi-Jaipur Expressway for drop-off at Delhi Airport or Railway Station.',
        highlights: ['Expressway return drive', 'Assisted airport drop-off'],
        meals: 'Buffet Breakfast at hotel',
      },
    ],
  },

  // ==========================================
  // PACKAGE 10
  // ==========================================
  {
    id: 'pkg-10-golden-triangle-classic',
    title: "The Timeless Golden Triangle: Delhi Citadels, Agra's Taj & Royal Jaipur",
    subtitle: 'India’s Most Iconic Cultural Circuit with World Wonders and Royal Palaces',
    duration: '5 Nights / 6 Days',
    days: 6,
    nights: 5,
    startingPrice: 0,
    formattedPrice: 'Price on Request',
    pricingType: 'on_request',
    category: 'domestic',
    circuitCategory: 'golden-triangle',
    badge: 'Global Signature',
    image: '/assets/aistudio/pi10_0cc16d99.jpg',
    images: ['/assets/aistudio/pi10_0cc16d99.jpg'],
    rating: 4.98,
    reviewsCount: 280,
    route: 'Delhi · Agra (Taj Mahal, Agra Fort) · Fatehpur Sikri · Abhaneri · Jaipur (Amer, City Palace, Hawa Mahal) · Delhi',
    stayType: 'Verified 4-Star Premium & Heritage Hotels (Delhi 1N, Agra 1N, Jaipur 3N)',
    idealFor: 'International Travelers, First-Time India Visitors, Families & Couples',
    inclusions: [
      '5 Nights accommodation in handpicked 4-star and heritage hotels with breakfast',
      'Dedicated AC Sedan / Innova Crysta with experienced multi-lingual highway chauffeur',
      'All interstate road taxes, toll plazas (Yamuna & Agra Expressways), and parking',
      'Assistance at all monuments and verified artisan souvenir workshops',
      'Chokhi Dhani ethnic village entry and traditional dinner in Jaipur',
    ],
    exclusions: [
      'Monument entrance tickets (Taj Mahal, Agra Fort, Fatehpur Sikri, Amer Fort - paid on-site)',
      'Audio guides or licensed local guides at monuments',
      'Lunches, dinners (except Chokhi Dhani), and personal expenses',
      'Vehicle tier upgrades (Innova Crysta / SUV / Luxury)',
      'Tips to driver or hotel staff',
    ],
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Delhi Arrival & Capital Heritage',
        description: 'Chauffeur pickup in Delhi. Tour Qutub Minar, India Gate, drive past the President’s Estate, and visit Humayun’s Tomb. Overnight in Delhi.',
        highlights: ['Qutub Minar complex', 'India Gate & Kartavya Path drive', 'Humayun’s Tomb gardens', 'Delhi overnight stay'],
        meals: 'Breakfast next morning',
      },
      {
        day: 2,
        title: 'Delhi to Agra via Yamuna Expressway – Agra Fort & Sunset Taj View',
        description: 'Glide down the Yamuna Expressway to Agra. Tour the monumental Agra Fort imperial chambers. In the evening, view the Taj Mahal glowing in sunset light from Mehtab Bagh gardens across the river. Overnight in Agra.',
        highlights: ['Yamuna Expressway smooth drive', 'Agra Fort red sandstone ramparts', 'Mehtab Bagh sunset view of Taj', 'Agra overnight stay'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 3,
        title: 'Sunrise Taj Mahal, Fatehpur Sikri Imperial Ruins & Drive to Jaipur',
        description: 'Experience the Taj Mahal bathed in ethereal sunrise light. Return to hotel for breakfast. Drive towards Jaipur, exploring Emperor Akbar’s UNESCO city of Fatehpur Sikri and Buland Darwaza en route. Arrive in Jaipur and check in to your heritage hotel. Overnight in Jaipur.',
        highlights: ['Sunrise at the Taj Mahal', 'Fatehpur Sikri & Buland Darwaza', 'Drive to Pink City Jaipur', 'Jaipur overnight stay'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 4,
        title: 'Jaipur Grand Fortresses & Sunset Vistas',
        description: 'Ascend to Amer Fort and Sheesh Mahal. Pause at Jal Mahal for photographs. Tour Jaigarh Fort and witness the panoramic sunset over Jaipur from Nahargarh Fort. Overnight in Jaipur.',
        highlights: ['Amer Fort & Sheesh Mahal', 'Jal Mahal photo stop', 'Jaigarh Fort', 'Nahargarh Fort panoramic sunset', 'Jaipur overnight stay'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 5,
        title: 'Pink City Palaces, Patrika Gate & Chokhi Dhani Cultural Night',
        description: 'Photograph Hawa Mahal, explore City Palace and Jantar Mantar. Visit the colorful arches of Patrika Gate. Spend the evening at Chokhi Dhani with folk music, dance shows, and traditional Rajasthani dinner. Overnight in Jaipur.',
        highlights: ['Hawa Mahal morning photo', 'City Palace & Jantar Mantar', 'Patrika Gate photo stop', 'Chokhi Dhani cultural village & dinner'],
        meals: 'Buffet Breakfast & Traditional Chokhi Dhani Dinner',
      },
      {
        day: 6,
        title: 'Jaipur to Delhi International Airport Departure',
        description: 'After a relaxed breakfast, your chauffeur drives you comfortably back to Delhi for drop-off at Indira Gandhi International Airport (or Jaipur Airport as per your travel schedule).',
        highlights: ['Leisurely breakfast', 'Comfortable expressway return drive', 'Assisted airport transfer'],
        meals: 'Buffet Breakfast at hotel',
      },
    ],
  },

  // ==========================================
  // PACKAGE 11
  // ==========================================
  {
    id: 'pkg-11-grand-rajasthan-odyssey',
    title: 'Painted Havelis to Golden Dunes: Grand Rajasthan Desert & Heritage Odyssey',
    subtitle: 'Jaipur, Pushkar, Udaipur, Jodhpur, Jaisalmer, Bikaner & Mandawa Shekhawati',
    duration: '10 Nights / 11 Days',
    days: 11,
    nights: 10,
    startingPrice: 0,
    formattedPrice: 'Price on Request',
    pricingType: 'on_request',
    category: 'domestic',
    circuitCategory: 'grand',
    badge: 'Comprehensive Odyssey',
    image: '/assets/aistudio/pi11_8e868e66.jpg',
    images: ['/assets/aistudio/pi11_8e868e66.jpg'],
    rating: 5.0,
    reviewsCount: 310,
    route: 'Jaipur · Pushkar · Udaipur · Jodhpur · Jaisalmer Dunes · Bikaner · Mandawa (Shekhawati Open-Air Art Gallery) · Jaipur',
    stayType: 'Heritage Havelis & Palaces (9N) + Luxury Swiss Tent Desert Camp (1N in Sam Dunes)',
    idealFor: 'Rajasthan Connoisseurs, Photographers, Extended Family Holidays',
    inclusions: [
      '9 Nights accommodation in verified heritage havelis/hotels + 1 Night in Sam Dunes Swiss camp',
      'Daily buffet breakfast at all hotels + Gala desert camp dinner with folk music',
      'Camel sunset safari, dune bashing, and bonfire cultural show in Jaisalmer',
      'Dedicated AC vehicle (Innova Crysta / SUV / Sedan) for the full 11-day odyssey',
      'All toll taxes, state permits, parking & driver night charges included',
    ],
    exclusions: [
      'Monument entrance tickets, safari passes & camera permits (paid on site)',
      'Optional desert adventure activities (quad bikes, parasailing)',
      'Lunches, dinners (except camp dinner), and personal shopping',
      'Vehicle tier upgrades or ultra-luxury 5-star palace upgrades',
      'Tips to driver or local guides',
    ],
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Jaipur Pink City Welcome & Local Sights',
        description: 'Chauffeur reception in Jaipur. Tour Albert Hall Museum, Birla Mandir, and Patrika Gate. Overnight in Jaipur.',
        highlights: ['Albert Hall Museum', 'Birla Mandir', 'Patrika Gate photography', 'Jaipur overnight stay'],
        meals: 'Breakfast next morning',
      },
      {
        day: 2,
        title: 'Jaipur Grand Hill Forts & Sunset at Nahargarh',
        description: 'Explore Amer Fort, Sheesh Mahal, Jal Mahal, and City Palace. Conclude with a stunning Nahargarh Fort cliffside sunset. Overnight in Jaipur.',
        highlights: ['Amer Fort & Sheesh Mahal', 'Jal Mahal lake view', 'City Palace', 'Nahargarh sunset view', 'Jaipur overnight stay'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 3,
        title: 'Jaipur to Ajmer Sharif & Holy Pushkar',
        description: 'Drive to Ajmer Sharif Dargah, then continue to Pushkar to visit the Brahma Temple and 52 sacred Ghats during sunset aarti. Overnight in Pushkar.',
        highlights: ['Ajmer Sharif Dargah Sufi blessings', 'Lord Brahma Temple', 'Pushkar Lake sunset aarti', 'Pushkar overnight stay'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 4,
        title: 'Pushkar to Udaipur – The City of Lakes',
        description: 'Drive through Mewar to Udaipur. Check in to your heritage hotel and enjoy an evening sunset stroll along Lake Pichola’s ghats. Overnight in Udaipur.',
        highlights: ['Scenic Mewar countryside drive', 'Lake Pichola sunset stroll', 'Udaipur overnight stay'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 5,
        title: 'Udaipur City Palace & Lake Pichola Boat Cruise',
        description: 'Tour Udaipur City Palace complex, Jagdish Temple, Saheliyon Ki Bari, and enjoy a sunset boat ride past Jag Mandir. Overnight in Udaipur.',
        highlights: ['City Palace royal museum', 'Saheliyon Ki Bari', 'Lake Pichola sunset boat cruise', 'Udaipur overnight stay'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 6,
        title: 'Udaipur to Jodhpur via Ranakpur Jain Temples',
        description: 'Drive to the Blue City, stopping at Ranakpur’s 1,444 carved marble pillars. Arrive in Jodhpur and explore the Sardar Clock Tower market. Overnight in Jodhpur.',
        highlights: ['Ranakpur Jain Temple architecture', 'Scenic Aravalli valleys', 'Jodhpur Blue City evening walk'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 7,
        title: 'Jodhpur Mehrangarh Fort to Jaisalmer Golden City',
        description: 'Tour the invincible Mehrangarh Fort and Jaswant Thada memorial. Drive across the desert to Jaisalmer, watching the sunset glow on sandstone walls. Overnight in Jaisalmer.',
        highlights: ['Mehrangarh Fort ramparts', 'Jaswant Thada white marble memorial', 'Drive to Jaisalmer Golden City'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 8,
        title: 'Jaisalmer Fort, Patwon Ki Haveli & Sam Dunes Camp',
        description: 'Tour the Golden Fort and Patwon Ki Haveli. Head to Sam Sand Dunes for a sunset camel safari, Kalbelia folk performance, and luxury tent stay. Overnight in Desert Camp.',
        highlights: ['Jaisalmer living Golden Fort', 'Patwon Ki Haveli stone filigree', 'Camel safari on Sam Sand Dunes', 'Campfire dinner & folk dance'],
        meals: 'Breakfast & Traditional Camp Dinner',
      },
      {
        day: 9,
        title: 'Jaisalmer to Bikaner – Junagarh Fort & Karni Mata',
        description: 'Drive to Bikaner. Tour the unconquered Junagarh Fort and visit the famous Karni Mata Temple in Deshnok. Overnight in Bikaner.',
        highlights: ['Junagarh Fort palaces', 'Karni Mata Temple in Deshnok', 'Bikaner overnight stay'],
        meals: 'Buffet Breakfast at camp',
      },
      {
        day: 10,
        title: 'Bikaner to Mandawa – Shekhawati Fresco Havelis',
        description: 'Drive into Shekhawati, the "Open-Air Art Gallery" of Rajasthan. Tour Mandawa’s lavishly painted havelis adorned with centuries-old frescoes. Overnight in Mandawa.',
        highlights: ['Mandawa painted fresco havelis', 'Chokhani & Ladia Haveli tours', 'Authentic Shekhawati village experience'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 11,
        title: 'Mandawa to Jaipur Departure Transfer',
        description: 'Drive back to Jaipur through picturesque rural Rajasthan for drop-off at Jaipur Airport or Railway Station.',
        highlights: ['Shekhawati morning market stroll', 'Comfortable return drive to Jaipur', 'Assisted departure transfer'],
        meals: 'Buffet Breakfast at hotel',
      },
    ],
  },

  // ==========================================
  // PACKAGE 12
  // ==========================================
  {
    id: 'pkg-12-sovereign-rajasthan-crown',
    title: 'The Sovereign Rajasthan & Agra Crown: From the Aravalli Hills to the Taj Mahal',
    subtitle: 'The Ultimate 15-Day Imperial Expedition Across All Princely States & The Taj Mahal',
    duration: '14 Nights / 15 Days',
    days: 15,
    nights: 14,
    startingPrice: 0,
    formattedPrice: 'Price on Request',
    pricingType: 'on_request',
    category: 'domestic',
    circuitCategory: 'grand',
    badge: 'Ultimate Royal Flagship',
    image: '/assets/aistudio/pi12_9bc25218.jpg',
    images: ['/assets/aistudio/pi12_9bc25218.jpg'],
    rating: 5.0,
    reviewsCount: 345,
    route: 'Delhi · Mandawa · Bikaner · Jaisalmer · Jodhpur · Mount Abu · Udaipur · Chittorgarh · Pushkar · Jaipur · Agra · Delhi',
    stayType: 'Heritage Palaces & Verified Boutique Hotels (13N) + Luxury Swiss Desert Camp (1N in Sam Dunes)',
    idealFor: 'Retirees, Sabbatical Travelers, Luxury International Guests, NRI Royal Tours',
    inclusions: [
      '14 Nights accommodation in verified heritage properties, boutique resorts & desert camp',
      'Daily buffet breakfast at all hotels + Special gala dinner at Jaisalmer desert camp',
      'Dedicated AC premium vehicle (Toyota Innova Crysta / SUV) with elite chauffeur for 15 days',
      'Lake Pichola boat cruise in Udaipur and sunset camel safari in Jaisalmer',
      'All interstate road taxes, expressway tolls, state permits, and driver charges',
    ],
    exclusions: [
      'Monument entrance tickets (Taj Mahal, forts, palaces, and Dilwara temples - paid on-site)',
      'Boat ride tickets at Nakki Lake or audio guides',
      'Lunches, dinners (except camp dinner), and personal shopping',
      'Luxury 5-star heritage palace suite upgrades (available on request)',
      'Tips to driver or local guides',
    ],
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Delhi to Mandawa – Shekhawati Frescoed Havelis',
        description: 'Morning pickup in Delhi. Drive to Mandawa in Shekhawati. Tour painted havelis adorned with vibrant fresco murals. Overnight in Mandawa.',
        highlights: ['Scenic drive to Shekhawati', 'Mandawa open-air art gallery havelis', 'Mandawa overnight stay'],
        meals: 'Breakfast next morning',
      },
      {
        day: 2,
        title: 'Mandawa to Bikaner – Junagarh Fort',
        description: 'Drive to Bikaner. Tour the unconquered Junagarh Fort and its ornate courtyards. Visit the Camel Breeding Farm. Overnight in Bikaner.',
        highlights: ['Junagarh Fort gilded chambers', 'National Camel Research Centre', 'Bikaner overnight stay'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 3,
        title: 'Bikaner to Jaisalmer – The Golden Citadel',
        description: 'Drive across the Thar desert to Jaisalmer. Evening stroll around Gadisar Lake surrounded by yellow sandstone shrines. Overnight in Jaisalmer.',
        highlights: ['Thar desert highway drive', 'Gadisar Lake sunset & chattris', 'Jaisalmer overnight stay'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 4,
        title: 'Jaisalmer Fort, Havelis & Sam Dunes Camp Safari',
        description: 'Tour the living Golden Fort and Patwon Ki Haveli. Drive to Sam Sand Dunes for a sunset camel safari, cultural folk dance, and luxury Swiss tent stay. Overnight in desert camp.',
        highlights: ['Jaisalmer living Golden Fort', 'Patwon Ki Haveli stone carvings', 'Camel safari on Sam Sand Dunes', 'Campfire dinner & Kalbelia show'],
        meals: 'Breakfast & Traditional Camp Dinner',
      },
      {
        day: 5,
        title: 'Jaisalmer to Jodhpur – The Blue City',
        description: 'Drive to Jodhpur. Tour Mehrangarh Fort rising 400 feet above the city, and the Jaswant Thada marble cenotaphs. Overnight in Jodhpur.',
        highlights: ['Mehrangarh Fort ramparts', 'Jaswant Thada white marble memorial', 'Blue City alleyway walk', 'Jodhpur overnight stay'],
        meals: 'Buffet Breakfast at camp',
      },
      {
        day: 6,
        title: 'Jodhpur to Mount Abu via Ranakpur Jain Temples',
        description: 'Drive toward Mount Abu, stopping at the breathtaking 1,444 carved marble pillars of Ranakpur Jain Temple. Ascend Rajasthan’s only hill station. Overnight in Mount Abu.',
        highlights: ['Ranakpur Jain Temple marble marvel', 'Scenic Aravalli mountain pass', 'Mount Abu overnight stay'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 7,
        title: 'Mount Abu Dilwara Temples to Udaipur',
        description: 'Visit the 11th-century Dilwara Jain Temples featuring world-renowned marble stone filigree. Stroll by Nakki Lake, then descend into the City of Lakes, Udaipur. Overnight in Udaipur.',
        highlights: ['Dilwara Jain Temples world-class marble carving', 'Nakki Lake', 'Descent into Udaipur', 'Udaipur overnight stay'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 8,
        title: 'Udaipur City Palace & Lake Pichola Boat Cruise',
        description: 'Tour Udaipur City Palace, Saheliyon Ki Bari, and enjoy an evening boat ride on Lake Pichola past Jag Mandir. Overnight in Udaipur.',
        highlights: ['City Palace royal museum', 'Saheliyon Ki Bari fountains', 'Lake Pichola sunset boat cruise', 'Udaipur overnight stay'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 9,
        title: 'Udaipur to Pushkar via Chittorgarh Fort',
        description: 'Drive to Pushkar, touring Chittorgarh Fort (Vijay Stambha, Kirti Stambha, and Rani Padmini Palace) en route. Attend the sunset Maha Aarti at Pushkar Lake. Overnight in Pushkar.',
        highlights: ['Chittorgarh Fort UNESCO site', 'Lord Brahma Temple Darshan', 'Pushkar 52 Ghats sunset aarti', 'Pushkar overnight stay'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 10,
        title: 'Pushkar to Jaipur – Pink City Arrival',
        description: 'Morning visit to Savitri Mata Temple, then drive to Jaipur. Visit Albert Hall Museum and stroll through Johari Bazaar. Overnight in Jaipur.',
        highlights: ['Savitri Mata hill view', 'Drive to Jaipur Pink City', 'Albert Hall Museum & Johari Bazaar', 'Jaipur overnight stay'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 11,
        title: 'Jaipur Grand Forts (Amer, Jaigarh, Nahargarh)',
        description: 'Spend the day in the Aravalli hills touring Amer Fort, Sheesh Mahal, Jaigarh Fort, and watching the sunset from Nahargarh Fort. Overnight in Jaipur.',
        highlights: ['Amer Fort & Sheesh Mahal', 'Jaigarh Fort Jaivana cannon', 'Nahargarh panoramic sunset', 'Jaipur overnight stay'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 12,
        title: 'Jaipur Walled City Palaces, Patrika Gate & Crafts',
        description: 'Photograph Hawa Mahal, tour City Palace and Jantar Mantar. Visit Patrika Gate and traditional artisan block-printing ateliers. Overnight in Jaipur.',
        highlights: ['Hawa Mahal morning photo', 'City Palace & Jantar Mantar', 'Patrika Gate', 'Jaipur craft ateliers', 'Jaipur overnight stay'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 13,
        title: 'Jaipur to Agra via Chand Baori & Fatehpur Sikri',
        description: 'Drive to Agra, stopping at Chand Baori stepwell in Abhaneri and the Mughal capital of Fatehpur Sikri (Buland Darwaza). Sunset view of Taj Mahal from Mehtab Bagh. Overnight in Agra.',
        highlights: ['Chand Baori 3,500-step stepwell', 'Fatehpur Sikri & Buland Darwaza', 'Mehtab Bagh sunset view of Taj Mahal', 'Agra overnight stay'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 14,
        title: 'Sunrise Taj Mahal, Agra Fort & Drive to Delhi',
        description: 'Experience the Taj Mahal at sunrise. Tour Agra Fort’s red sandstone palaces. Drive down the Yamuna Expressway to Delhi. Overnight in Delhi.',
        highlights: ['Sunrise at the Taj Mahal', 'Agra Fort royal chambers', 'Yamuna Expressway smooth drive', 'Delhi overnight stay'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 15,
        title: 'Delhi Sightseeing & International Airport Drop-off',
        description: 'Tour Qutub Minar, India Gate, and Humayun’s Tomb before seamless chauffeur transfer to Indira Gandhi International Airport for your onward journey.',
        highlights: ['Qutub Minar & Humayun’s Tomb', 'India Gate ceremonial drive', 'Assisted international airport drop-off'],
        meals: 'Buffet Breakfast at hotel',
      },
    ],
  },

  // ==========================================
  // PACKAGE 13
  // ==========================================
  {
    id: 'pkg-13-shekhawati-thar-trail',
    title: 'Shekhawati Frescoes to Thar Dunes: Mandawa, Bikaner, Jaisalmer & Jodhpur Trail',
    subtitle: 'Painted Haveli Mansions, Desert Fortresses, Camel Safaris & The Blue City',
    duration: '5 Nights / 6 Days',
    days: 6,
    nights: 5,
    startingPrice: 0,
    formattedPrice: 'Price on Request',
    pricingType: 'on_request',
    category: 'domestic',
    circuitCategory: 'desert',
    badge: 'Fresco & Dunes Special',
    image: '/assets/aistudio/pi13_a5d3e9f4.jpg',
    images: ['/assets/aistudio/pi13_a5d3e9f4.jpg'],
    rating: 4.97,
    reviewsCount: 176,
    route: 'Jaipur · Mandawa (Open-Air Art Gallery) · Bikaner (Junagarh) · Jaisalmer (Golden Fort & Sam Dunes Camp) · Jodhpur (Mehrangarh & Blue City)',
    stayType: 'Heritage Havelis (4N) + Luxury Swiss Tent Desert Camp (1N in Sam Dunes)',
    idealFor: 'Culture Seekers, Art Lovers, Photographers, Adventure Groups',
    inclusions: [
      '4 Nights in verified heritage havelis/hotels + 1 Night in luxury Sam Dunes desert camp',
      'Daily buffet breakfast at all hotels + Traditional Rajasthani camp dinner with folk dance',
      'Camel sunset safari, dune bonfire, and musical evening in Jaisalmer',
      'Dedicated AC vehicle (Innova Crysta / SUV / Sedan) with chauffeur for full 6-day circuit',
      'All toll taxes, state permits, parking & driver night charges included',
    ],
    exclusions: [
      'Monument entrance tickets, haveli photography permits & camera charges (paid on site)',
      'Optional desert adventure sports (quad biking, dune bashing)',
      'Lunches, dinners (except camp dinner), and personal shopping',
      'Vehicle tier upgrades (Innova Crysta / SUV / Luxury)',
      'Tips to driver or local guides',
    ],
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Jaipur Pickup to Mandawa – Shekhawati Fresco Heritage',
        description: 'Morning chauffeur pickup in Jaipur. Drive to Mandawa in the Shekhawati region. Walk through open-air streets admiring painted havelis featuring vibrant murals depicting mythological and colonial scenes. Overnight in Mandawa.',
        highlights: ['Drive through rural Rajasthan', 'Mandawa frescoed havelis exploration', 'Chokhani & Saraf havelis', 'Mandawa overnight stay'],
        meals: 'Breakfast next morning',
      },
      {
        day: 2,
        title: 'Mandawa to Bikaner – Junagarh Fort & Karni Mata',
        description: 'Drive to Bikaner. Tour the magnificent Junagarh Fort, famed for its golden Anup Mahal and Badal Mahal. Visit the historic Karni Mata Temple in Deshnok. Overnight in Bikaner.',
        highlights: ['Junagarh Fort palaces & museum', 'Karni Mata Temple in Deshnok', 'Bikaner overnight stay'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 3,
        title: 'Bikaner to Jaisalmer – Thar Desert Gateway',
        description: 'Drive along the golden desert highway to Jaisalmer. Check in to your sandstone hotel. In the evening, visit Gadisar Lake to watch the sunset reflect on carved stone shrines. Overnight in Jaisalmer.',
        highlights: ['Desert highway drive', 'Gadisar Lake sunset & chattris', 'Jaisalmer overnight stay'],
        meals: 'Buffet Breakfast at hotel',
      },
      {
        day: 4,
        title: 'Jaisalmer Golden Fort, Patwon Ki Haveli & Sam Dunes Camp',
        description: 'Tour the living Golden Fort (Sonar Qella) and the intricate filigree work of Patwon Ki Haveli. Drive to Sam Sand Dunes for an exhilarating sunset camel ride, bonfire, Kalbelia dance, and luxury tent stay. Overnight in Desert Camp.',
        highlights: ['Jaisalmer living Golden Fort', 'Patwon Ki Haveli stone carvings', 'Camel safari on Sam Sand Dunes', 'Campfire dinner & Kalbelia cultural show'],
        meals: 'Breakfast & Traditional Camp Dinner',
      },
      {
        day: 5,
        title: 'Jaisalmer to Jodhpur – Mehrangarh Citadel & Blue City',
        description: 'Drive to Jodhpur. Ascend to Mehrangarh Fort rising dramatically above the azure houses. Tour the palaces, museum, and Jaswant Thada memorial. Stroll through the Clock Tower spice bazaar. Overnight in Jodhpur.',
        highlights: ['Mehrangarh Fort exploration', 'Jaswant Thada white marble memorial', 'Clock tower blue bazaar walk', 'Jodhpur overnight stay'],
        meals: 'Buffet Breakfast at camp',
      },
      {
        day: 6,
        title: 'Jodhpur Blue City Heritage Walk & Departure',
        description: 'Enjoy a morning heritage walk through the blue alleyways of Brahmpuri and visit Umaid Bhawan Palace museum before your chauffeur transfers you to Jodhpur Airport or Railway Station (or return transfer to Jaipur).',
        highlights: ['Brahmpuri Blue City walk', 'Umaid Bhawan Palace museum', 'Assisted departure transfer'],
        meals: 'Buffet Breakfast at hotel',
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
      'Harsh Vardhan and Ananya planned our entire Udaipur and Jaipur anniversary trip flawlessly. Handpicked hotels and smooth transfers throughout!',
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
      'Booked the Kashmir family tour. The houseboat, driver, and Shikara ride were top-notch. Truly personalized support from Harsh Vardhan.',
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
      'Best experience in Rajasthan! Transparent pricing and loved the surprise welcome goodies. Harsh Vardhan and Ananya were available 24/7.',
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
      'Booking is effortless and transparent! You can click any package on this page to chat directly with co-founders Harsh Vardhan Gupta & Ananya Gupta on WhatsApp (+91 98932 21141) or use our Custom Tour Planner. We discuss your preferred dates, hotel style, and requirements, provide a finalized day-by-day itinerary, and confirm your booking with verified hotel & driver vouchers.',
  },
  {
    question: 'Can all tour packages be customized to our preferences?',
    answer:
      'Yes, 100%! While our 13 featured packages are meticulously optimized for the smoothest travel flow, we can add extra days, upgrade to ultra-luxury 5-star heritage palaces, include special candlelight dinners, modify routes, or adjust meal plans to your exact preference.',
  },
  {
    question: 'How does pricing work across your tour packages?',
    answer:
      'All tour packages default to "Price on Request" to ensure you receive the most competitive, seasonally optimized rate. Upgrading your vehicle choice (Sedan, SUV, Innova Crysta, Tempo Traveller, Luxury) or choosing 5-Star luxury heritage palaces directly adjusts the final package price. Please refer to our Traveler Advisory & Operational Policy for full details.',
  },
  {
    question: 'Are monument entrance tickets included?',
    answer:
      'In line with our Universal Monument Ticket Exclusion policy, all monument entrance tickets, camera permits, national park safari passes, cycle-rickshaw fees, and boat ride tickets are strictly excluded across all destinations and must be paid directly on site. This guarantees zero markups and gives you complete freedom of pace.',
  },
  {
    question: 'Will someone assist us during our trip?',
    answer:
      'Yes! Co-founders Harsh Vardhan Gupta & Ananya Gupta and our on-ground operations team are available 24/7 on WhatsApp and direct call (+91 98932 21141). Prompt arrival notifications, departure schedules, routing updates, and chauffeur details are shared directly via WhatsApp.',
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
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
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
  fallbackImage?: string;
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
    image: '/assets/aistudio/cp1_2a7bea11.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80',
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
    image: '/assets/aistudio/cp2_7f5c64e3.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
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
    image: '/assets/aistudio/crysta_fb024996.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80',
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
    image: '/assets/aistudio/Fortuner-Car-Price-In-India_ccd36399.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80',
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
    image: '/assets/aistudio/image_2b624c84.png',
    fallbackImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80',
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
    image: '/assets/aistudio/cp6_dc11a1d0.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80',
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
    image: '/assets/aistudio/cp6_dc11a1d0.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
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
    image: '/assets/aistudio/pcp8_4ce9ce13.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
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
      'We started our day at 6:30 AM to catch the morning sun glowing against Maota Lake. Harsh Vardhan had arranged our driver Vikram, who navigated effortlessly and showed us hidden photography courtyards away from the rush...',
    fullStory:
      'We booked our anniversary journey with Pinkcityroutes on short notice, but Harsh Vardhan personally curated every detail. Our morning started at 6:30 AM as our clean Dzire pulled up in front of our heritage hotel in C-Scheme. The morning air in Jaipur was crisp. As we approached Amer Fort, the reflection of the sunlit golden fortifications in Maota Lake took our breath away. Our driver Vikram ji guided us to the best viewpoint right by Kesar Kyari garden before the tourist crowd arrived. We toured the Sheesh Mahal (Mirror Palace) where thousands of concave mirrors sparkle with a single matchstick. After Amer, we stopped for piping hot Pyaaz Kachoris and kulhad chai. Having Harsh Vardhan check in with us on WhatsApp during lunch to ensure everything was perfect made us feel like family rather than tourists.',
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
      'Visiting the Taj Mahal was on our family’s bucket list for years, but we only had one free weekend in North India. Harsh Vardhan recommended the same-day Agra circuit in a Toyota Innova Crysta. The car was spotless with child-safe booster seating and chilled AC. We zoomed down the Yamuna Expressway without any hiccups, and the driver had already bought cold water bottles and arranged a licensed government guide at the gate. Seeing the Taj Mahal bathed in morning light is an unforgettable sight. After the Taj and Agra Fort, we stopped at an authentic marble inlay artisan workshop and savored fresh Agra Petha. We were safely back at our Delhi hotel by 8:30 PM. Truly 5-star personalized hospitality!',
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
      'As a solo female traveler, safety and trustworthy on-ground support were my biggest priorities. Booking with Pinkcityroutes gave me 100% peace of mind because Harsh Vardhan gave me his direct personal WhatsApp and connected me with our verified Kashmiri chauffeur, Farooq. My morning on Dal Lake began with the soothing call to prayer and the gentle splash of cedar paddles. The Shikara boatman served authentic saffron Kahwa brewed with crushed almonds. We visited floating vegetable markets and photographed pink lotus blossoms. The next day in Gulmarg, Farooq assisted with the Gondola phase boarding without any lines. The level of care, respect, and hospitality shown by Pinkcityroutes made this trip the best memory of my life.',
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
    title: "Harsh Vardhan's Insider Guide: Sunset at Nahargarh & Secret Bazaars",
    author: 'Harsh Vardhan (Co-Founder)',
    date: 'October 2026',
    location: 'Nahargarh Fort & Johari Bazaar, Jaipur',
    travelerType: "Founder's Guide",
    readTime: '6 min read',
    excerpt:
      'Growing up in Jaipur, I know the exact 45 minutes when the Pink City turns molten gold from the ramparts of Nahargarh. Here are my favorite local spots that standard guidebooks miss...',
    fullStory:
      'Most visitors rush between Amer Fort and City Palace and miss the magical twilight of Jaipur. When clients ask me for one memory they must take home, I tell them to head up the serpentine hills of Nahargarh Fort around 5:15 PM. As the sun dips behind the Aravallis, the entire Pink City spreads out beneath you like a carpet of warm terracotta.\n\nAfter soaking in the breeze at Padao open-air deck, take a leisurely drive down into the walled city. Head straight to LMB in Johari Bazaar for their authentic Ghewar, or stop by Samrat on Chaura Rasta for piping hot Samosas with mint chutney. Traveling with our dedicated private chauffeur means you never have to haggle with local auto rickshaws or worry about one-way heritage gates.',
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
    author: 'Harsh Vardhan (Co-Founder)',
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
