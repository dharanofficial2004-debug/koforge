import Link from "next/link";
import { ReactNode } from "react";

interface WhatsAppCTAProps {
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

const WHATSAPP_URL = "https://wa.me/918838235891?text=Hi%20KoForge,%20I%20want%20to%20know%20more%20about%20your%20services";

export default function WhatsAppCTA({ children = "Chat on WhatsApp", className = "", variant = "primary" }: WhatsAppCTAProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-md transition-all duration-300 ease-in-out px-6 py-3";
  
  const variants = {
    primary: "bg-brand-purple text-white hover:bg-purple-600 hover:shadow-lg hover:-translate-y-1",
    secondary: "bg-brand-black text-white hover:bg-gray-800 hover:shadow-lg",
    outline: "border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white"
  };

  return (
    <Link 
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
