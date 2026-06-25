const stats = [
  { value: '40+', label: 'Projects Completed' },
  { value: '7+', label: 'Years Experience' },
  { value: '4.6★', label: 'Client Rating' },
];

const reasons = [
  { num: '01', title: 'Experienced Professionals', desc: 'Our team brings practical knowledge and hands-on experience to every project.' },
  { num: '02', title: 'Quality Workmanship', desc: 'We focus on neat installations, attention to detail, and long-lasting results.' },
  { num: '03', title: 'Safety First', desc: 'Every installation is carried out with safety and industry best practices in mind.' },
  { num: '04', title: 'Transparent Pricing', desc: 'Clear quotations with no hidden charges — you know exactly what you\'re paying for.' },
  { num: '05', title: 'Reliable Support', desc: 'We\'re available to assist before, during, and after installation.' },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#F5C300]" />
          <span className="text-[#F5C300] text-xs font-semibold tracking-widest uppercase">Why Choose SECOL Electric</span>
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-16 md:items-start">
          {/* Left */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6">
              Electrical & Solar Done <span className="text-[#F5C300]">Right.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              We deliver electrical, solar, security, and power solutions with a commitment to safety, reliability, and customer satisfaction.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-4 mb-10">
              {stats.map(s => (
                <div key={s.label} className="bg-[#111111] border border-[#1E1E1E] rounded-xl p-3 sm:p-4 text-center">
                  <p className="text-xl sm:text-2xl font-black text-[#F5C300]">{s.value}</p>
                  <p className="text-gray-500 text-[9px] sm:text-[10px] uppercase tracking-wider mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — reasons */}
          <div className="mt-10 md:mt-0 space-y-0">
            {reasons.map((r, i) => (
              <div key={r.num}
                className={`flex gap-4 py-5 ${i < reasons.length - 1 ? 'border-b border-[#1A1A1A]' : ''}`}>
                <span className="text-[#F5C300] text-xs font-bold pt-0.5 w-6 shrink-0">{r.num}</span>
                <div>
                  <h3 className="font-bold text-white text-sm mb-1">{r.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
