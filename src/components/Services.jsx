import { useState } from 'react';
import { ChevronDown, ArrowRight, Zap, Sun, Shield, CloudLightning, Wind, Home } from 'lucide-react';

const services = [
  {
    icon: <Zap size={20} className="text-black" />,
    title: 'Electrical Installation Services',
    desc: 'Safe, clean, and professional electrical installations for residential, commercial, and industrial properties.',
    items: ['Conduit wiring installation', 'Electrical fittings & accessories', 'Distribution board installation', 'Maintenance & electrical upgrades'],
    cta: 'Request Service',
  },
  {
    icon: <Sun size={20} className="text-black" />,
    title: 'Solar Energy Solutions',
    desc: 'Reliable solar power systems designed to reduce electricity costs and provide uninterrupted power supply.',
    items: ['Solar panel installation', 'Inverter & lithium battery systems', 'Solar maintenance & upgrades', 'Energy consultation & system sizing'],
    cta: 'Go Solar Today',
  },
  {
    icon: <Shield size={20} className="text-black" />,
    title: 'CCTV & Surveillance Systems',
    desc: 'Advanced security and surveillance solutions designed to improve monitoring, safety, and peace of mind.',
    items: ['CCTV camera installation', 'Remote viewing setup', 'Office & home surveillance systems', 'Maintenance & troubleshooting'],
    cta: 'Secure Your Space',
  },
  {
    icon: <CloudLightning size={20} className="text-black" />,
    title: 'Thunder Arrestor Installation',
    desc: 'Protect your building, equipment, and electrical systems from lightning damage with professionally installed systems.',
    items: ['Lightning protection systems', 'Earthing & grounding solutions', 'Surge protection installation', 'System inspection & maintenance'],
    cta: 'Protect Your Property',
  },
  {
    icon: <Wind size={20} className="text-black" />,
    title: 'HVAC / AC Installation Services',
    desc: 'Professional air conditioning installation and maintenance services for comfortable and energy-efficient environments.',
    items: ['Split unit AC installation', 'AC maintenance & servicing', 'Commercial cooling systems', 'Fault diagnosis & repairs'],
    cta: 'Book AC Installation',
  },
  {
    icon: <Home size={20} className="text-black" />,
    title: 'Smart Home & Automation',
    desc: 'Modern automation solutions that give you greater control, convenience, energy efficiency, and security.',
    items: ['Smart lighting systems', 'Automated power control', 'Smart switches & sockets', 'Integrated home automation'],
    cta: 'Upgrade Your Home',
  },
];

function ServiceItem({ s, isOpen, onToggle }) {
  return (
    <div className={`border rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#F5C300]/40 bg-[#111111]' : 'border-[#1E1E1E] bg-[#0D0D0D]'}`}>
      <button onClick={onToggle}
        className="w-full flex items-center gap-4 px-5 py-4 text-left">
        <div className="w-9 h-9 bg-[#F5C300] rounded-lg flex items-center justify-center shrink-0">
          {s.icon}
        </div>
        <span className="font-bold text-white flex-1 text-sm md:text-base">{s.title}</span>
        <ChevronDown size={18} className={`text-gray-500 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-[#F5C300]' : ''}`} />
      </button>

      {isOpen && (
        <div className="px-5 pb-5 animate-fade-up">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.desc}</p>
          <ul className="space-y-2 mb-5">
            {s.items.map(item => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-gray-300">
                <div className="w-4 h-4 rounded-full bg-[#F5C300]/15 flex items-center justify-center shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F5C300]" />
                </div>
                {item}
              </li>
            ))}
          </ul>
          <a href="#contact"
            className="inline-flex items-center gap-2 bg-[#F5C300] text-black font-bold text-sm px-5 py-2.5 rounded-full hover:bg-yellow-400 transition-colors">
            {s.cta} <ArrowRight size={14} />
          </a>
        </div>
      )}
    </div>
  );
}

export default function Services() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="services" className="py-20 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#F5C300]" />
          <span className="text-[#F5C300] text-xs font-semibold tracking-widest uppercase">Our Services</span>
        </div>

        <div className="md:flex md:gap-16 md:items-start mb-12">
          <h2 className="text-3xl md:text-4xl font-black leading-tight md:max-w-sm">
            Reliable Electrical & Solar Solutions <span className="text-[#F5C300]">for Modern Homes and Businesses</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mt-4 md:mt-1 md:max-w-sm">
            We provide safe, efficient, and long-lasting electrical and solar solutions for residential, commercial, and industrial projects.
          </p>
        </div>

        <div className="space-y-3">
          {services.map((s, i) => (
            <ServiceItem key={s.num} s={s} isOpen={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
