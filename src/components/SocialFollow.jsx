"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Custom Instagram Icon
const InstagramIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

// Custom Facebook Icon
const FacebookIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default function SocialFollow() {
  return (
    <section className="px-6 py-6 bg-white max-w-[1600px] mx-auto">
      <div className="relative bg-hom-black rounded-[2rem] overflow-hidden min-h-[380px] h-[58vh] flex items-center shadow-xl">
        {/* Grid Pattern Background */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10 w-full px-8 md:px-20">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-5"
          >
            <div className="space-y-3">
              <h4 className="text-hom-gold font-medium tracking-[0.2em] uppercase text-[9px]">Digital sanctuary</h4>
              <h2 className="text-3xl md:text-4xl font-playfair leading-tight">
                Capture The <br />
                <span className="italic font-light">Unseen Moments</span>
              </h2>
              <p className="text-gray-400 text-xs max-w-xs leading-relaxed font-light opacity-80">
                Our digital feed is an extension of our soul. Follow us for an intimate look into the art of storytelling.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-7 py-3.5 bg-white text-black rounded-full text-xs font-bold flex items-center gap-3 transition-all duration-500 shadow-lg"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Follow us on Instagram</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>

              <motion.button
                whileHover={{ x: 3 }}
                className="py-3.5 text-white/30 hover:text-white transition-colors flex items-center gap-2 group text-[9px] tracking-widest uppercase font-bold"
              >
                Contact Us
                <div className="w-6 h-[1px] bg-white/10 group-hover:w-10 group-hover:bg-hom-gold transition-all duration-500"></div>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Staggered Profile Cards */}
          <div className="relative h-[400px] flex items-center justify-center lg:justify-end">

            {/* Facebook Card (BACK) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40, y: 20 }}
              whileInView={{ opacity: 1, x: -80, y: -30, rotate: -8 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute w-[240px] md:w-[260px] aspect-[1.3/1] 
    bg-[#f8f9fa] rounded-[1.5rem] 
    border border-white/20 
    shadow-[0_20px_60px_rgba(0,0,0,0.25)] 
    z-0 p-5 flex flex-col justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#1877F2] rounded-lg flex items-center justify-center shadow-md">
                  <FacebookIcon className="w-6 h-6 text-white fill-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-gray-900 text-[10px]">Facebook</span>
                  <span className="text-[8px] text-gray-400 uppercase">4k+ followers</span>
                </div>
              </div>

              <div className="space-y-1.5 px-1 pb-2">
                <div className="h-1.5 w-24 bg-gray-200 rounded-full"></div>
                <div className="h-1.5 w-16 bg-gray-100 rounded-full"></div>
              </div>
            </motion.div>


            {/* Instagram Card (FRONT) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, rotate: 2 }}
              whileHover={{ rotate: 0, scale: 1.06 }}
              transition={{ duration: 1, type: "spring", damping: 20 }}
              className="relative w-[260px] md:w-[280px] aspect-[4/5] 
    bg-white rounded-[1.2rem] 
    border border-hom-gold/50 
    shadow-[0_40px_100px_rgba(0,0,0,0.5)] 
    z-10 overflow-hidden group"
            >

              {/* Header */}
              <div className="absolute top-0 inset-x-0 p-4 z-20 
    bg-gradient-to-b from-black/70 to-transparent 
    flex justify-between items-center">

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full border border-white/50 overflow-hidden">
                    <Image src="/HOM.jpg" alt="Profile" width={32} height={32} className="object-cover" />
                  </div>
                  <span className="text-[10px] font-bold text-white tracking-wider">
                    houseofmoments
                  </span>
                </div>

                <InstagramIcon className="w-4 h-4 text-white" />
              </div>

              {/* Image */}
              <Image
                src="/instagrampic.jpeg"
                alt="Instagram Content"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Footer */}
              <div className="absolute bottom-0 inset-x-0 p-5 
    bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20">

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full py-3 
        bg-white/10 backdrop-blur-md 
        border border-white/20 text-white 
        rounded-full font-bold text-[10px] 
        flex items-center justify-center gap-2 
        transition-all duration-300"
                >
                  <span>Follow Account</span>
                  <span>→</span>
                </motion.button>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
