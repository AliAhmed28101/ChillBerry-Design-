import React, { useState } from 'react';

const Contactus = () => {
    const [form, setform] = useState({ name: "", phone: "", email: "", subject: "", message: "" });

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setform({ name: "", phone: "", email: "", subject: "", message: "" });
        console.log("Form Submitted:", form);
    };

    return (
        <main className='maincontainer relative flex flex-col w-full overflow-hidden min-h-screen'>
            {/* Background Layer */}
            <section
                className='absolute inset-0 bg-no-repeat bg-cover bg-center opacity-80'
                style={{ backgroundImage: "url('/images/section7/1.jpg')" }}
            />

            <div className="absolute inset-0 z-10 bg-black/85"></div>

            <div className='startingcontent flex flex-col w-full z-20'>
                {/* Header Section */}
                <section className='flex flex-col items-center pt-16 pb-8 w-full'>
                    <h2 className='font-Mazzard-Regular text-sharp-pink text-sm text-center'>
                        CONTACT US
                    </h2>
                    <span className='font-Schotis-Bold text-3xl tracking-wide py-2 text-white'>
                        <h5>Get In Touch</h5>
                    </span>
                    <p className='font-Mazzard-Regular py-1 text-sm text-white text-center px-6'>
                        Let’s connect, share ideas, and create meaningful experiences that elevate your<br className="hidden lg:block" />
                        <span className='lg:px-40'> brand and inspire lasting impact</span>
                    </p>
                </section>

                {/* Contact Info Cards */}
                {/* FIX: Reduced xl:px-50 to xl:px-20 and added 2xl:px-50 to give more room on 1280-1380px screens */}
                <div className='contactscontainer w-full flex flex-col lg:flex-row justify-center items-center lg:items-start lg:gap-4 py-7 px-6 lg:px-10 xl:px-20 2xl:px-50 gap-8'>
                    
                    {/* Call Us */}
                    <section className='flex flex-col text-white h-full z-20 items-center lg:items-start text-center lg:text-left whitespace-nowrap'>
                        <h3 className='font-Mazzard-Regular text-sharp-pink text-sm'>CALL US NOW</h3>
                        <div className='flex flex-col pt-4'>
                            <span className='font-Mazzard-Regular pb-1 text-shadow-white text-sm'>+8123 456 0 000</span>
                            <span className='font-Mazzard-Regular text-shadow-white text-sm'>+8123 456 0 011</span>
                        </div>
                    </section>

                    {/* Divider 1 */}
                    <section className="hidden lg:flex rotate-90 whitespace-nowrap items-center justify-center lg:mt-10">
                        <span className="underline decoration-wavy decoration-sharp-pink">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </section>

                    {/* Email */}
                    <section className='flex flex-col text-white h-full z-20 items-center lg:items-start text-center lg:text-left whitespace-nowrap'>
                        <h3 className='font-Mazzard-Regular text-sharp-pink text-sm'>EMAIL</h3>
                        <div className='pt-4'>
                            <span className='font-Mazzard-Regular text-shadow-white text-sm'>info@chillberry.com.au</span>
                        </div>
                    </section>

                    {/* Divider 2 */}
                    <section className="hidden lg:flex rotate-90 whitespace-nowrap items-center justify-center lg:mt-10">
                        <span className="underline decoration-wavy decoration-sharp-pink">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </section>

                    {/* Store */}
                    <section className='flex flex-col text-white h-full z-20 items-center lg:items-start text-center lg:text-left whitespace-nowrap'>
                        <h3 className='font-Mazzard-Regular text-sharp-pink text-sm'>FIND OUR STORE</h3>
                        <div className='pt-4'>
                            <span className='font-Mazzard-Regular text-shadow-white text-sm'>
                                1238 Maple Street Boulder,<br /> CO 80302 United States
                            </span>
                        </div>
                    </section>

                    {/* Divider 3 */}
                    <section className="hidden lg:flex rotate-90 whitespace-nowrap items-center justify-center lg:mt-10">
                        <span className="underline decoration-wavy decoration-sharp-pink">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </section>

                    {/* Hours */}
                    <section className='flex flex-col text-white h-full z-20 items-center lg:items-start text-center lg:text-left whitespace-nowrap'>
                        <h3 className='font-Mazzard-Regular text-sharp-pink text-sm'>OPENING HOURS</h3>
                        <div className='pt-4'>
                            <span className='font-Mazzard-Regular text-shadow-white text-sm'>
                                1238 Maple Street Boulder,<br /> CO 80302 United States
                            </span>
                        </div>
                    </section>
                </div>
            </div>

            {/* Map and Form Container */}
            {/* FIX: Reduced xl:px-20 for better fit in the 1280-1380 range */}
            <div className='mapandform flex flex-col-reverse lg:flex-row gap-10 lg:gap-5 z-20 py-12 lg:pt-10 lg:pb-20 px-6 lg:px-10 xl:px-20 2xl:px-50 w-full items-center lg:justify-center xl:justify-center flex-grow'>
                
                {/* Map Section */}
                <section className='map z-20 w-full lg:w-auto flex justify-center'>
                    <img className='w-full max-w-[516px] lg:w-[400px] xl:w-[400px] 2xl:w-100 h-auto lg:h-77 rounded-2xl object-cover' src="/images/section7/map.jpeg" alt="Location Map" />
                </section>

                {/* Form Section */}
                <form onSubmit={handleSubmit} className='form flex flex-col text-white w-full max-w-[512px] lg:w-[500px] xl:w-[500px] 2xl:w-150 gap-4 min-h-[308px] lg:h-77 rounded-2xl bg-black/50 backdrop-blur-xs p-6 lg:p-0'>
                    
                    <div className='flex flex-col lg:flex-row lg:px-6 xl:px-10 2xl:px-12 gap-4 lg:gap-4 xl:gap-7 lg:py-8 lg:pb-0'>
                        <section className='Name border border-white/40 rounded-[7px] w-full lg:w-50 flex items-center bg-transparent'>
                            <input className='bg-transparent px-3 py-1.5 text-sm w-full outline-none' type="text" placeholder='Name' name='name' value={form.name} onChange={handleChange} />
                            <div className='pr-3'>
                                <img className='w-5 h-6 invert' src="person.svg" alt="" />
                            </div>
                        </section>

                        <section className='Phone border border-white/40 rounded-[7px] w-full lg:w-50 flex items-center bg-transparent'>
                            <input className='bg-transparent px-3 py-1.5 text-sm w-full outline-none' type="text" placeholder='Phone' name='phone' value={form.phone} onChange={handleChange} />
                            <div className='pr-3'>
                                <img className='w-5 h-6 invert' src="contact.svg" alt="" />
                            </div>
                        </section>
                    </div>

                    <div className='flex flex-col lg:flex-row lg:px-6 xl:px-10 2xl:px-12 gap-4 lg:gap-4 xl:gap-7'>
                        <section className='Email border border-white/40 rounded-[7px] w-full lg:w-50 flex items-center bg-transparent'>
                            <input className='bg-transparent px-3 py-1.5 text-sm w-full outline-none' type="text" placeholder='Email' name='email' value={form.email} onChange={handleChange} />
                            <div className='pr-3'>
                                <img className='w-5 h-7 invert' src="email.svg" alt="" />
                            </div>
                        </section>

                        <section className='Subject border border-white/40 rounded-[7px] w-full lg:w-50 flex relative items-center bg-transparent'>
                            <select onChange={handleChange} name='subject' value={form.subject} className='appearance-none bg-transparent px-3 py-1.5 text-sm w-full outline-none text-white/50 cursor-pointer'>
                                <option className="text-sharp-pink" value="Subject">Subject</option>
                                <option className="text-sharp-pink" value="inquiry">General Inquiry</option>
                                <option className="text-sharp-pink" value="support">Technical Support</option>
                                <option className="text-sharp-pink" value="feedback">Feedback</option>
                            </select>
                            <div className='absolute right-2 pointer-events-none'>
                                <img className='w-5 h-5 invert opacity-70' src="dropdown.svg" alt="arrow" />
                            </div>
                        </section>
                    </div>

                    <section className='flex lg:px-6 xl:px-10 2xl:px-12'>
                        <div className='Message border border-white/40 rounded-[7px] w-full lg:w-103 py-2'>
                            <textarea className='bg-transparent px-3 resize-none text-sm w-full outline-none h-20' name='message' value={form.message} onChange={handleChange} placeholder='Message(optional)' />
                        </div>
                    </section>

                    <section className='flex justify-center lg:justify-end lg:py-2 lg:mr-14 xl:mr-11 2xl:mr-12'>
                        <button type="submit" className="flex items-center justify-center gap-2 font-Mazzard-Regular text-white text-sm bg-sharp-pink px-8 py-2.5 2xl:px-4 2xl:py-2 2xl:gap-1 xl:px-4 xl:py-2 xl:gap-1 lg:px-4 lg:py-2 lg:gap-1 rounded-4xl hover:cursor-pointer transition-colors hover:bg-pink-600">
                            Submit Now
                            <img className="h-3 invert" src="next.svg" alt="next" />
                        </button>
                    </section>
                </form>
            </div>
        </main>
    );
};

export default Contactus;