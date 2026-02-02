import { ChevronDown, Clock, Calendar } from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PACKAGES } from '../data/constants';

const EnquiryCTA = ({ selectedPackage }) => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors, isSubmitting }
    } = useForm({
        mode: 'onBlur'
    });

    // ... (keep existing useEffect)
    useEffect(() => {
        if (selectedPackage) {
            setValue('packageType', selectedPackage);
        }
    }, [selectedPackage, setValue]);

    const handleGoogleSheetForm = async (formData) => {
        try {
            const res = await fetch("https://script.google.com/macros/s/AKfycbweWgYF9vBSa6AdJ6Xe5mSQezxD9EQ9Ao2HXKGNmfEKk2dA_EZQGEsXUVWzx7Hn26oP-w/exec", {
                method: "POST",
                body: formData // URLSearchParams sets correct headers automatically
            });
            console.log(res)
            return true; // Google Sheets macros often redirect or return opaque responses in CORS, so we assume success if no network error
        } catch (err) {
            console.error("Sheet Error:", err);
            return false;
        }
    };
    // Helper to format time to AM/PM
    const formatTime = (time) => {
        if (!time) return "";
        const [hours, minutes] = time.split(':');
        const h = parseInt(hours, 10);
        const ampm = h >= 12 ? 'PM' : 'AM';
        const h12 = h % 12 || 12;
        return `${h12}:${minutes} ${ampm}`;
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
                email: data.email,
                phone: `+91${data.mobile}`,
                event_date: data.eventDate,
                event_time: formatTime(data.eventTime), // Convert to AM/PM
                package_type: data.packageType,
                ip_address: ip,
                utm_source: localStorage.getItem("utm_source") || "Direct", // Default to 'Direct' if empty for better visibility
            };

            const params = new URLSearchParams();
            Object.keys(formData).forEach((key) => {
                const value = formData[key];
                params.append(key, value !== undefined && value !== null ? String(value) : "");
            });

            const success = await handleGoogleSheetForm(params);

            if (success) {
                reset();
                window.location.href = '/thank-you';
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (err) {
            console.error("Submission error:", err);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <section id="contact" className="py-32 px-6 text-center border-t border-neutral-200 relative overflow-hidden">
            {/* ... (keep existing decorative elements & header) ... */}

            {/* ... (keep existing decorative elements & header) ... */}
            <div className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-[#f59e0b]/10 blur-3xl -z-10" />
            <div className="absolute bottom-1/4 left-[5%] w-48 h-48 rounded-full bg-[#1b4d3e]/5 blur-3xl -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-5xl md:text-6xl font-serif text-[#1b4d3e] mb-6">PLAN YOUR CELEBRATION</h2>
                <p className="text-neutral-500 max-w-lg mx-auto mb-10 text-sm">
                    Tell us your occasion, preferred date, and celebration style — our team will take care of everything else.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto"
                >
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-neutral-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {/* Name Field */}
                            <div className="text-left">
                                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#1b4d3e] mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    {...register('name', {
                                        required: 'Name is required',
                                        minLength: { value: 2, message: 'Name must be at least 2 characters' },
                                        pattern: { value: /^[A-Za-z\s]+$/, message: 'Name should only contain letters' }
                                    })}
                                    className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-neutral-300'} focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 outline-none transition-all text-sm`}
                                    placeholder="Enter your name"
                                />
                                {errors.name && <p className="mt-1 text-xs text-red-500 font-medium">{errors.name.message}</p>}
                            </div>

                            {/* Mobile Field */}
                            <div className="text-left">
                                <label htmlFor="mobile" className="block text-xs font-bold uppercase tracking-wider text-[#1b4d3e] mb-2">
                                    Mobile Number *
                                </label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    {...register('mobile', {
                                        required: 'Mobile number is required',
                                        pattern: { value: /^[0-9]{10}$/, message: 'Please enter a valid 10-digit mobile number' }
                                    })}
                                    className={`w-full px-4 py-3 rounded-xl border ${errors.mobile ? 'border-red-500' : 'border-neutral-300'} focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 outline-none transition-all text-sm`}
                                    placeholder="10-digit mobile number"
                                />
                                {errors.mobile && <p className="mt-1 text-xs text-red-500 font-medium">{errors.mobile.message}</p>}
                            </div>
                        </div>

                        {/* Email Field */}
                        <div className="text-left mb-6">
                            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#1b4d3e] mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Please enter a valid email address' }
                                })}
                                className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-neutral-300'} focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 outline-none transition-all text-sm`}
                                placeholder="your.email@example.com"
                            />
                            {errors.email && <p className="mt-1 text-xs text-red-500 font-medium">{errors.email.message}</p>}
                        </div>

                        {/* Package Type Selection */}
                        <div className="text-left mb-6">
                            <label htmlFor="packageType" className="block text-xs font-bold uppercase tracking-wider text-[#1b4d3e] mb-2">
                                Package Type *
                            </label>
                            <div className="relative">
                                <select
                                    id="packageType"
                                    {...register('packageType', { required: 'Please select a package' })}
                                    className={`w-full px-4 py-3 rounded-xl border ${errors.packageType ? 'border-red-500' : 'border-neutral-300'} focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 outline-none transition-all text-sm bg-white appearance-none cursor-pointer`}
                                >
                                    <option value="">Select a package</option>
                                    {PACKAGES.map(pkg => (
                                        <option key={pkg.id} value={pkg.title}>{pkg.title} {pkg.price && `- ${pkg.price}`}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" size={18} />
                            </div>
                            {errors.packageType && <p className="mt-1 text-xs text-red-500 font-medium">{errors.packageType.message}</p>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            {/* Event Date */}
                            <div className="text-left">
                                <label htmlFor="eventDate" className="block text-xs font-bold uppercase tracking-wider text-[#1b4d3e] mb-2">
                                    Event Date *
                                </label>
                                <div
                                    className="relative cursor-pointer group transition-all duration-300 hover:-translate-y-1"
                                    onClick={() => document.getElementById('eventDate').showPicker()}
                                >
                                    <input
                                        type="date"
                                        id="eventDate"
                                        {...register('eventDate', {
                                            required: 'Event date is required',
                                            validate: {
                                                notPast: (value) => {
                                                    const selectedDate = new Date(value);
                                                    const today = new Date();
                                                    today.setHours(0, 0, 0, 0);
                                                    return selectedDate >= today || 'Please select a future date';
                                                }
                                            }
                                        })}
                                        min={new Date().toISOString().split('T')[0]}
                                        className={`w-full px-4 py-3 pl-4 rounded-xl border ${errors.eventDate ? 'border-red-500 bg-red-50' : 'border-neutral-200 bg-[#f8f9fa]'} focus:bg-white focus:border-[#f59e0b] focus:ring-4 focus:ring-[#f59e0b]/10 outline-none transition-all text-sm appearance-none cursor-pointer shadow-sm group-hover:shadow-md [&::-webkit-calendar-picker-indicator]:hidden`}
                                    />
                                    <div
                                        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            const el = document.getElementById('eventDate');
                                            if (el && el.showPicker) el.showPicker();
                                        }}
                                    >
                                    </div>
                                </div>
                                {errors.eventDate && <p className="mt-1 text-xs text-red-500 font-medium">{errors.eventDate.message}</p>}
                            </div>

                            {/* Event Time */}
                            <div className="text-left">
                                <label htmlFor="eventTime" className="block text-xs font-bold uppercase tracking-wider text-[#1b4d3e] mb-2">
                                    Event Time *
                                </label>
                                <div
                                    className="relative cursor-pointer group transition-all duration-300 hover:-translate-y-1"
                                    onClick={() => document.getElementById('eventTime').showPicker()}
                                >
                                    <input
                                        type="time"
                                        id="eventTime"
                                        {...register('eventTime', { required: 'Event time is required' })}
                                        className={`w-full px-4 py-3 pl-4 pr-12 rounded-xl border ${errors.eventTime ? 'border-red-500 bg-red-50' : 'border-neutral-200 bg-[#f8f9fa]'} focus:bg-white focus:border-[#f59e0b] focus:ring-4 focus:ring-[#f59e0b]/10 outline-none transition-all text-sm appearance-none cursor-pointer shadow-sm group-hover:shadow-md [&::-webkit-calendar-picker-indicator]:hidden`}
                                    />
                                    <div
                                        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            const el = document.getElementById('eventTime');
                                            if (el && el.showPicker) el.showPicker();
                                        }}
                                    >
                                        <Clock className="text-gray-400 group-hover:text-gray-600 transition-colors" size={20} />
                                    </div>
                                </div>
                                {errors.eventTime && <p className="mt-1 text-xs text-red-500 font-medium">{errors.eventTime.message}</p>}
                            </div>
                        </div>

                        {/* Submit Button - Larger and More Prominent */}
                        <div className="flex justify-center">
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                                className={`bg-[#1b4d3e] text-white px-16 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#f59e0b] transition-colors shadow-2xl ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                                    }`}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                            </motion.button>
                        </div>
                    </form>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-20"
                >
                    <p className="text-[#f59e0b] font-serif italic text-2xl animate-pulse">✨ Make your moments magical at SkyThru Rooftop ✨</p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default EnquiryCTA;
