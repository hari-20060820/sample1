"use client";
import {ProductGrid} from "@/components/ProductGrid";import {SearchBar} from "@/components/SearchBar";import {SortDropdown} from "@/components/SortDropdown";import {demoProducts} from "@/lib/demoProducts";import {ColorShiftShoe} from "@/components/ColorShiftShoe";import {useEffect, useState} from "react";import type {Product} from "@ecommerce/shared";

export default function Home(){
  const[products,setProducts]=useState<Product[]>(demoProducts);
  const[loading,setLoading]=useState(true);
  
  useEffect(()=>{
    fetch(`${process.env.NEXT_PUBLIC_API_URL??"http://localhost:4000/api"}/products?limit=100`,{cache:"no-store"})
      .then(r=>r.json())
      .then(data=>setProducts(data.items||demoProducts))
      .catch(()=>setProducts(demoProducts))
      .finally(()=>setLoading(false))
  },[]);
  
  return (
    <main className="bg-black">
      <section className="relative min-h-[580px] overflow-hidden border-b border-red-900/30 px-5 py-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 flex items-center justify-between text-xs font-bold tracking-[.28em]">
            <span className="text-red-500">STRIDE//LAB</span>
            <span className="text-stone-400">RUNNING / TRAINING / DAILY</span>
          </div>
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold tracking-[.4em] text-red-500">DROP 01 — 2026</p>
              <h1 className="mt-4 text-6xl font-black italic leading-[.78] tracking-tighter md:text-8xl text-white">
                MOVE
                <br/>
                <span className="text-red-500">FORWARD.</span>
              </h1>
              <p className="mt-7 max-w-sm text-sm leading-6 text-stone-400">
                Performance shoes made for the miles between where you are and where you want to go.
              </p>
              <div className="mt-8 flex gap-3">
                <a href="#shop" className="bg-red-600 hover:bg-red-700 px-6 py-4 text-xs font-bold tracking-widest text-white transition-colors duration-300">
                  SHOP THE DROP
                </a>
                <a href="#shop" className="border border-red-600 hover:border-red-500 hover:text-red-500 px-6 py-4 text-xs font-bold tracking-widest text-stone-300 transition-colors duration-300">
                  EXPLORE
                </a>
              </div>
            </div>
            
            <div className="relative h-[360px] md:h-[470px]">
              <div className="absolute inset-0 rounded-full bg-red-600/20 blur-3xl"/>
              <ColorShiftShoe src="/hero-shoe.png"/>
              <p className="absolute bottom-0 right-0 text-right text-xs font-bold tracking-[.25em] text-white">
                <span className="text-stone-300">{products[0]?.name||"CUSTOM EDITION"}</span>
                <br/>
                <span className="text-red-500">LIMITED RELEASE</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="shop" className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold tracking-[.3em] text-red-500">THE ROTATION</p>
            <h2 className="mt-2 text-4xl font-black italic text-white">TEN WAYS TO MOVE.</h2>
          </div>
          <SortDropdown/>
        </div>
        <div className="my-8 max-w-md">
          <SearchBar/>
        </div>
        <ProductGrid products={products}/>
      </section>
    </main>
  );
}

