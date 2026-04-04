"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, Layers } from "lucide-react";

// ✅ ADD YOUR PROJECTS HERE DYNAMICALLY
const projects = [
  {
    id: "abshar-kuwait",
    name: "Abshar Kuwait",
    description:
      "A premium restaurant website with an integrated ordering system, WhatsApp checkout, and a mobile-first design built for maximum conversions.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "WhatsApp API"],
    link: "#",
    topBarColor: "from-purple-500 to-pink-500",
    borderColor: "border-purple-500/20",
    badgeStyle: "bg-purple-500/10 border-purple-500/20 text-purple-300",
    btnStyle: "from-purple-500 to-pink-500",
    badge: "E-Commerce",
  },
  {
    id: "euroafriasia",
    name: "EuroAfriAsia",
    description:
      "Corporate import-export business website with a modern React architecture, dynamic routing, and integrated contact form with PHPMailer.",
    tags: ["React", "PHP", "SEO", "CSS"],
    link: "#",
    topBarColor: "from-violet-500 to-purple-500",
    borderColor: "border-violet-500/20",
    badgeStyle: "bg-violet-500/10 border-violet-500/20 text-violet-300",
    btnStyle: "from-violet-500 to-purple-500",
    badge: "Corporate",
  },
  {
    id: "inter-agro",
    name: "Inter Agro Group",
    description:
      "Production-ready Next.js corporate website for an agricultural trading company. Full ESLint audit, GitHub deployment and clean codebase.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub"],
    link: "#",
    topBarColor: "from-pink-500 to-rose-500",
    borderColor: "border-pink-500/20",
    badgeStyle: "bg-pink-500/10 border-pink-500/20 text-pink-300",
    btnStyle: "from-pink-500 to-rose-500",
    badge: "Corporate",
  },
  {
    id: "dashboard",
    name: "Digital Growth Dashboard",
    description:
      "Analytics-first dashboard for tracking social media growth, lead conversions, and website performance metrics in real time.",
    tags: ["React", "Chart.js", "Tailwind CSS", "API"],
    link: "#",
    topBarColor: "from-purple-600 to-violet-500",
    borderColor: "border-purple-500/20",
    badgeStyle: "bg-purple-500/10 border-purple-500/20 text-purple-300",
    btnStyle: "from-purple-600 to-violet-500",
    badge: "SaaS",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative overflow-hidden">
      <div
        className="orb"
        style={{
          width: "400px",
          height: "400px",
          background: "#7c3aed",
          top: "80px",
          left: "-10%",
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
            My Work
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mb-5">
            Projects That{" "}
            <span className="gradient-text">Deliver Results</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Real websites. Real businesses. Real growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              id={`project-${project.id}`}
              variants={cardVariants}
              className={`glass-card rounded-3xl border ${project.borderColor} relative overflow-hidden flex flex-col`}
            >
              {/* Top gradient line */}
              <div className={`h-1 bg-gradient-to-r ${project.topBarColor} flex-shrink-0`} />

              <div className="p-8 flex flex-col flex-1">
                {/* Badge row */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${project.badgeStyle}`}>
                    {project.badge}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-slate-400" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1.5 text-xs text-slate-400 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10"
                    >
                      <Code2 className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Visit Button */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`visit-${project.id}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm bg-gradient-to-r ${project.btnStyle} text-white transition-all duration-300`}
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
