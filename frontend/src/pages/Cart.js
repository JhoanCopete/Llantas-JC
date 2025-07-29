import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Minus, Trash2, ShoppingBag, ArrowLeft, Phone, MessageCircle, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart();
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const totalPrice = getTotalPrice();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <ShoppingBag className="w-24 h-24 text-gray-600 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-white mb-4">Tu carrito está vacío</h1>
            <p className="text-gray-400 mb-8">
              Descubre nuestros productos y encuentra las llantas perfectas para tu motocicleta
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Ir a Productos
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-white">Carrito de Compras</h1>
            <p className="text-gray-400 mt-2">
              {items.length} {items.length === 1 ? 'producto' : 'productos'} en tu carrito
            </p>
          </div>
          <Link
            to="/products"
            className="flex items-center space-x-2 text-red-600 hover:text-red-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Continuar comprando</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-lg p-6"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                      <p className="text-gray-400 text-sm">{item.brand}</p>
                      <p className="text-red-600 font-semibold mt-1">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="p-1 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-white font-semibold w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="p-1 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-600 hover:text-red-500 transition-colors mt-2"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Clear Cart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6"
            >
              <button
                onClick={clearCart}
                className="flex items-center space-x-2 text-red-600 hover:text-red-500 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                <span>Vaciar carrito</span>
              </button>
            </motion.div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-effect rounded-lg p-6 sticky top-24"
            >
              <h2 className="text-xl font-semibold text-white mb-6">Resumen del pedido</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Instalación</span>
                  <span className="text-green-600">Gratis</span>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between text-white font-semibold text-lg">
                    <span>Total</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-6">
                <button
                  onClick={() => setShowPaymentInfo(!showPaymentInfo)}
                  className="flex items-center space-x-2 text-red-600 hover:text-red-500 transition-colors mb-4"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Métodos de pago</span>
                </button>
                
                {showPaymentInfo && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-gray-800 rounded-lg p-4 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white">Nequi</span>
                      <span className="text-purple-400">314 773 7017</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white">Daviplata</span>
                      <span className="text-red-400">314 773 7017</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white">Efectivo</span>
                      <span className="text-green-400">En tienda</span>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Contact Actions */}
              <div className="space-y-3">
                <a
                  href={`https://wa.me/573147737017?text=Hola! Quiero hacer un pedido por ${formatPrice(totalPrice)}. Productos: ${items.map(item => `${item.name} (${item.quantity})`).join(', ')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Ordenar por WhatsApp</span>
                </a>
                
                <a
                  href={`tel:3147737017`}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Llamar para ordenar</span>
                </a>
              </div>

              {/* Service Info */}
              <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Información del servicio</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Instalación profesional incluida</li>
                  <li>• Atención de 9AM a 6PM</li>
                  <li>• Servicio todos los días</li>
                  <li>• Garantía en instalación</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;