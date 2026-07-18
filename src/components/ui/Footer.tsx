import Link from "next/link";
import Image from "next/image";
import WhatsAppCTA from "./WhatsAppCTA";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white pt-16 pb-24 md:pb-8 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="col-span-1 md:col-span-1 space-y-4">
            <Link href="/" className="inline-block">
              <Image src="/koforgelogoico.ico" alt="KoForge Logo" width={48} height={48} className="h-12 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              The engine behind your online sales. We help D2C brands scale beyond marketplaces with high-performance websites and ads.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/website-development" className="text-gray-400 hover:text-brand-purple text-sm transition-colors">
                  eCommerce Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/performance-ads" className="text-gray-400 hover:text-brand-purple text-sm transition-colors">
                  Meta & Google Ads
                </Link>
              </li>
              <li>
                <Link href="/services/influencer-marketing" className="text-gray-400 hover:text-brand-purple text-sm transition-colors">
                  Influencer Marketing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-brand-purple text-sm transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-brand-purple text-sm transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-brand-purple text-sm transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex flex-col text-sm text-gray-400">
                <span className="font-semibold text-gray-300">Phone</span>
                <a href="tel:+918838235891" className="hover:text-brand-purple transition-colors">+91 88382 35891</a>
              </li>
              <li className="flex flex-col text-sm text-gray-400">
                <span className="font-semibold text-gray-300">Email</span>
                <a href="mailto:koforge.official@gmail.com" className="hover:text-brand-purple transition-colors">koforge.official@gmail.com</a>
              </li>
              <li className="flex flex-col text-sm text-gray-400">
                <span className="font-semibold text-gray-300">Location</span>
                <span>Madurai, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} KoForge. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="https://www.instagram.com/koforge.official/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-purple transition-colors">
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/koforge-undefined-06891a422/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-purple transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <WhatsAppCTA variant="outline" className="px-4 py-1.5 text-xs">Message Us</WhatsAppCTA>
          </div>
        </div>
      </div>
    </footer>
  );
}
