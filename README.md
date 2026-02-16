# BlueOak Ventures - Next.js Website

This is the Next.js version of the BlueOak Ventures website, converted from the original HTML/CSS/JS implementation.

## Features

- **Next.js 14** with TypeScript
- **Hero Section** with scattered business people photos and glassmorphism design
- **Responsive Design** that works on all devices
- **Modern CSS Modules** for component-scoped styling
- **Image Optimization** using Next.js Image component
- **SEO Optimized** with proper meta tags and structured data

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── components/
│   ├── HeroSection.tsx      # Hero section with business people photos
│   └── Navigation.tsx       # Navigation bar component
├── pages/
│   ├── _app.tsx            # App wrapper with global styles
│   ├── _document.tsx       # Document structure
│   └── index.tsx           # Main homepage
├── styles/
│   ├── globals.css         # Global styles and animations
│   ├── HeroSection.module.css  # Hero section styles
│   └── Navigation.module.css   # Navigation styles
└── public/                 # Static assets
```

## Hero Section Design

The hero section features:
- **10 scattered business people photos** around the page
- **Central glassmorphism content card** with company tagline
- **Indian business professionals** in suits showing success and empowerment
- **Funding amounts** displayed as badges (₹15Cr - ₹50Cr raised)
- **Hover effects** with simple scale animations (no floating)
- **Responsive grid layout** that adapts to different screen sizes

## Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **CSS Modules** - Scoped styling
- **Next/Image** - Optimized images
- **Google Fonts** - Playfair Display & Crimson Text

## Original Design

This Next.js version maintains the exact design and functionality of the original HTML website, including:
- White/light theme with professional blue color scheme
- Serif fonts (Playfair Display, Crimson Text)
- Static elements with hover effects only
- Business empowerment theme with Indian professionals
- Funding range: ₹50 Lakhs to ₹296 Crores