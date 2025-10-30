import { useEffect, useState } from 'react';
import { Upload, Palette, CheckCircle, Truck, ArrowDown } from 'lucide-react';

const Process = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleSteps(prev => [...prev, index]);
            }, index * 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    const steps = document.querySelectorAll('.process-step');
    steps.forEach(step => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: Upload,
      title: 'Upload Photos',
      description: 'Send us your high-quality photos through whatsapp as per your convenience. Multiple angles preferred for best results.',
      details: ['High-resolution images', 'Multiple angles', 'Clear lighting', 'Front and side views recommended']
    },
    {
      icon: Palette,
      title: '3D Design',
      description: 'Our skilled artists create detailed 3D models using advanced software and artistic expertise.',
      details: ['Professional 3D modeling', 'Texture mapping', 'Color matching', 'upto 90% accuracy guaranteed']
    },
    {
      icon: CheckCircle,
      title: 'Approval',
      description: 'Review and approve your 3D model before printing. We make adjustments for your satisfaction.',
      details: ['Digital preview', 'Revision rounds', 'Customer approval', 'Final confirmation']
    },
    {
      icon: Truck,
      title: 'Print & Ship',
      description: 'High-quality 3D printing with premium materials, painting, careful packaging, and secure delivery to your doorstep.',
      details: ['Premium materials', 'Quality control', 'Secure packaging', 'Fast shipping']
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-yellow-600">Simple Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From photo to 3D miniature in just 4 easy steps. We handle everything while you relax!
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line visible on md+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative mb-16 last:mb-0 flex flex-col items-center w-full"
            >
              <div
                data-index={index}
                className={`process-step flex flex-col md:flex-row items-center w-full ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Box */}
                <div
                  className={`
                    w-full md:w-1/2
                    ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}
                    mb-6 md:mb-0
                    flex justify-center
                  `}
                >
                  <div
                    className={`
                      bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500
                      transform
                      ${visibleSteps.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                      ${index % 2 === 0 ? 'hover:translate-x-2' : 'hover:-translate-x-2'}
                      w-full max-w-md
                    `}
                  >
                    <div className={`flex items-center mb-6 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-4 hover:rotate-12 transition-transform duration-300">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className={`${index % 2 !== 0 ? 'text-right' : ''}`}>
                        <span className="text-sm font-semibold text-yellow-600 uppercase tracking-wide">
                          Step {index + 1}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed text-center md:text-left">
                      {step.description}
                    </p>

                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4"></div>
                          <span className="text-gray-500">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Central Icon */}
                <div className="absolute md:relative left-1/2 md:left-auto transform -translate-x-1/2 md:translate-x-0 w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-xl z-10">
                  <span className="text-white font-bold text-2xl">{index + 1}</span>
                </div>

                {/* Spacer for layout on md+ */}
                <div className="hidden md:block w-1/2"></div>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-8 md:mt-0">
                  <ArrowDown className="w-8 h-8 text-yellow-400 animate-bounce" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats */}
        {/* <div className="mt-20 bg-gray-900 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-400">24-48h</div>
              <div className="text-gray-300">Design Time</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-400">3-5 Days</div>
              <div className="text-gray-300">Printing Time</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-400">1-2 Days</div>
              <div className="text-gray-300">Shipping Time</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-400">7 Days</div>
              <div className="text-gray-300">Total Delivery</div>
            </div>
          </div>
        </div> */}

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your 3D Journey?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Upload your photos today and see the magic happen!
          </p>
          <button
            onClick={() => {
              const message = `Hello, I would like to start an order for a 3D miniature. Please guide me through the process.`;
              window.open(
                `https://wa.me/919100991365?text=${encodeURIComponent(message)}`,
                '_blank'
              );
            }}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Start Your Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
