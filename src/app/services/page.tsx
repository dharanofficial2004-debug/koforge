import { Metadata } from "next";
import ServiceCard from "@/components/ui/ServiceCard";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Our Services | eCommerce Growth",
  description: "Explore our eCommerce services including Next.js/Shopify website development, Meta/Google Ads, and Influencer Marketing.",
};

export default function ServicesIndex() {
  return (
    <div className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-black mb-6">Our Services</h1>
          <p className="text-xl text-gray-600">
            We offer end-to-end growth solutions for D2C brands. We build your storefront, drive high-intent traffic, and scale your revenue.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <ServiceCard 
            title="eCommerce Website Development" 
            description="Custom, blazing-fast Shopify and Next.js storefronts designed to convert visitors into buyers."
            href="/services/website-development"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
          />
          <ServiceCard 
            title="Performance Marketing" 
            description="Data-driven Meta and Google Ads campaigns that aggressively drive down CAC and boost ROAS."
            href="/services/performance-ads"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            }
          />
          <ServiceCard 
            title="Influencer Marketing" 
            description="Authentic brand collaborations that build trust and drive high-intent traffic to your store."
            href="/services/influencer-marketing"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
          />
          <ServiceCard 
            title="Business Automation" 
            description="Automated workflows for blogs, social media, payslips, and Meta ads that save hours every week."
            href="/services/automation"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
          />
        </div>

        <div className="bg-gray-50 p-12 rounded-3xl text-center border border-gray-200">
          <h2 className="text-3xl font-bold text-brand-black mb-6">Not sure what you need?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Book a free strategy call with our founders. We'll audit your current setup and recommend the best path forward.
          </p>
          <WhatsAppCTA className="px-10 py-4" variant="primary">Book a Free Strategy Call</WhatsAppCTA>
        </div>
      </div>
    </div>
  );
}
