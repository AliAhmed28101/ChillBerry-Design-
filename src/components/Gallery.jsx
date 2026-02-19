import React, { useRef } from 'react'

const Gallery = () => {

    const carouselRef = useRef(null)

    const nextSlide = () => {
        if (!carouselRef.current) return
        const containerWidth = carouselRef.current.offsetWidth
        carouselRef.current.scrollBy({ left: containerWidth, behavior: 'smooth' })
    }

    const prevSlide = () => {
        if (!carouselRef.current) return
        const containerWidth = carouselRef.current.offsetWidth
        carouselRef.current.scrollBy({ left: -containerWidth, behavior: 'smooth' })
    }

    const images = [
        { img: "/images/section5/1.png", heading: "Indulgent Sundae", para: "A luscious pink base piled with whipped cream and fresh strawberries." },
        { img: "/images/section5/2.png", heading: "Caramel Crunch", para: "A silky vanilla base topped with golden caramel and crunchy nuts." },
        { img: "/images/section5/3.jpg", heading: "Strawberry Swirl", para: "A creamy vanilla base laced with ribbons of real, juicy strawberry." },
        { img: "/images/section5/4.png", heading: "Retro Delight", para: "A classic layered treat featuring colorful scoops and a bright cherry." },
        { img: "/images/section5/5.png", heading: "Neon Nebula", para: "A bold fruity base swirled with electric shades of wild grape." },
        { img: "/images/section5/6.jpg", heading: "Citrus Sorbet", para: "A bright fruity base paired with refreshing scoops of tangy orange." },
        { img: "/images/section5/7.jpg", heading: "Midnight Sky", para: "A cool minty base paired with deep scoops of dark charcoal." },
        { img: "/images/section5/8.jpg", heading: "Rainbow Swirl", para: "A colorful cream base layered with every bright shade of fruit." },
        { img: "/images/section5/9.jpg", heading: "Citrus Zest", para: "A zesty vanilla base garnished with fresh lime and aromatic peel." },
        { img: "/images/section5/10.jpg", heading: "Chocolate Drip", para: "A decadent cream base smothered in rich dark and white chocolate." },
    ]

    return (
        <main className='maincontainer w-full h-155 bg-baby-pink'>

            <div className='start flex flex-col py-22 items-center px-8 mr-0 pr-7 pb-0 justify-center'>

                <div className='textbox flex items-center justify-center'>
                    <section className='content'>
                        <p className='font-Mazzard-Regular text-sharp-pink text-xs sm:text-sm uppercase  text-center'>
                            GALLERY
                        </p>

                        <div className='py-3.5'>
                            <span className='font-Schotis-Bold text-2xl sm:text-3xl tracking-wide'>
                                <h5 className='px-2 sm:px-4 md:px-8 whitespace-nowrap'>
                                    Ice Cream Moments
                                </h5>
                            </span>
                        </div>
                    </section>
                </div>

                <div className="relative w-full mx-auto py-5">

                    <div
                        ref={carouselRef}
                        className="carousel w-full overflow-hidden scroll-smooth flex h-70 gap-4"
                    >
                        {images.map((item, index) => (
                            <section
                                key={index}
                                className="carousel-item flex-shrink-0 
                                           basis-full 
                                           sm:basis-[calc((100%-1rem)/2)] 
                                           md:basis-[calc((100%-2rem)/3)] 
                                           lg:basis-[calc((100%-3rem)/4)] 
                                           xl:basis-[calc((100%-4rem)/5)] 
                                           rounded-2xl overflow-hidden"
                            >
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    draggable="false"
                                    className="relative block w-full h-full overflow-hidden group cursor-pointer hover:z-10"
                                >
                                    <img
                                        src={item.img}
                                        alt=""
                                        draggable="false"
                                        className="w-full h-full object-cover 2xl:object-fill sm:object-cover transition-transform duration-300 md:group-hover:scale-105 "
                                    />

                                    <div className="absolute bottom-4 left-4 right-4 z-20 text-white opacity-0 group-hover:opacity-100">
                                        <span className="bg-lightblack/60 px-2 py-1 text-md rounded-md font-Schotis-SemiBold tracking-wider">
                                            {item.heading}
                                        </span>

                                        <p className="mt-2 text-sm font-Mazzard-Regular w-50">
                                            {item.para}
                                        </p>
                                    </div>

                                    <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </a>
                            </section>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={prevSlide}
                        className="absolute top-1/2 -translate-y-1/2 -translate-x-4 left-0 z-50 cursor-pointer"
                    >
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 hover:bg-sharp-pink text-white shadow-lg">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </span>
                    </button>

                    <button
                        type="button"
                        onClick={nextSlide}
                        className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-4 z-50 cursor-pointer"
                    >
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 hover:bg-sharp-pink text-white shadow-lg">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </button>
                </div>

                <section className="py-6 flex justify-center items-center w-full">
                    <button
                        type="button"
                        onClick={() => alert("View Menu")}
                        className="inline-flex items-center justify-center gap-1 font-Mazzard-Regular text-white text-sm bg-sharp-pink px-6 py-2.5 rounded-4xl hover:cursor-pointer"
                    >
                        View Menu
                        <img className="h-3.5 invert" src="next.svg" alt="next" />
                    </button>
                </section>

            </div>

        </main>
    )
}

export default Gallery
