import { Metadata } from "next";
import Link from "next/link";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  return {
    title: `${params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | KoForge Blog`,
    description: "Read the latest eCommerce growth insights from KoForge.",
  };
}

export default async function BlogPost(
  props: { params: Promise<{ slug: string }> }
) {
  const params = await props.params;
  const title = params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  return (
    <article className="py-20 md:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="text-brand-orange font-semibold hover:underline mb-8 inline-block">
          &larr; Back to Blog
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-6">{title}</h1>
        <div className="flex items-center text-gray-500 text-sm mb-12">
          <span>Published recently</span>
          <span className="mx-2">•</span>
          <span>5 min read</span>
        </div>
        
        <div className="prose prose-lg prose-orange max-w-none text-gray-700">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">This is a placeholder for the blog post content. In a production environment, this content would be fetched from a headless CMS (like Sanity, Contentful, or Strapi) or loaded from local MDX files.</p>
          <h2 className="text-2xl font-bold text-brand-black mb-4 mt-8">The Problem</h2>
          <p className="mb-6 leading-relaxed">Many D2C founders struggle with scaling their revenue profitably. They throw money at Meta ads without optimizing their storefront, leading to high bounce rates and wasted spend.</p>
          <h2 className="text-2xl font-bold text-brand-black mb-4 mt-8">The Solution</h2>
          <p className="mb-6 leading-relaxed">You need a cohesive strategy that combines high-converting UI/UX with data-driven media buying. That's exactly what we specialize in.</p>
        </div>

        <div className="mt-16 pt-10 border-t border-gray-200">
          <div className="bg-brand-black text-white p-8 md:p-12 rounded-3xl text-center">
            <h3 className="text-2xl font-bold mb-4">Want these results for your brand?</h3>
            <p className="mb-8 text-gray-300">We help D2C brands scale beyond marketplaces with high-performance eCommerce websites and Ads.</p>
            <WhatsAppCTA variant="primary" className="px-8 py-3">Let's Talk Growth</WhatsAppCTA>
          </div>
        </div>
      </div>
    </article>
  );
}
