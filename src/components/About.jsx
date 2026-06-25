import { ShieldCheck, Star, Clock, Users } from 'lucide-react';

const values = [
  { icon: <ShieldCheck size={20} />, title: 'Safety First', desc: 'Every installation follows strict safety standards and industry best practices.' },
  { icon: <Star size={20} />, title: 'Quality Work', desc: 'Neat, professional installations built to last with attention to every detail.' },
  { icon: <Clock size={20} />, title: 'Reliable & On Time', desc: 'We show up when we say we will and complete jobs as promised.' },
  { icon: <Users size={20} />, title: 'Client Focused', desc: 'We listen, advise honestly, and deliver solutions that truly fit your needs.' },
];

export default function About() {
  return (
    <section id="about" className="py-10 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#F5C300]" />
          <span className="text-[#F5C300] text-xs font-semibold tracking-widest uppercase">About Us</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6">
              Powering Homes and Businesses with <span className="text-[#F5C300]">Reliable Solutions</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              SECOL Electric is a professional electrical and solar solutions company committed to delivering safe, reliable, and high-quality installations. From electrical wiring and solar energy systems to CCTV surveillance, thunder arrestor installation, HVAC services, and smart home solutions, we help homes and businesses achieve greater efficiency, safety, and peace of mind.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Based in Ibadan, Nigeria, our licensed team brings hands-on expertise to every project — big or small — with a commitment to getting it right the first time.
            </p>

            {/* Stats row */}
            <div className="flex gap-8">
              {[['40+', 'Projects'], ['7+', 'Years'], ['4.6★', 'Rating']].map(([val, lbl]) => (
                <div key={lbl}>
                  <p className="text-2xl font-black text-[#F5C300]">{val}</p>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mt-0.5">{lbl}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map(v => (
              <div key={v.title} className="bg-[#111111] border border-[#1E1E1E] rounded-xl p-5 hover:border-[#F5C300]/30 transition-colors">
                <div className="w-9 h-9 bg-[#F5C300]/10 rounded-lg flex items-center justify-center text-[#F5C300] mb-3">
                  {v.icon}
                </div>
                <h3 className="font-bold text-white text-sm mb-1.5">{v.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
