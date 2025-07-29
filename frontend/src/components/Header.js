import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ShoppingCart, Search, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Logo from './Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getTotalItems } = useCart();
  const location = useLocation();
  const totalItems = getTotalItems();

  const navigation = [
    { name: 'Inicio', href: '/', current: location.pathname === '/' },
    { name: 'Productos', href: '/products', current: location.pathname === '/products' },
    { name: 'Contacto', href: '/contact', current: location.pathname === '/contact' }
  ];

  return (
    <header className="fixed w-full z-50 glass-effect border-b border-red-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo className="w-10 h-10 mr-3" />
            <div className="text-2xl font-bold">
              <span className="text-white">Llantas</span>
              <span className="text-red-600">JC</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  item.current
                    ? 'text-red-600 border-b-2 border-red-600'
                    : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-red-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Contact Button */}
            <a
              href="tel:3147737017"
              className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">314 773 7017</span>
            </a>

            {/* Cart */}
            <Link 
              to="/cart"
              className="relative p-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {totalItems}
                </motion.span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-effect border-t border-red-600/20"
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                  item.current
                    ? 'text-red-600 bg-red-600/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:3147737017"
              className="flex items-center space-x-2 px-3 py-2 mt-4 bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="text-base font-medium">314 773 7017</span>
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;