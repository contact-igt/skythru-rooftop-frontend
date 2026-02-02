import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Video, Play } from 'lucide-react';
import { INSTAGRAM_VIDEOS } from '../data/constants';

const VideoItem = ({ video, currentPlayingId, onPlayToggle }) => {
    const videoRef = useRef(null);
    const isPlaying = currentPlayingId === video.id;

    // Sync video element with state
    useEffect(() => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
            } else {
                videoRef.current.pause();
            }
        }
    }, [isPlaying]);

    return (
        <div className="relative w-full aspect-[10/16] bg-black cursor-pointer group" onClick={() => onPlayToggle(video.id)}>
            <video
                ref={videoRef}
                src={video.embedUrl}
                poster={video.thumbnail}
                className="w-full h-full object-cover"
                playsInline
                onEnded={() => onPlayToggle(null)}
            />

            {/* Play Button Overlay */}
            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-2xl"
                    >
                        <Play className="text-white fill-white ml-1" size={32} />
                    </motion.div>
                </div>
            )}
        </div>
    );
};

const InstagramVideos = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentPlayingId, setCurrentPlayingId] = useState(null);

    const handleVideoToggle = (id) => {
        if (id === null) {
            setCurrentPlayingId(null);
        } else {
            // If clicking the already playing video, pause it. Else play the new one.
            setCurrentPlayingId(prev => prev === id ? null : id);
        }
    };

    // Auto-play slider
    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? INSTAGRAM_VIDEOS.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === INSTAGRAM_VIDEOS.length - 1 ? 0 : prev + 1));
    };

    // Get visible videos (current and next 2 for desktop, 1 for mobile)
    const getVisibleVideos = () => {
        const videos = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % INSTAGRAM_VIDEOS.length;
            videos.push(INSTAGRAM_VIDEOS[index]);
        }
        return videos;
    };

    return (
        <section id="videos" className="py-24 px-6 bg-gradient-to-b from-[#f9f9f9] to-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-1/4 right-[5%] w-96 h-96 rounded-full bg-[#f59e0b]/10 blur-3xl -z-10" />
            <div className="absolute bottom-1/4 left-[10%] w-64 h-64 rounded-full bg-[#1b4d3e]/5 blur-3xl -z-10" />

            <div className="container mx-auto max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Video className="text-[#f59e0b]" size={40} />
                        <h2 className="text-5xl md:text-6xl font-serif text-[#1b4d3e]">
                            Event Videos
                        </h2>
                    </div>
                    <p className="text-neutral-500 max-w-2xl mx-auto text-sm leading-relaxed">
                        Watch our latest celebration moments and event highlights. Experience the magic
                        of unforgettable celebrations at SkyThru Rooftop.
                    </p>
                </motion.div>

                {/* Video Slider */}
                <div className="relative">
                    {/* Left Arrow */}
                    <button
                        onClick={() => {
                            handlePrevious();
                        }}
                        className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-20 bg-[#f59e0b] hover:bg-[#1b4d3e] text-white p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
                        aria-label="Previous video"
                    >
                        <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={() => {
                            handleNext();
                        }}
                        className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-20 bg-[#f59e0b] hover:bg-[#1b4d3e] text-white p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
                        aria-label="Next video"
                    >
                        <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
                    </button>

                    {/* Slider Container */}
                    <div className="overflow-hidden rounded-3xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <AnimatePresence mode="wait">
                                {getVisibleVideos().map((video, idx) => {
                                    return (
                                        <motion.div
                                            key={`${currentIndex}-${idx}`}
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -100 }}
                                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                                            className={`group relative overflow-hidden rounded-[2rem] bg-white shadow-xl hover:shadow-2xl transition-all duration-300 ${idx > 0 ? 'hidden md:block' : ''
                                                }`}
                                        >
                                            <VideoItem
                                                video={video}
                                                currentPlayingId={currentPlayingId}
                                                onPlayToggle={handleVideoToggle}
                                            />
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {INSTAGRAM_VIDEOS.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setCurrentIndex(idx);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                                    ? 'w-8 bg-[#f59e0b]'
                                    : 'w-2 bg-neutral-300 hover:bg-[#1b4d3e]'
                                    }`}
                                aria-label={`Go to video ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-neutral-600 mb-6 text-sm italic font-serif">
                        🎬 Experience the magic of our celebrations 🎬
                    </p>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 bg-[#1b4d3e] text-white px-12 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#f59e0b] transition-all shadow-xl"
                    >
                        <Video size={20} />
                        Plan Your Event
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default InstagramVideos;
