'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'Lost 30 lbs in 6 months',
        image: '👩🏼',
        rating: 5,
        text: 'This gym completely transformed my life. The trainers are incredibly supportive and the community keeps me motivated every single day.',
    },
    {
        name: 'Michael Chen',
        role: 'Professional Athlete',
        image: '👨🏻',
        rating: 5,
        text: 'Best equipment I\'ve ever trained with. The 24/7 access fits perfectly with my schedule, and the personal training is world-class.',
    },
    {
        name: 'Emma Rodriguez',
        role: 'Fitness Enthusiast',
        image: '👩🏽',
        rating: 5,
        text: 'The group classes are amazing! I\'ve made so many friends here and actually look forward to working out every day.',
    },
    {
        name: 'David Kim',
        role: 'Business Executive',
        image: '👨🏻‍💼',
        rating: 5,
        text: 'As a busy professional, the flexible hours and premium facilities make this the perfect gym. Worth every penny of the Elite membership.',
    },
    {
        name: 'Lisa Martinez',
        role: 'Marathon Runner',
        image: '🏃‍♀️',
        rating: 5,
        text: 'The recovery zone and nutrition counseling have taken my performance to the next level. Couldn\'t imagine training anywhere else.',
    },
    {
        name: 'James Wilson',
        role: 'Gained 20 lbs of muscle',
        image: '💪',
        rating: 5,
        text: 'The trainers here really know their stuff. They helped me achieve gains I never thought possible. Incredible transformation!',
    },
];

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="testimonials" className="py-24 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                        What Our
                        <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent"> Members Say</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Join thousands of satisfied members who have transformed their lives with us.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative h-full p-6 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-orange-500/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]">
                                {/* Quote Icon */}
                                <div className="absolute top-4 right-4 text-4xl text-orange-500/20">
                                    "
                                </div>

                                {/* Rating Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <motion.svg
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                                            className="w-5 h-5 text-amber-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </motion.svg>
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    "{testimonial.text}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                                        {testimonial.image}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white">{testimonial.name}</div>
                                        <div className="text-sm text-orange-400">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
                >
                    {[
                        { number: '4.9', label: 'Average Rating' },
                        { number: '2000+', label: 'Reviews' },
                        { number: '98%', label: 'Satisfaction' },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl font-bold text-white">{stat.number}</div>
                            <div className="text-gray-500">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
