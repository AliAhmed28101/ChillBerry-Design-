import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-baby-pink text-black py-3 w-full relative">
            <nav className="max-w-[1550px] mx-auto flex items-center justify-between px-6 md:px-10 xl:px-20">

                {/* Logo */}
                <div className="flex items-center gap-2 xl:translate-x-9">
                    <img className="h-12 md:h-14 shrink-0" src="logo.png" alt="logo" />
                    <div className="flex text-lg md:text-xl font-Schotis-Bold">
                        <span>Chill</span>
                        <span className="text-sharp-pink">berry</span>
                    </div>
                </div>

                {/* Desktop Links (≥1024px) */}
                <div className="hidden lg:flex items-center">
                    <ul className="flex gap-8 font-Mazzard-Regular text-sm whitespace-nowrap">
                        <li><a className="hover:text-sharp-pink transition" href="/">Home</a></li>
                        <li><a className="hover:text-sharp-pink transition" href="/about-us">About Us</a></li>
                        <li><a className="hover:text-sharp-pink transition" href="/our-flavors">Our Flavors</a></li>
                        <li><a className="hover:text-sharp-pink transition" href="/gallery">Gallery</a></li>
                        <li><a className="hover:text-sharp-pink transition" href="/testimonials">Testimonials</a></li>
                        <li><a className="hover:text-sharp-pink transition" href="/contact">Contact</a></li>
                    </ul>
                </div>

                {/* Right Side Controls */}
                <div className="flex items-center gap-4">

                    {/* Order Button (≥768px) */}
                    <div className="hidden md:block xl:-translate-x-9">
                        <button
                            type="button"
                            onClick={() => alert("Order Now")}
                            className="flex items-center gap-1 font-Mazzard-Regular text-white text-sm bg-sharp-pink px-6 py-2.5 rounded-full hover:opacity-90 transition"
                        >
                            Order Now
                            <img className="h-3 invert" src="next.svg" alt="next" />
                        </button>
                    </div>

                    {/* Hamburger (<1024px) */}
                    <div className="lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <svg
                                className="w-9 h-9 text-sharp-pink translate-y-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>

                </div>
            </nav>

            {/* Mobile / Tablet Dropdown */}
            {isOpen && (
                <div className="lg:hidden bg-baby-pink border-t border-pink-200 px-6 py-4">
                    <ul className="flex flex-col gap-4 font-Mazzard-Regular text-sm">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/our-flavors">Our Flavors</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/testimonials">Testimonials</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;








    







