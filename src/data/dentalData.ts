import {
  DentalService,
  DoctorProfile,
  ReviewItem,
  GalleryPhoto,
} from '../types/dental';

export const HOSPITAL_INFO = {
  name: 'SIDDHI DENTAL HOSPITAL',
  fullName: 'Dr. Rohit Siddhi Dental Hospital',
  tagline: 'Your Smile Deserves Expert Care.',
  subtitle:
    'Experience comfortable, reliable and professional dental care with a focus on healthy, confident smiles in Siwan.',
  phone: '095467 17655',
  phoneClean: '9546717655',
  phoneDisplay: '+91 95467 17655',
  whatsappNumber: '919546717655',
  whatsappLink: 'https://wa.me/919546717655',
  address: {
    street: 'Hospital Rd, Infront of Dr. B. L. Das, Naya Bazar',
    area: 'Panki Bangali, Naya Bazar',
    city: 'Siwan',
    state: 'Bihar',
    pincode: '841226',
    full: 'Hospital Rd, Infront of Dr. B. L. Das, Naya Bazar, Siwan, Panki Bangali, Bihar 841226',
  },
  timings: {
    days: 'Monday - Sunday',
    hours: '10:00 AM - 8:00 PM',
    status: 'Open Daily (Consultation Available)',
  },
  ratings: {
    average: 4.9,
    count: 49,
    source: 'Google Verified Reviews',
    stars: 5,
  },
  googleMapsLink:
    'https://www.google.com/maps/search/?api=1&query=Siddhi+Dental+Hospital+Hospital+Rd+Siwan+Bihar',
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.0089104314347!2d84.36178028751578!3d26.228900017915965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992fc105ad208e1%3A0xe7ffe24457d1849d!2sSiddhi%20Dental%20Hospital!5e0!3m2!1sen!2sin!4v1786184565466!5m2!1sen!2sin',
};

export const DOCTOR_PROFILE: DoctorProfile = {
  name: 'Dr. Rohit Siddhi (Dr. Rohit Kumar)',
  title: 'Lead Dental Surgeon & Clinic Director',
  role: 'Dental Surgeon & Specialist',
  degrees: [
    'BDS - Bachelor of Dental Surgery (2012)',
    'Certified in Advanced Implantology & Bone Regeneration (AAI, 2014)',
  ],
  college: 'Seema Dental College & Hospital (H.N.B. Garhwal Central University)',
  graduationYear: 2012,
  experienceYears: 12,
  specializations: [
    'Advanced Dental Implantology (AAI Certified)',
    'Root Canal Treatment (RCT)',
    'Restorative & General Dentistry',
    'Dental Fillings & Tooth Preservation',
    'Painless Tooth Extraction',
    'Teeth Cleaning & Periodontal Gum Care',
    'Dental Prosthetics & Smile Alignment',
  ],
  bio: 'Dr. Rohit Siddhi (Dr. Rohit Kumar) is a dedicated dental surgeon with over 12 years of clinical excellence in Siwan, Bihar. Holding his BDS from Seema Dental College & Hospital (H.N.B. Garhwal Central University) and advanced certification in Implantology, Osteointegration & Bone Regeneration from the Academy of Advanced Implantology (AAI), Dr. Rohit provides gentle, transparent, and pain-free dental treatments in a state-of-the-art clinic environment.',
  verifiedBadges: [
    'BDS Dental Surgeon (2012)',
    'AAI Certified Implantologist (2014)',
    '12+ Years Clinical Practice',
    'Google 4.9★ Rated Dental Care',
  ],
  photoUrl: '/images/1.png',
};

