import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Gift, Plus, Phone } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const WeddingDetails = () => {
  const details = [
    {
      title: "Ceremony Date",
      icon: <Calendar className="h-8 w-8 text-gold-500" />,
      description: "Saturday, October 29, 2025",
       extra: "Save the date — we’re saying ‘I do!’ "
    },
    {
      title: "Ceremony Time",
      icon: <Clock className="h-8 w-8 text-gold-500" />,
      description: "11:00 AM",
      extra: "Come early, grab a seat, and enjoy the celebration"
    },
    {
      title: "Venue",
      icon: <MapPin className="h-8 w-8 text-gold-500" />,
      description: "Havana Royale Hall",
      extra: "Havana Royale Hall, Ibadan, Oyo State, Nigeria"
    },
    {
      title: "Slay Code",
      icon: <Gift className="h-8 w-8 text-gold-500" />,
      description: "Sage Green and Champagne Gold",
      extra: "Come through in style. We wanna see you shine!"
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <SectionTitle
        title="Wedding Details"
        subtitle="All the information you need to join us on our special day"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
        {details.map((detail, index) => {
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
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-white to-teal-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden border border-teal-200/100">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold-200 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="flex items-start gap-6 relative z-10">
                  <div className="p-3 bg-white rounded-xl shadow-md group-hover:scale-110 transition-transform">
                    {detail.icon}
                  </div>
                  
                  <div>
                    <h3 className="font-serif text-xl text-teal-800 mb-2">{detail.title}</h3>
                    <p className="text-gray-700 font-medium mb-1">{detail.description}</p>
                    <p className="text-gray-500 text-sm">{detail.extra}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      
     {/* Contact section moved above reception */}
        <div className="text-center max-w-2xl mx-auto mb-34"> {/* Increased margin bottom */}
          <p className="text-gray-700 mb-8 text-lg">
              {/* We're so excited to celebrate our special day with you. If you have any questions about the wedding, please don't hesitate to contact us. */}
          </p>
        <div className="flex justify-center mb-8"> {/* Added margin bottom for spacing */}
           {/* <Button variant="secondary" className="group shadow-md hover:shadow-lg transition-shadow">
            <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
             Contact Us
            </Button> */}
       </div>
  
                  {/* Love quote with bold teal green text */}
               <blockquote className="mt-20">
              <p className="text-xl md:text-2xl font-extrabold text-gold-600 italic">
                      "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
             </p>
                <footer className="mt-2 text-gray-600">— Couple</footer>
               </blockquote>
            </div>

      
      {/* Reception section moved down with added margin top */}
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden mt-20"> {/* Added margin top */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 via-gold-400 to-teal-400 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
        
        <div className="relative z-10 text-teal-100">
          <h3 className="font-serif text-3xl text-teal-800 mb-6 text-center">Reception</h3>
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto text-sm">Following the ceremony, please join us for lunch, dancing, and celebration at the same venue starting at 12:00 PM.</p>
          
<div className="flex flex-wrap justify-center gap-4 mb-12">
  <a
    href="https://calendar.app.google/7EiM5fsV8DUoZdvR9"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="primary" className="group">
      <Plus className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform" />
      Add to Google Calendar
    </Button>
  </a>

  <a
    href="https://calendar.app.google/7EiM5fsV8DUoZdvR9"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="outline" className="group">
      <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
      Add to Apple Calendar
    </Button>
  </a>
</div>


          
          <div className="rounded-2xl overflow-hidden h-64 md:h-96 shadow-lg">
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.5186221229994!2d3.904321!3d7.439682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ed5f78469435%3A0xbb087ea961e15fc1!2sHavana%20Royale%20Hall!5e0!3m2!1sen!2sng!4v1719837711870!5m2!1sen!2sng"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  title="Wedding Venue - Havana Royale Hall"
/>



    </div>

        </div>
      </div>
    </div>
  );
};

export default WeddingDetails;
