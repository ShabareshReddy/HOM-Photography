"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    // Show loading screen for a short duration
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] bg-white flex flex-col items-center justify-center p-4"
        >
          <div className="flex flex-col items-center">
            {/* Logo */}
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden mb-8 border border-hom-gold/20 shadow-lg shadow-hom-gold/5">
              <img
                src="/HOM.jpg"
                alt="HOM Logo"
                className="w-full h-full object-cover object-top"
                style={{ objectPosition: "50% 10%" }}
              />
            </div>

            {/* Main Title */}
            <h1 className="font-aboreto text-2xl sm:text-4xl md:text-5xl tracking-[0.25em] text-[#111111] mb-5 text-center uppercase">
              HOUSE OF MOMENTS
            </h1>

            {/* Subtext with decorative ruled lines */}
            <div className="flex items-center gap-4 w-full justify-center max-w-[400px] opacity-80">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-hom-gold" />
              <p className="font-space-grotesk font-medium text-[10px] sm:text-xs tracking-[0.3em] text-[#444444] uppercase whitespace-nowrap">
                Photography
              </p>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-hom-gold" />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
