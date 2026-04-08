import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// import TrustBanner from "@/components/TrustBanner";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import PortfolioGallery from "@/components/PortfolioGallery";
import OurTribe from "@/components/OurTribe";
import Testimonials from "@/components/Testimonials";
import GetInTouch from "@/components/GetInTouch";
// import SocialFollow from "@/components/SocialFollow";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-hom-black selection:bg-hom-gold selection:text-hom-black">
      <Navbar />
      <Hero />
      {/* <TrustBanner /> */}
     
      <Services />
      <PortfolioGallery />
      <OurTribe />

      <Testimonials />
       <AboutUs />
      <GetInTouch />
      {/* <SocialFollow /> */}
      <Footer />
    </main>
  );
}

