import React, { useState, useEffect } from 'react';
import { ChevronDown, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [audio] = useState(new Audio('/wedding-song.mp3')); // Updated to use local file

  useEffect(() => {
    audio.loop = true;
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const toggleMusic = () => {
    if (isMusicPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  // Floating flowers animation
  // const flowers = Array.from({ length: 20 }, (_, i) => (
  //   <motion.div
  //     key={i}
  //     className="absolute h-4 w-4 opacity-60"
  //     initial={{
  //       x: Math.random() * window.innerWidth,
  //       y: -20,
  //       rotate: 0,
  //     }}
  //     animate={{
  //       y: window.innerHeight + 20,
  //       x: `calc(${Math.random() * 100}vw)`,
  //       rotate: 360,
  //     }}
  //     transition={{
  //       duration: Math.random() * 10 + 15,
  //       repeat: Infinity,
  //       ease: "linear",
  //     }}
  //   >
  //     <div className="w-full h-full bg-gold-200 rounded-full transform rotate-45" />
  //   </motion.div>
  // ));

  // Light rays effect
  const rays = Array.from({ length: 4 }, (_, i) => (
    <motion.div
      key={`ray-${i}`}
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10"
      initial={{ rotate: i * 45 }}
      animate={{
        rotate: [i * 45, (i * 45) + 360],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  ));

  return (
    <>
      {/* Sticky Music Control */}
      <button 
        onClick={toggleMusic}
        className="fixed top-24 right-6 z-50 p-3 bg-teal-100 backdrop-blur-sm rounded-full text-gold-600 hover:bg-gold-500 transition-all shadow-lg"
      >
        {isMusicPlaying ? (
          <Volume2 className="w-6 h-6" />
        ) : (
          <VolumeX className="w-6 h-6" />
        )}
      </button>

      <div className="relative h-screen overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("images/image-9.jpg")', 
            backgroundPosition: '50% 30%'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
          {rays}
        </div>
        
        {/* Floating Elements
        {flowers} */}
        
        {/* Hero Content - Moved up */}
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 -mt-16">
          {/* <motion.p 
            className="mb-4 text-sm md:text-x1 lg:text-xl tracking-wider font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
           When love feels right, it flows effortlessly
          </motion.p> */}
          
          <motion.h1 
            className="font-serif text-5xl md:text-8xl lg:text-10xl mb-6, mt-40"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className= "text-teal-600">Omolara</span>
            <span className="mx-2 md:mx-4 text-gold-400">&</span>
            <span className= "text-teal-600">Joshua</span>
          </motion.h1>
          
          <motion.div 
            className="text-sm md:text-xl lg:text-2xl mb-8 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            October 29, 2025 • Ibadan, Nigeria
          </motion.div>

          <motion.p
            className="max-w-lg mx-auto text-sm md:text-lg italic text-gold-300 mb-12 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
             "When love feels right, it flows effortlessly"
          </motion.p>
          
          <motion.div
            className="flex gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <a 
              href="#rsvp"
              className="px-8 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors"
            >
              RSVP Now
            </a>
            <a 
              href="#our-story"
              className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors"
            >
               Our story 
            </a>
          </motion.div>
          
          <motion.a
            href="#our-story"
            className="absolute bottom-8 inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <ChevronDown className="w-8 h-8 animate-bounce-slow" />
          </motion.a>
        </div>
      </div>
    </>
  );
};

export default Hero;
