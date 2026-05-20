"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/919898083823?text=Hi%20Genie9.dev,%20I'm%20interested%20in%20scaling%20my%20business!"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/30 cursor-pointer border border-emerald-400/20"
          title="Chat on WhatsApp"
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10" />

          {/* WhatsApp SVG Icon */}
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.446L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.115-2.903-6.99-1.872-1.873-4.35-2.903-6.986-2.904-5.441 0-9.867 4.425-9.871 9.87-.001 1.748.465 3.453 1.35 4.975l-.973 3.553 3.694-.969zm11.722-6.52c-.312-.156-1.848-.912-2.137-1.017-.289-.104-.5-.156-.711.156-.211.312-.818 1.017-1.002 1.225-.185.208-.369.234-.681.078-1.222-.61-2.146-1.07-2.996-2.529-.224-.388.224-.36.643-1.196.07-.14.035-.26-.017-.365-.052-.104-.467-1.127-.639-1.54-.168-.403-.35-.348-.5-.356l-.427-.008c-.147 0-.387.055-.59.276-.203.221-.774.757-.774 1.847 0 1.089.792 2.143.903 2.298.11.156 1.558 2.38 3.774 3.335.527.227.938.363 1.258.465.529.168 1.011.144 1.392.088.425-.062 1.848-.756 2.109-1.458.261-.702.261-1.302.185-1.43-.076-.128-.276-.208-.588-.364z" />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
