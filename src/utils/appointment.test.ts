import test from 'node:test';
import assert from 'node:assert/strict';
import {
  cleanPhoneNumber,
  validateIndianPhone,
  extract10DigitPhone,
  formatWhatsAppBookingMessage,
  buildWhatsAppUrl,
  getMinBookingDate,
} from './appointment';

test('cleanPhoneNumber removes spaces, dashes and parentheses', () => {
  assert.equal(cleanPhoneNumber(' 095467 17655 '), '09546717655');
  assert.equal(cleanPhoneNumber('+91 95467-17655'), '+919546717655');
  assert.equal(cleanPhoneNumber('(954) 671-7655'), '9546717655');
});

test('validateIndianPhone correctly validates 10-digit Indian phone numbers', () => {
  // Valid numbers
  assert.equal(validateIndianPhone('9546717655'), true);
  assert.equal(validateIndianPhone('+919546717655'), true);
  assert.equal(validateIndianPhone('09546717655'), true);
  assert.equal(validateIndianPhone('919546717655'), true);
  assert.equal(validateIndianPhone('8877665544'), true);
  assert.equal(validateIndianPhone('7012345678'), true);
  assert.equal(validateIndianPhone('6234567890'), true);

  // Invalid numbers
  assert.equal(validateIndianPhone(''), false);
  assert.equal(validateIndianPhone('12345'), false);
  assert.equal(validateIndianPhone('5544332211'), false); // Starts with 5 (invalid Indian mobile)
  assert.equal(validateIndianPhone('9546717655123'), false); // Too long
  assert.equal(validateIndianPhone('abcdefghij'), false);
});

test('extract10DigitPhone normalizes prefixes to 10 digits', () => {
  assert.equal(extract10DigitPhone('09546717655'), '9546717655');
  assert.equal(extract10DigitPhone('+919546717655'), '9546717655');
  assert.equal(extract10DigitPhone('919546717655'), '9546717655');
  assert.equal(extract10DigitPhone('9546717655'), '9546717655');
});

test('formatWhatsAppBookingMessage builds accurate message text', () => {
  const message = formatWhatsAppBookingMessage(
    {
      fullName: 'Sunil Kumar',
      phone: '095467 17655',
      serviceId: 'root-canal',
      preferredDate: '2026-11-10',
      preferredTime: '11:00 AM',
      message: 'Tooth ache in lower left molar',
    },
    'Root Canal Treatment'
  );

  assert.match(message, /Hello Siddhi Dental Hospital/);
  assert.match(message, /\*Patient Name:\* Sunil Kumar/);
  assert.match(message, /\*Dental Service:\* Root Canal Treatment/);
  assert.match(message, /\*Preferred Date:\* 2026-11-10/);
  assert.match(message, /\*Preferred Time:\* 11:00 AM/);
  assert.match(message, /\*Dental Concern \/ Message:\* Tooth ache in lower left molar/);
});

test('buildWhatsAppUrl constructs valid wa.me link with encoded params', () => {
  const url = buildWhatsAppUrl('919546717655', 'Hello Dr. Rohit');
  assert.equal(url, 'https://wa.me/919546717655?text=Hello%20Dr.%20Rohit');
});

test('getMinBookingDate returns valid ISO-like YYYY-MM-DD date string', () => {
  const minDate = getMinBookingDate();
  assert.match(minDate, /^\d{4}-\d{2}-\d{2}$/);
});
