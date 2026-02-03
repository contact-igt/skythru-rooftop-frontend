import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IMAGES } from '../data/constants';

const HeroSection = ({ onViewPackages, onBookCelebration }) => {
    const { scrollYProgress } = useScroll();
    const rotatePlate = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section id="home" className="pt-52 md:pt-44 pb-20 px-6 min-h-screen flex flex-col justify-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-[#f59e0b]/10 blur-3xl -z-10" />
            <div className="absolute bottom-1/4 left-[5%] w-48 h-48 rounded-full bg-[#1b4d3e]/5 blur-3xl -z-10" />

            <div className="container mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-6xl md:text-[8rem] font-serif leading-[0.9] tracking-tight text-[#1b4d3e] mb-6">
                        CELEBRATE <br />
                        <span className="font-['Pacifico'] text-3xl md:text-7xl text-[#f59e0b] block my-2">Your Special Moments</span>
                        <span className="relative inline-block">
                            ABOVE THE CITY
                            <motion.img
                                src={IMAGES.decor_spin}
                                className="absolute top-14 right-6 md:-right-24 w-16 md:w-28 h-16 md:h-28 rounded-full object-cover border-4 border-[#f9f9f9] shadow-xl"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />
                        </span>
                    </h1>

                    <p className="text-neutral-500 max-w-xl mx-auto mt-8 text-sm leading-relaxed font-medium mb-10">
                        From romantic surprises to family celebrations and private parties — SkyThru Rooftop creates unforgettable memories with beautifully curated event experiences.
                    </p>

                    <div className="flex gap-4 justify-center">
                        <motion.button
                            onClick={onViewPackages}
                            whileHover={{ scale: 1.05 }}
                            className="px-8 py-4 rounded-full bg-[#1b4d3e] text-white text-xs font-bold uppercase tracking-widest shadow-xl hover:bg-[#f59e0b] transition-colors"
                        >
                            View Packages
                        </motion.button>
                        <motion.button
                            onClick={onBookCelebration}
                            whileHover={{ scale: 1.05 }}
                            className="px-8 py-4 rounded-full bg-white border border-[#1b4d3e] text-[#1b4d3e] text-xs font-bold uppercase tracking-widest shadow-xl hover:bg-[#f9f9f9] transition-colors"
                        >
                            Book Celebration
                        </motion.button>
                    </div>
                </motion.div>

                {/* Floating Elements Layout */}
                <div className="relative mt-20 h-auto md:h-[400px] lg:h-[500px] w-full max-w-6xl mx-auto">

                    {/* Mobile: Single centered image */}
                    <div className="md:hidden flex justify-center mb-8">
                        <div className="relative w-64 h-64">
                            <div className="absolute inset-0 bg-[#f59e0b] rounded-full translate-y-2 -translate-x-2" />
                            <motion.div style={{ rotate: rotatePlate }} className="absolute inset-0 rounded-full overflow-hidden border-[4px] border-[#f9f9f9] shadow-2xl">
                                <img src={IMAGES.hero_main} className="w-full h-full object-cover" alt="Wedding celebration" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Tablet/Desktop: Left Circular Feature */}
                    <div className="absolute left-0 lg:left-10 top-0 w-56 md:w-64 lg:w-80 h-56 md:h-64 lg:h-80 hidden md:block">
                        <div className="absolute inset-0 bg-[#f59e0b] rounded-full translate-y-4 -translate-x-4" />
                        <motion.div style={{ rotate: rotatePlate }} className="absolute inset-0 rounded-full overflow-hidden border-[4px] lg:border-[6px] border-[#f9f9f9] shadow-2xl">
                            <img src={IMAGES.hero_main} className="w-full h-full object-cover" alt="Wedding celebration" />
                        </motion.div>
                    </div>

                    {/* Right Feature Block */}
                    <div className="relative md:absolute md:right-0 lg:right-10 md:top-10 lg:top-20 w-full md:w-auto flex flex-col items-center md:items-end mt-8 md:mt-0">
                        <div className="flex items-center gap-4 mb-6 justify-center md:justify-end">
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#f9f9f9] bg-neutral-200 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 25}`} alt={`Guest ${i}`} />
                                    </div>
                                ))}
                            </div>
                            <div className="text-xs font-bold">
                                <span className="block text-[#1b4d3e]">10k+ Happy</span>
                                <span className="text-neutral-400">Guests</span>
                            </div>
                        </div>

                        {/* Party Image - Now visible on all screen sizes */}
                        <div className="relative w-48 h-48 md:w-40 md:h-40 lg:w-48 lg:h-48">
                            <div className="absolute inset-0 bg-[#1b4d3e] rounded-full translate-x-2 translate-y-2" />
                            <motion.div style={{ rotate: rotatePlate }} className="absolute inset-0 rounded-full overflow-hidden border-[4px] border-[#f9f9f9]">
                                <img src={IMAGES.party} className="w-full h-full object-cover" alt="Party celebration" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Section Number & Line - Desktop Only */}
                    <div className="absolute left-1/3 top-1/2 w-px h-32 bg-neutral-300 hidden lg:block" />
                    <span className="absolute left-[30%] top-[45%] font-serif text-xl font-bold text-[#1b4d3e] hidden lg:block">01</span>

                    <div className="absolute left-[35%] top-[55%] max-w-xs text-left hidden lg:block">
                        <p className="text-xs text-neutral-500 leading-relaxed">
                            We craft moments. From the first flower petal to the last bite of dessert, your celebration is our masterpiece.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
