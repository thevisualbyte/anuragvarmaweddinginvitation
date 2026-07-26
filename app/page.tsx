'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MapPin } from 'lucide-react';

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
  <>
 {!isOpened && (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#023D37] px-6">

    <p className="text-[#D4AF37] uppercase tracking-[0.45em] text-sm md:text-lg mb-4">
      YOU ARE CORDIALLY INVITED
    </p>

    <p className="text-white uppercase tracking-[0.30em] text-xs md:text-sm mb-10">
      TO CELEBRATE OUR WEDDING
    </p>

   <div className="relative w-[620px] h-[400px] rounded-xl bg-[#f4ead2] border border-[#d6c49b] shadow-2xl overflow-hidden">
      {/* Envelope Flap */}
      <div
  className="absolute top-0 left-0 w-full h-[220px] bg-[#e7d5ad]"
  style={{
    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
  }}
/>
      {/* Letter */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">

        <p className="text-5xl font-serif tracking-[0.25em] text-[#a47b33]">
          D • A
        </p>

        <div className="w-24 h-px bg-[#a47b33] my-4"></div>

        <h2 className="text-3xl font-serif text-[#3c2b20]">
          Divya Sri Devi
        </h2>

        <p className="text-xl text-[#a47b33] my-2">&</p>

        <h2 className="text-3xl font-serif text-[#3c2b20]">
          Anurag Varma
        </h2>

        <button
          onClick={() => setIsOpened(true)}
          className="mt-8 w-24 h-24 rounded-full bg-[#7b1e23] text-[#f2d16b] text-3xl font-serif shadow-2xl hover:scale-105 transition-all duration-300"
        >
          DA
        </button>

        <p className="mt-4 uppercase tracking-[0.3em] text-xs text-gray-600">
          Click the Wax Seal
        </p>

      </div>

    </div>

  </div>
)}
    <div
  className={`min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 ${
    !isOpened ? "hidden" : "block"
  }`}
>
      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-10 left-10 w-32 h-32 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
            animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-32 h-32 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
            animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="relative z-10 text-center max-w-2xl">
          <motion.div {...fadeInUp} className="mb-6">
            <Heart className="w-12 h-12 mx-auto text-rose-500 mb-6" fill="currentColor" />
          </motion.div>

<motion.h1
  {...fadeInUp}
  className="text-5xl md:text-7xl font-serif font-light mb-4 text-gray-900 dark:text-white tracking-wide"
>
  Anurag Varma
  <br />
  <span className="text-3xl md:text-4xl">&</span>
  <br />
  Divya Sri Devi
</motion.h1>

          <motion.div 
            {...fadeInUp}
            className="h-1 w-20 bg-gradient-to-r from-rose-400 to-amber-400 mx-auto mb-8"
          />

          <motion.p 
            {...fadeInUp}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2 font-light"
          >
            cordially invites you
          </motion.p>

          <motion.p 
            {...fadeInUp}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2 font-light"
          >
            to celebrate the joyous occasions
          </motion.p>

          <motion.p 
            {...fadeInUp}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-light"
          >
            leading to her wedding with
          </motion.p>

          <motion.p 
            {...fadeInUp}
            className="text-lg text-gray-700 dark:text-gray-200 mb-12 font-serif"
          >
            Anurag Varma
          </motion.p>

          <motion.p 
            {...fadeInUp}
            className="text-lg text-gray-700 dark:text-gray-200 mb-12 font-serif"
          >
            20th–21st August, 2026
          </motion.p>

          <motion.button 
            {...fadeInUp}
            className="px-8 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Invitation
          </motion.button>
        </div>
      </motion.section>

      {/* Event Details Section */}
      <motion.section 
        className="py-20 px-4 max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          {...fadeInUp}
          className="text-4xl font-serif text-center text-gray-900 dark:text-white mb-16"
        >
          Wedding Events
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            {...fadeInUp}
            className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900 dark:to-yellow-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-yellow-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <h3 className="text-2xl font-serif text-gray-900 dark:text-white">Pellikuthuru</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200 mb-3">
              <strong>Thursday</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-200 mb-3">
              <strong>Date:</strong> 20 August 2026
            </p>
            <p className="text-gray-700 dark:text-gray-200 mb-3">
              <strong>Time:</strong> 6:30 AM
            </p>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              <strong>Venue:</strong> D.G.B Convention, Sarpavaram, Kakinada
            </p>
            <a 
              href="https://maps.app.goo.gl/3qUo1Huu5JzNdZCG9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-yellow-700 dark:text-yellow-300 hover:underline font-semibold"
            >
              <MapPin className="w-4 h-4" /> View Location
            </a>
          </motion.div>

          {/* Reception */}
          <motion.div 
            {...fadeInUp}
            className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-orange-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              <h3 className="text-2xl font-serif text-gray-900 dark:text-white">Reception</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200 mb-3">
              <strong>Date:</strong> Thursday, 20 August 2026
            </p>
            <p className="text-gray-700 dark:text-gray-200 mb-3">
              <strong>Time:</strong> 7:00 PM onwards
            </p>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              <strong>Venue:</strong> D.G.B Convention, Sarpavaram, Kakinada
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Followed by Dinner
            </p>
            <a 
              href="https://maps.app.goo.gl/3qUo1Huu5JzNdZCG9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-700 dark:text-orange-300 hover:underline font-semibold"
            >
              <MapPin className="w-4 h-4" /> View Location
            </a>
          </motion.div>

          {/* Wedding */}
          <motion.div 
            {...fadeInUp}
            className="bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-900 dark:to-rose-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-rose-500 md:col-span-2"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-rose-600 dark:text-rose-300" fill="currentColor" />
              <h3 className="text-3xl font-serif text-gray-900 dark:text-white">Wedding Ceremony</h3>
              <Heart className="w-6 h-6 text-rose-600 dark:text-rose-300" fill="currentColor" />
            </div>
            <p className="text-center text-gray-700 dark:text-gray-200 mb-3">
              <strong>Date:</strong> Friday, 21 August 2026
            </p>
            <p className="text-center text-gray-700 dark:text-gray-200 mb-3">
              <strong>Time:</strong> 3:53 AM
            </p>
            <p className="text-center text-gray-700 dark:text-gray-200 mb-4">
              <strong>Venue:</strong> D.G.B Convention, Sarpavaram, Kakinada
            </p>
            <div className="flex justify-center">
              <a 
                href="https://maps.app.goo.gl/3qUo1Huu5JzNdZCG9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-rose-700 dark:text-rose-300 hover:underline font-semibold"
              >
                <MapPin className="w-4 h-4" /> View Location
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Location Section */}
      <motion.section 
        className="py-20 px-4 bg-gray-50 dark:bg-slate-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div 
            {...fadeInUp}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <MapPin className="w-8 h-8 text-rose-500" />
            <h2 className="text-3xl font-serif text-gray-900 dark:text-white">Main Venue</h2>
          </motion.div>
          <motion.div 
            {...fadeInUp}
            className="text-center"
          >
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
              <strong>D.G.B Convention</strong><br />
              Sarpavaram, Kakinada
            </p>
            <a 
              href="https://maps.app.goo.gl/3qUo1Huu5JzNdZCG9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-semibold transition-colors"
            >
              <MapPin className="w-5 h-5" /> Open in Maps
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-slate-950 text-white py-8 text-center">
        <p className="text-gray-400">
          With Love
          <br />
          Divya Sri Devi
          <br />
          &
          <br />
          Anurag Varma
          <br />
          <br />
          We look forward to celebrating with you.
        </p>
      </footer>
    </div>
  </>
);
}