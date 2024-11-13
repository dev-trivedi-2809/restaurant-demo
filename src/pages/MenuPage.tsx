import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MenuCategory = ({ title, items }: { title: string; items: any[] }) => {
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
      className="mb-12"
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-800">{title}</h2>
      <div className="grid gap-6">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-start border-b border-gray-200 pb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-600 mt-1">{item.description}</p>
            </div>
            <span className="text-xl font-bold text-amber-600">{item.price}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const MenuPage = () => {
  const menu = {
    starters: [
      { name: "Artisanal Cheese Board", description: "Selection of premium cheeses, honey, nuts, and artisanal bread", price: "$24" },
      { name: "Tuna Tartare", description: "Fresh tuna, avocado, sesame seeds, wasabi aioli", price: "$18" },
      { name: "Wild Mushroom Soup", description: "Creamy blend of forest mushrooms, truffle oil", price: "$14" },
      { name: "Grilled Octopus", description: "Spanish octopus, fingerling potatoes, paprika", price: "$22" }
    ],
    mainCourses: [
      { name: "Wagyu Ribeye", description: "12oz premium Japanese wagyu, roasted vegetables, red wine sauce", price: "$85" },
      { name: "Maine Lobster", description: "Whole lobster, drawn butter, grilled lemon, herbs", price: "$68" },
      { name: "Duck Breast", description: "Pan-seared duck, cherry reduction, wild rice", price: "$42" },
      { name: "Black Cod", description: "Miso-glazed black cod, baby bok choy, dashi broth", price: "$46" }
    ],
    desserts: [
      { name: "Chocolate Soufflé", description: "Warm chocolate soufflé, vanilla ice cream", price: "$16" },
      { name: "Crème Brûlée", description: "Classic vanilla bean crème brûlée", price: "$14" },
      { name: "Tiramisu", description: "Traditional Italian tiramisu, coffee sauce", price: "$15" },
      { name: "Fruit Tart", description: "Seasonal fruits, pastry cream, almond crust", price: "$13" }
    ],
    wines: [
      { name: "Château Margaux 2015", description: "Bordeaux, France - Full-bodied red", price: "$450" },
      { name: "Dom Pérignon 2012", description: "Champagne, France - Vintage champagne", price: "$380" },
      { name: "Opus One 2018", description: "Napa Valley, USA - Cabernet blend", price: "$395" },
      { name: "Puligny-Montrachet 2019", description: "Burgundy, France - White burgundy", price: "$220" }
    ]
  };

  return (
    <div className="pt-16">
      <div className="bg-amber-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Menu</h1>
            <p className="text-gray-600">
              Carefully curated dishes featuring the finest seasonal ingredients
            </p>
          </motion.div>

          <MenuCategory title="Starters" items={menu.starters} />
          <MenuCategory title="Main Courses" items={menu.mainCourses} />
          <MenuCategory title="Desserts" items={menu.desserts} />
          <MenuCategory title="Wine Selection" items={menu.wines} />
        </div>
      </div>
    </div>
  );
};

export default MenuPage;