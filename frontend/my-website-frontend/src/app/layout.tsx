import type { Metadata } from "next";
import { Playfair_Display, Inter, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

// Local fonts
const snowboarding = localFont({
  src: "../../public/font/Snowboarding.ttf",
  variable: "--font-snowboarding",
  display: "swap",
});

const ethnocentric = localFont({
  src: "../../public/font/Ethnocentric-Regular.otf",
  variable: "--font-ethnocentric",
  display: "swap",
});

const gilroyBlack = localFont({
  src: "../../public/font/Gilroy-Black.ttf",
  variable: "--font-gilroy-black",
  display: "swap",
});

const infected = localFont({
  src: "../../public/font/INFECTED.ttf",
  variable: "--font-infected",
  display: "swap",
});

// Elegant serif font for headings
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Clean, modern sans-serif for body text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Monospace font for code blocks
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Biniyam Alemayehu",
  description: "Personal portfolio showcasing projects and expertise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} ${geistMono.variable} ${snowboarding.variable} ${ethnocentric.variable} ${gilroyBlack.variable} ${infected.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

