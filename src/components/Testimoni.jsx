import React, { useRef, useEffect, useState } from "react";

const Testimoni = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  const testimonials = [
    { name: "Amanda, 24", rating: 5, msg: "SelfMend bener-bener ngebantu aku keluar dari masa-masa sulit. Terapisnya sabar dan ngertiin banget.", img: "https://img.freepik.com/free-photo/young-lady-blue-shirt-hat-pointing-aside_176474-33233.jpg?uid=R143220337&ga=GA1.1.396071000.1750256800&semt=ais_hybrid&w=740", role: "Designer" },
    { name: "Rizky, 28", rating: 4, msg: "Awalnya ragu, tapi ternyata enak banget konsul dari rumah. Praktis dan nyaman.", img: "https://img.freepik.com/premium-photo/young-business-man-isolated-blue-thinking-idea-while-looking-up_1368-126194.jpg?uid=R143220337&ga=GA1.1.396071000.1750256800&semt=ais_hybrid&w=740", role: "Software Engineer" },
    { name: "Dinda, 21", rating: 5, msg: "Fitur test kesehatannya membantu aku lebih sadar tentang kondisi emosiku.", img: "https://img.freepik.com/free-photo/young-lady-green-shirt-showing-welcoming-gesture-looking-confident-front-view_176474-66865.jpg?uid=R143220337&ga=GA1.1.396071000.1750256800&semt=ais_hybrid&w=740", role: "Student" },
    { name: "Bima, 27", rating: 4, msg: "Terapisnya profesional dan responsif. Nggak nyangka bisa senyaman ini ngobrol via online.", img: "https://i.pravatar.cc/150?img=4", role: "Marketing Manager" },
    { name: "Sari, 30", rating: 5, msg: "Aku suka banget fitur jadwal fleksibelnya. Bisa atur sendiri tanpa tekanan.", img: "https://i.pravatar.cc/150?img=5", role: "Teacher" },
    { name: "Raka, 22", rating: 3, msg: "Overall oke, cuma butuh lebih banyak opsi pembayaran menurutku.", img: "https://i.pravatar.cc/150?img=6", role: "Content Creator" },
    { name: "Lina, 25", rating: 5, msg: "SelfMend bantu aku bangkit dari burnout kerjaan. Recommended banget!", img: "https://i.pravatar.cc/150?img=7", role: "Graphic Designer" },
    { name: "Kevin, 29", rating: 4, msg: "Saya bisa ngobrol tanpa merasa dihakimi. Prosesnya bikin lega.", img: "https://i.pravatar.cc/150?img=8", role: "Consultant" },
    { name: "Maya, 32", rating: 5, msg: "Gampang banget aksesnya. Sangat membantu selama pandemi.", img: "https://i.pravatar.cc/150?img=9", role: "HR Manager" },
    { name: "Aldi, 23", rating: 4, msg: "Sistemnya mudah digunakan dan timnya ramah banget.", img: "https://i.pravatar.cc/150?img=10", role: "Data Analyst" },
    { name: "Yuni, 26", rating: 5, msg: "Aku suka ada fitur riwayat konsul. Jadi bisa tracking perasaan dari waktu ke waktu.", img: "https://i.pravatar.cc/150?img=11", role: "Product Manager" },
  ];

  const whyUsFeatures = [
    { 
      icon: "🧠", 
      title: "Psikolog Profesional", 
      desc: "Tersertifikasi, berpengalaman, dan empatik dengan pendekatan holistik yang disesuaikan untuk setiap individu."
    },
    { 
      icon: "📱", 
      title: "Akses Fleksibel", 
      desc: "Konsultasi 24/7 dengan teknologi AI terdepan dan interface yang intuitif untuk kemudahan maksimal."
    },
    { 
      icon: "🔒", 
      title: "Privasi Terjaga", 
      desc: "Enkripsi end-to-end dengan standar keamanan internasional untuk melindungi data pribadi Anda."
    },
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        if (carouselRef.current) {
          const carousel = carouselRef.current;
          const cardWidth = 320;
          const nextIndex = (currentIndex + 1) % testimonials.length;
          
          carousel.scrollTo({
            left: nextIndex * cardWidth,
            behavior: "smooth",
          });
          setCurrentIndex(nextIndex);
        }
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [currentIndex, isHovered, testimonials.length]);

  const handleDotClick = (index) => {
    if (carouselRef.current) {
      const cardWidth = 320;
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  return (
    <div className="relative overflow-hidden" style={{ backgroundColor: '#F9F7F7' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 opacity-5 rounded-full animate-pulse"
          style={{ 
            background: 'linear-gradient(135deg, #3F72AF, #112D4E)',
            top: '10%',
            right: '5%',
            animationDuration: '4s'
          }}
        />
        <div 
          className="absolute w-64 h-64 opacity-5 rounded-full animate-pulse"
          style={{ 
            background: 'linear-gradient(135deg, #DBE2EF, #3F72AF)',
            bottom: '15%',
            left: '8%',
            animationDuration: '6s',
            animationDelay: '2s'
          }}
        />
      </div>

      {/* Why Us Section */}
      <section 
        id="why" 
        className="relative px-4 sm:px-8 md:px-20 py-32"
        style={{ backgroundColor: '#F9F7F7' }}
      >
        <div className="max-w-7xl mx-auto">
          <div 
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible['why-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            id="why-header"
            data-animate
          >
            <h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ color: '#112D4E' }}
            >
              Kenapa Pilih SelfMend?
            </h2>
            <div 
              className="w-24 h-1 mx-auto rounded-full mb-8"
              style={{ backgroundColor: '#3F72AF' }}
            />
            <p 
              className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-normal"
              style={{ color: '#112D4E' }}
            >
              Kami bukan sekadar layanan terapi online. Kami adalah partner dalam perjalanan kesehatan mentalmu menuju kehidupan yang lebih baik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {whyUsFeatures.map((item, i) => (
              <div
                key={item.title}
                className={`group relative p-8 rounded-3xl transition-all duration-700 transform border-2 hover:scale-105 hover:-translate-y-3 ${
                  isVisible[`feature-${i}`] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  backgroundColor: '#DBE2EF',
                  borderColor: '#3F72AF',
                  transitionDelay: `${i * 200}ms`
                }}
                id={`feature-${i}`}
                data-animate
              >
                {/* Floating animation for cards */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" 
                     style={{ 
                       background: 'linear-gradient(135deg, rgba(63, 114, 175, 0.1), rgba(17, 45, 78, 0.05))',
                       transform: 'scale(1.02)'
                     }}
                />
                
                {/* Icon Container with pulse animation */}
                <div className="relative mb-6 z-10">
                  <div 
                    className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-all duration-500 shadow-lg animate-pulse"
                    style={{ backgroundColor: '#3F72AF' }}
                  >
                    <span className="filter drop-shadow-sm">{item.icon}</span>
                  </div>
                  
                  {/* Ripple effect */}
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl group-hover:animate-ping opacity-0 group-hover:opacity-20 transition-all duration-300"
                       style={{ backgroundColor: '#3F72AF' }}
                  />
                </div>

                <h3 
                  className="text-xl font-bold mb-4 transition-all duration-300 text-center group-hover:scale-105"
                  style={{ color: '#112D4E' }}
                >
                  {item.title}
                </h3>
                
                <p 
                  className="leading-relaxed text-center font-normal relative z-10"
                  style={{ color: '#112D4E' }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section 
        className="relative py-32 px-4 sm:px-8 md:px-20"
        style={{ backgroundColor: '#DBE2EF' }}
      >
        <div className="max-w-7xl mx-auto">
          <div 
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible['testimonials-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            id="testimonials-header"
            data-animate
          >
            <h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ color: '#112D4E' }}
            >
              Apa Kata Mereka?
            </h2>
            <div 
              className="w-24 h-1 mx-auto rounded-full mb-8"
              style={{ backgroundColor: '#3F72AF' }}
            />
            <p 
              className="text-lg md:text-xl font-normal"
              style={{ color: '#112D4E' }}
            >
              Lebih dari <span className="font-bold" style={{ color: '#3F72AF' }}>10,000+</span> pengguna mempercayai SelfMend
            </p>
          </div>

          <div 
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              ref={carouselRef}
              className="flex space-x-6 overflow-x-scroll scroll-smooth pb-8 scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={`${t.name}-${i}`}
                  className="p-7 rounded-3xl min-w-[320px] max-w-sm flex-shrink-0 transform hover:scale-105 hover:-translate-y-3 transition-all duration-700 border-2 group relative overflow-hidden"
                  style={{ 
                    backgroundColor: '#F9F7F7',
                    borderColor: '#3F72AF'
                  }}
                >
                  {/* Animated gradient overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-all duration-500"
                    style={{
                      background: 'linear-gradient(135deg, #3F72AF, #112D4E)'
                    }}
                  />

                  {/* Top Accent Line with animation */}
                  <div 
                    className="w-full h-1 rounded-t-3xl mb-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    style={{ backgroundColor: '#3F72AF' }}
                  />

                  <div className="flex items-center space-x-4 mb-6 relative z-10">
                    <div className="relative">
                      <img 
                        src={t.img} 
                        alt={t.name} 
                        className="w-18 h-18 rounded-full object-cover ring-3 transition-all duration-500 group-hover:ring-4 group-hover:scale-110" 
                        style={{ ringColor: '#3F72AF' }}
                      />
                      
                      {/* Animated Status Indicator */}
                      <div 
                        className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 flex items-center justify-center animate-pulse"
                        style={{ 
                          backgroundColor: '#3F72AF',
                          borderColor: '#F9F7F7'
                        }}
                      >
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: '#F9F7F7' }}
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div 
                        className="font-bold text-lg mb-1"
                        style={{ color: '#112D4E' }}
                      >
                        {t.name}
                      </div>
                      <div 
                        className="text-sm font-medium"
                        style={{ color: '#3F72AF' }}
                      >
                        {t.role}
                      </div>
                      <div className="flex items-center mt-2 space-x-1">
                        {[...Array(5)].map((_, index) => (
                          <span 
                            key={index}
                            className={`text-base transition-all duration-300 transform hover:scale-125 ${
                              index < t.rating 
                                ? 'text-yellow-400 animate-pulse' 
                                : 'text-gray-300'
                            }`}
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div 
                      className="absolute -top-2 -left-2 text-4xl font-serif leading-none opacity-20"
                      style={{ color: '#3F72AF' }}
                    >
                      "
                    </div>
                    <p 
                      className="leading-relaxed font-normal relative z-10 pl-6"
                      style={{ color: '#112D4E' }}
                    >
                      {t.msg}
                    </p>
                    <div 
                      className="absolute -bottom-2 -right-2 text-4xl font-serif leading-none rotate-180 opacity-20"
                      style={{ color: '#3F72AF' }}
                    >
                      "
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Navigation Dots */}
            <div className="flex justify-center mt-12 space-x-3">
              {testimonials.slice(0, 8).map((_, index) => (
                <button
                  key={index}
                  className={`transition-all duration-500 transform hover:scale-125 ${
                    index === currentIndex % 8 
                      ? 'w-10 h-4 shadow-lg animate-pulse' 
                      : 'w-4 h-4 hover:scale-110'
                  } rounded-full relative overflow-hidden`}
                  style={{
                    backgroundColor: index === currentIndex % 8 ? '#3F72AF' : '#112D4E',
                    opacity: index === currentIndex % 8 ? 1 : 0.6
                  }}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  {/* Ripple effect on active dot */}
                  {index === currentIndex % 8 && (
                    <div 
                      className="absolute inset-0 rounded-full animate-ping opacity-30"
                      style={{ backgroundColor: '#3F72AF' }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(63, 114, 175, 0.3); }
          50% { box-shadow: 0 0 20px rgba(63, 114, 175, 0.6); }
        }
        
        .group:hover .animate-float {
          animation: float 2s ease-in-out infinite;
        }
        
        .group:hover .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Testimoni;