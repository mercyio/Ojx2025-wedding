import React from 'react';
import { Heart } from 'lucide-react';

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <div className="relative">
        <Heart className="h-16 w-16 stroke-teal-500 animate-pulse" />
        <Heart className="h-10 w-10 stroke-gold-500 absolute top-3 left-3 animate-pulse" />
      </div>
      <div className="font-serif text-2xl mt-8 tracking-wide text-teal-800">
        Omolara & Joshua
      </div>
      <div className="mt-6 relative">
        <div className="h-1 w-40 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-teal-500 rounded-full animate-pulse-slow w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;