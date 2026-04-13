import { useRef, useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useReveal } from '../hooks/useReveal';

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState(''); // '', 'SENDING', 'SUCCESS', 'ERROR'

  const headerRef = useReveal();
  const cardRef   = useReveal();

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('SENDING');

    emailjs.sendForm(
      'service_r017uuh',
      'template_iqg8zj9',
      form.current,
      'fm72em_1MAjDfjuo_'
    )
    .then(() => {
      setStatus('SUCCESS');
      form.current.reset();
    }, (error) => {
      console.log(error.text);
      setStatus('ERROR');
    });
  };

  return (
    <section id="contact" className="py-28 px-8 md:px-24 bg-slate-900/60 relative overflow-hidden border-t border-slate-800/50">
      {/* Ambient blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/5 blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-12">
          <p className="section-label mb-4">07 // Contact</p>
          <h2 className="text-4xl font-bold text-white tracking-tight mb-3">
            Send a <span className="gradient-text italic">Message</span>
          </h2>
          <p className="text-slate-400 text-sm">Have a question or a proposal? I'll get back to you within 24 hours.</p>
        </div>

        {/* Card */}
        <div ref={cardRef} className="reveal bg-slate-900/50 border border-slate-800/80 rounded-2xl p-8 backdrop-blur-sm glow-card">
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-blue-400 tracking-wider uppercase">Your Name</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  className="bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 outline-none transition-all text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-blue-400 tracking-wider uppercase">Your Email</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  className="bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 outline-none transition-all text-sm"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-blue-400 tracking-wider uppercase">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                className="bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 outline-none transition-all resize-none text-sm"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'SENDING'}
              className="w-full flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] active:scale-[0.98] text-sm"
            >
              {status === 'SENDING' ? (
                <><Loader2 size={16} className="animate-spin" /> Sending...</>
              ) : (
                <>Send Message <Send size={15} /></>
              )}
            </button>
          </form>

          {/* Status banners — CSS keyframe animation on mount */}
          {status === 'SUCCESS' && (
            <div className="animate-pop-in flex items-center gap-2.5 text-emerald-400 justify-center font-medium mt-5 text-sm bg-emerald-500/10 border border-emerald-500/20 rounded-xl py-3 px-4">
              <CheckCircle size={16} />
              Message sent successfully! I'll be in touch soon.
            </div>
          )}
          {status === 'ERROR' && (
            <div className="animate-pop-in flex items-center gap-2.5 text-red-400 justify-center font-medium mt-5 text-sm bg-red-500/10 border border-red-500/20 rounded-xl py-3 px-4">
              <AlertCircle size={16} />
              Something went wrong. Please try again.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
