import React, { useState, useEffect,useRef } from 'react';
import { Play, Pause, Heart, Clock, Users, Star, Volume2, Headphones, Moon, Sun, Wind, Leaf, Brain, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MeditasiSection from '../components/MeditasiSection';

const MeditationApp = () => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const audioRef = useRef(new Audio());


  const categories = [
    { id: 'all', name: 'Semua', icon: Sparkles },
    { id: 'morning', name: 'Pagi', icon: Sun },
    { id: 'sleep', name: 'Tidur', icon: Moon },
    { id: 'focus', name: 'Fokus', icon: Brain },
    { id: 'nature', name: 'Alam', icon: Leaf }
  ];

  

  const meditations = [
  {
    id: 1,
    title: "Morning Clarity",
    subtitle: "Memulai hari dengan kejernihan pikiran",
    duration: "15 menit",
    category: "morning",
    difficulty: "Pemula",
    rating: 4.9,
    listeners: "12.5k",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center",
    color: "from-[#F9F7F7] to-[#DBE2EF]",
    audioUrl: "/audio/meditasi 1.mp3"
  },
  {
    id: 2,
    title: "Deep Sleep Journey",
    subtitle: "Tidur nyenyak dengan guided meditation",
    duration: "25 menit",
    category: "sleep",
    difficulty: "Menengah",
    rating: 4.8,
    listeners: "8.2k",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&crop=center",
    color: "from-[#DBE2EF] to-[#3F72AF]/20",
    audioUrl: "/audio/meditasi 2.mp3"
  },
  {
    id: 3,
    title: "Focus Flow",
    subtitle: "Meningkatkan konsentrasi dan produktivitas",
    duration: "20 menit",
    category: "focus",
    difficulty: "Lanjutan",
    rating: 4.7,
    listeners: "15.1k",
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=400&h=300&fit=crop&crop=center",
    color: "from-[#3F72AF]/10 to-[#F9F7F7]",
    audioUrl: "/audio/meditasi 3.mp3"
  },
  {
    id: 4,
    title: "Nature Sounds",
    subtitle: "Relaksasi dengan suara alam",
    duration: "30 menit",
    category: "nature",
    difficulty: "Pemula",
    rating: 4.9,
    listeners: "20.3k",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=center",
    color: "from-[#F9F7F7] to-[#DBE2EF]",
    audioUrl: "/audio/meditasi 4.mp3"
  },
  {
    id: 5,
    title: "Stress Relief",
    subtitle: "Melepaskan ketegangan dan stress",
    duration: "18 menit",
    category: "focus",
    difficulty: "Menengah",
    rating: 4.8,
    listeners: "9.7k",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop&crop=center",
    color: "from-[#DBE2EF] to-[#F9F7F7]",
    audioUrl: "/audio/meditasi 5.mp3"
  },
  {
    id: 6,
    title: "Evening Calm",
    subtitle: "Menenangkan pikiran di penghujung hari",
    duration: "22 menit",
    category: "sleep",
    difficulty: "Pemula",
    rating: 4.6,
    listeners: "6.8k",
    image: "https://images.unsplash.com/photo-1529693662653-9d480530a697?w=400&h=300&fit=crop&crop=center",
    color: "from-[#3F72AF]/10 to-[#DBE2EF]",
    audioUrl: "/audio/meditasi 6.mp3"
  }
];


  const filteredMeditations = selectedCategory === 'all' 
    ? meditations 
    : meditations.filter(m => m.category === selectedCategory);

  const handlePlayPause = (meditation) => {
  const id = meditation.id;

  if (currentAudio === id) {
    setIsPlaying(!isPlaying);
  } else {
    setCurrentAudio(id);
    setIsPlaying(true);
  }
};


  useEffect(() => {
  if (!currentAudio) return;

  const selected = currentAudio === 'featured'
    ? meditations[0] // Featured = yang pertama
    : meditations.find(m => m.id === currentAudio);

  if (!selected) return;

  audioRef.current.src = selected.audioUrl;
  audioRef.current.currentTime = 0;

  if (isPlaying) {
    audioRef.current.play().catch((e) => {
      console.log("Autoplay error:", e);
    });
  } else {
    audioRef.current.pause();
  }
}, [currentAudio, isPlaying]);


  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9F7F7] via-[#DBE2EF]/30 to-[#F9F7F7] relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#3F72AF]/5 to-[#DBE2EF]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-60 right-10 w-80 h-80 bg-gradient-to-l from-[#112D4E]/5 to-[#3F72AF]/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-t from-[#DBE2EF]/8 to-[#F9F7F7]/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Floating Meditation Icons */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 text-[#3F72AF]/20 text-4xl animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}>🧘‍♀️</div>
        <div className="absolute top-48 right-20 text-[#112D4E]/20 text-3xl animate-bounce" style={{animationDelay: '2s', animationDuration: '4s'}}>🌸</div>
        <div className="absolute bottom-32 left-32 text-[#3F72AF]/20 text-3xl animate-bounce" style={{animationDelay: '3s', animationDuration: '3.5s'}}>🍃</div>
        <div className="absolute bottom-48 right-16 text-[#DBE2EF]/40 text-4xl animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4.5s'}}>✨</div>
      </div>

      <div className="relative z-10">

        <Navbar />
        {/* Hero Section */}
        <header className="px-6 pt-20 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/40 backdrop-blur-sm rounded-full text-sm font-medium text-[#3F72AF] border border-[#3F72AF]/20 mb-8 shadow-lg">
                <Sparkles className="w-4 h-4" />
                Ruang Tenang untuk Jiwa
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-[#112D4E] via-[#3F72AF] to-[#112D4E] bg-clip-text text-transparent">
                  Meditasi
                </span>
                <br />
                <span className="text-[#3F72AF]/80">& Mindfulness</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[#112D4E]/70 leading-relaxed max-w-4xl mx-auto mb-12">
                Temukan ketenangan dalam keheningan. Jelajahi koleksi meditasi terpandu yang dirancang untuk menenangkan pikiran dan menyegarkan jiwa Anda.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  Mulai Meditasi Gratis
                </button>
                <button className="flex items-center gap-3 px-8 py-4 bg-white/60 backdrop-blur-sm text-[#112D4E] rounded-2xl font-semibold border border-[#3F72AF]/20 hover:bg-white/80 transform hover:scale-105 transition-all duration-300">
                  <Headphones className="w-6 h-6" />
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: Users, label: "Pengguna Aktif", value: "100K+", color: "text-[#3F72AF]" },
                { icon: Clock, label: "Menit Meditasi", value: "2.5M+", color: "text-[#112D4E]" },
                { icon: Heart, label: "Rating", value: "4.9/5", color: "text-[#3F72AF]" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-8 bg-white/30 backdrop-blur-sm rounded-3xl border border-white/50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                  <div className="text-3xl font-bold text-[#112D4E] mb-2">{stat.value}</div>
                  <div className="text-[#112D4E]/70 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* Category Filter */}
        <section className="px-6 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-[#3F72AF] to-[#112D4E] text-white shadow-lg'
                      : 'bg-white/40 backdrop-blur-sm text-[#112D4E] border border-[#3F72AF]/20 hover:bg-white/60'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Meditation */}
        <section className="px-6 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-[#112D4E] via-[#3F72AF] to-[#112D4E] rounded-3xl p-1 shadow-2xl">
              <div className="bg-gradient-to-br from-white/80 to-[#DBE2EF]/60 backdrop-blur-sm rounded-3xl p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="bg-gradient-to-r from-[#3F72AF] to-[#112D4E] text-white text-sm font-bold px-4 py-2 rounded-full">
                        ✨ Featured
                      </span>
                      <div className="flex items-center gap-1 text-[#3F72AF]">
                        <Star className="w-5 h-5 fill-current" />
                        <span className="font-semibold">4.9</span>
                      </div>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-[#112D4E]">
                      Morning Clarity Meditation
                    </h2>
                    
                    <p className="text-xl text-[#112D4E]/70 leading-relaxed">
                      Mulai harimu dengan penuh tujuan dan kejernihan melalui meditasi terpandu yang dirancang khusus untuk memberikan fokus dan ketenangan di pagi hari.
                    </p>
                    
                    <div className="flex items-center gap-8 text-[#112D4E]/60">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        <span className="font-medium">15 menit</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        <span className="font-medium">12.5k pengguna</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5" />
                        <span className="font-medium">98% suka</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <button
                        onClick={() => handlePlayPause({ id: 'featured' })}
                        className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      >
                        {currentAudio === 'featured' && isPlaying ? (
                          <Pause className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        ) : (
                          <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        )}
                        {currentAudio === 'featured' && isPlaying ? 'Jeda' : 'Mulai Meditasi'}
                      </button>
                      <button className="flex items-center gap-3 px-6 py-4 bg-white/60 backdrop-blur-sm text-[#112D4E] rounded-2xl font-semibold border border-[#3F72AF]/20 hover:bg-white/80 transform hover:scale-105 transition-all duration-300">
                        <Volume2 className="w-5 h-5" />
                        Preview
                      </button>
                    </div>

                    {currentAudio === 'featured' && (
                      <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-[#3F72AF]/20">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-[#112D4E]">
                            {isPlaying ? 'Sedang Putar' : 'Terjeda'}
                          </span>
                          <span className="text-sm text-[#112D4E]/70">
                            {formatTime(currentTime)} / 15:00
                          </span>
                        </div>
                        <div className="w-full bg-[#DBE2EF] rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-[#3F72AF] to-[#112D4E] h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(currentTime / 900) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#3F72AF]/20 to-[#112D4E]/20 rounded-3xl blur-xl"></div>
                    <img
                      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center"
                      alt="Featured Meditation"
                      className="relative w-full rounded-3xl object-cover shadow-2xl max-h-96"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#112D4E]/20 to-transparent rounded-3xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meditation Grid */}
        <section className="px-6 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#112D4E] mb-6">
                Koleksi <span className="text-[#3F72AF]">Meditasi</span>
              </h2>
              <p className="text-xl text-[#112D4E]/70 max-w-3xl mx-auto">
                Pilih sesi meditasi yang sesuai dengan kebutuhan dan suasana hati Anda
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMeditations.map((meditation, index) => (
                <div
                  key={meditation.id}
                  className="group relative bg-white/40 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-white/50"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={meditation.image}
                      alt={meditation.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-[#112D4E]">
                      {meditation.difficulty}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1 text-[#3F72AF]">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">{meditation.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#112D4E]/60 text-sm">
                        <Users className="w-4 h-4" />
                        {meditation.listeners}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#112D4E] mb-2 group-hover:text-[#3F72AF] transition-colors duration-300">
                      {meditation.title}
                    </h3>
                    
                    <p className="text-[#112D4E]/70 mb-4 leading-relaxed">
                      {meditation.subtitle}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="flex items-center gap-2 text-sm text-[#112D4E]/60">
                        <Clock className="w-4 h-4" />
                        {meditation.duration}
                      </span>
                    </div>
                    
                    <button
                      onClick={() => handlePlayPause(meditation)}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] text-white rounded-xl font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      {currentAudio === meditation.id && isPlaying ? (
                        <Pause className="w-5 h-5" />
                      ) : (
                        <Play className="w-5 h-5" />
                      )}
                      {currentAudio === meditation.id && isPlaying ? 'Jeda' : 'Mulai Sesi'}
                    </button>

                    {currentAudio === meditation.id && (
                      <div className="mt-4 bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-[#3F72AF]/20">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-[#112D4E]">
                            {isPlaying ? 'Sedang Putar' : 'Terjeda'}
                          </span>
                          <span className="text-xs text-[#112D4E]/70">
                            {formatTime(currentTime)}
                          </span>
                        </div>
                        <div className="w-full bg-[#DBE2EF] rounded-full h-1">
                          <div 
                            className="bg-gradient-to-r from-[#3F72AF] to-[#112D4E] h-1 rounded-full transition-all duration-300"
                            style={{ width: `${Math.min((currentTime / 60) * 100, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-6 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#112D4E] mb-6">
                Manfaat <span className="text-[#3F72AF]">Meditasi</span>
              </h2>
              <p className="text-xl text-[#112D4E]/70 max-w-3xl mx-auto">
                Rasakan transformasi positif dalam hidup Anda
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Brain, title: "Meningkatkan Fokus", desc: "Latih kemampuan konsentrasi dan perhatian" },
                { icon: Heart, title: "Mengurangi Stress", desc: "Turunkan tingkat kortisol dan cemas" },
                { icon: Moon, title: "Tidur Berkualitas", desc: "Dapatkan istirahat yang lebih nyenyak" },
                { icon: Sparkles, title: "Kebahagiaan", desc: "Tingkatkan mood dan kesejahteraan mental" }
              ].map((benefit, index) => (
                <div key={index} className="text-center p-8 bg-white/40 backdrop-blur-sm rounded-3xl border border-white/50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#3F72AF] to-[#112D4E] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#112D4E] mb-3">{benefit.title}</h3>
                  <p className="text-[#112D4E]/70 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#112D4E] to-[#3F72AF] rounded-3xl p-1 shadow-2xl">
              <div className="bg-gradient-to-br from-white/90 to-[#DBE2EF]/70 backdrop-blur-sm rounded-3xl p-12 text-center">
                <div className="mb-8">
                  <div className="text-6xl mb-6">🧘‍♀️</div>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#112D4E] mb-6">
                    Mulai Perjalanan <span className="text-[#3F72AF]">Mindfulness</span> Anda
                  </h2>
                  <p className="text-xl text-[#112D4E]/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Bergabunglah dengan ribuan orang yang telah merasakan manfaat meditasi. Mulai dengan sesi gratis hari ini.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="px-10 py-4 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                    Mulai Gratis Sekarang
                  </button>
                  <button className="px-10 py-4 bg-white/60 backdrop-blur-sm text-[#112D4E] font-semibold rounded-2xl border border-[#3F72AF]/20 hover:bg-white/80 transform hover:scale-105 transition-all duration-300">
                    Pelajari Lebih Lanjut
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
          <MeditasiSection/>
      <Footer />
      </div>
      

    </div>
  );
};

export default MeditationApp;