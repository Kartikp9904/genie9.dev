"use client";

import { motion, Variants } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: "testimonial-ucanfrench",
    name: "Ajay Patel",
    role: "Founder, UCanFrench",
    avatar: "A",
    avatarBg: "from-blue-500 to-indigo-500",
    rating: 5,
    text:
      "The language learning platform Genie9.dev built for us is incredible. It's fast, intuitive, and our students love the interface. Our enrollment has grown significantly since launch.",
    highlight: "Enrollment grew significantly",
  },
  {
    id: "testimonial-maheshwari",
    name: "Alkesh Patel",
    role: "Director, Maheshwari Metals",
    avatar: "A",
    avatarBg: "from-slate-500 to-gray-600",
    rating: 5,
    text:
      "Our industrial manufacturing site now looks world-class. The team understood our requirements perfectly and delivered a site that showcases our sheet metal capabilities to global clients.",
    highlight: "World-class industrial showcase",
  },
  {
    id: "testimonial-alex",
    name: "Alex Christian",
    role: "Content Creator & Editor",
    avatar: "A",
    avatarBg: "from-purple-500 to-pink-500",
    rating: 5,
    text:
      "As a video editor, I needed a portfolio that felt premium and cinematic. Genie9.dev delivered exactly that. It's helped me land higher-paying clients and professionalized my brand.",
    highlight: "Helped land high-paying clients",
  },
  {
    id: "testimonial-global",
    name: "Heitor Silva",
    role: "CEO, Global Trade Solutions",
    avatar: "H",
    avatarBg: "from-emerald-500 to-teal-600",
    rating: 5,
    text:
      "The B2B commerce platform they built for our logistics business is a game-changer. It simplified our supply chain communication and established serious trust with our international partners.",
    highlight: "Simplified supply chain communication",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
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
            Real Results for{" "}
            <span className="gradient-text">Real People</span>
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              id={t.id}
              variants={cardVariants}
              className="glass-card rounded-3xl p-8 border border-purple-500/15 relative overflow-hidden flex flex-col"
            >
              <Quote className="w-8 h-8 text-purple-500/30 mb-4 shrink-0" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="mb-4">
                <span className="text-xs font-bold gradient-text uppercase tracking-widest">
                  ✦ {t.highlight}
                </span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
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

        {/* Confidentiality Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 text-sm italic max-w-2xl mx-auto border-t border-white/5 pt-8">
            Note: We have completed many more high-end projects; however, we are unable to showcase them here due to strict non-disclosure agreements (NDAs) and confidentiality requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
