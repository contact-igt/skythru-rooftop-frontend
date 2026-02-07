import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';

const ValentinesPopup = ({ isOpen, onClose }) => {
    const [error, setError] = useState(null);
    const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm({
        mode: 'onBlur'
    });


    useEffect(() => {
        const getNextDeadline = () => {
            const now = new Date();
            const currentYear = now.getFullYear();
            let target = new Date(`${currentYear}-02-14T23:59:59`);

            // If Valentine's Day has passed, set to next year
            if (now > target) {
                target.setFullYear(currentYear + 1);
            }
            return target;
        };

        const calculateTimeLeft = () => {
            const difference = +getNextDeadline() - +new Date();
            let timeLeft = {};

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
                
                timeLeft = {
                    days: days,
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds
                };
            } else {
                timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }
            return timeLeft;
        };

        // Initial set
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    });

    // Helper to format numbers with leading zero
    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    };

    const handleGoogleSheetForm = async (formData) => {
        try {
            const res = await fetch("https://script.google.com/macros/s/AKfycbweWgYF9vBSa6AdJ6Xe5mSQezxD9EQ9Ao2HXKGNmfEKk2dA_EZQGEsXUVWzx7Hn26oP-w/exec", {
                method: "POST",
                body: formData
            });
            return true;
        } catch (err) {
            console.error("Sheet Error:", err);
            return false;
        }
    };

    const onSubmit = async (data) => {
        try {
            let ip = "";
            try {
                const ipResponse = await fetch("https://api.ipify.org?format=json");
                const ipData = await ipResponse.json();
                ip = ipData.ip;
            } catch (error) {
                console.warn("IP Fetch failed", error);
            }

            const formData = {
                name: data.name,
                email: "",
                phone: `+91${data.phone}`,
                event_date: "2026-02-14",
                event_time: "Evening",
                package_type: "Valentine's Special",
                ip_address: ip,
                utm_source: localStorage.getItem("utm_source") || "Valentine Popup",
            };

            const params = new URLSearchParams();
            Object.keys(formData).forEach((key) => {
                const value = formData[key];
                params.append(key, value !== undefined && value !== null ? String(value) : "");
            });

            const success = await handleGoogleSheetForm(params);

            if (success) {
                reset();
                window.location.href = "/thank-you";
                onClose();
            } else {
                setError("Something went wrong. Please try again.");
            }
        } catch (err) {
            console.error("Submission error:", err);
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                        aria-hidden="true"
                    />

                    {/* Popup Container */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                        className="relative w-full max-w-4xl bg-gradient-to-br from-[#FF8FA3] via-[#FFA5B8] to-[#FFB6D9] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px] md:min-h-[600px]"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 bg-white/40 hover:bg-white/60 rounded-full text-white transition-colors z-20"
                        >
                            <X size={24} />
                        </button>

                        {/* Background Decorative Elements (Balloons/Hearts) */}
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                            {/* Enhanced gradient overlays for depth */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-40"></div>
                            
                            {/* Abstract Balloons - Enhanced */}
                            <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
                            <div className="absolute top-10 -right-10 w-80 h-80 bg-gradient-to-bl from-rose-200 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
                            <div className="absolute -bottom-16 left-1/4 w-72 h-72 bg-gradient-to-tr from-pink-300 to-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
                            <div className="hidden md:block absolute bottom-0 right-1/4 w-56 h-56 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-3000"></div>

                            {/* Floating Hearts/Decorative Elements - Mobile & Desktop */}
                            <motion.div
                                animate={{ y: [0, -20, 0], x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                                className="absolute top-8 left-6 md:top-12 md:left-16 text-white/50 md:text-white/40"
                            >
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -30, 0], x: [0, -5, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.8 }}
                                className="absolute bottom-16 right-6 md:bottom-24 md:right-20 text-white/45 md:text-white/35"
                            >
                                <svg width="70" height="70" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                            </motion.div>

                            {/* Additional decorative elements for visual richness */}
                            <motion.div
                                animate={{ y: [0, 15, 0], x: [0, 8, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.5 }}
                                className="absolute top-1/3 right-1/4 hidden md:block text-white/30"
                            >
                                <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -25, 0], x: [0, -8, 0] }}
                                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}
                                className="absolute bottom-1/4 left-1/3 hidden md:block text-white/25"
                            >
                                <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                            </motion.div>
                        </div>

                        {/* Content Container */}
                        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 py-10 md:px-16 md:py-12 text-center">

                            <motion.h2
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-5xl font-serif text-white mb-3 md:mb-4 drop-shadow-lg"
                                style={{ fontFamily: 'Pacifico, cursive' }}
                            >
                                Celebrate Valentine's Day
                            </motion.h2>

                            <motion.p
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.25 }}
                                className="text-sm md:text-[17px] text-white/90 mb-6 md:mb-8 font-medium leading-relaxed max-w-md"
                            >
                                Create unforgettable moments with your special someone. Private cabins, romantic décor & exclusive experiences await!
                            </motion.p>

                            {/* Countdown Timer */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="flex gap-2 md:gap-4 mb-6 md:mb-8 justify-center flex-wrap"
                            >
                                {[
                                    { label: 'DAYS', value: timeLeft.days },
                                    { label: 'HOURS', value: timeLeft.hours },
                                    { label: 'MINS', value: timeLeft.minutes },
                                    { label: 'SECS', value: timeLeft.seconds }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex flex-col items-center">
                                        <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl bg-white/30 backdrop-blur-md border-2 border-white/50 flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow">
                                            <span className="text-xl md:text-3xl font-bold text-white drop-shadow-md">
                                                {formatTime(item.value)}
                                            </span>
                                        </div>
                                        <span className="text-xs md:text-xs text-white mt-1 font-bold tracking-wider drop-shadow">{item.label}</span>
                                    </div>
                                ))}
                            </motion.div>

                            {/* Input Form */}
                            <motion.form
                                onSubmit={handleSubmit(onSubmit)}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="w-full max-w-sm space-y-3 md:space-y-4"
                            >
                                {/* Name Field */}
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        {...register('name', {
                                            required: 'Name is required',
                                            minLength: { value: 2, message: 'Name must be at least 2 characters' },
                                            pattern: { value: /^[A-Za-z\s]+$/, message: 'Name should only contain letters' }
                                        })}
                                        className={`w-full h-11 md:h-12 px-4 rounded-lg border-2 focus:outline-none text-gray-800 placeholder-gray-500 transition-all text-sm ${errors.name ? 'border-red-500 bg-white/80' : 'border-transparent focus:border-pink-500 bg-white/95'}`}
                                    />
                                    {errors.name && <p className="mt-1 text-xs text-white/90 text-end font-medium drop-shadow">{errors.name.message}</p>}
                                </div>

                                {/* Phone Field with Country Code */}
                                <div className="flex gap-2">
                                    {/* Country Select */}
                                    <div className="h-11 md:h-12 px-2 md:px-3 bg-white/95 rounded-lg flex items-center justify-center text-lg md:text-xl font-medium cursor-pointer text-gray-700 border-2 border-transparent hover:border-pink-500 transition-colors flex-shrink-0">
                                        🇮🇳
                                    </div>
                                    <div className="flex-1">
                                        <input
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            {...register('phone', {
                                                required: 'Phone number is required',
                                                pattern: { value: /^[0-9]{10}$/, message: 'Please enter a valid 10-digit mobile number' }
                                            })}
                                            className={`w-full h-11 md:h-12 px-4 rounded-lg border-2 focus:outline-none text-gray-800 placeholder-gray-500 transition-all text-sm ${errors.phone ? 'border-red-500 bg-white/80' : 'border-transparent focus:border-pink-500 bg-white/95'}`}
                                        />
                                        {errors.phone && <p className="mt-1 text-end text-xs text-white/90 font-medium drop-shadow">{errors.phone.message}</p>}
                                    </div>
                                </div>
                                {error && <p className="mt-2 text-xs text-red-500 font-medium drop-shadow">{error}</p>}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-11 md:h-14 bg-black text-white font-bold text-base md:text-lg rounded-lg hover:bg-gray-900 transition-colors shadow-xl mt-2 md:mt-4 disabled:opacity-70 disabled:cursor-not-allowed drop-shadow-md"
                                >
                                    {isSubmitting ? 'Booking...' : 'Book Now'}
                                </button>
                            </motion.form>

                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ValentinesPopup;
