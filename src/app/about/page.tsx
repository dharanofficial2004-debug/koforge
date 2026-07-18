import { Metadata } from "next";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about KoForge, a specialized eCommerce growth agency founded to help D2C brands scale.",
};

export default function About() {
  return (
    <div className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-black mb-6">Our Story</h1>
          <p className="text-xl text-gray-600">
            Founded by two passionate marketers in Madurai, KoForge was built with a single mission: to be the engine behind your online sales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-bold text-brand-black mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              To empower D2C and independent eCommerce brands to break free from marketplace dependency and build sustainable, high-margin revenue engines.
            </p>
            <h2 className="text-3xl font-bold text-brand-black mb-4">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To become the most trusted eCommerce growth partner in India, known for transparent data, exceptional engineering, and measurable ROI.
            </p>
          </div>
          <div className="bg-orange-50 p-10 rounded-3xl border border-orange-100">
            <h3 className="text-2xl font-bold text-brand-black mb-6">Core Values</h3>
            <ul className="space-y-4">
              {[
                { title: "Transparency", desc: "No hidden fees, no vanity metrics. Just clear, honest data." },
                { title: "Performance First", desc: "If it doesn't move the needle on revenue, we don't do it." },
                { title: "Partnership", desc: "We act as an extension of your internal team, sharing your goals." }
              ].map((val, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1 text-brand-orange">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-black">{val.title}</h4>
                    <p className="text-sm text-gray-600">{val.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-brand-black text-white p-12 md:p-16 rounded-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work with us?</h2>
          <WhatsAppCTA className="px-10 py-4 text-lg" variant="primary">Contact Our Team</WhatsAppCTA>
        </div>
      </div>
    </div>
  );
}
