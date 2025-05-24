import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2025-05-24T14:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-2 right-2 md:bottom-8 md:right-8 z-40">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-lg md:rounded-2xl shadow-xl p-2 md:p-6 backdrop-blur-lg bg-opacity-90 dark:bg-opacity-90"
      >
        <h3 className="text-center font-serif text-xs md:text-lg text-teal-800 dark:text-teal-200 mb-1 md:mb-4 hidden md:block">
          Counting down to forever
        </h3>
        <div className="flex gap-1 md:gap-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <div className="bg-teal-50 dark:bg-teal-900 rounded md:rounded-lg p-1 md:p-3 min-w-[20px] md:min-w-[60px]">
                <span className="text-xs md:text-2xl font-bold text-teal-600 dark:text-teal-300">
                  {value}
                </span>
              </div>
              <span className="text-[8px] md:text-xs text-gray-600 dark:text-gray-300 mt-0.5 md:mt-1 block capitalize">
                {unit.charAt(0)}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CountdownTimer;
