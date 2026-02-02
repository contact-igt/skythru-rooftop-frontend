import React from 'react';
import { Menu, Phone, MapPin } from 'lucide-react';

const Navbar = ({ toggleMenu }) => {
    // Replace with your actual phone number
    const phoneNumber = '+919600907450';

    // Replace with your actual Google Maps location URL
    const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=SkyThru+Rooftop+Restaurant+Mumbai';

    return (
        <nav className="fixed w-full z-[100] top-0 left-0 px-4 md:px-8 py-4 md:py-6 flex justify-between items-center bg-[#f9f9f9]/90 backdrop-blur-sm border-b border-neutral-200/50">
            {/* Left Section - Tagline (Hidden on mobile) */}
            <div className="text-xs font-bold tracking-widest uppercase text-neutral-500 hidden lg:block w-1/4">
                Celebrate Above <br /> The City
            </div>

            {/* Center - Logo */}
            <div className="flex flex-col items-center justify-center lg:w-1/2 group cursor-pointer">
                {/* <div className="font-['Pacifico'] text-2xl md:text-3xl text-[#1b4d3e]">
                    Sky <span className="text-[#f59e0b] font-serif font-bold text-2xl md:text-3xl -ml-1">Thru</span>
                </div>
                <span className="text-[8px] tracking-[0.4em] uppercase font-bold text-neutral-400 mt-1">Rooftop A/C</span> */}
                <img src="/assets/sky_thru_logo.png" alt="SkyThru Logo" className='h-20 md:h-24 w-auto transform scale-[1.8] ml-3 lg:ml-0 md:scale-[2.1]' />
            </div>

            {/* Right Section - CTA Buttons & Menu */}
            <div className="flex items-center justify-end gap-2 md:gap-4 lg:w-1/4">
                {/* Call Button */}
                <a
                    href={`tel:${phoneNumber}`}
                    className="flex items-center gap-2 bg-[#f59e0b] text-white px-4 md:px-5 py-2.5 md:py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#1b4d3e] transition-colors shadow-lg group"
                    aria-label="Call us"
                >
                    <Phone size={16} className="group-hover:rotate-12 transition-transform" />
                    <span className="hidden sm:inline">Call</span>
                </a>

                {/* Location Button */}
                <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#1b4d3e] text-white px-4 md:px-5 py-2.5 md:py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#f59e0b] transition-colors shadow-lg group"
                    aria-label="View location on Google Maps"
                >
                    <MapPin size={16} className="group-hover:bounce transition-transform" />
                    <span className="hidden sm:inline">Visit Us</span>
                </a>

                {/* Menu Toggle */}
                <div
                    className="cursor-pointer ml-3 md:ml-4 bg-white/50 backdrop-blur rounded-full px-3 py-2 md:px-4 md:py-2 hover:bg-[#1b4d3e] hover:text-white transition-all group flex items-center gap-2"
                    onClick={toggleMenu}
                >
                    <span className="hidden md:block text-xs font-bold uppercase tracking-widest text-[#1b4d3e] group-hover:text-white">Menu</span>
                    <Menu size={24} className="text-[#1b4d3e] group-hover:text-white transition-colors" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
