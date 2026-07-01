import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: 'Goal Achiever',
    role: 'Business Owner',
    rating: 5,
    text: 'Honestly didn’t think I’d be the type to leave a review but this man deserves it. Got my solar panel installed and the difference is night and day; literally. 24 hours of electricity, no interruptions, no stress. I didn’t realize how much power cuts were affecting my day to day until they just… stopped.The installation was clean, he knew exactly what he was doing, explained everything without making me feel dumb about it, and didn’t leave a mess behind. Professional from start to finish. If you’re on the fence about solar, stop thinking and just do it. And if you’re looking for someone who actually knows their work, this is your guy. 10/10 no hesitation.',
    initials: 'GA',
  },
  {
    name: 'Shin dha rah Ayo',
    role: 'Nail Studio Owner',
    rating: 5,
    text: 'He handled all the electrical installations for my nail studio, and I’m really impressed with the quality of his work. Everything was done efficiently, safely, and on time. Definitely someone I’d recommend for any electrical project!',
    initials: 'SA',
  },
  {
    name: 'Hassan Adul Rasaq',
    role: 'Business Owner',
    rating: 5,
    text: 'SECOL Electric truly outdid themselves with their exceptional service! Their team of expert electricians delivered safe, efficient, and reliable electrical solutions, showcasing their years of experience and expertise. From wiring and installations to maintenance, they handled everything with precision and care. Whether residential, commercial, or industrial, SECOL Electric is a trusted and licensed contractor you can count on. Highly recommended by Rhozlhan Energy and Gadget.',
    initials: 'HR',
  },
  {
    name: 'Rofiat Ajibola',
    role: 'House Owner',
    rating: 5,
    text: '@SECOL thank you so much for doing the neat work for us our house is so beautiful now even the wiring is so neat💯. Don’t worry you will see customers from us trust me my mum even said we should greet you very well for all the work you did for us. Thank you so much God will bless you and your company insha Allah we really appreciate a lot 🙏💯😍',
    initials: 'RA',
  },
   {
    name: 'Oluleye Abosede Mary',
    role: 'House Owner',
    rating: 5,
    text: 'Secol electrics every day,every time. More than a year working experience with me and I can testify that secol is affordable, reliable and dependable any day,any time. Thanks so much for the neat and stress-free work done ✅ I recommend u 100% From a satisfied customer Marybee🤟',
    initials: 'MB',
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
                <span className="text-gray-500 text-xs">/ 14+ reviews</span>
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
