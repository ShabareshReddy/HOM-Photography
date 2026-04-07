"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const reviewsData = [
  {
    author: "Olivia & James",
    text: "Working with this photography team has been an absolute dream. From the moment we booked them, they were attentive to every single detail. Their ability to capture raw emotion and timeless beauty is unparalleled. Every time we look at our photos, we are transported back to those magical moments. Truly unforgettable work.",
  },
  {
    author: "Sophia L.",
    text: "I cannot express how grateful I am for the stunning portraits. The attention to lighting, composition, and mood is just breathtaking. They have an incredible eye for turning ordinary moments into editorial masterpieces. The atmosphere they created was so calming, and it shows in every single frame.",
  },
  {
    author: "Michael & Emma",
    text: "Choosing House of Moments was the best decision for our wedding. The team orchestrated everything effortlessly and caught candid moments we didn't even know happened. They managed to encapsulate the joy, the tears, and the love perfectly. We have received endless compliments from friends and family.",
  },
  {
    author: "Isabella",
    text: "Professionalism meets pure artistry. The entire experience felt like shooting for a high-end magazine. They guided me through posing naturally while letting my personality shine through. The subtle black-and-white tones they deliver are so romantic and moody. Highly recommended for anyone wanting true elegance.",
  },
  {
    author: "William & Charlotte",
    text: "Beyond thrilled with our anniversary shoot! They found the absolute perfect angles and the final delivery exceeded our wildest expectations. What stands out most is the film-like quality and the nostalgic, warm feel of the edits. We will definitely be coming back for all our future milestones.",
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  const getCardAnimation = (relativeIndex) => {
    switch (relativeIndex) {
      case 0:
        return { x: 0, y: 0, rotate: 0, scale: 1, zIndex: 50, opacity: 1, filter: "blur(0px) brightness(1)" };
      case 1:
        return { x: 15, y: 20, rotate: 2.5, scale: 0.97, zIndex: 40, opacity: 1, filter: "blur(0.5px) brightness(0.92)" };
      case 2:
        return { x: -15, y: 40, rotate: -2, scale: 0.94, zIndex: 30, opacity: 1, filter: "blur(1px) brightness(0.85)" };
      case 3:
        return { x: 10, y: 60, rotate: 3.5, scale: 0.91, zIndex: 20, opacity: 0.9, filter: "blur(1.5px) brightness(0.70)" };
      case 4:
        return { x: -10, y: 80, rotate: -3, scale: 0.88, zIndex: 10, opacity: 0.8, filter: "blur(2px) brightness(0.55)" };
      default:
        return { opacity: 0, scale: 0.8 };
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Pinyon+Script&display=swap');

        .font-cormorant {
          font-family: 'Cormorant', serif;
        }
        
        .font-pinyon {
          font-family: 'Pinyon Script', cursive;
        }

        .paper-texture {
          background-color: #f8f6f2;
          background-image: 
            radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.02) 100%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.06'/%3E%3C/svg%3E");
          box-shadow: 
            0 25px 60px -10px rgba(0,0,0,0.6),
            0 0 30px rgba(0,0,0,0.1) inset;
        }

        .tape {
          background: linear-gradient(to right, #e3dac9 0%, #ede8dd 50%, #e3dac9 100%);
          box-shadow: 
            0 2px 4px rgba(0,0,0,0.2), 
            inset 0 0 1px rgba(255,255,255,0.6);
          border-left: 1px solid rgba(0,0,0,0.05);
          border-right: 1px solid rgba(0,0,0,0.05);
        }

        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
        
        .bg-zoom {
          animation: slowZoom 25s ease-in-out infinite alternate;
        }
      `}</style>

      <section id="reviews" className="relative shrink-0 flex flex-col items-center justify-center py-20 min-h-[100vh] overflow-hidden bg-[#0a0a0a]">
        {/* Background Layers */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed blur-[3px] bg-zoom opacity-80"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509927083803-4bd519298ac4?auto=format&fit=crop&q=80&w=2400&sat=-100')" }}
        ></div>
        <div className="absolute inset-0 z-0 bg-black/50"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/90 via-transparent to-transparent"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-transparent to-black/50"></div>
        <div
          className="absolute inset-0 z-0 opacity-[0.10] pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
        ></div>

        {/* Section Headings */}
        <div className="relative z-30 text-center w-full mb-10 md:mb-16 mt-8 md:mt-0">
          <p className="font-aboreto text-[#dbd3c5] tracking-[0.3em] text-sm md:text-md uppercase mb-4 opacity-90">Testimonials</p>

        </div>

        {/* Desktop & Mobile Unified Wrapper */}
        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-8 z-20 flex flex-col items-center justify-center">

          {/* Stacked Cards Container */}
          <div className="relative w-[95%] sm:w-full max-w-[550px] h-[520px] sm:h-[550px] perspective-[1000px] flex items-start justify-center">

            {/* Elegant Overlay Chevrons directly on the card stack - Responsive */}
            <div className="absolute inset-x-[-15px] sm:inset-x-[-30px] top-[40%] md:top-[42%] -translate-y-1/2 flex justify-between z-[60] pointer-events-none">
              <button
                onClick={prevSlide}
                className="p-3 sm:p-4 bg-black/40 hover:bg-black/60 border border-white/20  rounded-full text-white transition-all shadow-xl pointer-events-auto hover:-translate-x-1"
                aria-label="Previous review"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="p-3 sm:p-4 bg-black/40 hover:bg-black/60 border border-white/20 backdrop-blur-md rounded-full text-white transition-all shadow-xl pointer-events-auto hover:translate-x-1"
                aria-label="Next review"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>

            {reviewsData.map((review, i) => {
              const relativeIndex = (i - currentIndex + reviewsData.length) % reviewsData.length;

              return (
                <motion.div
                  key={i}
                  initial={false}
                  animate={getCardAnimation(relativeIndex)}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  onClick={relativeIndex !== 0 ? () => setCurrentIndex(i) : undefined}
                  className={`absolute w-full h-[420px] sm:h-[450px] md:h-[480px] ${relativeIndex !== 0 ? 'cursor-pointer' : ''}`}
                  style={{ transformOrigin: "center center" }}
                  whileHover={relativeIndex !== 0 ? { scale: relativeIndex === 1 ? 0.98 : 0.95 } : {}}
                >
                  {/* Paper Card Inner */}
                  <div className="paper-texture relative p-6 sm:p-8 md:p-10 rounded-sm mx-auto h-full w-full flex flex-col justify-between">

                    {/* Taped Effect */}
                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-30 sm:w-34 h-6 sm:h-8 tape z-20 mix-blend-multiply opacity-95 ${i % 2 === 0 ? 'rotate-[-2.5deg]' : 'rotate-[1.5deg]'}`}></div>

                    {/* Top Brand Name */}
                    <p className="text-center text-[0.55rem] sm:text-[0.6rem] tracking-[0.4em] text-gray-500 uppercase font-sans mb-3 sm:mb-4 opacity-80 pt-1 pointer-events-none">
                      House of Moments
                    </p>

                    {/* Header / Stars */}
                    <div className="flex justify-between items-end mb-3 sm:mb-4 pointer-events-none">
                      <h2 className="font-pinyon text-4xl sm:text-5xl md:text-6xl text-[#1a1a1a] leading-none transform -translate-y-1">
                        Review
                      </h2>
                      <div className="text-[#1a1a1a] text-xs sm:text-sm md:text-lg tracking-[0.2em] pb-1 opacity-90">
                        ★★★★★
                      </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-t border-gray-400/50 mb-4 sm:mb-6" />

                    {/* Review content */}
                    <div className="flex-grow flex items-center justify-center pointer-events-none">
                      <p className="font-cormorant text-[1rem] sm:text-[1.05rem] md:text-xl text-[#2a2a2a] italic leading-[1.6] md:leading-[1.7] text-center px-0 sm:px-2 md:px-4">
                        &ldquo;{review.text}&rdquo;
                      </p>
                    </div>

                    {/* Signature */}
                    <div className="mt-4 sm:mt-6 text-right pr-2 md:pr-4 pointer-events-none">
                      <p className="font-pinyon text-3xl sm:text-4xl md:text-5xl text-[#1a1a1a]">
                        {review.author}
                      </p>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Unified Dots indicator */}
          <div className="mt-8 md:mt-12 flex space-x-3 z-30">
            {reviewsData.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-[6px] rounded-full transition-all duration-500 shadow-md ${currentIndex === i ? 'bg-white w-8 opacity-100' : 'bg-white/70 w-2 opacity-50 hover:opacity-100'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
