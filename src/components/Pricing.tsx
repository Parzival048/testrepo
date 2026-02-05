'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const plans = [
    {
        name: 'Basic',
        price: 29,
        period: 'month',
        description: 'Perfect for beginners starting their fitness journey',
        features: [
            'Access to gym equipment',
            'Locker room access',
            'Free WiFi',
            'Basic fitness assessment',
            '2 group classes/week',
        ],
        notIncluded: [
            'Personal training sessions',
            'Nutrition consultation',
            'Premium classes',
        ],
        popular: false,
        gradient: 'from-gray-600 to-gray-700',
        buttonClass: 'bg-white/10 hover:bg-white/20 text-white border border-white/20',
    },
    {
        name: 'Pro',
        price: 59,
        period: 'month',
        description: 'Most popular choice for serious fitness enthusiasts',
        features: [
            'Everything in Basic',
            'Unlimited group classes',
            '4 personal training sessions',
            'Nutrition consultation',
            'Access to sauna & spa',
            'Guest passes (2/month)',
            'Workout tracking app',
        ],
        notIncluded: [
            'Premium 1-on-1 coaching',
        ],
        popular: true,
        gradient: 'from-orange-500 to-amber-500',
        buttonClass: 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white',
    },
    {
        name: 'Elite',
        price: 99,
        period: 'month',
        description: 'Ultimate package for maximum results',
        features: [
            'Everything in Pro',
            'Unlimited personal training',
            'Priority class booking',
            'Premium recovery zone',
            'Monthly body composition',
            'Exclusive member events',
            'Bring a friend anytime',
            'Premium workout gear',
        ],
        notIncluded: [],
        popular: false,
        gradient: 'from-purple-500 to-violet-500',
        buttonClass: 'bg-white/10 hover:bg-white/20 text-white border border-white/20',
    },
];

export default function Pricing() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="pricing" className="py-24 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2" />
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Pricing Plans</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                        Choose Your
                        <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent"> Perfect Plan</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Flexible membership options designed to fit your lifestyle and fitness goals.
                        No hidden fees, cancel anytime.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className={`relative group ${plan.popular ? 'md:-mt-4 md:mb-[-16px]' : ''}`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                                    <div className="px-4 py-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full text-white text-sm font-semibold shadow-lg">
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            <div className={`relative h-full p-8 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-500 ${plan.popular ? 'border-2 border-orange-500/50 shadow-[0_0_50px_rgba(249,115,22,0.2)]' : 'border border-white/10 hover:border-white/20'}`}>
                                {/* Glow Effect for Popular */}
                                {plan.popular && (
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/5" />
                                )}

                                {/* Plan Header */}
                                <div className="relative">
                                    <div className={`inline-block px-3 py-1 rounded-lg bg-gradient-to-r ${plan.gradient} text-white text-sm font-medium mb-4`}>
                                        {plan.name}
                                    </div>

                                    <div className="flex items-baseline gap-1 mb-2">
                                        <span className="text-5xl font-bold text-white">${plan.price}</span>
                                        <span className="text-gray-400">/{plan.period}</span>
                                    </div>

                                    <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-300 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                    {plan.notIncluded.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start gap-3 opacity-50">
                                            <svg className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            <span className="text-gray-500 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <button
                                    onClick={scrollToContact}
                                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${plan.buttonClass}`}
                                >
                                    Get Started
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Guarantee Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-gray-300">30-day money-back guarantee • Cancel anytime</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
