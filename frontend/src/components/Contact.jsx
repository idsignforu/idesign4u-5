import { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { BRAND } from '../mock';
import { waLink } from '../lib/utils';
import PerspectiveGrid from './PerspectiveGrid';

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
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* 3D Perspective Grid Background */}
      <PerspectiveGrid gridSize={28} fadeRadius={75} />

      {/* Background Spotlights */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-aura-sky rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-brand rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase">
              <MessageCircle className="w-3.5 h-3.5" />
              Get in Touch
            </span>
            <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight mt-4">
              Let’s Build Something <span className="text-gradient-blue">Great</span> Together
            </h2>
            <p className="font-sans text-base text-muted max-w-lg mt-4 leading-relaxed">
              Talk to our team about website design, development, SEO, and digital marketing. We help businesses launch faster and convert better.
            </p>

            <div className="mt-8 space-y-4">
              <ContactCard icon={Phone} label="Phone Call" value={BRAND.phone} href={`tel:${BRAND.phoneRaw}`} />
              <ContactCard icon={Mail} label="Email Address" value={BRAND.email} href={`mailto:${BRAND.email}`} />
              <ContactCard icon={MessageCircle} label="WhatsApp Chat" value="Instant WhatsApp Response" href={waLink('Hi, I want to enquire about web design services.')} isWhatsApp />
              <ContactCard icon={MapPin} label="Office Location" value={BRAND.location} />
            </div>
          </motion.div>

          {/* Right Column — Glass Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-10 border border-white/80 shadow-card-blue"
          >
            <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand rounded-full px-3 py-1 text-[11px] font-bold tracking-wider uppercase mb-2">
              Quick Lead Form
            </div>
            <h3 className="font-outfit font-extrabold text-2xl sm:text-3xl text-ink">Send Us Your Requirement</h3>
            <p className="font-sans text-xs sm:text-sm text-muted mt-1">Fill out the details below and we will prepare a customized proposal.</p>

            <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-ink-soft mb-1 block">Your Name *</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Rahul Sharma"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-brand"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-ink-soft mb-1 block">Phone / WhatsApp *</label>
                <input
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 92814 10305"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-brand"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-ink-soft mb-1 block">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-brand"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-ink-soft mb-1 block">Service Required</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-brand"
                >
                  <option value="">Select a service...</option>
                  <option value="Starter Business Website (₹5,999)">Starter Business Website (₹5,999)</option>
                  <option value="Business Website (₹7,999)">Business Website (₹7,999)</option>
                  <option value="Pro E-Commerce Store (₹11,999)">Pro E-Commerce Store (₹11,999)</option>
                  <option value="Logo & Branding">Logo & Branding</option>
                  <option value="SEO Services">SEO Services</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Website Redesign">Website Redesign</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-ink-soft mb-1 block">Your Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe your business and website goals..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-brand resize-none"
                />
              </div>

              <button
                type="submit"
                className="sm:col-span-2 btn-primary-blue py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>Submit to WhatsApp</span>
              </button>

              <p className="sm:col-span-2 text-[11px] text-center text-muted">
                Fastest response via WhatsApp. Direct communication with founders.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, label, value, href, isWhatsApp = false }) {
  const content = (
    <div className="glass-panel p-4 rounded-2xl border border-white/80 shadow-xs hover:shadow-card-blue transition-all flex items-center gap-4">
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold flex-none shadow-md ${isWhatsApp ? 'bg-emerald-500' : 'bg-brand'}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="font-sans text-[11px] uppercase tracking-wider text-muted font-bold">{label}</div>
        <div className="font-outfit font-bold text-sm sm:text-base text-ink">{value}</div>
      </div>
    </div>
  );

  return href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{content}</a> : content;
}

