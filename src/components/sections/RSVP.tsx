import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
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

  // Dummy RSVP count with base of 32
  const [rsvpCount, setRsvpCount] = useState(32);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
        <div className="relative rounded-2xl shadow-xl overflow-hidden border border-gold-300 bg-teal-600">
          {/* Decorative gradient borders */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold-400 via-white to-gold-400 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
          <div className="absolute -left-16 -top-16 w-48 h-48 bg-gold-100 rounded-full opacity-20 blur-2xl"></div>
          <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-teal-100 rounded-full opacity-20 blur-2xl"></div>
          <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>

          {/* RSVP Count
          <div className="text-center mt-8 relative z-10">
            <p className="text-2xl font-semibold text-white">
              🎉 {rsvpCount} {rsvpCount === 1 ? 'guest is' : 'guests are'} attending so far!
            </p>
          </div> */}

          {submitted ? (
            <div className="p-12 text-center relative z-10">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="inline-flex items-center justify-center w-24 h-24 mb-8 rounded-full bg-gradient-to-br from-teal-100 to-gold-100"
              >
                <Heart className="w-12 h-12 text-teal-600 fill-current" />
              </motion.div>
              <h3 className="font-serif text-3xl text-white mb-4">Thank You!</h3>
              <p className="text-white/90 mb-8 text-lg">
                We're {formData.attending === 'yes' ? 'excited to celebrate with you' : 'sorry you can\'t make it'}!
              </p>
              <Button 
                onClick={() => setSubmitted(false)}
                variant="outline"
                className="hover:scale-105 transform transition-transform"
              >
                Update Response
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 md:p-12 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="group">
                    <label className="flex items-center text-sm font-medium text-white mb-2">
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
                    <label className="flex items-center text-sm font-medium text-white mb-2">
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

                  <div className="group">
                    <label className="flex items-center text-sm font-medium text-white mb-2">
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
                </div>

                <div className="space-y-6">
                  <div className="group">
                    <label className="flex items-center text-sm font-medium text-white mb-2">
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

                  <div className="group">
                    <label className="flex items-center text-sm font-medium text-white mb-2">
                     
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
                </div>
              </div>

              {/* Contact section */}
              <div className="text-center max-w-2xl mx-auto mt-10">
                <p className="text-white/90 mb-8 text-lg">
                  We're so excited to celebrate our special day with you. If you have any questions, please don't hesitate to contact us.
                </p>
                <div className="flex justify-center items-center flex-wrap gap-6">
                  <Button 
                    type="submit"
                    variant="primary"
                    className="px-8 py-3 text-lg hover:scale-105 transform transition-transform bg-gradient-to-r from-gold-400 to-white-400 text-white"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send RSVP
                  </Button>

                  <Button variant="secondary" className="group shadow-md hover:shadow-lg px-8 py-3 text-lg text-white border border-white">
                    <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Contact Us
                  </Button>
                </div>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default RSVP;
