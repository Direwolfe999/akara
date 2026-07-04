"use client";

import { useState, useEffect } from "react";

export default function MobileCTA() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <a
      href="#order"
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-akara-brown text-white py-4 text-center font-bold text-lg flex items-center justify-center gap-2 shadow-lg transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      🧆 Order Akara Now
    </a>
  );
}