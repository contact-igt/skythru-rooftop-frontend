import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import FullscreenMenu from './FullscreenMenu';

const ThankYou = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-[#f9f9f9]">
            <Navbar toggleMenu={() => setIsMenuOpen(true)} />

            <FullscreenMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />

            <section className="min-h-screen bg-gradient-to-b from-[#f9f9f9] to-[#ffffff] flex items-center justify-center relative overflow-hidden px-6 pt-20">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f59e0b]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1b4d3e]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-xl w-full text-center relative z-10"
                >
                    {/* Success Icon */}
                    <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
                        className="w-24 h-24 bg-[#1b4d3e] rounded-full mx-auto mb-8 flex items-center justify-center shadow-xl shadow-[#1b4d3e]/20"
                    >
                        <Check className="text-white w-12 h-12" strokeWidth={3} />
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-5xl md:text-6xl font-serif text-[#1b4d3e] mb-6"
                    >
                        Thank You!
                    </motion.h1>

                    {/* Subtext */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <p className="text-xl text-[#f59e0b] font-medium mb-4 uppercase tracking-widest text-xs">
                            Enquiry Received Successfully
                        </p>
                        <p className="text-neutral-500 mb-10 leading-relaxed">
                            We are thrilled you chose SkyThru Rooftop for your special occasion.
                            Our events team will review your details and get back to you shortly
                            to finalize your magical celebration.
                        </p>
                    </motion.div>

                    {/* Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center gap-2 bg-[#1b4d3e] text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#153e32] transition-colors shadow-lg hover:shadow-xl"
                        >
                            <Home size={18} />
                            Back to Home
                        </Link>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
};

export default ThankYou;
