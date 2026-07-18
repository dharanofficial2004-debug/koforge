import { Metadata } from "next";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with KoForge in Madurai. Let's discuss your eCommerce growth strategy.",
};

export default function Contact() {
  return (
    <div className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-black mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600">Let's build your eCommerce growth engine.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-brand-black mb-8">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-orange focus:ring-brand-orange sm:text-sm p-3 border" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email or Phone</label>
                <input type="text" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-orange focus:ring-brand-orange sm:text-sm p-3 border" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-orange focus:ring-brand-orange sm:text-sm p-3 border" required></textarea>
              </div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors">
                Send Message
              </button>
            </form>
            
            <div className="mt-8 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <span className="text-xs text-center text-gray-500 uppercase">Or connect via</span>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div className="mt-8 flex justify-center">
              <WhatsAppCTA className="w-full">Chat on WhatsApp</WhatsAppCTA>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-brand-black mb-8">Contact Information</h2>
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-brand-orange mr-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="font-bold text-brand-black">Office Location</h3>
                  <p className="text-gray-600">Madurai, Tamil Nadu, India</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="h-6 w-6 text-brand-orange mr-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="font-bold text-brand-black">Email</h3>
                  <a href="mailto:koforge.official@gmail.com" className="text-brand-orange hover:underline">koforge.official@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="h-6 w-6 text-brand-orange mr-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h3 className="font-bold text-brand-black">Phone / WhatsApp</h3>
                  <a href="tel:+918838235891" className="text-brand-orange hover:underline">+91 88382 35891</a>
                </div>
              </div>
            </div>
            
            <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden relative border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125766.19249767222!2d78.04041926615876!3d9.917826279140924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
