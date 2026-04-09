"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const heroImages = [
  "/hom1.jpg",
  "/hom4.jpg",
  "/hom2.jpg",
  "/hom5.jpg",
  "/hom3.jpg"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with AnimatePresence */}
      <motion.div style={{ y }} className="absolute inset-[0] w-full h-[120%] -top-[10%] z-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={heroImages[currentIndex]}
            alt={`House of Moments Photography - Slide ${currentIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>
        {/* Dark overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-hom-black/60 via-hom-black/40 to-hom-black z-10" /> */}
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-7xl mx-auto mt-40">
        <p
          className="
    font-space-grotesk 
    text-white/80 
    font-medium 
    tracking-[0.40em] 
    uppercase 
    text-[10px] sm:text-xs md:text-sm
    whitespace-nowrap
    border border-white/30
    px-2 py-0
    inline-block
    mb-8
    animate-fade-in-up
  "
        >
          HOUSE OF MOMENTS PHOTOGRAPHY
        </p>
        <div className="flex flex-col leading-tighter">
          <h1 className="font-instrument-serif font-light italic tracking-relaxed text-3xl md:text-4xl lg:text-7xl text-white  leading-10 animate-fade-in-up" style={{ animationDelay: "0s" }}>
            WELCOME TO <br className="hidden md:block" />
          </h1>
          <h1 className="font-noto-serif-display font-light tracking-loose text-3xl md:text-4xl lg:text-7xl text-white mb-5 leading-tighter animate-fade-in-up">
            HOM PHOTOGRAPHY
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          {/* <a
            href="https://wa.me/919700853389"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 bg-white/20 text-black hover:bg-hom-gold/80 hover:text-black border border-hom-gold/50 font-space-grotesk text-sm tracking-widest uppercase font-semibold py-2 px-6 transition-all duration-300 backdrop-blur-sm"
          >
            <span>Book Your Session</span>
            <ArrowRight className="w-0 h-4 opacity-0 -translate-x-2 group-hover:w-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out" />
          </a>
          <a
            href="#portfolio"
            className="group flex items-center justify-center gap-2 bg-black/40 text-white hover:bg-hom-gold/80 hover:text-black border border-hom-gold/50 font-space-grotesk text-sm tracking-widest uppercase font-semibold py-2 px-6 transition-all duration-300 backdrop-blur-sm"
          >
            <span>View Portfolio</span>
            <ArrowRight className="w-0 h-4 opacity-0 -translate-x-2 group-hover:w-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out" />
          </a> */}
        </div>
      </div>


    </section >
  );
}
