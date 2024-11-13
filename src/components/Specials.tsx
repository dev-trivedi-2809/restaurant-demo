import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock } from 'lucide-react';

const Specials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="specials" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Weekly Specials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for our carefully curated weekly specials, featuring seasonal ingredients
            and innovative culinary creations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop"
              alt="Wine Wednesday"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Wine Wednesday</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Every Wednesday</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <Clock className="w-4 h-4 mr-2" />
                <span>6 PM - 10 PM</span>
              </div>
              <p className="text-gray-600">
                50% off on selected premium wines with any main course
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop"
              alt="Weekend Brunch"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Weekend Brunch</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Saturday & Sunday</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <Clock className="w-4 h-4 mr-2" />
                <span>10 AM - 3 PM</span>
              </div>
              <p className="text-gray-600">
                Unlimited mimosas with our special brunch menu
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?q=80&w=1972&auto=format&fit=crop"
              alt="Tasting Menu"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Chef's Tasting Menu</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Friday & Saturday</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <Clock className="w-4 h-4 mr-2" />
                <span>7 PM - 11 PM</span>
              </div>
              <p className="text-gray-600">
                7-course tasting menu with wine pairing
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Specials;