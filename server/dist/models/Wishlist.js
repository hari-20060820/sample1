import { Schema, model } from "mongoose";
const itemSchema = new Schema({ productId: { type: Schema.Types.ObjectId, ref: "Product", required: true }, addedAt: { type: Date, default: Date.now }, note: String, quantity: { type: Number, default: 1, min: 1 }, source: { type: [String], default: [] } }, { _id: false });
const wishlistSchema = new Schema({ ownerId: { type: Schema.Types.ObjectId, ref: "User", default: null, index: true }, name: { type: String, required: true }, items: { type: [itemSchema], default: [] }, version: { type: Number, default: 0 } }, { timestamps: true });
wishlistSchema.index({ "items.productId": 1 });
export const WishlistModel = model("Wishlist", wishlistSchema);
