"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LuxuryFooter() {
  return (
    <footer
      className="relative text-white rounded-t-[4rem] overflow-hidden px-6 md:px-16 py-16"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1200 50%, #0a0a0a 100%)",
        borderTop: "1px solid rgba(212,175,55,0.2)",
      }}
    >
      {/* Subtle gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.12) 0%, transparent 60%)",
        }}
      />

      {/* Top Circular HOM Logo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div
          className="w-20 h-20 rounded-full overflow-hidden shadow-2xl"
          style={{
            border: "3px solid #D4AF37",
            boxShadow: "0 0 24px rgba(212,175,55,0.5), 0 4px 20px rgba(0,0,0,0.8)",
          }}
        >
          <Image
            src="/HOM.jpg"
            alt="House of Moments Logo"
            width={80}
            height={80}
            className="w-full h-full object-cover object-top scale-[1.15]"
            style={{ objectPosition: "50% 10%" }}
          />
        </div>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 items-center mt-6">

        {/* LEFT - CONTACT */}
        <div>
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: "#D4AF37" }}
          >
            Contact
          </h3>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>Anantapur, India</p>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>+91 XXXXX XXXXX</p>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>houseofmoments@email.com</p>
        </div>

        {/* CENTER - BRAND */}
        <div className="text-center">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-5xl font-playfair-sc tracking-wide"
            style={{ color: "#ffffff" }}
          >
            House of Moments
          </motion.h1>

          <p className="mt-2 text-sm italic" style={{ color: "rgba(212,175,55,0.7)" }}>
            Where memories become timeless
          </p>

          {/* Buttons */}
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <button
              className="px-5 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #D4AF37, #C09B2A)",
                color: "#000000",
                boxShadow: "0 4px 15px rgba(212,175,55,0.35)",
              }}
            >
              Book a Shoot →
            </button>

            <button
              className="px-5 py-2 rounded-full text-sm transition-all hover:scale-105"
              style={{
                border: "1px solid #D4AF37",
                color: "#D4AF37",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#D4AF37";
                e.currentTarget.style.color = "#000000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#D4AF37";
              }}
            >
              View Portfolio →
            </button>
          </div>
        </div>

        {/* RIGHT - LINKS */}
        <div className="text-left md:text-right">
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: "#D4AF37" }}
          >
            Quick Links
          </h3>

          <div className="space-y-2 text-sm">
            {["Weddings", "Pre Wedding", "Cinematic Films", "Contact"].map((link) => (
              <p
                key={link}
                className="cursor-pointer transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.75)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#D4AF37")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
              >
                {link}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs"
        style={{
          // borderTop: "1px solid rgba(212,175,55,0.2)",
          color: "rgba(255,255,255,0.4)",
        }}
      >
        <p>© 2026 House of Moments Photography</p>

        <div className="flex gap-4 mt-3 md:mt-0">
          {["Privacy Policy", "Terms"].map((item) => (
            <p
              key={item}
              className="cursor-pointer transition-colors duration-200"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#D4AF37")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
}