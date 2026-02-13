import React, { useRef } from 'react'

const Ourflavors = () => {

  const carouselRef = useRef(null)

  const nextSlide = () => {
    if (!carouselRef.current) return
    const itemWidth = carouselRef.current.offsetWidth / 4
    carouselRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' })
  }

  const prevSlide = () => {
    if (!carouselRef.current) return
    const itemWidth = carouselRef.current.offsetWidth / 4
    carouselRef.current.scrollBy({ left: -itemWidth, behavior: 'smooth' })
  }

  const images = [
    { img: "/images/section3/1.png" },
    { img: "/images/section3/2.png" },
    { img: "/images/section3/3.png" },
    { img: "/images/section3/4.png" },
    { img: "/images/section3/5.png" },
    { img: "/images/section3/6.png" },
    { img: "/images/section3/7.png" },
    { img: "/images/section3/8.png" },
  ]

  return (
    <main
      className="w-full bg-baby-pink py-16 px-8 flex flex-col items-center"
      aria-labelledby="our-flavors-heading"
    >
      <header className="text-center max-w-3xl">
        <p className="font-Mazzard-Regular text-sharp-pink text-sm">
          OUR FLAVORS
        </p>

        <h2
          id="our-flavors-heading"
          className="font-Schotis-Bold text-3xl tracking-wide mt-3"
        >
          Chill-Worthy Choices
        </h2>
      </header>

      {/* CAROUSEL WRAPPER */}
      <div className="relative max-w-6xl w-full mx-auto py-8 px-4">

        {/* CAROUSEL */}
        <div
          ref={carouselRef}
          className="w-full flex overflow-hidden scroll-smooth  gap-4  "
        >
          {images.map((item, index) => (


            <div className='flex flex-col'>
              <div
                key={index}
                className="flex-shrink-0 bg-white flex justify-center items-center cursor-pointer "
                style={{ flex: "0 0 calc((100% - 3rem) / 4)" }}
              >


                <div className="relative w-65 h-65">
                  <img
                    src={item.img}
                    alt=""
                    draggable="false"
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                </div>

              </div>


              <div className=' py-4 flex flex-col justify-center items-center  pb-0'>
                <p className='font-Schotis-SemiBold text-md'>
                  Creamy Vanilla Bean
                </p>

              </div>


              <div className='ratings flex gap-1 justify-center items-center py-1.5 pb-0 '>

                <img className='h-4.5' src="star1.svg" alt="star" />
                <img className='h-4.5' src="star1.svg" alt="star" />
                <img className='h-4.5' src="star1.svg" alt="star" />
                <img className='h-4.5' src="star1.svg" alt="star" />
                <img className='h-4.5' src="star1.svg" alt="star" />

              </div>


              <div className='rate justify-center items-center flex py-4 relative'>

                <span className='price1 absolute translate-y-2 -translate-x-7 font-Mazzard-Regular text-xs line-through text-gray-500'>
                 &nbsp;&nbsp; $500 &nbsp;&nbsp;
                </span>

                <span className='price2 absolute font-Mazzard-SemiBold text-xs translate-y-2 translate-x-6 '>
                      $300
                </span>
                
              </div>

            </div>





          ))}
        </div>





        {/* PREVIOUS BUTTON */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-15 z-50 cursor-pointer"
        >
          <span className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-900 group hover:border-sharp-pink shadow-lg">
            <svg
              className="w-5 h-5 text-gray-900 group-hover:text-sharp-pink"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </span>
        </button>

        {/* NEXT BUTTON */}
        <button
          type="button"
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-15 z-50 cursor-pointer"
        >
          <span className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-900 group hover:border-sharp-pink shadow-lg">
            <svg
              className="w-5 h-5 text-gray-900 group-hover:text-sharp-pink"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </button>

      </div>
    </main>
  )
}

export default Ourflavors







