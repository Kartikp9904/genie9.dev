"use client";

import { motion } from "framer-motion";
import { PhoneCall, Map, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Discovery Call",
    description: "A 15-minute call to understand your goals, audience, and bottlenecks. No sales pitch.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    number: "02",
    icon: Map,
    title: "Strategic Plan",
    description: "We design a growth blueprint covering site structure, lead funnel, and automation flows.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
  },
  {
    number: "03",
    icon: Palette,
    title: "Design Review",
    description: "We build a premium UI prototype and share it with you before any coding begins.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    number: "04",
    icon: Code2,
    title: "Development",
    description: "We build a fast, mobile-optimized Next.js site with WhatsApp, forms, and SEO configured.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch & Support",
    description: "We go live, connect analytics, and support you post-launch so nothing breaks.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-pad relative overflow-hidden bg-[#090d16]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3 block">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            How We <span className="gradient-accent-text">Deliver</span>
          </h2>
          <p className="text-slate-400 text-base max-w-lg mx-auto">
            A simple, transparent 5-step process — from first call to live website with full support.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`glass-card rounded-2xl p-5 border ${step.border} flex flex-col gap-3`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-xl ${step.bg} border ${step.border} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${step.color}`} />
                  </div>
                  <span className={`text-2xl font-black ${step.color} opacity-30`}>{step.number}</span>
                </div>
                <h3 className="text-white font-bold text-sm">{step.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-bold text-sm"
          >
            Book a Free Discovery Call →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
