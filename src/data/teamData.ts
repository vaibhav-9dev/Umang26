/**
 * UMANG 2026 - Sports Committee (Sports Comm) Team
 * 
 * Edit this file to update the names, roles, photos, mobile numbers, LinkedIn URLs,
 * and Instagram profiles of the sports committee members.
 */

import srikarImg from '../assets/images/SrikarImg.jpg';
import ananyaImg from '../assets/images/coord_ananya_portrait_1790531197994.jpg';
import rohanImg from '../assets/images/coord_rohan_portrait_1790531212102.jpg';
import diyaImg from '../assets/images/coord_diya_portrait_1790531405732.jpg';
import varunImg from '../assets/images/coord_varun_portrait_1790531424265.jpg';
import kavyaImg from '../assets/images/coord_kavya_portrait_1790531438890.jpg';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  mythologicalTitle: string;
  department: string;
  phone: string;
  phoneRaw: string;
  photoUrl: string;
  linkedin: string;
  instagram: string;
  email: string;
}

export const SPORTS_COMMITTEE: TeamMember[] = [
  {
    id: "lead-1",
    name: "Srikar Pisupati",
    role: "Sports Comm Member",
    mythologicalTitle: "Archon of the Games",
    department: "M.Tech CSE · IIIT Bangalore",
    phone: "+91 93539 09085",
    phoneRaw: "+919353909085",
    photoUrl: srikarImg,
    linkedin: "https://www.linkedin.com/in/srikar-pisupati-b1b6a5390/",
    instagram: "https://www.instagram.com/",
    email: "pisupati.srikar@iiitb.ac.in"
  },
  {
    id: "lead-2",
    name: "Ananya Iyer",
    role: "Co-Convenor & Events Lead",
    mythologicalTitle: "Herald of Olympus",
    department: "iM.Tech · IIIT Bangalore",
    phone: "+91 94480 34129",
    phoneRaw: "+919448034129",
    photoUrl: ananyaImg,
    linkedin: "https://www.linkedin.com/in/",
    instagram: "https://www.instagram.com/",
    email: "ananya.iyer@iiitb.ac.in"
  },
  {
    id: "lead-3",
    name: "Rohan Kulkarni",
    role: "Head of Logistics & Grounds",
    mythologicalTitle: "Warden of the Citadel",
    department: "iM.Tech · IIIT Bangalore",
    phone: "+91 87620 59841",
    phoneRaw: "+918762059841",
    photoUrl: rohanImg,
    linkedin: "https://www.linkedin.com/in/",
    instagram: "https://www.instagram.com/",
    email: "rohan.kulkarni@iiitb.ac.in"
  },
  {
    id: "lead-4",
    name: "Diya Nair",
    role: "Public Relations & Media Lead",
    mythologicalTitle: "Oracle of the Pantheon",
    department: "M.Sc Digital Society · IIIT Bangalore",
    phone: "+91 97410 88215",
    phoneRaw: "+919741088215",
    photoUrl: diyaImg,
    linkedin: "https://www.linkedin.com/in/",
    instagram: "https://www.instagram.com/",
    email: "diya.nair@iiitb.ac.in"
  },
  {
    id: "lead-5",
    name: "Varun Reddy",
    role: "Registrations & Technical Head",
    mythologicalTitle: "Architect of the Games",
    department: "M.Tech CSE · IIIT Bangalore",
    phone: "+91 99010 44532",
    phoneRaw: "+919901044532",
    photoUrl: varunImg,
    linkedin: "https://www.linkedin.com/in/",
    instagram: "https://www.instagram.com/",
    email: "varun.reddy@iiitb.ac.in"
  },
  {
    id: "lead-6",
    name: "Kavya Menon",
    role: "Hospitality & Player Welfare",
    mythologicalTitle: "Guardian of the Athletes",
    department: "iM.Tech · IIIT Bangalore",
    phone: "+91 96320 77190",
    phoneRaw: "+919632077190",
    photoUrl: kavyaImg,
    linkedin: "https://www.linkedin.com/in/",
    instagram: "https://www.instagram.com/",
    email: "kavya.menon@iiitb.ac.in"
  }
];
