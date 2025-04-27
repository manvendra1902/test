import React from 'react';
import { motion } from 'framer-motion';

const TrustedBySection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p 
          className="text-center text-gray-500 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Trusted by industry leaders
        </motion.p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center items-center opacity-70">
          {/* Company Logo 1 */}
          <motion.div 
            className="w-32"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <svg className="w-full h-8 text-gray-500" viewBox="0 0 100 40" fill="currentColor">
              <rect width="100" height="10" rx="5" />
              <rect y="15" width="70" height="10" rx="5" />
              <rect y="30" width="80" height="10" rx="5" />
            </svg>
          </motion.div>
          
          {/* Company Logo 2 */}
          <motion.div 
            className="w-32"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <svg className="w-full h-8 text-gray-500" viewBox="0 0 100 40" fill="currentColor">
              <circle cx="20" cy="20" r="15" />
              <rect x="45" y="5" width="55" height="10" rx="5" />
              <rect x="45" y="25" width="55" height="10" rx="5" />
            </svg>
          </motion.div>
          
          {/* Company Logo 3 */}
          <motion.div 
            className="w-32"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <svg className="w-full h-8 text-gray-500" viewBox="0 0 100 40" fill="currentColor">
              <polygon points="20,0 40,30 0,30" />
              <rect x="45" y="5" width="55" height="10" rx="5" />
              <rect x="45" y="25" width="55" height="10" rx="5" />
            </svg>
          </motion.div>
          
          {/* Company Logo 4 */}
          <motion.div 
            className="w-32"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <svg className="w-full h-8 text-gray-500" viewBox="0 0 100 40" fill="currentColor">
              <rect x="0" y="10" width="40" height="20" rx="10" />
              <rect x="50" y="10" width="40" height="20" rx="10" />
            </svg>
          </motion.div>
          
          {/* Company Logo 5 */}
          <motion.div 
            className="w-32"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <svg className="w-full h-8 text-gray-500" viewBox="0 0 100 40" fill="currentColor">
              <rect width="30" height="30" rx="5" />
              <rect x="35" width="65" height="10" rx="5" />
              <rect x="35" y="15" width="45" height="10" rx="5" />
              <rect x="35" y="30" width="55" height="10" rx="5" />
            </svg>
          </motion.div>
          
          {/* Company Logo 6 */}
          <motion.div 
            className="w-32"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <svg className="w-full h-8 text-gray-500" viewBox="0 0 100 40" fill="currentColor">
              <circle cx="20" cy="20" r="20" />
              <rect x="45" y="15" width="55" height="10" rx="5" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
