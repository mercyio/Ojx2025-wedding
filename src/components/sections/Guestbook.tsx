import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewMessage(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newMessage.name.trim() === '' || newMessage.message.trim() === '') {
      return;
    }
    
    const message = {
      id: messages.length + 1,
      name: newMessage.name,
      message: newMessage.message,
      date: "Just now"
    };
    
    setMessages([message, ...messages]);
    setNewMessage({ name: '', message: '' });
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
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
        <div className="bg-white p-8 rounded-2xl shadow-xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 via-gold-400 to-teal-400 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
          
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
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow"
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
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow"
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
        </div>
        
        {/* Message List */}
        <div className="space-y-6">
          {messages.map((msg, index) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-xl shadow-md relative overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-100 rounded-full -translate-y-12 translate-x-12 opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
              
              <Heart className="absolute top-4 right-4 h-5 w-5 text-gold-400 group-hover:scale-125 transition-transform" />
              
              <h4 className="font-serif text-xl text-teal-800 mb-3">{msg.name}</h4>
              <p className="text-gray-700 mb-3 relative z-10">{msg.message}</p>
              <p className="text-sm text-gray-500">{msg.date}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Guestbook;