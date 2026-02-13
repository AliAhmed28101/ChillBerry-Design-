import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-blackish overflow-hidden py-4">
      
      {/* Decorative Diagonal - Hidden from Screen Readers */}
      <div className="diagonalbox absolute right-0 py-3.5" aria-hidden="true">
        <div className="diagonal bg-lightblack px-47 py-26 rounded-3xl -rotate-22 translate-x-40" />
      </div>

      {/* Logo Section - Wrapped in a link for SEO/UX */}
      <div className="flex justify-center py-7">
        <a href="/" className="flex flex-col items-center group" title="Chillberry Home">
          <img
            className="h-20 w-20 block"
            src="logo.png"
            alt="Chillberry" 
          />
          <div className="flex text-3xl tracking-wider">
            <span className="font-Schotis-Black font-semibold text-white">
              Chill
            </span>
            <span className="font-Schotis-Black text-sharp-pink">
              berry
            </span>
          </div>
        </a>
      </div>

      {/* Navigation Links - Semantic <nav> with labeled list */}
      <nav className="hidden lg:flex justify-center py-13" aria-label="Footer Navigation">
        <ul className="flex gap-8 font-Mazzard-Regular text-sm text-white">
          <li>
            <a className="hover:text-sharp-pink transition-all" href="/">Home</a>
          </li>
          <li>
            <a className="hover:text-sharp-pink transition-all" href="/about-us">About Us</a>
          </li>
          <li>
            <a className="hover:text-sharp-pink transition-all" href="/our-flavors">Our Flavors</a>
          </li>
          <li>
            <a className="hover:text-sharp-pink transition-all" href="/gallery">Gallery</a>
          </li>
          <li>
            <a className="hover:text-sharp-pink transition-all" href="/testimonials">Testimonials</a>
          </li>
          <li>
            <a className="hover:text-sharp-pink transition-all" href="/contact">Contact</a>
          </li>
        </ul>
      </nav>

      <hr className="border-t border-white/20 w-full my-4" aria-hidden="true" />

      {/* Footer Bottom */}
      <div className="flex flex-col lg:flex-row justify-between items-center px-8 lg:px-36 py-6 gap-4">
        
        {/* Copyright - Using <small> for fine print */}
        <small className="text-sm text-white block">
          © 2026 Chillberry. All rights reserved.
        </small>

        {/* Social Icons - Added ARIA labels for accessibility */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on LinkedIn"
            className="rounded-full p-1.5 bg-lightblack hover:bg-sharp-pink transition-colors"
          >
            <img className="h-4 w-4 invert" src="linkedin.svg" alt="" aria-hidden="true" />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            className="rounded-full p-1.5 bg-lightblack hover:bg-sharp-pink transition-colors"
          >
            <img className="h-4 w-4 invert" src="insta3.svg" alt="" aria-hidden="true" />
          </a>

          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on TikTok"
            className="rounded-full p-1.5 bg-lightblack hover:bg-sharp-pink transition-colors"
          >
            <img className="h-4 w-4 invert" src="tiktok.svg" alt="" aria-hidden="true" />
          </a>

          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our YouTube channel"
            className="rounded-full p-1.5 bg-lightblack hover:bg-sharp-pink transition-colors"
          >
            <img className="h-4 w-4 invert" src="youtube.svg" alt="" aria-hidden="true" />
          </a>
        </div>

        {/* Author */}
        <p className="text-sm text-white italic">
          Designed by <span className="font-bold">Ali Ahmed</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;