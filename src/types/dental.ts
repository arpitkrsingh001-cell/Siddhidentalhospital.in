export interface DentalService {
  id: string;
  name: string;
  shortDesc: string;
  iconName: string;
  category: string;
  overview: string;
  whoIsItFor: string[];
  keyBenefits: string[];
  estimatedDuration: string;
}

export interface DoctorProfile {
  name: string;
  title: string;
  role: string;
  degrees: string[];
  college: string;
  graduationYear: number;
  experienceYears: number;
  specializations: string[];
  bio: string;
  verifiedBadges: string[];
  photoUrl: string;
}

export interface ReviewItem {
  id: string;
  patientName: string;
  patientTag: string;
  rating: number;
  comment: string;
  verifiedOn: string;
  date?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  caption: string;
  isActualPhoto: boolean;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  serviceId: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
}
