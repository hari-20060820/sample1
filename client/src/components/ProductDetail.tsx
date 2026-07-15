"use client";
import Image from "next/image";
import type {Product} from "@ecommerce/shared";
import {useState} from "react";
import {RatingStars} from "./RatingStars";
import {WishlistHeart} from "./WishlistHeart";

export function ProductDetail({product}:{product:Product}){
  const[image,setImage]=useState(0);
  const[rotation,setRotation]=useState({x:0,y:0});
  
  const handleMouseMove=(e:React.MouseEvent<HTMLDivElement>)=>{
    const rect=e.currentTarget.getBoundingClientRect();
    const x=((e.clientY-rect.top)/rect.height-0.5)*15;
    const y=((e.clientX-rect.left)/rect.width-0.5)*15;
    setRotation({x,y})
  };
  
  const handleMouseLeave=()=>{
    setRotation({x:0,y:0})
  };
  
  const imageUrl = product.images?.[image] ? `${product.images[image]}${product.images[image].includes('?') ? '&' : '?'}w=1000&q=90` : "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000&q=90";
  
  return (
    <main className="mx-auto grid max-w-6xl gap-10 px-5 py-10 md:grid-cols-2 bg-black min-h-screen">
      <section>
        <div 
          className="relative aspect-square bg-gradient-to-br from-stone-900 to-black rounded-lg overflow-hidden border border-red-900/20" 
          style={{perspective:"1200px"}} 
          onMouseMove={handleMouseMove} 
          onMouseLeave={handleMouseLeave}
        >
          <div style={{transform:`rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.01)`,transformStyle:"preserve-3d",transition:"transform 0.1s ease-out"}}>
            <Image 
              fill 
              src={imageUrl}
              alt={product.name} 
              className="object-cover"
              priority
              sizes="50vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"/>
        </div>
        
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {product.images?.map((src,i)=>{
            const thumbUrl = `${src}${src.includes('?') ? '&' : '?'}w=150&q=80`;
            return (
              <button 
                key={i}
                onClick={()=>setImage(i)} 
                className={`relative h-16 w-16 flex-shrink-0 overflow-hidden border-2 rounded-lg transition-all duration-300 ${image===i?"border-red-500 scale-110":"border-stone-700 hover:border-red-600/50"}`}
              >
                <Image 
                  fill 
                  src={thumbUrl}
                  alt={`${product.name} angle ${i+1}`} 
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      </section>
      
      <section className="text-white">
        <p className="text-xs uppercase tracking-[0.2em] text-red-500 font-bold">{product.category}</p>
        <h1 className="mt-3 text-5xl font-black italic tracking-tight">{product.name}</h1>
        <p className="mt-6 text-4xl font-bold text-red-500">${(product.priceCents/100).toFixed(2)}</p>
        
        <div className="mt-4 flex items-center gap-3">
          <RatingStars rating={product.rating}/> 
          <span className="text-sm text-stone-400">({product.reviewCount} reviews)</span>
        </div>
        
        <p className="mt-8 leading-7 text-stone-300 text-base">{product.description}</p>
        
        <p className={`mt-6 font-bold text-sm uppercase tracking-wide ${product.inStock?"text-green-500":"text-red-500"}`}>
          {product.inStock?"✓ In stock, packed with care":"• Currently unavailable"}
        </p>
        
        <div className="mt-8 flex gap-3">
          <button className="flex-1 bg-red-600 hover:bg-red-700 px-6 py-4 text-white font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 rounded-sm border border-red-500">
            Add to cart
          </button>
          <WishlistHeart productId={product.id} className="h-12 w-12"/>
        </div>
        
        <div className="mt-8 pt-8 border-t border-stone-800">
          <h3 className="text-sm uppercase tracking-widest font-bold text-stone-400 mb-4">Product Details</h3>
          <ul className="space-y-2 text-sm text-stone-400">
            <li>• Premium cushioning technology</li>
            <li>• Breathable performance upper</li>
            <li>• Responsive sole design</li>
            <li>• Available in multiple sizes</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
