
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      subtitle: 'Speak directly with our team',
      contact: '+919100991365',
      action: 'tel:+919100991365',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      subtitle: 'Quick chat & photo sharing',
      contact: '+919100991365',
      action: 'https://wa.me/919100991365',
      color: 'from-green-500 to-green-700'
    },
    {
      icon: Mail,
      title: 'Email Us',
      subtitle: 'Detailed project discussions',
      contact: 'maayamade.india@gmail.com',
      action: 'mailto:maayamade.india@gmail.com',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: MapPin,
      title: 'Visit Studio',
      subtitle: 'See our work in person',
      contact: 'Hyderabad, Telangana, India',
      action: '#',
      color: 'from-purple-400 to-purple-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Let's Create <span className="text-yellow-600">Your Miniature</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your photos into stunning 3D miniatures?
            Get in touch with us through any of these convenient ways.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.action}
              target={method.title === 'WhatsApp' ? '_blank' : '_self'}
              rel={method.title === 'WhatsApp' ? 'noopener noreferrer' : ''}
              className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-500 group-hover:rotate-180`}>
                <method.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-gray-500 mb-4">{method.subtitle}</p>
              <p className="text-yellow-600 font-semibold group-hover:text-yellow-700 transition-colors">
                {method.contact}
              </p>
            </a>
          ))}
        </div>

        {/* Lower section (image + info) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* IMAGE Instead of form */}
          <div className="bg-white rounded-3xl p-0 shadow-2xl overflow-hidden">
            <img
              src="src/public/maaya-made7.jpg"
              alt="Sample 3D miniature"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Studio + Hours + Map + Social Media */}
          <div className="space-y-8">
            {/* Business Hours */}
            <div className="bg-gray-900 rounded-3xl p-8 text-white">
              <div className="flex items-center mb-6">
                <Clock className="w-8 h-8 text-yellow-400 mr-4" />
                <h3 className="text-2xl font-bold">Business Hours</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Monday - Friday</span>
                  <span className="text-yellow-400">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Saturday</span>
                  <span className="text-yellow-400">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sunday</span>
                  <span className="text-yellow-400">11:00 AM - 4:00 PM</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-400 text-black rounded-xl">
                <p className="font-semibold">Quick Response Guarantee</p>
                <p className="text-sm opacity-80">We respond to all inquiries within 2 hours during business hours</p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <iframe
                title="Studio Location Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7612.040815281957!2d78.278417!3d17.532917!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a33a8c15a6f9895%3A0x0!2zMTfCsDMxJzU4LjUiTiA3OMKwMTYnNDIuMyJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen={false}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Follow Our Journey</h3>
              <div className="grid grid-cols-3 gap-4">
                <a
                  href="#"
                  className="bg-gradient-to-r from-pink-400 to-pink-600 p-4 rounded-2xl text-white text-center hover:scale-105 transition-all duration-300"
                >
                  <Instagram className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm font-semibold">Instagram</span>
                </a>

                <a
                  href="#"
                  className="bg-gradient-to-r from-blue-400 to-blue-600 p-4 rounded-2xl text-white text-center hover:scale-105 transition-all duration-300"
                >
                  <Facebook className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm font-semibold">Facebook</span>
                </a>

                <a
                  href="#"
                  className="bg-gradient-to-r from-blue-300 to-blue-500 p-4 rounded-2xl text-white text-center hover:scale-105 transition-all duration-300"
                >
                  <Twitter className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm font-semibold">Twitter</span>
                </a>
              </div>
              <p className="text-gray-500 text-sm mt-4 text-center">
                See our latest creations and behind-the-scenes content
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
