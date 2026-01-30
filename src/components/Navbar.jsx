
const Navbar = () => {
    return (
        <nav className= "bg-baby-pink text-black py-2.5 ">

            <div className="w-full maincontainer flex items-center justify-center sm:justify-between px-35">



                <div className="logo-and-text flex items-center px-6">

                    <div className="shrink-0">
                        <img className="h-14" src="logo.png" alt="logo" />
                    </div>

                    <div className="flex text-xl justify-center items-center">
                        <span className="font-semibold font-Schotis-Black">
                            Chill
                        </span>
                        <span className="text-sharp-pink font-Schotis-Black">
                            berry
                        </span>
                    </div>
                </div>



                <div className="list hidden lg:flex justify-center items-center">

                    <ul>
                        <li className="flex gap-8 font-Mazzard-Regular text-sm ">
                            <a className="hover:text-sharp-pink hover:transition-all" href="/">Home</a>
                            <a className="hover:text-sharp-pink hover:transition-all" href="about-us">About Us</a>
                            <a className="hover:text-sharp-pink hover:transition-all" href="our-flavors">Our Flavors</a>
                            <a className="hover:text-sharp-pink hover:transition-all" href="gallery">Gallery</a>
                            <a className="hover:text-sharp-pink hover:transition-all" href="testimonials">Testimonials</a>
                            <a className="hover:text-sharp-pink hover:transition-all" href="contact">Contact</a>
                        </li>
                    </ul>
                </div>




                <div className="button hidden md:block px-8">



                    <button type="button" onClick={()=>alert("Order Now")} className=" flex items-center justify-center gap-1 font-Mazzard-Regular text-white text-sm bg-sharp-pink px-6 py-2.5 rounded-4xl hover:cursor-pointer">
                        Order Now

                        <img className="h-3 invert" src="next.svg" alt="next" />

                    </button>


                </div>



            </div>
        </nav>
    )
}

export default Navbar
