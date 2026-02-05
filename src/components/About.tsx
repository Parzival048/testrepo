'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Expert Trainers' },
    { number: '10K+', label: 'Members Trained' },
    { number: '3', label: 'Locations' },
];

const values = [
    {
        icon: '🎯',
        title: 'Results-Driven',
        description: 'Every program is designed with measurable outcomes in mind.',
    },
    {
        icon: '🤝',
        title: 'Community First',
        description: 'We build connections that extend beyond the gym floor.',
    },
    {
        icon: '💡',
        title: 'Innovation',
        description: 'Constantly evolving with the latest fitness science and technology.',
    },
    {
        icon: '❤️',
        title: 'Passion',
        description: 'We love what we do, and it shows in everything we offer.',
    },
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="about" className="py-24 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl" />
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">About Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                            More Than Just a
                            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent"> Gym</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            Founded in 2010, we've grown from a small neighborhood gym into a premier fitness destination.
                            Our mission is simple: to help every member become the best version of themselves.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            We believe fitness is not just about physical strength—it's about mental resilience,
                            community support, and sustainable lifestyle changes. That's why we offer a holistic
                            approach to wellness that goes beyond traditional training.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                    className="text-center p-4 rounded-2xl bg-white/5 border border-white/10"
                                >
                                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Values */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                    className="group p-6 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 transition-all duration-500 hover:border-orange-500/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]"
                                >
                                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        {value.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="mt-8 p-6 rounded-3xl bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center text-white text-xl">
                                    📍
                                </div>
                                <div>
                                    <div className="text-white font-semibold">Visit Our Main Location</div>
                                    <div className="text-gray-400 text-sm">123 Fitness Street, Downtown</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
