"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare, CheckCircle2 } from "lucide-react";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.446L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.115-2.903-6.99-1.872-1.873-4.35-2.903-6.986-2.904-5.441 0-9.867 4.425-9.871 9.87-.001 1.748.465 3.453 1.35 4.975l-.973 3.553 3.694-.969zm11.722-6.52c-.312-.156-1.848-.912-2.137-1.017-.289-.104-.5-.156-.711.156-.211.312-.818 1.017-1.002 1.225-.185.208-.369.234-.681.078-1.222-.61-2.146-1.07-2.996-2.529-.224-.388.224-.36.643-1.196.07-.14.035-.26-.017-.365-.052-.104-.467-1.127-.639-1.54-.168-.403-.35-.348-.5-.356l-.427-.008c-.147 0-.387.055-.59.276-.203.221-.774.757-.774 1.847 0 1.089.792 2.143.903 2.298.11.156 1.558 2.38 3.774 3.335.527.227.938.363 1.258.465.529.168 1.011.144 1.392.088.425-.062 1.848-.756 2.109-1.458.261-.702.261-1.302.185-1.43-.076-.128-.276-.208-.588-.364z" />
  </svg>
);

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [service, setService] = useState("website");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "5444b009-f6fc-4dd4-88ae-46d4402a5106",
          name: formState.name,
          email: formState.email,
          service: service,
          message: formState.message,
          from_name: "Genie9.dev Website",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const getPlaceholder = () => {
    switch (service) {
      case "audit": return "Share your current website URL and what you want to improve...";
      case "automation": return "Tell us what repetitive tasks you want to automate...";
      default: return "Tell us about your business and what you need...";
    }
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-[#070a13]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3 block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Ready to <span className="gradient-accent-text">Grow Your Business?</span>
          </h2>
          <p className="text-slate-400 text-base max-w-lg mx-auto">
            We respond within <span className="text-white font-semibold">24 hours</span>. Or WhatsApp us for an instant reply.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Left: Quick contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass-card rounded-2xl p-5 border border-white/8">
              <h3 className="text-white font-semibold text-sm mb-1">WhatsApp (Fastest)</h3>
              <p className="text-slate-500 text-xs mb-3">Usually replies in under 2 hours</p>
              <a
                href="https://wa.me/919898083823?text=Hi%20Genie9.dev,%20I'm%20interested%20in%20scaling%20my%20business!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold transition-all duration-200 w-full justify-center"
              >
                <WhatsAppIcon />
                +91 98980 83823
              </a>
            </div>

            <div className="glass-card rounded-2xl p-5 border border-white/8">
              <h3 className="text-white font-semibold text-sm mb-1">Email</h3>
              <p className="text-slate-500 text-xs mb-3">For formal project briefs</p>
              <a
                href="mailto:genie9official@gmail.com"
                className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors break-all"
              >
                genie9official@gmail.com
              </a>
            </div>

            <div className="glass-card rounded-2xl p-5 border border-white/8">
              <h3 className="text-white font-semibold text-sm mb-1">Based In</h3>
              <p className="text-slate-400 text-sm">Ahmedabad, Gujarat, India</p>
              <p className="text-slate-500 text-xs mt-1">Serving clients globally</p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-4 py-10 text-center"
                >
                  <CheckCircle2 className="w-12 h-12 text-blue-400" />
                  <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                  <p className="text-slate-400 text-sm max-w-xs">
                    Kartik will review your request and get back within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormState({ name: "", email: "", message: "" }); }}
                    className="mt-2 text-blue-400 hover:text-blue-300 text-sm underline cursor-pointer"
                  >
                    Send another request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">

                  {/* Service Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      What do you need?
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "website", label: "Website" },
                        { id: "automation", label: "Automation" },
                        { id: "audit", label: "Free Audit 🎁" },
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setService(opt.id)}
                          className={`py-2.5 px-2 rounded-xl text-xs font-semibold text-center border transition-all duration-200 ${service === opt.id
                              ? "bg-blue-500/15 border-blue-500/50 text-blue-300"
                              : "bg-white/3 border-white/8 text-slate-500 hover:border-white/15 hover:text-slate-300"
                            }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 pointer-events-none" />
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/4 border border-white/8 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/6 transition-all duration-200 text-sm"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 pointer-events-none" />
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/4 border border-white/8 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/6 transition-all duration-200 text-sm"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      {service === "audit" ? "Website Link & Goals" : "Project Details"}
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-600 pointer-events-none" />
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                        placeholder={getPlaceholder()}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/4 border border-white/8 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/6 transition-all duration-200 text-sm resize-none"
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="p-3.5 rounded-xl bg-red-500/8 border border-red-500/20 text-red-400 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />
                      Something went wrong. Please try again or WhatsApp us.
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    id="contact-submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.01 }}
                    whileTap={{ scale: loading ? 1 : 0.99 }}
                    className="btn-glow w-full py-3.5 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {service === "audit" ? "Get Free Website Audit" : "Send Project Request"}
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-slate-600 text-xs">
                    Based in Ahmedabad. Serving businesses across India & globally.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
