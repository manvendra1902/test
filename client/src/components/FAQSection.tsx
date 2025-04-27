import React from 'react';
import { motion } from 'framer-motion';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
}

const faqItems: FAQItemProps[] = [
  {
    question: "What types of AI agents can I build?",
    answer: "Our platform supports a wide range of AI agents, including customer service chatbots, data analysis agents, content generation assistants, sales support agents, and workflow automation tools. You can customize these agents to fit your specific business needs and integrate them with your existing systems.",
    value: "item-1"
  },
  {
    question: "Do I need technical expertise to use LaunchAI?",
    answer: "No, LaunchAI is designed to be user-friendly for both technical and non-technical users. Our no-code interface allows you to build, deploy, and manage AI agents without programming knowledge. However, for more advanced customization, we do offer developer tools and API access.",
    value: "item-2"
  },
  {
    question: "How secure is the platform?",
    answer: "Security is our top priority. LaunchAI employs enterprise-grade security measures including end-to-end encryption, role-based access controls, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA. Your data is always protected and remains your property.",
    value: "item-3"
  },
  {
    question: "Can I integrate LaunchAI with my existing systems?",
    answer: "Yes, LaunchAI offers comprehensive integration capabilities. We provide pre-built connectors for popular business tools and CRM systems, along with a robust API for custom integrations. Our platform can seamlessly connect with your existing workflows, databases, and third-party applications.",
    value: "item-4"
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer tiered support based on your plan. All customers receive access to our comprehensive documentation, knowledge base, and community forums. Professional and Enterprise plans include priority support with faster response times, and Enterprise customers benefit from dedicated account management and 24/7 support options.",
    value: "item-5"
  }
];

const FAQSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Find answers to common questions about our platform.</p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={item.value}>
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p className="pt-2 pb-4">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
