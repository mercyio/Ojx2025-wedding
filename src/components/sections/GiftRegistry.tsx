import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ShoppingBag, CreditCard, QrCode } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const GiftRegistry = () => {
  const registryOptions = [
    {
      title: "Amazon Registry",
      icon: <ShoppingBag className="h-10 w-10 text-teal-500" />,
      description: "We've created a wishlist with items we'd love for our new home",
      buttonText: "View Registry",
      buttonLink: "#"
    },
    {
      title: "Cash Gift",
      icon: <CreditCard className="h-10 w-10 text-teal-500" />,
      description: "If you prefer to give a monetary gift to help us start our life together",
      buttonText: "See Details",
      buttonLink: "#"
    },
    {
      title: "Scan to Gift",
      icon: <QrCode className="h-10 w-10 text-teal-500" />,
      description: "Scan this QR code to send a gift directly to our registry",
      buttonText: "View QR Code",
      buttonLink: "#"
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <SectionTitle 
        title="Gift Registry" 
        subtitle="Your presence is our present, but if you wish to give a gift, here are some options"
      />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="italic text-gold-700 font-serif text-lg">
            "We appreciate your love more than any gift"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {registryOptions.map((option, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">
                  {option.icon}
                </div>
                <h3 className="font-serif text-xl text-teal-800 mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <Button variant={index === 1 ? "secondary" : "outline"}>
                  {option.buttonText}
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* QR Code Preview (Just for visualization) */}
        <div className="mt-16 text-center">
          <div className="bg-white inline-block p-4 rounded-lg shadow-md">
            <div className="w-40 h-40 mx-auto border-2 border-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">QR Sample</span>
            </div>
          </div>
          <p className="mt-4 text-gray-600 max-w-md mx-auto">
            Scan to contribute to our honeymoon fund or send a gift directly
          </p>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-2">
            If you have any questions about the registry, please contact us.
          </p>
          <p className="text-gray-500 text-sm">
            Wedding Registry Code: OJx2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default GiftRegistry;