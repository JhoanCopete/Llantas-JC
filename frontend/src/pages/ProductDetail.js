import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Star, Shield, Truck, Clock, Plus, Minus, Phone, MessageCircle } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-black pt-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Producto no encontrado</h2>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver a productos
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Por favor selecciona un tamaño');
      return;
    }
    
    const productToAdd = {
      ...product,
      selectedSize,
      quantity
    };
    
    for (let i = 0; i < quantity; i++) {
      addToCart(productToAdd);
    }
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.brand === product.brand || p.category === product.category))
    .slice(0, 3);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to="/products"
            className="flex items-center space-x-2 text-red-600 hover:text-red-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a productos</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full font-semibold">
                {product.brand}
              </div>
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
                  <span className="text-white font-semibold text-xl">Agotado</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-white font-semibold">{product.rating}</span>
                  <span className="text-gray-400">(125 reseñas)</span>
                </div>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="text-3xl font-bold text-red-600">
                {formatPrice(product.price)}
              </div>
              {product.originalPrice && (
                <div className="text-lg text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </div>
              )}
              <div className="text-green-600 font-semibold">
                Ahorra {formatPrice(product.originalPrice - product.price)}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Descripción</h3>
              <p className="text-gray-400 leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Características</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-gray-400">
                    <div className="w-2 h-2 bg-red-600 rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Tamaño</h3>
              <div className="grid grid-cols-2 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selectedSize === size
                        ? 'border-red-600 bg-red-600/20 text-red-600'
                        : 'border-gray-700 bg-gray-800 text-white hover:border-gray-600'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Cantidad</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-white font-semibold text-lg w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-semibold transition-all ${
                  product.inStock
                    ? 'bg-red-600 hover:bg-red-700 text-white hover-glow'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>{product.inStock ? 'Agregar al carrito' : 'Producto agotado'}</span>
              </button>
              
              {product.inStock && (
                <div className="flex space-x-3">
                  <a
                    href={`https://wa.me/573147737017?text=Hola! Quiero información sobre ${product.name} - ${formatPrice(product.price)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="tel:3147737017"
                    className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Llamar</span>
                  </a>
                </div>
              )}
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-700">
              <div className="flex items-center space-x-2 text-gray-400">
                <Shield className="w-5 h-5 text-red-600" />
                <span className="text-sm">Garantía incluida</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Truck className="w-5 h-5 text-red-600" />
                <span className="text-sm">Instalación gratis</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Clock className="w-5 h-5 text-red-600" />
                <span className="text-sm">Servicio 7 días</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Productos relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="glass-effect rounded-lg overflow-hidden hover-glow">
                  <div className="relative">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded text-sm">
                      {relatedProduct.brand}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">{relatedProduct.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{relatedProduct.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-xl font-bold text-red-600">
                        {formatPrice(relatedProduct.price)}
                      </div>
                      <Link
                        to={`/product/${relatedProduct.id}`}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                      >
                        Ver
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;