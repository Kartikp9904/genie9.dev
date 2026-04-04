"use client";

import { motion, Variants } from "framer-motion";
import { Code2, TrendingUp, Video, Crown, Check, Users, Sparkles } from "lucide-react";

const pillars = [
  {
    id: "platform",
    icon: Code2,
    badge: "PLATFORM",
    title: "Modern Web Solutions",
    tagline: "High-performance sites for businesses & creators",
    features: [
      "Custom React & Next.js builds",
      "Professional Creator Portfolios",
      "Conversion-optimized for leads",
      "SEO and performance first",
    ],
    borderColor: "border-purple-500/20",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
    badgeColor: "text-slate-400",
  },
  {
    id: "studio",
    icon: Video,
    badge: "STUDIO",
    title: "Professional Video Production",
    tagline: "Cinematic editing for Gaming, Podcasts & IRL",
    features: [
      "Esports & Gaming highlights",
      "Podcast multicam & social clips",
      "High-energy Vlog storytelling",
      "Viral Short-form production",
    ],
    borderColor: "border-indigo-500/20",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-400",
    badgeColor: "text-slate-400",
  },
  {
    id: "network",
    icon: TrendingUp,
    badge: "NETWORK",
    title: "Strategic Growth Network",
    tagline: "Build an audience that scales your brand",
    features: [
      "Multi-platform content strategy",
      "Strategic account management",
      "Engagement & reach optimization",
      "Audience-to-customer conversion",
    ],
    borderColor: "border-pink-500/20",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-400",
    badgeColor: "text-slate-400",
  },
];

const masterOffer = {
  id: "genesis",
  icon: Crown,
  badge: "GENESIS",
  title: "The Ultimate Master System",
  tagline: "The complete omni-channel growth engine for major scale",
  features: [
    "Full Web Design + Video Studio + Growth Network",
    "Complete brand dominance & authority building",
    "Direct 1-on-1 strategy & team support",
    "Tailored systems to attract high-value clients",
  ],
  borderColor: "border-pink-400/40",
  iconBg: "bg-pink-500/10",
  iconColor: "text-pink-300",
  badgeColor: "text-pink-400",
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="section-pad relative overflow-hidden">
      <div
        className="orb"
        style={{
          width: "500px",
          height: "500px",
          background: "#7c3aed",
          top: "80px",
          right: "-15%",
          opacity: "0.1",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-purple-400 uppercase tracking-widest mb-3 block">
            Services
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mb-5">
            How We <span className="gradient-text">Grant Your Vision</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Your business goals aren&apos;t just wishes. I build the complete systems 
            that make them a <span className="text-white font-semibold">guaranteed reality.</span>
          </p>
        </motion.div>

        {/* 3 Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {pillars.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                id={`service-${service.id}`}
                className={`relative glass-card rounded-3xl p-8 border ${service.borderColor} h-full flex flex-col`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl ${service.iconBg} border ${service.borderColor} flex items-center justify-center shrink-0`}
                  >
                    <Icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>
                  <div className="min-w-0">
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">{service.title}</h3>
                    <p className="text-slate-400 text-xs mt-1 leading-relaxed">{service.tagline}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <span
                        className={`w-5 h-5 rounded-full ${service.iconBg} border ${service.borderColor} flex items-center justify-center shrink-0 mt-0.5`}
                      >
                        <Check className={`w-3 h-3 ${service.iconColor}`} />
                      </span>
                      <span className="text-slate-300 text-sm leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 border ${service.borderColor} text-white bg-white/5 hover:bg-white/10`}
                >
                  Grant My Growth →
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Master Offer - Genesis */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-[2.5rem] opacity-20 blur-xl group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative glass-card rounded-[2rem] p-8 sm:p-12 border border-pink-500/30 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Sparkles className="w-32 h-32 text-pink-400" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-black uppercase tracking-widest mb-6">
                  <Crown className="w-3 h-3" />
                  {masterOffer.badge}
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white mb-4">
                  {masterOffer.title}
                </h3>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  {masterOffer.tagline}
                </p>
                
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-glow inline-flex items-center gap-3 px-10 py-4 rounded-2xl text-white font-bold text-lg"
                >
                  Grant My Master Vision →
                </motion.a>
              </div>

              <div className="space-y-4">
                {masterOffer.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                    <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-pink-400" />
                    </div>
                    <span className="text-slate-200 font-medium text-sm sm:text-base">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
