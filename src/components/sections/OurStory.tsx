import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Heart, Calendar, MapPin, Star } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const OurStory = () => {
  const storyPoints = [
    {
      title: "First Meeting",
      dateOmolara: "April 12, 2022",
      dateJoshua: "April 12, 2022",
      omolaraStory: "I never thought a simple lunch break could change my life. Joshua walked up to me with a warm smile and a curious question... That moment stayed with me.",
      joshuaStory: "She had this calm confidence that drew me in. I couldn’t let the day pass without saying something. One small conversation turned into something unforgettable.",
      icon: <Star className="h-6 w-6" />,
      position: "left"
    },
    {
      title: "First Date",
      dateOmolara: "April 28, 2022",
      dateJoshua: "April 28, 2022",
      omolaraStory: "He took me to this quiet little restaurant with live music. I was impressed by his thoughtfulness and how easy it was to talk to him for hours.",
      joshuaStory: "I spent days planning the perfect first date. I wanted everything to be special for her. I'll never forget her smile when she heard her favorite song playing.",
      icon: <Calendar className="h-6 w-6" />,
      position: "center-left"
    },
    {
      title: "Falling in Love",
      dateOmolara: "September 2022",
      dateJoshua: "August 2022",
      omolaraStory: "It was one big moment. How he remembered little details, how he made me laugh, how he supported me through challenges.",
      joshuaStory: "I think I knew I loved her when she called me at 2 AM to to tell me she got the project she was working on.      Her passion and dedication amazed me.",
      icon: <Heart className="h-6 w-6" />,
      position: "center-right",
      topOffset: true
    },
    {
      title: "The Proposal",
      dateOmolara: "December 24, 2023",
      dateJoshua: "December 24, 2023",
      omolaraStory: "It was a quet beutiful night under the stars. He seemed nervous, then suddenly got down on one knee.     It was perfect. I couldn't stop crying!",
      joshuaStory: "I had the ring for months waiting for the perfect moment. When I saw her looking up at the stars that night, I knew it was time. Best 'yes' I've ever heard!",
      icon: <MapPin className="h-6 w-6" />,
      position: "right",
      topOffset: true
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <SectionTitle 
        title="Our Love Story" 
        subtitle="How a chance meeting turned into forever"
      />

      <div className="relative mt-16">
        {/* Vertical timeline connector */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-teal-200 via-gold-200 to-teal-200"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {storyPoints.map((point, index) => {
            const [refOmolara, inViewOmolara] = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });
            
            const [refJoshua, inViewJoshua] = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            // Determine column span and order based on position
            let colSpan = "md:col-span-1";
            let order = "";
            
            if (point.position === "left") {
              colSpan = "md:col-span-2";
              order = "md:order-1";
            } else if (point.position === "center-left") {
              colSpan = "md:col-span-2";
              order = "md:order-2";
            } else if (point.position === "center-right") {
              colSpan = "md:col-span-2";
              order = "md:order-3";
            } else if (point.position === "right") {
              colSpan = "md:col-span-2";
              order = "md:order-4";
            }

            // Determine if this section needs to be moved up
            const sectionClass = point.topOffset ? "mt-[-80px]" : "";

            return (
              <div key={index} className={`mb-16 relative ${colSpan} ${order} ${sectionClass}`}>
                {/* Title */}
                <div className="text-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-3 border-2 border-teal-500 shadow-lg">
                    <div className="text-gold-500">
                      {point.icon}
                    </div>
                  </div>
                  <h3 className="font-serif text-xl text-teal-700 relative inline-block">
                    {point.title}
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-300 to-transparent"></div>
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Omolara's story */}
                  <motion.div 
                    ref={refOmolara}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inViewOmolara ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex justify-center"
                  >
                    <div className="heart-container teal-heart">
                      <div className="heart-content">
                        <div className="text-center mb-2 pb-2 border-b border-teal-100">
                          <span className="date-text text-teal-600 font-medium block">{point.dateOmolara}</span>
                          <h4 className="name-text font-serif text-teal-800">Omolara</h4>
                        </div>
                        <p className="story-text text-gray-700 leading-relaxed text-center">{point.omolaraStory}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Joshua's story */}
                  <motion.div 
                    ref={refJoshua}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inViewJoshua ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex justify-center"
                  >
                    <div className="heart-container gold-heart">
                      <div className="heart-content">
                        <div className="text-center mb-2 pb-2 border-b border-gold-100">
                          <span className="date-text text-gold-600 font-medium block">{point.dateJoshua}</span>
                          <h4 className="name-text font-serif text-teal-800">Joshua</h4>
                        </div>
                        <p className="story-text text-gray-700 leading-relaxed text-center">{point.joshuaStory}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CSS for heart shapes */}
      <style jsx>{`
        .heart-container {
          position: relative;
          width: 320px;
          height: 320px;
          margin: 0 auto;
          margin-top: 10px;
        }
        
        .heart-container:before,
        .heart-container:after {
          content: "";
          position: absolute;
          top: 0;
          width: 160px;
          height: 256px;
          border-radius: 160px 160px 0 0;
          background: white;
        }
        
        .heart-container:before {
          left: 160px;
          transform: rotate(-45deg);
          transform-origin: 0 100%;
        }
        
        .heart-container:after {
          left: 0;
          transform: rotate(45deg);
          transform-origin: 100% 100%;
        }
        
        .teal-heart:before,
        .teal-heart:after {
          background: linear-gradient(135deg, #99f6e4 0%, white 100%);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .gold-heart:before,
        .gold-heart:after {
          background: linear-gradient(135deg, #fcd34d 0%, white 100%);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .heart-content {
          position: absolute;
          width: 75%;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 10px;
        }

        /* Mobile text sizes - reduced to half */
        .date-text {
          font-size: 15px;
        }
        
        .name-text {
          font-size: 15px;
        }
        
        .story-text {
          font-size: 12px;
          line-height: 1.3;
        }

        @media (min-width: 768px) {
          .heart-container {
            width: 320px;
            height: 320px;
            margin-top: 10px;
          }
          
          .heart-container:before,
          .heart-container:after {
            width: 160px;
            height: 256px;
            border-radius: 160px 160px 0 0;
          }
          
          .heart-container:before {
            left: 160px;
          }
          
          .heart-content {
            width: 80%;
            top: 25%;
          }

          /* Desktop text sizes - reduced to half */
          .date-text {
            font-size: 10px;
          }
          
          .name-text {
            font-size: 12px;
          }
          
          .story-text {
            font-size: 10px;
            line-height: 1.5;
          }
        }
      `}</style>
    </div>
  );
};

export default OurStory;
