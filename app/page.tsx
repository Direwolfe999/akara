"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import MenuCards from "@/components/MenuCards";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import BackToTop from "@/components/BackToTop";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import TestimonialTicker from "@/components/TestimonialTicker";

export default function Home() {
  const [cart, setCart] = useState<Record<number, number>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = (id: number) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleRemoveFromCart = (id: number) => {
    setCart((prev) => {
      const current = prev[id] || 0;
      if (current <= 1) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return { ...prev, [id]: current - 1 };
    });
  };

  const handleClearCart = () => {
    setCart({});
  };

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <main className="min-h-screen bg-white relative">
      <Hero />
      <TrustBar />
      <TestimonialTicker />
      <MenuCards
        cart={cart}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
      />
      <OrderForm cart={cart} onClearCart={handleClearCart} />
      <Footer />
      <MobileCTA />
      <BackToTop />
    </main>
  );
}