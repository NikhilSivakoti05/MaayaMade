import React, { useState } from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const [selectedSize, setSelectedSize] = useState('12"');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const pricingTiers = [
    {
      name: 'Essential',
      size: '8"',
      price: 2999,
      originalPrice: 3999,
      icon: Star,
      popular: false,
      features: [
        'Single figurine',
        'Basic pose',
        'Standard materials',
        '7-day delivery',
        'Digital preview',
        'Basic packaging'
      ]
    },
    {
      name: 'Premium',
      size: '12"',
      price: 3990,
      originalPrice: 4990,
      icon: Zap,
      popular: true,
      features: [
        'Single or couple figurine',
        'Custom poses',
        'Premium materials',
        '5-day delivery',
        'Multiple previews',
        'Gift packaging',
        'Express shipping',
        '30-day warranty'
      ]
    },
    {
      name: 'Luxury',
      size: 'Custom',
      price: 5990,
      originalPrice: 7990,
      icon: Crown,
      popular: false,
      features: [
        'Family or group figurines',
        'Completely custom design',
        'Ultra-premium materials',
        '3-day priority delivery',
        'Unlimited revisions',
        'Luxury packaging',
        'White-glove delivery',
        'Lifetime warranty',
        'Personal consultation'
      ]
    }
  ];

  const sizeOptions = ['8"', '12"', 'Custom'];

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle quote submission
    setIsQuoteModalOpen(false);
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Transparent <span className="text-yellow-400">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect package for your 3D printing needs. All prices include design, printing, and shipping.
          </p>

          {/* Size Selector */}
          <div className="flex justify-center space-x-4 mb-12">
            {sizeOptions.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedSize === size
                    ? 'bg-yellow-400 text-black shadow-xl'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-gray-800 rounded-3xl p-8 shadow-2xl transition-all duration-300 transform hover:-translate-y-4 ${
                tier.popular
                  ? 'border-2 border-yellow-400 scale-105'
                  : 'border border-gray-700 hover:border-gray-600'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:rotate-12 transition-transform duration-300">
                  <tier.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-400">{tier.size} Figurine</p>
              </div>

              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-4xl font-bold text-yellow-400">₹{tier.price}</span>
                  <span className="text-lg text-gray-400 ml-2 line-through">₹{tier.originalPrice}</span>
                </div>
                <p className="text-gray-400">One-time payment</p>
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mt-2">
                  Save ₹{tier.originalPrice - tier.price}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                Choose {tier.name}
              </button>
            </div>
          ))}
        </div>

        {/* Instant Quote Section */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold text-black mb-4">
            Get Instant Quote in 60 Seconds
          </h3>
          <p className="text-lg text-black opacity-80 mb-8">
            Tell us about your project and get a personalized quote instantly
          </p>
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105"
          >
            Get My Quote Now
          </button>
        </div>

        {/* Additional Pricing Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
              <span className="text-black font-bold text-2xl">✓</span>
            </div>
            <h4 className="text-xl font-bold text-white">No Hidden Costs</h4>
            <p className="text-gray-400">All prices include design, printing, and standard shipping</p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
              <span className="text-black font-bold text-2xl">💳</span>
            </div>
            <h4 className="text-xl font-bold text-white">Secure Payment</h4>
            <p className="text-gray-400">Multiple payment options including UPI, cards, and wallets</p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
              <span className="text-black font-bold text-2xl">🔄</span>
            </div>
            <h4 className="text-xl font-bold text-white">Money-back Guarantee</h4>
            <p className="text-gray-400">100% satisfaction guaranteed or your money back</p>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Instant Quote</h3>
            <form onSubmit={handleQuoteSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent">
                  <option>Wedding Couple</option>
                  <option>Individual Portrait</option>
                  <option>Family Group</option>
                  <option>Pet Portrait</option>
                  <option>Custom Design</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Size Preference</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent">
                  <option>8 inches</option>
                  <option>12 inches</option>
                  <option>Custom size</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setIsQuoteModalOpen(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300"
                >
                  Get Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;