'use client';

import dynamic from "next/dynamic";

const TestimonialCarousel = dynamic(() => import("./TestimonialCarousel"), {
  ssr: false,
  loading: () => <div className="h-48" />,
});

interface Testimonial {
  quote: string;
  author: string;
  brand: string;
  href: string;
}

export default function TestimonialCarouselWrapper({ testimonials }: { testimonials: Testimonial[] }) {
  return <TestimonialCarousel testimonials={testimonials} />;
}
