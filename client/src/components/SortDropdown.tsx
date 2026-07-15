"use client";
import {useRouter,useSearchParams} from "next/navigation";

export function SortDropdown(){
  const r=useRouter(),p=useSearchParams();
  
  return (
    <select 
      aria-label="Sort products" 
      defaultValue={p.get("sort")??"newest"} 
      onChange={e=>{
        const s=new URLSearchParams(p.toString());
        s.set("sort",e.target.value);
        r.replace(`/?${s}`)
      }} 
      className="border-2 border-red-600/40 hover:border-red-600/70 focus:border-red-500 bg-black px-4 py-2 text-sm text-white font-bold uppercase tracking-wider outline-none transition-colors"
    >
      <option value="newest">Newest</option>
      <option value="priceAsc">Price: Low to High</option>
      <option value="priceDesc">Price: High to Low</option>
      <option value="rating">Best Rated</option>
    </select>
  );
}

