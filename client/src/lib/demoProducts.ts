import type { Product } from "@ecommerce/shared";

const shoe = (
  id: string,
  name: string,
  slug: string,
  priceCents: number,
  images: string[],
  rating: number,
  description: string,
  category: string = "Running"
): Product => ({
  id,
  name,
  slug,
  description,
  priceCents,
  currency: "USD",
  images,
  category,
  tags: ["sneaker"],
  rating,
  reviewCount: Math.round(rating * 14),
  inStock: true,
  createdAt: "2026-01-01"
});

export const demoProducts: Product[] = [
  shoe(
    "p1",
    "Velocity One",
    "velocity-one",
    13400,
    [
      "https://images.pexels.com/photos/3962287/pexels-photo-3962287.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/3962289/pexels-photo-3962289.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
    ],
    4.9,
    "Engineered for fast city miles, with responsive cushioning and a breathable performance upper. Premium aerodynamic design meets everyday comfort."
  ),
  shoe(
    "p2",
    "Aero Form",
    "aero-form",
    11800,
    [
      "https://images.pexels.com/photos/3945681/pexels-photo-3945681.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/1055692/pexels-photo-1055692.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
    ],
    4.8,
    "Lightweight design with aerodynamic technology for speed enthusiasts. Responsive sole and breathable mesh create the perfect balance."
  ),
  shoe(
    "p3",
    "Sprint Grid",
    "sprint-grid",
    12600,
    [
      "https://images.pexels.com/photos/3962293/pexels-photo-3962293.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/3962291/pexels-photo-3962291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/3945680/pexels-photo-3945680.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
    ],
    4.7,
    "Advanced grid-pattern sole for superior traction and stability. Track-focused design with maximum performance in mind."
  ),
  shoe(
    "p4",
    "Drift Runner",
    "drift-runner",
    10900,
    [
      "https://images.pexels.com/photos/3945682/pexels-photo-3945682.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/3945684/pexels-photo-3945684.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/3945686/pexels-photo-3945686.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
    ],
    4.6,
    "Smooth, responsive cushioning designed for distance runners. Comfort meets performance in every stride with premium padding."
  ),
  shoe(
    "p5",
    "Pulse 03",
    "pulse-03",
    14200,
    [
      "https://images.pexels.com/photos/3962292/pexels-photo-3962292.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/1055695/pexels-photo-1055695.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/1055694/pexels-photo-1055694.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
    ],
    4.9,
    "Third generation of our best-selling line. Enhanced cushioning with energy return technology provides ultimate comfort and performance."
  ),
  shoe(
    "p6",
    "Cloud Court",
    "cloud-court",
    9800,
    [
      "https://images.pexels.com/photos/3945685/pexels-photo-3945685.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/3962288/pexels-photo-3962288.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/1432405/pexels-photo-1432405.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
    ],
    4.5,
    "Multi-sport versatile shoe perfect for court activities. Premium comfort and support for extended wear and training sessions.",
    "Training"
  ),
  shoe(
    "p7",
    "Night Shift",
    "night-shift",
    13700,
    [
      "https://images.pexels.com/photos/1432405/pexels-photo-1432405.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/1432401/pexels-photo-1432401.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/1432404/pexels-photo-1432404.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
    ],
    4.8,
    "Sleek black design with reflective accents for night running. Stay visible and comfortable during evening training sessions."
  ),
  shoe(
    "p8",
    "Signal Red",
    "signal-red",
    12900,
    [
      "https://images.pexels.com/photos/1470095/pexels-photo-1470095.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/1470096/pexels-photo-1470096.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/1470097/pexels-photo-1470097.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
    ],
    4.7,
    "Bold red colorway with maximum visibility. High-performance running shoe designed for competitive athletes and training."
  ),
  shoe(
    "p9",
    "Trackline 9",
    "trackline-9",
    11500,
    [
      "https://images.pexels.com/photos/3945687/pexels-photo-3945687.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/3962294/pexels-photo-3962294.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
    ],
    4.6,
    "Ninth edition of our legendary track shoe. Minimal design with maximum performance for serious runners.",
    "Track"
  ),
  shoe(
    "p10",
    "Altitude Max",
    "altitude-max",
    14900,
    [
      "https://images.pexels.com/photos/1432403/pexels-photo-1432403.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/1432402/pexels-photo-1432402.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/1432406/pexels-photo-1432406.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
    ],
    4.9,
    "Premium cushioning and support for high-altitude training. Experience the peak of running comfort and performance."
  )
];
