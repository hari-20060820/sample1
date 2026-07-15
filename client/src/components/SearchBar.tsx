"use client";
import {useRouter,useSearchParams} from "next/navigation";
import {useEffect,useState} from "react";

export function SearchBar(){
  const r=useRouter(),p=useSearchParams(),[q,setQ]=useState(p.get("q")??"");
  
  useEffect(()=>{
    const t=setTimeout(()=>{
      const s=new URLSearchParams(p.toString());
      q?s.set("q",q):s.delete("q");
      r.replace(`/?${s}`)
    },350);
    return()=>clearTimeout(t)
  },[q]);
  
  return (
    <input 
      value={q} 
      onChange={e=>setQ(e.target.value)} 
      placeholder="Search for running shoes..." 
      className="w-full border-b-2 border-red-600/50 hover:border-red-600 focus:border-red-500 bg-transparent text-white placeholder-stone-500 px-2 py-3 font-bold uppercase tracking-wider text-sm outline-none transition-colors"
    />
  );
}

