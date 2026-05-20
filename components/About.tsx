"use client";

import { motion } from "framer-motion";
import { Code2, Zap, Target, CheckCircle } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Tech Stack", value: "Next.js, React, Tailwind CSS" },
  { icon: Zap, label: "Automation", value: "WhatsApp API & CRM Flows" },
  { icon: Target, label: "Focus", value: "Leads, Revenue & Time Saved" },
];

const achievements = [
  "10+ projects delivered across India & globally",
  "100% client satisfaction on every project",
  "Landing pages with under 1s load time",
  "CRM & WhatsApp automation for 5+ businesses",
];

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export default function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden bg-[#090d16]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Founder card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Main card */}
            <div className="glass-card rounded-2xl border border-white/8 overflow-hidden mb-4">
              <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
              <div className="p-6">
                {/* Avatar + name */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-2xl font-black text-white shrink-0">
                    KP
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Kartik Patel</h3>
                    <p className="text-blue-400 text-sm font-medium">Founder & Lead Developer</p>
                    <a
                      href="https://www.linkedin.com/in/genie9dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-white mt-1 transition-colors"
                    >
                      <LinkedInIcon />
                      linkedin.com/in/genie9dev
                    </a>
                  </div>
                </div>

                {/* Skill tags */}
                <div className="space-y-2.5">
                  {highlights.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/5"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</div>
                          <div className="text-sm font-semibold text-white">{item.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "10+", label: "Projects" },
                { value: "100%", label: "Satisfaction" },
                { value: "3×", label: "Avg Leads" },
              ].map((stat) => (
                <div key={stat.label} className="glass-card rounded-xl p-4 border border-white/6 text-center">
                  <div className="text-2xl font-black gradient-accent-text">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3 block">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-5 leading-tight">
              Built by Developers Who{" "}
              <span className="gradient-accent-text">Understand Business</span>
            </h2>

            <div className="space-y-4 text-slate-400 text-base leading-relaxed mb-6">
              <p>
                We are a focused agency founded by <span className="text-white font-semibold">Kartik Patel</span> in Ahmedabad. We got tired of agencies delivering slow, generic websites that don&apos;t bring actual leads or revenue.
              </p>
              <p>
                Our approach is simple: every system we build must either <span className="text-white font-medium">make you money or save you time</span>. Whether it is a landing page, an automation flow, or a full business website.
              </p>
            </div>

            {/* Achievement list */}
            <ul className="space-y-3 mb-8">
              {achievements.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm"
              >
                Start a Project →
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/genie9dev"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 text-white text-sm font-semibold hover:bg-white/5 transition-all duration-200"
              >
                <LinkedInIcon />
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
