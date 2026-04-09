"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const cards = [
  { title: "Newborn Baby", desc: "Beautiful baby moments.", image: "/newborn.jpg" },
  { title: "Pre Wedding", desc: "Romantic storytelling.", image: "/prewedding.jpg" },
  { title: "Cinematic Films", desc: "Luxury film experience.", image: "/cinematic.jpg" },
  { title: "Wedding", desc: "Complete coverage.", image: "/wedding.jpg" },
  { title: "haldi", desc: "fdsfds", image: "/haaldi.jpg" }
];

const AnimatedLetter = ({ char, progress, index, total, className }) => {
  const startEnter = (index / total) * 0.1;
  const endEnter = startEnter + 0.05;

  const reverseIndex = total - 1 - index;
  const startExit = 0.8 + (reverseIndex / total) * 0.1;
  const endExit = startExit + 0.05;

  const opacity = useTransform(
    progress,
    [startEnter, endEnter, startExit, endExit],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    progress,
    [startEnter, endEnter, startExit, endExit],
    [100, 0, 0, 100]
  );

  return (
    <motion.span
      style={{ opacity, y, display: "inline-block" }}
      className={className}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

const CardItem = ({ card, i, smoothProgress, totalCards }) => {
  const start = i * 0.18;
  const end = start + 0.18;

  const baseRotation = i === 0 ? 0 : i % 2 === 0 ? i * -2 : i * 3;

  const y = useTransform(
    smoothProgress,
    [start, end],
    [0, -800]
  );

  const rotate = useTransform(
    smoothProgress,
    [start, end],
    [baseRotation, baseRotation - 30]
  );

  const opacity = useTransform(
    smoothProgress,
    [start, end - 0.05, end],
    [1, 1, 0]
  );

  return (
    <motion.div
      style={{
        y,
        rotate,
        opacity,
        zIndex: totalCards - i,
      }}
      className={`absolute w-full h-full rounded-[1rem] text-hom-gold shadow-2xl flex flex-col justify-end border border-hom-gold/60 origin-bottom overflow-hidden bg-black`}
    >
      <Image
        src={card.image}
        alt={card.title}
        fill
        className="object-cover z-0"
      />
      {/* Subtle gradient overlay to make text pop against the image */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent z-10 pointer-events-none" />

      <div className="relative z-20 p-8 flex items-end justify-between">
        <div>
          <h3 className="text-3xl font-bold mb-2 font-aboreto tracking-wider">
            {card.title}
          </h3>

        </div>

        {/* Arrow Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex-shrink-0 w-12 h-12 min-w-[48px] min-h-[48px] rounded-full border border-hom-gold flex items-center justify-center bg-white/10 backdrop-blur-md transition duration-300 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-hom-gold group-hover:text-hom-gold transition"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 17L17 7M17 7H8M17 7V16"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function SwagStyleCards() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  const leftLeafY = useTransform(smoothProgress, [0, 0.9], [50, -150]);
  const rightLeafY = useTransform(smoothProgress, [0, 0.9], [-100, 100]);

  const word1 = "OUR".split("");
  const word2 = "SERVICES".split("");
  const totalLength = word1.length + word2.length;

  return (
    <section id="services" ref={containerRef} className="relative h-[500vh] bg-white overflow-x-clip">
      {/* Huge Sticky Text behind cards */}
      <div
        className="sticky top-0 h-screen w-full items-center justify-center overflow-hidden z-0 pointer-events-none hidden md:flex"
      >
        <h1 className="text-[12vw] font-noto-serif-display text-center uppercase tracking-widest leading-none drop-shadow-sm select-none whitespace-nowrap flex">
          <span className="text-hom-gold pr-6 flex">
            {word1.map((char, i) => (
              <AnimatedLetter
                key={`w1-${i}`}
                char={char}
                progress={smoothProgress}
                index={i}
                total={totalLength}
              />
            ))}
          </span>
          <span className="text-black flex">
            {word2.map((char, i) => (
              <AnimatedLetter
                key={`w2-${i}`}
                char={char}
                progress={smoothProgress}
                index={word1.length + i}
                total={totalLength}
              />
            ))}
          </span>
        </h1>
      </div>

      {/* Cards Overlay */}
      <div className="absolute top-0 left-0 w-full h-[500vh]">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center z-10">

          {/* Mobile Heading */}
          <div className="absolute top-[8vh] w-full flex justify-center md:hidden z-20 pointer-events-none">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl font-aboreto font-medium border border-hom-gold/50  text-hom-darkgold tracking-widest uppercase"
            >
              Our<span className="text-black">  Services</span>
            </motion.h2>
          </div>

          {/* LEFT LEAF FRAME */}
          <motion.div style={{ y: leftLeafY }} className="absolute left-0 top-[10vh] h-[90vh] w-[22vw] md:w-[18vw] pointer-events-none select-none flex flex-col items-start justify-center overflow-visible">
            <svg viewBox="0 0 200 900" className="w-full h-full opacity-80" preserveAspectRatio="xMinYMid slice" xmlns="http://www.w3.org/2000/svg">
              {/* Main stem */}
              <path d="M40 900 Q50 700 30 500 Q10 300 60 0" stroke="#4a7c59" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              {/* Leaf 1 - bottom */}
              <path d="M40 800 Q-30 750 -50 680 Q10 700 40 770" fill="#6aab7e" opacity="0.75" />
              <path d="M40 800 Q100 750 110 670 Q70 700 40 770" fill="#4d8c5e" opacity="0.70" />
              {/* Leaf 2 */}
              <path d="M35 680 Q-60 630 -80 540 Q0 580 35 650" fill="#7bbf8e" opacity="0.70" />
              <path d="M35 680 Q110 640 130 555 Q70 590 35 650" fill="#5a9a6e" opacity="0.65" />
              {/* Leaf 3 */}
              <path d="M32 560 Q-50 500 -60 410 Q10 445 32 530" fill="#6aab7e" opacity="0.72" />
              <path d="M32 560 Q120 510 125 420 Q65 455 32 530" fill="#4d8c5e" opacity="0.68" />
              {/* Leaf 4 */}
              <path d="M38 440 Q-40 380 -45 290 Q20 330 38 410" fill="#82c496" opacity="0.65" />
              <path d="M38 440 Q115 395 118 300 Q60 335 38 410" fill="#5a9a6e" opacity="0.60" />
              {/* Leaf 5 - top */}
              <path d="M45 310 Q-20 250 -15 165 Q35 205 45 280" fill="#6aab7e" opacity="0.68" />
              <path d="M45 310 Q125 270 125 180 Q70 215 45 280" fill="#4d8c5e" opacity="0.65" />
              {/* Leaf 6 - very top */}
              <path d="M55 185 Q10 130 25 55 Q55 105 55 165" fill="#7bbf8e" opacity="0.55" />
              <path d="M55 185 Q120 145 110 65 Q70 110 55 165" fill="#5a9a6e" opacity="0.50" />
              {/* Leaf veins */}
              <path d="M40 800 Q0 760 -40 720" stroke="#3d7a4e" strokeWidth="0.8" fill="none" opacity="0.5" />
              <path d="M35 680 Q-10 645 -55 605" stroke="#3d7a4e" strokeWidth="0.8" fill="none" opacity="0.5" />
              <path d="M32 560 Q-10 525 -42 485" stroke="#3d7a4e" strokeWidth="0.8" fill="none" opacity="0.5" />
              <path d="M38 440 Q0 405 -30 370" stroke="#3d7a4e" strokeWidth="0.8" fill="none" opacity="0.5" />
            </svg>
          </motion.div>

          {/* RIGHT LEAF FRAME (mirrored) */}
          <motion.div style={{ y: rightLeafY }} className="absolute right-0 top-[10vh] h-[90vh] w-[22vw] md:w-[18vw] pointer-events-none select-none flex flex-col items-end justify-center overflow-visible">
            <svg viewBox="0 0 200 900" className="w-full h-full opacity-80" style={{ transform: "scaleX(-1)" }} preserveAspectRatio="xMinYMid slice" xmlns="http://www.w3.org/2000/svg">
              {/* Main stem */}
              <path d="M40 900 Q50 700 30 500 Q10 300 60 0" stroke="#4a7c59" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              {/* Leaf 1 - bottom */}
              <path d="M40 800 Q-30 750 -50 680 Q10 700 40 770" fill="#6aab7e" opacity="0.75" />
              <path d="M40 800 Q100 750 110 670 Q70 700 40 770" fill="#4d8c5e" opacity="0.70" />
              {/* Leaf 2 */}
              <path d="M35 680 Q-60 630 -80 540 Q0 580 35 650" fill="#7bbf8e" opacity="0.70" />
              <path d="M35 680 Q110 640 130 555 Q70 590 35 650" fill="#5a9a6e" opacity="0.65" />
              {/* Leaf 3 */}
              <path d="M32 560 Q-50 500 -60 410 Q10 445 32 530" fill="#6aab7e" opacity="0.72" />
              <path d="M32 560 Q120 510 125 420 Q65 455 32 530" fill="#4d8c5e" opacity="0.68" />
              {/* Leaf 4 */}
              <path d="M38 440 Q-40 380 -45 290 Q20 330 38 410" fill="#82c496" opacity="0.65" />
              <path d="M38 440 Q115 395 118 300 Q60 335 38 410" fill="#5a9a6e" opacity="0.60" />
              {/* Leaf 5 - top */}
              <path d="M45 310 Q-20 250 -15 165 Q35 205 45 280" fill="#6aab7e" opacity="0.68" />
              <path d="M45 310 Q125 270 125 180 Q70 215 45 280" fill="#4d8c5e" opacity="0.65" />
              {/* Leaf 6 - very top */}
              <path d="M55 185 Q10 130 25 55 Q55 105 55 165" fill="#7bbf8e" opacity="0.55" />
              <path d="M55 185 Q120 145 110 65 Q70 110 55 165" fill="#5a9a6e" opacity="0.50" />
              {/* Leaf veins */}
              <path d="M40 800 Q0 760 -40 720" stroke="#3d7a4e" strokeWidth="0.8" fill="none" opacity="0.5" />
              <path d="M35 680 Q-10 645 -55 605" stroke="#3d7a4e" strokeWidth="0.8" fill="none" opacity="0.5" />
              <path d="M32 560 Q-10 525 -42 485" stroke="#3d7a4e" strokeWidth="0.8" fill="none" opacity="0.5" />
              <path d="M38 440 Q0 405 -30 370" stroke="#3d7a4e" strokeWidth="0.8" fill="none" opacity="0.5" />
            </svg>
          </motion.div>

          {/* Service Cards */}
          <div className="relative w-[80vw] max-w-[300px] md:max-w-[340px] h-[420px] md:h-[480px]">
            {cards.map((card, i) => (
              <CardItem
                key={i}
                card={card}
                i={i}
                smoothProgress={smoothProgress}
                totalCards={cards.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}