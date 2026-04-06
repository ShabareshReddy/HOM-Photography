export default function Testimonials() {
  const reviews = [
    {
      text: "The wedding photography quality completely blew us away. They have an amazing eye for candid moments and made us feel so comfortable.",
      author: "Priya & Rahul",
      event: "Wedding"
    },
    {
      text: "We booked them for our son's first birthday. The album and video output were beyond our expectations. Extremely professional behavior.",
      author: "Sneha Reddy",
      event: "Birthday Event"
    },
    {
      text: "They are undoubtedly the best in Tirupati. The team's coordination during the events and their prompt delivery of edited photos is commendable.",
      author: "Karthik V.",
      event: "Family Function"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-hom-black relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-hom-lightblack/30 transform skew-x-12 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <p className="font-aboreto text-hom-gold tracking-[0.2em] text-sm uppercase mb-3">Testimonials</p>
          <h2 className="font-bodoni text-4xl md:text-5xl text-white">Words of Trust</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-hom-lightblack p-10 border-t-2 border-hom-gold hover:-translate-y-2 transition-transform duration-300 shadow-xl shadow-black/50"
            >
              <svg className="w-10 h-10 text-hom-gold/40 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="font-inter text-gray-300 italic text-sm leading-loose mb-8">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-hom-black border border-white/10 flex items-center justify-center">
                  <span className="font-bodoni text-hom-gold">{review.author.charAt(0)}</span>
                </div>
                <div className="ml-4">
                  <p className="font-bodoni text-white text-lg">{review.author}</p>
                  <p className="font-inter text-hom-gold text-xs uppercase tracking-wider">{review.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
