import React, { useRef } from 'react'

const Social = () => {
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
        { img: "/images/section8/1.jpg", icon: "facebook.svg", link: "https://facebook.com" },
        { img: "/images/section8/2.png", icon: "insta3.svg", link: "https://instagram.com" },
        { img: "/images/section8/3.jpg", icon: "whatsapp.svg", link: "https://wa.me/1234567890" },
        { img: "/images/section8/4.jpg", icon: "youtube.svg", link: "https://youtube.com" },
        { img: "/images/section8/5.jpg", icon: "twitter.svg", link: "https://twitter.com" },
        { img: "/images/section8/6.jpg", icon: "snapchat.svg", link: "https://snapchat.com" },
        { img: "/images/section8/7.jpg", icon: "tiktok.svg", link: "https://tiktok.com" },
        { img: "/images/section8/8.jpg", icon: "linkedin.svg", link: "https://linkedin.com" },
    ]

    return (
        <div className="maincontainer w-full h-177">
            <div className="flex flex-col items-center justify-center">

                {/* TITLE */}
                <div className="py-16 pb-7">
                    <h5 className="px-8 font-Schotis-Bold text-3xl tracking-wide">
                        Get Social With @Chillberry
                    </h5>
                </div>

                {/* CAROUSEL WRAPPER */}
                <div className="relative w-full mx-auto">

                    {/* CAROUSEL */}
                    <div
                        ref={carouselRef}
                        className="carousel w-full overflow-hidden scroll-smooth flex h-110"
                    >
                        {images.map((item, index) => (
                            <div key={index} className="carousel-item w-1/4">
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    draggable="false"
                                    className="relative block w-full h-full overflow-hidden group cursor-pointer hover:z-10"
                                >
                                    {/* IMAGE */}
                                    <img
                                        src={item.img}
                                        alt=""
                                        draggable="false"
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />

                                    {/* OVERLAY */}
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* CENTER ICON */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <img
                                            src={item.icon}
                                            alt=""
                                            className="w-16 h-16 invert"
                                        />
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* PREVIOUS BUTTON */}
                    <button
                        type="button"
                        onClick={prevSlide}
                        className="absolute top-1/2 -translate-y-1/2 left-7 z-50 cursor-pointer"
                    >
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 hover:bg-sharp-pink text-white shadow-lg">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </span>
                    </button>

                    {/* NEXT BUTTON */}
                    <button
                        type="button"
                        onClick={nextSlide}
                        className="absolute top-1/2 -translate-y-1/2 right-7 z-50 cursor-pointer"
                    >
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 hover:bg-sharp-pink text-white shadow-lg">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </button>
                </div>

                {/* CTA BUTTON */}
                <div className="py-11 flex">
                    <button
                        type="button"
                        onClick={() => alert("Order Now")}
                        className="inline-flex items-center justify-center gap-1 font-Mazzard-Regular text-white text-sm bg-sharp-pink px-6 py-2.5 rounded-4xl hover:cursor-pointer"
                    >
                        Order Now
                        <img className="h-3 invert" src="next.svg" alt="next" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Social
