import React, { useEffect, useState } from 'react'

const SpecialOffers = () => {

    const targetTime = new Date("2026-04-18T23:59:59").getTime()

    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    })

    const [isExpired, setIsExpired] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = targetTime - now

            if (distance <= 0) {
                clearInterval(interval)
                setIsExpired(true)
                return
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
            const minutes = Math.floor((distance / (1000 * 60)) % 60)
            const seconds = Math.floor((distance / 1000) % 60)

            setTimeLeft({
                days: String(days).padStart(2, "0"),
                hours: String(hours).padStart(2, "0"),
                minutes: String(minutes).padStart(2, "0"),
                seconds: String(seconds).padStart(2, "0"),
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    if (isExpired) return null

    return (
        <div className='bg-chocolate-brown w-full flex justify-center'>

            {/* MAX WIDTH CONTAINER */}
            <div className='w-full max-w-[1550px] flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 lg:px-16 xl:px-20 py-10'>

                {/* LEFT */}
                <div className='flex flex-col w-full max-w-[700px] items-center lg:items-center text-center lg:text-left'>

                    <p className='font-Mazzard-Regular text-sharp-pink text-sm lg:-translate-x-47'>
                        SPECIAL OFFERS
                    </p>

                    <h5 className='font-Schotis-Bold text-2xl lg:-translate-x-12 sm:text-3xl lg:text-4xl text-white tracking-wide py-4'>
                        Sweet Deals Ending in <br /> Hours
                    </h5>

                    {/* TIMER - FIXED */}
                    <div className='grid grid-cols-4 gap-2 sm:gap-3 py-6 w-full max-w-[380px] sm:max-w-[470px] lg:max-w-[500px]'>

                        {[ 
                            { value: timeLeft.days, label: "Days" },
                            { value: timeLeft.hours, label: "Hours" },
                            { value: timeLeft.minutes, label: "Minutes" },
                            { value: timeLeft.seconds, label: "Seconds" }
                        ].map((item, index) => (
                            <div 
                                key={index} 
                                className='h-20 sm:h-28 rounded-2xl flex flex-col justify-center items-center border border-sharp-pink text-sharp-pink font-Schotis-SemiBold tracking-widest text-2xl sm:text-4xl lg:text-5xl'
                            >
                                {item.value}
                                <span className='font-Mazzard-Regular text-[12px] sm:text-xs text-gray-400 tracking-wider lg:mt-3  mt-2'>
                                    {item.label}
                                </span>
                            </div>
                        ))}

                    </div>

                    <p className='font-Mazzard-Regular text-gray-400 lg:translate-x-15 text-sm leading-relaxed max-w-[500px] sm:max-w-[550px] lg:max-w-[620px]'>
                        Don't miss out on our limited-time ice cream offers! Whatever you're craving classic favorites or 
                        bold new flavors now's the perfect time to treat yourself. These sweet deals are melting fast — 
                        grab yours before they're gone!
                    </p>

                    <div className="py-8 lg:-translate-x-45">
                        <button 
                            type="button" 
                            onClick={() => alert("Order Now")}
                            className="flex items-center justify-center gap-2 font-Mazzard-Regular text-white text-sm bg-sharp-pink px-6 py-2.5 rounded-4xl hover:cursor-pointer"
                        >
                            Order Now
                            <img className="h-3 invert" src="next.svg" alt="next" />
                        </button>
                    </div>

                </div>

                {/* RIGHT IMAGE */}
                <div className='relative w-full lg:w-[45%] h-[300px] sm:h-[400px] lg:h-[500px] mt-10 lg:mt-0 hidden lg:block'>
                    <div className='absolute right-0 top-1/2 -translate-y-1/2'>
                        <img
                            src="/images/section4/glass.png"
                            alt="ice cream"
                            className="max-w-[360px] xl:max-w-[450px] object-contain"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SpecialOffers