"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Background orbs */}
      <div
        className="orb"
        style={{
          width: "600px",
          height: "600px",
          background: "#7c3aed",
          top: "-10%",
          left: "-10%",
        }}
      />
      <div
        className="orb"
        style={{
          width: "500px",
          height: "500px",
          background: "#be185d",
          bottom: "-10%",
          right: "-10%",
          animationDelay: "4s",
        }}
      />
      <div
        className="orb"
        style={{
          width: "300px",
          height: "300px",
          background: "#a855f7",
          top: "40%",
          left: "50%",
          animationDelay: "2s",
          opacity: "0.08",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium"
          >
            <Sparkles className="w-4 h-4 shrink-0" />
            Digital Growth Partner for Ambitious Businesses
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight max-w-5xl mb-6"
          >
            You Wish for Growth.
            <br />
            <span className="gradient-text">We Build the Reality,</span>
            <br />
            Not Just Websites
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
          >
            Stop wishing for more clients. We help businesses and creators scale with 
            high-performing websites, cinematic content, and digital systems designed to 
            grant your biggest growth goals.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-purple-500/30 bg-purple-500/10 text-white font-semibold text-base hover:border-purple-500/60 hover:bg-purple-500/20 transition-all duration-300"
            >
              View Our Work
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              id="hero-cta-get-website"
              className="btn-glow inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold text-base"
            >
              Get Your Website
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap justify-center gap-12 sm:gap-20"
          >
            {[
              { value: "20+", label: "Projects Delivered" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "3×", label: "Avg. Growth in Leads" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-black gradient-text">{stat.value}</div>
                <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="w-px h-12 bg-gradient-to-b from-purple-500 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
