import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PricingTierProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  buttonLink: string;
  delay: number;
}

const pricingTiers: PricingTierProps[] = [
  {
    title: "Starter",
    description: "Perfect for small businesses and startups",
    price: "$49",
    features: [
      "2 AI agents",
      "5,000 monthly interactions",
      "Basic analytics",
      "Email support"
    ],
    buttonText: "Get Started",
    buttonLink: "#",
    delay: 0
  },
  {
    title: "Professional",
    description: "Ideal for growing businesses",
    price: "$99",
    features: [
      "5 AI agents",
      "25,000 monthly interactions",
      "Advanced analytics",
      "Priority support",
      "Custom workflows"
    ],
    isPopular: true,
    buttonText: "Get Started",
    buttonLink: "#",
    delay: 0.1
  },
  {
    title: "Enterprise",
    description: "For organizations with advanced needs",
    price: "$299",
    features: [
      "Unlimited AI agents",
      "100,000 monthly interactions",
      "Enterprise analytics",
      "24/7 dedicated support",
      "Custom integrations",
      "SSO & advanced security"
    ],
    buttonText: "Contact Sales",
    buttonLink: "#contact",
    delay: 0.2
  }
];

const PricingCard: React.FC<PricingTierProps> = ({ 
  title, 
  description, 
  price, 
  features, 
  isPopular, 
  buttonText, 
  buttonLink,
  delay
}) => {
  return (
    <motion.div 
      className={`pricing-card bg-white rounded-lg border-2 ${isPopular ? 'border-primary shadow-lg' : 'border-gray-200'} overflow-hidden transition-all duration-300 relative`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold py-1 px-3 rounded-bl">
          MOST POPULAR
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600">/month</span>
        </div>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-primary mt-0.5 mr-2" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <a 
          href={buttonLink} 
          className={`block w-full text-center py-2 px-4 ${
            isPopular 
              ? 'bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg' 
              : 'border-2 border-primary text-primary hover:bg-primary/5'
          } font-medium rounded-md transition-colors duration-200`}
        >
          {buttonText}
        </a>
      </div>
    </motion.div>
  );
};

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the plan that's right for your business, with no hidden fees.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={index} {...tier} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
