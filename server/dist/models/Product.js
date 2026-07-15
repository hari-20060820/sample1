import { Schema, model } from "mongoose";
const productSchema = new Schema({ name: { type: String, required: true }, slug: { type: String, required: true, unique: true }, description: { type: String, required: true }, priceCents: { type: Number, required: true }, currency: { type: String, default: "USD" }, images: [String], category: String, tags: [String], rating: { type: Number, default: 0 }, reviewCount: { type: Number, default: 0 }, inStock: { type: Boolean, default: true }, stockQty: Number }, { timestamps: true });
productSchema.index({ name: "text", description: "text", tags: "text" });
export const ProductModel = model("Product", productSchema);
