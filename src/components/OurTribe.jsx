"use client";
import { motion, useInView, useMotionValue, useTransform, animate, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

function ScrollRevealLine({ line, index, scrollYProgress }) {
  const start = index * 0.18;
  const end = start + 0.3;

  const clipPathRight = useTransform(scrollYProgress, [start, end], [180, 0]);
  const clipPath = useTransform(clipPathRight, val => `inset(0 ${val}% 0 0)`);

  return (
    <div className="relative w-full flex justify-center mb-1 md:mb-2 font-aboreto text-[10px] min-[400px]:text-xs sm:text-sm md:text-lg lg:text-2xl tracking-normal md:tracking-[0.05em] font-medium leading-relaxed">
      <div className="relative w-fit">
        <div className="opacity-50 text-hom-black whitespace-nowrap">{line}</div>
        <motion.div
          style={{ clipPath }}
          className="absolute top-0 left-0 whitespace-nowrap text-hom-black text-left"
        >
          {line}
        </motion.div>
      </div>
    </div>
  );
}

function ScrollLinkedText() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "end 40%"],

  });

  const lines = [
    <span key="1">We are a collective of storytellers, <span className="text-hom-gold">deeply devoted</span></span>,
    <span key="2">to capturing the unseen emotions and <span className="text-hom-gold">fleeting moments</span></span>,
    <span key="3">that make your love story <span className="text-hom-gold">uniquely yours.</span> With an</span>,
    <span key="4">editorial eye and an <span className="text-hom-gold text-[12px] min-[400px]:text-sm sm:text-lg md:text-2xl italic font-instrument-serif border-b border-hom-gold/30">unobtrusive</span> approach, we transform</span>,
    <span key="5">genuine memories into timeless <span className="text-hom-gold uppercase tracking-[0.1em] md:tracking-[0.2em] font-aboreto text-[10px] min-[400px]:text-xs md:text-lg">cinematic art.</span></span>
  ];

  return (
    <div ref={containerRef} className="max-w-[100vw] overflow-hidden md:overflow-visible mx-auto flex flex-col mt-4 md:mt-8 px-2">
      {lines.map((line, i) => (
        <ScrollRevealLine key={i} line={line} index={i} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  );
}

function AnimatedNumber({ value }) {
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
  const suffix = value.replace(/\d/g, '');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, { duration: 2.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, numericValue]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function OurTribe() {
  const stats = [
    { value: "500+", label: "Images", suffix: "Per Event" },
    { value: "50+", label: "Photography", suffix: "Sessions" },
    { value: "8+", label: "Years", suffix: "Experience" },
    { value: "100+", label: "Happy", suffix: "Couples" },
  ];

  return (
    <section className="bg-white py-24 relative overflow-hidden flex items-center justify-center border-y border-hom-black/10">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 relative">
          <h2

            className="inline-block px-7 py-2 font-aboreto text-hom-gold text-xl md:text-4xl border border-hom-gold/40 tracking-[0.2em] mb-6 uppercase"
          >
            <span className="text-hom-black">Our</span> Tribe
          </h2>
          <p

            className="font-instrument-serif text-hom-black text-4xl md:text-5xl lg:text-6xl max-w-3xl mx-auto leading-tight mb-16"
          >
            Passionate <span className="italic text-hom-gold">Creators</span> of Visual <span className="italic">Poetry</span>
          </p>

          <ScrollLinkedText />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6 mt-16 max-w-5xl mx-auto text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeOut" }}
              className="flex flex-col items-center justify-center p-6 border border-hom-black/5 rounded-full aspect-square bg-gray-50 hover:bg-hom-gold/5 hover:border-hom-gold/30 transition-all duration-500 ease-in-out cursor-default overflow-hidden group hover:shadow-lg hover:shadow-hom-gold/10"
            >
              <h3 className="font-instrument-serif text-5xl md:text-6xl text-hom-gold mb-1 group-hover:scale-110 transition-transform duration-500">
                <AnimatedNumber value={stat.value} />
              </h3>
              <p className="font-space-grotesk font-semibold text-hom-black tracking-[0.1em] text-sm md:text-base uppercase mb-1">
                {stat.label}
              </p>
              <p className="font-aboreto text-hom-black/60 text-[10px] md:text-xs tracking-widest uppercase">
                {stat.suffix}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
