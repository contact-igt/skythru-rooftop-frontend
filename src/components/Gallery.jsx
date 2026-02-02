import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/constants';

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isAutoPlaying = true;

    // Auto-play slider
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            handleNext();
        }, 5000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlaying]);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
    };

    // Get visible images (current and next 2 for desktop, 1 for mobile)
    const getVisibleImages = () => {
        const images = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % GALLERY_IMAGES.length;
            images.push(GALLERY_IMAGES[index]);
        }
        return images;
    };

    return (
        <section id="gallery" className="py-24 px-6 bg-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-1/4 left-[5%] w-96 h-96 rounded-full bg-[#1b4d3e]/5 blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-[10%] w-64 h-64 rounded-full bg-[#f59e0b]/10 blur-3xl -z-10" />

            <div className="container mx-auto max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-serif text-[#1b4d3e] mb-4">
                        Our Gallery
                    </h2>
                    <p className="text-neutral-500 max-w-2xl mx-auto text-sm leading-relaxed">
                        Explore the magical moments we've created. From intimate celebrations to grand events,
                        every memory is crafted with love and perfection.
                    </p>
                </motion.div>

                {/* Gallery Slider */}
                <div className="relative">
                    {/* Left Arrow */}
                    <button
                        onClick={() => {
                            handlePrevious();
                        }}
                        className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-20 bg-[#1b4d3e] hover:bg-[#f59e0b] text-white p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={() => {
                            handleNext();
                        }}
                        className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-20 bg-[#1b4d3e] hover:bg-[#f59e0b] text-white p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
                        aria-label="Next image"
                    >
                        <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
                    </button>

                    {/* Slider Container */}
                    <div className="overflow-hidden rounded-3xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <AnimatePresence mode="wait">
                                {getVisibleImages().map((image, idx) => (
                                    <motion.div
                                        key={`${currentIndex}-${idx}`}
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                                        className={`group relative overflow-hidden rounded-2xl bg-neutral-100 shadow-lg hover:shadow-2xl transition-all duration-300 ${idx > 0 ? 'hidden md:block' : ''
                                            }`}
                                    >
                                        {/* Image Container with Aspect Ratio */}
                                        <div className="relative w-full aspect-[3/4] overflow-hidden">
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />


                                            {/* <div className="absolute inset-0 bg-gradient-to-t from-[#1b4d3e]/90 via-[#1b4d3e]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                                                <div className="text-center">
                                                    <span className="inline-block px-6 py-2.5 bg-white/95 backdrop-blur-sm text-[#1b4d3e] text-sm font-bold uppercase tracking-widest rounded-full shadow-xl border-2 border-[#f59e0b]">
                                                        {image.category}
                                                    </span>
                                                </div>
                                            </div> */}
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {GALLERY_IMAGES.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setCurrentIndex(idx);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                                    ? 'w-8 bg-[#f59e0b]'
                                    : 'w-2 bg-neutral-300 hover:bg-[#1b4d3e]'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-neutral-600 mb-6 text-sm italic font-serif">
                        ✨ Ready to create your own unforgettable moments? ✨
                    </p>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block bg-[#1b4d3e] text-white px-12 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#f59e0b] transition-colors shadow-xl"
                    >
                        Book Your Celebration
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
