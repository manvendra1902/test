import React from 'react';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Start Building Your AI Agents Today</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of businesses that are transforming their operations with LaunchAI.</p>
          <motion.a 
            href="#pricing" 
            className="inline-block bg-white text-primary hover:bg-gray-100 font-medium px-8 py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-200"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            View Pricing Plans
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
