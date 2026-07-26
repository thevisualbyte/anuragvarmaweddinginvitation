'use client';

import { motion } from 'framer-motion';
import { Heart, MapPin, Clock, Users } from 'lucide-react';

export default function Home() {
  const eventDate = new Date('2024-12-20');
  
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
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
            Anurag & Varma
          </motion.h1>

          <motion.div 
            {...fadeInUp}
            className="h-1 w-20 bg-gradient-to-r from-rose-400 to-amber-400 mx-auto mb-8"
          />

          <motion.p 
            {...fadeInUp}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light"
          >
            Request the honour of your presence at the marriage of
          </motion.p>

          <motion.p 
            {...fadeInUp}
            className="text-lg text-gray-700 dark:text-gray-200 mb-12 font-serif"
          >
            Saturday, December 20th, 2024
          </motion.p>

          <motion.button 
            {...fadeInUp}
            className="px-8 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            View Details
          </motion.button>
        </div>
      </motion.section>

      {/* Event Details Section */}
      <motion.section 
        className="py-20 px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-2 gap-12">
          {/* Ceremony */}
          <motion.div 
            {...fadeInUp}
            className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-6">
              <Clock className="w-8 h-8 text-rose-500" />
              <h2 className="text-2xl font-serif text-gray-900 dark:text-white">Ceremony</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>Time:</strong> 6:00 PM
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Venue:</strong> Grand Ballroom, Luxury Hotel
            </p>
          </motion.div>

          {/* Reception */}
          <motion.div 
            {...fadeInUp}
            className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-6">
              <Users className="w-8 h-8 text-rose-500" />
              <h2 className="text-2xl font-serif text-gray-900 dark:text-white">Reception</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>Time:</strong> 7:30 PM
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Venue:</strong> Grand Ballroom, Luxury Hotel
            </p>
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
            <h2 className="text-3xl font-serif text-gray-900 dark:text-white">Location</h2>
          </motion.div>
          <motion.p 
            {...fadeInUp}
            className="text-center text-gray-600 dark:text-gray-300 text-lg"
          >
            Grand Ballroom, Luxury Hotel<br />
            123 Wedding Street, City, State 12345
          </motion.p>
        </div>
      </motion.section>

      {/* RSVP Section */}
      <motion.section 
        className="py-20 px-4 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          {...fadeInUp}
          className="bg-gradient-to-br from-rose-50 to-amber-50 dark:from-slate-800 dark:to-slate-700 rounded-lg p-12 text-center shadow-lg"
        >
          <h2 className="text-3xl font-serif text-gray-900 dark:text-white mb-4">
            RSVP
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Please let us know if you can celebrate with us.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            RSVP Now
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-slate-950 text-white py-8 text-center">
        <p className="text-gray-400">
          Looking forward to celebrating with you. ♡
        </p>
      </footer>
    </div>
  );
}
