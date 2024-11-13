import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MenuItem = ({ name, description, price, image }: { name: string; description: string; price: string; image: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <span className="text-amber-600 font-bold">{price}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const Menu = () => {
  const menuItems = [
    {
      name: "Truffle Risotto",
      description: "Creamy Arborio rice with wild mushrooms and truffle oil",
      price: "$28",
      image: "https://images.unsplash.com/photo-1637361874063-e5e415d7bcf7?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Grilled Sea Bass",
      description: "Fresh Mediterranean sea bass with herbs and lemon",
      price: "$34",
      image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Wagyu Steak",
      description: "Premium Japanese Wagyu with seasonal vegetables",
      price: "$65",
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Lobster Thermidor",
      description: "Classic French dish with brandy cream sauce",
      price: "$48",
      image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Signature Dishes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated menu featuring the finest ingredients and expert preparation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;