import { Zap } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Recent Projects', href: '#projects' },
  { label: 'Testimonials', href: '#reviews' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-[#1A1A1A] pt-14 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#home" className="flex w-32 h-32">
            <img src="/secol-logo.png" alt="SECOL Electric Logo" className="w-full h-full" />
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Reliable electrical, solar, security, and automation solutions for homes, businesses, and industrial facilities.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a href="https://facebook.com/secolelectricc" target="_blank" rel="noreferrer"
                className="w-8 h-8 bg-[#1A1A1A] border border-[#2A2A2A] rounded-full flex items-center justify-center hover:border-[#F5C300]/40 transition-colors">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/secol_electric" target="_blank" rel="noreferrer"
                className="w-8 h-8 bg-[#1A1A1A] border border-[#2A2A2A] rounded-full flex items-center justify-center hover:border-[#F5C300]/40 transition-colors">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://wa.me/2348061544551" target="_blank" rel="noreferrer"
                className="w-8 h-8 bg-[#1A1A1A] border border-[#2A2A2A] rounded-full flex items-center justify-center hover:border-[#F5C300]/40 transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-400">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4">Quick Links</p>
            <ul className="space-y-2.5">
              {quickLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-gray-400 text-sm hover:text-[#F5C300] transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4">Contact Information</p>
            <div className="space-y-3 text-sm text-gray-400">
              <p>0802 407 6937</p>
             <p className="leading-relaxed"> Shop 1, Beside Ola David School, Along Badeku Road, Badeku, Ibadan</p>
              <p>Open 9:00 AM Closes at 7:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1A1A1A] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">© 2026 SECOL Electric. All Rights Reserved.</p>
          <p className="text-gray-700 text-xs">Ibadan, Oyo State, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
