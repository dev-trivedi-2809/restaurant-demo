import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <UtensilsCrossed className="h-8 w-8 text-amber-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Savoria</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className={`${isActive('/') ? 'text-amber-600' : 'text-gray-800'} hover:text-amber-600 transition-colors`}
              >
                Home
              </Link>
              <Link
                to="/menu"
                className={`${isActive('/menu') ? 'text-amber-600' : 'text-gray-800'} hover:text-amber-600 transition-colors`}
              >
                Menu
              </Link>
              <Link
                to="/contact"
                className={`${isActive('/contact') ? 'text-amber-600' : 'text-gray-800'} hover:text-amber-600 transition-colors`}
              >
                Contact
              </Link>
              <Link
                to="/reservations"
                className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors"
              >
                Reserve Table
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-amber-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link
              to="/"
              className={`block px-3 py-2 ${isActive('/') ? 'text-amber-600' : 'text-gray-800'} hover:text-amber-600 transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className={`block px-3 py-2 ${isActive('/menu') ? 'text-amber-600' : 'text-gray-800'} hover:text-amber-600 transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 ${isActive('/contact') ? 'text-amber-600' : 'text-gray-800'} hover:text-amber-600 transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/reservations"
              className="block w-full text-center bg-amber-600 text-white px-3 py-2 rounded-lg hover:bg-amber-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Reserve Table
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;