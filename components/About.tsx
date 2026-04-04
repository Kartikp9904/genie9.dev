"use client";

import { motion } from "framer-motion";
import { Code2, Users, Globe } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Web Development", value: "Core Expertise" },
  { icon: Users, label: "Team of Specialists", value: "Designers, Editors & SMM" },
  { icon: Globe, label: "End-to-End Solutions", value: "One Stop Shop" },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-pad relative overflow-hidden bg-[#0d0d1a]"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div
        className="orb"
        style={{
          width: "400px",
          height: "400px",
          background: "#be185d",
          top: "40px",
          right: "-15%",
          opacity: "0.1",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative pt-6 pb-6"
          >
            {/* Floating stat — top right */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 right-0 glass-card rounded-2xl px-5 py-3 border border-purple-500/30 z-20"
            >
              <div className="text-2xl font-black gradient-text">20+</div>
              <div className="text-xs text-slate-400">Projects Done</div>
            </motion.div>

            {/* Main card */}
            <div className="glass-card rounded-3xl p-8 border border-purple-500/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500" />

              {/* Avatar block */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl font-black text-white shadow-lg shrink-0">
                  G
                </div>
                <div className="min-w-0">
                  <h3 className="text-2xl font-black text-white">Genie9.dev</h3>
                  <p className="text-purple-400 font-medium text-sm">Web Developer & Growth Partner</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5"
                    >
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-purple-400" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-slate-500 uppercase tracking-widest">{item.label}</div>
                        <div className="text-sm font-semibold text-white truncate">{item.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Floating stat — bottom left */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-2 left-0 glass-card rounded-2xl px-5 py-3 border border-pink-500/30 z-20"
            >
              <div className="text-2xl font-black gradient-text">3×</div>
              <div className="text-xs text-slate-400">Avg. Lead Growth</div>
            </motion.div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold text-purple-400 uppercase tracking-widest mb-3 block">
              About Me
            </span>
            <h2 className="text-3xl sm:text-5xl font-black mb-6 leading-tight">
              The Mind Behind{" "}
              <span className="gradient-text">Genie9.dev</span>
            </h2>

            <div className="space-y-5 text-slate-400 text-base leading-relaxed">
              <p>
                I&apos;m the developer behind Genie9.dev, focused on building websites
                that help businesses and creators grow. My core expertise is web 
                development, where I create fast, modern, and{" "}
                <span className="text-white font-medium">conversion-focused websites</span>{" "}
                for products, personal brands, and digital portfolios.
              </p>
              <p>
                Whether you&apos;re a YouTuber, gamer, editor, coach, or freelancer, 
                I work with a{" "}
                <span className="text-white font-medium">team of specialists</span>{" "}
                to deliver complete systems — from custom portfolio sites to 
                high-performing content machines.
              </p>
              <p>
                I don&apos;t just build websites —{" "}
                <span className="text-white font-medium">
                  I help you build a professional online home that attracts your 
                  audience and scales your influence.
                </span>
              </p>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              id="about-cta"
              className="btn-glow inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-2xl text-white font-bold text-base"
            >
              Let&apos;s Work Together →
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
