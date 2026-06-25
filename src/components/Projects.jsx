import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const projects = [
  {
    image: '/project1.jpg',
    title: 'Solar Panel Installation',
    category: 'Solar Energy',
    desc: 'Full rooftop solar panel array installed for a residential property in Ibadan.',
    color: 'from-yellow-900/40 to-transparent',
  },
  {
    image: '/project2.jpg',
    title: 'Solar Inverter & Battery Backup',
    category: 'Solar Energy',
    desc: 'Inverter and lithium battery system providing 24/7 backup power for a commercial office.',
    color: 'from-amber-900/40 to-transparent',
  },
  {
    image: '/project1.jpg',
    title: 'Residential Electrical Wiring',
    category: 'Electrical',
    desc: 'Complete conduit wiring and distribution board installation for a new 4-bedroom duplex.',
    color: 'from-orange-900/30 to-transparent',
  },
  {
    image: '/project2.jpg',
    title: 'Thunder Arrestor Installation',
    category: 'Protection',
    desc: 'Lightning protection and earthing system installed to secure a multi-storey building.',
    color: 'from-purple-900/30 to-transparent',
  },
  {
    image: '/project1.jpg',
    title: 'CCTV Surveillance System',
    category: 'Security',
    desc: 'Multi-camera CCTV setup with remote viewing configured for a retail store.',
    color: 'from-blue-900/30 to-transparent',
  },
  {
    image: '/project2.jpg',
    title: 'HVAC / AC Installation',
    category: 'HVAC',
    desc: 'Split unit AC installation and commissioning across 6 rooms in a commercial facility.',
    color: 'from-teal-900/30 to-transparent',
  },
];

const categoryColors = {
  'Solar Energy': 'bg-yellow-500/10 text-yellow-400',
  'Electrical': 'bg-orange-500/10 text-orange-400',
  'Protection': 'bg-purple-500/10 text-purple-400',
  'Security': 'bg-blue-500/10 text-blue-400',
  'HVAC': 'bg-teal-500/10 text-teal-400',
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#F5C300]" />
          <span className="text-[#F5C300] text-xs font-semibold tracking-widest uppercase">Recent Projects</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-black leading-tight max-w-md">
            Work We're <span className="text-[#F5C300]">Proud Of</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-sm">
            Explore completed electrical, solar, CCTV, and lightning protection projects delivered with quality workmanship.
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            className="destination-button-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-[#111111] border border-[#2A2A2A] rounded-full flex items-center justify-center text-white hover:bg-[#F5C300] hover:border-[#F5C300] hover:text-black transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="destination-button-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-[#111111] border border-[#2A2A2A] rounded-full flex items-center justify-center text-white hover:bg-[#F5C300] hover:border-[#F5C300] hover:text-black transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>

          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Autoplay, Navigation]}
            speed={1500}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={{
              nextEl: '.destination-button-next',
              prevEl: '.destination-button-prev',
            }}
            className="w-full"
          >
            {projects.map((p) => (
              <SwiperSlide key={p.title}>
                <div className="group relative bg-[#111111] border border-[#1E1E1E] rounded-xl p-5 overflow-hidden hover:border-[#F5C300]/30 transition-all duration-300 h-full">
                  {/* bg gradient accent */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className="relative">
                    {/* Project Image */}
                    <div className="w-full h-40 md:h-48 bg-[#1A1A1A] rounded-lg mb-4 flex items-center justify-center overflow-hidden border border-[#252525]">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${categoryColors[p.category] || 'bg-gray-800 text-gray-400'}`}>
                          {p.category}
                        </span>
                        <h3 className="font-bold text-white mt-2 mb-1.5 text-sm leading-snug">{p.title}</h3>
                        <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                      </div>
                      <a href="#contact" className="w-8 h-8 border border-[#2A2A2A] rounded-full flex items-center justify-center group-hover:bg-[#F5C300] group-hover:border-[#F5C300] transition-colors shrink-0">
                        <ArrowUpRight size={14} className="group-hover:text-black transition-colors" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
