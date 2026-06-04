import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Code2, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import { BRAND } from '../mock';
import { waLink } from '../lib/utils';

// Official WhatsApp brand SVG icon (inline for crisp rendering)
const WhatsAppIcon = ({ className = 'w-5 h-5', filled = false }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d={filled
      ? 'M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.555-5.338 11.89-11.893 11.89a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l.001.001-.999 3.648 3.977-.608zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.486.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z'
      : 'M19.077 4.928A9.94 9.94 0 0 0 12.005 2c-5.523 0-9.999 4.477-9.999 10 0 1.762.46 3.42 1.265 4.85L2 22l5.319-1.395A9.96 9.96 0 0 0 12.005 22c5.523 0 9.999-4.477 9.999-10 0-2.675-1.041-5.187-2.927-7.072zm-7.072 15.36a8.3 8.3 0 0 1-4.235-1.158l-.304-.18-3.143.824.84-3.067-.197-.315A8.295 8.295 0 0 1 3.7 12c0-4.578 3.726-8.302 8.305-8.302a8.247 8.247 0 0 1 5.87 2.435 8.246 8.246 0 0 1 2.435 5.867c-.002 4.578-3.729 8.288-8.305 8.288zm4.546-6.213c-.249-.124-1.473-.727-1.702-.811-.228-.083-.394-.124-.56.125-.166.249-.643.811-.788.978-.145.166-.291.187-.539.062-.249-.124-1.052-.388-2.004-1.237-.741-.661-1.241-1.477-1.387-1.726-.145-.249-.015-.384.109-.508.112-.111.249-.291.374-.436.124-.145.166-.249.249-.415.083-.166.041-.311-.021-.436-.062-.124-.56-1.349-.768-1.846-.202-.485-.408-.419-.56-.427-.145-.007-.311-.009-.477-.009a.911.911 0 0 0-.664.311c-.228.249-.871.852-.871 2.077s.892 2.409 1.016 2.575c.124.166 1.756 2.682 4.255 3.761.594.257 1.058.41 1.42.524.597.19 1.14.163 1.57.099.479-.071 1.473-.602 1.68-1.184.207-.582.207-1.08.145-1.184-.062-.103-.228-.166-.477-.291z'} />
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error('Please add your name and phone number.');
      return;
    }
    const msg = `Hi, I want to enquire about your services.

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || '-'}
Service: ${form.service || '-'}
Message: ${form.message || '-'}`;
    window.open(waLink(msg), '_blank');
    toast.success('Redirecting to WhatsApp...');
    setForm({ name: '', phone: '', email: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="section-pad bg-dark-radial relative">
      <div className="orb drift-1" style={{ top: '0%', right: '0%', width: 400, height: 400, background: '#7C3AED', opacity: 0.15 }} />
      <div className="orb drift-2" style={{ bottom: '0%', left: '5%', width: 400, height: 400, background: '#A855F7', opacity: 0.12 }} />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 bg-[#1E1135] border border-[#A855F7]/30 text-[#C084FC] rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase">
              <MessageCircle className="w-3.5 h-3.5" />
              Contact Us
            </span>
            <h2 className="section-title mt-4 max-w-xl glow-text-soft">
              Let’s Build Something <span className="glow-text">Great</span> for Your Business
            </h2>
            <p className="mt-4 text-[#C4B5FD] max-w-lg">
              Talk to our team about website design, development, SEO, and digital marketing. We help brands launch faster, look better, and grow smarter online.
            </p>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-3 md:space-y-0">
              <ContactRow icon={Phone} iconBg="#A855F7" label="Phone" value={BRAND.phone} href={`tel:${BRAND.phoneRaw}`} />
              <ContactRow icon={Mail} iconBg="#A855F7" label="Email" value={BRAND.email} href={`mailto:${BRAND.email}`} />
              <ContactRow
                customIcon={<WhatsAppIcon className="w-5 h-5" filled />}
                iconBg="#25D366"
                label="WhatsApp"
                value="Chat instantly with our team"
                href={waLink('Hi, I want to enquire about your services.')}
              />
              <ContactRow icon={MapPin} iconBg="#A855F7" label="Location" value={BRAND.location} />
            </div>
          </div>

          {/* Form */}
          <div className="bg-card-dark rounded-3xl shadow-[0_30px_60px_-15px_rgba(168,85,247,0.35)] border border-[#A855F7]/25 p-6 md:p-8 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#A855F7]/15 blur-3xl" />
            <div className="absolute top-5 right-5 text-[#C084FC]/40"><Code2 className="w-6 h-6" /></div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-[#0A0118]/60 border border-[#A855F7]/30 text-[#C084FC] rounded-full px-3 py-1 text-[10px] font-extrabold tracking-wider uppercase">
                Quick Enquiry
              </div>
              <h3 className="mt-3 text-2xl md:text-3xl font-extrabold text-white">Send Us Your Requirement</h3>
              <p className="mt-1 text-sm text-[#C4B5FD]">Share a few details and our team will connect with you shortly.</p>

              <form onSubmit={onSubmit} className="mt-6 grid grid-cols-2 gap-4">
                <Field label="Your Name" placeholder="Enter your name" value={form.name} onChange={v => setForm({ ...form, name: v })} />
                <Field label="Phone Number" placeholder="Enter phone number" value={form.phone} onChange={v => setForm({ ...form, phone: v })} />
                <Field full label="Email Address" type="email" placeholder="you@example.com" value={form.email} onChange={v => setForm({ ...form, email: v })} />
                <div className="col-span-2">
                  <label className="text-xs font-bold tracking-wider text-[#C4B5FD] uppercase">Service Required</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="mt-2 w-full bg-[#0A0118]/60 border border-[#A855F7]/25 rounded-2xl px-4 py-3.5 text-sm text-white outline-none focus:border-[#A855F7]/70 focus:ring-2 focus:ring-[#A855F7]/30 transition-all"
                  >
                    <option value="">Select a service</option>
                    <option>Business Website</option>
                    <option>Ecommerce Website</option>
                    <option>Logo & Branding</option>
                    <option>SEO Services</option>
                    <option>Digital Marketing</option>
                    <option>Website Redesign</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="text-xs font-bold tracking-wider text-[#C4B5FD] uppercase">Your Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    className="mt-2 w-full bg-[#0A0118]/60 border border-[#A855F7]/25 rounded-2xl px-4 py-3 text-sm text-white placeholder:text-[#C4B5FD]/50 outline-none focus:border-[#A855F7]/70 focus:ring-2 focus:ring-[#A855F7]/30 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="col-span-2 inline-flex items-center justify-center gap-2 btn-gradient text-white font-bold rounded-full px-6 py-4 text-sm transition-all hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" /> Submit Enquiry
                </button>
                <p className="col-span-2 text-[11px] text-center text-[#C4B5FD]/60">
                  Your details will be sent to our WhatsApp for instant response.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, customIcon, iconBg = '#A855F7', label, value, href }) {
  const inner = (
    <div className="flex items-center gap-4 bg-card-dark rounded-2xl p-4 hover:border-[#A855F7]/50 hover:shadow-[0_15px_40px_rgba(168,85,247,0.2)] transition-all">
      <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white" style={{ background: iconBg === '#25D366' ? '#25D366' : 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)' }}>
        {customIcon ? customIcon : <Icon className="w-5 h-5" />}
      </div>
      <div>
        <div className="text-[11px] uppercase tracking-wider text-[#C4B5FD] font-bold">{label}</div>
        <div className="font-bold text-sm text-white">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{inner}</a> : inner;
}

function Field({ label, type = 'text', placeholder, value, onChange, full }) {
  return (
    <div className={full ? 'col-span-2' : 'col-span-2 sm:col-span-1'}>
      <label className="text-xs font-bold tracking-wider text-[#C4B5FD] uppercase">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full bg-[#0A0118]/60 border border-[#A855F7]/25 rounded-2xl px-4 py-3.5 text-sm text-white placeholder:text-[#C4B5FD]/50 outline-none focus:border-[#A855F7]/70 focus:ring-2 focus:ring-[#A855F7]/30 transition-all"
      />
    </div>
  );
}
