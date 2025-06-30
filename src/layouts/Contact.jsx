import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, CheckCircle, Star, Sparkles, Heart } from "lucide-react";
import Navbar from "../components/Navbar";
const FloatingParticle = ({ delay = 0 }) => (
  <div 
    className="absolute w-2 h-2 bg-[#3F72AF]/30 rounded-full animate-bounce"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${3 + Math.random() * 2}s`
    }}
  />
);

const TypewriterText = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return <span>{displayText}<span className="animate-pulse">|</span></span>;
};

const PulsingIcon = ({ Icon, className = "" }) => {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Icon className={`${className} transition-all duration-300 ${pulse ? 'scale-110 text-[#3F72AF]' : ''}`} />
  );
};

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [typingStarted, setTypingStarted] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTypingStarted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create celebration effect
    const rect = formRef.current.getBoundingClientRect();
    createCelebrationEffect(rect.left + rect.width / 2, rect.top + rect.height / 2);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const createCelebrationEffect = (x, y) => {
    for (let i = 0; i < 10; i++) {
      const particle = document.createElement('div');
      particle.className = 'fixed w-3 h-3 bg-[#3F72AF] rounded-full pointer-events-none z-50';
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      particle.style.transform = 'translate(-50%, -50%)';
      document.body.appendChild(particle);
      
      const angle = (i / 10) * Math.PI * 2;
      const velocity = 100 + Math.random() * 50;
      const vx = Math.cos(angle) * velocity;
      const vy = Math.sin(angle) * velocity;
      
      let posX = 0, posY = 0;
      const animate = () => {
        posX += vx * 0.02;
        posY += vy * 0.02 + 2; // gravity
        particle.style.transform = `translate(${posX}px, ${posY}px)`;
        particle.style.opacity = Math.max(0, 1 - Math.abs(posY) / 200);
        
        if (Math.abs(posY) < 200) {
          requestAnimationFrame(animate);
        } else {
          document.body.removeChild(particle);
        }
      };
      requestAnimationFrame(animate);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon",
      value: "+62 812 3456 7890",
      description: "Senin - Jumat, 09:00 - 18:00",
      color: "text-[#F9F7F7]",
      gradient: "from-emerald-400 to-emerald-600"
    },
    {
      icon: Mail,
      title: "Email",
      value: "support@soulmend.id",
      description: "Respon dalam 24 jam",
      color: "text-[#F9F7F7]",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: MapPin,
      title: "Alamat",
      value: "Jl. Sehat No. 123, Jakarta",
      description: "Jakarta Selatan 12345",
      color: "text-[#F9F7F7]",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      value: "09:00 - 18:00 WIB",
      description: "Senin - Jumat",
      color: "text-[#F9F7F7]",
      gradient: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F7F7] py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.5} />
        ))}
        
        {/* Mouse follower effect */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-[#3F72AF]/5 to-transparent rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#DBE2EF] opacity-30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#3F72AF] opacity-20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-[#112D4E] opacity-15 rounded-full blur-xl animate-bounce" style={{ animationDuration: '3s' }}></div>
      </div>
      
      <Navbar />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section with Typewriter Effect */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}></div>
          <div className="inline-block mb-6">
          <h1 className="text-5xl md:text-6xl font-bold text-[#112D4E] mb-4">
            Mari 
            <span className="bg-gradient-to-r from-[#3F72AF] to-[#112D4E] bg-clip-text text-transparent ml-3">
              {typingStarted ? <TypewriterText text="Berbicara" speed={150} /> : 'Berbicara'}
            </span>
          </h1>
          <p className="text-xl text-[#3F72AF] max-w-2xl mx-auto opacity-90">
            Tim profesional kami siap membantu perjalanan kesehatan mental Anda
          </p>
        </div>

        {/* Main Contact Card with Enhanced Animations */}
        <div className={`bg-white shadow-2xl rounded-3xl overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} hover:shadow-3xl`} style={{ transitionDelay: '200ms' }}>
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            
            {/* Left: Contact Information with Hover Effects */}
            <div className="bg-gradient-to-br from-[#3F72AF] to-[#112D4E] lg:w-2/5 p-12 flex flex-col justify-center relative overflow-hidden">
              {/* Enhanced Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-white rounded-full blur-lg animate-bounce" style={{ animationDuration: '4s' }}></div>
              </div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-8 h-8 text-white animate-spin" style={{ animationDuration: '3s' }} />
                    <h2 className="text-4xl font-bold text-white">
                      Hubungi Kami
                    </h2>
                  </div>
                  <p className="text-[#DBE2EF] text-lg leading-relaxed">
                    Tim kami siap membantu Anda kapan saja. Jangan ragu untuk menghubungi kami melalui berbagai cara di bawah ini.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div
                        key={index}
                        className={`group flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 ${info.color} cursor-pointer`}
                        style={{ animationDelay: `${index * 100}ms` }}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg ${hoveredCard === index ? 'animate-pulse' : ''}`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-white text-lg mb-1 group-hover:text-yellow-200 transition-colors">
                            {info.title}
                          </h4>
                          <p className="text-white font-medium mb-1 group-hover:scale-105 transition-transform origin-left">
                            {info.value}
                          </p>
                          <p className="text-[#DBE2EF] text-sm">
                            {info.description}
                          </p>
                        </div>
                        {hoveredCard === index && (
                          <div className="absolute right-2 top-2">
                            <Star className="w-4 h-4 text-yellow-300 animate-spin" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Enhanced Social Media Icons */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-[#DBE2EF] text-sm mb-4 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                    Ikuti kami di:
                  </p>
                  <div className="flex gap-4">
                    {['📱', '📧', '💬', '🌐'].map((emoji, index) => (
                      <div
                        key={index}
                        className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-12 group"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <span className="text-xl group-hover:scale-125 transition-transform">{emoji}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Enhanced Contact Form */}
            <div className="lg:w-3/5 bg-[#DBE2EF] p-12 flex flex-col justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#DBE2EF] to-[#F9F7F7] opacity-50"></div>
              
              <div className="max-w-lg mx-auto w-full relative z-10" ref={formRef}>
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-[#112D4E] mb-3 flex items-center gap-3">
                    <Send className="w-8 h-8 text-[#3F72AF] animate-bounce" />
                    Kirim Pesan
                  </h3>
                  <p className="text-[#3F72AF] opacity-90">
                    Ceritakan bagaimana kami bisa membantu Anda hari ini
                  </p>
                </div>

                {/* Enhanced Success Message */}
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-300 rounded-2xl flex items-center gap-3 animate-bounce shadow-lg">
                    <CheckCircle className="w-6 h-6 text-green-600 animate-pulse" />
                    <span className="text-green-800 font-medium">🎉 Pesan berhasil dikirim! Kami akan merespons segera.</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Enhanced Name Input */}
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Nama Lengkap"
                      className="w-full border-2 border-[#3F72AF]/30 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-[#3F72AF]/20 focus:border-[#3F72AF] focus:outline-none bg-white text-[#112D4E] placeholder-[#3F72AF]/60 transition-all duration-300 group-hover:border-[#3F72AF]/50 group-hover:shadow-lg focus:scale-105"
                      required
                    />
                    <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300 text-xl">
                      👤
                    </div>
                    <div className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] transition-all duration-300 group-focus-within:w-full w-0"></div>
                  </div>

                  {/* Enhanced Email Input */}
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Alamat Email"
                      className="w-full border-2 border-[#3F72AF]/30 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-[#3F72AF]/20 focus:border-[#3F72AF] focus:outline-none bg-white text-[#112D4E] placeholder-[#3F72AF]/60 transition-all duration-300 group-hover:border-[#3F72AF]/50 group-hover:shadow-lg focus:scale-105"
                      required
                    />
                    <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300 text-xl">
                      📧
                    </div>
                    <div className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] transition-all duration-300 group-focus-within:w-full w-0"></div>
                  </div>

                  {/* Enhanced Message Textarea */}
                  <div className="relative group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Pesan Anda"
                      rows="5"
                      className="w-full border-2 border-[#3F72AF]/30 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-[#3F72AF]/20 focus:border-[#3F72AF] focus:outline-none bg-white text-[#112D4E] placeholder-[#3F72AF]/60 transition-all duration-300 resize-none group-hover:border-[#3F72AF]/50 group-hover:shadow-lg focus:scale-105"
                      required
                    ></textarea>
                    <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300 text-xl">
                      💬
                    </div>
                    <div className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] transition-all duration-300 group-focus-within:w-full w-0"></div>
                  </div>

                  {/* Enhanced Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="group relative w-full bg-gradient-to-r from-[#3F72AF] to-[#112D4E] hover:from-[#112D4E] hover:to-[#3F72AF] text-white font-bold py-5 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden active:scale-95"
                  >
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Mengirim Pesan...</span>
                        </>
                      ) : isSubmitted ? (
                        <>
                          <CheckCircle className="w-5 h-5 animate-pulse" />
                          <span>Pesan Terkirim! 🎉</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                          <span>Kirim Pesan</span>
                        </>
                      )}
                    </div>
                    
                    {/* Enhanced button effects */}
                    <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 group-hover:translate-x-full transition-transform duration-1000"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                </div>

                {/* Enhanced Additional Info */}
                <div className="mt-8 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-[#3F72AF]/20 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="flex items-center gap-3 text-[#3F72AF]">
                    <div className="w-8 h-8 bg-[#3F72AF]/20 rounded-full flex items-center justify-center animate-pulse">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#112D4E] flex items-center gap-2">
                        ⚡ Respon Cepat
                      </p>
                      <p className="text-sm opacity-80">Kami akan merespons dalam 2-4 jam kerja</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
          <div className="bg-gradient-to-r from-[#112D4E] to-[#3F72AF] rounded-3xl p-12 shadow-2xl relative overflow-hidden hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                Butuh Bantuan Darurat? 
                <span className="animate-bounce text-4xl">🚨</span>
              </h3>
              <p className="text-[#DBE2EF] text-lg mb-8 max-w-2xl mx-auto">
                Jika Anda dalam situasi darurat, jangan ragu untuk menghubungi hotline krisis kami
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-[#112D4E] font-bold py-4 px-8 rounded-2xl hover:bg-[#F9F7F7] transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 group">
                  <span className="group-hover:animate-pulse">📞</span> Hotline Krisis: 119
                </button>
                <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-2xl hover:bg-white hover:text-[#112D4E] transition-all duration-300 transform hover:scale-105 active:scale-95 group">
                  <span className="group-hover:animate-bounce">💬</span> Chat Darurat
                </button>
              </div>
            </div>
            
            {/* Enhanced background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;