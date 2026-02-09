import React, { useState } from 'react'

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
        <div className="maincontainer w-full h-180 relative">
            {/* Background Curved Image */}
            <div className="left-0 w-[800px] h-[530px] rounded-e-full translate-y-20 absolute overflow-hidden -translate-x-40">
                <img
                    className="w-full h-full object-cover"
                    src="/images/section6/curve.jpg"
                    alt="curve background"
                />
            </div>

            <div className="starting flex flex-col py-16 items-center relative pb-50">
                {/* Header Text */}
                <div className="textbox translate-x-45">
                    <div className="font-Mazzard-Regular text-sharp-pink text-sm uppercase tracking-widest">
                        Testimonials
                        <div className="py-3.5 text-black font-Schotis-Bold text-4xl tracking-wide">
                            <h5>What's Our Client Say</h5>
                        </div>
                    </div>
                </div>

                {/* Carousel Border Box */}
                <div className="backborder border z-10 border-sharp-pink rounded-3xl w-[700px] h-[350px] translate-x-35 translate-y-3 relative">

                    {/* Carousel Container (The Baby Pink Background) */}
                    <div className="absolute inset-0 bg-baby-pink translate-y-3 -translate-x-3 rounded-3xl p-10 flex flex-col justify-center">

                        {/* Carousel wrapper */}
                        <div className="relative h-full w-full">
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`duration-700 ease-in-out absolute inset-0 transition-opacity flex flex-col justify-between ${index === currentIndex ? "opacity-100 z-20" : "opacity-0 z-10"
                                        }`}
                                >


                                    {/* Testimonial Text */}
                                    < p className="text-gray-600 font-Mazzard-Regular text-md py-3 pl-0 tracking-wider w-150 px-10 leading-relaxed pr-10" >
                                        {slide.text}
                                    </p >

                                    <div className='flex justify-between -translate-y-10 w-135'>

                                        <div className='flex gap-4'>


                                            {/* User Info Section */}

                                            <div className='flex  gap-5'>


                                                <div className="w-18 h-18 rounded-full border-2 border-white overflow-hidden shadow-sm bg-white">
                                                    <img src={slide.avatar} alt={slide.name} className="w-full h-full object-cover" />
                                                </div>


                                                <div className='flex flex-col gap-2'>

                                                    <h4 className="font-Schotis-Bold text-xl text-gray-900">{slide.name}</h4>


                                                    <p className="text-gray-500 text-sm font-Mazzard-Regular">{slide.role}</p>


                                                    <div className='flex '>

                                                        <img className='h-4' src="star1.svg" alt="" />
                                                        <img className='h-4' src="star1.svg" alt="" />

                                                        <img className='h-4' src="star1.svg" alt="" />

                                                        <img className='h-4' src="star1.svg" alt="" />

                                                        <img className='h-4' src="star1.svg" alt="" />


                                                    </div>



                                                </div>
                                            </div>



                                        </div>





                                        {/* Quote Icon SVG (Pink background from your image) */}

                                        <div className="opacity-10">
                                            <svg width="80" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-sharp-pink">
                                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 21C14.017 14.462 16.542 12.677 21.017 10V12.03C18.445 13.387 17.017 14.856 17.017 17H21.017V21H14.017ZM3.017 21V18C3.017 16.8954 3.91243 16 5.017 16H8.017C9.12157 16 10.017 16.8954 10.017 18V21C10.017 22.1046 9.12157 23 8.017 23H5.017C3.91243 23 3.017 22.1046 3.017 21ZM3.017 21C3.017 14.462 5.542 12.677 10.017 10V12.03C7.445 13.387 6.017 14.856 6.017 17H10.017V21H3.017Z" />
                                            </svg>
                                        </div>

                                    </div>








                                </div>

                            ))}
                        </div>

                        {/* Indicators (Positioned bottom left like image) */}
                        <div className="absolute z-50 flex bottom-6 left-10 space-x-2 translate-y-13 translate-x-3">
                            {slides.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`w-3 h-3 rounded-full transition-all cursor-pointer ${i === currentIndex ? "bg-sharp-pink " : "bg-gray-300"
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Prev Button (Centered on left border) */}
                        <button
                            type="button"
                            onClick={prevSlide}
                            className="absolute top-1/2 -translate-y-1/2 -left-5 z-50 cursor-pointer"
                        >
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 hover:bg-gray-800 text-white shadow-lg">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </span>
                        </button>

                        {/* Next Button (Centered on right border) */}
                        <button
                            type="button"
                            onClick={nextSlide}
                            className="absolute top-1/2 -translate-y-1/2 -right-5 z-50 cursor-pointer"
                        >
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-sharp-pink hover:bg-sharp-pink/90 text-white shadow-lg">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>

                {/* Doodle Image */}
                <div className="absolute right-5 -bottom-12 z-30">
                    <img className="w-72 h-72 object-contain" src="/images/section6/doodle.png" alt="doodle" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials








