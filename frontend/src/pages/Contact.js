import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle, Mail, Send } from 'lucide-react';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error('Por favor completa todos los campos requeridos');
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `Hola! Mi nombre es ${formData.name}.
${formData.email ? `Email: ${formData.email}` : ''}
Teléfono: ${formData.phone}
Mensaje: ${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/573147737017?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    
    toast.success('Mensaje enviado! Te redirigimos a WhatsApp');
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Ubicación',
      content: ['Cali, Valle del Cauca', 'Colombia'],
      action: null
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Teléfono',
      content: ['314 773 7017'],
      action: 'tel:3147737017'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Horarios',
      content: ['Lunes - Domingo', '9:00 AM - 6:00 PM'],
      action: null
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'WhatsApp',
      content: ['314 773 7017'],
      action: 'https://wa.me/573147737017'
    }
  ];

  const services = [
    {
      title: 'Venta de Llantas',
      description: 'Amplio catálogo de llantas para motocicletas de las mejores marcas',
      features: ['Michelin', 'Pirelli', 'Metzeler', 'Dunlop', 'Timsun', 'Chaoyang']
    },
    {
      title: 'Instalación Profesional',
      description: 'Servicio de instalación y balanceo profesional incluido',
      features: ['Instalación experta', 'Balanceo incluido', 'Revisión completa', 'Garantía']
    },
    {
      title: 'Asesoramiento',
      description: 'Te ayudamos a elegir la llanta perfecta para tu motocicleta',
      features: ['Consulta gratuita', 'Análisis de necesidades', 'Recomendaciones', 'Soporte técnico']
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Header */}
      <div className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contacto
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ponte en contacto con nosotros para cualquier consulta o para hacer tu pedido
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Envíanos un mensaje</h2>
              <p className="text-gray-400">
                Completa el formulario y te contactaremos lo antes posible
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-600 focus:outline-none"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-600 focus:outline-none"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-600 focus:outline-none"
                  placeholder="314 773 7017"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-600 focus:outline-none resize-none"
                  placeholder="Cuéntanos qué necesitas... (tipo de llanta, modelo de moto, etc.)"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all hover-glow"
              >
                <Send className="w-5 h-5" />
                <span>Enviar mensaje</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Información de contacto</h2>
              <p className="text-gray-400">
                Estamos aquí para ayudarte con todo lo relacionado con llantas de motocicleta
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-lg p-6 hover-glow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white">
                        {info.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.content.map((line, i) => (
                          <p key={i} className="text-gray-400">{line}</p>
                        ))}
                      </div>
                      {info.action && (
                        <a
                          href={info.action}
                          target={info.action.startsWith('http') ? '_blank' : '_self'}
                          rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="inline-block mt-3 text-red-600 hover:text-red-500 transition-colors"
                        >
                          {info.title === 'WhatsApp' ? 'Abrir WhatsApp' : 'Contactar'}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact Actions */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contacto rápido</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://wa.me/573147737017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:3147737017"
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Llamar</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Nuestros Servicios</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ofrecemos servicios completos para todas tus necesidades de llantas de motocicleta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-lg p-6 hover-glow"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2 text-gray-400">
                      <div className="w-2 h-2 bg-red-600 rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;