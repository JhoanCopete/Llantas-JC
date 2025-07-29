export const products = [
  // Michelin
  {
    id: 1,
    name: 'Michelin Pilot Road 5',
    brand: 'Michelin',
    price: 450000,
    originalPrice: 500000,
    image: 'https://images.unsplash.com/photo-1653494202151-074697ce2174?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxtb3RvcmN5Y2xlJTIwdGlyZXN8ZW58MHx8fGJsYWNrfDE3NTM3NjA3MTZ8MA&ixlib=rb-4.1.0&q=85',
    category: 'Sport',
    sizes: ['120/70 R17', '180/55 R17', '190/50 R17'],
    description: 'Llanta deportiva de alta performance con tecnología avanzada para máximo agarre en seco y mojado.',
    features: ['Compuesto dual', 'Tecnología 2CT+', 'Diseño optimizado', 'Durabilidad superior'],
    inStock: true,
    rating: 4.9
  },
  {
    id: 2,
    name: 'Michelin City Pro',
    brand: 'Michelin',
    price: 180000,
    originalPrice: 200000,
    image: 'https://images.pexels.com/photos/7671467/pexels-photo-7671467.jpeg',
    category: 'City',
    sizes: ['80/100 R14', '90/90 R14', '100/80 R14'],
    description: 'Llanta urbana ideal para uso diario, con excelente durabilidad y economía.',
    features: ['Larga duración', 'Bajo consumo', 'Resistente', 'Económica'],
    inStock: true,
    rating: 4.6
  },
  
  // Pirelli
  {
    id: 3,
    name: 'Pirelli Diablo Rosso III',
    brand: 'Pirelli',
    price: 420000,
    originalPrice: 480000,
    image: 'https://images.unsplash.com/photo-1592884835935-9f664c71b96b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxtb3RvcmN5Y2xlJTIwdGlyZXN8ZW58MHx8fGJsYWNrfDE3NTM3NjA3MTZ8MA&ixlib=rb-4.1.0&q=85',
    category: 'Sport',
    sizes: ['120/70 R17', '180/55 R17', '200/55 R17'],
    description: 'Llanta deportiva con compuesto de carrera, perfecta para track days y uso deportivo.',
    features: ['Compuesto racing', 'Agarre extremo', 'Respuesta rápida', 'Tecnología flash'],
    inStock: true,
    rating: 4.8
  },
  {
    id: 4,
    name: 'Pirelli Angel Scooter',
    brand: 'Pirelli',
    price: 150000,
    originalPrice: 170000,
    image: 'https://images.unsplash.com/photo-1599016083237-273e2f0c1bac?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwdGlyZXN8ZW58MHx8fGJsYWNrfDE3NTM3NjA3MTZ8MA&ixlib=rb-4.1.0&q=85',
    category: 'Scooter',
    sizes: ['110/70 R12', '120/70 R12', '130/70 R12'],
    description: 'Llanta específica para scooters, con excelente estabilidad y confort urbano.',
    features: ['Estabilidad urbana', 'Confort superior', 'Bajo ruido', 'Económica'],
    inStock: true,
    rating: 4.5
  },
  
  // Metzeler
  {
    id: 5,
    name: 'Metzeler Roadtec 01',
    brand: 'Metzeler',
    price: 380000,
    originalPrice: 420000,
    image: 'https://images.unsplash.com/photo-1653494202151-074697ce2174?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxtb3RvcmN5Y2xlJTIwdGlyZXN8ZW58MHx8fGJsYWNrfDE3NTM3NjA3MTZ8MA&ixlib=rb-4.1.0&q=85',
    category: 'Touring',
    sizes: ['120/70 R17', '180/55 R17', '190/50 R17'],
    description: 'Llanta touring con excelente balance entre performance y durabilidad.',
    features: ['Larga duración', 'Confort de viaje', 'Estabilidad', 'Bajo desgaste'],
    inStock: true,
    rating: 4.7
  },
  
  // Dunlop
  {
    id: 6,
    name: 'Dunlop Sportmax GPR-300',
    brand: 'Dunlop',
    price: 320000,
    originalPrice: 360000,
    image: 'https://images.pexels.com/photos/7671467/pexels-photo-7671467.jpeg',
    category: 'Sport',
    sizes: ['120/70 R17', '180/55 R17', '190/50 R17'],
    description: 'Llanta deportiva con tecnología racing, ideal para uso en pista y calle.',
    features: ['Tecnología racing', 'Agarre superior', 'Respuesta inmediata', 'Durabilidad'],
    inStock: true,
    rating: 4.6
  },
  
  // Timsun
  {
    id: 7,
    name: 'Timsun TS-689',
    brand: 'Timsun',
    price: 120000,
    originalPrice: 140000,
    image: 'https://images.unsplash.com/photo-1592884835935-9f664c71b96b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxtb3RvcmN5Y2xlJTIwdGlyZXN8ZW58MHx8fGJsYWNrfDE3NTM3NjA3MTZ8MA&ixlib=rb-4.1.0&q=85',
    category: 'City',
    sizes: ['80/100 R14', '90/90 R14', '100/80 R14'],
    description: 'Llanta económica con buena relación calidad-precio para uso urbano.',
    features: ['Precio accesible', 'Uso urbano', 'Durabilidad básica', 'Instalación fácil'],
    inStock: true,
    rating: 4.2
  },
  
  // Chaoyang
  {
    id: 8,
    name: 'Chaoyang H-666',
    brand: 'Chaoyang',
    price: 100000,
    originalPrice: 120000,
    image: 'https://images.unsplash.com/photo-1599016083237-273e2f0c1bac?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwdGlyZXN8ZW58MHx8fGJsYWNrfDE3NTM3NjA3MTZ8MA&ixlib=rb-4.1.0&q=85',
    category: 'Economy',
    sizes: ['80/100 R14', '90/90 R14', '100/80 R14'],
    description: 'Llanta económica de calidad básica, perfecta para uso ocasional.',
    features: ['Muy económica', 'Uso básico', 'Instalación simple', 'Garantía básica'],
    inStock: true,
    rating: 3.9
  },
  
  // Kenda
  {
    id: 9,
    name: 'Kenda K701',
    brand: 'Kenda',
    price: 140000,
    originalPrice: 160000,
    image: 'https://images.pexels.com/photos/7671467/pexels-photo-7671467.jpeg',
    category: 'City',
    sizes: ['80/100 R14', '90/90 R14', '100/80 R14'],
    description: 'Llanta urbana con buen agarre y durabilidad para uso diario.',
    features: ['Agarre urbano', 'Durabilidad media', 'Precio justo', 'Confort básico'],
    inStock: true,
    rating: 4.3
  },
  
  // Kontrol
  {
    id: 10,
    name: 'Kontrol K-112',
    brand: 'Kontrol',
    price: 110000,
    originalPrice: 130000,
    image: 'https://images.unsplash.com/photo-1592884835935-9f664c71b96b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxtb3RvcmN5Y2xlJTIwdGlyZXN8ZW58MHx8fGJsYWNrfDE3NTM3NjA3MTZ8MA&ixlib=rb-4.1.0&q=85',
    category: 'Economy',
    sizes: ['80/100 R14', '90/90 R14', '100/80 R14'],
    description: 'Llanta económica nacional con garantía local y buen servicio.',
    features: ['Marca nacional', 'Garantía local', 'Precio competitivo', 'Disponibilidad'],
    inStock: false,
    rating: 4.0
  },
  
  // Queen
  {
    id: 11,
    name: 'Queen Q-Sport 300',
    brand: 'Queen',
    price: 130000,
    originalPrice: 150000,
    image: 'https://images.unsplash.com/photo-1599016083237-273e2f0c1bac?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwdGlyZXN8ZW58MHx8fGJsYWNrfDE3NTM3NjA3MTZ8MA&ixlib=rb-4.1.0&q=85',
    category: 'Sport',
    sizes: ['120/70 R17', '180/55 R17', '190/50 R17'],
    description: 'Llanta deportiva de marca nacional con buen rendimiento y precio.',
    features: ['Deportiva nacional', 'Buen rendimiento', 'Precio accesible', 'Servicio local'],
    inStock: true,
    rating: 4.1
  },
  
  // IRC
  {
    id: 12,
    name: 'IRC RoadWinner',
    brand: 'IRC',
    price: 160000,
    originalPrice: 180000,
    image: 'https://images.pexels.com/photos/7671467/pexels-photo-7671467.jpeg',
    category: 'Touring',
    sizes: ['120/70 R17', '180/55 R17', '190/50 R17'],
    description: 'Llanta japonesa con excelente calidad y durabilidad para touring.',
    features: ['Calidad japonesa', 'Larga duración', 'Confort de viaje', 'Resistencia'],
    inStock: true,
    rating: 4.4
  }
];

export const brands = [
  { name: 'Michelin', logo: '/brands/michelin.svg' },
  { name: 'Pirelli', logo: '/brands/pirelli.svg' },
  { name: 'Metzeler', logo: '/brands/metzeler.svg' },
  { name: 'Dunlop', logo: '/brands/dunlop.svg' },
  { name: 'Timsun', logo: '/brands/timsun.svg' },
  { name: 'Chaoyang', logo: '/brands/chaoyang.svg' },
  { name: 'Kenda', logo: '/brands/kenda.svg' },
  { name: 'Kontrol', logo: '/brands/kontrol.svg' },
  { name: 'Queen', logo: '/brands/queen.svg' },
  { name: 'IRC', logo: '/brands/irc.svg' }
];

export const categories = [
  { name: 'Sport', icon: '🏍️', description: 'Llantas deportivas de alta performance' },
  { name: 'City', icon: '🏙️', description: 'Llantas urbanas para uso diario' },
  { name: 'Touring', icon: '🛣️', description: 'Llantas para viajes largos' },
  { name: 'Scooter', icon: '🛵', description: 'Llantas específicas para scooters' },
  { name: 'Economy', icon: '💰', description: 'Llantas económicas de calidad' }
];