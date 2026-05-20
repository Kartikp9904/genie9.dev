"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "For standard landing pages, we deliver in 7–10 days. For multi-page business sites, expect 2–3 weeks. Complex automation projects typically take 3–4 weeks. We always share a clear timeline before starting.",
  },
  {
    question: "Can you connect WhatsApp with my CRM?",
    answer: "Yes — this is one of our core specialties. We set up flows where leads from your website instantly trigger WhatsApp alerts, auto-replies, and sync to Google Sheets or CRMs like HubSpot, Zoho, and Salesforce.",
  },
  {
    question: "Do you offer support after launch?",
    answer: "Every project includes 3–6 months of free technical support for minor changes and bug fixes. After that, we offer flexible monthly maintenance packages to keep your site secure, updated, and fast.",
  },
  {
    question: "Are you based in Ahmedabad? Do you work internationally?",
    answer: "Yes — we are based in Ahmedabad, Gujarat, India. We help local businesses grow online and also work with startups and agencies across the USA, Europe, and the Middle East.",
  },
  {
    question: "How does the Free Website Audit work?",
    answer: "Submit your website link via the contact form below. We will analyse your load speeds, mobile layout, and conversion points — then share a short video walkthrough of exactly what to fix and how.",
  },
  {
    question: "What is your pricing?",
    answer: "We keep it simple. Landing pages start from ₹9,000. Full business websites start from ₹19,000. Custom automation and AI projects are quoted based on scope. No hidden fees — ever.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-pad relative bg-[#070a13]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3 block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Common <span className="gradient-accent-text">Questions</span>
          </h2>
          <p className="text-slate-400 text-base max-w-md mx-auto">
            Still unsure? We are happy to answer anything.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`glass-card rounded-2xl border overflow-hidden transition-all duration-200 ${
                  isOpen ? "border-blue-500/25" : "border-white/6"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/3 transition-colors focus:outline-none"
                >
                  <span className="text-white font-semibold text-sm sm:text-base pr-4 leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-all duration-200 ${
                    isOpen ? "border-blue-500/50 bg-blue-500/10 text-blue-400" : "border-white/10 text-slate-500"
                  }`}>
                    {isOpen
                      ? <ChevronDown className="w-3.5 h-3.5" />
                      : <Plus className="w-3.5 h-3.5" />
                    }
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 text-slate-400 text-sm leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-slate-500 text-sm mb-3">Still have questions?</p>
          <a
            href="https://wa.me/919898083823?text=Hi%20Genie9.dev%2C%20I%20have%20a%20question!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/4 text-white text-sm font-medium hover:bg-white/8 transition-all duration-200"
          >
            Chat With Us on WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