export const DENTAL_SERVICES: DentalService[] = [
  {
    id: 'general-dentistry',
    name: 'General Dentistry',
    shortDesc:
      'Routine dental examinations, preventive care and treatment for common dental problems.',
    iconName: 'Stethoscope',
    category: 'Preventive Care',
    overview:
      'Regular comprehensive dental check-ups, digital oral examinations, screening for cavities, gum health assessment, and personalized oral hygiene guidance to prevent future complications.',
    whoIsItFor: [
      'Patients due for regular 6-month checkups',
      'Mild sensitivity or early tooth pain',
      'Families seeking routine preventative care',
    ],
    keyBenefits: [
      'Early detection of cavities and gum issues',
      'Preventive fluoride applications',
      'Detailed clinical advice and treatment plan',
    ],
    estimatedDuration: '20 - 30 mins',
  },
  {
    id: 'teeth-cleaning',
    name: 'Teeth Cleaning & Polishing',
    shortDesc:
      'Professional cleaning to maintain oral hygiene and a fresh, healthy smile.',
    iconName: 'Sparkles',
    category: 'Hygiene & Prevention',
    overview:
      'Advanced ultrasonic scaling to remove stubborn tartar, plaque buildup, and coffee/tea stains followed by therapeutic polishing to keep gums healthy and breath fresh.',
    whoIsItFor: [
      'Patients with plaque or yellow stains',
      'Bleeding or swollen gums when brushing',
      'Anyone wanting a brighter, cleaner smile',
    ],
    keyBenefits: [
      'Eliminates bacterial plaque and calculus',
      'Prevents gingivitis and periodontal problems',
      'Non-invasive and gentle ultrasonic technique',
    ],
    estimatedDuration: '30 - 45 mins',
  },
  {
    id: 'root-canal',
    name: 'Root Canal Treatment',
    shortDesc:
      'Dental care focused on treating infected or damaged teeth while helping preserve the natural tooth.',
    iconName: 'ShieldAlert',
    category: 'Endodontics',
    overview:
      'Precision single-sitting and multi-sitting endodontic therapy using modern rotary instruments and local anesthesia to relieve acute toothaches and save damaged natural teeth from extraction.',
    whoIsItFor: [
      'Severe throbbing toothache or deep decay',
      'Sensitivity to hot and cold temperatures',
      'Swelling or pus near the tooth root',
    ],
    keyBenefits: [
      'Complete pain relief and infection removal',
      'Preserves your natural tooth structure',
      'Reinforced with modern dental crowns',
    ],
    estimatedDuration: '45 - 60 mins',
  },
  {
    id: 'dental-fillings',
    name: 'Dental Fillings',
    shortDesc:
      'Treatment for cavities and restoring damaged teeth to normal function.',
    iconName: 'CheckCircle2',
    category: 'Restorative Care',
    overview:
      'Tooth-colored composite resin fillings that seamlessly match natural tooth shades, repairing cavities, chips, and wear while preventing further decay.',
    whoIsItFor: [
      'Visible dark spots or cavities on teeth',
      'Food getting stuck between teeth',
      'Chipped, broken, or worn edges',
    ],
    keyBenefits: [
      'Natural tooth-matching aesthetics',
      'Strong biocompatible composite material',
      'Durable seal against recurrent bacteria',
    ],
    estimatedDuration: '25 - 40 mins',
  },
  {
    id: 'tooth-extraction',
    name: 'Tooth Extraction',
    shortDesc:
      'Professional removal of problematic or damaged teeth when required.',
    iconName: 'Activity',
    category: 'Oral Surgery',
    overview:
      'Safe, gentle, and sterile extraction of severely damaged teeth, retained roots, or painful wisdom teeth with minimal discomfort and comprehensive post-op guidance.',
    whoIsItFor: [
      'Irreparable decay or severe fracture',
      'Impacted or painful wisdom teeth',
      'Overcrowded teeth prior to alignment',
    ],
    keyBenefits: [
      'Performed under local anesthesia for comfort',
      'Clean atraumatic extraction methods',
      'Clear healing protocol and follow-up care',
    ],
    estimatedDuration: '30 - 45 mins',
  },
  {
    id: 'braces-alignment',
    name: 'Braces & Alignment',
    shortDesc:
      'Dental solutions to improve tooth alignment and overall smile appearance.',
    iconName: 'Smile',
    category: 'Orthodontics',
    overview:
      'Orthodontic evaluation and corrective solutions to align crooked teeth, close gaps, correct overbites/underbites, and create a balanced, beautiful smile for teens and adults.',
    whoIsItFor: [
      'Crowded, misaligned, or spaced teeth',
      'Difficulty chewing due to improper bite',
      'Desire for a straight, confident smile',
    ],
    keyBenefits: [
      'Customized alignment treatment roadmap',
      'Improved long-term chewing and speech function',
      'Boosts lifelong facial aesthetics and confidence',
    ],
    estimatedDuration: 'Consultation & Periodic Visits',
  },
  {
    id: 'dental-implants',
    name: 'Dental Implants',
    shortDesc:
      'Modern tooth replacement solutions designed for missing teeth.',
    iconName: 'Award',
    category: 'Implantology',
    overview:
      'Permanent, highly stable titanium root fixtures capped with natural-looking porcelain crowns to restore missing teeth with the strength and look of genuine teeth, backed by AAI implantology training.',
    whoIsItFor: [
      'Patients missing one or multiple teeth',
      'Unhappy with loose removable dentures',
      'Wanting a permanent, fixed replacement',
    ],
    keyBenefits: [
      'Looks, feels, and chews like natural teeth',
      'Protects jawbone density and facial contour',
      'Long-lasting durability and stability',
    ],
    estimatedDuration: 'Multi-stage structured procedure',
  },
  {
    id: 'cosmetic-dentistry',
    name: 'Cosmetic Dentistry',
    shortDesc:
      'Smile-focused dental treatments designed to improve aesthetic appeal.',
    iconName: 'HeartHandshake',
    category: 'Aesthetic Dentistry',
    overview:
      'Comprehensive smile design services including composite veneers, tooth reshaping, diastema closure (gap filling), and aesthetic enhancements for vibrant smiles.',
    whoIsItFor: [
      'Discolored, uneven, or chipped teeth',
      'Noticeable gaps between front teeth',
      'Grooming for weddings and milestones',
    ],
    keyBenefits: [
      'Tailored aesthetic smile design',
      'Immediate visual improvement',
      'High-grade biocompatible materials',
    ],
    estimatedDuration: '45 - 60 mins',
  },
];

