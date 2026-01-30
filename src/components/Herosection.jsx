import React from 'react'

import { useState } from 'react'





const Herosection = () => {


    const images = {
        box1: "/images/section1/TwistTemptation.png",
        box2: "/images/section1/chillychoc.png",
        box3: "/images/section1/chocalmonds.png",
        box4: "/images/section1/deliciouschoc.png",
    };


    const boxDimensions = {
        box1: "h-[470px] w-[510px]",
        box2: "h-[750px] w-[800px]",
        box3: "h-[850px] w-[850px]",
        box4: "h-[650px] w-[650px]",
    };


    const [ActiveItem, setActiveItem] = useState("box1")


    return (


        <div className='maincontainer w-full flex gap-96 bg-baby-pink text-black pb-22'>


            <div className='left relative py-20'>
                <div className='textbox absolute z-10  px-44 py-8'>
                    <div className=' w-3xl'>

                        <h1 className='text-7xl tracking-wider font-Schotis-SemiBold'>Freeze the <br /> Moment</h1>

                        <div className='paratext py-6 w-114 font-Mazzard-Regular text-sm text-gray-500'>

                            <p>Every scoop tells a story—of laughter, sunshine and sweet <br /> memories. At our creamery, we don't just serve ice cream; <br /> we capture life's little joys in every swirl and sprinkle.</p>

                        </div>

                    </div>


                    <div className="button ">



                        <button type="button" onClick={() => alert("View Menu")} className=" flex items-center justify-center gap-1 font-Mazzard-Regular text-white text-sm bg-sharp-pink px-6 py-2.5 rounded-4xl hover:cursor-pointer">
                            View Menu

                            <img className="h-3 invert" src="next.svg" alt="next" />

                        </button>


                    </div>


                    <div className='itemboxes flex gap-4 py-12 px-3'>


                        <div onClick={() => setActiveItem("box1")} className={`item box1 flex flex-col justify-center items-center rounded-3xl  cursor-pointer px-3 pt-1   ${ActiveItem === "box1" ? "bg-white" : ""} `}>
                            <img className='w-9 h-9' src="/images/section1/TwistTemptation.png" alt="" />


                            <div className='text-sm text-center mt-6 font-Mazzard-Regular text-gray-800'>

                                Twist <br /> Temptation

                            </div>
                        </div>



                        <div onClick={() => setActiveItem("box2")} className={`item box2  flex flex-col justify-center items-center rounded-3xl  cursor-pointer px-3 pt-1 ${ActiveItem === "box2" ? "bg-white" : ""}  `}>
                            <img className='w-15 h-15' src="/images/section1/chillychoc.png" alt="" />

                            <div className='text-sm text-center py-3 font-Mazzard-Regular text-gray-800'>
                                chilly- <br /> chocolate
                            </div>
                        </div>



                        <div onClick={() => setActiveItem("box3")} className={`item box3 flex flex-col justify-center items-center rounded-3xl  cursor-pointer px-3 pt-1 ${ActiveItem === "box3" ? "bg-white" : ""} `}>
                            <img className='w-15 h-15' src="/images/section1/chocalmonds.png" alt="" />

                            <div className='text-sm text-center py-3 font-Mazzard-Regular text-gray-800'>
                                chocolate <br /> almond
                            </div>
                        </div>



                        <div onClick={() => setActiveItem("box4")} className={`item box4 flex flex-col justify-center items-center rounded-3xl  cursor-pointer px-3 pt-1 ${ActiveItem === "box4" ? "bg-white" : ""} `}>
                            <img className='w-15 h-15' src="/images/section1/deliciouschoc.png" alt="" />

                            <div className='text-sm text-center py-3 font-Mazzard-Regular text-gray-800'>
                                delicious <br /> chocolate
                            </div>
                        </div>




                    </div>


                </div>



                <div className='boxes'>



                </div>


                <div className='diagonalparent py-4 '>
                    <div className='diagonal  bg-white  px-39.5  py-37 rounded-4xl rotate-22 -translate-x-20'>
                    </div>
                </div>


            </div>








            <div className='right py-15 px-8'>
                <div className='CementBackground relative bg-light-cement py-62 w-full px-55  rounded-[95px] flex items-center justify-center'>

                    <div className={`absolute translate-y-10 flex items-center justify-center transition-all duration-300 ${boxDimensions[ActiveItem]}`}>
                        <img
                            className='max-w-full max-h-full object-contain'
                            src={images[ActiveItem]}
                            alt={ActiveItem}
                        />
                    </div>











                    <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/5 bg-white w-38 h-38 rounded-3xl shadow-xl z-10 flex flex-col items-center">
                        <div className="text-sm font-Mazzard-Regular py-12 pb-4">Follow us on
                        </div>


                        <div className='flex gap-3 items-start '>



                            <a
                                href="linkedin"
                                className="text-black hover:text-sharp-pink transition-colors"
                            >
                                <svg
                                    className="h-3.5 w-3.5"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g
                                            transform="translate(-180.000000, -7479.000000)"
                                            fill="currentColor"
                                        >
                                            <g transform="translate(56.000000, 160.000000)">
                                                <path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </a>




                            <a
                                href="facebook"
                                className="text-black hover:text-sharp-pink transition-colors"
                            >
                                <svg
                                    className="h-3.5 w-3.5"
                                    viewBox="-5 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g
                                            transform="translate(-385.000000, -7399.000000)"
                                            fill="currentColor"
                                        >
                                            <g transform="translate(56.000000, 160.000000)">
                                                <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </a>




                            <a
                                href="instagram"
                                className="text-black hover:text-sharp-pink transition-colors"
                            >
                                <svg
                                    className="h-4 w-4"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g>
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path
                                            fill="currentColor"
                                            fillRule="nonzero"
                                            d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
                                        />
                                    </g>
                                </svg>
                            </a>

                        </div>


                    </div>



                </div>




            </div>


        </div>



    )
}

export default Herosection
