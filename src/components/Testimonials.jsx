"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviewsData = [
  {
    author: "Shabaresh Reddy",
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
    text: "Beyond thrilled with our anniversary shoot! They found the absolute perfect angles and the final delivery exceeded our wildest expectations.",
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

  // Stacked animation logic: staggered edges like the image without back-text
  const getCardAnimation = (relativeIndex) => {
    // 0 is top
    // 1-4 are behind

    // Stagger logic inspired by the image's organic pile
    const offsets = [
      { x: 0, y: 0, rotate: 0 },
      { x: 10, y: 12, rotate: 3 },
      { x: -8, y: 24, rotate: -2 },
      { x: 14, y: 36, rotate: 4 },
      { x: -12, y: 48, rotate: -3 },
    ];

    const currentOffset = offsets[relativeIndex] || { x: 0, y: relativeIndex * 12, rotate: 0 };

    return {
      x: currentOffset.x,
      y: currentOffset.y,
      rotate: currentOffset.rotate,
      scale: 1,
      zIndex: 50 - relativeIndex,
      opacity: 1 - (relativeIndex * 0.1),
      transition: { duration: 0.5, ease: "easeInOut" }
    };
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Pinyon+Script&family=Bodoni+Moda:ital,wght@0,400..900;1,400..900&display=swap');

        .font-cormorant {
          font-family: 'Cormorant', serif;
        }
        
        .font-pinyon {
          font-family: 'Pinyon Script', cursive;
        }

        .font-bodoni {
          font-family: 'Bodoni Moda', serif;
        }

        .paper-card {
          background-color: #ffffff;
          background-image: 
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
          border: 1.5px solid #ebe5df;
        }

        .tape-accent {
          background: linear-gradient(to right, #e3dac9 0%, #ede8dd 50%, #e3dac9 100%);
          box-shadow: 
            0 1px 2px rgba(0,0,0,0.05), 
            inset 0 0 1px rgba(255,255,255,0.8);
          opacity: 0.6;
        }
      `}</style>

      <section id="reviews" className="relative py-24 px-6 md:px-12 lg:px-20 bg-white overflow-hidden min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto w-full relative z-10 pt-12">
          {/* Section Heading */}
          <div className="flex justify-center mb-16 md:mb-24">
            <motion.h2

              className="text-3xl md:text-4xl font-aboreto font-medium border border-hom-gold/70 px-5 py-2 text-hom-darkgold tracking-widest uppercase"
            >
              Testimo<span className="text-black">Nials</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* ══════════════ LEFT COLUMN: TEXT ══════════════ */}
            <motion.div
              initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >


              <h2 className="font-instrument-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-[#1a1a1a] mb-8">
                The <span className="italic tracking-wide text-hom-gold">Moments</span> <br />
                We Cherish
              </h2>

              <div className="w-16 h-[2px] bg-hom-gold mb-8 lg:mb-12" />

              <p className="font-cormorant text-xl md:text-2xl text-[#3d3028] italic leading-relaxed max-w-sm opacity-90">
                &ldquo;Every click of the shutter is a promise kept. Here is what our families have to say about the journeys we&apos;ve shared.&rdquo;
              </p>

              <div className="mt-12 flex items-center space-x-6">
                <div className="flex space-x-2">
                  {reviewsData.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 rounded-full transition-all duration-300 ${currentIndex === i ? 'bg-hom-gold w-8' : 'bg-[#ebe5df] w-2'}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ══════════════ RIGHT COLUMN: SIMPLIFIED STACK ══════════════ */}
            <div className="relative flex items-center justify-center lg:justify-end pr-4 md:pr-10">

              {/* Botanical Decoration - Top Left */}
              <motion.img
                src="/leaf-palm.png"
                alt=""
                className="absolute -top-16 -left-12 w-48 h-auto opacity-40 z-0 pointer-events-none"
                initial={{ rotate: -15, y: -20 }}
                animate={{ rotate: [-15, -12, -15], y: [-20, -10, -20] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Botanical Decoration - Bottom Right */}
              <motion.img
                src="/leaf-tropical.png"
                alt=""
                className="absolute -bottom-20 -right-20 w-56 h-auto opacity-30 z-0 pointer-events-none"
                initial={{ rotate: 10, y: 20 }}
                animate={{ rotate: [10, 15, 10], y: [20, 10, 20] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />

              <div className="relative w-full max-w-[460px] h-[520px] md:h-[580px] flex items-start justify-center overflow-visible">

                {/* Navigation Arrows on Edges */}
                <button
                  onClick={prevSlide}
                  className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 p-3 border border-hom-gold rounded-full text-hom-gold hover:bg-hom-gold hover:text-white transition-all z-[70] bg-white/50 backdrop-blur-sm"
                  aria-label="Previous review"
                >
                  <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 p-3 border border-hom-gold rounded-full text-hom-gold hover:bg-hom-gold hover:text-white transition-all shadow-md z-[70] bg-white/50 backdrop-blur-sm"
                  aria-label="Next review"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                {reviewsData.map((review, i) => {
                  const relativeIndex = (i - currentIndex + reviewsData.length) % reviewsData.length;
                  const isTop = relativeIndex === 0;

                  return (

                    <motion.div
                      key={i}
                      style={{ position: "absolute" }}
                      initial={false}
                      animate={getCardAnimation(relativeIndex)}
                      className="w-full h-[450px] md:h-[500px]"
                    >
                      <div className="paper-card relative p-6 sm:p-10 rounded-sm mx-auto h-full w-full flex flex-col justify-between overflow-hidden">

                        {/* Only render content for the top card */}
                        {isTop ? (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col h-full overflow-hidden"
                          >
                            <p className="text-center text-[0.5rem] tracking-[0.4em] text-gray-400 uppercase font-sans mb-3 pt-1">
                              House of Moments
                            </p>

                            <div className="flex justify-between items-end mb-3">
                              <h2 className="font-pinyon text-5xl md:text-6xl text-[#2b201a] leading-none transform -translate-y-1">
                                Review
                              </h2>
                              <div className="text-hom-gold/70 text-sm tracking-[0.2em] pb-1">
                                ★★★★★
                              </div>
                            </div>

                            <hr className="border-t border-[#f0ebe5] mb-6" />

                            <div className="flex-grow flex items-center justify-center overflow-hidden mb-6">
                              <p className="font-cormorant text-[1rem] md:text-[1.2rem] text-[#3d3028] italic leading-relaxed text-center px-1 overflow-y-auto no-scrollbar max-h-full">
                                &ldquo;{review.text}&rdquo;
                              </p>
                            </div>

                            <div className="text-right pr-2">
                              <p className="font-pinyon text-4xl md:text-5xl text-[#2b201a]">
                                &mdash; {review.author}
                              </p>
                            </div>
                          </motion.div>
                        ) : (
                          /* Plain back-card decoration */
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="w-10 h-2 tape-accent rounded-full absolute top-4 left-1/2 -translate-x-1/2" />
                          </div>
                        )}

                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
