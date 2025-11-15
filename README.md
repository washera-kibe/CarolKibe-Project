# AllThingsCraft — Craft & DIY Supplies Website
Live Demo
Here is my deployed link here

# Project Overview
AllThingsCraft is a modern, responsive React-based web platform dedicated to showcasing and selling craft and DIY supplies.
The website focuses on:
## 1. High-quality product presentation
## 2. A warm, artistic brand ambiance
## 3. Fast and interactive user experience
## 4. Clear navigation with a premium, creative feel
## 5. The design is inspired by studio workspaces, watercolor palettes, brushes, and wood textures — emphasizing creativity and craftsmanship.

## Brand Identity
# Color Pallet
Color Purpose	Value	Usage
Primary	#06B6D4 (Cyan 500)	Buttons, brand highlights, call-to-actions
Secondary	#111827 (Slate 900)	Headlines, important text
Light Background	#FFFFFF	Sections, cards, containers
Neutral Gray	#6B7280	Descriptions, paragraph text
Soft Shadow	rgba(0,0,0,0.05)	Card depth & elevation

## Rationale
- Cyan matches modern craft brands and pops beautifully against neutral wood textures.
- Dark slate gives strong readability and visual authority.
- White & light grays keep the design breathable and artistic.

# Typography
## Headings
Font: Inter ExtraBold / Bold
Reasoning: Clean, modern, and sharp — helps contrast over busy background images.
## Body Text
Font: Inter Regular / Medium
Reasoning: Optimized for readability, especially with dense descriptions and product listings.

# Design Decisions
## Layout Adherence & Spacing
Spacing follows an 8-point grid for professional consistency.
Visual alignment follows the rule of thirds, especially in the hero section.

# Content padding is responsive:
px-6 for mobile
px-10 for desktop
Sections use balanced vertical spacing (py-16) for a premium, airy feel.

## Creative Departures & Strategy Decisions
Hero text is center-aligned for emotional impact with a background that visually represents craft.
Product section uses colored price labels + floating add-to-cart icons for modern e-commerce feel.
New Services section was redesigned using Swiper slider for dynamic motion and improved engagement.
MD breakpoint (768px) shows 2-column layout to balance text and imagery without overwhelming small screens.

## Component Architecture
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── Hero.jsx
 │    ├── Stats.jsx
 │    ├── AboutSection.jsx
 │    ├── ProductsSection.jsx
 │    ├── NewServices.jsx   (Swiper slider)
 │    └── Footer.jsx
 ├── assets/
 ├── App.jsx
 └── main.jsx

## Reusability Strategy
Reusable Section Wrappers
Service Cards and Product Cards generated from arrays
Developed with clear separation: UI → Logic → Data

## Performance Optimizations
Lazy loaded images for faster initial load
Compression-friendly JPG asset selection
Tailwind utility classes for minimal CSS footprint
React state optimized with useState and clean mapping
Swiper autoplay disabled on user drag for smoother UX

## Image Credits
All product and hero section images are sourced from:
Unsplash
Freepik
Internal product photos (uploaded manually)
Brand product packages (e.g., Palette Knife Set)
Proper usage is maintained under Unsplash’s free commercial license.

## Installation & Setup
git clone <repo-url>
cd allthingscraft
npm install
npm run dev

## My project will run at:
http://localhost:5173

## Technologies Used
React 18
Vite
Tailwind CSS 3
Swiper.js
Lucide Icons
JavaScript (ES2022)

# Challenges & Solutions
## 1. Complex Product Grid Layout
Issue: Overlapping elements when displaying price + add-to-cart icon
Solution: Used relative image container + absolute bottom-2 left-2 for icon.
## 2. Images Not Rendering with Vite
Issue: Direct paths like /src/assets/*.jpg not loading
Solution: Ensured all images are inside /public or imported them properly.
## 3. Responsive Hero Section Over Busy Background
Issue: Text was not readable on certain background images
Solution: Added soft shadow and improved font weight contrast.
## 4. Swiper Rendering Too Many Cards on Mobile
Issue: Default slidesPerView caused overflow
Solution: Implemented responsive breakpoints.

## Future Improvements
Add user authentication (login, register)
Integrate cart system with global state (Redux or Context API)
Build product detail page with dynamic routing
Implement payments with M-Pesa or Stripe
Admin dashboard for uploading products
Backend API for real product management
