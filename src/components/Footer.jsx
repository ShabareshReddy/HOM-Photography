"use client";

import { motion } from "framer-motion";

export default function LuxuryFooter() {
  return (
    <footer className="w-full bg-[#050505] text-[#D1D1D1] py-20 px-6 flex flex-col items-center border-t border-[#1A1A1A]">
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl md:text-5xl font-playfair-sc tracking-[0.2em] text-white mb-4 text-center"
      >
        HOUSE OF MOMENTS
      </motion.h2>
      
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="text-sm italic text-[#888888] mb-12 text-center"
      >
        Where memories become timeless.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex flex-wrap justify-center gap-8 md:gap-12 text-xs md:text-sm tracking-[0.15em] uppercase text-[#666666] mb-16"
      >
        <a href="#weddings" className="hover:text-white transition-colors duration-500">Weddings</a>
        <a href="#portfolio" className="hover:text-white transition-colors duration-500">Portfolio</a>
        <a href="#services" className="hover:text-white transition-colors duration-500">Services</a>
        <a href="#contact" className="hover:text-white transition-colors duration-500">Contact</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-500">Instagram</a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="w-full max-w-4xl flex flex-col items-center gap-4 text-xs text-[#444444]"
      >
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#222222] to-transparent mb-4"></div>
        <div className="flex flex-col md:flex-row justify-between w-full items-center gap-4 px-4">
          <p>© {new Date().getFullYear()} House of Moments. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-[#888888] transition-colors duration-300">Privacy</a>
            <a href="/terms" className="hover:text-[#888888] transition-colors duration-300">Terms</a>
            <a href="/login" className="hover:text-[#888888] transition-colors duration-300 opacity-60 hover:opacity-100 flex items-center" title="Admin Access">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}