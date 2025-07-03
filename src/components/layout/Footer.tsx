import React from 'react';
import { Heart, Instagram, Facebook, Twitter, Github, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-50 bg-teal-900 text-white py-6 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 mb-4 md:mb-10">
          {/* Couple Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-4 justify-center md:justify-start">
              <span className="font-serif text-xl md:text-3xl text-gold-300">Omolara</span>
              <Heart className="h-3 w-3 md:h-5 md:w-5 fill-gold-400 stroke-gold-400 animate-pulse" />
              <span className="font-serif text-xl md:text-3xl text-gold-300">Joshua</span>
            </div>
            <p className="text-teal-100 mb-1 text-sm md:text-base">Wednesday, October 29, 2025</p>
            <p className="text-teal-200 text-sm md:text-base">Havana Royale Halls, Ibadan, Nigeria</p>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <h3 className="text-base md:text-lg font-semibold text-gold-300 mb-2 md:mb-4">Explore</h3>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {["Home", "Our Story", "Details", "RSVP", "Gallery", "Gifts"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-teal-200 hover:text-gold-300 transition-colors text-xs md:text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media & Hashtag - Hidden on mobile */}
          <div className="hidden md:block text-center md:text-right">
            <h3 className="text-base md:text-lg font-semibold text-gold-300 mb-2 md:mb-4">Follow Our Journey</h3>
            <div className="flex justify-center md:justify-end gap-2 md:gap-4 mb-2 md:mb-4">
              <a href="#" className="p-1.5 md:p-2 bg-teal-800/50 rounded-full hover:bg-teal-700/50 transition-colors text-gold-300">
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" className="p-1.5 md:p-2 bg-teal-800/50 rounded-full hover:bg-teal-700/50 transition-colors text-gold-300">
                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" className="p-1.5 md:p-2 bg-teal-800/50 rounded-full hover:bg-teal-700/50 transition-colors text-gold-300">
                <Twitter className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
            <p className="font-serif text-base md:text-lg text-gold-300">#OJx2025</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-teal-800 mb-3 md:mb-6"></div>

        {/* Bottom Centered Copyright */}
        <div className="flex flex-col items-center text-xs md:text-sm text-teal-300 text-center">
          <p>© 2025 Omolara & Joshua wedding. All rights reserved.</p>
          <p className="mt-1 md:mt-2 flex items-center justify-center">
            Built with  <Heart className="h-3 w-3 md:h-5 md:w-5 fill-gold-400 stroke-gold-400 animate-pulse" /> by 
            <a 
              href="https://mercyio-portfolio.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold-300 hover:underline ml-1 font-bold"
            >
              mercyio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
