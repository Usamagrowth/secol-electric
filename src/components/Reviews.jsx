import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: 'Shindharah Ayo',
    role: 'Nail Studio Owner',
    rating: 5,
    text: 'He handled all the electrical installations for my nail studio, and I\'m really impressed with the quality of his work. Everything was done efficiently, safely, and on time. Definitely someone I\'d recommend for any electrical project!',
    initials: 'SA',
  },
  {
    name: 'Taiwo Adewale',
    role: 'Homeowner',
    rating: 5,
    text: 'You choose SECOL Electric, you choose the best. I\'m so impressed with his work — so fast, perfect and very neat. I\'m so glad that I chose right.',
    initials: 'TA',
  },
  {
    name: 'Bisi Okonkwo',
    role: 'Business Owner',
    rating: 5,
    text: 'Professional team, excellent delivery. They installed our solar system and we\'ve had zero issues since. Very transparent with pricing — no surprises at the end.',
    initials: 'BO',
  },
  {
    name: 'Emmanuel Faleye',
    role: 'Estate Manager',
    rating: 5,
    text: 'SECOL handled the complete wiring and CCTV setup for our estate. Very skilled, tidy work, and they explained everything clearly. Highly recommended.',
    initials: 'EF',
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < count ? 'text-[#F5C300]' : 'text-gray-700'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((idx - 1 + reviews.length) % reviews.length);
  const next = () => setIdx((idx + 1) % reviews.length);

  const r = reviews[idx];

  return (
    <section id="reviews" className="py-20 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#F5C300]" />
          <span className="text-[#F5C300] text-xs font-semibold tracking-widest uppercase">Testimonials</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-black leading-tight">
              What Our <span className="text-[#F5C300]">Clients Say</span>
            </h2>
            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1.5 bg-[#1A1A1A] border border-[#2A2A2A] rounded-full px-3 py-1.5">
                <Stars count={5} />
                <span className="text-white font-bold text-sm ml-1">4.6</span>
                <span className="text-gray-500 text-xs">/ 13+ reviews</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-[#2A2A2A] flex items-center justify-center hover:border-[#F5C300]/50 transition-colors">
              <ChevronLeft size={18} />
            </button>
            <button onClick={next} className="w-10 h-10 rounded-full border border-[#2A2A2A] flex items-center justify-center hover:border-[#F5C300]/50 transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Featured + grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Featured */}
          <div className="bg-[#111111] border border-[#F5C300]/25 rounded-2xl p-6 md:p-8">
            <div className="text-[#F5C300] text-5xl font-black leading-none mb-4 opacity-40">"</div>
            <p className="text-white text-base leading-relaxed mb-6">{r.text}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F5C300] flex items-center justify-center font-bold text-black text-sm">
                  {r.initials}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{r.name}</p>
                  <p className="text-gray-500 text-xs">{r.role}</p>
                </div>
              </div>
              <Stars count={r.rating} />
            </div>
          </div>

          {/* Other reviews stacked */}
          <div className="space-y-3">
            {reviews.filter((_, i) => i !== idx).slice(0, 3).map((rv) => (
              <div key={rv.name} className="bg-[#0D0D0D] border border-[#1E1E1E] rounded-xl p-4 hover:border-[#F5C300]/20 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#1E1E1E] flex items-center justify-center text-[#F5C300] text-xs font-bold">
                    {rv.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{rv.name}</p>
                    <p className="text-gray-600 text-xs">{rv.role}</p>
                  </div>
                  <Stars count={rv.rating} />
                </div>
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{rv.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all ${i === idx ? 'w-8 bg-[#F5C300]' : 'w-3 bg-[#2A2A2A]'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
