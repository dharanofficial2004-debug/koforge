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
              <Image src="/koforgelogo.png" alt="KoForge Logo" width={160} height={48} className="h-12 w-auto" />
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
          <div className="flex space-x-6">
            <WhatsAppCTA variant="outline" className="px-4 py-1.5 text-xs">Message Us</WhatsAppCTA>
          </div>
        </div>
      </div>
    </footer>
  );
}
