"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  "/hom1.jfif",
  "/hom4.jpg",
  "/hom2.jfif",
  "/hom5.jfif",
  "/hom3.jfif"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with AnimatePresence */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={heroImages[currentIndex]}
            alt={`House of Moments Photography - Slide ${currentIndex + 1}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 2, ease: "easeInOut" },
              scale: { duration: 8, ease: "linear" }
            }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>
        {/* Dark overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-hom-black/60 via-hom-black/40 to-hom-black z-10" /> */}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
        <p className="font-playfair text-white/70 font-medium  tracking-[0.5em] uppercase text-sm md:text-sm mb-6 animate-fade-in-up">
          HOUSE OF MOMENTS PHOTOGRAPHY
        </p>
        <h1 className="font-instrument-serif font-light italic tracking-relaxed text-3xl md:text-4xl lg:text-6xl text-white  leading-tighter animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          WELCOME TO <br className="hidden md:block" />
        </h1>
        <h1 className="font-noto-serif-display tracking-tight text-3xl md:text-4xl lg:text-7xl text-white mb-5 leading-tighter animate-fade-in-up">
          HOM PHOTOGRAPHY
        </h1>
        <p className="font-birthstone text-white/80 text-2xl md:text-3xl  mx-auto mb-10 animate-fade-in-up font-light" style={{ animationDelay: "0.4s" }}>
          Every frame tells a story — of love, light, and timeless beauty.
          We turn your moments into memories you can feel.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6  animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          {/* <a
            href="https://wa.me/919700853389"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black hover:bg-black hover:text-white border border-white font-space-grotesk text-sm tracking-widest uppercase font-semibold py-2 px-5 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            Book Your Session
          </a> */}
          <a
            href="#portfolio"
            className="bg-black/40 text-white hover:bg-white hover:text-black border border-white/70 font-space-grotesk text-sm tracking-widest uppercase font-semibold py-2 px-5 transition-all duration-300 backdrop-blur-sm"
          >
            View Portfolio
          </a>
        </div>
      </div>


    </section >
  );
}
