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
    { img: "/images/section3/1.png", price1: "$500", price2: "$300", rating: 5 },
    { img: "/images/section3/2.png", price2: "$280", rating: 3 },
    { img: "/images/section3/3.png", price1: "$450", price2: "$320", rating: 4 },
    { img: "/images/section3/4.png", price2: "$260", rating: 2 },
    { img: "/images/section3/5.png", price1: "$520", price2: "$390", rating: 5 },
    { img: "/images/section3/6.png", price2: "$310", rating: 4 },
    { img: "/images/section3/7.png", price1: "$480", price2: "$350", rating: 3 },
    { img: "/images/section3/8.png", price2: "$290", rating: 2 },
  ]

  return (
    <main
      className="w-full bg-baby-pink py-16 px-8 flex flex-col items-center h-full pb-11"
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

      <div className="relative max-w-310 w-full mx-auto py-8 px-4">

        <div
          ref={carouselRef}
          className="w-full overflow-hidden flex scroll-smooth gap-3"
        >
          {images.map((item, index) => (

            <div key={index} className='flex flex-col' style={{ flex: "0 0 calc((100% - 3rem) / 4)" }}>

              {/* ⬆️ Increased image container height: was w-65 h-65, now w-full h-96 */}
              <div className="bg-white flex justify-center items-center cursor-pointer h-92">
                <div className="relative w-full h-65">


                  <div className='leftcorner absolute left-4  bg-sharp-pink text-white  h-5.5 top-0 w-13  rounded-2xl -translate-y-9 flex items-center justify-center font-Schotis-Light text-sm '>
                    sale
                  </div>


                  <div className='rightcorner absolute right-4  '>

                    <div className='flex flex-col'>

                      <img src=" " alt=" " />

                      <img src=" " alt=" " />

                      <img src=" " alt=" " />


                    </div>


                  </div>


                  <img
                    src={item.img}
                    alt=""
                    draggable="false"
                    className="absolute translate-y-2 w-full h-full object-cover transition-transform duration-300 "
                  />
                </div>
              </div>

              <div className='py-7 flex flex-col justify-center items-center pb-0'>
                <p className='font-Schotis-SemiBold text-md'>
                  Creamy Vanilla Bean
                </p>
              </div>

              {/* ⭐ Dynamic Ratings */}
              <div className='ratings flex gap-1 justify-center items-center py-1.5 pb-0'>
                {[1, 2, 3, 4, 5].map((star) => (
                  <img
                    key={star}
                    className='h-4.5'
                    src={star <= item.rating ? "star1.svg" : "star2.svg"}
                    alt="star"
                  />
                ))}
              </div>

              {/* 💰 Prices */}
              <div className='rate justify-center items-center flex py-4 relative'>

                {item.price1 && (
                  <span className='price1 absolute translate-y-2 -translate-x-7 font-Mazzard-Regular text-xs line-through text-gray-500'>
                    &nbsp;&nbsp; {item.price1} &nbsp;&nbsp;
                  </span>
                )}

                <span
                  className={`price2 absolute font-Mazzard-SemiBold text-xs translate-y-2 ${item.price1
                    ? 'translate-x-6'
                    : 'left-1/2 -translate-x-1/2'
                    }`}
                >
                  {item.price2}
                </span>

              </div>

            </div>

          ))}
        </div>

        {/* PREVIOUS BUTTON */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute top-60 -translate-y-10 left-0 -translate-x-9 z-50 cursor-pointer"
        >
          <span className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-900 group hover:border-sharp-pink shadow-lg">
            <svg className="w-4 h-4 text-gray-900 group-hover:text-sharp-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </span>
        </button>

        {/* NEXT BUTTON */}
        <button
          type="button"
          onClick={nextSlide}
          className="absolute top-60  -translate-y-10 right-0 translate-x-9 z-50 cursor-pointer"
        >
          <span className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-900 group hover:border-sharp-pink shadow-lg">
            <svg className="w-4 h-4 text-gray-900 group-hover:text-sharp-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </button>

      </div>
    </main>
  )
}

export default Ourflavors
