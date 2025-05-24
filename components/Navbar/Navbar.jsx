'use client';

import { useState, useEffect } from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showTopBar, setShowTopBar] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShowTopBar(currentScrollY < 50 || currentScrollY < lastScrollY);
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (


        <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-green-700 to-blue-500">
            {/* Top contact bar */}
            <div className={`transition-all duration-300 ${showTopBar ? "opacity-100" : "opacity-0 h-0 overflow-hidden"} text-white flex justify-end gap-3 px-2 py-1 md:gap-6 px-4 text-xs md:text-sm`}>
                <div className="flex items-center gap-2">
                    <IoCall className="size-4" />
                    <p>+91 9529972011</p>
                </div>
                <div className="flex items-center gap-2">
                    <MdEmail className="size-4" />
                    <p>admission@pravesharthi.com</p>
                </div>
            </div>

            {/* Navbar */}
            <nav className=" bg-white text-black flex items-center justify-between px-2 md:justify-around   ">
                {/* Logo */}
                <Link href="/">
                    <Image src="/pravesharthi.svg" width={150} height={150} alt="Logo" />
                </Link>

                {/* Desktop menu */}
                <ul className="hidden lg:flex items-center gap-6 font-semibold">
                    <Link href="/"><li className="hover:text-blue-900">HOME</li></Link>
                    <Link href="/aboutus"><li className="hover:text-blue-900">ABOUT US</li></Link>
                    <Link href="/services"><li className="hover:text-blue-900">OUR SERVICES</li></Link>
                    <Link href="/collegeswecover"><li className="hover:text-blue-900">COLLEGES WE COVER</li></Link>
                    <Link href="/contactus"><li className="hover:text-blue-900">CONTACT US</li></Link>
                </ul>
                <Link href="/admissionenquiry">
                    <div className="cursor-pointer hidden lg:block p-2 bg-green-600 hover:bg-blue-950 rounded-xl text-white font-semibold" >ADMISSION ENQUIRY</div>
                </Link>

                {/* toggle for mobile */}
                <button className="lg:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </nav>

            {/* Mobile menu */}
            <div className={`lg:hidden  fixed top-0 right-0 h-full  bg-[url('/mb.svg')] object-cover bg-no-repeat text-black p-6 transform transition-transform duration-300 z-40 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
                
                <div className="flex justify-between items-center mb-4">
                    <Image src="/pravesharthi.svg" width={150} height={150} alt="Logo" className="" />
                    <FiX className="text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
                </div>

                <ul className="flex flex-col gap-4 font-semibold pr-10 ">
                    <Link href="/" onClick={() => setMenuOpen(false)}><li className="hover:text-blue-900 ">HOME</li></Link>
                    <Link href="/aboutus" onClick={() => setMenuOpen(false)}><li className="hover:text-blue-900 ">ABOUT US</li></Link>
                    <Link href="/services" onClick={() => setMenuOpen(false)}><li className="hover:text-blue-900 ">OUR SERVICES</li></Link>
                    <Link href="/collegeswecover" onClick={() => setMenuOpen(false)}><li className="hover:text-blue-900 ">COLLEGES WE COVER</li></Link>
                    <Link href="/contactus" onClick={() => setMenuOpen(false)}><li className="hover:text-blue-900 ">CONTACT US</li></Link>
                    <Link href="/jobopening" onClick={() => setMenuOpen(false)}>
                        <div className=" cursor-pointer mt-4 p-2 bg-blue-900 hover:bg-green-600 rounded-lg text-white text-center " >ADMISSION ENQUIRY</div>
                    </Link>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
