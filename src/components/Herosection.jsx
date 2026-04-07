import React, { useState } from 'react'

const SocialIcons = () => (
    <div className='flex gap-1.5 sm:gap-3 items-center'>
        <a href="https://www.linkedin.com" target='blank' aria-label="LinkedIn" className="text-black hover:text-sharp-pink transition-colors">
            <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-180.000000, -7479.000000)" fill="currentColor">
                        <g transform="translate(56.000000, 160.000000)">
                            <path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z" />
                        </g>
                    </g>
                </g>
            </svg>
        </a>
        <a href="https://www.facebook.com" target='blank' aria-label="Facebook" className="text-black hover:text-sharp-pink transition-colors">
            <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5" viewBox="-5 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-385.000000, -7399.000000)" fill="currentColor">
                        <g transform="translate(56.000000, 160.000000)">
                            <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z" />
                        </g>
                    </g>
                </g>
            </svg>
        </a>
        <a href="https://www.instagram.com" target='blank' aria-label="Instagram" className="text-black hover:text-sharp-pink transition-colors">
            <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0z" />
                <path fill="currentColor" fillRule="nonzero" d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
            </svg>
        </a>
    </div>
)

const items = [
    { key: "box1", label: "Twist\nTemptation", imgClass: "w-7 h-7 lg:w-9 lg:h-9" },
    { key: "box2", label: "chilly-\nchocolate", imgClass: "w-8 h-8 lg:w-10 lg:h-10" },
    { key: "box3", label: "chocolate\nalmond", imgClass: "w-9 h-9 lg:w-11 lg:h-11" },
    { key: "box4", label: "delicious\ntriplet", imgClass: "w-10 h-10 lg:w-12 lg:h-12" },
]

const images = {
    box1: "/images/section1/TwistTemptation.png",
    box2: "/images/section1/chillychoc.png",
    box3: "/images/section1/chocalmonds.png",
    box4: "/images/section1/deliciouschoc.png",
}

