import  { useState, useEffect } from 'react';
import { Heart, User, Key, Gamepad2, ArrowRight, Star } from 'lucide-react';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Change this to your WhatsApp number (without +)
  const whatsappNumber = '919100991365';

  const services = [
    {
      icon: Heart,
      title: 'Wedding Couple Miniatures',
      description: 'Perfect replicas of couples for weddings, anniversaries, or special occasions',
      price: '₹5,999',
      rating: 4.9,
      image: '/maaya-made1.jpg',
      features: ['Upto 90% accuracy', 'Premium materials', 'Custom poses', '15-day delivery']
    },
    {
      icon: User,
      title: 'Individual 3D Portraits',
      description: 'Personalized figurines capturing unique personality and style',
      price: '₹3,599',
      rating: 4.8,
      image: '/maaya-made10.jpg',
      features: ['Lifelike details', 'Multiple sizes', 'Gift packaging', 'Satisfaction guarantee']
    },
    {
      icon: Key,
      title: 'Custom Keychains',
      description: 'Miniature versions perfect for keys, bags, or collectibles',
      price: '₹349',
      rating: 4.7,
      image: '/maaya-made30.jpg',
      features: ['Durable materials', 'Compact design', 'Multiple colors', 'Fast production']
    },
    {
      icon: Gamepad2,
      title: 'Anime & Character Figurines',
      description: 'Custom anime characters and fictional personalities brought to life',
      price: '₹1499',
      rating: 4.9,
      image: '/maaya-made17.jpg',
      features: ['Accurate details', 'Vibrant colors', 'Collector quality', 'Custom requests']
    }
  ];

  const handleOrderClick = (title: string, price: string) => {
    const message = `Hello, I am interested in the '${title}' service priced at ${price}. I would like to know more information and proceed with the order. Thank you!`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Premium <span className="text-yellow-600">Crafting Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your photos into stunning 3D masterpieces with our cutting-edge technology and artistic expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`service-card group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  <Star className="w-4 h-4 inline mr-1" />
                  {service.rating}
                </div>
              </div>

              {/* Content */}
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Price and CTA */}
              <div className="border-t pt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-yellow-600">{service.price}</span>
                  <span className="text-sm text-gray-500">onwards</span>
                </div>
                
                <button
                  onClick={() => handleOrderClick(service.title, service.price)}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-3 rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center"
                >
                  Order Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8">
            Need a custom solution? We create bespoke 3D miniatures for any occasion!
          </p>
          {/* Optional: This button can also lead to WhatsApp or scroll */}
          <button
            onClick={() => {
              const message = `Hello, I would like a custom quote for a personalized 3D printing service. Please assist me with the details.`;
              window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
            }}
            className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105"
          >
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
