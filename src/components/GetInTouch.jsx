"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
    <a
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
    </a>
  );
}

export default function GetInTouch() {
  return (
    <section
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

      {/* Decorative circle blur top-right */}
      <div
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
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-20">
        <div className="flex justify-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-aboreto font-medium border border-hom-gold/70 px-6 py-2 text-hom-darkgold tracking-widest uppercase text-center"
          >
            Contact<span className="text-black">Us</span>
          </motion.h2>
        </div>
      </div>

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

          {/* Main headline */}
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{
                fontFamily: "'Playfair Display', 'Bodoni MT', Georgia, serif",
                fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
                color: "#1c1410",
                margin: 0,
                marginBottom: "4px",
              }}
            >
              GET IN
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
              TOUCH
            </motion.h2>
          </div>

          {/* Thin ruled line */}
          <div
            style={{
              width: "60px",
              height: "1px",
              background: "linear-gradient(90deg, #c4a882, transparent)",
              margin: "32px 0 28px",
            }}
          />

          {/* Email */}
          <div>
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
          </div>

          {/* Location note */}
          <p
            style={{
              fontFamily: "'badoni', serif",
              fontSize: "0.82rem",
              color: "#b0a090",
              marginTop: "40px",
              letterSpacing: "0.03em",
              lineHeight: 1.7,
            }}
          >
            Welcom To HOM photography Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta labore eveniet commodi consequatur amet minima fugiat velit odio, dolor et, asperiores nihil deserunt maiores autem explicabo enim accusantium architecto repellendus.
          </p>
        </div>

        {/* ── RIGHT COLUMN ────────────────────────────── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <p
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
          </p>

          {contactItems.map((item) => (
            <ContactCard key={item.id} item={item} />
          ))}
        </div>
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
