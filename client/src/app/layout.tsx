import type {Metadata} from "next";import "./globals.css";import Link from "next/link";import {WishlistProvider} from "@/context/WishlistContext";

export const metadata:Metadata={title:"Stride Lab – Performance Running Shoes",description:"Premium performance running shoes engineered for speed and comfort."};

export default function Layout({children}:{children:React.ReactNode}){
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <WishlistProvider>
          <header className="sticky top-0 z-50 border-b border-red-900/20 bg-black/95 backdrop-blur-md px-5 py-5">
            <div className="mx-auto flex max-w-6xl items-center justify-between">
              <Link href="/" className="text-lg font-black italic tracking-tighter">
                <span className="text-red-500">STRIDE</span>//LAB
              </Link>
              <nav className="flex gap-8 text-sm font-bold uppercase tracking-widest">
                <Link href="/" className="text-stone-300 hover:text-red-500 transition-colors">Shop</Link>
                <Link href="/wishlist" className="text-stone-300 hover:text-red-500 transition-colors">Wishlist</Link>
                <button className="text-stone-300 hover:text-red-500 transition-colors">Cart (0)</button>
              </nav>
            </div>
          </header>
          
          {children}
          
          <footer className="mt-20 border-t border-red-900/20 bg-black px-5 py-10">
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-4 gap-8 mb-8 text-sm text-stone-400">
                <div>
                  <h4 className="font-bold text-white mb-3">About</h4>
                  <p>Performance shoes engineered for your goals.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-3">Support</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-red-500">Contact</a></li>
                    <li><a href="#" className="hover:text-red-500">Shipping</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-3">Legal</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-red-500">Privacy</a></li>
                    <li><a href="#" className="hover:text-red-500">Terms</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-3">Follow</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-red-500">Instagram</a></li>
                    <li><a href="#" className="hover:text-red-500">Twitter</a></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-stone-800 pt-8 text-center text-xs text-stone-500">
                <p>&copy; 2026 Stride Lab. All rights reserved. Performance engineered.</p>
              </div>
            </div>
          </footer>
        </WishlistProvider>
      </body>
    </html>
  );
}

