import type { Metadata } from "next";
import Link from "next/link";
import TestimonialCarousel from "./TestimonialCarouselWrapper";

export const metadata: Metadata = {
  title: "Get Your Fashion Brand Online — 40% Off | KoForge",
  description: "Get your Tiripur-based fashion brand online. Complete shopping website at 40% off this Independence Day. Limited slots. Message on WhatsApp to start.",
};

const WHATSAPP_LINK = "https://wa.me/918838235891?text=Hi%20KoForge%2C%20I%27m%20interested%20in%20the%20Independence%20Day%20offer%20for%20my%20fashion%20brand";

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.564-10.563 5.826 0 10.564 4.738 10.564 10.561s-4.74 10.565-10.564 10.565z" />
  </svg>
);

export default function IndependenceOffer() {
  const testimonials = [
    {
      quote: "The UI/UX design was very creative and impressive. They also handled payment integration, Google Maps, and other essentials really well. It was a great experience working with them.",
      author: "Madhan",
      brand: "Feminiq",
      href: "https://www.feminiq.in/"
    },
    {
      quote: "They delivered an affordable website with a premium look and feel. The quality and support were excellent. Good to work with you, Dharan.",
      author: "prabu",
      brand: "Rani Photo Studio",
      href: "https://ranistudio.framer.website/albums/baby-photography-memories"
    },
    {
      quote: "The e-commerce frontend development was designed very well with a strong UI and UX. It looked polished and modern throughout.",
      author: "aarthy",
      brand: "Kokofresh",
      href: "https://www.kokofresh.in/"
    },
    {
      quote: "We got a very affordable price and excellent support. Rajesh built us a beautiful design that impressed us throughout the process.",
      author: "Rajesh (Client)",
      brand: "Madurai MK Travels",
      href: "https://www.maduraismktravels.in/"
    }
  ];

  const features = [
    {
      title: "Domain Name",
      desc: "Your own .com/.in domain for a year"
    },
    {
      title: "Secure Hosting (1 yr)",
      desc: "Fast, reliable hosting for a full year"
    },
    {
      title: "Professional Design",
      desc: "Neat, responsive UI tailored for fashion brands"
    },
    {
      title: "Admin Dashboard",
      desc: "Manage orders, confirm/reject, update inventory"
    },
    {
      title: "Customer Portal",
      desc: "Login, track orders, view purchase history"
    },
    {
      title: "Razorpay Integration",
      desc: "Secure payments via UPI and cards"
    },
    {
      title: "Review Collector Plugin",
      desc: "Automatically gather and display customer reviews",
      special: true
    },
    {
      title: "Meta Ads Service",
      desc: "Meta ad setup included for website launch",
      special: true
    },
    {
      title: "Google Search Console",
      desc: "Connect your site for SEO insights"
    },
    {
      title: "Meta Pixel Connection",
      desc: "Enable ad tracking with Meta pixel"
    }
  ];

  return (
    <div className="bg-white min-h-screen text-brand-black font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          {/* Independence Badge */}
          <div className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] p-[1.5px] rounded-full mb-6 shrink-0">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[11px] font-bold uppercase tracking-wider whitespace-nowrap">
              <span className="text-sm leading-none">🇮🇳</span>
              <span><span className="text-[#FF9933]">Independence</span> <span className="text-[#138808]">Day</span> Offer — Till 15th Aug</span>
            </div>
          </div>
          
          {/* Main Headline */}
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-black leading-[1.15] tracking-tight max-w-3xl">
            Tiripur&apos;s Fashion Brands Deserve Their Own <span className="text-brand-purple">Store&nbsp;Online</span>
          </h1>
          
          {/* Subheadline */}
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-lg leading-relaxed">
            Stop losing customers to messy WhatsApp DMs. Get your own online store — <strong className="text-brand-black">40% off, limited slots.</strong>
          </p>
          
          {/* Price Box */}
          <div className="mt-8 mb-8 w-full max-w-md">
            <div className="h-1 rounded-t-2xl bg-gradient-to-r from-[#FF9933] via-white to-[#138808]"></div>
            <div className="inline-flex items-center justify-center gap-4 bg-gray-50 border border-gray-200 border-t-0 rounded-b-2xl p-5 sm:p-6 w-full">
              <div className="text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block">Regular</span>
                <span className="text-lg sm:text-xl font-bold text-gray-400 line-through">₹24,999</span>
              </div>
              <div className="h-8 w-[1px] bg-gray-300"></div>
              <div className="text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block">Offer</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-brand-black">₹14,999</span>
              </div>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                40% off
              </span>
            </div>
          </div>
          
          {/* CTA */}
          <div className="w-full sm:w-auto">
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba56] text-white py-4 px-10 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all"
            >
              <WhatsAppIcon />
              <span>Chat on WhatsApp</span>
            </Link>
          </div>

          {/* Trust signals */}
          <div className="mt-4 flex flex-col sm:flex-row items-center gap-2 text-xs text-gray-400 font-semibold">
            <span className="flex items-center gap-1">🔒 Secure payments via Razorpay</span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <span>Trusted by Tamil Nadu brands</span>
          </div>
        </div>
      </section>

      {/* 2. WHY WE OFFER THIS (Combined Story & Founder Note) */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple bg-brand-purple/10 px-3.5 py-1.5 rounded-full">
              Why We Offer This
            </span>
            <h2 className="mt-6 font-heading font-extrabold text-2xl sm:text-4xl text-brand-black tracking-tight">
              A Message from Our Founder, Dharanidharan
            </h2>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-xs">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-6 border-b border-gray-100 pb-6">
              {/* Founder Avatar */}
              <div className="shrink-0 w-16 h-16 rounded-full bg-brand-purple text-white font-heading font-extrabold text-xl flex items-center justify-center shadow-md">
                DD
              </div>
              <div className="text-center md:text-left">
                <h4 className="font-heading font-extrabold text-lg text-brand-black">Dharanidharan</h4>
                <p className="text-xs text-gray-500 font-semibold">Founder — KoForge</p>
              </div>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
              <p>
                "I started KoForge because I saw too many talented brand owners get left behind simply because they didn't have the right online presence — while their competitors scaled past them."
              </p>
              <p>
                "In 2026, most Tiripur fashion brands still don't have a real website. You're competing in a market where customers expect to browse, trust, and buy online — but many brand owners are stuck taking orders through WhatsApp DMs, chasing fake GPay screenshots, and losing customers who simply don't trust a DM-only checkout. Without your own site, you can't scale — no matter how good your products are."
              </p>
              <p className="font-bold text-brand-black">
                "KoForge exists to fix exactly this. I want to help you get online, faster and more affordably, without the usual agency price tag."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT'S INCLUDED SECTION (Compact Feature Grid) */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple bg-brand-purple/10 px-3.5 py-1.5 rounded-full">
              Full Package Details
            </span>
            <h2 className="mt-4 font-heading font-extrabold text-3xl text-brand-black">
              Everything You Get in the ₹14,999 Deal
            </h2>
            <p className="mt-2 text-base text-gray-600 font-normal">
              We handle the entire setup. You do not need any coding or computer knowledge.
            </p>
          </div>

          {/* Compact 2-column grid of feature tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {features.map((feature, idx) => {
              const innerCard = (
                <div className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-150 rounded-xl hover:border-brand-purple/40 transition-colors">
                  <span className="text-emerald-500 text-lg font-bold select-none mt-0.5">✓</span>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-sm sm:text-base text-brand-black flex items-center gap-2">
                      {feature.title}
                      {feature.special && (
                        <span className="bg-[#FF9933] text-white text-[9px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider">
                          Highlight
                        </span>
                      )}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );

              return feature.special ? (
                <div key={idx} className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] p-[2px] rounded-xl">
                  {innerCard}
                </div>
              ) : (
                <div key={idx}>
                  {innerCard}
                </div>
              );
            })}
          </div>
          
        </div>
      </section>

      {/* 4. CLIENT SUCCESS STORIES (Auto-scrolling Testimonials) */}
      <section className="py-20 bg-gray-50 border-b border-gray-100 overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple bg-brand-purple/10 px-3.5 py-1.5 rounded-full">
              Client Success Stories
            </span>
            <h2 className="mt-4 font-heading font-extrabold text-3xl text-brand-black">
              What Other Founders Say About KoForge
            </h2>
            <p className="mt-2 text-base text-gray-600 font-normal">
              Real reviews from business owners who trusted KoForge to build their online presence. Autoplays below.
            </p>
          </div>

          <TestimonialCarousel testimonials={testimonials} />

        </div>
      </section>



      {/* 6. URGENCY / SCARCITY SECTION */}
      <section className="py-20 bg-brand-black text-white text-center relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Badge Scarcity */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-650 text-white mb-6 border border-red-500">
            🚨 Only 3 Brands This Independence Day
          </div>
          
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl leading-tight text-white max-w-2xl mx-auto">
            Take Your Fashion Brand Online Before the Offer Ends
          </h2>
          
          <p className="mt-4 text-base text-gray-350 max-w-xl mx-auto leading-relaxed">
            We only take 3 brands for this special package to ensure we give maximum attention and deliver a premium website.
          </p>
          
          <p className="mt-3 text-sm text-brand-purple font-extrabold uppercase tracking-widest">
            Offer valid till 15th August 2026
          </p>
          
          {/* WhatsApp CTA Button */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba56] text-white py-4 px-8 rounded-xl font-bold text-lg inline-flex items-center gap-3 transition-colors shadow-md"
            >
              <WhatsAppIcon />
              <span>Claim Your Slot on WhatsApp</span>
            </Link>
            <span className="text-[11px] text-gray-400">
              Book your setup session. Only 2 slots remaining.
            </span>
          </div>

        </div>
      </section>

      {/* 7. FINAL CTA SECTION */}
      <section className="py-24 bg-white text-center border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-brand-black leading-tight tracking-tight">
            Your Brand Deserves to Be Online
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
            Let's build your store together — message us on WhatsApp to get started.
          </p>
          
          <div className="mt-8">
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba56] text-white py-4 px-10 rounded-xl font-bold text-lg inline-flex items-center gap-3 shadow-md hover:shadow-lg transition-all"
            >
              <WhatsAppIcon />
              <span>Get Started Now</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CUSTOM MOBILE STICKY BOTTOM BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-150 p-3.5 z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] flex justify-center">
        <Link
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#25D366] hover:bg-[#20ba56] text-white font-bold py-3.5 rounded-xl text-center shadow-md flex items-center justify-center gap-2 text-base transition-colors"
        >
          <WhatsAppIcon />
          <span>Chat on WhatsApp</span>
        </Link>
      </div>

    </div>
  );
}
