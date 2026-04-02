// ─── SERVICES DATA ───────────────────────────────────────────────────────────
// To add a new service:
// 1. Copy one block below and paste it at the end
// 2. Change id, name, tagline, description, startingPrice, color, iconColor
// 3. Add image to src/assets/services/[id].webp
// That's it — no other code changes needed.
// ─────────────────────────────────────────────────────────────────────────────

import plumbingImg from "../assets/services/plumbing.webp";
import electricianImg from "../assets/services/electrician.webp";
import acRepairImg from "../assets/services/ac-repair.webp";
import cleaningImg from "../assets/services/cleaning.webp";

export const services = [
  {
    id: "plumbing",
    name: "Plumbing",
    tagline: "Leaks fixed, pipes secured",
    description: "Tap repairs, pipe leaks, drain cleaning and full plumbing checks by verified professionals.",
    startingPrice: 199,
    color: "#eff6ff",
    iconColor: "#2563eb",
    image: plumbingImg,
  },
  {
    id: "electrician",
    name: "Electrician",
    tagline: "Safe, certified electrical work",
    description: "Switch repairs, fan installation, wiring checks and MCB fixes by certified electricians.",
    startingPrice: 149,
    color: "#fefce8",
    iconColor: "#ca8a04",
    image: electricianImg,
  },
  {
    id: "ac-repair",
    name: "AC Repair",
    tagline: "Stay cool, always",
    description: "AC servicing, gas refilling, installation and cooling fixes by expert technicians.",
    startingPrice: 399,
    color: "#f0fdf4",
    iconColor: "#16a34a",
    image: acRepairImg,
  },
  {
    id: "cleaning",
    name: "Home Cleaning",
    tagline: "Spotless home, happy life",
    description: "Deep cleaning, kitchen sanitization, bathroom scrubbing and full home cleaning services.",
    startingPrice: 299,
    color: "#fdf4ff",
    iconColor: "#a21caf",
    image: cleaningImg,
  },
];