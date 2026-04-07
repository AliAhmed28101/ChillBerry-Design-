import React from 'react'

const Ourstory = () => {
  return (
    <section className="w-full bg-white overflow-hidden" aria-labelledby="story-title">
      {/* 1550px Max-Width Wrapper */}
      <div className="max-w-[1550px] mx-auto relative px-6 py-12 md:py-12 lg:py-25 xl:py-0 xl:pt-13">
        
        {/* 1. TOP HEADING - Wrapped in header for semantic grouping */}
        <header className="w-full text-center mb-10">
          <p className="font-Mazzard-Regular text-sharp-pink text-xs sm:text-sm tracking-widest mb-2">
            OUR STORY
          </p>
          <h1 id="story-title" className="font-Schotis-Bold text-2xl sm:text-3xl tracking-wide leading-tight py-2.5">
            The Flavor <br  />
            <span className="md:px-4">Behind the Fun</span>
          </h1>
        </header>

        {/* 2. CONTENT GRID */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4">
          
          {/* --- LEFT SECTION (About Chill Berry) --- */}
          <article className="w-full md:w-1/3 flex flex-col items-center md:items-start order-1">
            {/* Decorative image - aria-hidden because it's purely visual */}
            <div className="hidden md:block mb-8 self-start" aria-hidden="true">
              <img
                className="w-48 md:w-70 h-auto object-contain -translate-x-8 md:-translate-y-30"
                src="/images/section2/cone.png"
                alt="" 
              />
            </div>
            
            <div className="text-center md:text-left max-w-sm md:-translate-y-30 xl:translate-x-35 xl:w-80 xl:-translate-y-40">
              <h2 className="font-Schotis-Bold tracking-wider text-lg sm:text-xl md:text-xl ">
                About Chill Berry
              </h2>
              <p className="text-gray-500 text-sm font-Mazzard-Regular py-4 leading-relaxed ">
                At Frosty Whirl, ice cream is more than just dessert — it's a celebration 
                of flavor, creativity, and childhood joy. What started as a small local 
                dream has grown into a delightful brand known for handcrafted scoops, 
                real ingredients, and unforgettable taste.
              </p>
            </div>
          </article>

          {/* --- MIDDLE SECTION (Main Visual) --- */}
          <figure className="w-full md:w-1/3 flex justify-center order-2">
            <div className="bg-gradient-to-t from-sharp-pink from-0% to-white to-85% p-[3px] rounded-b-[131px]">
              <div className="bg-white p-[8px] lg:p-[10px] rounded-b-[124px]">
                <div className="relative flex items-center justify-center w-[220px] h-[240px] lg:w-[260px] lg:h-[280px] bg-gradient-to-t from-sharp-pink from-0% to-white to-85% rounded-b-[120px]">
                  <div className="absolute bottom-5 lg:bottom-7 w-[320px] lg:w-[400px] px-6">
                    <img
                      src="/images/section2/mid.png"
                      alt="A delicious Chill Berry ice cream sundae"
                      className="w-full h-auto drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </figure>

          {/* --- RIGHT SECTION (Joy In Every Scoop) --- */}
          <article className="w-full md:w-1/3 flex flex-col items-center md:items-start order-3">
            <div className="text-center md:text-left max-w-sm w-full xl:-translate-y-10 xl:-translate-x-10">
              <h2 className="font-Schotis-Bold tracking-wider text-lg sm:text-xl md:text-xl">
                Joy in Every Scoop
              </h2>
              <p className="text-gray-500 text-sm font-Mazzard-Regular py-4 leading-relaxed">
                At Frosty Whirl, we believe every scoop should be a moment of joy. 
                Crafted with care and a whole lot of love, our ice creams are 
                made to bring smiles to every face.
              </p>

              {/* Checklist Container: Changed to a semantic list <ul> */}
              <ul className="flex flex-col gap-3 mt-2 w-fit mx-auto md:mx-0 list-none">
                {[
                  "Made with real, fresh ingredients",
                  "Always small-batch and handcrafted",
                  "No artificial flavors or preservatives"
                ].map((text, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <img className="h-5 w-5 flex-shrink-0" src="checkbox.svg" alt="" aria-hidden="true" />
                    <span className="font-Mazzard-Regular text-gray-900 text-sm">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex justify-center md:justify-start">
                <button
                  type="button"
                  onClick={() => alert("Order Now")}
                  className="flex items-center justify-center gap-2 font-Mazzard-Regular text-white text-sm bg-sharp-pink px-10 py-3 rounded-full transition-all cursor-pointer "
                >
                  Order Now
                  <img className="h-3 invert" src="next.svg" alt="" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Decorative image */}
            <div className="hidden lg:block absolute right-0 bottom-0 translate-y-2 translate-x-5 xl:-translate-y-1" aria-hidden="true">
              <img
                className="w-48 lg:w-62 h-auto object-contain"
                src="/images/section2/righty.png"
                alt=""
              />
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}

export default Ourstory