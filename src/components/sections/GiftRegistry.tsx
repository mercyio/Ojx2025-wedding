import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Heart, Copy, Check, ArrowLeft } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const GiftRegistry = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleCopyAccount = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="container mx-auto px-4 md:px-6">
      <SectionTitle 
        title="Gift Registry" 
        subtitle="Your presence is our present, but if you wish to give a gift"
      />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="italic text-gold-700 font-serif text-lg">
            "We appreciate your love more than any gift"
          </p>
        </div>

        <div className="flex justify-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow text-center max-w-md w-full"
          >
            <AnimatePresence mode="wait">
              {showDetails ? (
                <motion.div 
                  key="bank-details"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="relative z-10"
                >
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 via-gold-400 to-teal-400 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
                  
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center justify-center w-24 h-24 my-6 rounded-full bg-gradient-to-br from-teal-100 to-gold-100"
                  >
                    <Heart className="w-12 h-12 text-teal-600 fill-current" />
                  </motion.div>
                  
                  <h3 className="font-serif text-2xl text-teal-800 mb-6">Bank Account Details</h3>
                  
                  <div className="space-y-5 mb-8">
                    <div className="bg-teal-50 p-5 rounded-xl mx-auto max-w-sm">
                      <p className="text-gray-700 font-medium mb-2 text-sm">Account Name</p>
                      <div className="flex items-center justify-between">
                        <p className="text-teal-800 font-semibold">Omolara & Joshua</p>
                        <button 
                          onClick={() => handleCopyAccount("Omolara & Joshua", "name")}
                          className="text-teal-600 hover:text-teal-800 p-2 rounded-full hover:bg-teal-100 transition-colors"
                          aria-label="Copy account name"
                        >
                          {copiedField === "name" ? 
                            <Check className="h-5 w-5" /> : 
                            <Copy className="h-5 w-5" />
                          }
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-teal-50 p-5 rounded-xl mx-auto max-w-sm">
                      <p className="text-gray-700 font-medium mb-2 text-sm">Bank Name</p>
                      <div className="flex items-center justify-between">
                        <p className="text-teal-800 font-semibold">First Bank of Nigeria</p>
                        <button 
                          onClick={() => handleCopyAccount("First Bank of Nigeria", "bank")}
                          className="text-teal-600 hover:text-teal-800 p-2 rounded-full hover:bg-teal-100 transition-colors"
                          aria-label="Copy bank name"
                        >
                          {copiedField === "bank" ? 
                            <Check className="h-5 w-5" /> : 
                            <Copy className="h-5 w-5" />
                          }
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-teal-50 p-5 rounded-xl mx-auto max-w-sm">
                      <p className="text-gray-700 font-medium mb-2 text-sm">Account Number</p>
                      <div className="flex items-center justify-between">
                        <p className="text-teal-800 font-semibold tracking-wider">1234567890</p>
                        <button 
                          onClick={() => handleCopyAccount("1234567890", "number")}
                          className="text-teal-600 hover:text-teal-800 p-2 rounded-full hover:bg-teal-100 transition-colors"
                          aria-label="Copy account number"
                        >
                          {copiedField === "number" ? 
                            <Check className="h-5 w-5" /> : 
                            <Copy className="h-5 w-5" />
                          }
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-gray-600 text-sm italic mb-6">
                      Thank you for the gift!
                    </p>
                    
                    <Button 
                      onClick={() => setShowDetails(false)}
                      variant="outline"
                      className="hover:scale-105 transform transition-transform"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="gift-info"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-center mb-4">
                    <CreditCard className="h-12 w-12 text-teal-500" />
                  </div>
                  <h3 className="font-serif text-2xl text-teal-800 mb-3">Cash Gift</h3>
                  <p className="text-gray-600 mb-6">
                    We would be honored if you would consider celebrating with us with a monetary gift.
                  </p>
                  <Button 
                    variant="secondary"
                    onClick={() => setShowDetails(true)}
                  >
                    See Details
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default GiftRegistry;
