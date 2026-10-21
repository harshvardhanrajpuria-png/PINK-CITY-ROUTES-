import { AGENCY_DETAILS } from '../data/travelData';

/**
 * Generates an encoded WhatsApp link to Harsh Vardhan & Ananya Gupta (+91 98932 21141)
 */
export function createWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${AGENCY_DETAILS.phoneRaw}?text=${encoded}`;
}

export function getGeneralWhatsAppLink(): string {
  const msg = `Hello Harsh Vardhan & Ananya, I visited Pinkcityroutes and would like to inquire about planning a tour. Please share more details!`;
  return createWhatsAppUrl(msg);
}

export function getPackageWhatsAppLink(
  packageTitle: string,
  price: string,
  duration: string,
  travelersCount = 2,
  travelMonth = 'Next Month'
): string {
  const msg =
    `Hello Harsh Vardhan & Ananya,\n` +
    `I am interested in the *${packageTitle}* (${duration}) package starting at ${price}.\n\n` +
    `👤 Travelers: ${travelersCount} Person(s)\n` +
    `📅 Target Travel Period: ${travelMonth}\n` +
    `Please share the detailed day-by-day quotation and availability. Thank you!`;
  return createWhatsAppUrl(msg);
}

export function getDestinationWhatsAppLink(destinationName: string): string {
  const msg =
    `Hello Harsh Vardhan & Ananya,\n` +
    `I would like to explore custom tour options for *${destinationName}* with Pinkcityroutes.\n` +
    `Could you please share recommended itineraries and pricing for our trip?`;
  return createWhatsAppUrl(msg);
}

export function getCustomPlanWhatsAppLink(data: {
  destination: string;
  travelers: number;
  days: number;
  comfort: string;
  travelMonth: string;
  notes?: string;
  estimatedBudget?: string;
}): string {
  const msg =
    `Hello Harsh Vardhan & Ananya,\n` +
    `I would like to customize a bespoke tour with Pinkcityroutes:\n\n` +
    `📍 Destination: ${data.destination}\n` +
    `👥 Group Size: ${data.travelers} traveler(s)\n` +
    `⏳ Trip Duration: ${data.days} Days\n` +
    `🏨 Hotel Tier: ${data.comfort}\n` +
    `📅 Preferred Period: ${data.travelMonth}\n` +
    (data.estimatedBudget ? `💰 Indicative Estimate: ${data.estimatedBudget}\n` : '') +
    (data.notes ? `📝 Special Wishes: ${data.notes}\n` : '') +
    `\nPlease send me a customized itinerary and pricing. Thank you!`;
  return createWhatsAppUrl(msg);
}

export function getCouponWhatsAppLink(couponCode: string, discount: string): string {
  const msg =
    `Hello Harsh Vardhan & Ananya,\n` +
    `I would like to plan a tour with Pinkcityroutes and apply promo coupon *${couponCode}* (${discount}).\n` +
    `Please share package options and lock in my special rate!`;
  return createWhatsAppUrl(msg);
}

export function getOneDayTourWhatsAppLink(tourTitle: string, duration: string): string {
  const msg =
    `Hello Harsh Vardhan & Ananya,\n` +
    `I would like to book the *${tourTitle}* (${duration}).\n` +
    `Please share availability, vehicle options, and pick-up details. Thank you!`;
  return createWhatsAppUrl(msg);
}

export function getFleetBookingWhatsAppLink(vehicleName: string, capacity: string): string {
  const msg =
    `Hello Harsh Vardhan & Ananya,\n` +
    `I would like to book the *${vehicleName}* (${capacity}) with a dedicated chauffeur for our upcoming trip.\n` +
    `Please share tariff rates, availability, and booking confirmation. Thank you!`;
  return createWhatsAppUrl(msg);
}

export function getDiarySubmissionWhatsAppLink(): string {
  const msg =
    `Hello Harsh Vardhan & Ananya,\n` +
    `I traveled with Pinkcityroutes and would love to submit my daily travel story, review, and trip photos to be featured on your official Travel Diary and Instagram @pinkcityroutes!`;
  return createWhatsAppUrl(msg);
}
