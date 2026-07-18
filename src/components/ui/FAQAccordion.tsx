"use client";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItemProps[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus-visible:ring focus-visible:ring-brand-purple/50 hover:bg-gray-50 transition-colors"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-semibold text-brand-black">{item.question}</span>
            <svg
              className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`transition-all duration-300 ease-in-out ${
              activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-4 text-gray-600">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
