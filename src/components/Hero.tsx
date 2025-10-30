import  { useEffect, useState } from 'react';
import { ArrowRight, Star, Users, Award, CheckCircle } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-yellow-600 rounded-full opacity-5 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full opacity-5 animate-bounce delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-pulse">
                ✨ Premium 3D Printing Studio
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Memorable Photos
              </span>
              Into Stunning
              <span className="block text-yellow-400">3D Miniatures</span>
              <span className="block text-yellow-400">Cosplay artifacts</span>
              <span className="block text-yellow-400">Art Decor</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Preserve your most precious moments forever with lifelike 3D printed figurines, cosplay artifacts and art decor
              crafted from your photos with upto <span className="text-yellow-400 font-semibold">90% accuracy</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
  onClick={() => {
    window.open(
      'https://wa.me/+919100991365?text=Hello!%20I\'m%20interested%20in%20getting%20a%20custom%20quote%20for%203D%20Printed%20Miniatures.',
      '_blank'
    );
  }}
  className="group bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
>
  Get Custom Quote
  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
</button>

              
              <button
                onClick={() => scrollToSection('gallery')}
                className="group border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                View Gallery
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-yellow-400 mr-2" />
                  <span className="text-3xl font-bold text-white">500+</span>
                </div>
                <p className="text-gray-400 mb-10">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-yellow-400 mr-2" />
                  <span className="text-3xl font-bold text-white">Premium</span>
                </div>
                <p className="text-gray-400">Materials</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="w-6 h-6 text-yellow-400 mr-2" />
                  <span className="text-3xl font-bold text-white">100%</span>
                </div>
                <p className="text-gray-400">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Miniature Animation */}
          <div className={`relative flex items-center justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Rotating Ring */}
              <div className="absolute inset-0 border-4 border-yellow-400 rounded-full animate-spin opacity-20"></div>
              <div className="absolute inset-4 border-2 border-yellow-600 rounded-full animate-spin reverse opacity-30"></div>
              
              {/* Central 3D Miniature */}
              <div className="absolute inset-8 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full flex items-center justify-center transform animate-bounce">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
                  <div className="text-6xl">👫</div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                <Star className="w-8 h-8 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center animate-pulse delay-1000">
                <span className="text-white font-bold text-lg">3D</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;