import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[50] transition-all duration-300`}>
      <div className={`max-w-6xl mx-auto px-4 h-16 flex items-center justify-between  ${scrolled ? 'bg-black/95 backdrop-blur-sm border-b border-white/5' : 'bg-transparent'}`}>
        {/* Logo */}
       <a href="#home" className="flex w-32 h-32">
         <img src="/secol-logo.png" alt="SECOL Electric Logo" className="w-full h-full" />
        </a>
        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(l => (
            <a key={l.label} href={l.href}
              className="text-sm text-gray-300 hover:text-[#F5C300] transition-colors font-medium">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 bg-[#F5C300] text-black text-sm font-bold px-4 py-2 rounded-full hover:bg-yellow-400 transition-colors">
            Request a Quote
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-[100] flex flex-col px-4 pt-4">
          <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
            <a href="#home" onClick={() => setOpen(false)} className="w-24 h-24">
              <img src="/secol-logo.png" alt="SECOL Electric Logo" className="w-full h-full" />
            </a>
            <button onClick={() => setOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center items-start mb-12">
            <div className="space-y-4 px-4 text-start w-full max-w-sm">
              {navLinks.map(l => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                  className="block py-3 text-xl text-gray-300 hover:text-[#F5C300] font-bold transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)}
                className="block mt-8 bg-[#F5C300] text-black font-bold text-center  py-3 rounded-full text-base">
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
