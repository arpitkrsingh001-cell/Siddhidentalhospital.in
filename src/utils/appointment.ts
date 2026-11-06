import { BookingFormData } from '../types/dental';

/**
 * Normalizes phone number input by removing non-digit characters except leading plus
 */
export function cleanPhoneNumber(phone: string): string {
  if (!phone) return '';
  return phone.replace(/[\s\-\(\)]/g, '');
}

/**
 * Validates Indian 10-digit mobile number.
 * Accepts optional +91 or 0 prefix.
 * Main 10 digits must begin with 6, 7, 8, or 9.
 */
export function validateIndianPhone(phone: string): boolean {
  if (!phone) return false;
  const cleaned = cleanPhoneNumber(phone);
  // Match +91XXXXXXXXXX, 91XXXXXXXXXX, 0XXXXXXXXXX, or just XXXXXXXXXX
  const regex = /^(?:\+91|91|0)?[6-9]\d{9}$/;
  return regex.test(cleaned);
}

/**
 * Extracts normalized 10-digit mobile number
 */
export function extract10DigitPhone(phone: string): string {
  const cleaned = cleanPhoneNumber(phone);
  if (cleaned.startsWith('+91')) return cleaned.slice(3);
  if (cleaned.startsWith('91') && cleaned.length === 12) return cleaned.slice(2);
  if (cleaned.startsWith('0') && cleaned.length === 11) return cleaned.slice(1);
  return cleaned;
}

/**
 * Formats a clean, professional WhatsApp appointment message
 */
export function formatWhatsAppBookingMessage(
  data: BookingFormData,
  serviceName: string
): string {
  const lines: string[] = [
    'Hello Siddhi Dental Hospital,',
    '',
    'I would like to book a dental consultation appointment.',
    '',
    `*Patient Name:* ${data.fullName.trim()}`,
    `*Mobile Number:* ${cleanPhoneNumber(data.phone)}`,
    `*Dental Service:* ${serviceName}`,
    `*Preferred Date:* ${data.preferredDate}`,
    `*Preferred Time:* ${data.preferredTime}`,
  ];

  if (data.message && data.message.trim().length > 0) {
    lines.push(`*Dental Concern / Message:* ${data.message.trim()}`);
  }

  lines.push('', 'Please let me know if this slot is available. Thank you!');
  return lines.join('\n');
}

/**
 * Builds the direct WhatsApp web/app URL
 */
export function buildWhatsAppUrl(targetPhone: string, message: string): string {
  const cleanTarget = targetPhone.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanTarget}?text=${encodedMessage}`;
}

/**
 * Returns today's date formatted as YYYY-MM-DD for min date input attribute
 */
export function getMinBookingDate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
