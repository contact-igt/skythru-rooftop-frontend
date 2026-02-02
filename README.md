# SkyThru Rooftop Landing Page - Project Overview

## 📁 Project Structure

```
skythru-hotel/
├── public/
│   └── index.html              # HTML template with Pacifico font
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed navigation bar
│   │   ├── FullscreenMenu.jsx  # Animated fullscreen menu
│   │   ├── HeroSection.jsx     # Hero section with animations
│   │   ├── EventsIntroSection.jsx  # Event packages intro
│   │   ├── PackagesSection.jsx     # Package cards display
│   │   ├── WhyChooseSection.jsx    # Features section
│   │   └── EnquiryCTA.jsx      # Contact CTA section
│   ├── data/
│   │   └── constants.js        # Centralized data & images
│   ├── App.jsx                 # Main app component
│   ├── index.js                # React entry point
│   └── index.css               # Global styles with Tailwind
├── package.json                # Dependencies
├── tailwind.config.js          # Tailwind configuration
└── postcss.config.js           # PostCSS configuration
```

## 🎨 Components Overview

### **Navbar.jsx**
- Fixed navigation bar with logo
- Menu toggle functionality
- Responsive design with hidden links on mobile

### **FullscreenMenu.jsx**
- Animated overlay menu using Framer Motion
- Smooth slide-in/out transitions
- Navigation links to all sections

### **HeroSection.jsx**
- Main hero with large typography
- Rotating images with scroll-based animations
- CTA buttons for packages and booking
- Floating feature elements

### **EventsIntroSection.jsx**
- Introduction to event packages
- Animated circular elements
- Feature highlights with icons

### **PackagesSection.jsx**
- Grid layout of 4 event packages
- Package cards with images and pricing
- Feature lists with checkmarks
- Booking CTAs

### **WhyChooseSection.jsx**
- 6 feature cards in grid layout
- Icons from lucide-react
- Hover effects and animations

### **EnquiryCTA.jsx**
- Final call-to-action section
- Enquiry button
- Closing message

## 📦 Dependencies

- **react** (^18.2.0) - Core React library
- **react-dom** (^18.2.0) - React DOM rendering
- **framer-motion** (^10.16.4) - Animation library
- **lucide-react** (^0.292.0) - Icon library
- **tailwindcss** (^3.3.5) - Utility-first CSS framework
- **react-scripts** (5.0.1) - Create React App scripts

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 🎯 Key Features

- ✅ Fully modular component architecture
- ✅ Centralized data management
- ✅ Smooth animations with Framer Motion
- ✅ Responsive design with Tailwind CSS
- ✅ Custom fonts (Pacifico for branding)
- ✅ Scroll-based animations
- ✅ Interactive hover effects
- ✅ Clean, maintainable code structure

## 🎨 Design System

### Colors
- **Primary Green:** `#1b4d3e`
- **Accent Orange:** `#f59e0b`
- **Background:** `#f9f9f9`
- **Text:** `#1a1a1a`

### Typography
- **Headings:** Serif font
- **Logo:** Pacifico (cursive)
- **Body:** Sans-serif system fonts

## 📝 Notes

- All images are sourced from Unsplash
- Components are fully reusable and customizable
- Data is centralized in `constants.js` for easy updates
- Tailwind CSS provides utility-first styling
- Framer Motion handles all animations
