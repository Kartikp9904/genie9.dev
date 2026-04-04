"use client";

import { motion, Variants } from "framer-motion";
import { Code2, TrendingUp, Video, Crown, Check } from "lucide-react";

const services = [
  {
    id: "web-dev",
    icon: Code2,
    badge: "Core",
    title: "Website Development",
    tagline: "Fast websites that convert visitors into clients",
    features: [
      "Custom websites (React / Next.js)",
      "Fast loading and SEO optimized",
      "Conversion-focused UI/UX",
      "Mobile-first responsive design",
    ],
    borderColor: "border-purple-500/20",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
    badgeColor: "text-slate-400",
    best: false,
  },
  {
    id: "social-media",
    icon: TrendingUp,
    badge: "Growth",
    title: "Social Media Growth",
    tagline: "Build an audience that becomes your customer base",
    features: [
      "Content planning & strategy",
      "Account management",
      "Growth-focused posting",
      "Engagement optimization",
    ],
    borderColor: "border-pink-500/20",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-400",
    badgeColor: "text-slate-400",
    best: false,
  },
  {
    id: "content",
    icon: Video,
    badge: "Creative",
    title: "Content Creation & Editing",
    tagline: "Videos that hook, engage, and convert",
    features: [
      "Reel editing (Instagram / Shorts)",
      "Hook-based short-form videos",
      "Engaging visual storytelling",
      "Brand-consistent content",
    ],
    borderColor: "border-violet-500/20",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    badgeColor: "text-slate-400",
    best: false,
  },
  {
    id: "full-system",
    icon: Crown,
    badge: "BEST VALUE",
    title: "Full Growth System",
    tagline: "The complete package for serious businesses",
    features: [
      "Website + Social Media + Video Editing",
      "Complete business growth system",
      "Designed to attract and convert clients",
      "Dedicated team support",
    ],
    borderColor: "border-pink-400/40",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-300",
    badgeColor: "text-pink-400",
    best: true,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
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
            Not Just Services —{" "}
            <span className="gradient-text">Growth Solutions</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Most businesses fail online because they focus on one thing. I build
            complete systems that drive{" "}
            <span className="text-white font-semibold">real growth.</span>
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                id={`service-${service.id}`}
                className={`relative glass-card rounded-3xl p-8 border ${service.borderColor} ${
                  service.best
                    ? "ring-2 ring-pink-500/30 shadow-xl"
                    : ""
                }`}
              >
                {/* Best Value Badge */}
                {service.best && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="btn-glow px-5 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                      ⭐ Best Value
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl ${service.iconBg} border ${service.borderColor} flex items-center justify-center shrink-0`}
                  >
                    <Icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>
                  <div className="min-w-0">
                    <span className={`text-xs font-bold uppercase tracking-widest ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">{service.title}</h3>
                    <p className="text-slate-400 text-sm mt-1">{service.tagline}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3">
                      <span
                        className={`w-5 h-5 rounded-full ${service.iconBg} border ${service.borderColor} flex items-center justify-center shrink-0`}
                      >
                        <Check className={`w-3 h-3 ${service.iconColor}`} />
                      </span>
                      <span className="text-slate-300 text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    service.best
                      ? "btn-glow text-white"
                      : `border ${service.borderColor} text-white bg-white/5 hover:bg-white/10`
                  }`}
                >
                  {service.best ? "Get The Full System →" : "Get Started →"}
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
