"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  LUXURY_EASE,
  letterVariant,
  wordContainer,
  clipReveal,
  fadeSlideUp,
  fadeUp,
  viewportOnce,
} from "@/lib/motionVariants";

/* ── Inner-parallax portrait ───────────────────────────────── */
function ParallaxImage({ src, alt }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <div ref={ref} className="w-full h-full overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale: 1.12 }}
        className="w-full h-full object-cover object-center block"
        transition={{ ease: LUXURY_EASE }}
        draggable={false}
      />
    </div>
  );
}

/* ── Kinetic word split ─────────────────────────────────────── */
function KineticWord({ text, className, delay = 0, stagger = 0.04 }) {
  const chars = text.split("");
  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={wordContainer(stagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      aria-label={text}
    >
      {chars.map((c, i) => (
        <motion.span
          key={i}
          variants={letterVariant}
          style={{ display: "inline-block" }}
        >
          {c === " " ? "\u00A0" : c}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function AboutUs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const leafFloat = (delay = 0) => ({
    hidden: { opacity: 0, scale: 0.88 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.4, delay, ease: LUXURY_EASE },
    },
  });

  const fadeRight = {
    hidden: { opacity: 0, x: 60, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 1.1, delay: 0.3, ease: LUXURY_EASE },
    },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;1,300;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Marcellus&display=swap');

        .ab-section {
          background-color: #f0ebe3;
          position: relative;
          overflow: hidden;
        }

        .ab-section::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 250px 250px;
        }

        .ab-leaf-tl {
          position: absolute;
          top: 90px;
          left: 180px;
          width: clamp(180px, 18vw, 280px);
          opacity: 0.55;
          rotate: 40deg;
          transform: rotate(-60deg);
          pointer-events: none;
          z-index: 1;
        }

        .ab-name {
          font-family: 'Cormorant', serif;
          font-weight: 300;
          color: #2b201a;
          line-height: 0.9;
          letter-spacing: -0.01em;
        }

        .ab-sub {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 700;
          font-style: normal;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #9a7c3a;
          font-size: 0.72rem;
        }

        .ab-body {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-style: normal;
          color: #3d3028;
          line-height: 1.85;
          font-size: 1.0rem;
        }

        .ab-cta-top {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #4a3c32;
          font-size: 0.62rem;
        }

        .ab-cta-bot {
          font-family: 'Cormorant', serif;
          font-weight: 300;
          font-style: italic;
          color: #4a3c32;
          font-size: 1.35rem;
          letter-spacing: 0.04em;
          line-height: 1.1;
        }

        .ab-img-outer {
          background-color: #c9b99a;
          padding: 10px 10px 16px 10px;
          position: relative;
        }

        .ab-img-inner {
          border: 1px solid rgba(255,255,255,0.45);
          overflow: hidden;
          position: relative;
        }

        .ab-img-label {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          font-size: 0.52rem;
          position: absolute;
          top: -18px;
          right: 0;
          white-space: nowrap;
        }

        .ab-img-grain {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 5;
          opacity: 0.06;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 180px 180px;
          mix-blend-mode: multiply;
        }

        .ab-dots {
          position: absolute;
          bottom: -10px;
          right: -18px;
          width: 80px;
          height: 80px;
          opacity: 0.22;
          background-image: radial-gradient(circle, #8a7060 1px, transparent 1px);
          background-size: 10px 10px;
          pointer-events: none;
        }

        .ab-circle {
          position: absolute;
          top: -30px;
          right: -20px;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: rgba(200,185,165,0.35);
          pointer-events: none;
          z-index: 0;
        }

        .ab-leaf-strip {
          display: flex;
          align-items: center;
          gap: clamp(20px, 4vw, 48px);
          justify-content: center;
          padding-top: clamp(32px, 5vw, 56px);
          padding-bottom: 4px;
          position: relative;
          z-index: 10;
        }

        .ab-leaf-strip-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .ab-leaf-strip-img {
          width: clamp(52px, 7vw, 82px);
          opacity: 0.9;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .ab-leaf-strip-img:hover {
          opacity: 1;
          transform: scale(1.1) rotate(-4deg);
          filter: drop-shadow(0 4px 12px rgba(180,140,60,0.35));
        }

        .ab-leaf-strip-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.55rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9a7c3a;
        }

        .ab-divider {
          width: 60px;
          height: 1px;
          background: linear-gradient(to right, transparent, #b8a898, transparent);
          margin: 0 auto;
        }

        @media (max-width: 640px) {
          .ab-leaf-tl { width: 130px; opacity: 0.4; }
        }
      `}</style>

      <section
        id="about"
        ref={sectionRef}
        className="ab-section"
        aria-label="About the photographer"
      >
        {/* ─── Botanical leaf ─── */}
        <motion.img
          src="/leaf-palm.png"
          alt=""
          aria-hidden="true"
          className="ab-leaf-tl"
          variants={leafFloat(0.1)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-16 md:py-24">

          {/* Section Heading — kinetic letters */}
          <div className="flex justify-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-aboreto font-medium border border-hom-gold/70 px-5 py-2 text-hom-darkgold tracking-widest uppercase">
              <KineticWord text="About" delay={0} stagger={0.055} />
              <span className="text-black">
                <KineticWord text="Us" delay={0.25} stagger={0.055} />
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-16 lg:gap-20 items-center">

            {/* ══════ LEFT TEXT ══════ */}
            <div className="flex flex-col justify-center max-w-[540px]">

              {/* Big name — per-letter */}
              <motion.div
                variants={fadeSlideUp(0.1)}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="relative inline-block max-w-fit"
              >
                <h2
                  className="ab-name relative z-10"
                  style={{ fontSize: "clamp(4.5rem, 9vw, 8.5rem)" }}
                >
                  I&apos;m
                  <br />
                  Mounika
                </h2>
              </motion.div>

              {/* Sub ── */}
              <motion.p
                className="ab-sub mt-3 mb-8 md:mb-10"
                variants={fadeSlideUp(0.22)}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                And I tell stories through Pictures
              </motion.p>

              {/* Body ── */}
              <motion.p
                className="ab-body mb-10 md:mb-14"
                variants={fadeSlideUp(0.34)}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                I&apos;m a wedding and portrait photographer based in Tirupati.
                I love capturing the quiet in-between moments — a glance across the room,
                the warmth of golden hour on skin, laughter that spills over
                without warning. I believe every couple has a story worth telling beautifully,
                and I&apos;m here to make sure yours is felt for generations.
              </motion.p>

              {/* CTA ── */}
              <motion.div
                variants={fadeSlideUp(0.46)}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <a href="#contact" style={{ textDecoration: "none" }}>
                  <p className="ab-cta-top">Let&apos;s get to know each other</p>
                </a>
              </motion.div>
            </div>

            {/* ══════ RIGHT IMAGE — clip-path reveal + inner parallax ══════ */}
            <motion.div
              className="relative flex justify-center md:justify-end"
              variants={fadeRight}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="ab-circle" aria-hidden="true" />

              <div
                className="relative"
                style={{ width: "clamp(220px, 28vw, 360px)" }}
              >
                <p className="ab-img-label" aria-hidden="true">
                  Passion, Love &amp; Life
                </p>

                {/* Clip-path reveal wrapper */}
                <motion.div
                  variants={clipReveal(0.5, 1.2)}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <div className="ab-img-outer">
                    <div className="ab-img-inner" style={{ aspectRatio: "3 / 4" }}>
                      <div className="ab-img-grain" aria-hidden="true" />
                      {/* Parallax inner image */}
                      <ParallaxImage
                        src="/about-portrait.png"
                        alt="Mounika — House of Moments Photographer"
                      />
                    </div>
                  </div>
                </motion.div>

                <div className="ab-dots" aria-hidden="true" />
              </div>
            </motion.div>

          </div>

          {/* ══════ BOTANICAL LEAF STRIP ══════ */}
          <motion.div
            variants={fadeSlideUp(0.55)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="ab-divider mt-14 mb-10" />

            <div className="ab-leaf-strip">
              {[
                { src: "/leaf-palm.png", label: "Palm" },
                { src: "/leaf-fern.png", label: "Fern" },
                { src: "/leaf-tropical.png", label: "Tropical" },
                { src: "/leaf-abstract.png", label: "Minimal" },
              ].map(({ src, label }, i) => (
                <motion.div
                  key={label}
                  className="ab-leaf-strip-item"
                  variants={fadeSlideUp(0.6 + i * 0.1)}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <img
                    src={src}
                    alt={`${label} botanical leaf illustration`}
                    className="ab-leaf-strip-img"
                  />
                  <span className="ab-leaf-strip-label">{label}</span>
                </motion.div>
              ))}
            </div>

            <div className="ab-divider mt-10" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
