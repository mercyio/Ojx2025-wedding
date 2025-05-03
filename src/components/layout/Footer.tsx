import React from 'react';
import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-teal-800 to-teal-900 text-white py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-teal-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="font-serif text-3xl">Omolara</span>
              <Heart className="h-6 w-6 fill-gold-400 stroke-gold-400 animate-pulse" />
              <span className="font-serif text-3xl">Joshua</span>
            </div>
            
            <p className="mb-8 text-teal-50 text-lg max-w-xl mx-auto">
              "Two hearts, one soul — a divine love story unfolding before your eyes."
            </p>

            <div className="flex justify-center space-x-6 mb-10">
              <a href="#home" className="text-teal-200 hover:text-gold-300 transition-colors">
                Home
              </a>
              <a href="#our-story" className="text-teal-200 hover:text-gold-300 transition-colors">
                Our Story
              </a>
              <a href="#details" className="text-teal-200 hover:text-gold-300 transition-colors">
                Details
              </a>
              <a href="#rsvp" className="text-teal-200 hover:text-gold-300 transition-colors">
                RSVP
              </a>
              <a href="#gallery" className="text-teal-200 hover:text-gold-300 transition-colors">
                Gallery
              </a>
            </div>

            <div className="flex justify-center space-x-6 mb-10">
              <a href="#" className="text-teal-200 hover:text-gold-300 transition-colors p-2 rounded-full hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-teal-200 hover:text-gold-300 transition-colors p-2 rounded-full hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-teal-200 hover:text-gold-300 transition-colors p-2 rounded-full hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            <div className="text-sm text-teal-200 space-y-2">
              <p className="font-serif text-lg">#OJx2025</p>
              <p>Saturday, May 24, 2025</p>
              <p>The Grandeur Place, Lekki Phase 1, Lagos</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;