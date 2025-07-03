import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Heart, Send } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const Guestbook = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      message: "Congratulations! I'm so happy for both of you. Your love story is inspiring!",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Michael Chen",
      message: "Wishing you a lifetime of love and happiness. Can't wait to celebrate with you!",
      date: "3 days ago"
    },
    {
      id: 3,
      name: "Adeola Babatunde",
      message: "May God bless your union. Looking forward to the big day!",
      date: "5 days ago"
    }
  ]);

  const [newMessage, setNewMessage] = useState({
    name: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewMessage(prev => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
    
  //   if (newMessage.name.trim() === '' || newMessage.message.trim() === '') {
  //     return;
  //   }
    
  //   const message = {
  //     id: messages.length + 1,
  //     name: newMessage.name,
  //     message: newMessage.message,
  //     date: "Just now"
  //   };
    
  //   setMessages([message, ...messages]);
  //   setNewMessage({ name: '', message: '' });
  //   setSubmitted(true);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
       if (newMessage.name.trim() === '' || newMessage.message.trim() === '') {
      return;
    }
  
    try {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbwfz4ggsUWAOGtOW97NQ-YcEg7Yg05R6najn1TuMsIkvk4O9OpyXqQLBQacBK-KUunqew/exec';
  
      const form = new FormData();
      Object.entries(newMessage).forEach(([key, value]) => {
        form.append(key, value);
      });
  
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: form,
      });
  
      const result = await response.text();
  
      if (result === 'Success') {
        const message = {
          id: messages.length + 1,
          name: newMessage.name,
          message: newMessage.message,
          date: 'Just now',
        };
        setMessages([message, ...messages]);
        setNewMessage({ name: '', message: '' });
        setSubmitted(true);
      } else {
        alert('Something went wrong. Try again later.');
      }
    } catch (err) {
      console.error(err);
      alert('Submission failed. Please check your internet or try again later.');
    }
  };
    const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="pb-0">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Guestbook" 
          subtitle="Share your love and well wishes for the couple"
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Message Form */}
          <div className="bg-teal-100 p-8 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 via-gold-400 to-teal-400 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
            
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
                  <p className="text-teal/90 mb-8 text-sm">
                    Your message has been added to our guestbook. We appreciate your kind words!
                  </p>
                  <Button 
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="hover:scale-105 transform transition-transform"
                  >
                    Add Another Message
                  </Button>
                </motion.div>
              ) : (
                <>
                  <h3 className="font-serif text-2xl text-teal-800 mb-6 flex items-center">
                    <Heart className="w-6 h-6 text-gold-400 mr-2" />
                    Leave Your Message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name*
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={newMessage.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow text-xs"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message*
                      </label>
                      <textarea
                        name="message"
                        value={newMessage.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow text-xs"
                        placeholder="Share your wishes for Omolara & Joshua..."
                      />
                    </div>
                    
                    <div className="text-right">
                      <Button type="submit" variant="primary" className="hover:scale-105 transform transition-transform">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  ) 
}

export default Guestbook;
