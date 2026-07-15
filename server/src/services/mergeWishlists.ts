import { randomUUID } from "node:crypto";
import type { MergeStrategy, Wishlist, WishlistItem } from "@ecommerce/shared";

const normalise = (item: WishlistItem): WishlistItem => ({ ...item, source: Array.isArray(item.source) ? [...new Set(item.source)] : [] });
const sameItems = (a: WishlistItem[], b: WishlistItem[]) => JSON.stringify(a) === JSON.stringify(b);
export function mergeWishlists(a: Wishlist, b: Wishlist, strategy: MergeStrategy = {}): Wishlist {
  if (a.id === b.id && a.version === b.version && sameItems(a.items, b.items)) return { ...a };
  const items = new Map<string, WishlistItem>();
  a.items.forEach(i => items.set(i.productId, normalise(i)));
  for (const raw of b.items) {
    const incoming = normalise(raw), existing = items.get(incoming.productId);
    if (!existing) { items.set(incoming.productId, incoming); continue; }
    const notes = existing.note && incoming.note && existing.note !== incoming.note ? `${existing.note}${strategy.noteConcatSeparator ?? " | "}${incoming.note}` : (existing.note ?? incoming.note);
    items.set(incoming.productId, { productId: incoming.productId, quantity: strategy.quantity === "sum" ? existing.quantity + incoming.quantity : Math.max(existing.quantity, incoming.quantity), note: notes, addedAt: existing.addedAt <= incoming.addedAt ? existing.addedAt : incoming.addedAt, source: [...new Set([...existing.source, ...incoming.source])] });
  }
  const now = new Date().toISOString();
  return { id: randomUUID(), ownerId: a.ownerId ?? b.ownerId, name: a.name === b.name ? a.name : `${a.name} + ${b.name}`, items: [...items.values()], createdAt: now, updatedAt: now, version: Math.max(a.version,b.version)+1 };
}
