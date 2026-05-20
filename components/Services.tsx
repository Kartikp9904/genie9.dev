"use client";

import { motion, Variants } from "framer-motion";
import { Code2, GitMerge, Bot, Paintbrush, Check } from "lucide-react";

const serviceCategories = [
  {
    id: "web-dev",
    icon: Code2,
    badge: "DEVELOPMENT",
    title: "Website Development",
    tagline: "High-speed websites built to turn visitors into paying clients.",
    features: [
      "Custom Business Websites",
      "High-Converting Landing Pages",
      "Interactive Portfolio Sites",
      "Shopify & Custom E-commerce",
    ],
    outcome: "Boosts load speeds by 60%+",
    borderColor: "border-blue-500/20",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    badgeColor: "text-blue-300",
  },
  {
    id: "automation",
    icon: GitMerge,
    badge: "WORKFLOWS",
    title: "Automation Solutions",
    tagline: "Eliminate repetitive tasks and save hours of manual admin work.",
    features: [
      "WhatsApp Business API Setup",
      "CRM & Pipeline Workflows",
      "Automated Email Sequences",
      "Cross-Platform Data Syncing",
    ],
    outcome: "Saves 10+ manual hours/week",
    borderColor: "border-indigo-500/20",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-400",
    badgeColor: "text-indigo-300",
  },
  {
    id: "ai-integrations",
    icon: Bot,
    badge: "AI & SYSTEMS",
    title: "AI Integrations",
    tagline: "Leverage intelligent models to handle support and data tasks.",
    features: [
      "Smart Support Chatbots",
      "Automated Lead Pre-qualification",
      "Custom AI Workflow Assistants",
      "AI-Generated Content Systems",
    ],
    outcome: "24/7 automated support",
    borderColor: "border-cyan-500/20",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    badgeColor: "text-cyan-300",
  },
  {
    id: "uiux-design",
    icon: Paintbrush,
    badge: "AESTHETICS",
    title: "UI/UX & Mobile Design",
    tagline: "Premium, responsive interfaces that reflect your premium brand.",
    features: [
      "Full Website Redesigns",
      "Modern Web & App Interfaces",
      "100% Mobile Optimization",
      "Conversion Rate Optimization (CRO)",
    ],
    outcome: "Increases conversions by 2x",
    borderColor: "border-blue-500/20",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    badgeColor: "text-blue-300",
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

export default function Services() {
  return (
    <section id="services" className="section-pad relative overflow-hidden bg-[#090d16]">
      <div
        className="orb"
        style={{
          width: "500px",
          height: "500px",
          background: "#1e3a8a",
          top: "80px",
          right: "-15%",
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
            Our Services
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mb-5">
            Solutions That <span className="gradient-text">Make Business Sense</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We don&apos;t build fancy, complex widgets that serve no purpose. We develop the core systems that help you acquire clients, save time, and operate smoothly.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {serviceCategories.map((service) => {
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
                    <p className="text-slate-400 text-sm mt-1 leading-relaxed">{service.tagline}</p>
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

                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-4 flex-wrap">
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                    {service.outcome}
                  </span>
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`text-center px-5 py-2.5 rounded-xl font-semibold text-xs transition-all duration-300 border ${service.borderColor} text-white bg-white/5 hover:bg-white/10`}
                  >
                    Inquire About This →
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
