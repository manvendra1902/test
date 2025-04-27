import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  MessageSquare, 
  BarChart3, 
  CreditCard, 
  Shield, 
  AppWindow
} from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const features: FeatureProps[] = [
  {
    title: "Automated Workflows",
    description: "Create customized workflows that automate repetitive tasks and streamline business processes.",
    icon: <Zap className="h-10 w-10" />,
    delay: 0
  },
  {
    title: "Intelligent Conversations",
    description: "Build AI-powered conversational agents that engage customers and provide personalized support.",
    icon: <MessageSquare className="h-10 w-10" />,
    delay: 0.1
  },
  {
    title: "Data Analysis",
    description: "Extract meaningful insights from your data with AI-powered analytics and visualization tools.",
    icon: <BarChart3 className="h-10 w-10" />,
    delay: 0.2
  },
  {
    title: "Personalized Recommendations",
    description: "Deliver tailored product and content recommendations to increase engagement and conversions.",
    icon: <CreditCard className="h-10 w-10" />,
    delay: 0.3
  },
  {
    title: "Advanced Security",
    description: "Enterprise-grade security with encryption, role-based access controls, and compliance features.",
    icon: <Shield className="h-10 w-10" />,
    delay: 0.4
  },
  {
    title: "Integration Ecosystem",
    description: "Seamlessly connect with your existing tech stack through our extensive API and pre-built integrations.",
    icon: <AppWindow className="h-10 w-10" />,
    delay: 0.5
  }
];

const FeatureCard: React.FC<FeatureProps> = ({ title, description, icon, delay }) => {
  return (
    <motion.div 
      className="feature-card bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Powerful AI Features</h2>
          <p className="text-xl text-gray-600">Our platform provides everything you need to build, deploy, and manage intelligent AI agents for your business.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
