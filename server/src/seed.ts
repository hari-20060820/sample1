import "dotenv/config";
import mongoose from "mongoose";
import { ProductModel } from "./models/Product.js";

const PRODUCTS = [
  {
    name: "Velocity One",
    slug: "velocity-one",
    description: "Engineered for fast city miles, with responsive cushioning and a breathable performance upper. Premium aerodynamic design meets everyday comfort.",
    priceCents: 13400,
    currency: "USD",
    images: [
      "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/3945681/pexels-photo-3945681.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/3945680/pexels-photo-3945680.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
    ],
    category: "Running",
    tags: ["running", "speed", "performance"],
    rating: 4.9,
    reviewCount: 128,
    inStock: true,
    stockQty: 45
  },
  {
    name: "Aero Form",
    slug: "aero-form",
    description: "Lightweight design with aerodynamic technology for speed enthusiasts. Responsive sole and breathable mesh create the perfect balance.",
    priceCents: 11800,
    currency: "USD",
    images: [
      "https://images.pexels.com/photos/3945682/pexels-photo-3945682.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/3945684/pexels-photo-3945684.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/3945685/pexels-photo-3945685.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
    ],
    category: "Running",
    tags: ["running", "lightweight", "speed"],
    rating: 4.8,
    reviewCount: 115,
    inStock: true,
    stockQty: 38
  },
  {
    name: "Sprint Grid",
    slug: "sprint-grid",
    description: "Advanced grid-pattern sole for superior traction and stability. Track-focused design with maximum performance in mind.",
    priceCents: 12600,
    currency: "USD",
    images: [
      "https://images.pexels.com/photos/3945686/pexels-photo-3945686.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/3945687/pexels-photo-3945687.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/3962288/pexels-photo-3962288.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
    ],
    category: "Running",
    tags: ["running", "track", "athletic"],
    rating: 4.7,
    reviewCount: 98,
    inStock: true,
    stockQty: 52
  },
  {
    name: "Drift Runner",
    slug: "drift-runner",
    description: "Smooth, responsive cushioning designed for distance runners. Comfort meets performance in every stride with premium padding.",
    priceCents: 10900,
    currency: "USD",
    images: [
      "https://images.pexels.com/photos/3962292/pexels-photo-3962292.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/3962293/pexels-photo-3962293.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/3962294/pexels-photo-3962294.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
    ],
    category: "Running",
    tags: ["running", "distance", "comfort"],
    rating: 4.6,
    reviewCount: 87,
    inStock: true,
    stockQty: 61
  },
  {
    name: "Pulse 03",
    slug: "pulse-03",
    description: "Third generation of our best-selling line. Enhanced cushioning with energy return technology provides ultimate comfort and performance.",
    priceCents: 14200,
    currency: "USD",
    images: [
      "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/1055692/pexels-photo-1055692.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/1055694/pexels-photo-1055694.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
    ],
    category: "Running",
    tags: ["running", "cushioned", "energy"],
    rating: 4.9,
    reviewCount: 142,
    inStock: true,
    stockQty: 28
  },
  {
    name: "Cloud Court",
    slug: "cloud-court",
    description: "Multi-sport versatile shoe perfect for court activities. Premium comfort and support for extended wear and training sessions.",
    priceCents: 9800,
    currency: "USD",
    images: [
      "https://images.pexels.com/photos/1055695/pexels-photo-1055695.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/1432405/pexels-photo-1432405.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/1432401/pexels-photo-1432401.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
    ],
    category: "Training",
    tags: ["training", "court", "versatile"],
    rating: 4.5,
    reviewCount: 76,
    inStock: true,
    stockQty: 34
  },
  {
    name: "Night Shift",
    slug: "night-shift",
    description: "Sleek black design with reflective accents for night running. Stay visible and comfortable during evening training sessions.",
    priceCents: 13700,
    currency: "USD",
    images: [
      "https://images.pexels.com/photos/1432404/pexels-photo-1432404.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/1432403/pexels-photo-1432403.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/1432402/pexels-photo-1432402.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
    ],
    category: "Running",
    tags: ["running", "night", "reflective"],
    rating: 4.8,
    reviewCount: 104,
    inStock: true,
    stockQty: 41
  },
  {
    name: "Signal Red",
    slug: "signal-red",
    description: "Bold red colorway with maximum visibility. High-performance running shoe designed for competitive athletes and training.",
    priceCents: 12900,
    currency: "USD",
    images: [
      "https://images.pexels.com/photos/1470095/pexels-photo-1470095.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/1470096/pexels-photo-1470096.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/1470097/pexels-photo-1470097.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
    ],
    category: "Running",
    tags: ["running", "competitive", "vibrant"],
    rating: 4.7,
    reviewCount: 93,
    inStock: true,
    stockQty: 37
  },
  {
    name: "Trackline 9",
    slug: "trackline-9",
    description: "Ninth edition of our legendary track shoe. Minimal design with maximum performance for serious runners.",
    priceCents: 11500,
    currency: "USD",
    images: [
      "https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/3962287/pexels-photo-3962287.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/3962289/pexels-photo-3962289.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
    ],
    category: "Track",
    tags: ["track", "minimal", "lightweight"],
    rating: 4.6,
    reviewCount: 82,
    inStock: true,
    stockQty: 29
  },
  {
    name: "Altitude Max",
    slug: "altitude-max",
    description: "Premium cushioning and support for high-altitude training. Experience the peak of running comfort and performance.",
    priceCents: 14900,
    currency: "USD",
    images: [
      "https://images.pexels.com/photos/3962291/pexels-photo-3962291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/3962290/pexels-photo-3962290.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      "https://images.pexels.com/photos/3945680/pexels-photo-3945680.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
    ],
    category: "Running",
    tags: ["running", "premium", "altitude"],
    rating: 4.9,
    reviewCount: 136,
    inStock: true,
    stockQty: 23
  }
];

async function seed() {
  try {
    const uri = process.env.MONGODB_URI ?? "mongodb://127.0.0.1:27017/ecommerce";
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");

    // Clear existing products
    await ProductModel.deleteMany({});
    console.log("Cleared existing products");

    // Insert new products
    const inserted = await ProductModel.insertMany(PRODUCTS);
    console.log(`✓ Seeded ${inserted.length} products with images`);

    // Display summary
    console.log("\nProducts created:");
    inserted.forEach(p => {
      console.log(`  • ${p.name} (${p.images.length} images) - $${(p.priceCents / 100).toFixed(2)}`);
    });

    await mongoose.connection.close();
    console.log("\nSeed completed successfully!");
  } catch (error) {
    console.error("Seed failed:", error);
    process.exit(1);
  }
}

seed();
