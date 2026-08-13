'use client';

import { useEffect, useRef } from "react";
import Link from "next/link";

interface Testimonial {
  quote: string;
  author: string;
  brand: string;
  href: string;
}

export default function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let intervalId = setInterval(() => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScrollLeft - 10) {
        // Smooth scroll back to start
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Smooth scroll by approx one card width
        container.scrollTo({ left: container.scrollLeft + 310, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(intervalId);
  }, [testimonials]);

  return (
    <div 
      ref={scrollRef}
      className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 px-4 -mx-4 md:mx-0 md:px-0 scroll-smooth"
    >
      {testimonials.map((t, idx) => (
        <div 
          key={idx} 
          className="w-[290px] md:w-[320px] shrink-0 snap-start bg-white border border-gray-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:border-brand-purple/20 transition-colors"
        >
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic">
            "{t.quote}"
          </p>
          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
            <div>
              <h4 className="font-heading font-bold text-sm text-brand-black">{t.author}</h4>
              <Link 
                href={t.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs text-brand-purple hover:underline font-semibold mt-0.5 block"
              >
                {t.brand} &rarr;
              </Link>
            </div>
            <span className="text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-md">Verified Client</span>
          </div>
        </div>
      ))}
    </div>
  );
}
