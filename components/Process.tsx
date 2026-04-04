"use client";

import { motion } from "framer-motion";
import { Search, Map, Code2, Film, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Understand Your Business & Goals",
    description:
      "I dive deep into your business, target audience, and growth objectives. Understanding your why is the foundation of everything.",
  },
  {
    number: "02",
    icon: Map,
    title: "Plan a Growth-Focused Strategy",
    description:
      "We map out a complete digital strategy — from website architecture to content pillars — designed to attract and convert your ideal clients.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build a High-Performance Website",
    description:
      "A blazing-fast, beautifully designed website built with React/Next.js. SEO-optimized, mobile-first, and laser-focused on conversions.",
  },
  {
    number: "04",
    icon: Film,
    title: "Create Engaging Content",
    description:
      "Reels, short-form videos, and social content that hooks your audience and builds trust at scale — consistently.",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Optimize for Leads & Conversions",
    description:
      "We analyze what's working and double down on it. Continuous improvement to make sure your digital system keeps getting better.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-pad relative overflow-hidden bg-[#0d0d1a]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div
        className="orb"
        style={{
          width: "400px",
          height: "400px",
          background: "#be185d",
          bottom: "0",
          left: "-10%",
          opacity: "0.1",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-purple-400 uppercase tracking-widest mb-3 block">
            The Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mb-5">
            How I Help{" "}
            <span className="gradient-text">Businesses Grow</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto text-center">
            A proven, step-by-step system that takes you from where you are to where you want to be.
          </p>
        </motion.div>

        <div className="space-y-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-5 items-start"
              >
                {/* Step icon */}
                <div className="relative shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="glass-card rounded-2xl p-6 flex-1 min-w-0">
                  <div className="mb-1">
                    <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">
                      Step {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center glass-card rounded-3xl p-10 border border-purple-500/20"
        >
          <p className="text-2xl sm:text-3xl font-black text-white mb-2">
            I don&apos;t just build websites —
          </p>
          <p className="text-2xl sm:text-3xl font-black gradient-text mb-8">
            I build systems that help you make money.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-base"
          >
            Start Building Your System →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
