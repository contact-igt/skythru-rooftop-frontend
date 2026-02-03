import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import EnquiryForm from './EnquiryForm';

const EnquiryModal = ({ isOpen, onClose, selectedPackage }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="relative z-[200]">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                        aria-hidden="true"
                    />

                    {/* Scrollable Container */}
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center" onClick={onClose}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 50 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                onClick={(e) => e.stopPropagation()}
                                className="relative w-full max-w-4xl rounded-3xl bg-white shadow-2xl text-left my-8"
                            >
                                {/* Close Button */}
                                <div className="absolute top-4 right-4 z-10">
                                    <button
                                        onClick={onClose}
                                        className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
                                    >
                                        <X size={24} className="text-neutral-500" />
                                    </button>
                                </div>

                                <div className="p-8 md:p-12">
                                    <div className="text-center mb-8">
                                        <h2 className="text-3xl md:text-4xl font-serif text-[#1b4d3e] mb-2">Book Your Celebration</h2>
                                        <p className="text-neutral-500 text-sm">Fill in the details below and we'll get back to you shortly.</p>
                                    </div>

                                    <EnquiryForm
                                        selectedPackage={selectedPackage}
                                        isModal={true}
                                        onSuccess={() => {
                                            onClose();
                                            window.location.href = '/thank-you';
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default EnquiryModal;
