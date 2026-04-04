"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink, Code2, Layers } from "lucide-react";

// ✅ ADD YOUR PROJECTS HERE DYNAMICALLY
const projects = [
  {
    id: "article-hub",
    name: "ArticleHub",
    description:
      "A premium, modern blog platform for expert-curated content across technology, lifestyle, and business.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
    link: "https://articlesphere.lovable.app",
    topBarColor: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/20",
    badgeStyle: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    btnStyle: "from-blue-500 to-cyan-500",
    badge: "Blog",
  },
  {
    id: "digital-universe",
    name: "Digital Universe Portfolio",
    description:
      "A futuristic and interactive personal portfolio with a cosmic theme, showcasing a developer's journey and skills.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
    link: "https://digital-self-world.lovable.app",
    topBarColor: "from-indigo-500 to-purple-500",
    borderColor: "border-indigo-500/20",
    badgeStyle: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
    btnStyle: "from-indigo-500 to-purple-500",
    badge: "Portfolio",
  },
  {
    id: "kadhaippoma",
    name: "Kadhaippoma",
    description:
      "A social music listening platform that allows friends to listen to music together in perfect real-time synchronization.",
    tags: ["Next.js", "Socket.io", "Tailwind CSS", "Real-time"],
    link: "https://kadhaippoma.vercel.app/",
    topBarColor: "from-orange-500 to-red-500",
    borderColor: "border-orange-500/20",
    badgeStyle: "bg-orange-500/10 border-orange-500/20 text-orange-300",
    btnStyle: "from-orange-500 to-red-500",
    badge: "Social Media",
  },
  {
    id: "creator-portfolio",
    name: "Alex Creator Portfolio",
    description:
      "A professional showcase for video editors and content creators, featuring service listings and video previews.",
    tags: ["React", "Framer Motion", "Tailwind CSS", "Video"],
    link: "https://creatorportfolio.lovable.app",
    topBarColor: "from-emerald-500 to-teal-500",
    borderColor: "border-emerald-500/20",
    badgeStyle: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
    btnStyle: "from-emerald-500 to-teal-500",
    badge: "Portfolio",
  },
  {
    id: "maheshwari-metal",
    name: "Maheshwari Metal",
    description:
      "A manufacturing-focused website for a sheet metal articles specialist, emphasizing quality and customer-centricity.",
    tags: ["React", "Tailwind CSS", "Vercel", "Industrial"],
    link: "https://maheshwarimetals.vercel.app/",
    topBarColor: "from-slate-500 to-gray-600",
    borderColor: "border-slate-500/20",
    badgeStyle: "bg-slate-500/10 border-slate-500/20 text-slate-300",
    btnStyle: "from-slate-500 to-gray-600",
    badge: "Business",
  },
  {
    id: "ucanfrench",
    name: "UCanFrench",
    description:
      "An educational platform designed to help users master French through engaging short stories categorized by levels.",
    tags: ["Next.js", "Tailwind CSS", "Vercel", "Education"],
    link: "https://ucanfrench.com/",
    topBarColor: "from-red-600 to-blue-600",
    borderColor: "border-red-600/20",
    badgeStyle: "bg-red-600/10 border-red-600/20 text-red-300",
    btnStyle: "from-red-600 to-blue-600",
    badge: "Educational",
  },
  {
    id: "global-trade-solutions",
    name: "Global Trade Solutions",
    description:
      "A premier international commerce partner specializing in agricultural commodities and supply chain logistics across 25+ countries.",
    tags: ["Next.js", "Tailwind CSS", "B2B", "Logistics"],
    link: "https://globaltradesolutions.vercel.app/",
    topBarColor: "from-emerald-600 to-green-700",
    borderColor: "border-emerald-600/20",
    badgeStyle: "bg-emerald-600/10 border-emerald-600/20 text-emerald-300",
    btnStyle: "from-emerald-600 to-green-700",
    badge: "B2B Commerce",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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

