export default function TrustBanner() {
  return (
    <section id="trust" className="bg-hom-lightblack py-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center space-x-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-6 h-6 ${i === 4 ? 'text-hom-gold/60' : 'text-hom-gold'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="font-bodoni text-3xl text-white font-semibold">4.9 / 5 <span className="text-hom-gold italic text-xl">Rating</span></p>
            <p className="font-inter text-gray-400 text-sm mt-1 uppercase tracking-widest">Based on 15+ Verified Reviews</p>
          </div>

          <div className="hidden md:block w-px h-16 bg-white/10"></div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-hom-gold"></div>
              <span className="font-inter text-gray-300 text-sm tracking-wide">Premium Wedding Photography</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-hom-gold"></div>
              <span className="font-inter text-gray-300 text-sm tracking-wide">Cinematic Event Videos</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-hom-gold"></div>
              <span className="font-inter text-gray-300 text-sm tracking-wide">Local Tirupati Expertise</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
