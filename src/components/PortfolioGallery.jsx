'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

/* ── shared fade-up variant factory ─────────────────────────── */
const fadeUp = (delay = 0, duration = 0.7) => ({
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease: [0.22, 0.61, 0.36, 1] },
  },
});

/* ── stagger container variant ──────────────────────────────── */
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

/* ── individual filter pill variant ────────────────────────── */
const filterItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] },
  },
};

/* ── individual grid card variant ──────────────────────────── */
const gridCard = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] },
  },
};

/* ── reusable hook: fires once when element enters viewport ─── */
function useSectionInView(threshold = 0.15) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: threshold });
  return { ref, inView };
}

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* section-level refs */
  const heading = useSectionInView(0.5);
  const filters = useSectionInView(0.2);
  const grid = useSectionInView(0.1);
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
    { id: 11, src: '/about-portrait.jpg', category: 'Wedding' },
    { id: 12, src: '/haaldi.jpg', category: 'Haldi' },
  ];

  const filteredImages =
    activeFilter === 'All'
      ? allImages
      : allImages.filter((img) => img.category === activeFilter);

  const openLightbox = (img, index) => {
    setSelectedImage(img);
    setActiveIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const nextIdx = (activeIndex + 1) % filteredImages.length;
    setActiveIndex(nextIdx);
    setSelectedImage(filteredImages[nextIdx]);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const prevIdx = (activeIndex - 1 + filteredImages.length) % filteredImages.length;
    setActiveIndex(prevIdx);
    setSelectedImage(filteredImages[prevIdx]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage(e);
      if (e.key === 'ArrowLeft') prevImage(e);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, activeIndex]);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ── Heading ──────────────────────────────────────────── */}
        <div ref={heading.ref} className="flex justify-center mb-10">
          <motion.h2
            variants={fadeUp(0, 0.9)}
            initial="hidden"
            animate={heading.inView ? 'visible' : 'hidden'}
            className="text-3xl font-aboreto font-medium border border-hom-gold/70 px-5 py-2 text-hom-darkgold tracking-wider uppercase"
          >
            Portfolio<span className="text-black">Feed</span>
          </motion.h2>
        </div>

        {/* ── Filter Pills ─────────────────────────────────────── */}
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

        {/* ── Image Grid ───────────────────────────────────────── */}
        <motion.div
          ref={grid.ref}
          variants={staggerContainer}
          initial="hidden"
          animate={grid.inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 gap-1 md:gap-4 mt-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                layout
                key={img.id}
                variants={gridCard}
                /* AnimatePresence exit stays independent */
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
                onClick={() => openLightbox(img, filteredImages.indexOf(img))}
                className="relative aspect-square overflow-hidden group cursor-pointer bg-gray-100 rounded-sm"
              >
                <motion.div
                  layoutId={`img-${img.id}`}
                  className="w-full h-full"
                >
                  <img
                    src={img.src}
                    alt={`Portfolio ${img.category}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-full mb-3 scale-0 group-hover:scale-100 transition-transform duration-500 delay-75">
                    <Maximize2 className="text-white w-5 h-5" />
                  </div>
                  <div className="text-white font-aboreto text-[10px] md:text-sm tracking-widest uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {img.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── View More Link ───────────────────────────────────── */}
        <div ref={footer.ref} className="mt-16 text-center">
          <motion.a
            variants={fadeUp(0, 0.8)}
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

      {/* ── Lightbox Modal ─────────────────────────────────────── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center px-4 py-8 md:p-12"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-6 right-6 z-[110] text-white/50 hover:text-white transition-colors p-2"
              onClick={closeLightbox}
            >
              <X size={32} strokeWidth={1} />
            </motion.button>

            {/* Navigation Buttons */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-10 z-[110] pointer-events-none">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="pointer-events-auto p-3 md:p-4 border border-hom-gold rounded-full text-hom-gold hover:bg-hom-gold hover:text-white transition-all bg-white/10 backdrop-blur-md group"
                onClick={prevImage}
                aria-label="Previous image"
              >
                <svg className="w-6 h-6 rotate-180 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="pointer-events-auto p-3 md:p-4 border border-hom-gold rounded-full text-hom-gold hover:bg-hom-gold hover:text-white transition-all bg-white/10 backdrop-blur-md shadow-md group"
                onClick={nextImage}
                aria-label="Next image"
              >
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </div>

            {/* Main Content Container */}
            <motion.div
              layoutId={`img-${selectedImage.id}`}
              className="relative max-w-5xl max-h-full w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.category}
                  className="max-w-full max-h-full object-contain shadow-2xl"
                />
              </motion.div>
              
              {/* Photo Meta Info */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-[-40px] md:bottom-[-60px] text-center"
              >
                <p className="text-hom-gold font-aboreto text-[10px] md:text-xs tracking-[0.3em] uppercase mb-1">
                  {selectedImage.category}
                </p>
                <p className="text-white/40 font-inter text-[8px] md:text-[10px] tracking-[0.1em]">
                  IMAGE {activeIndex + 1} OF {filteredImages.length}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
