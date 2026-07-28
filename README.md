# AmazePMS — All-In-One Hotel & Property Management Platform

<div align="center">

![AmazePMS Banner](https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-amaze--property.vercel.app-6366F1?style=for-the-badge&logo=vercel)](https://amaze-property.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

</div>

---

## 📋 Project Overview

**AmazePMS** is a $100M-caliber SaaS landing page for a **Hotel & Property Management System** targeting independent hotels, boutique guesthouses, and multi-property chains. The platform consolidates front desk management, two-way OTA channel syncing (Booking.com, Airbnb, Expedia, and 17+ more), direct booking engines, POS & billing, and real-time housekeeping — all in a single, unified dashboard.

This repository is a **hiring assignment showcase** demonstrating a premium, production-ready landing page with:

- Deep-navy slate aesthetic with glassmorphism and ambient glow effects
- Interactive 3D-tilt hero dashboard preview
- Asymmetric bento-grid feature showcase
- Fully responsive across mobile, tablet, and desktop
- Smooth Lenis scroll with anchor navigation
- Glassmorphic Demo Modal with form validation

**Live URL:** [https://amaze-property.vercel.app/](https://amaze-property.vercel.app/)

---

## 🎯 Target Domain

> **Hotel & Property Management System (PMS)**

Primary audience: Hotel General Managers, Revenue Managers, and Property Owners who need to replace fragmented toolchains (separate channel managers, spreadsheet bookings, paper housekeeping) with a single, intelligent platform.

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** (App Router) | 16.x | React framework with server components & routing |
| **TypeScript** | 5.x | Static type safety across all components |
| **Tailwind CSS** | 4.x | Utility-first styling with custom design tokens |
| **Framer Motion** | 12.x | Page animations, 3D transforms, micro-interactions |
| **Lenis** | 1.x | Ultra-smooth scroll with momentum |
| **Lucide React** | Latest | Consistent, lightweight icon system |
| **clsx + tailwind-merge** | Latest | Conditional class merging |

---

## ✨ Feature Highlights

### 🎨 Visual Design
- **Deep-navy slate aesthetic** — `#0a0f1d` base with indigo/purple/cyan accent palette
- **Glassmorphism** — `backdrop-blur-xl` + translucent borders throughout all cards and modals
- **Ambient grid background** — subtle dot/line pattern in the hero section
- **Radial gradient glows** — `bg-[radial-gradient(...)]` ambient light behind key content areas
- **Gradient headlines** — `from-indigo-400 via-purple-400 to-cyan-400` for primary headings

### 🦸 Hero Section
- **Mac-style dark browser window** framing a high-res dashboard image
- **3D mouse-tracked tilt** via Framer Motion `useMotionValue` + `useTransform` (desktop only)
- **Floating glass stat cards** with infinite float animations:
  - Top-right: **Occupancy Rate: 98% ↗** (emerald badge)
  - Bottom-left: **Monthly Revenue: $34,850** (indigo badge)
- Mobile-optimised stat cards shown inline below the browser window

### 📋 Interactive Demo Modal
- Triggered by any **"Book a Free Demo"** or **"Get Started"** CTA button site-wide
- **Glassmorphic panel** with backdrop blur and gradient top border
- **Form fields**: Full Name, Hotel/Property Name, Work Email, Phone Number
- **Real-time validation** with animated error messages (Framer Motion height animation)
- **Loading state** with spinner during simulated API submission
- **Success state** with animated checkmark and confirmation message:  
  *"Thank you! Our team will contact you within 2 hours."*
- Closes on `Escape` key or backdrop click; body scroll locked while open

### 🧩 Sections
| Section | Description |
|---|---|
| **Navbar** | Sticky glassmorphic header with smooth scroll anchors + mobile slide-in drawer |
| **Hero** | Full-screen with 3D dashboard preview + floating KPI cards |
| **Trust Bar** | Animated logo marquee of partner OTAs / integrations |
| **Replacement Section** | Side-by-side comparison cards (old vs new stack) |
| **Interactive Showcase** | Tabbed feature tour with animated image transitions |
| **Metrics Section** | Animated count-up statistics |
| **Testimonials** | Customer quote cards with star ratings |
| **Pricing** | Monthly/Annual toggle with 3-tier pricing cards |
| **FAQ** | Animated accordion with `AnimatePresence` height transitions |
| **CTA Section** | Full-width call-to-action with demo modal triggers |
| **Footer** | Links, legal, and social icons |

### 📱 Mobile Responsiveness
- Zero horizontal scroll at all viewport widths
- Mobile drawer with **slide-in from right** animation (spring easing)
- Tab bars are horizontally scrollable without visible scrollbar (`no-scrollbar`)
- Hero CTA buttons stack vertically on mobile
- Floating stat cards replaced with inline cards on `< sm` breakpoint

### 🌊 Smooth Scroll
- **Lenis** integrated at root layout level via `SmoothScrolling` component
- All navbar anchor links (`#modules`, `#features`, `#pricing`, `#faq`) trigger smooth scroll via Lenis' `lerp: 0.1` interpolation
- Lenis CSS classes applied in `globals.css` per official recommendations

---

## 🚀 Local Setup & Installation

### Prerequisites

- **Node.js** `>= 18.x`
- **pnpm** `>= 8.x` — install via `npm install -g pnpm` if not present

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/your-username/amaze-property.git
cd amaze-property

# 2. Install dependencies
pnpm install

# 3. Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

### Lint

```bash
pnpm lint
```

---

## 📁 Project Structure

```
amaze-property/
├── app/
│   ├── globals.css          # Global styles, Lenis CSS, keyframe animations
│   ├── layout.tsx           # Root layout with Inter font & SmoothScrolling
│   └── page.tsx             # Main page — composes all sections
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Section.tsx          # Reusable section wrapper
│   │   │   └── SmoothScrolling.tsx  # Lenis smooth scroll provider
│   │   ├── motion/
│   │   │   ├── FadeIn.tsx           # Reusable fade-in animation wrapper
│   │   │   └── SpotlightCard.tsx    # Interactive spotlight hover card
│   │   ├── sections/
│   │   │   ├── Navbar.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── TrustBar.tsx
│   │   │   ├── ReplacementSection.tsx
│   │   │   ├── InteractiveShowcase.tsx
│   │   │   ├── MetricsSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── GradientHeading.tsx
│   │       └── DemoModal.tsx        # Glassmorphic consultation modal
│   ├── context/
│   │   └── DemoModalContext.tsx     # Global modal open/close state
│   └── lib/
│       └── utils.ts                 # cn() utility (clsx + tailwind-merge)
├── public/                          # Static assets
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🌐 Live Deployment

**Deployed on Vercel:**  
🔗 [https://amaze-property.vercel.app/](https://amaze-property.vercel.app/)

Continuous deployment is configured via Vercel's GitHub integration — every push to `main` triggers an automatic production build.

---

## 📄 License

This project is created as part of a frontend engineering hiring assignment. All design and code are original work.
