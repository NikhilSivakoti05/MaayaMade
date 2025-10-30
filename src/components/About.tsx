import  { useState, useEffect } from "react";
import { Heart, Award, Users, Zap, Target, Globe } from "lucide-react";
import { motion } from "framer-motion";


// Count-up hook
const useCountUp = (target: number, trigger: boolean, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const increment = target / (duration / 16);
    const step = () => {
      start += increment;
      if (start < target) {
        setCount(Math.round(start));
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(step);
  }, [trigger]);

  return count;
};

const About = () => {
  const [statsInView, setStatsInView] = useState(false);

  const miniatures = useCountUp(1000, statsInView);
  const customers = useCountUp(10, statsInView);
  const cities = useCountUp(15, statsInView);

  const values = [
    {
      icon: Heart,
      title: "Passion for Perfection",
      description:
        "Every miniature is crafted with love and attention to detail, ensuring each piece tells your unique story.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "We use only the finest materials and cutting-edge 3D printing technology to deliver exceptional results.",
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description:
        "Your satisfaction is our priority. We work closely with you throughout the entire creation process.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Constantly evolving our techniques and technology to push the boundaries of 3D printing artistry.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden"
    >
      {/* Glowing circles in background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-40 h-40 rounded-full bg-yellow-500 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-16 right-1/4 w-32 h-32 rounded-full bg-yellow-600 blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="text-yellow-400">MaayaMade</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Where memories meet technology to create timeless treasures
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8 text-gray-300 leading-relaxed"
          >
            <h3 className="text-3xl font-bold text-white">Our Story</h3>
            <p>
              Founded with a passion for transforming precious memories
              into tangible treasures. What started as a small dream has now grown
              into India's premier 3D printing studio.
            </p>
            <p>
              From wedding memories to pet portraits, we’ve helped hundreds of
              families preserve their most cherished moments. spread fun and joy with our cosplay artifacts, toys and decorated homes with our art decor pieces.
            </p>
            <div className="bg-yellow-500 text-black p-6 rounded-2xl shadow-lg">
              Made with ❤️ in India
            </div>
          </motion.div>

          {/* Image with Floating Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl flex items-center justify-center shadow-2xl">
              <div className="text-center text-black">
                <div className="text-8xl mb-4">🎨</div>
                <h4 className="text-2xl font-bold">Crafting Excellence</h4>
                {/* <p className="text-lg opacity-80">Since 2019</p> */}
              </div>

              {/* Floating icons */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl animate-float">
                <Target className="w-10 h-10 text-yellow-600" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center shadow-xl animate-float delay-700">
                <Globe className="w-8 h-8 text-black" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-10">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-yellow-500 rounded-full flex items-center justify-center">
                  <v.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl text-white font-bold mb-3">{v.title}</h4>
                <p className="text-gray-300">{v.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => setStatsInView(true)}
          className="bg-gray-800 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-yellow-400">{miniatures}+</div>
              <div className="text-gray-300">Miniatures Created</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400">{customers}+</div>
              <div className="text-gray-300">years of expertise</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400">{cities}+</div>
              <div className="text-gray-300">Cities Served</div>
            </div>
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            To bridge the gap between digital memories and physical keepsakes,
            creating lifelike miniatures that capture not just your appearance,
            but the love behind every moment.
          </p>
          <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-600 transition">
            Start Your Memory Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
