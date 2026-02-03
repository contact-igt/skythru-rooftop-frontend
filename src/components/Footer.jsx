import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61577394845135', label: 'Facebook' },
        { icon: Instagram, href: 'https://www.instagram.com/sky_thru/', label: 'Instagram' },
        // { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Youtube, href: 'https://www.youtube.com/channel/UCrovnS-UdlWOKHv-hMCC1Qg', label: 'YouTube' }
    ];

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Packages', href: '#packages' },
        { name: 'Why Choose Us', href: '#why-choose' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <footer className="bg-[#1b4d3e] text-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#f59e0b]/5 rounded-full blur-3xl -z-0" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-0" />

            <div className="container mx-auto px-6 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <img src="/assets/sky_thru_logo.png" alt="SkyThru Logo" className="h-28 w-auto mb-6 ml-9 transform scale-[2.2]" />
                        <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                            Creating unforgettable memories above the city. Your celebration, our passion.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#f59e0b] flex items-center justify-center transition-colors backdrop-blur-sm"
                                >
                                    <social.icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-bold uppercase tracking-wider mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-neutral-300 hover:text-[#f59e0b] transition-colors text-sm flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-[#f59e0b] transition-all mr-0 group-hover:mr-2"></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-bold uppercase tracking-wider mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-neutral-300">
                                <Phone size={18} className="text-[#f59e0b] mt-0.5 flex-shrink-0" />
                                <div>
                                    <a href="tel:+919876543210" className="hover:text-[#f59e0b] transition-colors">
                                        +91 96009 07450
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-neutral-300">
                                <Mail size={18} className="text-[#f59e0b] mt-0.5 flex-shrink-0" />
                                <div>
                                    <a href="mailto:skythrurestaurant@gmail.com" className="hover:text-[#f59e0b] transition-colors">
                                        skythrurestaurant@gmail.com
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Address */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-bold uppercase tracking-wider mb-6">Visit Us</h4>
                        <div className="flex items-start gap-3 text-sm text-neutral-300">
                            <MapPin size={18} className="text-[#f59e0b] mt-0.5 flex-shrink-0" />
                            <address className="not-italic leading-relaxed">
                                3rd floor, New, 12,<br />
                                Mount Poonamallee Rd, Kattupakkam,<br />
                                Chennai, Tamil Nadu 600056
                            </address>
                        </div>

                        {/* Opening Hours */}
                        <div className="mt-6">
                            <p className="text-xs font-bold uppercase tracking-wider text-[#f59e0b] mb-2">Opening Hours</p>
                            <p className="text-sm text-neutral-300">
                                Mon - Sun: 12:30 PM - 03:30 PM
                            </p>
                            <p className="text-sm text-neutral-300">
                                Mon - Sun: 09:30 PM - 11:00 PM
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-sm text-neutral-400"
                        >
                            © {currentYear} SkyThru Rooftop. All rights reserved.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="flex gap-6 text-sm text-neutral-400"
                        >
                            <a href="#privacy" className="hover:text-[#f59e0b] transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#terms" className="hover:text-[#f59e0b] transition-colors">
                                Terms of Service
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Decorative Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f59e0b] via-[#1b4d3e] to-[#f59e0b]"></div>
        </footer>
    );
};

export default Footer;