const Herosection = () => {
    const [ActiveItem, setActiveItem] = useState("box1")

    return (
        <main className='w-full bg-baby-pink text-black'>
            <div className='max-w-[1550px] mx-auto'>

                {/* MOBILE (< md) */}
                <section className='flex flex-col items-center text-center md:hidden px-5 pt-8 pb-12 gap-4' aria-labelledby="hero-heading-mobile">

                    <h1 id="hero-heading-mobile" className='text-4xl tracking-wider font-Schotis-SemiBold leading-tight'>
                        Freeze the <br /> Moment
                    </h1>

                    <p className='font-Mazzard-Regular text-xs text-gray-500 max-w-xs leading-relaxed'>
                        Every scoop tells a story—of laughter, sunshine and sweet
                        memories. At our creamery, we don't just serve ice cream;
                        we capture life's little joys in every swirl and sprinkle.
                    </p>

                    <div className='relative bg-light-cement rounded-[40px] mx-auto mt-2
                                    w-[300px] h-[310px] sm:w-[380px] sm:h-[370px]'>

                        <img
                            src={images["box1"]}
                            alt="Twist Temptation Ice Cream"
                            className='absolute -bottom-5 sm:-bottom-6 left-1/2 -translate-x-1/2
                                        w-[100%] sm:w-[95%] object-contain'
                        />

                        <aside className="absolute bottom-0 right-0 translate-x-[28%] sm:translate-x-[20%] translate-y-[30%]
                                        bg-white w-20 h-20 sm:w-24 sm:h-24 rounded-2xl shadow-xl z-10
                                        flex flex-col items-center justify-center gap-1.5">
                            <span className="text-[10px] font-Mazzard-Regular">Follow us on</span>
                            <SocialIcons />
                        </aside>
                    </div>

                    <div className='h-7' aria-hidden="true" />

                    <button
                        type="button"
                        onClick={() => alert("View Menu")}
                        className="flex items-center justify-center gap-1 font-Mazzard-Regular text-white text-xs bg-sharp-pink px-5 py-2 rounded-4xl hover:cursor-pointer"
                    >
                        View Menu
                        <img className="h-2.5 invert" src="next.svg" alt="" aria-hidden="true" />
                    </button>
                </section>

                {/* DESKTOP ROW (md+) */}
                <section className='hidden md:flex flex-row items-center justify-between
                                gap-4 lg:gap-8 xl:gap-12
                                px-8 md:px-10 lg:px-16 xl:px-20 2xl:px-28
                                py-8 md:py-10 lg:py-6 lg:pt-3 xl:py-16  md:pb-25 lg:pb-0 xl:pb-0'
                         aria-labelledby="hero-heading-desktop">

                    {/*LEFT CONTENT*/}
                    <div className='relative flex-shrink-0
                                    w-[44%] md:w-[46%] lg:w-[48%] xl:w-[50%]'>

                        <div className='diagonalparent py-4 hidden lg:block' aria-hidden="true">
                            <div className='diagonal bg-white px-5 py-37 md:py-30 lg:py-25 xl:py-35 lg:translate-y-5 xl:-translate-y-2 lg:-translate-x-90 xl:-translate-x-110 rounded-4xl rotate-22 -translate-x-100' />
                        </div>

                        <div className='relative z-10 pl-0 md:pl-2 lg:pl-10 xl:pl-16 pt-4 md:pt-0 lg:pt-8 lg:-translate-y-45 xl:-translate-y-73 '>

                            <h1 id="hero-heading-desktop" className='font-Schotis-SemiBold tracking-wider leading-tight
                                           text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>
                                Freeze the <br /> Moment
                            </h1>

                            <p className='font-Mazzard-Regular text-gray-500 leading-relaxed
                                          text-[11px] md:text-xs lg:text-sm
                                          mt-3 md:mt-4 lg:mt-5
                                          max-w-[260px] md:max-w-xs lg:max-w-sm xl:max-w-md'>
                                Every scoop tells a story—of laughter, sunshine and sweet
                                memories. At our creamery, we don't just serve ice cream;
                                we capture life's little joys in every swirl and sprinkle.
                            </p>

                            <button
                                type="button"
                                onClick={() => alert("View Menu")}
                                className="flex items-center justify-center gap-1 font-Mazzard-Regular text-white bg-sharp-pink rounded-4xl hover:cursor-pointer
                                           text-xs md:text-xs lg:text-sm
                                           px-4 py-2 md:px-5 md:py-2 lg:px-6 lg:py-2.5
                                           mt-4 md:mt-5 lg:mt-6 "
                            >
                                View Menu
                                <img className="h-2.5 lg:h-3 invert" src="next.svg" alt="" aria-hidden="true" />
                            </button>

                            {/* Flavor Selector Navigation */}
                            <div className='flex gap-1.5 md:gap-2 lg:gap-3 xl:gap-4 mt-6 md:mt-7 lg:mt-10 xl:mt-22' aria-label="Flavor selection">
                                {items.map(item => (
                                    <button
                                        key={item.key}
                                        type="button"
                                        onClick={() => setActiveItem(item.key)}
                                        aria-pressed={ActiveItem === item.key}
                                        className={`flex flex-col justify-center items-center rounded-2xl lg:rounded-3xl cursor-pointer
                                                    px-2 md:px-2.5 lg:px-3 pt-1 pb-1.5 md:pb-2
                                                    transition-all
                                                    ${ActiveItem === item.key ? "bg-white shadow-sm" : "bg-transparent"}`}
                                    >
                                        <img className={item.imgClass} src={images[item.key]} alt={item.key.replace('box', 'Flavor ')} />
                                        <span className='font-Mazzard-Regular text-gray-800 whitespace-pre-line text-center
                                                        text-[9px] md:text-[10px] lg:text-xs xl:text-sm
                                                        mt-1.5 md:mt-2'>
                                            {item.label}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGE AREA */}
                    <div className='flex-shrink-0
                                    w-[52%] md:w-[50%] lg:w-[48%] xl:w-[46%]
                                    flex justify-end'>

                        <div className='relative bg-light-cement 
                                        rounded-[50px] md:rounded-[60px] lg:rounded-[80px] xl:rounded-[95px]
                                        w-full h-[300px]  md:h-[350px] lg:h-[500px] xl:h-[570px] lg:-translate-y-10 xl:-translate-y-20'>

                            <img
                                key={ActiveItem}
                                className='absolute bottom-0 md:-bottom-2 left-1/2 -translate-x-1/2
                                           w-[90%]  md:w-[82%] lg:w-[90%] xl:w-[95%] md:translate-y-7 xl:translate-y-13
                                           object-contain
                                           transition-all duration-300'
                                src={images[ActiveItem]}
                                alt={`Showcasing ${ActiveItem}`}
                            />

                            <aside className="absolute bottom-0 right-0
                                            translate-x-[30%] translate-y-[30%]
                                            bg-white rounded-2xl lg:rounded-3xl shadow-xl z-10
                                            flex flex-col items-center justify-center
                                            w-24 h-24 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36
                                            gap-1.5 lg:gap-2 ">
                                <span className="font-Mazzard-Regular text-[10px] md:text-xs lg:text-sm">
                                    Follow us on
                                </span>
                                <SocialIcons />
                            </aside>
                        </div>
                    </div>

                </section>

            </div>
        </main>
    )
}

export default Herosection