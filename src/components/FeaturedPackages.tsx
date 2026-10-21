import React, { useState } from 'react';
import { 
  CheckCircle2, 
  FileText, 
  MessageSquare, 
  ShieldAlert, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  MapPin, 
  Clock, 
  Calendar 
} from 'lucide-react';

interface ItineraryDay {
  day: number;
  title: string;
  desc: string;
}

interface PackageItem {
  id: string;
  title: string;
  days: number;
  nights: number;
  duration: string;
  route: string;
  images: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
}

const packagesData: PackageItem[] = [
  {
    id: 'pkg-1',
    title: 'The Pink City Royal Forts & Palaces Express',
    days: 2,
    nights: 1,
    duration: '1N / 2D',
    route: 'Jaipur Local Heritage Circuit',
    images: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1603288900624-916960d704ba?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80'
    ],
    inclusions: [
      'Chauffeur-driven private AC cab for 2 days',
      '1 Night accommodation in Jaipur',
      'All toll taxes, parking fees, fuel, driver night allowances',
      'Doorstep pickup and drop within Jaipur'
    ],
    exclusions: [
      'Monument entrance tickets and camera fees',
      'Meals not specified in the hotel plan',
      'Optional government-licensed guide (₹2,000/day)'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & The Majestic Hill Forts',
        desc: 'Chauffeur pickup in Jaipur. Tour hilltop Amer Fort & Maota Lake, Jaigarh Fort (Jaivana cannon), cliffside sunset at Nahargarh Fort, and evening photo stop at floating Jal Mahal. Leisure walk through Johari & Bapu Bazaars. Overnight in Jaipur.'
      },
      {
        day: 2,
        title: 'Walled City Heritage & Departure',
        desc: 'Morning photo stop at Hawa Mahal. Comprehensive tour of City Palace courtyards & museum, Jantar Mantar (UNESCO stone observatory), Albert Hall Museum, and Birla Mandir. Timely drop-off at Jaipur Airport/Station.'
      }
    ]
  },
  {
    id: 'pkg-2',
    title: 'Amber to Ghats: Complete Jaipur Heritage & Cultural Immersion',
    days: 3,
    nights: 2,
    duration: '2N / 3D',
    route: 'Jaipur & Surrounding Royal Heritage',
    images: [
      'https://images.unsplash.com/photo-1603288900624-916960d704ba?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80'
    ],
    inclusions: [
      'Dedicated private AC cab for all 3 days',
      '2 Nights stay in Jaipur',
      'Fuel, toll taxes, parking fees, driver night allowances',
      'Airport / Railway Station pickup & drop'
    ],
    exclusions: [
      'Monument tickets & camera passes',
      'Chokhi Dhani entry ticket & dinner charges',
      'Personal expenses & optional tour guides'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & South Jaipur Heritage',
        desc: 'Arrival & check-in. Explore Birla Mandir, Albert Hall Museum, and Patrika Gate. Evening drive to Nahargarh Fort for a panoramic sunset over the Pink City. Overnight in Jaipur.'
      },
      {
        day: 2,
        title: 'Fortresses & Cultural Village Evening',
        desc: 'Full-day royal heritage circuit: Amer Fort, Jaigarh Fort, Panna Meena Ka Kund stepwell, Jal Mahal, City Palace, and Jantar Mantar. Evening cultural village experience at Chokhi Dhani. Overnight in Jaipur.'
      },
      {
        day: 3,
        title: 'Sacred Valleys & Departure',
        desc: 'Morning excursion to Galtaji (Monkey Temple) and Sisodiya Rani Garden. Heritage shopping in walled city bazaars followed by airport/railway station departure transfer.'
      }
    ]
  },
  {
    id: 'pkg-3',
    title: 'Sacred Sands & Sufi Shrines: Jaipur, Ajmer & Pushkar Trail',
    days: 3,
    nights: 2,
    duration: '2N / 3D',
    route: 'Jaipur – Ajmer – Pushkar – Jaipur',
    images: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80'
    ],
    inclusions: [
      'Intercity private AC cab for 3 days',
      '2 Nights accommodation (1N Jaipur + 1N Pushkar/Ajmer)',
      'Tolls, interstate permits, parking, fuel, driver allowances',
      'Roundtrip transfers'
    ],
    exclusions: [
      'Monument tickets & Ajmer local e-rickshaw fees',
      'Savitri ropeway cable car charges',
      'Meals and personal expenses'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Jaipur Heritage Arrival',
        desc: 'Pickup and walled city sightseeing: Amer Fort, Jal Mahal, Hawa Mahal, and City Palace. Evening bazaar walk. Overnight in Jaipur.'
      },
      {
        day: 2,
        title: 'Jaipur to Sufi Shrine & Sacred Lake',
        desc: 'Drive to Ajmer (approx. 2.5 hrs). Visit Khwaja Garib Nawaz Dargah Sharif and Ana Sagar Lake. Drive to Pushkar; explore holy Pushkar Lake & 52 Ghats for evening Maha Aarti. Overnight in Pushkar or Ajmer.'
      },
      {
        day: 3,
        title: 'Pushkar Temples & Return to Jaipur',
        desc: 'Visit Jagatpita Brahma Temple and optional cable-car ride to Savitri Temple. Scenic highway drive back to Jaipur for evening drop-off.'
      }
    ]
  },
  {
    id: 'pkg-4',
    title: 'Fortresses to Forests: Jaipur Heritage & Ranthambore Tiger Escape',
    days: 3,
    nights: 2,
    duration: '2N / 3D',
    route: 'Jaipur – Sawai Madhopur (Ranthambore) – Jaipur',
    images: [
      'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80'
    ],
    inclusions: [
      'Dedicated private AC cab for 3 days',
      '2 Nights stay (1N Jaipur + 1N Ranthambore resort)',
      'All road taxes, tolls, parking, fuel, driver night allowances',
      'Pickup and drop services'
    ],
    exclusions: [
      'Ranthambore safari booking fees and naturalist permits',
      'Monument entrance tickets',
      'Meals not specified in booking'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Jaipur Royalty Circuit',
        desc: 'Pickup and explore Amer Fort, Jal Mahal, City Palace, and Jantar Mantar. Overnight in Jaipur.'
      },
      {
        day: 2,
        title: 'Pink City to Tiger Country',
        desc: 'Morning highway drive to Ranthambore (approx. 3.5 hrs). Afternoon jungle safari in open Gypsy/Canter tracking the Royal Bengal Tiger. Visit Ranthambore Fort & Trinetra Ganesh Mandir. Overnight in Ranthambore.'
      },
      {
        day: 3,
        title: 'Safari / Return to Jaipur',
        desc: 'Optional dawn safari or leisurely breakfast. Return highway drive to Jaipur with scheduled airport/station drop-off.'
      }
    ]
  },
  {
    id: 'pkg-5',
    title: 'Rajput Ramparts to Mughal Marble: Jaipur & Taj Mahal Weekend Gateway',
    days: 2,
    nights: 1,
    duration: '1N / 2D',
    route: 'Jaipur – Abhaneri – Fatehpur Sikri – Agra – Jaipur/Delhi',
    images: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80'
    ],
    inclusions: [
      'Intercity private AC cab for 2 days',
      '1 Night hotel stay in Agra',
      'Interstate permits (Rajasthan & UP), tolls, parking, fuel',
      'Drop-off at Jaipur or New Delhi'
    ],
    exclusions: [
      'Taj Mahal, Agra Fort, & Fatehpur Sikri tickets',
      'Local monument guide fees',
      'Meals & personal expenses'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Jaipur to Agra via Stepwells & Citadels',
        desc: 'Morning pickup in Jaipur. Visit Chand Baori stepwell in Abhaneri and Fatehpur Sikri (Buland Darwaza). Arrive in Agra, tour Agra Fort, and view Taj Mahal at sunset from Mehtab Bagh. Overnight in Agra.'
      },
      {
        day: 2,
        title: 'Sunrise at the Taj Mahal & Departure',
        desc: 'Early morning sunrise tour of the Taj Mahal. Tour Tomb of I\'timad-ud-Daulah (Baby Taj). Afternoon return drive to Jaipur or drop-off at New Delhi IGI Airport.'
      }
    ]
  },
  {
    id: 'pkg-6',
    title: 'Palaces, Lakes & Sacred Ghats: Jaipur to Udaipur Royal Corridor',
    days: 5,
    nights: 4,
    duration: '4N / 5D',
    route: 'Jaipur – Ajmer – Pushkar – Udaipur',
    images: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1603288900624-916960d704ba?auto=format&fit=crop&w=1200&q=80'
    ],
    inclusions: [
      'Private AC cab for 5 full days',
      '4 Nights hotel stay (2N Jaipur + 2N Udaipur)',
      'Tolls, state taxes, parking, driver night allowances',
      'Doorstep pickup and drop'
    ],
    exclusions: [
      'Monument entrance tickets',
      'Lake Pichola boat cruise tickets',
      'Meals and guide fees'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Fortresses of Jaipur',
        desc: 'Pickup and check-in. Tour Amer Fort, Jaigarh Fort, Nahargarh cliffside sunset, and Jal Mahal. Overnight in Jaipur.'
      },
      {
        day: 2,
        title: 'Pink City Monuments & Bazaars',
        desc: 'City Palace courtyards, Jantar Mantar, Hawa Mahal, and Albert Hall Museum. Leisure stroll through Johari Bazaar. Overnight in Jaipur.'
      },
      {
        day: 3,
        title: 'Journey to the City of Lakes via Pushkar',
        desc: 'Drive to Ajmer Sharif Dargah, Pushkar Lake, and Brahma Temple. Highway drive through the Aravallis to Udaipur. Overnight in Udaipur.'
      },
      {
        day: 4,
        title: 'Udaipur Palaces & Sunset Boat Cruise',
        desc: 'City Palace Udaipur, Jagdish Temple, Saheliyon Ki Bari, and Fateh Sagar Lake. Sunset boat ride on Lake Pichola past Jag Mandir. Overnight in Udaipur.'
      },
      {
        day: 5,
        title: 'Sajjangarh & Departure',
        desc: 'Morning visit to Sajjangarh (Monsoon Palace) and Bagore Ki Haveli. Drop-off at Udaipur Airport/Station or highway return to Jaipur.'
      }
    ]
  },
  {
    id: 'pkg-7',
    title: 'Forts of the Sun & City of Lakes: Jaipur, Udaipur & Jodhpur Panorama',
    days: 6,
    nights: 5,
    duration: '5N / 6D',
    route: 'Jaipur – Ajmer – Pushkar – Udaipur – Ranakpur – Jodhpur',
    images: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80'
    ],
    inclusions: [
      'Private AC cab for 6 days',
      '5 Nights hotel stay (2N Jaipur + 2N Udaipur + 1N Jodhpur)',
      'Tolls, permits, parking, fuel, driver night allowances',
      'All local transfers'
    ],
    exclusions: [
      'Monument tickets & temple audio guides',
      'Lake Pichola boat cruise tickets',
      'Meals not specified in accommodation'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in the Pink City',
        desc: 'Jaipur arrival. Excursions to Amer Fort, Jaigarh Fort, Nahargarh sunset, and Jal Mahal. Overnight in Jaipur.'
      },
      {
        day: 2,
        title: 'Jaipur Heritage & Palaces',
        desc: 'Hawa Mahal photo stop, City Palace, Jantar Mantar observatory, and local bazaars. Overnight in Jaipur.'
      },
      {
        day: 3,
        title: 'Jaipur to Udaipur via Ajmer & Pushkar',
        desc: 'Visit Ajmer Sharif Dargah, Pushkar Lake, and Brahma Temple. Highway drive to Udaipur. Overnight in Udaipur.'
      },
      {
        day: 4,
        title: 'Udaipur City Palace & Lake Pichola',
        desc: 'City Palace, Jagdish Temple, Saheliyon Ki Bari, and Lake Pichola boat cruise. Overnight in Udaipur.'
      },
      {
        day: 5,
        title: 'Udaipur to Jodhpur via Ranakpur',
        desc: 'Drive to Jodhpur via Ranakpur Jain Temple (1,444 marble pillars). Arrive in Jodhpur; evening stroll through Sardar Market and Ghanta Ghar. Overnight in Jodhpur.'
      },
      {
        day: 6,
        title: 'The Sun Citadel & Departure',
        desc: 'Mehrangarh Fort, Jaswant Thada, and Umaid Bhawan Palace Museum. Departure drop-off at Jodhpur Airport/Station or drive back to Jaipur.'
      }
    ]
  },
  {
    id: 'pkg-8',
    title: 'Golden Sands to Azure Streets: The Great Thar Desert & Palaces Expedition',
    days: 9,
    nights: 8,
    duration: '8N / 9D',
    route: 'Jaipur – Bikaner – Jaisalmer – Jodhpur – Udaipur – Ajmer – Pushkar',
    images: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80'
    ],
    inclusions: [
      'Dedicated private AC cab for 9 days',
      '8 Nights stay (including 1N Sam Desert Camp with camel trek & folk dinner)',
      'Tolls, interstate permits, parking, fuel, driver allowances',
      'Pickup & drop services'
    ],
    exclusions: [
      'Monument entrance tickets',
      'Desert adventure sports (quad biking, dune bashing)',
      'Boat cruise passes and meals'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Jaipur Fortresses',
        desc: 'Amer Fort, Nahargarh Fort sunset view, and Jal Mahal photo stop. Overnight in Jaipur.'
      },
      {
        day: 2,
        title: 'Jaipur to Bikaner',
        desc: 'Hawa Mahal and City Palace. Highway drive to Bikaner (approx. 5.5 hrs). Overnight in Bikaner.'
      },
      {
        day: 3,
        title: 'Bikaner to Jaisalmer',
        desc: 'Junagarh Fort and Karni Mata Temple. Drive across Thar Desert to Jaisalmer. Overnight in Jaisalmer.'
      },
      {
        day: 4,
        title: 'Jaisalmer Citadel & Sam Sand Dunes',
        desc: 'Sonar Qila, Patwon Ki Haveli, and Gadisar Lake. Transfer to Sam Dunes for camel safari, sunset, and cultural dinner. Overnight in desert camp.'
      },
      {
        day: 5,
        title: 'Jaisalmer to Jodhpur',
        desc: 'Drive to Jodhpur. Visit Jaswant Thada and Ghanta Ghar / Sardar Market. Overnight in Jodhpur.'
      },
      {
        day: 6,
        title: 'Jodhpur to Udaipur via Ranakpur',
        desc: 'Mehrangarh Fort tour. Scenic drive to Udaipur via Ranakpur Jain Temple. Overnight in Udaipur.'
      },
      {
        day: 7,
        title: 'Udaipur Palaces & Lakes',
        desc: 'City Palace, Saheliyon Ki Bari, and Lake Pichola sunset cruise. Overnight in Udaipur.'
      },
      {
        day: 8,
        title: 'Udaipur to Ajmer & Pushkar',
        desc: 'Drive to Ajmer Sharif Dargah, Pushkar Lake & Brahma Temple. Overnight in Pushkar/Ajmer.'
      },
      {
        day: 9,
        title: 'Pushkar to Jaipur Departure',
        desc: 'Drive back to Jaipur. Photo stop at Albert Hall and Birla Mandir. Final drop-off at Jaipur Airport/Station.'
      }
    ]
  },
  {
    id: 'pkg-9',
    title: 'Wild Havens & Historic Capitals: Delhi, Sariska, Bharatpur & Ranthambore Safari Circuit',
    days: 7,
    nights: 6,
    duration: '6N / 7D',
    route: 'Delhi – Sariska – Bharatpur – Ranthambore – Jaipur – Delhi',
    images: [
      'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80'
    ],
    inclusions: [
      'Private AC vehicle for 7 days',
      '6 Nights accommodation (1N Delhi + 1N Sariska + 1N Bharatpur + 2N Ranthambore + 1N Jaipur)',
      'Multi-state road permits (Delhi, UP, Rajasthan), tolls, fuel, driver night allowances',
      'Pickup and drop services'
    ],
    exclusions: [
      'Monument tickets',
      'Ranthambore safari permits and Bharatpur cycle-rickshaw fees',
      'Meals and personal expenses'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive in Delhi',
        desc: 'Chauffeur pickup in Delhi. Sightseeing of Jama Masjid, Red Fort photo stop, Raj Ghat, India Gate, and Humayun’s Tomb. Overnight in Delhi.'
      },
      {
        day: 2,
        title: 'Delhi to Sariska Tiger Reserve',
        desc: 'Visit Lotus Temple and Qutub Minar. Scenic highway drive to Sariska Tiger Reserve in Rajasthan. Evening park landscape visit. Overnight in Sariska.'
      },
      {
        day: 3,
        title: 'Sariska to Keoladeo (Bharatpur)',
        desc: 'Drive to Bharatpur. Evening birdwatching safari inside Keoladeo National Park via cycle-rickshaw. Overnight in Bharatpur.'
      },
      {
        day: 4,
        title: 'Bharatpur to Ranthambore',
        desc: 'Rural drive to Sawai Madhopur / Ranthambore. Hotel check-in and evening at leisure. Overnight in Ranthambore.'
      },
      {
        day: 5,
        title: 'Ranthambore Tiger Safari',
        desc: 'Early morning jungle safari tracking the Royal Bengal Tiger. Afternoon at leisure and visit to local craft centers. Overnight in Ranthambore.'
      },
      {
        day: 6,
        title: 'Ranthambore to Jaipur',
        desc: 'Drive to Jaipur. City Palace, Jantar Mantar, and Hawa Mahal. Evening bazaar shopping. Overnight in Jaipur.'
      },
      {
        day: 7,
        title: 'Jaipur to Delhi Departure',
        desc: 'Post-breakfast highway drive back to Delhi. Drop-off at Delhi Airport, Railway Station, or Bus Stand.'
      }
    ]
  },
  {
    id: 'pkg-10',
    title: 'The Timeless Golden Triangle: Delhi Citadels, Agra\'s Taj & Royal Jaipur',
    days: 6,
    nights: 5,
    duration: '5N / 6D',
    route: 'Delhi – Agra – Fatehpur Sikri – Jaipur – Delhi',
    images: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80'
    ],
    inclusions: [
      'Private AC cab for 6 days',
      '5 Nights hotel stay (2N Delhi + 1N Agra + 2N Jaipur)',
      'Interstate permits (Delhi, UP, Rajasthan), tolls, parking, fuel',
      'Airport/Railway transfers'
    ],
    exclusions: [
      'Monument tickets (Taj Mahal, Agra Fort, Qutub Minar, etc.)',
      'Amer Fort elephant or jeep ride charges',
      'Meals not specified in booking'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Capital Delhi',
        desc: 'Meet & greet on arrival at Delhi Airport/Station. Hotel transfer and evening free to relax. Overnight in Delhi.'
      },
      {
        day: 2,
        title: 'Full-Day Delhi Heritage',
        desc: 'Birla Mandir, Parliament House drive-through, India Gate, Red Fort, Jama Masjid, Raj Ghat, Humayun’s Tomb, and Qutub Minar. Overnight in Delhi.'
      },
      {
        day: 3,
        title: 'Delhi to Agra Mughal Splendor',
        desc: 'Expressway drive to Agra. Explore Taj Mahal, Agra Fort, and Tomb of I\'timad-ud-Daulah. Overnight in Agra.'
      },
      {
        day: 4,
        title: 'Agra to Jaipur via Fatehpur Sikri',
        desc: 'Drive toward Jaipur. En-route tour of Fatehpur Sikri: Buland Darwaza, Jama Masjid, Salim Chishti Tomb, and Panch Mahal. Arrive in Jaipur. Overnight in Jaipur.'
      },
      {
        day: 5,
        title: 'Jaipur Royal Exploration',
        desc: 'Amer Fort excursion, City Palace, Jantar Mantar observatory, Nawab Sahab Ki Haveli, and walled city bazaars. Overnight in Jaipur.'
      },
      {
        day: 6,
        title: 'Jaipur to Delhi Departure',
        desc: 'Leisurely breakfast and smooth highway return drive to Delhi. Drop-off at Delhi Airport/Station.'
      }
    ]
  },
  {
    id: 'pkg-11',
    title: 'Painted Havelis to Golden Dunes: Grand Rajasthan Desert & Heritage Odyssey',
    days: 11,
    nights: 10,
    duration: '10N / 11D',
    route: 'Jaipur – Pushkar – Udaipur – Jodhpur – Jaisalmer – Bikaner – Mandawa – Jaipur',
    images: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80'
    ],
    inclusions: [
      'Dedicated private AC cab for 11 days',
      '10 Nights hotel/heritage accommodation',
      'Thar desert sunset camel ride',
      'All toll taxes, state permits, parking, fuel, driver night allowances'
    ],
    exclusions: [
      'Monument entry tickets',
      'Lake Pichola boat cruise tickets',
      'Meals, guide services, personal expenses'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Jaipur',
        desc: 'Chauffeur pickup in Jaipur. Check-in and evening illumination drive of heritage monuments. Overnight in Jaipur.'
      },
      {
        day: 2,
        title: 'Jaipur Sightseeing',
        desc: 'Amer Fort, Hawa Mahal and Jal Mahal photo stops, City Palace Museum, and Jantar Mantar. Overnight in Jaipur.'
      },
      {
        day: 3,
        title: 'Jaipur to Pushkar',
        desc: 'Drive to Pushkar. Walking tour of Pushkar bazaar, Brahma Temple, and sunset pooja along the 52 Ghats. Overnight in Pushkar.'
      },
      {
        day: 4,
        title: 'Pushkar to Udaipur',
        desc: 'Scenic drive through the Aravalli hills to Udaipur. Evening 1-hour boat cruise on Lake Pichola visiting Jag Mandir Island. Overnight in Udaipur.'
      },
      {
        day: 5,
        title: 'Udaipur Palaces & Gardens',
        desc: 'City Palace on Lake Pichola, Saheliyon Ki Bari, and Fateh Sagar Lake. Overnight in Udaipur.'
      },
      {
        day: 6,
        title: 'Udaipur to Jodhpur',
        desc: 'Highway drive to Jodhpur. Hotel check-in and evening at leisure around Clock Tower market. Overnight in Jodhpur.'
      },
      {
        day: 7,
        title: 'Jodhpur to Jaisalmer',
        desc: 'Tour Mehrangarh Fort and Jaswant Thada. Afternoon desert highway drive to Jaisalmer. Overnight in Jaisalmer.'
      },
      {
        day: 8,
        title: 'Jaisalmer Citadel & Sam Sand Dunes',
        desc: 'Jaisalmer Fort (Sonar Qila), Patwon Ki Haveli, Nathmal Ki Haveli, and Gadisar Lake. Afternoon excursion to Sam Sand Dunes for sunset camel ride. Overnight in Jaisalmer.'
      },
      {
        day: 9,
        title: 'Jaisalmer to Bikaner',
        desc: 'Drive to Bikaner across the Thar. Afternoon visit to the National Research Centre on Camel (Camel Breeding Farm). Overnight in Bikaner.'
      },
      {
        day: 10,
        title: 'Bikaner to Mandawa (Shekhawati)',
        desc: 'Visit Junagarh Fort in Bikaner. Scenic drive to Mandawa in Shekhawati. Walking tour of Mandawa\'s painted fresco havelis. Overnight in Mandawa.'
      },
      {
        day: 11,
        title: 'Mandawa to Jaipur Departure',
        desc: 'Breakfast and return highway drive to Jaipur for final drop-off at Airport/Station.'
      }
    ]
  },
  {
    id: 'pkg-12',
    title: 'The Sovereign Rajasthan & Agra Crown: From the Aravalli Hills to the Taj Mahal',
    days: 15,
    nights: 14,
    duration: '14N / 15D',
    route: 'Jaipur – Mandawa – Bikaner – Jaisalmer – Jodhpur – Mount Abu – Udaipur – Chittorgarh – Pushkar – Agra – Delhi',
    images: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80'
    ],
    inclusions: [
      'Private AC cab for 15 days',
      '14 Nights hotel accommodation across royal cities',
      'Sam dunes camel ride & cultural program',
      'All road taxes, multi-state permits, parking, fuel, driver allowances'
    ],
    exclusions: [
      'Monument entry tickets',
      'Lake Pichola boat cruise tickets',
      'Chokhi Dhani entry and dinner',
      'Meals not specified in booking'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Jaipur',
        desc: 'Jaipur pickup. Hawa Mahal photo stop, Amer Fort, City Palace, Jantar Mantar, and evening folk dinner at Chokhi Dhani. Overnight in Jaipur.'
      },
      {
        day: 2,
        title: 'Jaipur to Mandawa',
        desc: 'Drive into Shekhawati. Tour cenotaphs, stepwells, and painted havelis in Nawalgarh, Dundlod, and Mandawa. Overnight in Mandawa.'
      },
      {
        day: 3,
        title: 'Mandawa to Bikaner',
        desc: 'Drive to Bikaner. Visit Karni Mata Temple (Deshnoke) and Camel Breeding Farm. Overnight in Bikaner.'
      },
      {
        day: 4,
        title: 'Bikaner to Jaisalmer',
        desc: 'Junagarh Fort and Lallgarh Palace in Bikaner. Drive across Thar to Jaisalmer with stop at Khichan Crane Sanctuary. Overnight in Jaisalmer.'
      },
      {
        day: 5,
        title: 'Jaisalmer Citadel & Sam Sand Dunes',
        desc: 'Jaisalmer Fort, Jain Temples, Patwon Ki Haveli. Excursion to Kuldhara village and Sam Sand Dunes for camel trek, folk dance, and dinner. Overnight in Jaisalmer.'
      },
      {
        day: 6,
        title: 'Jaisalmer to Jodhpur',
        desc: 'Drive across the desert via Pokhran to Jodhpur. Check-in and evening walk around Sardar Market. Overnight in Jodhpur.'
      },
      {
        day: 7,
        title: 'Jodhpur to Mount Abu via Ranakpur',
        desc: 'Mehrangarh Fort and Jaswant Thada. Drive to Mount Abu via Ranakpur Jain Temples (1,444 pillars). Evening walk along Nakki Lake. Overnight in Mount Abu.'
      },
      {
        day: 8,
        title: 'Mount Abu to Udaipur',
        desc: 'Dilwara Jain Temples, Achalgarh Fort, Guru Shikhar. Scenic descent and drive to Udaipur. Overnight in Udaipur.'
      },
      {
        day: 9,
        title: 'Udaipur Palaces & Lake Pichola',
        desc: 'City Palace, Saheliyon Ki Bari, Jagdish Temple, Fateh Sagar Lake, and Lake Pichola sunset boat ride. Overnight in Udaipur.'
      },
      {
        day: 10,
        title: 'Mewar Spiritual Excursions',
        desc: 'Eklingji Temple, Sahastrabahu (Saas-Bahu) Temples, Nathdwara Shrinathji Temple, and Haldighati Pass. Overnight in Udaipur.'
      },
      {
        day: 11,
        title: 'Udaipur to Chittorgarh Citadel',
        desc: 'Drive to Chittorgarh. Comprehensive tour of India\'s largest citadel: Chittorgarh Fort, Vijay Stambh, and Padmini Palace. Overnight in Chittorgarh.'
      },
      {
        day: 12,
        title: 'Chittorgarh to Pushkar via Ajmer',
        desc: 'Visit Ajmer Sharif Dargah, then proceed to Pushkar. Visit Brahma Temple, holy Pushkar Lake, and rose farms. Overnight in Pushkar.'
      },
      {
        day: 13,
        title: 'Pushkar to Jaipur',
        desc: 'Drive back to Jaipur. Visit Albert Hall Museum, Birla Mandir, and artisan hand-block printing workshops in Sanganer/Bagru. Overnight in Jaipur.'
      },
      {
        day: 14,
        title: 'Jaipur to Agra via Fatehpur Sikri',
        desc: 'Drive to Agra via Fatehpur Sikri (Buland Darwaza & Salim Chishti Tomb). Check in and overnight in Agra.'
      },
      {
        day: 15,
        title: 'Sunrise at the Taj Mahal & Delhi Departure',
        desc: 'Sunrise visit to the Taj Mahal. Tour Agra Fort. Afternoon drive via Yamuna Expressway to New Delhi Airport for departure.'
      }
    ]
  },
  {
    id: 'pkg-13',
    title: 'Shekhawati Frescoes to Thar Dunes: Mandawa, Bikaner, Jaisalmer & Jodhpur Trail',
    days: 6,
    nights: 5,
    duration: '5N / 6D',
    route: 'Jaipur – Mandawa – Bikaner – Jaisalmer – Jodhpur',
    images: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80'
    ],
    inclusions: [
      'Private AC cab for 6 days',
      '5 Nights hotel stay across heritage destinations',
      'All toll taxes, state permits, parking, fuel, driver night allowances',
      'Doorstep pickup and drop'
    ],
    exclusions: [
      'Monument entrance tickets',
      'Elephant or jeep ride fees',
      'Meals not specified in booking'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Jaipur',
        desc: 'Chauffeur pickup in Jaipur. Tour Amer Fort and walled city landmarks (Hawa Mahal, Jal Mahal). Evening bazaar walk. Overnight in Jaipur.'
      },
      {
        day: 2,
        title: 'Jaipur to Mandawa',
        desc: 'Drive via Samode into Shekhawati. Check in at Castle Mandawa or heritage haveli. Evening walking tour of frescoed streets. Overnight in Mandawa.'
      },
      {
        day: 3,
        title: 'Mandawa to Bikaner',
        desc: 'Morning exploration of Mandawa\'s painted merchant havelis. Highway drive to Bikaner (or optional desert stay at Khimsar). Overnight in Bikaner.'
      },
      {
        day: 4,
        title: 'Bikaner to Jaisalmer',
        desc: 'Visit Junagarh Fort and Prachina Royal Textile Museum. Afternoon drive through Thar Desert to Jaisalmer. Overnight in Jaisalmer.'
      },
      {
        day: 5,
        title: 'Jaisalmer to Jodhpur',
        desc: 'Morning tour of Jaisalmer Fort (Sonar Qila) and ancient Jain temples. Highway drive across Marwar to Jodhpur. Evening walk around Clock Tower. Overnight in Jodhpur.'
      },
      {
        day: 6,
        title: 'Citadels of Jodhpur & Departure',
        desc: 'Guided tour of Mehrangarh Fort, Jaswant Thada, and royal cenotaphs at Mandore Gardens. Evening transfer to Jodhpur Airport or return drive to Jaipur.'
      }
    ]
  }
];

function CardImageSlider({ images, title }: { images: string[]; title: string }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-56 overflow-hidden bg-stone-900 group">
      <img
        src={images[currentIdx]}
        alt={`${title} photo ${currentIdx + 1}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentIdx ? 'w-5 bg-amber-400' : 'w-1.5 bg-white/60'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export const FeaturedPackages: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);

  const getWhatsAppLink = (pkgTitle: string, duration: string) => {
    const text = encodeURIComponent(
      `Hello Harshvardhan! I would like to inquire about "${pkgTitle}" (${duration}) on Pinkcityroutes.`
    );
    return `https://wa.me/919893221141?text=${text}`;
  };

  return (
    <section id="packages" className="py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-700 text-xs font-bold tracking-widest uppercase bg-amber-100 px-3 py-1 rounded-full">
            Pinkcityroutes Signature Catalog
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            13 Curated Rajasthan & North India Tours
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Handcrafted heritage, desert, and wildlife circuits. All packages feature dedicated AC chauffeur-driven transport, flexible pacing, and customized 5-star hotel options.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packagesData.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Carousel */}
              <div className="relative">
                <CardImageSlider images={pkg.images} title={pkg.title} />
                <span className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur-sm text-amber-300 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow">
                  <Clock className="w-3.5 h-3.5" />
                  {pkg.duration}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 line-clamp-2 leading-snug">
                    {pkg.title}
                  </h3>
                  <div className="mt-2 flex items-start gap-1.5 text-xs text-stone-500">
                    <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span className="line-clamp-2 leading-relaxed">{pkg.route}</span>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="mt-4 pt-3 border-t border-stone-100 space-y-1.5">
                    {pkg.inclusions.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-stone-100 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-stone-400 font-medium block">
                        Estimated Tariff
                      </span>
                      <span className="text-sm font-bold text-amber-800">
                        Price on Request
                      </span>
                    </div>
                    <span className="text-[11px] text-stone-400 italic">
                      Customized Pacing
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedPackage(pkg)}
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-stone-800 bg-stone-100 hover:bg-stone-200 transition-colors"
                    >
                      <FileText className="w-4 h-4 text-stone-600" />
                      <span>Itinerary</span>
                    </button>

                    <a
                      href={getWhatsAppLink(pkg.title, pkg.duration)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Traveler Notice Banner */}
        <div className="mt-16 max-w-4xl mx-auto bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-start gap-5">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-stone-900">
              Important Traveler Notice & Operational Policy
            </h4>
            <ul className="mt-2 text-xs sm:text-sm text-stone-600 space-y-1.5 leading-relaxed">
              <li>
                <strong>Flexible Sightseeing Sequence:</strong> Sightseeing sequence, timings, or days may be adjusted based on local traffic conditions, monument operating hours, or weather conditions; all promised destinations and attractions remain fully covered.
              </li>
              <li>
                <strong>Prompt Real-Time Updates:</strong> Travelers receive timely updates, pickup schedules, and coordination directly from their assigned chauffeur and dedicated trip coordinator.
              </li>
              <li>
                <strong>Monument Entry Tickets Excluded:</strong> Monument entry tickets, camera passes, cycle-rickshaw fees, and safari/boat permits are strictly excluded across all packages and payable directly on site.
              </li>
              <li>
                <strong>Vehicle & Hotel Pricing:</strong> Packages default to "Price on Request". Selecting vehicle upgrades (Sedan, SUV, Innova Crysta, Luxury) or 5-Star luxury heritage palaces will adjust the final package price.
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Itinerary Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setSelectedPackage(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-amber-800 text-xs font-bold uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded-md">
              {selectedPackage.duration}
            </span>
            <h3 className="mt-2 text-xl sm:text-2xl font-black text-stone-900 leading-tight">
              {selectedPackage.title}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-stone-500 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-700" />
              {selectedPackage.route}
            </p>

            {/* Day-Wise Breakdown */}
            <div className="mt-6">
              <h4 className="text-xs uppercase font-bold tracking-wider text-stone-400 mb-4 flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                Day-By-Day Itinerary
              </h4>
              <div className="space-y-4">
                {selectedPackage.itinerary.map((step) => (
                  <div key={step.day} className="p-4 bg-stone-50 rounded-xl border border-stone-200/60">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-amber-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {step.day}
                      </span>
                      <h5 className="text-sm font-bold text-stone-800">{step.title}</h5>
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                <h5 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
                  Package Inclusions
                </h5>
                <ul className="text-xs text-stone-700 space-y-1.5">
                  {selectedPackage.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-rose-50/50 rounded-xl border border-rose-100">
                <h5 className="text-xs font-bold text-rose-800 uppercase tracking-wider mb-2">
                  Package Exclusions
                </h5>
                <ul className="text-xs text-stone-700 space-y-1.5">
                  {selectedPackage.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-rose-600 font-bold">✕</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-8 pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-stone-500 block">Tariff Plan</span>
                <span className="text-base font-extrabold text-amber-800">Price on Request</span>
              </div>
              <a
                href={getWhatsAppLink(selectedPackage.title, selectedPackage.duration)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                Book or Customize via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};