import { Metadata } from "next";
import Link from "next/link";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";

export const metadata: Metadata = {
  title: "eCommerce Website Development",
  description: "High-performance Shopify and Next.js eCommerce websites engineered for maximum conversions and speed.",
};

export default function WebDevService() {
  return (
    <div className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="hover:text-brand-orange">Home</Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <Link href="/services" className="hover:text-brand-orange ml-1 md:ml-2">Services</Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="ml-1 text-gray-800 md:ml-2 font-semibold">Website Development</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-6">eCommerce Website Development</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We build blazing-fast, mobile-first storefronts on Shopify and Next.js that turn browsers into buyers. Don't let a slow website kill your ad conversions.
            </p>
            <div className="flex gap-4">
              <WhatsAppCTA className="px-8 py-4">Request a Quote</WhatsAppCTA>
            </div>
          </div>
          <div className="bg-gray-100 rounded-3xl h-80 flex items-center justify-center border border-gray-200 shadow-inner">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-brand-black mb-10 text-center">Benefits of our Development</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { title: "Lightning Fast Speed", desc: "Optimized Core Web Vitals to ensure sub-second page loads, reducing bounce rates." },
            { title: "Conversion Optimized", desc: "UX/UI designs based on heatmaps and behavioral psychology to maximize checkout rates." },
            { title: "Scalable Architecture", desc: "Built to handle thousands of concurrent users during major sale events without crashing." }
          ].map((benefit, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-orange-50 text-brand-orange rounded-full flex items-center justify-center mb-4 font-bold">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-brand-black text-white p-12 rounded-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to upgrade your storefront?</h2>
          <WhatsAppCTA variant="primary" className="px-10 py-4">Discuss Your Project</WhatsAppCTA>
        </div>

      </div>
    </div>
  );
}
