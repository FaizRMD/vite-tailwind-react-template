import React, { useState, useEffect } from "react";

const meditasi = [
  {
    title: "Chakra Meditation",
    desc: "Seimbangkan energi dalam tubuh dan temukan ketenangan batin.",
    img: "https://cdn-icons-png.flaticon.com/512/3127/3127986.png",
  },
  {
    title: "Mindfulness Meditation",
    desc: "Latih kesadaran penuh untuk hadir di saat ini tanpa menghakimi.",
    img: "https://cdn-icons-png.flaticon.com/512/1825/1825163.png",
  },
  {
    title: "Mantra Meditation",
    desc: "Gunakan suara dan pengulangan untuk meningkatkan fokus dan ketenangan.",
    img: "https://cdn-icons-png.flaticon.com/512/3832/3832803.png",
  },
];

const videos = [
  {
    title: "Trauma dan Bekasnya",
    name: "Koleta Acintya, M.Psi., Psikolog",
    videoId: "O37070Ez53Y",
    thumbnail: "https://img.youtube.com/vi/O37070Ez53Y/maxresdefault.jpg",
  },
  {
    title: "Kekuatan Dari Belas Kasih",
    name: "Hilmi Hakim, M.Psi., Psikolog",
    videoId: "v70vUiywj7Q",
    thumbnail: "https://img.youtube.com/vi/v70vUiywj7Q/maxresdefault.jpg",
  },
  {
    title: "Kekerasan dalam Hubungan",
    name: "Amirra Triwardhan, M.Psi., Psikolog",
    videoId: "15L0rNuor0Y",
    thumbnail: "https://img.youtube.com/vi/15L0rNuor0Y/maxresdefault.jpg",
  },
  {
    title: "Menghargai Diri Sendiri",
    name: "Psikolog Joe Irene",
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
];

const FloatingElement = ({ children, delay = 0 }) => {
  return (
    <div 
      className="animate-bounce"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '3s',
        animationIterationCount: 'infinite'
      }}
    >
      {children}
    </div>
  );
};

const VideoCard = ({ vid, index, isVisible }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div
      className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-blue-400 transform hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative overflow-hidden bg-gray-100">
        {!isPlaying ? (
          <div className="relative">
            {!imageError ? (
              <img
                src={vid.thumbnail}
                alt={vid.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                onError={handleImageError}
              />
            ) : (
              <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🎥</div>
                  <p className="text-gray-600 text-sm">Video Thumbnail</p>
                </div>
              </div>
            )}
            
            {/* Play button overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={handlePlay}
                className="bg-red-600 hover:bg-red-700 text-white rounded-full p-4 transform hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
            
            {/* YouTube logo */}
            <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
              YouTube
            </div>
          </div>
        ) : (
          <div className="relative">
            <iframe
              className="w-full h-48"
              src={`https://www.youtube.com/embed/${vid.videoId}?autoplay=1&rel=0`}
              title={vid.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            
            {/* Close button */}
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-70 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-gray-800 text-base mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
          {vid.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          {vid.name}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-blue-600 text-xs font-medium">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {isPlaying ? 'Sedang Diputar' : 'Tonton Sekarang'}
          </div>
          
          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const MeditasiSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Meditation Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 py-24 px-6 md:px-20 text-center overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingElement delay={0}>
            <div className="absolute top-20 left-10 w-16 h-16 bg-blue-500 opacity-10 rounded-full blur-xl"></div>
          </FloatingElement>
          <FloatingElement delay={1}>
            <div className="absolute top-40 right-20 w-24 h-24 bg-blue-800 opacity-5 rounded-full blur-2xl"></div>
          </FloatingElement>
          <FloatingElement delay={2}>
            <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-blue-500 opacity-8 rounded-full blur-xl"></div>
          </FloatingElement>
        </div>

        <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6">
            <span className="text-4xl mb-4 block animate-pulse">🧘‍♀️</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 leading-tight">
            Temukan Meditasi yang 
            <span className="block text-blue-600 bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
              Cocok Untukmu
            </span>
          </h2>
          <p className="text-blue-700 text-lg mb-16 max-w-2xl mx-auto opacity-80">
            Jelajahi berbagai teknik meditasi untuk menemukan kedamaian dan keseimbangan dalam hidup
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {meditasi.map((item, index) => (
              <div
                key={index}
                className={`group bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-500 hover:scale-105 border border-blue-200 hover:border-blue-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-12 h-12 group-hover:animate-pulse" 
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                </div>
                
                <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-blue-700 opacity-80 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
                
                <button className="group/btn relative bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-800 hover:to-blue-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  <span className="relative z-10">Coba Gratis</span>
                  <div className="absolute inset-0 bg-white bg-opacity-20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24 px-6 md:px-20 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl animate-bounce">🎙️</span>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                  Podcast #AngkatBicara
                </h2>
              </div>
              <p className="text-blue-700 text-lg opacity-90">
                Vitamin untuk Kesehatan Mentalmu
              </p>
            </div>
            
            <button className="group flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300">
              Lihat Semua
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((vid, index) => (
              <VideoCard 
                key={index} 
                vid={vid} 
                index={index} 
                isVisible={isVisible} 
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MeditasiSection;