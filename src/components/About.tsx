import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Users, Award } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070&auto=format&fit=crop"
              alt="Chef preparing food"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-800">Our Story</h2>
            <p className="text-gray-600">
              Founded in 1995, Savoria has been at the forefront of culinary innovation, 
              combining traditional techniques with modern gastronomy. Our passionate team 
              of chefs creates unforgettable dining experiences using the finest locally-sourced ingredients.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center text-center">
                <Clock className="w-8 h-8 text-amber-600 mb-2" />
                <h3 className="font-semibold">25+ Years</h3>
                <p className="text-sm text-gray-600">Of Excellence</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="w-8 h-8 text-amber-600 mb-2" />
                <h3 className="font-semibold">50,000+</h3>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Award className="w-8 h-8 text-amber-600 mb-2" />
                <h3 className="font-semibold">3 Michelin</h3>
                <p className="text-sm text-gray-600">Stars</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;