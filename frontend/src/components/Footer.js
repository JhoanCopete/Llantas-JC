import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, MessageCircle } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-red-600/20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Logo className="w-10 h-10 mr-3" />
              <div className="text-2xl font-bold">
                <span className="text-white">Llantas</span>
                <span className="text-red-600">JC</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialistas en llantas de motocicleta en Cali. Más de 10 años de experiencia 
              brindando calidad y servicio profesional.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://wa.me/573147737017"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="tel:3147737017"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-red-600 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-red-600 transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-red-600 transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-400 hover:text-red-600 transition-colors">
                  Carrito
                </Link>
              </li>
            </ul>
          </div>

          {/* Brands */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Marcas</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Michelin</li>
              <li>Pirelli</li>
              <li>Metzeler</li>
              <li>Dunlop</li>
              <li>Timsun</li>
              <li>Chaoyang</li>
              <li>Kenda</li>
              <li>Kontrol</li>
              <li>Queen</li>
              <li>IRC</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-600 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <p>Cali, Valle del Cauca</p>
                  <p>Colombia</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-600" />
                <a 
                  href="tel:3147737017" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  314 773 7017
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-red-600 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <p>Lunes - Domingo</p>
                  <p>9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="border-t border-red-600/20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold mb-2">Métodos de Pago</h4>
              <div className="flex items-center space-x-4">
                <div className="px-3 py-1 bg-purple-600 rounded text-white text-sm font-medium">
                  Nequi
                </div>
                <div className="px-3 py-1 bg-red-600 rounded text-white text-sm font-medium">
                  Daviplata
                </div>
                <div className="px-3 py-1 bg-green-600 rounded text-white text-sm font-medium">
                  Efectivo
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                Para pagos digitales usar el número:
              </p>
              <p className="text-white font-semibold">314 773 7017</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-red-600/20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2024 Llantas JC. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Especialistas en llantas de motocicleta en Cali
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;