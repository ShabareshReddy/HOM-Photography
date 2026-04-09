"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll listener to update active link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "portfolio", "services", "reviews", "about", "contact"];
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold based on your layout
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }

      // If at top of page, home is naturally active
      if (window.scrollY < 100) {
        current = "home";
      }

      if (current) {
        setActiveLink(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },

    { name: "Services", href: "#services", id: "services" },
    { name: "Portfolio", href: "#portfolio", id: "portfolio" },
    { name: "Testimonials", href: "#reviews", id: "reviews" },
    { name: "About", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-40">
      <div className="px-6 lg:px-10 bg-white/1">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="relative inline-block z-50">
            <Link
              href="#home"
              onClick={() => handleLinkClick("home")}
              className="font-playfair-sc text-5xl md:text-6xl text-hom-gold/100 tracking-wide leading-none"
            >
              HOM
            </Link>

            {/* Overlay text — percentage top keeps it centred over HOM at every size */}
            <span className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-loose font-birthstone text-black font-medium text-2xl md:text-4xl pointer-events-none whitespace-nowrap">
              Photography
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center">
            <div className="flex font-aboreto items-center border border-hom-gold/20 bg-white/90 backdrop-blur-xs rounded-md px-2 py-1 shadow-md">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 ${activeLink === link.id
                    ? "bg-hom-gold/55 text-black"
                    : "text-hom-gold hover:bg-hom-gold/10"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-black bg-white/80 rounded-full shadow-md backdrop-blur-sm focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-0 left-0 w-full bg-white/95 backdrop-blur-xl transition-all duration-300 ease-in-out transform ${isMobileMenuOpen ? "translate-y-0 opacity-100 visible h-screen" : "-translate-y-full opacity-0 invisible h-0"
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 pt-20">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => handleLinkClick(link.id)}
              className={`font-space-grotesk text-3xl font-medium transition-colors ${activeLink === link.id
                ? "text-hom-gold"
                : "text-black hover:text-hom-gold"
                }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Social Links */}
          <div className="flex gap-4 sm:gap-6 pt-8 mt-4 border-t border-black/10 w-2/3 justify-center items-center">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center text-hom-gold hover:bg-hom-gold hover:text-black rounded-full border border-hom-gold p-3 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center justify-center text-hom-gold hover:bg-hom-gold hover:text-black rounded-full  border border-hom-gold p-3 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex items-center justify-center text-hom-gold hover:bg-hom-gold hover:text-black rounded-full border border-hom-gold p-3 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
            <a
              href="mailto:hello@houseofmoments.com"
              aria-label="Mail"
              className="flex items-center justify-center text-hom-gold hover:bg-hom-gold hover:text-black rounded-full border border-hom-gold p-3 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}