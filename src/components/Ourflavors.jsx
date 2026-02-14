import React, { useRef } from 'react';

const Ourflavors = () => {
  const carouselRef = useRef(null);

  const nextSlide = () => {
    if (!carouselRef.current) return;
    const itemWidth = carouselRef.current.offsetWidth / 4;
    carouselRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
  };

  const prevSlide = () => {
    if (!carouselRef.current) return;
    const itemWidth = carouselRef.current.offsetWidth / 4;
    carouselRef.current.scrollBy({ left: -itemWidth, behavior: 'smooth' });
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
    <main className="w-full bg-baby-pink py-16 px-8 flex flex-col items-center h-full pb-11">
      <header className="text-center max-w-3xl">
        <p className="font-Mazzard-Regular text-sharp-pink text-sm uppercase tracking-widest">
          OUR FLAVORS
        </p>
        <h2 className="font-Schotis-Bold text-3xl tracking-wide mt-3">
          Chill-Worthy Choices
        </h2>
      </header>

      <div className="relative max-w-280  w-full  mx-auto py-8 px-2 mr-0 pr-0 pl-0 ml-0">
        <div ref={carouselRef} className="w-full overflow-hidden flex scroll-smooth gap-4">
          {images.map((item, index) => (
            <div key={index} className='flex flex-col' style={{ flex: "0 0 calc((100% - 3.5rem) / 4)" }}>

              {/* WHITE SECTION (Hover Trigger) */}
              <div className="bg-white group/card flex justify-center items-center cursor-pointer h-92 relative overflow-hidden rounded-lg">

                {/* Sale Tag */}
                {item.sale && (
                  <div className='absolute left-3 top-3 bg-sharp-pink text-white h-5.5 px-3 rounded-2xl flex items-center justify-center font-Schotis-Light text-sm z-30 pointer-events-none'>
                    {item.sale}
                  </div>
                )}

                {/* ICON MENU - Triggers ONLY when hovering the white box */}
                <div className='absolute right-3 top-3 z-40 flex flex-col gap-2 opacity-0 translate-x-4 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-300'>

                  {/* Quick View */}
                  <div className='flex items-center group/icon relative cursor-pointer'>
                    <span className='absolute right-full mr-2 whitespace-nowrap bg-sharp-pink text-white h-6 px-2 rounded-2xl flex items-center justify-center font-Schotis-Light text-xs opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 shadow-sm pointer-events-none'>
                      Quick View
                    </span>
                    <button className='bg-white hover:bg-sharp-pink shadow-md p-1.5 rounded-full transition-colors duration-200 cursor-pointer'>
                      <img className='w-4.5 h-4.5 group-hover/icon:invert transition-all' src="eye.svg" alt="Quick View" />
                    </button>
                  </div>

                  {/* Share */}
                  <div className='flex items-center group/icon relative cursor-pointer'>
                    <span className='absolute right-full mr-2 whitespace-nowrap bg-sharp-pink text-white h-6 px-2 rounded-2xl flex items-center justify-center font-Schotis-Light text-xs opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 shadow-sm pointer-events-none'>
                      Share
                    </span>
                    <button className='bg-white hover:bg-sharp-pink shadow-md p-1.5 rounded-full transition-colors duration-200 cursor-pointer'>
                      <img className='w-4.5 h-4.5 group-hover/icon:invert transition-all' src="shuffle.svg" alt="Share" />
                    </button>
                  </div>

                  {/* Like */}
                  <div className='flex items-center group/icon relative cursor-pointer'>
                    <span className='absolute right-full mr-2 whitespace-nowrap bg-sharp-pink text-white h-6 px-2 rounded-2xl flex items-center justify-center font-Schotis-Light text-xs opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 shadow-sm pointer-events-none'>
                      Like
                    </span>
                    <button className='bg-white hover:bg-sharp-pink shadow-md p-1.5 rounded-full transition-colors duration-200 cursor-pointer'>
                      <img className='w-4 h-4 group-hover/icon:invert transition-all' src="heart.svg" alt="Like" />
                    </button>
                  </div>
                </div>

                {/* PRODUCT IMAGE */}
                <img
                  src={item.img}
                  alt={item.name}
                  draggable="false"
                  className="w-65 h-65 object-cover z-10 group-hover/card:scale-105 transition-transform duration-500 translate-y-4"
                />
              </div>

              {/* NON-HOVERABLE TEXT SECTION */}
              <div className='py-6 flex flex-col items-center'>
                <p className='font-Schotis-Bold text-lg '>{item.name}</p>
                <div className='flex gap-0.5 py-2'>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <img key={star} className='h-4.5' src={star <= item.rating ? "star1.svg" : "star2.svg"} alt="star" />
                  ))}
                </div>
                <div className='flex items-center justify-center gap-1 mt-3.5 '>
                  {item.price1 && <span className='font-Mazzard-Regular text-sm -px-4  line-through text-gray-400'> &nbsp;&nbsp;&nbsp; {item.price1} &nbsp;&nbsp;&nbsp;</span>}
                  <span className='font-Mazzard-SemiBold text-sm px-3 '>{item.price2}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CAROUSEL BUTTONS */}
        <button onClick={prevSlide} className="absolute top-1/2 -translate-y-20 left-0 -translate-x-13 z-50 p-2 rounded-full border border-gray-900 group hover:border-sharp-pink transition-colors cursor-pointer">
          <svg className="w-5 h-5 text-gray-900 group-hover:text-sharp-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button onClick={nextSlide} className="absolute top-1/2 -translate-y-20 right-0 translate-x-11 z-50 p-2 rounded-full border border-gray-900 group hover:border-sharp-pink transition-colors cursor-pointer">
          <svg className="w-5 h-5 text-gray-900 group-hover:text-sharp-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </main>
  );
};

export default Ourflavors;