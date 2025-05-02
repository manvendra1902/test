import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="pt-28 pb-20 lg:pt-32 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Supercharge Your Business with <span className="text-primary">AI Agents</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Deploy powerful AI agents that streamline operations, enhance customer engagement, and drive business growth - all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#pricing" className="btn-primary bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-md text-center">
                Get Started
              </a>
              <a href="#features" className="border border-gray-300 hover:border-primary text-gray-700 hover:text-primary font-medium px-8 py-3 rounded-md text-center transition-colors duration-200">
                See Features
              </a>
            </div>
            <div className="red-box mt-6">
              Limited Time Offer: Sign up now and get 30% off your first 3 months!
            </div>
            
            <div className="mt-6 flex items-center text-gray-500 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No credit card required for trial
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1593642633279-1796119d5482?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="AI Platform Dashboard" 
              className="rounded-lg shadow-xl w-full" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
