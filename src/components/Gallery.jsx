import React, { useRef } from 'react'

const Gallery = () => {

    const carouselRef = useRef(null)

    const getScrollAmount = () => {
        const container = carouselRef.current
        if (!container) return 0

        const firstCard = container.querySelector("section")
        if (!firstCard) return 0

        const cardWidth = firstCard.offsetWidth
        const gap = 16 // gap-4 = 16px

        const visibleCards = Math.round(container.clientWidth / (cardWidth + gap))

        return visibleCards * (cardWidth + gap)
    }

    const nextSlide = () => {
        if (!carouselRef.current) return

        const container = carouselRef.current
        const scrollAmount = getScrollAmount()

        const maxScrollLeft = container.scrollWidth - container.clientWidth
        const next = Math.min(container.scrollLeft + scrollAmount, maxScrollLeft)

        container.scrollTo({
            left: next,
            behavior: "smooth"
        })
    }

    const prevSlide = () => {
        if (!carouselRef.current) return

        const container = carouselRef.current
        const scrollAmount = getScrollAmount()

        const prev = Math.max(container.scrollLeft - scrollAmount, 0)

        container.scrollTo({
            left: prev,
            behavior: "smooth"
        })
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
        <main className='w-full bg-baby-pink'>

            <div className='flex flex-col py-10 items-center px-8 pb-10 justify-center '>

                {/* Heading */}
                <div className='flex items-center justify-center'>
                    <section>
                        <p className='font-Mazzard-Regular text-sharp-pink text-xs sm:text-sm uppercase text-center'>
                            GALLERY
                        </p>

                        <div className='py-3.5'>
                            <h5 className='font-Schotis-Bold text-2xl sm:text-3xl tracking-wide px-2 sm:px-4 md:px-8 whitespace-nowrap text-center'>
                                Ice Cream Moments
                            </h5>
                        </div>
                    </section>
                </div>

                {/* Carousel Wrapper */}
                <div className="relative  w-full xl:max-w-[1550px] mx-auto px-4 sm:px-1  md:px-0  lg:px-1 xl:px-0 2xl:px-19 py-5 ">

                    <div
                        ref={carouselRef}
                        className="w-full flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
                    >
                        {images.map((item, index) => (
                            <section
                                key={index}
                                className="flex-shrink-0
                                           basis-[100%]
                                           sm:basis-[calc((100%-1.7rem)/2)]
                                           md:basis-[calc((100%-2.8rem)/3)]
                                           lg:basis-[calc((100%-3.5rem)/4)]
                                           xl:basis-[calc((100%-4rem)/5)]
                                           2xl:basis-[calc((100%-4.5rem)/5)]
                                           aspect-square
                                           h-100
                                           sm:h-65
                            
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
                                        className="w-full h-full object-cover transition-transform duration-300 md:group-hover:scale-105"
                                    />

                                    <div className="absolute bottom-9 sm:bottom-5 left-4 right-4 z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="bg-lightblack/60 px-2 py-1 text-2xl sm:text-lg md:text-lg lg:text-lg   rounded-md font-Schotis-SemiBold tracking-wider">
                                            {item.heading}
                                        </span>

                                        <p className="mt-2 text-2xl sm:text-sm md:text-sm font-Mazzard-Regular w-100 sm:w-62 md:w-45 lg:w-47 xl:w-53 2xl:w-55 ">
                                            {item.para}
                                        </p>
                                    </div>

                                    <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </a>
                            </section>
                        ))}
                    </div>

                    {/* Left Button */}
                    <button
                        type="button"
                        onClick={prevSlide}
                        className="absolute top-1/2 -translate-y-1/2 -translate-x-1  sm:-translate-x-4  lg:-translate-x-3 xl:-translate-x-4 2xl:translate-x-15 left-0 z-50 cursor-pointer"
                    >
                        <span className="flex items-center justify-center w-12 h-12 sm:w-9 sm:h-9 rounded-full bg-gray-900 hover:bg-sharp-pink text-white shadow-lg">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </span>
                    </button>

                    {/* Right Button */}
                    <button
                        type="button"
                        onClick={nextSlide}
                        className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-2 sm:translate-x-1 xl:translate-x-4 2xl:-translate-x-17 z-50 cursor-pointer"
                    >
                        <span className="flex items-center justify-center w-12 h-12 sm:w-9 sm:h-9 rounded-full bg-gray-900 hover:bg-sharp-pink text-white shadow-lg">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </button>
                </div>

                {/* CTA Button */}
                <section className="py-6 flex justify-center items-center w-full">
                    <button
                        type="button"
                        onClick={() => alert("View Menu")}
                        className="inline-flex items-center justify-center gap-1 font-Mazzard-Regular text-white text-sm bg-sharp-pink px-6 py-2.5 rounded-4xl hover:cursor-pointer"
                    >
                        View Menu
                        <img className="h-3 invert" src="next.svg" alt="next" />
                    </button>
                </section>

            </div>

        </main>
    )
}

export default Gallery