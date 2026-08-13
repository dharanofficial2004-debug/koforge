import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Business Automation",
  description: "Automate your blog, social media, payslip, and Meta ads workflows to save hours every week and scale without hiring more hands.",
};

const automationServices = [
  {
    title: "Blog Automation",
    desc: "AI-powered content pipelines that research, write, edit, and publish SEO-optimized blogs on autopilot — keeping your site fresh without burning your team's time.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: "Social Media Automation",
    desc: "Scheduled posts, auto-generated captions, and content calendars that keep every platform active and consistent — growth without the daily grind.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Payslip Automation",
    desc: "Generate and distribute error-free payslips, salary breakdowns, and payroll reports automatically — no more manual spreadsheets every month.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Meta Ad Automation",
    desc: "Smart rules and AI-driven workflows that pause, scale, and reallocate ad budgets in real time — max ROAS with minimal manual babysitting.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const benefits = [
  { title: "Save 20+ Hours Weekly", desc: "Eliminate repetitive manual work so your team can focus on growth, not busywork." },
  { title: "Zero Human Errors", desc: "Automated workflows follow the exact same steps every single time, every single day." },
  { title: "Scale Without Hiring", desc: "Do more with the same team by letting software handle the heavy lifting." },
  { title: "Full Visibility & Control", desc: "Dashboards and logs keep you in the loop on every automated action." },
];

export default function AutomationService() {
  return (
    <div className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Breadcrumbs */}
        <nav className="flex text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="hover:text-brand-purple">Home</Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <Link href="/services" className="hover:text-brand-purple ml-1 md:ml-2">Services</Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="ml-1 text-gray-800 md:ml-2 font-semibold">Automation</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-6">Business Automation</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We build automated workflows for your blog, social media, payslips, and Meta ads — so your business runs on autopilot while you focus on growth.
            </p>
            <div className="flex gap-4">
              <WhatsAppCTA className="px-8 py-4">Get a Free Automation Audit</WhatsAppCTA>
            </div>
          </div>
          <div className="bg-gray-100 rounded-3xl h-80 overflow-hidden border border-gray-200 shadow-inner relative">
            <Image
              src="/automationheroimage.webp"
              alt="Business Automation"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-brand-black mb-10 text-center">What We Automate</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {automationServices.map((service) => (
            <div key={service.title} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-purple/30 transition-all duration-300">
              <div className="w-14 h-14 bg-purple-50 text-brand-purple rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-brand-black mb-10 text-center">Why Automate?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
          {benefits.map((benefit, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-purple-50 text-brand-purple rounded-full flex items-center justify-center mb-4 font-bold">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-brand-black text-white p-12 rounded-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to put your business on autopilot?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s talk automation for your business. Call us on +91 88382 35891 or message us below.
          </p>
          <WhatsAppCTA variant="primary" className="px-10 py-4">Discuss Your Automation</WhatsAppCTA>
        </div>

      </div>
    </div>
  );
}