export const WHY_CHOOSE_US = [
  {
    number: '01',
    title: 'Professional Dental Care',
    description:
      'Standardized clinical procedures carried out with meticulous care and clinical precision by an experienced dental surgeon.',
  },
  {
    number: '02',
    title: 'Patient-Centered Approach',
    description:
      'Personalized consultations to discuss every treatment clearly, explain options, and answer all concerns prior to starting.',
  },
  {
    number: '03',
    title: 'Clean & Comfortable',
    description:
      'Hygienic setup designed to ensure a stress-free, welcoming, and reassuring medical environment for the entire family.',
  },
  {
    number: '04',
    title: 'Modern Dental Solutions',
    description:
      'Effective treatment workflows built around contemporary oral practices, modern dental operatories, and gentle techniques.',
  },
];

export const PATIENT_EXPERIENCE_STEPS = [
  {
    step: '01',
    title: 'Consultation',
    description:
      'Understand your dental concern and medical history thoroughly through a patient, one-on-one discussion.',
  },
  {
    step: '02',
    title: 'Diagnosis',
    description:
      'Assess your oral health condition carefully and accurately using modern dental examination standards.',
  },
  {
    step: '03',
    title: 'Treatment Plan',
    description:
      'Discuss suitable options, timelines, and care instructions clearly with transparent guidance.',
  },
  {
    step: '04',
    title: 'Ongoing Care',
    description:
      'Support your long-term journey toward optimal dental health with follow-up reviews and preventive advice.',
  },
];

