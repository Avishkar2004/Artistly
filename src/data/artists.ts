export interface Artist {
  id: number;
  name: string;
  category: string;
  priceRange: string;
  location: string;
  bio: string;
  languages: string[];
  imageUrl?: string;
  rating: number;
  experience: string;
}

export const artists: Artist[] = [
  {
    id: 1,
    name: "Aarav Kapoor",
    category: "Classical Singer",
    priceRange: "₹50,000 - ₹1,00,000",
    location: "Mumbai, Maharashtra",
    bio: "Aarav is a renowned classical singer with 10+ years of experience performing at major events across India.",
    languages: ["Hindi", "English", "Sanskrit"],
    rating: 4.8,
    experience: "10+ years"
  },
  {
    id: 2,
    name: "Meera Sharma",
    category: "Contemporary Dancer",
    priceRange: "₹30,000 - ₹80,000",
    location: "Delhi, NCR",
    bio: "Meera specializes in contemporary dance forms and has performed at prestigious venues worldwide.",
    languages: ["Hindi", "English"],
    rating: 4.9,
    experience: "8+ years"
  },
  {
    id: 3,
    name: "Rohan Verma",
    category: "Stand-up Comedian",
    priceRange: "₹25,000 - ₹60,000",
    location: "Bangalore, Karnataka",
    bio: "Rohan is a popular stand-up comedian known for his witty observations and clean humor.",
    languages: ["Hindi", "English", "Kannada"],
    rating: 4.7,
    experience: "6+ years"
  },
  {
    id: 4,
    name: "Priya Patel",
    category: "DJ",
    priceRange: "₹40,000 - ₹90,000",
    location: "Pune, Maharashtra",
    bio: "Priya is a professional DJ specializing in Bollywood, EDM, and fusion music.",
    languages: ["Hindi", "English", "Marathi"],
    rating: 4.6,
    experience: "7+ years"
  },
  {
    id: 5,
    name: "Arjun Singh",
    category: "Motivational Speaker",
    priceRange: "₹75,000 - ₹1,50,000",
    location: "Hyderabad, Telangana",
    bio: "Arjun is a dynamic motivational speaker who has inspired thousands through his powerful talks.",
    languages: ["Hindi", "English", "Telugu"],
    rating: 4.9,
    experience: "12+ years"
  },
  {
    id: 6,
    name: "Zara Khan",
    category: "Folk Singer",
    priceRange: "₹35,000 - ₹70,000",
    location: "Jaipur, Rajasthan",
    bio: "Zara is a talented folk singer who preserves and promotes traditional Rajasthani music.",
    languages: ["Hindi", "Rajasthani", "English"],
    rating: 4.8,
    experience: "9+ years"
  }
];

export const categories = [
  "Classical Singer",
  "Contemporary Dancer", 
  "Stand-up Comedian",
  "DJ",
  "Motivational Speaker",
  "Folk Singer",
  "Bollywood Singer",
  "Classical Dancer",
  "Magician",
  "Poet"
];

export const locations = [
  "Mumbai, Maharashtra",
  "Delhi, NCR", 
  "Bangalore, Karnataka",
  "Pune, Maharashtra",
  "Hyderabad, Telangana",
  "Jaipur, Rajasthan",
  "Chennai, Tamil Nadu",
  "Kolkata, West Bengal"
];

export const priceRanges = [
  "₹10,000 - ₹30,000",
  "₹30,000 - ₹60,000", 
  "₹60,000 - ₹1,00,000",
  "₹1,00,000+"
]; 