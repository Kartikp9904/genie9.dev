"use client";

import { motion, Variants } from "framer-motion";
import { Check, HelpCircle } from "lucide-react";

const packages = [
  {
    name: "Growth Landing Page",
    price: "₹9,000",
    description: "Ideal for local businesses, clinics, and coaches needing to generate leads instantly.",
    features: [
      "1 Custom Landing Page (Next.js)",
      "Fully Mobile Optimized Design",
      "Direct WhatsApp Chat Integration",
      "Basic On-Page SEO Configuration",
      "Domain & Hosting Setup Support",
      "3 Months Maintenance & Support",
    ],
    cta: "Start Project",
    popular: false,
    borderColor: "border-white/10",
    headerBg: "bg-white/5",
    btnStyle: "border border-white/20 text-white bg-white/5 hover:bg-white/10",
  },
  {
    name: "Modern Business Website",
    price: "₹19,000",
    description: "Complete professional digital presence with CMS and lead routing for growing brands.",
    features: [
      "Up to 5 Pages (Home, About, Services, dynamic blog/CMS, Contact)",
      "High-Performance Custom Design",
      "Lead Capture Form + WhatsApp CRM",
      "Advanced Speed & Mobile Optimization",
      "Ahmedabad Local SEO Optimization",
      "6 Months Support & Analytics Setup",
    ],
    cta: "Choose Business",
    popular: true,
    borderColor: "border-blue-500/30",
    headerBg: "bg-blue-500/10",
    btnStyle: "btn-glow text-white font-bold",
  },
  {
    name: "Custom Automation & AI",
    price: "Custom Setup",
    description: "Deep automation workflows, AI chatbots, and API integrations to automate admin tasks.",
    features: [
      "WhatsApp Business API Automations",
      "Custom AI Lead Pre-Qualification Bot",
      "CRM & Pipeline Sync (Zapier/Make)",
      "Automated Booking & Notifications",
      "Tailored UI/UX & Dynamic Dashboard",
      "1-on-1 Strategy & Priority Support",
    ],
    cta: "Inquire Now",
    popular: false,
    borderColor: "border-white/10",
    headerBg: "bg-white/5",
    btnStyle: "border border-white/20 text-white bg-white/5 hover:bg-white/10",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad relative overflow-hidden bg-[#090d16]">
      {/* Decorative Orbs */}
      <div
        className="orb"
        style={{
          width: "450px",
          height: "450px",
          background: "#1e3a8a",
          bottom: "-5%",
          left: "-15%",
          opacity: 0.03,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3 block">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mb-5">
            Investment That <span className="gradient-text">Pays For Itself</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-4">
            No hidden costs. Simple pricing starting from <span className="text-white font-bold">₹9,000</span> tailored to scale your brand.
          </p>
          <div className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <span>ROI-Focused: Designed to bring clients, not just code</span>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={cardVariants}
              className={`glass-card rounded-3xl border ${pkg.borderColor} flex flex-col h-full relative overflow-hidden`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              {/* Price / Title Header */}
              <div className={`p-8 ${pkg.headerBg} border-b border-white/5`}>
                <h3 className="text-lg font-bold text-white mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mt-3">
                  <span className="text-4xl sm:text-5xl font-black text-white">{pkg.price}</span>
                  {pkg.price !== "Custom Setup" && <span className="text-slate-400 text-sm">/one-time</span>}
                </div>
                <p className="text-slate-400 text-xs mt-3 leading-relaxed">{pkg.description}</p>
              </div>

              {/* Features List */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-blue-400" />
                      </span>
                      <span className="text-slate-300 text-sm leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href={pkg.price === "Custom Setup" ? "#contact" : `https://wa.me/919898083823?text=Hi%20Genie9.dev,%20I'm%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20package.`}
                  target={pkg.price === "Custom Setup" ? undefined : "_blank"}
                  rel={pkg.price === "Custom Setup" ? undefined : "noopener noreferrer"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-bold text-sm text-center block transition-all duration-300 ${pkg.btnStyle}`}
                >
                  {pkg.cta}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing Warning */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
            <HelpCircle className="w-4 h-4 text-slate-500" />
            Have custom requirements? We provide tailor-made quotes.{" "}
            <a href="#contact" className="text-blue-400 font-bold hover:underline">
              Get in Touch
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
