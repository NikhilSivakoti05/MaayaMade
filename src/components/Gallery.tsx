import  { useState, } from 'react';
import {  Filter } from 'lucide-react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [, setCurrentSlide] = useState(0);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedImage, setSelectedImage] = useState<any>(null);

  const filters = ['All', 'Wedding', 'Portrait', 'Keychains', 'Anime & cosplay','decor & Toys'];  

  const galleryItems = [
    {
      // id: 1,
      category: 'Wedding',
      // originalPhoto: '/download.jpeg',
      miniature: '/maaya-made1.jpg',
      title: 'Wedding Couple Miniature',
      description: 'Beautiful couple transformed into elegant 3D figurine'
    },
    {
      // id: 1,
      category: 'Wedding',
      // originalPhoto: '/download.jpeg',
      miniature: '/maaya-made2.jpg',
      title: 'Wedding Couple Miniature',
      description: 'Beautiful couple transformed into elegant 3D figurine'
    },
    {
      // id: 1,
      category: 'Wedding',
      // originalPhoto: '/download.jpeg',
      miniature: '/maaya-made3.jpg',
      title: 'Wedding Couple Miniature',
      description: 'Beautiful couple transformed into elegant 3D figurine'
    },
    {
      // id: 1,
      category: 'Wedding',
      // originalPhoto: '/download.jpeg',
      miniature: '/maaya-made4.jpg',
      title: 'Wedding Couple Miniature',
      description: 'Beautiful couple transformed into elegant 3D figurine'
    },
    {
      // id: 1,
      category: 'Wedding',
      // originalPhoto: '/download.jpeg',
      miniature: '/maaya-made5.jpg',
      title: 'Wedding Couple Miniature',
      description: 'Beautiful couple transformed into elegant 3D figurine'
    },
    {
      // id: 1,
      category: 'Wedding',
      // originalPhoto: '/download.jpeg',
      miniature: '/maaya-made6.jpg',
      title: 'Wedding Couple Miniature',
      description: 'Beautiful couple transformed into elegant 3D figurine'
    },
    {
      // id: 2,
      category: 'Portrait',
      // originalPhoto: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg',
      miniature: '/maaya-made7.jpg',
      title: 'Individual Portrait',
      description: 'Stunning individual portrait with incredible detail'
    },
    {
      // id: 2,
      category: 'Portrait',
      // originalPhoto: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg',
      miniature: '/maaya-made8.jpg',
      title: 'Individual Portrait',
      description: 'Stunning individual portrait with incredible detail'
    },
    {
      // id: 2,
      category: 'Portrait',
      // originalPhoto: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg',
      miniature: '/maaya-made9.jpg',
      title: 'Individual Portrait',
      description: 'Stunning individual portrait with incredible detail'
    },
    {
      // id: 2,
      category: 'Portrait',
      // originalPhoto: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg',
      miniature: '/maaya-made10.jpg',
      title: 'Individual Portrait',
      description: 'Stunning individual portrait with incredible detail'
    },
    {
      // id: 2,
      category: 'Portrait',
      // originalPhoto: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg',
      miniature: '/maaya-made11.jpg',
      title: 'Individual Portrait',
      description: 'Stunning individual portrait with incredible detail'
    },
    {
      // id: 2,
      category: 'Portrait',
      // originalPhoto: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg',
      miniature: '/maaya-made12.jpg',
      title: 'Individual Portrait',
      description: 'Stunning individual portrait with incredible detail'
    },
    {
      // id: 3,
      category: 'Keychains',
      // originalPhoto: 'https://images.pexels.com/photos/1670723/pexels-photo-1670723.jpeg',
      miniature: '/maaya-made30.jpg',
      title: 'Custom Keychain',
      description: 'Personalized keychain with amazing likeness'
    },
    {
      // id: 3,
      category: 'Keychains',
      // originalPhoto: 'https://images.pexels.com/photos/1670723/pexels-photo-1670723.jpeg',
      miniature: '/maaya-made31.jpg',
      title: 'Custom Keychain',
      description: 'Personalized keychain with amazing likeness'
    },
    {
      // id: 3,
      category: 'Keychains',
      // originalPhoto: 'https://images.pexels.com/photos/1670723/pexels-photo-1670723.jpeg',
      miniature: '/maaya-made32.jpg',
      title: 'Custom Keychain',
      description: 'Personalized keychain with amazing likeness'
    },
    {
      // id: 3,
      category: 'Keychains',
      // originalPhoto: 'https://images.pexels.com/photos/1670723/pexels-photo-1670723.jpeg',
      miniature: '/maaya-made33.jpg',
      title: 'Custom Keychain',
      description: 'Personalized keychain with amazing likeness'
    },
    {
      // id: 3,
      category: 'Keychains',
      // originalPhoto: 'https://images.pexels.com/photos/1670723/pexels-photo-1670723.jpeg',
      miniature: '/maaya-made34.png',
      title: 'Custom Keychain',
      description: 'Personalized keychain with amazing likeness'
    },
    {
      // id: 3,
      category: 'Keychains',
      // originalPhoto: 'https://images.pexels.com/photos/1670723/pexels-photo-1670723.jpeg',
      miniature: '/maaya-made35.png',
      title: 'Custom Keychain',
      description: 'Personalized keychain with amazing likeness'
    },
    {
      // id: 3,
      category: 'Keychains',
      // originalPhoto: 'https://images.pexels.com/photos/1670723/pexels-photo-1670723.jpeg',
      miniature: '/maaya-made36.png',
      title: 'Custom Keychain',
      description: 'Personalized keychain with amazing likeness'
    },
    {
      // id: 3,
      category: 'Keychains',
      // originalPhoto: 'https://images.pexels.com/photos/1670723/pexels-photo-1670723.jpeg',
      miniature: '/maaya-made37.png',
      title: 'Custom Keychain',
      description: 'Personalized keychain with amazing likeness'
    },
    {
      // id: 3,
      category: 'Keychains',
      // originalPhoto: 'https://images.pexels.com/photos/1670723/pexels-photo-1670723.jpeg',
      miniature: '/maaya-made38.png',
      title: 'Custom Keychain',
      description: 'Personalized keychain with amazing likeness'
    },
    {
      // id: 3,
      category: 'Keychains',
      // originalPhoto: 'https://images.pexels.com/photos/1670723/pexels-photo-1670723.jpeg',
      miniature: '/maaya-made39.png',
      title: 'Custom Keychain',
      description: 'Personalized keychain with amazing likeness'
    },
       {
      // id: 3,
      category: 'Keychains',
      // originalPhoto: 'https://images.pexels.com/photos/1670723/pexels-photo-1670723.jpeg',
      miniature: '/maaya-made40.png',
      title: 'Custom Keychain',
      description: 'Personalized keychain with amazing likeness'
    },
       {
      // id: 3,
      category: 'Keychains',
      // originalPhoto: 'https://images.pexels.com/photos/1670723/pexels-photo-1670723.jpeg',
      miniature: '/maaya-made41.png',
      title: 'Custom Keychain',
      description: 'Personalized keychain with amazing likeness'
    },
       {
      // id: 3,
      category: 'Keychains',
      // originalPhoto: 'https://images.pexels.com/photos/1670723/pexels-photo-1670723.jpeg',
      miniature: '/maaya-made42.png',
      title: 'Custom Keychain',
      description: 'Personalized keychain with amazing likeness'
    },
       {
      // id: 3,
      category: 'Keychains',
      // originalPhoto: 'https://images.pexels.com/photos/1670723/pexels-photo-1670723.jpeg',
      miniature: '/maaya-made43.png',
      title: 'Custom Keychain',
      description: 'Personalized keychain with amazing likeness'
    },

    {
      category: 'Anime & cosplay',
      // originalPhoto: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      miniature: '/maaya-made14.jpg',
      title: 'Anime Character',
      description: 'Custom anime figurine with vibrant colors'
    },
     {
      category: 'Anime & cosplay',
      // originalPhoto: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      miniature: '/maaya-made15.jpg',
      title: 'Anime Character',
      description: 'Custom anime figurine with vibrant colors'
    },
     {
      category: 'Anime & cosplay',
      // originalPhoto: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      miniature: '/maaya-made16.jpg',
      title: 'Anime Character',
      description: 'Custom anime figurine with vibrant colors'
    },
     {
      category: 'Anime & cosplay',
      // originalPhoto: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      miniature: '/maaya-made17.jpg',
      title: 'Anime Character',
      description: 'Custom anime figurine with vibrant colors'
    },
     {
      category: 'Anime & cosplay',
      // originalPhoto: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      miniature: '/maaya-made18.jpg',
      title: 'Anime Character',
      description: 'Custom anime figurine with vibrant colors'
    },
     {
      category: 'Anime & cosplay',
      // originalPhoto: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      miniature: '/maaya-made19.jpg',
      title: 'Anime Character',
      description: 'Custom anime figurine with vibrant colors'
    },
     {
      category: 'Anime & cosplay',
      // originalPhoto: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      miniature: '/maaya-made20.jpg',
      title: 'Anime Character',
      description: 'Custom anime figurine with vibrant colors'
    },
     {
      category: 'Anime & cosplay',
      // originalPhoto: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      miniature: '/maaya-made50.png',
      title: 'Anime Character',
      description: 'Custom anime figurine with vibrant colors'
    },
    // {
    //   category: 'Anime & cosplay',
    //   // originalPhoto: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
    //   miniature: '/maaya-made55.jpg',
    //   title: 'Anime Character',
    //   description: 'Custom anime figurine with vibrant colors'
    // },
    {
      category: 'Anime & cosplay',
      // originalPhoto: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      miniature: '/maaya-made54.png',
      title: 'Anime Character',
      description: 'Custom anime figurine with vibrant colors'
    },
    {
      category: 'Anime & cosplay',
      // originalPhoto: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      miniature: '/maaya-made53.png',
      title: 'Anime Character',
      description: 'Custom anime figurine with vibrant colors'
    },
    {
      category: 'Anime & cosplay',
      // originalPhoto: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      miniature: '/maaya-made54.png',
      title: 'Anime Character',
      description: 'Custom anime figurine with vibrant colors'
    },
    {
      category: 'Anime & cosplay',
      // originalPhoto: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      miniature: '/maaya-made21.jpg',
      title: 'Anime Character',
      description: 'Custom anime figurine with vibrant colors'
    },
    
    //  {
    //   category: 'Anime & cosplay',
    //   // originalPhoto: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
    //   miniature: '/22.jpg',
    //   title: 'Anime Character',
    //   description: 'Custom anime figurine with vibrant colors'
    // },
    {
      category: 'decor & Toys',
      // originalPhoto: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      miniature: '/maaya-made23.jpg',
      title: 'Anime Character',
      description: 'Custom anime figurine with vibrant colors'
    },
    {
      category: 'decor & Toys',
      // originalPhoto: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      miniature: '/maaya-made24.jpg',
      title: 'Anime Character',
      description: 'Custom anime figurine with vibrant colors'
    },
    {
      category: 'decor & Toys',
      // originalPhoto: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      miniature: '/maaya-made25.jpg',
      title: 'Anime Character',
      description: 'Custom anime figurine with vibrant colors'
    },
    {
      category: 'decor & Toys',
      // originalPhoto: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      miniature: '/maaya-made26.jpg',
      title: 'Anime Character',
      description: 'Custom anime figurine with vibrant colors'
    },
    {
      category: 'decor & Toys',
      // originalPhoto: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      miniature: '/maaya-made27.jpg',
      title: 'Anime Character',
      description: 'Custom anime figurine with vibrant colors'
    },
    {
      category: 'decor & Toys',
      // originalPhoto: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      miniature: '/maaya-made28.jpg',
      title: 'Anime Character',
      description: 'Custom anime figurine with vibrant colors'
    },
    {
      category: 'decor & Toys',
      // originalPhoto: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      miniature: '/maaya-made29.jpg',
      title: 'Anime Character',
      description: 'Custom anime figurine with vibrant colors'
    },
    {
      category: 'decor & Toys',
      // originalPhoto: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      miniature: '/maaya-made44.png',
      title: 'Anime Character',
      description: 'Custom anime figurine with vibrant colors'
    },
    {
      category: 'decor & Toys',
      // originalPhoto: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      miniature: '/maaya-made45.png',
      title: 'Anime Character',
      description: 'Custom anime figurine with vibrant colors'
    },
    {
      category: 'decor & Toys',
      // originalPhoto: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      miniature: '/maaya-made46.png',
      title: 'Anime Character',
      description: 'Custom anime figurine with vibrant colors'
    },
    {
      category: 'decor & Toys',
      // originalPhoto: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      miniature: '/maaya-made47.png',
      title: 'Anime Character',
      description: 'Custom anime figurine with vibrant colors'
    },
    {
      category: 'decor & Toys',
      // originalPhoto: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      miniature: '/maaya-made48.png',
      title: 'Anime Character',
      description: 'Custom anime figurine with vibrant colors'
    },
    {
      category: 'decor & Toys',
      // originalPhoto: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      miniature: '/maaya-made49.png',
      title: 'Anime Character',
      description: 'Custom anime figurine with vibrant colors'
    },

  ];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % filteredItems.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [filteredItems.length]);

  // const openModal = (item: any) => {
  //   setSelectedImage(item);
  //   setIsModalOpen(true);
  // };

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % filteredItems.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  // };

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Amazing <span className="text-yellow-400">Transformations</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            See how we transform ordinary photos into extraordinary 3D miniatures
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setCurrentSlide(0);
                }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-yellow-400 text-black'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="relative mb-16">
          {/* <div className="relative overflow-hidden rounded-3xl bg-gray-800 shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {filteredItems.map((item, index) => (
                <div key={item.id} className="min-w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 p-8 lg:p-16">
                    <div className="space-y-6">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-2">Original Photo</h3>
                        <p className="text-gray-400">Your precious memory</p>
                      </div>
                      <div className="relative group cursor-pointer" onClick={() => openModal(item)}>
                        <img
                          src={item.originalPhoto}
                          alt="Original photo"
                          className="w-full h-80 object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                          <ZoomIn className="w-12 h-12 text-white" />
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="text-center pb-8">
                    <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* Navigation Arrows */}
          {/* <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-500 transition-colors duration-300 shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-500 transition-colors duration-300 shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button> */}

          {/* Dots Indicator */}
          {/* <div className="flex justify-center space-x-2 mt-8">
            {filteredItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div> */}
        </div>

        {/* Grid View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item,) => (
            <div
              // key={item.id}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={item.miniature}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-sm font-semibold">
                  {item.category}
                </div>
              </div>
              {/* <div className="p-6"> */}
                {/* <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 mb-4">{item.description}</p> */}
                {/* <button
                  onClick={() => openModal(item)}
                  className="w-full bg-yellow-400 text-black py-2 rounded-full font-semibold hover:bg-yellow-500 transition-colors duration-300"
                >
                  View Details
                </button> */}
              </div>
            // </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {/* {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={() => setIsModalOpen(false)}>
          <div className="max-w-4xl w-full bg-gray-800 rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-4">Original Photo</h3>
                <img
                  src={selectedImage.originalPhoto}
                  alt="Original"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">3D Miniature</h3>
                <img
                  src={selectedImage.miniature}
                  alt="3D Miniature"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="p-8 border-t border-gray-700">
              <h4 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h4>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )} */}
    </section>
  );
};

export default Gallery;