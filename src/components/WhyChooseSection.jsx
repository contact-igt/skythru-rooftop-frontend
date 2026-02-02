import React from 'react';
import { Wind, Heart, Star, Music, Users, Camera, Utensils } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/constants';

const iconMap = {
    Wind: Wind,
    Heart: Heart,
    Star: Star,
    Music: Music,
    Users: Users,
    Camera: Camera,
    Utensils: Utensils
};

const WhyChooseSection = () => (
    <section id="why-us" className="py-24 px-6 bg-white">
        <div className="container mx-auto text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-serif text-[#1b4d3e] mb-6">WHY CELEBRATE?</h2>
            <p className="text-sm text-neutral-500 max-w-2xl mx-auto">
                Perfect ambience for memories that last forever. Here is why SkyThru is Porur's favorite celebration destination.
            </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            {WHY_CHOOSE_ITEMS.map((item, i) => {
                const IconComponent = iconMap[item.icon];
                return (
                    <div key={i} className="flex flex-col items-center text-center group p-8 rounded-3xl hover:bg-[#f9f9f9] transition-colors">
                        <div className="w-20 h-20 rounded-full bg-[#e8f5e9] text-[#1b4d3e] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                            <IconComponent size={32} />
                        </div>
                        <h4 className="text-xl font-serif font-bold text-[#1b4d3e] mb-2">{item.title}</h4>
                        <p className="text-xs text-neutral-500 max-w-[200px]">{item.desc}</p>
                    </div>
                );
            })}
        </div>
    </section>
);

export default WhyChooseSection;
