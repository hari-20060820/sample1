import { z } from "zod";
export declare const productSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    slug: z.ZodString;
    description: z.ZodString;
    priceCents: z.ZodNumber;
    currency: z.ZodString;
    images: z.ZodArray<z.ZodString, "many">;
    category: z.ZodString;
    tags: z.ZodArray<z.ZodString, "many">;
    rating: z.ZodNumber;
    reviewCount: z.ZodNumber;
    inStock: z.ZodBoolean;
    stockQty: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    slug: string;
    description: string;
    priceCents: number;
    currency: string;
    images: string[];
    category: string;
    tags: string[];
    rating: number;
    reviewCount: number;
    inStock: boolean;
    createdAt: string;
    stockQty?: number | undefined;
}, {
    id: string;
    name: string;
    slug: string;
    description: string;
    priceCents: number;
    currency: string;
    images: string[];
    category: string;
    tags: string[];
    rating: number;
    reviewCount: number;
    inStock: boolean;
    createdAt: string;
    stockQty?: number | undefined;
}>;
export declare const wishlistItemSchema: z.ZodObject<{
    productId: z.ZodString;
    addedAt: z.ZodString;
    note: z.ZodOptional<z.ZodString>;
    quantity: z.ZodNumber;
    source: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    productId: string;
    addedAt: string;
    quantity: number;
    source: string[];
    note?: string | undefined;
}, {
    productId: string;
    addedAt: string;
    quantity: number;
    source: string[];
    note?: string | undefined;
}>;
export declare const wishlistSchema: z.ZodObject<{
    id: z.ZodString;
    ownerId: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
    items: z.ZodArray<z.ZodObject<{
        productId: z.ZodString;
        addedAt: z.ZodString;
        note: z.ZodOptional<z.ZodString>;
        quantity: z.ZodNumber;
        source: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        productId: string;
        addedAt: string;
        quantity: number;
        source: string[];
        note?: string | undefined;
    }, {
        productId: string;
        addedAt: string;
        quantity: number;
        source: string[];
        note?: string | undefined;
    }>, "many">;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    version: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    createdAt: string;
    ownerId: string | null;
    items: {
        productId: string;
        addedAt: string;
        quantity: number;
        source: string[];
        note?: string | undefined;
    }[];
    updatedAt: string;
    version: number;
}, {
    id: string;
    name: string;
    createdAt: string;
    ownerId: string | null;
    items: {
        productId: string;
        addedAt: string;
        quantity: number;
        source: string[];
        note?: string | undefined;
    }[];
    updatedAt: string;
    version: number;
}>;
export declare const addWishlistItemSchema: z.ZodObject<{
    productId: z.ZodString;
    note: z.ZodOptional<z.ZodString>;
    quantity: z.ZodDefault<z.ZodNumber>;
    version: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    productId: string;
    quantity: number;
    version: number;
    note?: string | undefined;
}, {
    productId: string;
    version: number;
    note?: string | undefined;
    quantity?: number | undefined;
}>;
export declare const mergeRequestSchema: z.ZodObject<{
    sourceListIds: z.ZodTuple<[z.ZodString, z.ZodString], null>;
    strategy: z.ZodOptional<z.ZodObject<{
        quantity: z.ZodOptional<z.ZodEnum<["max", "sum"]>>;
        noteConcatSeparator: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        quantity?: "max" | "sum" | undefined;
        noteConcatSeparator?: string | undefined;
    }, {
        quantity?: "max" | "sum" | undefined;
        noteConcatSeparator?: string | undefined;
    }>>;
    version: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    sourceListIds: [string, string];
    version?: number | undefined;
    strategy?: {
        quantity?: "max" | "sum" | undefined;
        noteConcatSeparator?: string | undefined;
    } | undefined;
}, {
    sourceListIds: [string, string];
    version?: number | undefined;
    strategy?: {
        quantity?: "max" | "sum" | undefined;
        noteConcatSeparator?: string | undefined;
    } | undefined;
}>;
