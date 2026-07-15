export type Product = { id: string; name: string; slug: string; description: string; priceCents: number; currency: string; images: string[]; category: string; tags: string[]; rating: number; reviewCount: number; inStock: boolean; stockQty?: number; createdAt: string };
export type WishlistItem = { productId: string; addedAt: string; note?: string; quantity: number; source: string[] };
export type Wishlist = { id: string; ownerId: string | null; name: string; items: WishlistItem[]; createdAt: string; updatedAt: string; version: number };
export type MergeStrategy = { quantity?: "max" | "sum"; noteConcatSeparator?: string };
