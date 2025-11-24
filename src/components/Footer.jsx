import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary border-t border-white/10 py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <a href="#" className="text-2xl font-serif font-bold text-white tracking-wider">
                        AGENCY<span className="text-accent">.</span>
                    </a>
                    <p className="text-text-dim text-sm mt-2">
                        © 2024 Agency Inc. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-8">
                    <a href="#" className="text-text-dim hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="text-text-dim hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
