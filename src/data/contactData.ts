/**
 * IIIT Bangalore & UMANG 2026 Official Contact Details & Social Links
 * 
 * Edit this file to update college address, contact coordinators, and social media handles.
 */

import ananyaImg from '../assets/images/coord_ananya_portrait_1790531197994.jpg';
import rohanImg from '../assets/images/coord_rohan_portrait_1790531212102.jpg';
import srikarImg from '../assets/images/SrikarImg.jpeg';

export interface ContactPerson {
  id: string;
  name: string;
  role: string;
  department: string;
  phone: string;
  phoneRaw: string;
  email: string;
  photoUrl: string;
  linkedin: string;
  instagram: string;
  instagramHandle: string;
}

export interface CampusLocation {
  id: 'ecity' | 'extension';
  name: string;
  shortName: string;
  campusTag: string;
  street: string;
  area: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  landmark: string;
  fullAddress: string;
  transit: string;
  map: {
    latitude: number;
    longitude: number;
    embedSatelliteUrl: string;
    directionsUrl: string;
  };
}

export const CAMPUS_LOCATIONS: CampusLocation[] = [
  {
    id: "ecity",
    name: "IIIT Bangalore — Main Campus (Electronic City)",
    shortName: "E-City Campus",
    campusTag: "Electronic City Campus",
    street: "26/C, Electronic City Phase 1, Hosur Road",
    area: "Electronics City Phase 1",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560100",
    country: "India",
    landmark: "Opposite Infosys Gate 1, Electronic City Phase 1",
    fullAddress: "26/C, Opposite Infosys Gate 1, Electronic City Phase 1, Hosur Road, Bengaluru, Karnataka 560100",
    transit: "Located in Electronic City Phase 1. Accessible via Namma Metro Yellow Line and the Elevated Expressway from Silk Board.",
    map: {
      latitude: 12.8448,
      longitude: 77.6632,
      embedSatelliteUrl: "https://maps.google.com/maps?q=12.8448,77.6632&t=k&z=17&ie=UTF8&iwloc=&output=embed",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=International+Institute+of+Information+Technology+Bangalore"
    }
  },
  {
    id: "extension",
    name: "IIIT Bangalore — Extension Campus (Hosa Road)",
    shortName: "Extension Campus",
    campusTag: "Hosa Road Extension Campus",
    street: "65, Aishwarya Crystal Layout, Singasandra, Off Hosa Road, Begur",
    area: "Singasandra / Off Hosa Road",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560114",
    country: "India",
    landmark: "Off Hosa Road, Near Singasandra / Begur",
    fullAddress: "65, Aishwarya Crystal Layout, Singasandra, Off Hosa Road, Begur, Bengaluru, Karnataka 560114",
    transit: "Located near Hosa Road & Hosur Main Road. Conveniently accessible via Singasandra / Hosa Road junction, close to Singasandra Metro Station.",
    map: {
      latitude: 12.8762,
      longitude: 77.6438,
      embedSatelliteUrl: "https://maps.google.com/maps?q=12.8762,77.6438&t=k&z=17&ie=UTF8&iwloc=&output=embed",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=65,+Aishwarya+Crystal+Layout,+Singasandra,+Off+Hosa+Road,+Begur,+Bengaluru,+Karnataka+560114"
    }
  }
];

export const CONTACT_CONFIG = {
  collegeName: "International Institute of Information Technology Bangalore (E-City Campus & Extension Campus)",
  shortName: "IIIT Bangalore",
  festivalName: "UMANG 2026",
  campuses: CAMPUS_LOCATIONS,
  // Main E-City Campus (default address for backwards compatibility)
  address: {
    street: "26/C, Electronic City Phase 1, Hosur Road",
    area: "Electronics City",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560100",
    country: "India",
    landmark: "Opposite of Infosys Gate 1, Electronic City Phase 1",
    fullAddress: "26/C, Electronic City Phase 1, Hosur Road, Bengaluru, Karnataka 560100"
  },
  // Extension Campus Address
  extensionCampusAddress: {
    street: "65, Aishwarya Crystal Layout, Singasandra, Off Hosa Road, Begur",
    area: "Singasandra / Off Hosa Road",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560114",
    country: "India",
    landmark: "Off Hosa Road, Near Singasandra / Begur",
    fullAddress: "65, Aishwarya Crystal Layout, Singasandra, Off Hosa Road, Begur, Bengaluru, Karnataka 560114"
  },
  contacts: {
    sportsEmail: "umang@iiitb.ac.in",
    generalEmail: "sportscomm@iiitb.ac.in",
    studentConvenorPhone: "+91 80 4140 7777",
    helpdeskHours: "09:00 AM - 08:00 PM IST"
  },
  // 3 Primary Student Contact Coordinators
  coordinators: [
    {
      id: "coord-1",
      name: "Srikar Pisupati",
      role: "Sports Comm Member",
      department: "M.Tech CSE · IIIT Bangalore",
      phone: "+91 93539 09085",
      phoneRaw: "+919353909085",
      email: "pisupati.srikar@iiitb.ac.in",
      photoUrl: srikarImg,
      linkedin: "https://www.linkedin.com/in/srikar-pisupati-b1b6a5390/",
      instagram: "https://www.instagram.com/",
      instagramHandle: "@srikar_pisupati"
    },
    {
      id: "coord-2",
      name: "Ananya Iyer",
      role: "Registrations & Queries Lead",
      department: "iM.Tech · IIIT Bangalore",
      phone: "+91 94480 34129",
      phoneRaw: "+919448034129",
      email: "ananya.iyer@iiitb.ac.in",
      photoUrl: ananyaImg,
      linkedin: "https://www.linkedin.com/in/",
      instagram: "https://www.instagram.com/",
      instagramHandle: "@ananya.iyer"
    },
    {
      id: "coord-3",
      name: "Rohan Kulkarni",
      role: "Hospitality & Team Logistics",
      department: "iM.Tech · IIIT Bangalore",
      phone: "+91 87620 59841",
      phoneRaw: "+918762059841",
      email: "rohan.kulkarni@iiitb.ac.in",
      photoUrl: rohanImg,
      linkedin: "https://www.linkedin.com/in/",
      instagram: "https://www.instagram.com/",
      instagramHandle: "@rohan_kulkarni"
    }
  ] as ContactPerson[],
  socialMedia: {
    // Official UMANG IIIT Bangalore Instagram
    instagram: "https://www.instagram.com/umang_iiitb/",
    instagramHandle: "@umang_iiitb",
    
    // Official IIIT Bangalore LinkedIn & Web
    linkedin: "https://www.linkedin.com/school/iiit-bangalore/",
    website: "https://www.iiitb.ac.in",
    umangLegacyWebsite: "https://umang.iiitb.net"
  },
  map: {
    // Google Maps coordinates for IIIT Bangalore
    latitude: 12.8448,
    longitude: 77.6632,
    // Google Maps Satellite / Hybrid embed URL
    embedSatelliteUrl: "https://maps.google.com/maps?q=12.8448,77.6632&t=k&z=17&ie=UTF8&iwloc=&output=embed",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=International+Institute+of+Information+Technology+Bangalore"
  }
};
