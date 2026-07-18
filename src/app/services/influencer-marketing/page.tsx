import { Metadata } from "next";
import Link from "next/link";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Influencer Marketing",
  description: "Authentic influencer marketing campaigns for eCommerce brands. Build trust, drive traffic, and scale sales.",
};

export default function InfluencerMarketingService() {
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
                <span className="ml-1 text-gray-800 md:ml-2 font-semibold">Influencer Marketing</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-6">Influencer Marketing</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We connect your brand with authentic creators who have genuine influence over your target demographic, creating highly engaging content that converts.
            </p>
            <div className="flex gap-4">
              <WhatsAppCTA className="px-8 py-4">Find Your Creators</WhatsAppCTA>
            </div>
          </div>
          <div className="bg-gray-100 rounded-3xl h-80 flex items-center justify-center border border-gray-200 shadow-inner">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-brand-black mb-10 text-center">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { title: "Vetted Creators", desc: "We don't just look at follower counts. We analyze engagement rates, audience demographics, and brand fit." },
            { title: "Performance Tracked", desc: "Every campaign is tracked via custom promo codes and UTMs to ensure positive ROI." },
            { title: "Content Rights", desc: "We secure content rights so you can repurpose high-performing influencer content in your Paid Ads." }
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
          <h2 className="text-3xl font-bold mb-6">Build trust at scale.</h2>
          <WhatsAppCTA variant="primary" className="px-10 py-4">Start Influencer Campaign</WhatsAppCTA>
        </div>

      </div>
    </div>
  );
}
