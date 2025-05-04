import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Send, Users, Calendar, Music, MessageCircle, Gift, Phone } from 'lucide-react';
import toast from 'react-hot-toast';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attending: 'yes',
    guests: '0',
    songRequest: '',
    dietaryRestrictions: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [formStep, setFormStep] = useState(0);

  // Dummy RSVP count with base of 32
  const [rsvpCount, setRsvpCount] = useState(32);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    setFormStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setFormStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTimeout(() => {
      setSubmitted(true);

      // Increment RSVP count (1 for self + guest number if attending)
      if (formData.attending === 'yes') {
        const guestTotal = 1 + parseInt(formData.guests);
        setRsvpCount((prev) => prev + guestTotal);
      }

      toast.success('Your RSVP has been submitted!', {
        icon: '💌',
        style: {
          borderRadius: '10px',
          background: '#fff',
          color: '#333',
        },
      });
    }, 1000);
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 }
  };

  return (
    <div className="container mx-auto px-4 md:px-6">
      <SectionTitle 
        title="RSVP" 
        subtitle="Please let us know if you'll be joining us on our special day"
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative rounded-2xl shadow-xl overflow-hidden border border-gold-300 bg-teal-50">
          {/* Decorative gradient borders */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold-400 via-white to-gold-400 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
          <div className="absolute -left-16 -top-16 w-48 h-48 bg-gold-100 rounded-full opacity-20 blur-2xl"></div>
          <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-teal-100 rounded-full opacity-20 blur-2xl"></div>
          <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div 
                key="thank-you"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="p-12 text-center relative z-10"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center justify-center w-24 h-24 mb-8 rounded-full bg-gradient-to-br from-teal-100 to-gold-100"
                >
                  <Heart className="w-12 h-12 text-teal-600 fill-current" />
                </motion.div>
                <h3 className="font-serif text-3xl text-teal mb-4">Thank You!</h3>
                <p className="text-teal/90 mb-8 text-lg">
                  We're {formData.attending === 'yes' ? 'excited to celebrate with you' : 'sorry you can\'t make it'}!
                </p>
                <Button 
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="hover:scale-105 transform transition-transform"
                >
                  Update Response
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 md:p-12 relative z-10">
                <AnimatePresence mode="wait">
                  {formStep === 0 && (
                    <motion.div
                      key="step1"
                      variants={formVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.4 }}
                      className="space-y-6"
                    >
                      <div className="group">
                        <label className="flex items-center text-sm font-medium text-teal mb-2">
                          Full Name*
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/80 text-black backdrop-blur-sm border border-teal-200 focus:ring-2 focus:ring-gold-400 transition-all shadow-sm"
                          placeholder="Your name"
                        />
                      </div>

                      <div className="group">
                        <label className="flex items-center text-sm font-medium text-teal mb-2">
                          Email Address*
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/80 text-black backdrop-blur-sm border border-teal-200 focus:ring-2 focus:ring-gold-400 transition-all shadow-sm"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div className="flex justify-end mt-6">
                        <Button 
                          type="button"
                          onClick={nextStep}
                          variant="primary"
                          className="px-6 py-2 hover:scale-105 transform transition-transform"
                        >
                          Next
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {formStep === 1 && (
                    <motion.div
                      key="step2"
                      variants={formVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.4 }}
                      className="space-y-6"
                    >
                      <div className="group">
                        <label className="flex items-center text-sm font-medium text-teal mb-2">
                          Will you attend?*
                        </label>
                        <select
                          name="attending"
                          value={formData.attending}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/80 text-black backdrop-blur-sm border border-teal-200 focus:ring-2 focus:ring-gold-400 transition-all shadow-sm"
                        >
                          <option value="yes">Yes, I will attend</option>
                          <option value="no">No, I cannot attend</option>
                        </select>
                      </div>

                      <div className="group">
                        <label className="flex items-center text-sm font-medium text-teal mb-2">
                          Number of Guests
                        </label>
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/80 text-black backdrop-blur-sm border border-teal-200 focus:ring-2 focus:ring-gold-400 transition-all shadow-sm"
                          disabled={formData.attending === 'no'}
                        >
                          <option value="0">Just me</option>
                          <option value="1">Me + 1 guest</option>
                          <option value="2">Me + 2 guests</option>
                        </select>
                      </div>

                      <div className="flex justify-between mt-6">
                        <Button 
                          type="button"
                          onClick={prevStep}
                          variant="outline"
                          className="px-6 py-2 hover:scale-105 transform transition-transform"
                        >
                          Back
                        </Button>
                        <Button 
                          type="button"
                          onClick={nextStep}
                          variant="primary"
                          className="px-6 py-2 hover:scale-105 transform transition-transform"
                        >
                          Next
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {formStep === 2 && (
                    <motion.div
                      key="step3"
                      variants={formVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.4 }}
                      className="space-y-6"
                    >
                      <div className="group">
                        <label className="flex items-center text-sm font-medium text-teal mb-2">
                          Song Request
                        </label>
                        <input
                          type="text"
                          name="songRequest"
                          value={formData.songRequest}
                          onChange={handleChange}
                          placeholder="What song would make you dance?"
                          className="w-full px-4 py-3 rounded-lg bg-white/80 text-black backdrop-blur-sm border border-teal-200 focus:ring-2 focus:ring-gold-400 transition-all shadow-sm"
                        />
                      </div>

                      <div className="group">
                        <label className="flex items-center text-sm font-medium text-teal mb-2">
                          Message for the Couple
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Share your wishes or any additional information"
                          className="w-full px-4 py-3 rounded-lg bg-white/80 text-black backdrop-blur-sm border border-teal-200 focus:ring-2 focus:ring-gold-400 transition-all shadow-sm h-24"
                        />
                      </div>

                      <div className="flex justify-between mt-6">
                        <Button 
                          type="button"
                          onClick={prevStep}
                          variant="outline"
                          className="px-6 py-2 hover:scale-105 transform transition-transform"
                        >
                          Back
                        </Button>
                        <Button 
                          type="submit"
                          variant="primary"
                          className="px-8 py-3 text-lg hover:scale-105 transform transition-transform bg-gradient-to-r from-gold-400 to-white-400 text-white"
                        >
                          <Send className="w-5 h-5 mr-2" />
                          Send RSVP
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Progress indicator */}
                <div className="flex justify-center mt-8">
                  <div className="flex space-x-2">
                    {[0, 1, 2].map((step) => (
                      <motion.div
                        key={step}
                        className={`h-2 rounded-full ${
                          step === formStep ? 'w-8 bg-gold-400' : 'w-2 bg-white/50'
                        }`}
                        animate={{
                          width: step === formStep ? 32 : 8,
                          backgroundColor: step === formStep ? '#f0c040' : 'rgba(255, 255, 255, 0.5)'
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    ))}
                  </div>
                </div>

                {/* Contact section */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center max-w-2xl mx-auto mt-10"
                >
                  <p className="text-teal/90 mb-8 mt-20 text-lg">
                    We're so excited to celebrate our special day with you. If you have any questions, please don't hesitate to contact us.
                  </p>
                  <div className="flex justify-center items-center flex-wrap gap-6">
                    <Button variant="secondary" className="group shadow-md hover:shadow-lg px-8 py-3 text-lg text-white border border-white">
                      <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                      Contact Us
                    </Button>
                  </div>
                </motion.div>
              </form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default RSVP;
