"use client";
import {useState} from "react";
import {useWishlist} from "@/context/WishlistContext";
import {WishlistCard} from "./WishlistCard";
import {EmptyState} from "./EmptyState";
import {MergeWishlistsModal} from "./MergeWishlistsModal";

export function WishlistPage(){
  const{wishlist,remove}=useWishlist();
  const[modal,setModal]=useState(false);
  
  if(!wishlist)return <p className="p-10 text-stone-400">Loading your saved finds…</p>;
  
  return (
    <main className="mx-auto max-w-6xl px-5 py-14 bg-black min-h-screen">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-red-500 font-bold">Your Collection</p>
        <div className="flex items-end justify-between mt-4">
          <h1 className="text-5xl font-black italic tracking-tight text-white">{wishlist.name}</h1>
          <button 
            onClick={()=>setModal(true)} 
            className="border-2 border-red-600 hover:bg-red-600 hover:text-black text-white px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300 rounded-sm"
          >
            Merge with another list
          </button>
        </div>
      </div>
      
      {wishlist.items.length?
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {wishlist.items.map(i=>
            <WishlistCard 
              key={i.productId} 
              item={i} 
              onRemove={()=>remove(i.productId)}
            />
          )}
        </div>
        :
        <div className="mt-10">
          <EmptyState 
            title="Nothing saved yet" 
            detail="Save running shoes you love; they will appear in your wishlist."
          />
        </div>
      }
      
      {modal&&<MergeWishlistsModal onClose={()=>setModal(false)}/>}
    </main>
  );
}
