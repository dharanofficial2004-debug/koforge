interface TestimonialCardProps {
  quote: string;
  author: string;
  brand: string;
}

export default function TestimonialCard({ quote, author, brand }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
      <div className="text-brand-purple mb-4 opacity-30">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.714 4.025-10.609 9.983-10.609h.001v3.916c-3.13 0-5.025 2.158-5.025 5.918v.575h5.024v7.591h-10.017zm-14.017 0v-7.391c0-5.714 4.024-10.609 9.983-10.609h.001v3.916c-3.131 0-5.026 2.158-5.026 5.918v.575h5.025v7.591h-10.017z" />
        </svg>
      </div>
      <p className="text-gray-700 italic mb-6 leading-relaxed">"{quote}"</p>
      <div>
        <h4 className="font-bold text-brand-black">{author}</h4>
        <p className="text-sm text-brand-purple font-medium">{brand}</p>
      </div>
    </div>
  );
}
