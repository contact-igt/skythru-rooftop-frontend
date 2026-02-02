// --- Assets & Data ---
export const IMAGES = {
  hero_main: "/assets/skythru_event.png", // Wedding setup
  hero_small: "/assets/skythru_img1.jpg",
  party: "/assets/skythru_party.JPEG",
  silver: "/assets/silver_package.png", // Candlelight intimate
  gold: "/assets/gold_package.png", // Fashion/Event shoot vibe
  platinum: "/assets/platinum_package.jpg", // Luxury dining
  family: "/assets/skythru_friends.png", // Balloons/Group
  celebrate: "/assets/skythru_celebrate.avif", // Celebration  
  decor_spin: "/assets/skythru_small.png", // Celebration decor
  why_choose: "https://images.unsplash.com/photo-1520854221256-17451cc330e7?auto=format&fit=crop&q=80&w=600" // Rooftop view
};

export const PACKAGES = [
  {
    id: "01",
    title: "Silver Package",
    price: "₹1,999",
    per: "per couple",
    desc: "Simple, elegant romantic celebrations in a private cabin.",
    features: [
      "Private cabin with candles",
      "Flower petal decorations",
      "Candle light décor setup"
    ],
    addons: ["Live music", "Crackers (₹500)", "Cake (₹500)"],
    image: IMAGES.silver,
    bg: "bg-[#e8f5e9]",
    accent: "text-[#1b4d3e]"
  },
  {
    id: "02",
    title: "Gold Package",
    price: "₹3,999",
    per: "per couple",
    desc: "Romantic surprises & memorable celebrations with entertainment.",
    features: [
      "Welcome photo & flower shower",
      "Surprise video in projector room",
      // "Live musicians & DSLR photo",
      "Half kg cake & Electric crackers",
      "Photo hanging decoration"
    ],
    image: IMAGES.gold,
    bg: "bg-[#fff8e1]",
    accent: "text-[#f59e0b]"
  },
  {
    id: "03",
    title: "Platinum Package",
    price: "₹5,999",
    per: "per couple",
    desc: "Premium proposals & luxury surprises with a full 4-course meal.",
    features: [
      "All Gold features included",
      "4-Course Meal (Soup to Dessert)",
      "2 Juices & 2 Mocktails",
      "Electric cracker shot",
      "Decorated cabin dinner"
    ],
    image: IMAGES.platinum,
    bg: "bg-[#e3f2fd]",
    accent: "text-[#0284c7]"
  },
  {
    id: "04",
    title: "Friends & Family",
    price: "₹3,499",
    per: "group package",
    desc: "Perfect for birthdays, group celebrations & family gatherings.",
    features: [
      "Balloon arch with photos",
      "Welcome photo & flowers",
      "Half kg cake & Live musician",
      "DSLR photography (soft copy)",
      "Food cost applicable extra"
    ],
    image: IMAGES.family,
    bg: "bg-[#fce4ec]",
    accent: "text-[#e11d48]"
  },
  {
    id: "05",
    title: "Celebration Package",
    price: "",
    per: "group package",
    desc: "An exclusive banquet hall for birthdays and special occasions, accommodating 20+ guests in a comfortable and elegant setting.",
    features: [
      "Buffet service minimum 25 members",
    ],
    image: IMAGES.celebrate,
    bg: "bg-[#e8f5e9]",
    accent: "text-[#1b4d3e]"
  },
];

export const WHY_CHOOSE_ITEMS = [
  { title: "A/C Rooftop", desc: "Fully air-conditioned rooftop comfort.", icon: "Wind" },
  { title: "Private Cabins", desc: "Intimate celebrations in privacy.", icon: "Heart" },
  { title: "Pro Execution", desc: "Professional décor & event execution.", icon: "Star" },
  { title: "Live Music", desc: "Live music & photography options.", icon: "Music" },
  { title: "Extensive Menu", desc: "Wide range of food available.", icon: "Utensils" },
  { title: "Perfect Ambience", desc: "Memories that last forever.", icon: "Camera" },
];

export const GALLERY_IMAGES = [
  { id: 1, src: "/assets/galleryimg1.png", alt: "Elegant Wedding Setup", category: "Wedding" },
  { id: 2, src: "/assets/galleryimg2.png", alt: "Birthday Party Celebration", category: "Birthday" },
  { id: 3, src: "/assets/galleryimg3.png", alt: "Romantic Candlelight Dinner", category: "Romantic" },
  { id: 4, src: "/assets/galleryimg4.png", alt: "Special Event Photography", category: "Events" },
  { id: 5, src: "/assets/galleryimg5.png", alt: "Luxury Dining Experience", category: "Dining" },
  { id: 6, src: "/assets/galleryimg6.png", alt: "Family & Friends Gathering", category: "Family" },
  { id: 7, src: "/assets/galleryimg7.png", alt: "Celebration Banquet Hall", category: "Celebration" },
  { id: 8, src: "/assets/galleryimg8.png", alt: "Beautiful Event Decor", category: "Decor" },
];

// Instagram Videos - Replace with your actual Instagram video embeds
export const INSTAGRAM_VIDEOS = [
  {
    id: 1,
    embedUrl: "/videos/video1.mp4",
    thumbnail: "/assets/thumbnail_img1.png",
    title: "Birthday Celebration Highlights",
    views: "2.5K"
  },
  {
    id: 2,
    embedUrl: "/videos/video2.mp4",
    thumbnail: "/assets/thumbnail_img2.png",
    title: "Wedding Setup Timelapse",
    views: "3.8K"
  },
  {
    id: 3,
    embedUrl: "/videos/video3.mp4",
    thumbnail: "/assets/thumbnail_img3.png",
    title: "Romantic Dinner Experience",
    views: "1.9K"
  },
  {
    id: 4,
    embedUrl: "/videos/video4.mp4",
    thumbnail: "/assets/thumbnail_img4.png",
    title: "Group Celebration Moments",
    views: "4.2K"
  },
  {
    id: 5,
    embedUrl: "/videos/video5.mp4",
    thumbnail: "/assets/thumbnail_img5.png",
    title: "Luxury Event Setup",
    views: "2.1K"
  },
];
