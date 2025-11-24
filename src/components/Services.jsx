import React from 'react';
import { motion } from 'framer-motion';
import { Palette, TrendingUp, Globe, ArrowRight } from 'lucide-react';

const services = [
    {
        icon: <Palette className="w-10 h-10 text-accent" />,
        title: 'Web Design',
        description: 'Stunning, responsive, and user-centric designs that captivate your audience and elevate your brand identity.',
    },
    {
        icon: <Globe className="w-10 h-10 text-accent" />,
        title: 'SEO Mastery',
        description: 'Data-driven strategies to dominate search rankings and drive organic traffic to your digital doorstep.',
    },
    {
        icon: <TrendingUp className="w-10 h-10 text-accent" />,
        title: 'Media Marketing',
        description: 'Compelling campaigns across social platforms that engage users and convert followers into loyal customers.',
    },
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-secondary relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-medium tracking-widest uppercase mb-3"
                    >
                        Our Expertise
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-white"
                    >
                        World-Class Services
                    </motion.h3>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                            }}
                            className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="mb-6 p-4 bg-primary/50 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300 border border-white/5">
                                {service.icon}
                            </div>
                            <h4 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-accent transition-colors">
                                {service.title}
                            </h4>
                            <p className="text-text-dim mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <a href="#contact" className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all">
                                Learn More <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
