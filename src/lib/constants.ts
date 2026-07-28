import { CalendarCheck, RefreshCw, Globe, CreditCard, Sparkles, BarChart3 } from "lucide-react";

export const NAV_LINKS = [
  { label: 'Modules', href: '#modules' },
  { label: 'Channel Manager', href: '#channel-manager' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About Us', href: '#about' },
];

export const CORE_MODULES = [
  {
    id: 'front-desk',
    title: 'Smart Front Desk',
    description: 'Effortless check-in, check-out, and visual room grid management.',
    icon: CalendarCheck,
  },
  {
    id: 'channel-manager',
    title: '2-Way Channel Manager',
    description: 'Instantly sync rates and availability across Booking.com, Airbnb, and Agoda.',
    icon: RefreshCw,
  },
  {
    id: 'booking-engine',
    title: 'Direct Booking Engine',
    description: 'Drive zero-commission bookings directly from your hotel website.',
    icon: Globe,
  },
  {
    id: 'pos-billing',
    title: 'Integrated POS & Billing',
    description: 'Unify restaurant, spa, and amenity charges into single room folios.',
    icon: CreditCard,
  },
  {
    id: 'housekeeping',
    title: 'Housekeeping Automation',
    description: 'Assign tasks and track clean/dirty room status in real time.',
    icon: Sparkles,
  },
  {
    id: 'analytics',
    title: 'Revenue Analytics',
    description: 'Track Occupancy Rate, ADR, and RevPAR with actionable insights.',
    icon: BarChart3,
  },
];
