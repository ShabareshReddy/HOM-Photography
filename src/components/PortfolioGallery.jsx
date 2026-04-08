'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  LUXURY_EASE,
  letterVariant,
  wordContainer,
  gridCardVariant,
  staggerGrid,
  clipReveal,
  fadeSlideUp,
  viewportOnce,
} from '@/lib/motionVariants';

/* ── Shared fadeUp (simple, for heading wrapper) ── */
const fadeUp = (delay = 0, duration = 0.7) => ({
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease: LUXURY_EASE },
  },
});

/* ── Filter pill with blur entry ────────────────── */
const filterItem = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: LUXURY_EASE },
  },
};

/* ── Image card — clip-path reveal + blur ─────── */
const imageCard = {
  hidden: {
    opacity: 0,
    clipPath: 'inset(100% 0% 0% 0%)',
    scale: 0.96,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    clipPath: 'inset(0% 0% 0% 0%)',
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: LUXURY_EASE },
  },
};

/* ── Stagger container variants ─────────────────── */
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

/* ── Kinetic split-word heading ─────────────────── */
function KineticHeading({ text, goldText, className }) {
  const mainChars = text.split('');
  const goldChars = goldText.split('');
  return (
    <motion.h2
      variants={wordContainer(0.04, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={className}
      aria-label={`${text}${goldText}`}
    >
      {mainChars.map((c, i) => (
        <motion.span key={`m-${i}`} variants={letterVariant} style={{ display: 'inline-block' }}>
          {c === ' ' ? '\u00A0' : c}
        </motion.span>
      ))}
      <span className="text-black">
        {goldChars.map((c, i) => (
          <motion.span key={`g-${i}`} variants={letterVariant} style={{ display: 'inline-block' }}>
            {c === ' ' ? '\u00A0' : c}
          </motion.span>
        ))}
      </span>
    </motion.h2>
  );
}

/* ── useInView hook ─────────────────────────────── */
function useSectionInView(threshold = 0.15) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: threshold });
  return { ref, inView };
}

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = useSectionInView(0.2);
  const grid = useSectionInView(0.08);
  const footer = useSectionInView(0.5);

  const categories = [
    { name: 'All', icon: '/HOM.jpg' },
    { name: 'Wedding', icon: '/wedding.jpg' },
    { name: 'Pre-wedding', icon: '/prewedding.jpg' },
    { name: 'Haldi', icon: '/haaldi.jpg' },
    { name: 'Cinematic', icon: '/cinematic.jpg' },
    { name: 'Newborn', icon: '/newborn.jpg' },
  ];

  const allImages = [
    { id: 1, src: '/wedding.jpg', category: 'Wedding' },
    { id: 2, src: '/prewedding.jpg', category: 'Pre-wedding' },
    { id: 3, src: '/haaldi.jpg', category: 'Haldi' },
    { id: 4, src: '/cinematic.jpg', category: 'Cinematic' },
    { id: 5, src: '/newborn.jpg', category: 'Newborn' },
    { id: 6, src: '/hom1.jpg', category: 'Wedding' },
    { id: 7, src: '/hom2.jpg', category: 'Pre-wedding' },
    { id: 8, src: '/hom3.jpg', category: 'Wedding' },
    { id: 9, src: '/hom4.jpg', category: 'Cinematic' },
    { id: 10, src: '/hom5.jpg', category: 'Haldi' },
    { id: 11, src: '/about-portrait.png', category: 'Wedding' },
    { id: 12, src: '/haaldi.jpg', category: 'Haldi' },
  ];

  const filteredImages =
    activeFilter === 'All'
      ? allImages
      : allImages.filter((img) => img.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ── Kinetic Heading ───────────────────────────────── */}
        <div className="flex justify-center mb-10">
          <KineticHeading
            text="Portfolio"
            goldText="Feed"
            className="text-3xl font-aboreto font-medium border border-hom-gold/70 px-5 py-2 text-hom-darkgold tracking-wider uppercase"
          />
        </div>

        {/* ── Filter Pills — stagger with blur ─────────────── */}
        <motion.div
          ref={filters.ref}
          variants={staggerContainer}
          initial="hidden"
          animate={filters.inView ? 'visible' : 'hidden'}
          className="flex overflow-x-auto pb-10 mb-6 no-scrollbar gap-6 md:gap-12 justify-center px-4"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.name}
              variants={filterItem}
              onClick={() => setActiveFilter(cat.name)}
              className="flex flex-col items-center gap-3 min-w-[80px] flex-shrink-0 group"
            >
              <div
                className={`w-16 h-16 md:w-20 md:h-20 rounded-full p-[3px] transition-all duration-300 ${activeFilter === cat.name
                  ? 'bg-hom-gold scale-110 shadow-lg shadow-hom-gold/20'
                  : 'bg-gray-100 group-hover:bg-gray-200'
                  }`}
              >
                <div className="w-full h-full rounded-full border-2 border-white overflow-hidden bg-gray-50">
                  <img
                    src={cat.icon}
                    alt={cat.name}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              <span
                className={`text-[11px] md:text-xs font-bold tracking-widest transition-colors ${activeFilter === cat.name
                  ? 'text-gray-900'
                  : 'text-gray-400 group-hover:text-gray-600'
                  }`}
              >
                {cat.name.toUpperCase()}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* ── Image Grid — clip-path reveal per card ─────────── */}
        <motion.div
          ref={grid.ref}
          variants={staggerGrid(0.06, 0.05)}
          initial="hidden"
          animate={grid.inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 gap-1 md:gap-4 mt-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                layout
                key={img.id}
                variants={imageCard}
                exit={{
                  opacity: 0,
                  scale: 0.93,
                  filter: 'blur(6px)',
                  transition: { duration: 0.35, ease: LUXURY_EASE },
                }}
                className="relative aspect-square overflow-hidden group cursor-pointer bg-gray-100 rounded-sm"
              >
                <img
                  src={img.src}
                  alt={`Portfolio ${img.category}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white font-semibold text-sm tracking-wider uppercase">
                    {img.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── View More Link ────────────────────────────────── */}
        <div ref={footer.ref} className="mt-16 text-center">
          <motion.a
            variants={fadeSlideUp(0, 0.8)}
            initial="hidden"
            animate={footer.inView ? 'visible' : 'hidden'}
            href="https://www.instagram.com/houseofmoments__/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 text-gray-400 hover:text-hom-gold transition-colors font-inter text-xs tracking-[0.2em]"
          >
            <span>DISCOVER MORE ON INSTAGRAM</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>

      </div>
    </section>
  );
}
