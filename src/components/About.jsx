import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, Zap } from 'lucide-react';

const stats = [
    { icon: <Users className="w-6 h-6" />, value: '500+', label: 'Clients Served' },
    { icon: <Award className="w-6 h-6" />, value: '50+', label: 'Awards Won' },
    { icon: <Clock className="w-6 h-6" />, value: '10+', label: 'Years Experience' },
    { icon: <Zap className="w-6 h-6" />, value: '24/7', label: 'Support' },
];

const About = () => {
    return (
        <section id="about" className="py-24 bg-primary relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-accent/20 rounded-2xl transform translate-x-4 translate-y-4" />
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                            alt="Team collaboration"
                            className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
                        />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-accent font-medium tracking-widest uppercase mb-3">
                            Who We Are
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            Architects of the <br /> Digital Future
                        </h3>
                        <p className="text-text-dim text-lg mb-8 leading-relaxed">
                            We are a collective of visionaries, designers, and strategists dedicated to redefining the digital landscape. Our mission is to empower brands with cutting-edge technology and compelling narratives that resonate on a global scale.
                        </p>
                        <p className="text-text-dim text-lg mb-10 leading-relaxed">
                            From humble beginnings to a global powerhouse, we've remained true to our core belief: that great design is not just about how it looks, but how it works.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="p-3 bg-secondary rounded-lg text-accent">
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                                        <p className="text-sm text-text-dim">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
