import React from 'react';
import { Heart, Instagram, Facebook, Twitter, Github, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-50 bg-teal-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Couple Info */}
          <div>
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <span className="font-serif text-3xl text-gold-300">Omolara</span>
              <Heart className="h-5 w-5 fill-gold-400 stroke-gold-400 animate-pulse" />
              <span className="font-serif text-3xl text-gold-300">Joshua</span>
            </div>
            <p className="text-teal-100 mb-1">Saturday, October 24, 2025</p>
            <p className="text-teal-200">The Grandeur Place, Ibadan, Oyo State</p>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gold-300 mb-4">Explore</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Home", "Our Story", "Details", "RSVP", "Gallery", "Gifts"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-teal-200 hover:text-gold-300 transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media & Hashtag */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-gold-300 mb-4">Follow Our Journey</h3>
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              <a href="#" className="p-2 bg-teal-800/50 rounded-full hover:bg-teal-700/50 transition-colors text-gold-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-teal-800/50 rounded-full hover:bg-teal-700/50 transition-colors text-gold-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-teal-800/50 rounded-full hover:bg-teal-700/50 transition-colors text-gold-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="font-serif text-lg text-gold-300">#OJx2025</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-teal-800 mb-6"></div>

        {/* Bottom Centered Copyright */}
        <div className="flex flex-col items-center text-sm text-teal-300 text-center">
          <p>© 2025 Omolara & Joshua Wedding. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center">
            Built with <Heart className="h-3 w-3 mx-1 fill-red-400 stroke-red-400" /> by 
            <a 
              href="https://mercyio-portfolio.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold-300 hover:underline ml-1"
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
