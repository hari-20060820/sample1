import { Router } from "express";
import mongoose from "mongoose";
import { addWishlistItemSchema, mergeRequestSchema } from "@ecommerce/shared";
import { WishlistModel } from "../models/Wishlist.js";
import { mergeWishlists } from "../services/mergeWishlists.js";
const dto = (w) => ({ id: String(w._id), ownerId: w.ownerId ? String(w.ownerId) : null, name: w.name, items: w.items.map((i) => ({ productId: String(i.productId), addedAt: new Date(i.addedAt).toISOString(), note: i.note, quantity: i.quantity, source: Array.isArray(i.source) ? i.source : [] })), createdAt: new Date(w.createdAt).toISOString(), updatedAt: new Date(w.updatedAt).toISOString(), version: w.version });
export const wishlistsRouter = Router();
wishlistsRouter.get("/:id", async (req, res) => { const w = await WishlistModel.findById(req.params.id).lean(); if (!w)
    return res.status(404).json({ error: "Wishlist not found" }); res.json(dto(w)); });
wishlistsRouter.post("/:id/items", async (req, res) => { const parsed = addWishlistItemSchema.safeParse(req.body); if (!parsed.success)
    return res.status(400).json({ error: parsed.error.flatten() }); const { version, ...item } = parsed.data; const w = await WishlistModel.findOneAndUpdate({ _id: req.params.id, version, "items.productId": { $ne: item.productId } }, { $push: { items: { ...item, addedAt: new Date(), source: ["manual"] } }, $inc: { version: 1 } }, { new: true }); if (!w) {
    const exists = await WishlistModel.exists({ _id: req.params.id });
    return res.status(exists ? 409 : 404).json({ error: exists ? "Wishlist changed or item already exists" : "Wishlist not found" });
} res.status(201).json(dto(w)); });
wishlistsRouter.delete("/:id/items/:productId", async (req, res) => { const version = Number(req.body.version); const w = await WishlistModel.findOneAndUpdate({ _id: req.params.id, version, "items.productId": req.params.productId }, { $pull: { items: { productId: req.params.productId } }, $inc: { version: 1 } }, { new: true }); if (!w)
    return res.status(409).json({ error: "Wishlist changed or item missing" }); res.json(dto(w)); });
wishlistsRouter.post("/merge", async (req, res) => { const parsed = mergeRequestSchema.safeParse(req.body); if (!parsed.success)
    return res.status(400).json({ error: parsed.error.flatten() }); const [first, second] = parsed.data.sourceListIds; const session = await mongoose.startSession(); try {
    let result;
    await session.withTransaction(async () => { const [a, b] = await Promise.all([WishlistModel.findById(first).session(session), WishlistModel.findById(second).session(session)]); if (!a || !b)
        throw Object.assign(new Error("Wishlist not found"), { status: 404 }); if (parsed.data.version !== undefined && (a.version !== parsed.data.version && b.version !== parsed.data.version))
        throw Object.assign(new Error("Version conflict"), { status: 409 }); const merged = mergeWishlists(dto(a), dto(b), parsed.data.strategy); if (merged.id === dto(a).id) {
        result = dto(a);
        return;
    } const created = await WishlistModel.create([{ ownerId: merged.ownerId, name: merged.name, items: merged.items, version: merged.version }], { session }); result = dto(created[0]); });
    res.status(201).json(result);
}
catch (e) {
    res.status(e.status ?? 500).json({ error: e.message ?? "Could not merge wishlists" });
}
finally {
    session.endSession();
} });
