# Nexcent Landing Page

## 📌 Project Overview
Nexcent is a premium, high-fidelity modern web application engineered specifically for membership organizations, national associations, and club groups. This landing page is built to convey a sophisticated, trustworthy, and visually exceptional experience for discerning enterprise customers. 

The project strictly follows clean architecture principles, decoupling the UI presentation from the data layer. All copy, images, icons, and structured data are seamlessly fed into the components from modular JSON files—guaranteeing high maintainability, extreme scalability, and lightning-fast Server-Side Rendering (SSR).

## ✨ Key Features
- **Data-Driven Architecture:** Zero hardcoded content. Every section (Hero, Testimonials, Blogs, Stats) is dynamically rendered from structured JSON schemas using runtime Zod validation.
- **Premium Aesthetics & Glassmorphism:** Elevated UI featuring frosted-glass elements (`backdrop-blur`), subtle glowing gradients, smooth micro-interactions, and deep drop-shadows to build immediate user trust.
- **Auto-Switching Testimonial Carousel:** A custom, fully responsive React client component that loops through high-quality customer reviews with smooth 1-second cross-fade animations every 11 seconds.
- **Live-Animated Elements:** CSS keyframe animations breathe life into the UI, such as the gentle continuous "floating" loop on the Hero section imagery.
- **Modular & Single-Responsibility Components:** UI blocks are completely self-contained and heavily reusable, making scaling the application effortless.
- **Responsive by Design:** Meticulously crafted using Tailwind breakpoints (`sm`, `md`, `lg`) to ensure pixel-perfect rendering across mobile devices, tablets, and desktop monitors.

## 🛠 Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **UI Library:** React
- **Styling:** Tailwind CSS (v4 structure)
- **Data Validation:** Zod (Strict schema definitions)
- **Icons:** Lucide React
- **Typography & Font Optimization:** `next/font` (Inter)

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.