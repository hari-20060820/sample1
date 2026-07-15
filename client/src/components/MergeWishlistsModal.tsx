"use client";
import {useState} from "react";

export function MergeWishlistsModal({onClose}:{onClose:()=>void}){
  const[id,setId]=useState("");
  
  return (
    <div 
      role="dialog" 
      aria-modal="true" 
      className="fixed inset-0 z-20 grid place-items-center bg-black/80 backdrop-blur-sm p-5"
    >
      <div className="w-full max-w-md bg-gradient-to-br from-stone-900 to-black p-8 shadow-2xl border border-red-900/20 rounded-lg">
        <h2 className="text-2xl font-black italic text-white">Merge Lists</h2>
        <p className="mt-3 text-sm text-stone-400">
          Combine two wishlists. Duplicates are merged with the larger quantity and both notes preserved.
        </p>
        
        <input 
          value={id} 
          onChange={e=>setId(e.target.value)} 
          placeholder="Enter other wishlist ID..." 
          className="mt-6 w-full border border-red-600/30 bg-black text-white px-4 py-3 placeholder-stone-600 rounded-sm focus:border-red-500 outline-none transition-colors"
        />
        
        <div className="mt-6 flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="text-stone-400 hover:text-white font-bold uppercase tracking-wider transition-colors"
          >
            Cancel
          </button>
          <button 
            disabled={!id} 
            className="bg-red-600 hover:bg-red-700 disabled:opacity-40 px-6 py-3 text-white font-bold uppercase tracking-wider transition-colors rounded-sm disabled:cursor-not-allowed"
          >
            Preview Merge
          </button>
        </div>
      </div>
    </div>
  );
}
