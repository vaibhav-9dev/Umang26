/**
 * IIIT Bangalore & UMANG 2026 Official Contact Details & Social Links
 * 
 * Edit this file to update college address, contact coordinators, and social media handles.
 */

import arjunImg from '../assets/images/coord_arjun_portrait_1790531178011.jpg';
import ananyaImg from '../assets/images/coord_ananya_portrait_1790531197994.jpg';
import rohanImg from '../assets/images/coord_rohan_portrait_1790531212102.jpg';
import srikarImg from './SrikarImg.jpeg';

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

export const CONTACT_CONFIG = {
  collegeName: "International Institute of Information Technology Bangalore",
  shortName: "IIIT Bangalore",
  festivalName: "UMANG 2026",
  address: {
    street: "26/C, Electronic City Phase 1, Hosur Road",
    area: "Electronics City",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560100",
    country: "India",
    landmark: "Near Infosys Gate 1, Electronic City Phase 1",
    fullAddress: "26/C, Electronic City Phase 1, Hosur Road, Bengaluru, Karnataka 560100"
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
      name: "Arjun Sharma",
      role: "Overall Festival Convenor",
      department: "M.Tech CSE · IIIT Bangalore",
      phone: "+91 98450 18234",
      phoneRaw: "+919845018234",
      email: "arjun.sharma@iiitb.ac.in",
      photoUrl: "/SrikarImg.jpeg",
      linkedin: "https://www.linkedin.com/in/",
      instagram: "https://www.instagram.com/",
      instagramHandle: "@arjun_sharma"
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
