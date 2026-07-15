import Image from "next/image";
import Link from "next/link";
import type { Product } from "@ecommerce/shared";
import { RatingStars } from "./RatingStars";
import { WishlistHeart } from "./WishlistHeart";

export function ProductCard({ product, featured = false }: { product: Product; featured?: boolean }) {
  const imageUrl = product.images?.[0] ? `${product.images[0]}${product.images[0].includes('?') ? '&' : '?'}w=800&q=80` : "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80";
  
  return (
    <article className={`group ${featured ? "md:row-span-2" : ""}`}>
      <Link href={`/products/${product.slug}`} className="block">
        <div 
          className={`relative overflow-hidden bg-gradient-to-br from-stone-950 to-black rounded-sm border border-red-900/20 hover:border-red-600/50 transition-colors duration-300 ${featured ? "aspect-[3/4]" : "aspect-square"}`}
        >
          <Image 
            src={imageUrl}
            alt={product.name} 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width:768px) 100vw, 33vw"
            priority={featured}
            loading={featured ? "eager" : "lazy"}
          />
          
          {/* Shine effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          
          {/* Red accent on hover */}
          <div className="absolute inset-0 bg-red-600/0 transition-all duration-500 group-hover:bg-red-600/5" />
          
          <WishlistHeart productId={product.id} className="absolute right-4 top-4 z-10" />
        </div>
        
        <div className="py-4 text-white">
          <div className="flex justify-between gap-3 items-start mb-2">
            <h2 className="font-bold text-base group-hover:text-red-500 transition-colors duration-300">{product.name}</h2>
            <b className="flex-shrink-0 text-red-500 font-bold">${(product.priceCents / 100).toFixed(2)}</b>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-stone-500 uppercase tracking-wide text-xs">{product.category}</span>
            <div className="flex items-center gap-1">
              <RatingStars rating={product.rating} />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

