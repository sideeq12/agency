import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
    {
        icon: <Search className="w-8 h-8" />,
        title: 'Discovery',
        description: 'We dive deep into your brand, goals, and audience to uncover the perfect strategy.',
    },
    {
        icon: <PenTool className="w-8 h-8" />,
        title: 'Design',
        description: 'Our creatives craft stunning visuals and intuitive interfaces tailored to your identity.',
    },
    {
        icon: <Code className="w-8 h-8" />,
        title: 'Development',
        description: 'We build robust, scalable solutions using the latest technologies and best practices.',
    },
    {
        icon: <Rocket className="w-8 h-8" />,
        title: 'Launch',
        description: 'We deploy your project with precision and provide ongoing support for growth.',
    },
];

const Process = () => {
    return (
        <section className="py-24 bg-secondary relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-medium tracking-widest uppercase mb-3"
                    >
                        How We Work
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-white"
                    >
                        Our Proven Process
                    </motion.h3>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-white/10 -z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                            }}
                            className="relative z-10"
                        >
                            <div className="bg-primary border border-white/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-accent shadow-lg shadow-accent/10">
                                {step.icon}
                            </div>
                            <h4 className="text-xl font-bold text-white text-center mb-3">{step.title}</h4>
                            <p className="text-text-dim text-center text-sm leading-relaxed px-4">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Process;
