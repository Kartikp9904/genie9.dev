"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import { ArrowRight, Sparkles, Check, Database, GitBranch, Cpu, MessageSquare } from "lucide-react";

export default function AIAutomationLanding() {
  return (
    <main className="min-h-screen bg-[#080810] text-slate-100 overflow-x-hidden">
      <Navbar />
      <StickyWhatsApp />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden grid-bg">
        <div
          className="orb"
          style={{
            width: "500px",
            height: "500px",
            background: "#ec4899",
            top: "-10%",
            right: "-10%",
            opacity: "0.1",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-sm font-medium">
              <Sparkles className="w-4 h-4 text-pink-400" />
              Maximize Operational Efficiency
            </span>
            <h1 className="text-4xl sm:text-6xl font-black leading-tight mb-6">
              AI & Workflow Automation
              <br />
              <span className="gradient-text">Solutions for Business</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed">
              We design and build custom automated workflows using WhatsApp APIs, Zapier, Make, and smart AI models to sync your leads, manage support, and eliminate manual copy-paste work.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="#contact"
                className="btn-glow w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-base"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919898083823?text=Hi%20Genie9.dev,%20I'm%20interested%20in%20AI%20and%20workflow%20automations."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base shadow-lg shadow-emerald-500/20 transition-all duration-300"
              >
                WhatsApp Us
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-slate-400 text-sm font-medium border-t border-white/5 pt-8">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-purple-400" />
                <span>Save 10+ manual hours weekly</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-purple-400" />
                <span>Zapier, Make & Custom Scripts</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-purple-400" />
                <span>WhatsApp Business API setup</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-pad bg-[#0d0d1a] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-5xl font-black mb-5">
              Automate the Boring Stuff, <span className="gradient-text">Focus on Growth</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Our workflows connect your favorite applications so everything syncs automatically in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-3xl p-8 border border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">WhatsApp Automation</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Connect website contact forms directly to WhatsApp alerts and pre-qualify customers instantly via interactive chats.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8 border border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">CRM Synchronizations</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Sync leads from Facebook Ads, web forms, and emails directly into HubSpot, Zoho, or Google Sheets without manual entry.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8 border border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                <GitBranch className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Custom Workflows</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Configure conditional actions—like sending automated invoice PDFs or scheduling Google Calendar meetings on lead sign-ups.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8 border border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">AI Support Agents</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Integrate intelligent LLM models to read incoming email questions or chat inquiries and provide draft responses or auto-support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Contact */}
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
