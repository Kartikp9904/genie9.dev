"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: "testimonial-1",
    name: "Arjun Mehta",
    role: "Founder, StyleCraft Studio",
    avatar: "A",
    avatarBg: "from-purple-500 to-violet-500",
    rating: 5,
    text:
      "Before working with Genie9.dev, my website was getting traffic but zero inquiries. Now, we're getting 4–5 serious leads every week. The new site actually explains our value and guides visitors to reach out. Best investment I made for my business.",
    highlight: "4–5 leads every week",
  },
  {
    id: "testimonial-2",
    name: "Priya Sharma",
    role: "CEO, FitFlow Health",
    avatar: "P",
    avatarBg: "from-pink-500 to-rose-500",
    rating: 5,
    text:
      "The social media reels they created for us went from 200 views to 15K+ in under 3 weeks. Our Instagram following doubled, and more importantly, our online coaching program filled up. These guys understand what actually works in 2025.",
    highlight: "15K+ views in 3 weeks",
  },
  {
    id: "testimonial-3",
    name: "Rayan Al-Farsi",
    role: "Owner, Abshar Kuwait",
    avatar: "R",
    avatarBg: "from-violet-500 to-purple-600",
    rating: 5,
    text:
      "The full growth system was exactly what our restaurant needed. A premium website, consistent social content, and weekly reels — everything is now in sync. Our foot traffic increased by 40% and online orders tripled in 2 months.",
    highlight: "40% increase in foot traffic",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad relative overflow-hidden">
      <div
        className="orb"
        style={{
          width: "500px",
          height: "500px",
          background: "#7c3aed",
          top: "0",
          right: "-10%",
          opacity: "0.1",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-purple-400 uppercase tracking-widest mb-3 block">
            Client Results
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mb-5">
            Businesses That{" "}
            <span className="gradient-text">Actually Grew</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Don&apos;t take my word for it — read what real clients say about working with Genie9.dev.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              id={t.id}
              variants={cardVariants}
              className="glass-card rounded-3xl p-8 border border-purple-500/15 relative overflow-hidden flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-purple-500/30 mb-4 shrink-0" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Highlight */}
              <div className="mb-4">
                <span className="text-xs font-bold gradient-text uppercase tracking-widest">
                  ✦ {t.highlight}
                </span>
              </div>

              {/* Text */}
              <p className="text-slate-300 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/5">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${t.avatarBg} flex items-center justify-center text-white font-black text-lg shadow-lg shrink-0`}
                >
                  {t.avatar}
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-white text-sm truncate">{t.name}</div>
                  <div className="text-slate-500 text-xs truncate">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
