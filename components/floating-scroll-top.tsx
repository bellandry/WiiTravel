"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingScrollTop() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 700);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isScrolled) return <></>;

  return (
    <a href="#" className="transition-all scroll-smooth">
      <button
        className="fixed bottom-8 right-8 bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-all z-50"
        aria-label="Go To Top"
      >
        <ArrowUp className="size-4 md:size-8 text-white font-bold" />
      </button>
    </a>
  );
}
