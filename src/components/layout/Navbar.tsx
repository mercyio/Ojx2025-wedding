import React, { useState, useEffect } from 'react';
import { Heart, Share2 } from 'lucide-react';

interface NavbarProps {
  onShowInvite: () => void;
}

const Navbar = ({ onShowInvite }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            className={`flex items-center gap-2 font-serif text-xl transition-colors ${
              isScrolled ? 'text-teal-700' : 'text-white'
            }`}
          >
            <span>O</span>
            <Heart className="h-4 w-4 fill-gold-500 stroke-gold-500" />
            <span>J</span>
          </a>

          <div className="flex items-center gap-4">
            {/* Share Invitation */}
            <button
              onClick={onShowInvite}
              className={`p-2 rounded-full transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Share2 className="w-5 h-5" />
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {['Home', 'Our Story', 'Details', 'RSVP', 'Gallery', 'Guestbook', 'Gifts'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className={`text-sm font-medium transition-colors hover:text-gold-500 ${
                    isScrolled 
                      ? 'text-gray-700' 
                      : 'text-white'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-md transition-colors ${
                isScrolled 
                  ? 'text-gray-700' 
                  : 'text-white'
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-3 px-4">
              {['Home', 'Our Story', 'Details', 'RSVP', 'Gallery', 'Guestbook', 'Gifts'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-700 hover:text-teal-600 text-sm font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
