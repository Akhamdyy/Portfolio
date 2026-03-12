import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState(""); // "", "SENDING", "SUCCESS", "ERROR"

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("SENDING");

    emailjs.sendForm(
      'service_r017uuh',   // Replace with EmailJS Service ID
      'template_iqg8zj9',  // Replace with EmailJS Template ID
      form.current,
      'fm72em_1MAjDfjuo_'    // Replace with EmailJS Public Key
    )
    .then(() => {
        setStatus("SUCCESS");
        form.current.reset();
    }, (error) => {
        console.log(error.text);
        setStatus("ERROR");
    });
  };

  return (
    <section id="contact" className="py-24 px-8 md:px-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4 italic">Send a Message</h2>
          <p className="text-slate-400">Have a question or a proposal? I'll get back to you within 24 hours.</p>
        </motion.div>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-mono text-blue-400">Your Name</label>
              <input 
                type="text" name="from_name" required
                className="bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-mono text-blue-400">Your Email</label>
              <input 
                type="email" name="from_email" required
                className="bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-mono text-blue-400">Message</label>
            <textarea 
              name="message" required rows="5"
              className="bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button 
            type="submit"
            disabled={status === "SENDING"}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 text-white font-bold py-4 rounded-lg transition-all transform active:scale-[0.98]"
          >
            {status === "SENDING" ? "Sending..." : "Send Message"} <Send size={18} />
          </button>

          {status === "SUCCESS" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-green-400 justify-center font-medium mt-4">
              <CheckCircle size={20} /> Message sent! Check your inbox for confirmation.
            </motion.div>
          )}
          {status === "ERROR" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-red-400 justify-center font-medium mt-4">
              <AlertCircle size={20} /> Oops! There was a problem. Please try again.
            </motion.div>
          )}
        </form>
      </div>
    </section>
  );
}