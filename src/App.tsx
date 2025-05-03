import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import OurStory from './components/sections/OurStory';
import WeddingDetails from './components/sections/WeddingDetails';
import RSVP from './components/sections/RSVP';
import Gallery from './components/sections/Gallery';
import Guestbook from './components/sections/Guestbook';
import GiftRegistry from './components/sections/GiftRegistry';
import Footer from './components/layout/Footer';
import Preloader from './components/ui/Preloader';
import CountdownTimer from './components/ui/CountdownTimer';
import VirtualInvite from './components/ui/VirtualInvite';

function App() {
  const [loading, setLoading] = useState(true);
  const [showInvite, setShowInvite] = useState(false);

  useEffect(() => {
    // Simulate loading time for resources
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar onShowInvite={() => setShowInvite(true)} />
          <main>
            <section id="home">
              <Hero />
            </section>
            <section id="our-story" className="py-20">
              <OurStory />
            </section>
            <section id="details" className="py-20 bg-gray-50 dark:bg-gray-800">
              <WeddingDetails />
            </section>
            <section id="rsvp" className="py-20">
              <RSVP />
            </section>
            <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-800">
              <Gallery />
            </section>
            <section id="guestbook" className="py-20">
              <Guestbook />
            </section>
            <section id="gifts" className="py-20 bg-gray-50 dark:bg-gray-800">
              <GiftRegistry />
            </section>
          </main>
          <Footer />
          <CountdownTimer />
          <VirtualInvite isOpen={showInvite} onClose={() => setShowInvite(false)} />
          <Toaster position="bottom-center" />
        </>
      )}
    </div>
  );
}

export default App;