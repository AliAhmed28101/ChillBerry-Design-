import React, { useRef } from "react"

const Social = () => {
    const carouselRef = useRef(null)

    const getItemsPerView = () => {
        const width = window.innerWidth
        if (width >= 1536) return 5
        if (width >= 1280) return 4
        if (width >= 1024) return 3
        if (width >= 640) return 2
        return 1
    }

    const nextSlide = () => {
        if (!carouselRef.current) return
        const items = getItemsPerView()
        const itemWidth = carouselRef.current.offsetWidth / items
        carouselRef.current.scrollBy({ left: itemWidth, behavior: "smooth" })
    }

    const prevSlide = () => {
        if (!carouselRef.current) return
        const items = getItemsPerView()
        const itemWidth = carouselRef.current.offsetWidth / items
        carouselRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" })
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
        <section className="w-full py-20">
            <div className="max-w-[1400px] mx-auto flex flex-col items-center justify-center">

                {/* TITLE */}
                <header className="pb-10 text-center">
                    <h2 className="px-6 font-Schotis-Bold text-2xl sm:text-3xl tracking-wide">
                        Get Social With @Chillberry
                    </h2>
                </header>

                {/* CAROUSEL WRAPPER */}
                <div className="relative w-full">

                    {/* CAROUSEL */}
                    <ul     
                        ref={carouselRef}
                        className="w-full overflow-hidden scroll-smooth flex list-none p-0 m-0"
                    >
                        {images.map((item, index) => (
                            <li
                                key={index}
                                className="
                                    shrink-0
                                    w-full
                                    sm:w-1/2
                                    md:w-1/3
                                    lg:w-1/3
                                    xl:w-1/4
                                    2xl:w-1/4
                                "
                            >
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    draggable="false"
                                    className="relative block w-full aspect-square overflow-hidden group cursor-pointer"
                                >
                                    <img
                                        src={item.img}
                                        alt=""
                                        draggable="false"
                                        className="
                                            w-full h-full
                                            object-cover
                                            transition-transform duration-300
                                            group-hover:scale-105
                                        "
                                    />

                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <img
                                            src={item.icon}
                                            alt=""
                                            className="w-20  h-20 sm:w-14 sm:h-14 invert"
                                        />
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* PREVIOUS BUTTON */}
                    <button
                        type="button"
                        onClick={prevSlide}
                        aria-label="Previous Slide"
                        className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 z-50 cursor-pointer"
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
                        aria-label="Next Slide"
                        className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 z-50 cursor-pointer"
                    >
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 hover:bg-sharp-pink text-white shadow-lg">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </button>
                </div>

                {/* CTA BUTTON */}
                <div className="pt-12">
                    <button
                        type="button"
                        onClick={() => alert("Order Now")}
                        className="
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            whitespace-nowrap
                            font-Mazzard-Regular
                            text-white
                            text-sm
                            bg-sharp-pink
                            px-6
                            py-2.5
                            rounded-full
                            cursor-pointer
                        "
                    >
                        <span>Order Now</span>
                        <img
                            className="h-3 w-3 shrink-0 invert"
                            src="next.svg"
                            alt=""
                        />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Social