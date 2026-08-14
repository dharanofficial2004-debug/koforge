import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import StickyWhatsApp from "@/components/ui/StickyWhatsApp";
import MobileBottomBar from "@/components/ui/MobileBottomBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://koforge.com"),
  title: {
    default: "KoForge | eCommerce Growth Agency",
    template: "%s | KoForge",
  },
  description: "The engine behind your online sales. Expert eCommerce website development, performance marketing, and influencer marketing for D2C brands.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://koforge.com",
    siteName: "KoForge",
    title: "KoForge | eCommerce Growth Agency",
    description: "The engine behind your online sales. Expert eCommerce website development, performance marketing, and influencer marketing for D2C brands.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KoForge - eCommerce Growth Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KoForge | eCommerce Growth Agency",
    description: "The engine behind your online sales.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness Schema for KoForge
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "KoForge",
    image: "https://koforge.com/koforgelogoico.ico",
    "@id": "https://koforge.com",
    url: "https://koforge.com",
    telephone: "+918838235891",
    email: "koforge.official@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Madurai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 9.925201, // Approximate coords for Madurai
      longitude: 78.119775,
    },
    slogan: "The engine behind your online sales.",
    description: "eCommerce growth agency offering website development, performance ads, and influencer marketing.",
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col selection:bg-brand-purple selection:text-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyWhatsApp />
        <MobileBottomBar />

        {/* Microsoft Clarity — deferred after page is interactive */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xqavtsyr7v");`,
          }}
        />

        {/* Meta Pixel — deferred after page is interactive */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '1644790604100580');fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1644790604100580&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
