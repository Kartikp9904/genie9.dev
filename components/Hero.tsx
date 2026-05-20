"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Check } from "lucide-react";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.446L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.115-2.903-6.99-1.872-1.873-4.35-2.903-6.986-2.904-5.441 0-9.867 4.425-9.871 9.87-.001 1.748.465 3.453 1.35 4.975l-.973 3.553 3.694-.969zm11.722-6.52c-.312-.156-1.848-.912-2.137-1.017-.289-.104-.5-.156-.711.156-.211.312-.818 1.017-1.002 1.225-.185.208-.369.234-.681.078-1.222-.61-2.146-1.07-2.996-2.529-.224-.388.224-.36.643-1.196.07-.14.035-.26-.017-.365-.052-.104-.467-1.127-.639-1.54-.168-.403-.35-.348-.5-.356l-.427-.008c-.147 0-.387.055-.59.276-.203.221-.774.757-.774 1.847 0 1.089.792 2.143.903 2.298.11.156 1.558 2.38 3.774 3.335.527.227.938.363 1.258.465.529.168 1.011.144 1.392.088.425-.062 1.848-.756 2.109-1.458.261-.702.261-1.302.185-1.43-.076-.128-.276-.208-.588-.364z"/>
  </svg>
);

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
          background: "#1e3a8a",
          top: "-10%",
          left: "-10%",
          opacity: 0.05,
        }}
      />
      <div
        className="orb"
        style={{
          width: "500px",
          height: "500px",
          background: "#312e81",
          bottom: "-10%",
          right: "-10%",
          animationDelay: "4s",
          opacity: 0.05,
        }}
      />
      <div
        className="orb"
        style={{
          width: "300px",
          height: "300px",
          background: "#1e40af",
          top: "40%",
          left: "50%",
          animationDelay: "2s",
          opacity: 0.03,
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium"
          >
            <Sparkles className="w-4 h-4 shrink-0" />
            Digital Growth Partner for Ambitious Businesses
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight max-w-5xl mb-6"
          >
            We Build Websites & Automations
            <br />
            <span className="gradient-text">That Help Businesses Grow Faster</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-slate-400 max-w-3xl mb-10 leading-relaxed"
          >
            We help startups and local businesses improve their online presence, automate repetitive work, and generate more high-quality leads.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full max-w-md sm:max-w-none"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="btn-glow w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-base"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="https://wa.me/919898083823?text=Hi%20Genie9.dev,%20I'm%20interested%20in%20scaling%20my%20business!"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base shadow-lg shadow-emerald-500/10 transition-all duration-300"
            >
              <WhatsAppIcon />
              WhatsApp Us
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-white/10 bg-white/5 text-slate-300 font-semibold text-base hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              View Our Work
            </motion.a>
          </motion.div>

          {/* Social Proof Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-16 text-slate-400 text-sm font-medium border-t border-white/5 pt-8 w-full max-w-3xl"
          >
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-blue-400" />
              <span>Ahmedabad-based agency</span>
            </div>
            <div className="hidden sm:block text-slate-700">•</div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-blue-400" />
              <span>10+ projects delivered</span>
            </div>
            <div className="hidden sm:block text-slate-700">•</div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-blue-400" />
              <span>Fast 7-day turnaround</span>
            </div>
            <div className="hidden sm:block text-slate-700">•</div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-blue-400" />
              <span>Trusted by local brands</span>
            </div>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-12 sm:gap-20"
          >
            {[
              { value: "10+", label: "Successful Projects" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "3×", label: "Avg. Lead Growth" },
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
        <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
