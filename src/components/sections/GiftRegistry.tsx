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
      <SectionTitle title="Gift Registry" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="italic text-gold-700 font-serif text-lg">
            "Your presence is our present, but if you wish to give a gift"
          </p>
        </div>

        <div className="flex justify-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow text-center max-w-md w-full h-[440px] flex flex-col justify-between"
          >
            <AnimatePresence mode="wait">
              {showDetails ? (
                <motion.div
                  key="bank-details"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ type: 'spring', duration: 0.4 }}
                  className="relative z-10 flex flex-col justify-between h-full"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 via-gold-400 to-teal-400 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>

                  <div className="flex flex-col items-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', duration: 0.4, delay: 0.1 }}
                      className="inline-flex items-center justify-center w-16 h-16 my-4 rounded-full bg-gradient-to-br from-teal-100 to-gold-100"
                    >
                      <Heart className="w-5 h-5 text-teal-600 fill-current" />
                    </motion.div>

                    {/* <h3 className="font-serif text-xl text-teal-800 mb-4">Bank Account Details</h3> */}

                    <div className="space-y-3 text-left w-full">
                      {/* Account Name */}
                      <div className="bg-teal-50 p-3 rounded-lg text-sm">
                        <p className="text-gray-500 text-xs mb-1">Account Name</p>
                        <div className="flex items-center justify-between">
                          <span className="text-teal-800 font-medium">Vincent Joshua O.</span>
                          <button
                            onClick={() => handleCopyAccount("Vincent Joshua O.", "name")}
                            className="text-teal-600 hover:text-teal-800 p-1 rounded-full hover:bg-teal-100 transition"
                            aria-label="Copy account name"
                          >
                            {copiedField === "name" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      {/* Bank Name */}
                      <div className="bg-teal-50 p-3 rounded-lg text-sm">
                        <p className="text-gray-500 text-xs mb-1">Bank Name</p>
                        <div className="flex items-center justify-between">
                          <span className="text-teal-800 font-medium">Access Bank of Nigeria</span>
                          <button
                            onClick={() => handleCopyAccount("Access Bank of Nigeria", "bank")}
                            className="text-teal-600 hover:text-teal-800 p-1 rounded-full hover:bg-teal-100 transition"
                            aria-label="Copy bank name"
                          >
                            {copiedField === "bank" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      {/* Account Number */}
                      <div className="bg-teal-50 p-3 rounded-lg text-sm">
                        <p className="text-gray-500 text-xs mb-1">Account Number</p>
                        <div className="flex items-center justify-between">
                          <span className="text-teal-800 font-medium tracking-wide">0695285216</span>
                          <button
                            onClick={() => handleCopyAccount("0695285216", "number")}
                            className="text-teal-600 hover:text-teal-800 p-1 rounded-full hover:bg-teal-100 transition"
                            aria-label="Copy account number"
                          >
                            {copiedField === "number" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-gray-500 text-xs italic mb-3">
                      Thank you for the gift!
                    </p>
                    <Button
                      onClick={() => setShowDetails(false)}
                      variant="outline"
                      className="text-sm px-3 py-1"
                    >
                      <ArrowLeft className="w-3 h-3 mr-2" />
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
                  className="flex flex-col justify-center items-center h-full"
                >
                  <div className="mb-4">
                    <CreditCard className="h-10 w-10 text-teal-500" />
                  </div>
                  <h3 className="font-serif text-xl text-teal-800 mb-2">Cash Gift</h3>
                  <p className="text-gray-600 text-sm mb-6 px-2">
                    We would be honored if you would consider celebrating with us with a monetary gift.
                  </p>
                  <Button
                    variant="secondary"
                    onClick={() => setShowDetails(true)}
                    className="text-sm px-4 py-2"
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
