import { Metadata } from "next";
import Link from "next/link";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";

export const metadata: Metadata = {
  title: "eCommerce Growth Blog",
  description: "Insights, strategies, and case studies on how to scale your D2C brand from KoForge.",
};

const DUMMY_POSTS = [
  {
    title: "5 Hidden Metrics Every D2C Founder Should Track in 2024",
    excerpt: "Stop obsessing over ROAS. These 5 hidden metrics will give you a much clearer picture of your eCommerce store's health.",
    date: "Oct 12, 2023",
    slug: "hidden-metrics-d2c-founders-should-track",
  },
  {
    title: "Shopify vs Next.js: Which is Right for Your Brand?",
    excerpt: "Weighing the pros and cons of a standard Shopify theme versus a headless Next.js storefront for scaling brands.",
    date: "Sep 28, 2023",
    slug: "shopify-vs-nextjs-for-ecommerce",
  },
  {
    title: "How We Dropped CAC by 40% for a Beauty Brand",
    excerpt: "A deep dive case study into the exact creative strategy and media buying tactics we used to cut customer acquisition cost.",
    date: "Sep 15, 2023",
    slug: "case-study-dropping-cac-by-40-percent",
  },
];

export default function BlogIndex() {
  return (
    <div className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-black mb-6">The Growth Engine Blog</h1>
          <p className="text-xl text-gray-600">
            Insights, strategies, and case studies on how to scale your D2C brand profitably.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {DUMMY_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all h-full">
              <div className="h-48 bg-gray-100 w-full relative">
                 <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                   </svg>
                 </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-sm font-semibold text-brand-orange mb-3">{post.date}</span>
                <h2 className="text-xl font-bold text-brand-black mb-3 group-hover:text-brand-orange transition-colors">{post.title}</h2>
                <p className="text-gray-600 mb-6 flex-grow">{post.excerpt}</p>
                <div className="mt-auto flex items-center text-brand-black font-semibold">
                  Read Article &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-orange-50 p-12 rounded-3xl text-center border border-orange-100">
          <h2 className="text-3xl font-bold text-brand-black mb-6">Need expert help implementing these strategies?</h2>
          <WhatsAppCTA className="px-10 py-4" variant="primary">Talk to an Expert</WhatsAppCTA>
        </div>
      </div>
    </div>
  );
}
