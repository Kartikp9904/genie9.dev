"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#projects" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.446L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.115-2.903-6.99-1.872-1.873-4.35-2.903-6.986-2.904-5.441 0-9.867 4.425-9.871 9.87-.001 1.748.465 3.453 1.35 4.975l-.973 3.553 3.694-.969zm11.722-6.52c-.312-.156-1.848-.912-2.137-1.017-.289-.104-.5-.156-.711.156-.211.312-.818 1.017-1.002 1.225-.185.208-.369.234-.681.078-1.222-.61-2.146-1.07-2.996-2.529-.224-.388.224-.36.643-1.196.07-.14.035-.26-.017-.365-.052-.104-.467-1.127-.639-1.54-.168-.403-.35-.348-.5-.356l-.427-.008c-.147 0-.387.055-.59.276-.203.221-.774.757-.774 1.847 0 1.089.792 2.143.903 2.298.11.156 1.558 2.38 3.774 3.335.527.227.938.363 1.258.465.529.168 1.011.144 1.392.088.425-.062 1.848-.756 2.109-1.458.261-.702.261-1.302.185-1.43-.076-.128-.276-.208-.588-.364z"/>
  </svg>
);

const socialLinks = [
  {
    id: "footer-instagram",
    Icon: InstagramIcon,
    href: "https://www.instagram.com/genie9.dev/",
    label: "Instagram",
    hoverColor: "hover:text-pink-400",
  },
  {
    id: "footer-whatsapp",
    Icon: WhatsAppIcon,
    href: "https://wa.me/919898083823",
    label: "WhatsApp",
    hoverColor: "hover:text-emerald-400",
  },
  {
    id: "footer-email",
    Icon: EmailIcon,
    href: "mailto:genie9official@gmail.com",
    label: "Email",
    hoverColor: "hover:text-blue-400",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-[#090d16]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Image
                src="/assets/logo.png"
                alt="Genie9.dev Logo"
                width={38}
                height={38}
                className="object-contain"
                unoptimized
              />
              <span className="text-lg font-bold">
                <span className="gradient-accent-text">Genie</span>
                <span className="text-white">9.dev</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              We build websites and automation systems that help businesses grow faster.
            </p>
            <p className="text-slate-500 text-sm mt-2">
              <a href="mailto:genie9official@gmail.com" className="hover:text-blue-400 transition-colors">
                genie9official@gmail.com
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Connect</h3>
            <div className="flex gap-3 mb-5">
              {socialLinks.map((social) => {
                const { Icon } = social;
                return (
                  <motion.a
                    key={social.id}
                    id={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-slate-500 ${social.hoverColor} transition-colors duration-200`}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-glow inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold"
            >
              Start a Project →
            </motion.a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-600 text-xs">
            © {currentYear} Genie9.dev. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Ahmedabad, Gujarat, India
          </p>
        </div>
      </div>
    </footer>
  );
}
