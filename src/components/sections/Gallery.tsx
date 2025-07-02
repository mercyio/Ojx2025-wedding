import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Sample gallery images
  const galleryImages = [
    {
      src: "images/pre-wed-12.jpg",
      alt: "Couple by the sea"
    },
    {
      src: "images/pre-wed-2.jpg",
      alt: "Couple walking"
    },
    {
      src: "images/pre-wed-13.jpg",
      alt: "Couple dancing"
    },
    {
      src: "images/pre-wed-11.jpg",
      alt: "Couple at Sunset"
    },
    {
      src: "images/image-3.jpg",
      alt: "Groom"
    },
    {
      src: "images/pre-wed-8.jpg",
      alt: "Bride and groom"
    },
    {
      src: "images/image-4.jpg",
      alt: "Couple Laughing"
    },
    {
      src: "images/pre-wed-10.jpg",
      alt: "Couple close up"
    },
    {
      src: "images/image-5.jpg",
      alt: "Bride"
    },
    {
      src: "images/pre-wed-4.jpg",
      alt: "Groom"
    },
    {
      src: "images/pre-wed-5.jpg",
      alt: "Bride and groom"
    },
    {
      src: "images/pre-wed-6.jpg",
      alt: "Bride and groom"
    },
  ];

  const openModal = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="container mx-auto px-4 md:px-6">
      <SectionTitle 
        title="Our Gallery" 
        subtitle="Moments captured along our journey"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
              onClick={() => openModal(image.src)}
              style={{ height: index % 3 === 0 ? '300px' : '250px' }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;