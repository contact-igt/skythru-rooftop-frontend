import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const FullscreenMenu = ({ isOpen, onClose }) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "tween", duration: 0.5, ease: "circOut" }}
                className="fixed inset-0 z-[150] bg-[#1b4d3e] text-[#f9f9f9] flex flex-col justify-center items-center"
            >
                <button onClick={onClose} className="absolute top-8 right-8 p-2 rounded-full border border-white/20 hover:bg-white/10 transition-all">
                    <X size={24} />
                </button>
                <div className="flex flex-col gap-6 text-center">
                    {['Home', 'Packages', 'Why Us', 'Contact'].map((item, i) => (
                        <a
                            key={i}
                            href={`#${item.toLowerCase().replace(" ", "-")}`}
                            onClick={onClose}
                            className="text-6xl md:text-8xl font-serif hover:text-[#f59e0b] transition-colors italic"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </motion.div>
        )}
    </AnimatePresence>
);

export default FullscreenMenu;
