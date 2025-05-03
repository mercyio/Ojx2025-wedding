import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { motion } from 'framer-motion';
import { Download, Share2, X } from 'lucide-react';
import { 
  FacebookShareButton, 
  TwitterShareButton, 
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon
} from 'react-share';
import Button from './Button';

interface VirtualInviteProps {
  isOpen: boolean;
  onClose: () => void;
}

const VirtualInvite = ({ isOpen, onClose }: VirtualInviteProps) => {
  const [showShareOptions, setShowShareOptions] = useState(false);
  const shareUrl = window.location.href;
  const title = "Join us for Omolara & Joshua's Wedding Celebration! #OJx2025";

  const downloadInvite = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      
      const link = document.createElement('a');
      link.download = 'OJ-Wedding-Invitation.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
    
    img.src = 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg';
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
    >
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            <h3 className="font-serif text-3xl text-teal-800 dark:text-teal-200 mb-2">
              Virtual Invitation
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Share in our joy virtually or download our invitation
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <QRCodeSVG 
                value={shareUrl}
                size={200}
                level="H"
                includeMargin={true}
                imageSettings={{
                  src: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg",
                  x: undefined,
                  y: undefined,
                  height: 40,
                  width: 40,
                  excavate: true,
                }}
              />
            </div>

            <div className="space-y-4">
              <Button 
                onClick={downloadInvite}
                variant="primary"
                className="w-full"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Invitation
              </Button>

              <Button 
                onClick={() => setShowShareOptions(!showShareOptions)}
                variant="outline"
                className="w-full"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share Invitation
              </Button>

              {showShareOptions && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-center gap-4 pt-4"
                >
                  <FacebookShareButton url={shareUrl} quote={title}>
                    <FacebookIcon size={40} round />
                  </FacebookShareButton>
                  
                  <TwitterShareButton url={shareUrl} title={title}>
                    <TwitterIcon size={40} round />
                  </TwitterShareButton>
                  
                  <WhatsappShareButton url={shareUrl} title={title}>
                    <WhatsappIcon size={40} round />
                  </WhatsappShareButton>
                </motion.div>
              )}
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Scan this QR code to visit our wedding website
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default VirtualInvite;