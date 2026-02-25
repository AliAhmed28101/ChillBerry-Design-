import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blackish relative overflow-hidden">

      {/* Diagonal Box — lg+ only */}
      <section className='diagonalbox absolute right-0 py-3.5 hidden lg:block'>
        <div className='diagonal bg-lightblack px-47 py-26 rounded-3xl -rotate-22 translate-x-40'></div>
      </section>

      <main className="w-full py-4">

        {/* Constrained Content */}
        <div className="max-w-7xl mx-auto px-6">

          {/* Logo */}
          <div className="flex justify-center py-7">
            <section className="flex flex-col items-center">
              <img className="h-20 w-20 block" src="logo.png" alt="" />
              <div className="flex text-3xl tracking-wider">
                <span className="font-Schotis-Bold text-white">Chill</span>
                <span className="font-Schotis-Bold text-sharp-pink">berry</span>
              </div>
            </section>
          </div>

          {/* Navigation */}
          <section className="hidden lg:flex justify-center py-13">
            <ul className="text-white">
              <li className="flex gap-8 font-Mazzard-Regular text-sm">
                <a className="hover:text-sharp-pink transition-all" href="/">Home</a>
                <a className="hover:text-sharp-pink transition-all" href="about-us">About Us</a>
                <a className="hover:text-sharp-pink transition-all" href="our-flavors">Our Flavors</a>
                <a className="hover:text-sharp-pink transition-all" href="gallery">Gallery</a>
                <a className="hover:text-sharp-pink transition-all" href="testimonials">Testimonials</a>
                <a className="hover:text-sharp-pink transition-all" href="contact">Contact</a>
              </li>
            </ul>
          </section>

        </div>

        {/* FULL WIDTH DIVIDER */}
        <hr className="border-t border-white/20 w-full hidden lg:block" />

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto px-6">

          <div
            className="
              flex flex-col
              gap-8
              text-center

              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:relative
              lg:text-left
              py-6
            "
          >

            {/* Left */}
            <section className="text-white">
              <p className="text-sm lg:px-20">
                © 2026 Chillberry. All rights reserved.
              </p>
            </section>

            {/* CENTER ICONS (Perfectly Centered on lg) */}
            <section
              className="
                flex justify-center
                lg:absolute
                lg:left-1/2
                lg:-translate-x-1/2
              "
            >
              <div className="flex items-center gap-3">
                <a href='facebook' className='rounded-full p-1.5 bg-lightblack hover:bg-sharp-pink'>
                  <img className='h-4 w-4 invert' src="linkedin.svg" alt="" />
                </a>

                <a href='facebook' className='rounded-full p-1.5 bg-lightblack hover:bg-sharp-pink'>
                  <img className='h-4 w-4 invert' src="insta3.svg" alt="" />
                </a>

                <a href='facebook' className='rounded-full p-1.5 bg-lightblack hover:bg-sharp-pink'>
                  <img className='h-4 w-4 invert' src="tiktok.svg" alt="" />
                </a>

                <a href='facebook' className='rounded-full p-1.5 bg-lightblack hover:bg-sharp-pink'>
                  <img className='h-4 w-4 invert' src="youtube.svg" alt="" />
                </a>
              </div>
            </section>

            {/* Right */}
            <section className="text-white">
              <p className="text-sm lg:-translate-x-40">
                By Ali Ahmed
              </p>
            </section>

          </div>

        </div>

      </main>
    </footer>
  )
}

export default Footer