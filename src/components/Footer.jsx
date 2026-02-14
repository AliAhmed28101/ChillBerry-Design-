import React from 'react'

const Footer = () => {
  return (

    <footer>


      <main className="relative w-full bg-blackish overflow-hidden py-4">



        <section className='diagonalbox absolute right-0  py-3.5  '>
          <div className='diagonal  bg-lightblack px-47 py-26 rounded-3xl -rotate-22 translate-x-40'>
          </div>
        </section>



        <div className="logosection flex justify-center py-7">

          <section className="flex flex-col items-center">
            <img
              className="h-20 w-20 block"
              src="logo.png"
              alt=""
            />

            <div className="flex text-3xl tracking-wider">
              <span className="font-Schotis-Bold  text-white">
                Chill
              </span>
              <span className="font-Schotis-Bold text-sharp-pink">
                berry
              </span>

            </div>
          </section>
        </div>



        <section className="navigation hidden lg:flex justify-center py-13">
          <ul className="text-white   ">
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


        <hr className="line border-t border-white/20 w-full" />




        <div className=' endcontent flex justify-items-center items-center px-36  py-6 pb-0 mb-1 h-12 '>

          <section className='text-white '>
            <p className="text-sm text-white ">
              © 2026 Chillberry. All rights reserved. </p>
          </section>

          <section className='footericons px-57 flex items-center gap-3 justify-center'>
            <a href='facebook' className='rounded-full p-1.5 bg-lightblack hover:bg-sharp-pink' >
              <img className='h-4 w-4 invert' src="linkedin.svg" alt="" /> </a>

            <a href='facebook' className='rounded-full p-1.5 bg-lightblack hover:bg-sharp-pink' >
              <img className='h-4 w-4 invert ' src="insta3.svg" alt="" /> </a>

            <a href='facebook' className='rounded-full p-1.5 bg-lightblack hover:bg-sharp-pink' >
              <img className='h-4 w-4 invert ' src="tiktok.svg" alt="" /> </a>

            <a href='facebook' className='rounded-full p-1.5 bg-lightblack hover:bg-sharp-pink' >
              <img className='h-4 w-4 invert ' src="youtube.svg" alt="" /> </a>
          </section>

          <section className='text-white px-18 pr-0'>
            <p className="text-sm text-white ">
              By Ali Ahmed
            </p>
          </section>
        </div>

      </main>


    </footer>
  )
}

export default Footer
