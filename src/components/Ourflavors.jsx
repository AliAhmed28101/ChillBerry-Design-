import React, { useRef } from "react";

const Ourflavors = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    const scrollAmount =
      direction === "next"
        ? container.clientWidth
        : -container.clientWidth;

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const images = [
    { img: "/images/section3/1.png", price1: "$8.00", price2: "$5.00", rating: 4, name: "Creamy Vanilla Bean", sale: "Sale" },
    { img: "/images/section3/2.png", price2: "$08.00", rating: 3, name: "Strawberry Swirl" },
    { img: "/images/section3/3.png", price2: "$25.00", rating: 4, name: "Mango Tango" },
    { img: "/images/section3/4.png", price2: "$39.99", rating: 3, name: "Pineapple Chill" },
    { img: "/images/section3/5.png", price1: "$50.00", price2: "$45.00", rating: 5, name: "Midnight Fudge", sale: "Sale" },
    { img: "/images/section3/6.png", price2: "$15.00", rating: 4, name: "The Pink Swirl" },
    { img: "/images/section3/7.png", price1: "$20.00", price2: "$17.00", rating: 3, name: "The Cookie Cone", sale: "Sale" },
    { img: "/images/section3/8.png", price2: "$60.00", rating: 5, name: "Oreo Madness" },
  ];

  return (
    <main className="w-full bg-baby-pink py-14 sm:py-16 px-4 flex flex-col items-center h-full pb-11">
      <header className="text-center max-w-3xl mb-10">
        <p className="font-Mazzard-Regular text-sharp-pink text-xs sm:text-sm uppercase tracking-widest">
          OUR FLAVORS
        </p>
        <h2 className="font-Schotis-Bold text-2xl sm:text-3xl tracking-wide mt-3">
          Chill-Worthy Choices
        </h2>
      </header>

      <div className="relative w-full max-w-[1400px] px-8 sm:px-12 lg:px-20 mx-auto py-8">

        <div
          ref={carouselRef}
          className="w-full overflow-x-auto flex scroll-smooth gap-6 snap-x snap-mandatory scrollbar-hide"
        >
          {images.map((item, index) => (
            <div
              key={index}
              className="shrink-0 flex flex-col snap-start
                w-full 
                sm:w-[calc((100%-1.5rem)/2)] 
                lg:w-[calc((100%-3rem)/3)] 
                xl:w-[calc((100%-4.5rem)/4)]"
            >
              <div className="bg-white group/card flex justify-center items-center cursor-pointer h-72 sm:h-80 lg:h-92 xl:h-100 2xl:h-110 relative overflow-hidden rounded-lg">

                {item.sale && (
                  <div className="absolute left-3 top-3 bg-sharp-pink text-white h-5.5 px-3 rounded-2xl flex items-center justify-center font-Schotis-Light text-sm z-30 pointer-events-none">
                    {item.sale}
                  </div>
                )}


                <div className='absolute right-3 top-3 z-40 flex flex-col gap-2 opacity-0 translate-x-4 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-300'>
                  <div className='flex items-center group/icon relative cursor-pointer'>
                    <span className='absolute right-full mr-2 whitespace-nowrap bg-sharp-pink text-white h-6 px-2 rounded-2xl flex items-center justify-center font-Schotis-Light text-xs opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 shadow-sm pointer-events-none'>
                      Quick View
                    </span>
                    <button className='bg-white hover:bg-sharp-pink shadow-md p-1.5 cursor-pointer rounded-full transition-colors duration-200'>
                      <img className='w-4.5 h-4.5 group-hover/icon:invert transition-all' src="eye.svg" alt="Quick View" />
                    </button>
                  </div>
                  <div className='flex items-center group/icon relative cursor-pointer'>
                    <span className='absolute right-full mr-2 whitespace-nowrap bg-sharp-pink text-white h-6 px-2 rounded-2xl flex items-center justify-center font-Schotis-Light text-xs opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 shadow-sm pointer-events-none'>
                      Share
                    </span>
                    <button className='bg-white hover:bg-sharp-pink shadow-md p-1.5 cursor-pointer rounded-full transition-colors duration-200'>
                      <img className='w-4.5 h-4.5 group-hover/icon:invert transition-all' src="shuffle.svg" alt="Share" />
                    </button>
                  </div>
                  <div className='flex items-center group/icon relative cursor-pointer'>
                    <span className='absolute right-full mr-2 whitespace-nowrap bg-sharp-pink text-white h-6 px-2 rounded-2xl flex items-center justify-center font-Schotis-Light text-xs opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 shadow-sm pointer-events-none'>
                      Like
                    </span>
                    <button className='bg-white hover:bg-sharp-pink shadow-md p-1.5 cursor-pointer  rounded-full transition-colors duration-200'>
                      <img className='w-4 h-4 group-hover/icon:invert transition-all' src="heart.svg" alt="Like" />
                    </button>
                  </div>
                </div>

                <img
                  src={item.img}
                  alt={item.name}
                  draggable="false"
                  className="w-52 sm:w-55 lg:w-60 xl:w-63 2xl:w-66
                             h-52 sm:h-55 lg:h-60 xl:h-63 2xl:h-66
                             object-cover z-10
                             group-hover/card:scale-105
                             transition-transform duration-500 translate-y-4"
                />
              </div>

              <div className="py-6 flex flex-col items-center">
                <p className="font-Schotis-Bold text-base sm:text-lg">{item.name}</p>

                <div className="flex gap-0.5 py-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <img
                      key={star}
                      className="h-4.5"
                      src={star <= item.rating ? "star1.svg" : "star2.svg"}
                      alt="star"
                    />
                  ))}
                </div>

                <div className="flex items-center justify-center gap-1 mt-3.5">
                  {item.price1 && (
                    <span className="font-Mazzard-Regular text-xs sm:text-sm line-through text-gray-400">
                      {item.price1}
                    </span>
                  )}
                  <span className="font-Mazzard-SemiBold text-xs sm:text-sm px-3">
                    {item.price2}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button onClick={() => scroll('prev')} className="absolute top-1/2 -translate-y-20 -translate-x-2.5 sm:-translate-x-0 left-0 sm:left-0 md:left-5 z-50 p-2 rounded-full border border-gray-900 group cursor-pointer hover:border-sharp-pink bg-baby-pink/50 backdrop-blur-sm sm:bg-transparent">

          <svg className="sm:w-5 sm:h-5 w-3.5 h-3.5 text-gray-900 group-hover:text-sharp-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /> </svg>

        </button>
        {/* Right Button */}
        <button onClick={() => scroll('next')} className="absolute top-1/2 -translate-y-20 translate-x-2.5 sm:translate-x-0 right-0 sm:right-0 md:right-5 z-50 p-2 rounded-full border border-gray-900 cursor-pointer group hover:border-sharp-pink bg-baby-pink/50 backdrop-blur-sm sm:bg-transparent">
          <svg className="sm:w-5 sm:h-5 w-3.5 h-3.5 text-gray-900 group-hover:text-sharp-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /> </svg>
        </button>
      </div>
    </main>
  );
};

export default Ourflavors;
