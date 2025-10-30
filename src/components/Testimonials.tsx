import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Custom hook for count-up animation
const useCountUp = (target: number, trigger: boolean, duration = 1500) => {
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
    // eslint-disable-next-line
  }, [trigger, target, duration]);

  return count;
};

const Testimonials: React.FC = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (statsRef.current) {
      const obs = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setStatsVisible(true);
            }
          });
        },
        { threshold: 0.3 }
      );
      obs.observe(statsRef.current);
      return () => obs.disconnect();
    }
  }, []);

  const avgRating = useCountUp(4.9, statsVisible);
  const happyCustomers = useCountUp(500, statsVisible);
  const satisfaction = useCountUp(100, statsVisible);
  const miniatures = useCountUp(500, statsVisible);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Priya & Arjun Sharma',
      occasion: 'Wedding Anniversary',
      rating: 5,
      review:
        "MaayaMade created the most beautiful 3D miniature of us for our 5th anniversary. The attention to detail is incredible - they captured our wedding attire perfectly, down to the intricate embroidery on my lehenga. It's our most treasured possession now!",
      originalPhoto: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg',
      miniaturePhoto: 'https://images.pexels.com/photos/1444443/pexels-photo-1444443.jpeg',
      location: 'Mumbai, India',
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      occasion: "Father's Day Gift",
      rating: 5,
      review:
        'I wanted to surprise my dad with something unique for Father\'s Day. The 3D miniature of our family photo from his retirement party was perfect. He was so emotional when he saw it. The quality and craftsmanship exceeded all expectations!',
      originalPhoto: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg',
      miniaturePhoto: 'https://images.pexels.com/photos/3586799/pexels-photo-3586799.jpeg',
      location: 'Delhi, India',
    },
    {
      id: 3,
      name: 'Sarah & Michael Johnson',
      occasion: 'Wedding Memento',
      rating: 5,
      review:
        'As an international couple, we wanted something special to commemorate our Indian wedding. MaayaMade delivered beyond our expectations! The figurine perfectly captures the joy of our special day. Highly recommended for anyone wanting a unique keepsake.',
      originalPhoto: 'https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg',
      miniaturePhoto: 'https://images.pexels.com/photos/2253843/pexels-photo-2253843.jpeg',
      location: 'Bangalore, India',
    },
    {
      id: 4,
      name: 'Anita Desai',
      occasion: 'Birthday Gift',
      rating: 5,
      review:
        "I commissioned a 3D miniature of my daughter's graduation photo as a surprise birthday gift. The team was incredibly professional, kept me updated throughout the process, and delivered a masterpiece. The likeness is uncanny!",
      originalPhoto: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg',
      miniaturePhoto: 'https://images.pexels.com/photos/2381070/pexels-photo-2381070.jpeg',
      location: 'Chennai, India',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-yellow-600">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real customers who trusted us with their precious memories
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative mb-16">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Images Side */}
              <div className="bg-gray-100 p-8 lg:p-12">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">
                      Original Photo
                    </h4>
                    <img
                      src={testimonials[currentTestimonial].originalPhoto}
                      alt="Original photo"
                      className="w-full h-64 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-600 mb-4">
                      3D Miniature Result
                    </h4>
                    <img
                      src={testimonials[currentTestimonial].miniaturePhoto}
                      alt="3D miniature"
                      className="w-full h-64 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <Quote className="w-12 h-12 text-yellow-400 mb-4" />
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {testimonials[currentTestimonial].review}
                  </p>
                </div>
                <div className="border-t pt-6">
                  <div className="flex items-center mb-4">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-yellow-600 font-medium mb-2">
                    {testimonials[currentTestimonial].occasion}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-500 transition-colors duration-300 shadow-xl z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-500 transition-colors duration-300 shadow-xl z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center space-x-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? 'bg-yellow-400 scale-125' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Quick Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600 mb-4 line-clamp-3">
                "{testimonial.review.slice(0, 150)}..."
              </p>
              <div className="flex items-center">
                <div>
                  <h5 className="font-semibold text-gray-900">{testimonial.name}</h5>
                  <p className="text-sm text-yellow-600">{testimonial.occasion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Stats (dynamic) */}
        <div
          ref={statsRef}
          className="mt-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-black">
            <div>
              <div className="text-4xl font-bold mb-2">{avgRating.toFixed(1)}/5</div>
              <div className="text-lg font-medium">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{happyCustomers}+</div>
              <div className="text-lg font-medium">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{satisfaction}%</div>
              <div className="text-lg font-medium">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{miniatures}+</div>
              <div className="text-lg font-medium">Miniatures Created</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Happy Customers</h3>
          <p className="text-lg text-gray-600 mb-8">
            Start your 3D miniature journey today and create memories that last forever
          </p>
          {/* <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
            Create My Miniature
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
