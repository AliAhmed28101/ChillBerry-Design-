import React, { useState } from 'react';

const Testimonials = () => {
    // 1. Setup state to track which slide is active
    const [currentIndex, setCurrentIndex] = useState(0);

    // 2. Define your slides data
    const slides = [
        {
            text: "Chillberry Ice Cream is honestly one of the smoothest and most refreshing ice creams I’ve ever tasted. The flavors are perfectly balanced—not overly sweet—and every scoop feels premium. It’s become my go-to dessert.",
            name: "Ayesha Khan",
            role: "Food Blogger & Dessert Critic",
            avatar: "/images/section6/AyeshaKhan.jpg",
        },
        {
            text: "From texture to flavor, Chillberry gets everything right. The freshness is noticeable, and the ingredients feel high-quality. My customers constantly ask for it by name—it’s a crowd favorite.",
            name: "Daniel Roberts",
            role: "Café Owner",
            avatar: "/images/section6/DanielRoberts.jpg",
        },
        {
            text: "What I love about Chillberry Ice Cream is how light yet satisfying it feels. The flavors are clean, natural, and not overpowering. It’s a perfect balance between indulgence and refreshment.",
            name: "Neha Verma",
            role: "Nutrition & Wellness Consultant",
            avatar: "/images/section6/NehaVerma.jpg",
        },
        {
            text: "Chillberry has completely raised the bar for modern ice cream brands. The consistency, taste, and presentation are all top-tier. It’s the kind of product that keeps people coming back.",
            name: "James Walker",
            role: "Dessert Brand Consultant",
            avatar: "/images/section6/JamesWalker.jpg",
        }
    ];

    // 3. Navigation Functions
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className="maincontainer max-w-[1400px] mx-auto md:h-auto lg:h-[650px] relative overflow-hidden">
            {/* Background Curved Image */}
            <div className="left-0 max-w-[800px] max-h-[530px] md:max-w-[620px] md:h-[420px] lg:max-w-[670px] lg:h-[450px] xl:max-w-[750px] xl:h-[500px] hidden md:block rounded-e-full translate-y-20 md:translate-y-25 absolute overflow-hidden -translate-x-40 md:-translate-x-48">
                <img
                    className="w-full h-full object-cover"
                    src="/images/section6/curve.jpg"
                    alt="curve background"
                />
            </div>

            <div className="starting flex flex-col pt-16 items-center relative pb-30 md:pb-30 lg:pr-0 px-4">
                {/* Header Text */}
                <div className="textbox md:translate-x-40 lg:translate-x-15 text-center w-full max-w-2xl">
                    <div className="font-Mazzard-Regular text-sharp-pink text-xs sm:text-sm">
                        TESTIMONIALS
                        <div className="py-3.5 text-black font-Schotis-Bold text-2xl sm:text-3xl text-center md:text-center tracking-wide">
                            <p>What Our Clients Say</p>
                        </div>
                    </div>
                </div>

                {/* Carousel Border Box */}
                <div className="backborder border z-10 border-sharp-pink rounded-3xl w-full translate-x-3 lg:translate-x-20 max-w-[320px] h-[370px] sm:max-w-[580px] sm:max-h-[360px] md:max-w-[470px] md:h-[320px] lg:max-w-[580px] lg:h-[300px] xl:max-w-[650px] xl:h-[320px] md:translate-x-35 translate-y-3 relative">

                    {/* Carousel Container (The Baby Pink Background) */}
                    <div className="absolute inset-0 bg-baby-pink translate-y-3 -translate-x-3  rounded-3xl p-6 md:p-10 flex flex-col justify-center">

                        {/* Carousel wrapper */}
                        <div className="relative h-full w-full">
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`duration-700 ease-in-out absolute inset-0 transition-opacity flex flex-col justify-between ${
                                        index === currentIndex ? "opacity-100 z-20" : "opacity-0 z-10 pointer-events-none"
                                    }`}
                                >
                                    {/* Testimonial Text */}
                                    <p className="text-gray-600 font-Mazzard-Regular text-sm w-65 sm:text-lg sm:w-120 md:text-sm lg:text-sm xl:text-lg md:w-100 lg:w-115 xl:w-140 py-3 tracking-wider leading-relaxed">
                                        {slide.text}
                                    </p>

                                    <div className='flex justify-between items-end w-full pb-8 md:pb-0'>
                                        <div className='flex gap-3 md:gap-5 items-center'>
                                            {/* User Avatar */}
                                            <div className="md:w-16 md:h-16 sm:w-18 sm:h-18 w-14 h-14 -translate-y-4 sm:translate-y-2 md:-translate-y-4 rounded-full border-2 border-white overflow-hidden shadow-sm bg-white shrink-0">
                                                <img src={slide.avatar} alt={slide.name} className="w-full h-full object-cover" />
                                            </div>

                                            {/* User Info Section */}
                                            <div className='flex flex-col gap-1 -translate-y-4 sm:translate-y-2 md:-translate-y-4'>
                                                <h4 className="font-Schotis-Bold md:text-lg sm:text-lg text-sm text-gray-900 leading-tight">
                                                    {slide.name}
                                                </h4>
                                                <p className="text-gray-500 text-[10px] md:text-sm sm:text-lg lg:text-xs xl:text-sm font-Mazzard-Regular">
                                                    {slide.role}
                                                </p>
                                                <div className='flex gap-0.5'>
                                                    {[...Array(5)].map((_, i) => (
                                                        <img key={i} className='h-3 md:h-3 sm:h-4' src="star1.svg" alt="star" />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Quote Icon SVG */}
                                        <div className="opacity-10 hidden md:block">
                                            <svg width="60" height="50" viewBox="0 0 24 24" fill="currentColor" className="text-sharp-pink">
                                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 21C14.017 14.462 16.542 12.677 21.017 10V12.03C18.445 13.387 17.017 14.856 17.017 17H21.017V21H14.017ZM3.017 21V18C3.017 16.8954 3.91243 16 5.017 16H8.017C9.12157 16 10.017 16.8954 10.017 18V21C10.017 22.1046 9.12157 23 8.017 23H5.017C3.91243 23 3.017 22.1046 3.017 21ZM3.017 21C3.017 14.462 5.542 12.677 10.017 10V12.03C7.445 13.387 6.017 14.856 6.017 17H10.017V21H3.017Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Indicators */}
                        <div className="absolute z-50 flex bottom-6 left-6 md:left-10 space-x-2 translate-y-15 sm:translate-y-15">
                            {slides.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                                        i === currentIndex ? "bg-sharp-pink" : "bg-gray-300"
                                    }`}
                                />
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            type="button"
                            onClick={prevSlide}
                            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-5 z-50 cursor-pointer"
                        >
                            <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-900 hover:bg-sharp-pink text-white shadow-lg">
                                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </span>
                        </button>

                        <button
                            type="button"
                            onClick={nextSlide}
                            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-5 z-50 cursor-pointer"
                        >
                            <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-900 hover:bg-sharp-pink text-white shadow-lg">
                                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>

                {/* Doodle Image */}
                <div className="absolute right-10 -bottom-25 z-30 hidden lg:block">
                    <img className="w-60 h-60 xl:w-65 xl:h-65 object-contain" src="/images/section6/doodle.png" alt="doodle" />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;