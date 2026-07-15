import type {WishlistItem,Product} from "@ecommerce/shared";

export function WishlistCard({item,product,onRemove}:{item:WishlistItem;product?:Product;onRemove:()=>void}){
  return (
    <article className="relative bg-gradient-to-br from-stone-900 to-black p-6 shadow-xl border border-red-900/20 hover:border-red-600/50 transition-colors rounded-lg group">
      <div className="absolute top-3 right-3">
        <button 
          onClick={onRemove} 
          className="text-stone-500 hover:text-red-500 transition-colors text-xl"
          title="Remove from wishlist"
        >
          ✕
        </button>
      </div>
      
      <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
        {product?.name??`Product ${item.productId.slice(-5)}`}
      </h3>
      
      <p className="mt-2 text-sm text-stone-400">
        Quantity: <span className="font-bold text-white">{item.quantity}</span>
        {item.note&&<span className="block mt-1 text-xs text-stone-500 italic">Note: {item.note}</span>}
      </p>
      
      <button 
        onClick={onRemove} 
        className="mt-4 text-xs uppercase tracking-widest font-bold text-red-500 hover:text-red-400 transition-colors"
      >
        Remove
      </button>
    </article>
  );
}