export const TESTIMONIALS: ReviewItem[] = [
  {
    id: 'rev-1',
    patientName: 'Local Patient',
    patientTag: 'Verified Patient • Siwan',
    rating: 5,
    comment:
      'Very professional dental hospital in Siwan. The environment is hygienic, and the care provided was very comfortable.',
    verifiedOn: 'Google Review',
  },
  {
    id: 'rev-2',
    patientName: 'Verified Visitor',
    patientTag: 'Verified Patient • Naya Bazar',
    rating: 5,
    comment:
      'Clean environment and polite behavior. Proper dental diagnosis and explanation given prior to treatment.',
    verifiedOn: 'Google Review',
  },
  {
    id: 'rev-3',
    patientName: 'Siwan Resident',
    patientTag: 'Local Community Member',
    rating: 5,
    comment:
      'Patient-friendly procedure and convenient location right on Hospital Road in Naya Bazar.',
    verifiedOn: 'Google Review',
  },
];

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Dr. Rohit Siddhi with Dental Treatment Unit',
    category: 'Doctor & Setup',
    imageUrl: '/images/1.png',
    caption:
      'Dr. Rohit Siddhi (BDS, AAI) at the main clinical operatory with digital monitor and surgical instrument delivery unit.',
    isActualPhoto: true,
  },
  {
    id: 'gal-2',
    title: 'Active Patient Dental Procedure & Team Care',
    category: 'Clinical Care',
    imageUrl: '/images/clinic/active-patient-procedure.jpg',
    caption:
      'Dr. Rohit Kumar and clinical dental staff performing precision diagnostic treatment for a patient in the dental operatory.',
    isActualPhoto: true,
  },
  {
    id: 'gal-3',
    title: 'Dr. Rohit Siddhi Consultation Office & Chamber',
    category: 'Doctor Chamber',
    imageUrl: '/images/clinic/doctor-chamber-office.jpg',
    caption:
      'Private air-conditioned consultation desk, digital diagnostic system, and adjoining patient dental treatment bay.',
    isActualPhoto: true,
  },
  {
    id: 'gal-4',
    title: 'Hospital Interior with Illuminated Name Board',
    category: 'Hospital Interior',
    imageUrl: '/images/clinic/hospital-interior-illuminated-board.jpg',
    caption:
      'Interior view of Siddhi Dental Hospital featuring the illuminated logo board, credentials display, and treatment wing.',
    isActualPhoto: true,
  },
  {
    id: 'gal-5',
    title: 'Verified BDS Degree & AAI Implantology Certification',
    category: 'Certifications',
    imageUrl: '/images/clinic/certificates-bds-implantology.jpg',
    caption:
      'Official credentials on clinic display: BDS from HNB Garhwal Central University (Seema Dental College) & AAI Advanced Implantology Certificate (2014).',
    isActualPhoto: true,
  },
  {
    id: 'gal-6',
    title: 'Digital X-Ray Consultation & Treatment Station',
    category: 'Diagnostics',
    imageUrl: '/images/clinic/clinic-consultation-xray.jpg',
    caption:
      'Digital diagnostic workstation for examining digital dental X-rays with patient consultation and simultaneous clinical operatory.',
    isActualPhoto: true,
  },
  {
    id: 'gal-7',
    title: 'Strict Clinical PPE & Infection Control Protocols',
    category: 'Hygiene & Safety',
    imageUrl: '/images/clinic/doctor-sterile-ppe-hygiene.jpg',
    caption:
      'Exemplary infection control: Doctor in full sterile PPE suit, visor, and mask ensuring 100% sanitized clinical procedures.',
    isActualPhoto: true,
  },
  {
    id: 'gal-8',
    title: 'Dual Treatment Operatory & Modern Dental Chairs',
    category: 'Treatment Operatory',
    imageUrl: '/images/clinic/dental-operatory-chairs.jpg',
    caption:
      'Fully equipped dual treatment chairs with overhead LED surgical lights, suction systems, and sterile cabinet units.',
    isActualPhoto: true,
  },
];

export const TIME_SLOTS = [
  '10:00 AM - 11:30 AM (Morning)',
  '11:30 AM - 01:00 PM (Mid-day)',
  '01:00 PM - 03:00 PM (Afternoon)',
  '03:00 PM - 05:00 PM (Late Afternoon)',
  '05:00 PM - 06:30 PM (Evening)',
  '06:30 PM - 08:00 PM (Night)',
];
