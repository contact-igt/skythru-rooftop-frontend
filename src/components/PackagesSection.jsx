import React from 'react';
import { Check } from 'lucide-react';
import { PACKAGES } from '../data/constants';

const PackagesSection = ({ onSelectPackage }) => (
    <section id="packages" className="py-32 px-6">
        <div className="container mx-auto">
            <div className="flex items-end justify-between mb-20">
                <div className="flex items-baseline gap-4">
                    <span className="text-sm font-bold text-neutral-400">02</span>
                    <h2 className="text-5xl md:text-8xl font-serif text-[#1b4d3e]">EVENT PACKAGES</h2>
                </div>
                <p className="text-xs text-neutral-500 max-w-xs text-right hidden md:block">
                    Curated experiences for every budget and occasion.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
                {PACKAGES.map((pkg, idx) => (
                    <div key={idx} className="group flex flex-col md:flex-row items-start gap-8 border-b border-neutral-200 pb-12 hover:border-[#f59e0b] transition-colors md:last:odd:col-span-2 md:last:odd:justify-self-center md:last:odd:w-[50%]">
                        {/* Circular Image Container */}
                        <div className="relative w-40 h-40 shrink-0 mx-auto md:mx-0">
                            <div className={`absolute inset-0 rounded-full ${pkg.bg} translate-x-2 -translate-y-2 transition-transform group-hover:translate-x-4`} />
                            <img src={pkg.image} className="absolute inset-0 w-full h-full object-cover rounded-full shadow-lg" alt={pkg.title} />
                        </div>

                        <div className="flex-grow w-full">
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-2xl font-serif text-[#1b4d3e] group-hover:text-[#f59e0b] transition-colors">{pkg.title}</h3>
                                <span className={`font-bold text-xl ${pkg.accent}`}>{pkg.price}</span>
                            </div>
                            <p className="text-xs text-neutral-400 uppercase tracking-widest mb-4">{pkg.per}</p>
                            <p className="text-sm text-neutral-600 mb-4">{pkg.desc}</p>

                            <div className="mb-6 space-y-2">
                                {pkg.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-500">
                                        <Check size={12} className={pkg.accent} /> {feature}
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => onSelectPackage && onSelectPackage(pkg.title)}
                                className={`w-full md:w-auto px-6 py-3 rounded-full border ${pkg.accent.replace('text', 'border')} ${pkg.accent} font-bold text-[10px] uppercase tracking-widest hover:bg-neutral-50 transition-colors`}
                            >
                                Book This Package
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default PackagesSection;
