import { motion } from 'framer-motion';
import EnquiryForm from './EnquiryForm';

const EnquiryCTA = ({ selectedPackage }) => {

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
                    <EnquiryForm selectedPackage={selectedPackage} />
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-20"
            >
                <p className="text-[#f59e0b] font-serif italic text-2xl animate-pulse">✨ Make your moments magical at SkyThru Rooftop ✨</p>
            </motion.div>
        </section >
    );
};

export default EnquiryCTA;
