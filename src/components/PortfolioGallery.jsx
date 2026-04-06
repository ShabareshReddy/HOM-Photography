export default function PortfolioGallery() {
  // Using HOM.jpg as placeholder since the user will provide real images in the future
  const images = Array(6).fill('/HOM.jpg');

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <p className="font-aboreto text-hom-gold tracking-[0.2em] text-sm uppercase mb-3">Portfolio</p>
            <h2 className="font-bodoni text-4xl md:text-5xl text-white">Visual Stories</h2>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="font-inter text-gray-400 font-light max-w-sm">
              Explore our curated selection of captured moments, from candid wedding emotions to beautifully framed events.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className={`relative overflow-hidden group cursor-pointer ${index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
            >
              <div className="absolute inset-0 bg-hom-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                src={src}
                alt={`House of Moments Portfolio ${index + 1}`}
                className="w-full h-full object-cover aspect-[4/5] sm:aspect-auto group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-hom-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <p className="font-bodoni text-white text-xl">Event Highlights</p>
                <p className="font-inter text-hom-gold text-sm tracking-wide">Tirupati</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.instagram.com/houseofmoments__/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 border-b border-hom-gold pb-1 text-white hover:text-hom-gold transition-colors font-inter tracking-wide"
          >
            <span>VIEW MORE ON INSTAGRAM</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
