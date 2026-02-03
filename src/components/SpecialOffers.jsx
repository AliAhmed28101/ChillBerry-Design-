import React, { useEffect, useState } from 'react'


const SpecialOffers = () => {


    const targetTime = new Date("2026-02-10T23:59:59").getTime()

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
        <div className='mainbody bg-chocolate-brown w-full flex justify-evenly items-center h-140 px-20'>





            <div className='left flex flex-col py-10 w-340 h-130 px-15'>


                <div className='textboxcontainer flex flex-col gap-6 max-w-2xl'>

                    <div className='text px-8'>

                        <p className='font-Mazzard-Regular text-sharp-pink text-sm'>
                            SPECIAL OFFERS
                        </p>


                    </div>


                </div>

                <div className='py-3.5 '>
                    <span className='font-Schotis-Bold text-4xl text-white tracking-wide'>
                        <h5 className='px-8'>Sweet Deals Ending in <br /> Hours</h5>

                    </span>
                </div>



                <div className='timer flex gap-2 py-6 items-center px-7 '>

                    <div className='w-28 h-25 py-2 rounded-2xl text-center border text-sharp-pink border-sharp-pink font-Schotis-SemiBold tracking-widest text-5xl'>
                        {timeLeft.days}


                        <div className='font-Mazzard-Regular text-sm text-gray-400 tracking-wider py-2 text-center'>
                            Days
                        </div>


                    </div>


                    <div className='w-28 h-25 py-2 rounded-2xl text-center border text-sharp-pink border-sharp-pink font-Schotis-SemiBold tracking-widest text-5xl'>
                        {timeLeft.hours}


                        <div className='font-Mazzard-Regular text-sm text-gray-400 tracking-wider py-2 text-center'>
                            Hours
                        </div>


                    </div>


                    <div className='w-28 h-25 py-2 rounded-2xl text-center border text-sharp-pink border-sharp-pink font-Schotis-SemiBold tracking-widest text-5xl'>
                        {timeLeft.minutes}


                        <div className='font-Mazzard-Regular text-sm text-gray-400 tracking-wider py-2 text-center'>
                            Minutes
                        </div>


                    </div>


                    <div className='w-28 h-25 py-2 rounded-2xl text-center border text-sharp-pink border-sharp-pink font-Schotis-SemiBold tracking-widest text-5xl'>
                        {timeLeft.seconds}


                        <div className='font-Mazzard-Regular text-sm text-gray-400 tracking-wider py-2 text-center'>
                            Seconds
                        </div>


                    </div>


                </div>


                <div className='text-white px-7 py-2'>
                    <p className='font-Mazzard-Regular text-gray-400 text-sm' >

                        Don't miss out on our limited-time ice cream offers! Whatever you're craving classic favorites or <br />
                        bold new flavors now's the perfect time to treat yourself. These sweet deals are melting fast — <br />
                        grab yours before they're gone!

                    </p>
                </div>




                <div className="button px-8 py-10 w-60">



                    <button type="button" onClick={() => alert("Order Now")} className=" flex items-center justify-center gap-1 font-Mazzard-Regular text-white text-sm bg-sharp-pink px-6 py-2.5 rounded-4xl hover:cursor-pointer">
                        Order Now

                        <img className="h-3 invert" src="next.svg" alt="next" />

                    </button>


                </div>



            </div>







            <div className='right relative w-[45%] h-full '>

                {/* IMAGE WRAPPER */}
                <div className='absolute right-3 top-1/2 -translate-y-60'>
                    <img
                        src="/images/section4/glass.png"
                        alt=""
                        className="max-w-[500px] object-contain"
                    />
                </div>

            </div>









        </div>
    )
}

export default SpecialOffers








