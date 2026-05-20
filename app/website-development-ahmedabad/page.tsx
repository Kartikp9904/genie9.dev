"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import { ArrowRight, Sparkles, Check, Globe, Shield, Zap } from "lucide-react";

export default function AhmedabadWebDevelopment() {
  return (
    <main className="min-h-screen bg-[#080810] text-slate-100 overflow-x-hidden">
      <Navbar />
      <StickyWhatsApp />

      {/* Local Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden grid-bg">
        <div
          className="orb"
          style={{
            width: "500px",
            height: "500px",
            background: "#7c3aed",
            top: "-10%",
            left: "-10%",
            opacity: "0.15",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium">
              <Sparkles className="w-4 h-4 text-purple-400" />
              Top-Rated Web Agency in Ahmedabad
            </span>
            <h1 className="text-4xl sm:text-6xl font-black leading-tight mb-6">
              Website Development Agency
              <br />
              <span className="gradient-text">In Ahmedabad, Gujarat</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed">
              We help local businesses, manufacturers, clinics, and startups in Ahmedabad build high-performing, blazing-fast Next.js websites designed to capture local and global leads.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="#contact"
                className="btn-glow w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-base"
              >
                Get a Free Website Audit
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919898083823?text=Hi%20Genie9.dev,%20I'm%20interested%20in%20website%20development%20in%20Ahmedabad."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base shadow-lg shadow-emerald-500/20 transition-all duration-300"
              >
                Chat on WhatsApp
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-slate-400 text-sm font-medium border-t border-white/5 pt-8">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-purple-400" />
                <span>Local Ahmedabad Support</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-purple-400" />
                <span>Next.js & Tailwind CSS (v4)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-purple-400" />
                <span>Custom Contact Funnels</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Local */}
      <section className="section-pad bg-[#0d0d1a] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-5xl font-black mb-5">
              Why Ahmedabad Brands <span className="gradient-text">Trust Genie9.dev</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              We focus on localized performance, conversion tactics, and seamless user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-3xl p-8 border border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Ahmedabad Local SEO</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We configure Google Schema, local maps optimization, and keywords matching local queries to help your business rank at the top of local searches.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8 border border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Blazing-Fast Speed</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Most internet users browse on mobile phones with fluctuating cellular signals. We build on Next.js for sub-second page loads.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8 border border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Post-Launch Support</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We don&apos;t build a site and disappear. As a local Ahmedabad agency, we are just a WhatsApp message or call away for updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of components */}
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
