import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { IMAGES } from '../data/constants';

const EventsIntroSection = () => (
    <section className="py-24 px-6 border-t border-neutral-200">
        <div className="container mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div>
                <h2 className="text-5xl md:text-7xl font-serif text-[#1b4d3e] leading-none mb-10">
                    SKYTHRU <br />
                    EVENT <br />
                    PACKAGES <span className="inline-block w-16 h-16 bg-[#f59e0b] rounded-full border-2 border-[#f9f9f9] align-middle ml-2 shadow-lg flex items-center justify-center text-white"><Sparkles size={24} /></span>
                </h2>

                <div className="flex items-start gap-6 border-t border-neutral-300 pt-8">
                    <div className="w-16 h-16 rounded-full bg-[#e8f5e9] flex items-center justify-center text-[#1b4d3e] border-2 border-[#f9f9f9] shadow-md shrink-0">
                        <Heart size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-[#1b4d3e] mb-2">Designed for Memories</p>
                        <p className="text-xs text-neutral-500 max-w-sm leading-relaxed">
                            Whether you're planning a romantic surprise, a birthday celebration, or a private family gathering, SkyThru Rooftop offers thoughtfully designed event packages with stunning décor, warm ambience, and unforgettable experiences — all in a fully air-conditioned rooftop setting.
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative flex justify-center">
                <div className="absolute w-[120%] h-[120%] border border-[#d4af37]/30 rounded-full animate-[spin_12s_linear_infinite]" />
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-[#fce4ec] p-6 relative">
                    <img src={IMAGES.hero_small} className="w-full h-full object-cover rounded-full shadow-2xl" alt="Event celebration" />
                    <div className="absolute top-0 right-10 w-16 h-16 bg-[#f59e0b] rounded-full opacity-90 flex items-center justify-center text-white font-bold text-xs">
                        A/C <br /> Roof
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default EventsIntroSection;
