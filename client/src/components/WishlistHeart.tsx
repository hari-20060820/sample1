"use client";
import { useWishlist } from "@/context/WishlistContext";

export function WishlistHeart({ productId, className = "" }: { productId: string; className?: string }) {
  const { wishlist, add, remove } = useWishlist();
  const saved = wishlist?.items.some(item => item.productId === productId) ?? false;
  
  return (
    <button 
      type="button" 
      onClick={(event) => { 
        event.preventDefault(); 
        event.stopPropagation(); 
        saved ? remove(productId) : add(productId); 
      }} 
      aria-label={saved ? "Remove from wishlist" : "Add to wishlist"} 
      aria-pressed={saved} 
      title={saved ? "Remove from wishlist" : "Add to wishlist"} 
      className={`grid h-10 w-10 place-items-center rounded-full border-2 transition-all duration-300 ${
        saved 
          ? "bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/50 hover:bg-red-700 hover:border-red-600" 
          : "bg-black/40 border-red-600/40 text-red-500 hover:bg-red-600/20 hover:border-red-500 hover:text-red-400"
      } backdrop-blur-sm ${className}`}
    >
      <svg 
        aria-hidden="true" 
        viewBox="0 0 24 24" 
        className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" 
        fill={saved ? "currentColor" : "none"} 
        stroke="currentColor" 
        strokeWidth="1.5"
      >
        <path d="M20.8 4.8a5.5 5.5 0 0 0-7.8 0L12 5.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.9-8.4a5.5 5.5 0 0 0-.1-7.8Z" />
      </svg>
    </button>
  );
}

