import React from 'react'

import { useState } from 'react'

const Contactus = () => {


    const [form, setform] = useState({ name: "", phone: "", email: "", subject: "", message: "" })



    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        setform({ name: "", phone: "", email: "", subject: "", message: "" })
        console.log("Form Submitted:", form);

    };


    return (

        <main className='maincontainer relative flex flex-col h-187 w-full overflow-hidden'>



            <section
                className='absolute inset-0 bg-no-repeat bg-cover bg-center opacity-80'
                style={{ backgroundImage: "url('/images/section7/1.jpg')", }}
            />



            <div className="absolute inset-0 z-10 bg-black/85"></div>


            <div className='startingcontent flex flex-col  w-full z-20 h-50'>


                <section className='startingcontent flex flex-col items-center py-16 w-full h-50 '>
                    <h className='font-Mazzard-Regular text-sharp-pink text-sm text-center'>
                        CONTACT US
                    </h>


                    <span className='font-Schotis-Bold text-3xl tracking-wide py-2 text-white'>
                        <h5 className=''>Get In Touch</h5>

                    </span>


                    <p className='font-Mazzard-Regular py-1 text-sm text-white'>
                        Let’s connect, share ideas, and create meaningful experiences that elevate your<br />

                        <span className='px-40'>
                            brand and inspire lasting impact</span>
                    </p>

                </section>



                <div className='contactscontainer w-390  flex  gap-4 py-7 px-50'>


                    <section className='flex flex-col text-white h-full  z-20'>


                        <h className='font-Mazzard-Regular text-sharp-pink text-sm '>
                            CALL US NOW
                        </h>


                        <span className='font-Mazzard-Regular py-4 pb-1 text-shadow-white text-sm '>
                            <span> +8123 456 0 000 </span>


                        </span>

                        <span className='font-Mazzard-Regular  text-shadow-white text-sm '>

                            <span> +8123 456 0 011 </span>

                        </span>


                    </section>



                    <section class="rotate-90 whitespace-nowrap flex items-center justify-center">
                        <span className="underline decoration-wavy decoration-sharp-pink">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                    </section>



                    <section className='flex flex-col gap-2  text-white h-full z-20'>


                        <h className='font-Mazzard-Regular text-sharp-pink text-sm '>
                            EMAIL
                        </h>


                        <div className='font-Mazzard-Regular py-2 text-shadow-white text-sm '>
                            <span>info@chillberry.com.au</span>

                        </div>


                    </section>




                    <section class="rotate-90 whitespace-nowrap flex items-center justify-center">
                        <span className="underline decoration-wavy decoration-sharp-pink">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                    </section>


                    <section className='flex flex-col gap-2 text-white h-full   z-20'>


                        <h className='font-Mazzard-Regular text-sharp-pink text-sm '>
                            FIND OUR STORE
                        </h>

                        <span className='font-Mazzard-Regular py-2 text-shadow-white text-sm '>
                            <span>1238 Maple Street Boulder,<br /> CO 80302 United States
                            </span>

                        </span>



                    </section>



                    <section class="rotate-90 whitespace-nowrap flex items-center justify-center">
                        <span className="underline decoration-wavy decoration-sharp-pink">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                    </section>




                    <section className='flex flex-col gap-2  text-white h-full  z-20'>


                        <h className='font-Mazzard-Regular text-sharp-pink text-sm '>
                            OPENING HOURS
                        </h>

                        <span className='font-Mazzard-Regular py-2 text-shadow-white text-sm '>
                            <span>1238 Maple Street Boulder,<br /> CO 80302 United States
                            </span>

                        </span>


                    </section>



                </div>


            </div>


            <div className='mapandform flex gap-5 z-20 py-40 px-50 w-full'>


                <section className='map z-20 '>

                    <img className='w-129 h-77 rounded-2xl' src="/images/section7/map.jpeg" alt="" />

                </section>




                <form onSubmit={handleSubmit} className='form flex flex-col text-white w-128 gap-4 h-77 rounded-2xl bg-black/50 backdrop-blur-xs'>


                    <div className='flex px-12 gap-7 py-8 pb-0 '>

                        <section className='Name  border border-white/40 rounded-[7px] w-50 flex '>

                            <input className='px-3 py-1.5 text-sm w-40 outline-none' type="text" placeholder='Name' name='name' value={form.name} onChange={handleChange} />


                            <div className='h-full w-full py-1 '>
                                <img className='w-5 h-6 invert ' src="person.svg" alt="" />
                            </div>

                        </section>


                        <section className='Phone border border-white/40 rounded-[7px] w-50 flex'>

                            <input className='px-3 py-1.5 text-sm w-40 outline-none' type="text" placeholder='Phone' name='phone' value={form.phone} onChange={handleChange} />


                            <div className=' h-full w-full py-1 '>
                                <img className='w-5 h-6 invert ' src="contact.svg" alt="" />
                            </div>
                        </section>

                    </div>



                    <div className='flex px-12 gap-7'>

                        <section className='Email border border-white/40 rounded-[7px] w-50 flex '>

                            <input className='px-3 py-1.5 text-sm w-40 outline-none' type="text" placeholder='Email' name='email' value={form.email} onChange={handleChange} />

                            <div className=' h-full w-full py-1 '>
                                <img className='w-5 h-7 invert ' src="email.svg" alt="" />
                            </div>
                        </section>


                        <section className='Subject border border-white/40 rounded-[7px] w-50 flex relative items-center bg-transparent'>
                            <select onChange={handleChange} name='subject' value={form.subject} className='appearance-none px-3 py-1.5 text-sm w-full outline-none text-white/50 cursor-pointer'>
                                <option className="text-sharp-pink" value="Subject">Subject</option>
                                <option className="text-sharp-pink" value="inquiry">General Inquiry</option>
                                <option className="text-sharp-pink" value="support">Technical Support</option>
                                <option className="text-sharp-pink" value="feedback">Feedback</option>
                            </select>

                            {/* Your Icon - Positioned absolutely so it doesn't interfere with clicks */}
                            <div className='absolute right-2 pointer-events-none'>
                                <img className='w-5 h-5 invert opacity-70' src="dropdown.svg" alt="arrow" />
                            </div>
                        </section>

                    </div>


                    <section className='flex px-12'>

                        <div className='Message border border-white/40 rounded-[7px] w-103 py-3.5 '>

                            <textarea className='px-3 resize-none text-sm w-103 outline-none' name='message' value={form.message} onChange={handleChange} type="text" placeholder='Message(optional)  ' />

                        </div>


                    </section>


                    <section className='flex justify-end py-2 '>

                        <button type="submit" onClick={() => alert("Form is submitted!")} className=" flex items-center justify-center gap-1 font-Mazzard-Regular text-white text-sm bg-sharp-pink px-6 py-2.5 rounded-4xl hover:cursor-pointer mr-13">
                            Submit Now

                            <img className="h-3 invert" src="next.svg" alt="next" />

                        </button>

                    </section>

                </form>
            
            </div>

        </main>
    )
}

export default Contactus








