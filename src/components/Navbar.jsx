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
    { name: "Reviews", href: "#reviews", id: "reviews" },
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
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${activeLink === link.id
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
        </div>
      </div>
    </nav>
  );
}