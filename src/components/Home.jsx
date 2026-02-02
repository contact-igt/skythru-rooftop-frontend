import React, { useState } from 'react';
import Navbar from './Navbar';
import FullscreenMenu from './FullscreenMenu';
import HeroSection from './HeroSection';
import Gallery from './Gallery';
import InstagramVideos from './InstagramVideos';
import EventsIntroSection from './EventsIntroSection';
import PackagesSection from './PackagesSection';
import WhyChooseSection from './WhyChooseSection';
import EnquiryCTA from './EnquiryCTA';
import Footer from './Footer';

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState('');

    const handlePackageSelect = (pkgTitle) => {
        setSelectedPackage(pkgTitle);
        // Smooth scroll to contact section
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-[#f9f9f9] text-[#1a1a1a] font-sans selection:bg-[#f59e0b] selection:text-white overflow-x-hidden">
            <Navbar toggleMenu={() => setIsMenuOpen(true)} />

            <FullscreenMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />

            <HeroSection />
            <Gallery />
            <EventsIntroSection />
            <InstagramVideos />
            <PackagesSection onSelectPackage={handlePackageSelect} />
            <WhyChooseSection />
            <EnquiryCTA selectedPackage={selectedPackage} />
            <Footer />
        </div>
    );
}
