import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    headline: 'Reliable Electrical & Solar Solutions',
    sub: 'for Modern Homes and Businesses',
    desc: 'SECOL Electric delivers professional electrical, solar, and engineering solutions designed for safety, efficiency, reliability, and long-term performance.',
    bg: 'from-[#1a1200] via-[#0f0a00] to-[#0A0A0A]',
    badge: 'Electrical • Solar • Smart Solutions',
  },
  {
    headline: 'Go Solar, Cut Costs.',
    sub: 'Uninterrupted Power. Every Day.',
    desc: 'Professional solar panel and inverter installations tailored for Nigerian homes and businesses — designed to deliver clean energy and eliminate downtime.',
    bg: 'from-[#001a0a] via-[#000f05] to-[#0A0A0A]',
    badge: 'Solar Panels • Inverters • Batteries',
  },
  {
    headline: 'Secure, Automate.',
    sub: 'Smart Solutions for Modern Living.',
    desc: 'From CCTV surveillance to smart lighting and automated power control — we help you take full control of your home or office with intelligent technology.',
    bg: 'from-[#00111a] via-[#00080f] to-[#0A0A0A]',
    badge: 'CCTV • Smart Home • Automation',
  },
];


export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const t = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const s = slides[current];

  return (
    <section id="home" className={`relative min-h-screen flex flex-col justify-center bg-gradient-to-b ${s.bg} transition-all duration-1000 overflow-hidden`}>
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(#F5C300 1px, transparent 1px), linear-gradient(90deg, #F5C300 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-[120px] opacity-20"
        style={{ backgroundColor: '#F5C300' }} />

      <div className="relative  max-w-6xl mx-auto px-4 pt-28 pb-16">
        <div key={current} className={`transition-all duration-700 ease-out ${direction === 1 ? 'slide-in-right' : direction === -1 ? 'slide-in-left' : ''}`}>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-[#F5C300]/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#F5C300] animate-pulse" />
            <span className="text-[#F5C300] text-xs font-semibold tracking-widest uppercase">{s.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-full font-black leading-[1.05] tracking-tight mb-2 max-w-2xl">
            {s.headline}
          </h1>
          <h2 className="text-4xl md:text-full font-black leading-[1.05] tracking-tight mb-6 max-w-2xl text-[#F5C300]">
            {s.sub}
          </h2>

          <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed mb-10">
            {s.desc}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-16">
            <a href="#contact"
              className="flex items-center gap-2 bg-[#F5C300] text-black font-bold px-6 py-3.5 rounded-full hover:bg-yellow-400 transition-colors text-sm">
              Request a Quote <ArrowRight size={16} />
            </a>
            <a href="#projects"
              className="flex items-center gap-2 border border-white/20 text-white font-semibold px-6 py-3.5 rounded-full hover:border-[#F5C300]/50 hover:text-[#F5C300] transition-colors text-sm">
             Recent Projects
            </a>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-[#F5C300]' : 'w-3 bg-[#2A2A2A] hover:bg-[#3A3A3A]'}`}
            />
          ))}
        </div>
      </div>

      {/* WhatsApp FAB */}
      <a href="https://wa.me/2348061544551" target="_blank" rel="noreferrer"
        className="fixed bottom-6 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform bg-[#25D366]">
        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </section>
  );
}
