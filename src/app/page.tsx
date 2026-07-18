import Link from "next/link";
import ServiceCard from "@/components/ui/ServiceCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import TestimonialCard from "@/components/ui/TestimonialCard";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";

export default function Home() {
  const faqs = [
    { question: "How long does it take to build an eCommerce website?", answer: "Typically, a standard D2C website on Shopify or Next.js takes 4-6 weeks depending on the complexity of features and design requirements." },
    { question: "What is your minimum budget for Meta & Google Ads?", answer: "We recommend a minimum ad spend of ₹50,000/month to see meaningful performance data and allow our algorithms to optimize effectively." },
    { question: "Do you work with brands outside India?", answer: "Yes, we work with eCommerce brands globally, although our primary base is in Madurai, India." },
    { question: "How do you track ROI for influencer marketing?", answer: "We use custom promo codes, UTM parameters, and affiliate links to track exactly how much traffic and revenue each influencer generates." }
  ];

  const processSteps = [
    { title: "Discovery & Strategy", desc: "We analyze your brand, audience, and competitors to craft a tailored growth plan." },
    { title: "Execution & Build", desc: "Our team develops your high-converting website or sets up your ad campaigns." },
    { title: "Launch & Optimize", desc: "We go live, continuously monitor data, and optimize for maximum ROI." },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-black text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-purple via-transparent to-transparent"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            The Engine Behind Your <span className="text-brand-purple">Online Sales</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            We help D2C brands scale beyond marketplaces with high-performance eCommerce websites, Meta & Google Ads, and Influencer Marketing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <WhatsAppCTA className="px-8 py-4 text-lg">Get Your Free Growth Audit</WhatsAppCTA>
            <Link href="/services" className="text-white hover:text-brand-purple font-semibold transition-colors px-6 py-4">
              Explore Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black">Our Core Services</h2>
            <p className="mt-4 text-lg text-gray-600">Everything you need to grow your eCommerce business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          </div>
        </div>
      </section>

      {/* Why Choose Us & Process */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">Why Partner With KoForge?</h2>
              <p className="text-gray-600 mb-8 text-lg">
                We don't just build things that look good; we build systems that generate revenue. As a specialized eCommerce growth agency, we understand the nuances of D2C metrics.
              </p>
              <ul className="space-y-4">
                {['Data-Driven Decisions', 'Mobile-First Designs', 'Transparent Reporting', 'Dedicated Account Managers'].map((item, i) => (
                  <li key={i} className="flex items-center text-brand-black font-medium">
                    <svg className="h-6 w-6 text-brand-purple mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-8 text-brand-black">Our Process</h3>
              <div className="space-y-8">
                {processSteps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-brand-black mb-1">{step.title}</h4>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-brand-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Loved by eCommerce Brands</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard 
              quote="KoForge completely transformed our online presence. Our conversion rate jumped by 45% in the first two months after the new website launch."
              author="Rahul S."
              brand="D2C Apparel Brand"
            />
            <TestimonialCard 
              quote="Their Meta Ads strategies are top-notch. We were struggling with high CAC, but KoForge brought it down significantly while scaling our spend."
              author="Priya M."
              brand="Beauty & Cosmetics Store"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black">Frequently Asked Questions</h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-6">Ready to Scale Your Revenue?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Stop leaving money on the table. Let's build your eCommerce growth engine today.
          </p>
          <WhatsAppCTA className="px-10 py-5 text-xl">Let's Talk Growth</WhatsAppCTA>
        </div>
      </section>
    </>
  );
}
