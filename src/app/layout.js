import {Bodoni_Moda,Space_Grotesk,Cormorant_Garamond, Noto_Serif_Display, Instrument_Serif, Tangerine, Birthstone, Aboreto, Bodoni_Moda_SC, Inter, Playfair_Display,Playfair_Display_SC } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  style: ["normal", "italic"],
});

const notoSerifDisplay = Noto_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-noto-serif-display",
});

const birthstone = Birthstone({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-birthstone",
});

const tangerine = Tangerine({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-tangerine",
});


const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
});



const playfairDisplaySC = Playfair_Display_SC({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-playfair-sc",
  style: ["normal", "italic"],
});

const aboreto = Aboreto({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-aboreto",
});


const bodoniModaSC = Bodoni_Moda_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-bodoni-sc",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic",],
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  style: ["normal", "italic"],
});

export const metadata = {
  title: "House of Moments Photography | Tirupati",
  description: "Professional, detail-focused photography team specializing in capturing real, emotional moments at weddings and events in Tirupati, Andhra Pradesh.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${aboreto.variable} ${cormorantGaramond.variable} ${notoSerifDisplay.variable} ${instrumentSerif.variable} ${tangerine.variable} ${playfairDisplaySC.variable} ${birthstone.variable} ${spaceGrotesk.variable} ${bodoniModa.variable} ${bodoniModaSC.variable} ${inter.variable} ${playfairDisplay.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-black" suppressHydrationWarning>{children}</body>
    </html>
  );
}
