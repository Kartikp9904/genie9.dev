"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink, Code2, Layers, AlertCircle, CheckCircle, Lightbulb, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: "maheshwari-metal",
    name: "Maheshwari Metal",
    badge: "Industrial & Manufacturing",
    problem: "Legacy industrial supplier had zero online presence. Competitors were capturing local and global sheet metal orders due to a lack of catalog visibility.",
    solution: "Designed a high-performance, mobile-responsive product catalog website with an automated inquiry request system.",
    result: "40% increase in digital inquiries within 60 days. Streamlined sheet metal product showcase for international clients.",
    tags: ["React", "Tailwind CSS", "Vercel", "Inquiry Automation"],
    link: "https://maheshwarimetals.vercel.app/",
    topBarColor: "from-slate-500 to-gray-600",
    borderColor: "border-slate-500/20",
    badgeStyle: "bg-slate-500/10 border-slate-500/20 text-slate-300",
    btnStyle: "from-slate-500 to-gray-600",
  },
  {
    id: "ucanfrench",
    name: "UCanFrench",
    badge: "EdTech Platform",
    problem: "Educational platform suffered from high bounce rates and low student sign-ups because of onboarding friction, poor mobile speeds, and outdated design.",
    solution: "Created an interactive story-based web app with instant page loads, integrated WhatsApp onboarding, and conversion-optimized forms.",
    result: "35% enrollment growth in the first month. Reduced page load times by 60% and slashed user onboarding drop-offs.",
    tags: ["Next.js", "Tailwind CSS", "Vercel", "WhatsApp Integration"],
    link: "https://ucanfrench.com/",
    topBarColor: "from-red-600 to-blue-600",
    borderColor: "border-red-600/20",
    badgeStyle: "bg-red-600/10 border-red-600/20 text-red-300",
    btnStyle: "from-red-600 to-blue-600",
  },
  {
    id: "global-trade-solutions",
    name: "Global Trade Solutions",
    badge: "B2B Supply Chain",
    problem: "Manual order tracking and email-heavy B2B communication caused tracking errors and operational delays for B2B global transactions.",
    solution: "Built a secure, centralized B2B client platform with automatic email updates, live order stages, and simplified digital docs.",
    result: "Reduced logistics communication overhead by 50% and helped secure 3 new global B2B trade partners.",
    tags: ["Next.js", "Tailwind CSS", "B2B Portal", "Workflow Automations"],
    link: "https://globaltradesolutions.vercel.app/",
    topBarColor: "from-emerald-600 to-green-700",
    borderColor: "border-emerald-600/20",
    badgeStyle: "bg-emerald-600/10 border-emerald-600/20 text-emerald-300",
    btnStyle: "from-emerald-600 to-green-700",
  },
  {
    id: "local-coaching",
    name: "Local Coaching Institute",
    badge: "Local Business",
    problem: "High client acquisition costs and zero automated pre-qualification meant the founder spent hours calling unqualified leads manually.",
    solution: "Launched a custom local landing page with a direct WhatsApp CRM booking funnel and integrated FAQ chatbot.",
    result: "Doubled call booking rate within 30 days and automated prospect pre-qualification, saving 8 hours of manual calling weekly.",
    tags: ["React", "WhatsApp CRM", "Lead Gen Funnel"],
    link: "#contact",
    topBarColor: "from-blue-600 to-indigo-600",
    borderColor: "border-blue-500/20",
    badgeStyle: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    btnStyle: "from-blue-600 to-indigo-600",
  }
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative overflow-hidden">
      <div
        className="orb"
        style={{
          width: "400px",
          height: "400px",
          background: "#1e3a8a",
          top: "80px",
          left: "-10%",
          opacity: 0.03,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3 block">
            Our Case Studies
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mb-5">
            Results That <span className="gradient-text">Speak in Numbers</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We don&apos;t just build templates. We solve bottlenecks, save manual hours, and bring measurable business growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {caseStudies.map((project) => (
            <motion.article
              key={project.id}
              id={`project-${project.id}`}
              variants={cardVariants}
              className={`glass-card rounded-3xl border ${project.borderColor} relative overflow-hidden flex flex-col`}
            >
              {/* Top gradient line */}
              <div className={`h-1.5 bg-gradient-to-r ${project.topBarColor} flex-shrink-0`} />

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

                <h3 className="text-2xl font-bold text-white mb-6">{project.name}</h3>

                {/* Structured Copy: Problem, Solution, Result */}
                <div className="space-y-4 mb-6 flex-1">
                  <div className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-red-300 uppercase tracking-wider mb-0.5">The Problem</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{project.problem}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Lightbulb className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-0.5">What We Did</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-3.5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-0.5">The Result</h4>
                      <p className="text-slate-200 text-sm font-medium leading-relaxed">{project.result}</p>
                    </div>
                  </div>
                </div>

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
                {project.link !== "#contact" ? (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`visit-${project.id}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-semibold text-sm bg-gradient-to-r ${project.btnStyle} text-white transition-all duration-300 shadow-md`}
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                ) : (
                  <motion.a
                    href={project.link}
                    id={`visit-${project.id}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-semibold text-sm bg-gradient-to-r ${project.btnStyle} text-white transition-all duration-300 shadow-md`}
                  >
                    Get a Funnel Like This
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
