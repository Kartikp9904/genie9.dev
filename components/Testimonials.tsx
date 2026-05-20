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
    text: "The platform Genie9.dev built for our language school is fast and intuitive. Students sign up without friction. Our enrollment grew by 35% in the first month.",
    highlight: "35% enrollment growth",
  },
  {
    id: "testimonial-maheshwari",
    name: "Alkesh Patel",
    role: "Director, Maheshwari Metals",
    avatar: "A",
    avatarBg: "from-slate-600 to-slate-700",
    rating: 5,
    text: "They built a high-performance product catalog that showcases our capabilities to global B2B clients. Inquiries rose by 40% within two months of launch.",
    highlight: "40% more B2B inquiries",
  },
  {
    id: "testimonial-alex",
    name: "Alex Christian",
    role: "Content Creator",
    avatar: "A",
    avatarBg: "from-blue-400 to-cyan-500",
    rating: 5,
    text: "Super smooth communication and incredibly fast delivery. The portfolio looks highly professional and helped me close high-paying client contracts within days.",
    highlight: "Helped close high-paying clients",
  },
  {
    id: "testimonial-global",
    name: "Heitor Silva",
    role: "CEO, Global Trade Solutions",
    avatar: "H",
    avatarBg: "from-emerald-500 to-teal-600",
    rating: 5,
    text: "The B2B platform they built simplified our order tracking and reduced team communication overhead by 50%. It was exactly what our operations team needed.",
    highlight: "50% less operational overhead",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad relative overflow-hidden bg-[#090d16]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3 block">
            Client Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            What Our <span className="gradient-accent-text">Clients Say</span>
          </h2>
          <p className="text-slate-400 text-base max-w-lg mx-auto">
            Real businesses, real results. Here is what they had to say after working with us.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              id={t.id}
              variants={cardVariants}
              className="glass-card rounded-2xl p-6 border border-white/7 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <Quote className="w-6 h-6 text-blue-500/30 shrink-0" />
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-4">&ldquo;{t.text}&rdquo;</p>

              <div className="pt-4 border-t border-white/5">
                <div className="inline-block text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/15 rounded-full px-3 py-1 mb-3">
                  ✦ {t.highlight}
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-lg bg-gradient-to-br ${t.avatarBg} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-slate-600 text-xs italic max-w-2xl mx-auto">
            We also work with several local startups and corporate partners not listed here due to NDA agreements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
