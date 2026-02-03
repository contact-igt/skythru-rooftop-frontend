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
import EnquiryModal from './EnquiryModal';

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState('');

    const handlePackageSelect = (pkgTitle) => {
        setSelectedPackage(pkgTitle);
        setIsEnquiryModalOpen(true);
    };

    const handleScrollToPackages = () => {
        const packagesSection = document.getElementById('packages');
        if (packagesSection) {
            packagesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-[#f9f9f9] text-[#1a1a1a] font-sans selection:bg-[#f59e0b] selection:text-white overflow-x-hidden">
            <Navbar toggleMenu={() => setIsMenuOpen(true)} />

            <FullscreenMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />

            <EnquiryModal
                isOpen={isEnquiryModalOpen}
                onClose={() => setIsEnquiryModalOpen(false)}
                selectedPackage={selectedPackage}
            />

            <HeroSection
                onViewPackages={handleScrollToPackages}
                onBookCelebration={() => {
                    setSelectedPackage('');
                    setIsEnquiryModalOpen(true);
                }}
            />
            <Gallery
                onBookCelebration={() => {
                    setSelectedPackage('');
                    setIsEnquiryModalOpen(true);
                }}
            />
            <EventsIntroSection />
            <InstagramVideos
                onPlanEvent={() => {
                    setSelectedPackage('');
                    setIsEnquiryModalOpen(true);
                }}
            />
            <PackagesSection onSelectPackage={handlePackageSelect} />
            <WhyChooseSection />
            <EnquiryCTA selectedPackage={selectedPackage} />
            <Footer />
        </div>
    );
}
