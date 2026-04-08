"use client";

import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  LUXURY_EASE,
  letterVariant,
  wordContainer,
  staggerGrid,
  fadeSlideUp,
  viewportOnce,
} from "@/lib/motionVariants";

const contactItems = [
  {
    id: "instagram",
    label: "Instagram",
    handle: "@houseofmoments",
    href: "https://instagram.com/houseofmoments",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "email",
    label: "Email",
    handle: "houseofmoments@email.com",
    href: "mailto:houseofmoments@email.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    handle: "+91 XXXXX XXXXX",
    href: "https://wa.me/91XXXXXXXXXX",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "House of Moments",
    href: "https://linkedin.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

function ContactCard({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      variants={fadeSlideUp(0, 0.75)}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 24px",
        borderRadius: "16px",
        background: hovered ? "#f0ebe3" : "#f7f3ee",
        border: "1px solid rgba(180,160,130,0.22)",
        boxShadow: hovered
          ? "0 8px 32px rgba(100,80,50,0.10)"
          : "0 2px 10px rgba(100,80,50,0.06)",
        transform: hovered ? "scale(1.025)" : "scale(1)",
        transition: "all 0.32s cubic-bezier(0.22,1,0.36,1)",
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      {/* Left: icon + text */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            color: hovered ? "#3b2e1a" : "#7a6448",
            transition: "color 0.3s ease",
            flexShrink: 0,
          }}
        >
          {item.icon}
        </div>
        <div>
          <p
            style={{
              margin: 0,
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "0.95rem",
              fontWeight: 600,
              letterSpacing: "0.02em",
              color: "#1c1410",
            }}
          >
            {item.label}
          </p>
          <p
            style={{
              margin: 0,
              marginTop: "2px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              color: "#9a8672",
              letterSpacing: "0.01em",
            }}
          >
            {item.handle}
          </p>
        </div>
      </div>

      {/* Right: arrow */}
      <div
        style={{
          color: hovered ? "#1c1410" : "#b0a090",
          transform: hovered ? "rotate(20deg) translateX(2px)" : "rotate(0deg)",
          transition: "all 0.32s cubic-bezier(0.22,1,0.36,1)",
          fontSize: "1.3rem",
          lineHeight: 1,
        }}
      >
        →
      </div>
    </motion.a>
  );
}

/* ── Kinetic split-word heading ─────────────────── */
function KineticWord({ text, delay = 0, stagger = 0.045 }) {
  const chars = text.split("");
  return (
    <motion.span
      style={{ display: "inline-block", whiteSpace: "nowrap" }}
      variants={wordContainer(stagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
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

export default function GetInTouch() {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  // Parallax for the decorative background blur
  const blobY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      style={{
        background: "linear-gradient(150deg, #faf7f2 0%, #f2ece1 100%)",
        padding: "120px 6vw 140px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle decorative grain texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Decorative circle blur top-right with parallax */}
      <motion.div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-120px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
          y: blobY,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
        className="git-grid"
      >
        {/* ── LEFT COLUMN ─────────────────────────────── */}
        <div>
          {/* Eye icon + decorative label */}
          <motion.div
            variants={fadeSlideUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "28px",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9a8672"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#9a8672",
                fontWeight: 500,
              }}
            >
              Let's connect
            </span>
          </motion.div>

          {/* Main headline - Kinetic Letters */}
          <div style={{ overflow: "hidden" }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', 'Bodoni MT', Georgia, serif",
                fontSize: "clamp(3.2rem, 7vw, 6.5rem)",
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
                color: "#1c1410",
                margin: 0,
                marginBottom: "4px",
              }}
            >
              <KineticWord text="GET IN" delay={0.1} />
            </h2>
            <h2
              style={{
                fontFamily: "'Playfair Display', 'Bodoni MT', Georgia, serif",
                fontSize: "clamp(3.2rem, 7vw, 6.5rem)",
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: "-0.01em",
                color: "#1c1410",
                margin: 0,
              }}
            >
              <KineticWord text="TOUCH" delay={0.3} />
            </h2>
          </div>

          {/* Thin ruled line - Animated width */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, delay: 0.6, ease: LUXURY_EASE }}
            style={{
              height: "1px",
              background: "linear-gradient(90deg, #c4a882, transparent)",
              margin: "32px 0 28px",
            }}
          />

          {/* Email */}
          <motion.div
            variants={fadeSlideUp(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#9a8672",
                margin: 0,
                marginBottom: "8px",
              }}
            >
              Write to us
            </p>
            <a
              href="mailto:houseofmoments@email.com"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(0.9rem, 1.4vw, 1.15rem)",
                color: "#1c1410",
                textDecoration: "none",
                letterSpacing: "0.01em",
                borderBottom: "1px solid #c4a882",
                paddingBottom: "4px",
                display: "inline-block",
                transition: "color 0.25s ease, border-color 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#7a5c38";
                e.currentTarget.style.borderColor = "#7a5c38";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#1c1410";
                e.currentTarget.style.borderColor = "#c4a882";
              }}
            >
              houseofmoments@email.com
            </a>
          </motion.div>

          {/* Location note */}
          <motion.p
            variants={fadeSlideUp(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            style={{
              fontFamily: "'Bodoni Moda', serif",
              fontSize: "0.82rem",
              color: "#b0a090",
              marginTop: "40px",
              letterSpacing: "0.03em",
              lineHeight: 1.7,
            }}
          >
            Welcome to HOM photography. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta labore eveniet commodi consequatur amet minima fugiat velit odio, dolor et, asperiores nihil deserunt maiores autem explicabo enim accusantium architecto repellendus.
          </motion.p>
        </div>

        {/* ── RIGHT COLUMN ────────────────────────────── */}
        <motion.div
          variants={staggerGrid(0.08, 0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <motion.p
            variants={fadeSlideUp(0)}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.72rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#9a8672",
              margin: 0,
              marginBottom: "8px",
            }}
          >
            Find us on
          </motion.p>

          {contactItems.map((item) => (
            <ContactCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>

      {/* Responsive styles via a style tag */}
      <style>{`
        @media (max-width: 768px) {
          .git-grid {
            grid-template-columns: 1fr !important;
            gap: 56px !important;
          }
        }
      `}</style>
    </section>
  );
}
