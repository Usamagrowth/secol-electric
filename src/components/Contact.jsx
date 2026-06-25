import { useState } from 'react';
import { Phone, MapPin, Clock, Send, AlertCircle } from 'lucide-react';

const services = [
  'Electrical Installation',
  'Solar Energy Solutions',
  'CCTV & Surveillance',
  'Thunder Arrestor',
  'HVAC / AC Installation',
  'Smart Home & Automation',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = () => {
    if (!form.name || !form.phone || !form.service || !form.message) {
      setError('Please fill in all required fields');
      setTimeout(() => setError(''), 3000);
      return;
    }
    const msg = `Hello SECOL Electric! 👋%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service || 'Not specified'}%0AMessage: ${form.message || 'No additional message'}`;
    window.open(`https://wa.me/2348061544551?text=${msg}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass = "w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#F5C300]/50 transition-colors";

  return (
    <section id="contact" className="py-20 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#F5C300]" />
          <span className="text-[#F5C300] text-xs font-semibold tracking-widest uppercase">Get In Touch</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black leading-tight mb-3">
              Let's Discuss <span className="text-[#F5C300]">Your Project.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Tell us about your project, and our team will provide the guidance and support you need to get started. No pushy sales — just honest answers.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#F5C300]/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-[#F5C300]" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Phone</p>
                  <p className="text-gray-400 text-sm">+234 806 154 4551</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#F5C300]/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#F5C300]" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Location</p>
                  <p className="text-gray-400 text-sm">Ibadan, Nigeria</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#F5C300]/10 rounded-full flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-[#F5C300]" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Working Hours</p>
                  <p className="text-gray-400 text-sm">Mon - Sat: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden border border-[#1E1E1E]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.748423789123!2d3.9379!3d7.3775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10378f3f0f0f0f0f%3A0x0!2sIbadan%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#111111] border border-[#1E1E1E] rounded-2xl p-4 sm:p-6">
            <h3 className="font-bold text-white mb-5">Get a Free Quote</h3>

            {/* Error Alert */}
            {error && (
              <div className="mb-4 flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2.5">
                <AlertCircle size={16} className="text-red-400 shrink-0" />
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Full Name</label>
                <input name="name" value={form.name} onChange={handle}
                  className={inputClass} placeholder="Your name" />
              </div>

              <div>
                <label className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Phone</label>
                <input name="phone" value={form.phone} onChange={handle}
                  className={inputClass} placeholder="0806 154 4551" />
              </div>

              <div>
                <label className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Service Needed</label>
                <select name="service" value={form.service} onChange={handle} className={inputClass}>
                  <option value="">Choose a service</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Message</label>
                <textarea name="message" value={form.message} onChange={handle} rows={4}
                  className={inputClass + ' resize-none'} placeholder="Briefly describe your project..." />
              </div>

              <button onClick={submit}
                className="w-full flex items-center justify-center gap-2 bg-[#F5C300] text-black font-bold py-3.5 rounded-full hover:bg-yellow-400 transition-colors text-sm">
                {sent ? 'Opening WhatsApp...' : (<>Request Estimate <Send size={15} /></>)}
              </button>

              <p className="text-gray-600 text-xs text-center">
                Your request will be sent via WhatsApp for a faster response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
