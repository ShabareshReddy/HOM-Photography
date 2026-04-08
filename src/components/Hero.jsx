"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  LUXURY_EASE,
  letterVariant,
  wordContainer,
  clipReveal,
  fadeSlideUp,
} from "@/lib/motionVariants";

const heroImages = [
  "/hom1.jpg",
  "/hom4.jpg",
  "/hom2.jpg",
  "/hom5.jpg",
  "/hom3.jpg",
];

/* ── Reusable kinetic word renderer ─── */
function AnimatedWord({ text, className, stagger = 0.04, delay = 0 }) {
  const chars = text.split("");
  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={wordContainer(stagger, delay)}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          variants={letterVariant}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 280]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Parallax Background ── */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] z-0 overflow-hidden"
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={heroImages[currentIndex]}
            alt={`House of Moments Photography - Slide ${currentIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.7, ease: "easeInOut" }
            }}
            className="absolute inset-0 w-full h-full object-cover object-center origin-center"
          />
        </AnimatePresence>
      </motion.div>

      {/* ── Dark vignette ── */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 z-10 pointer-events-none" /> */}

      {/* ── Content ── */}
      <div className="relative z-20 text-center px-4 max-w-7xl mx-auto mt-40">

        {/* Brand label — clip-path reveal */}
        <motion.p
          variants={clipReveal(0.2, 0.9)}
          initial="hidden"
          animate="visible"
          className="font-playfair-sc text-white/80 font-medium tracking-[0.40em] uppercase text-[10px] sm:text-xs md:text-sm whitespace-nowrap border border-white/30 px-2 py-0 inline-block mb-8"
        >
          HOUSE OF MOMENTS PHOTOGRAPHY
        </motion.p>

        {/* ── Kinetic heading row 1 ── */}
        <div className="flex flex-col leading-tighter">
          <h1 className="font-instrument-serif font-light italic tracking-relaxed text-5xl md:text-4xl lg:text-6xl text-white leading-tighter">
            <AnimatedWord
              text="WELCOME TO"
              stagger={0.045}
              delay={0.45}
            />
            <br className="hidden md:block" />
          </h1>

          {/* ── Kinetic heading row 2 — slower, more dramatic ── */}
          <h1 className="font-noto-serif-display font-light tracking-tight text-5xl md:text-4xl lg:text-7xl text-white mb-5 leading-tighter">
            <AnimatedWord
              text="HOM PHOTOGRAPHY"
              stagger={0.055}
              delay={0.65}
            />
          </h1>
        </div>

        {/* Tagline — clip reveal */}
        <motion.p
          variants={clipReveal(1.1, 0.8)}
          initial="hidden"
          animate="visible"
          className="font-instrument-serif text-white/80 text-1xl md:text-sm mx-auto mb-10 font-light"
        >
          Every frame tells a story — of love, light, and timeless beauty.
          We turn your moments into memories you can feel.
        </motion.p>

        {/* CTA buttons — fade slide up stagger */}
        <motion.div
          variants={wordContainer(0.15, 1.3)}
          initial="hidden"
          animate="visible"
          className="flex flex-row justify-center items-center gap-3 sm:gap-6 w-full max-w-[360px] sm:max-w-none mx-auto"
        >
          <motion.a
            variants={fadeSlideUp(0, 0.7)}
            href="https://wa.me/919700853389"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white/20 text-black hover:bg-hom-gold/80 hover:text-black border border-hom-gold/50 font-space-grotesk text-[10px] sm:text-sm tracking-wider sm:tracking-widest uppercase font-semibold py-3 px-2 sm:py-2 sm:px-6 transition-all duration-300 backdrop-blur-sm"
          >
            <span className="text-center leading-tight">Book Your Session</span>
            <ArrowRight className="hidden sm:block w-0 h-4 opacity-0 -translate-x-2 group-hover:w-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out" />
          </motion.a>

          <motion.a
            variants={fadeSlideUp(0, 0.7)}
            href="#portfolio"
            className="group flex-1 sm:flex-none flex items-center justify-center gap-2 bg-black/40 text-white hover:bg-hom-gold/80 hover:text-black border border-hom-gold/50 font-space-grotesk text-[10px] sm:text-sm tracking-wider sm:tracking-widest uppercase font-semibold py-3 px-2 sm:py-2 sm:px-6 transition-all duration-300 backdrop-blur-sm"
          >
            <span className="text-center leading-tight">View Portfolio</span>
            <ArrowRight className="hidden sm:block w-0 h-4 opacity-0 -translate-x-2 group-hover:w-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
