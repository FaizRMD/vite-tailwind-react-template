import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TerapisCard from "../components/TerapisCard";
import Testimoni from "../components/Testimoni";
import FAQSection from "../components/FAQSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fotoList = [
  "https://plus.unsplash.com/premium_photo-1672292536170-8de3ec091ced?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVudGFsJTIwaGVhbHRofGVufDB8fDB8fHww",
  "https://media.istockphoto.com/id/1496615471/photo/mixed-race-woman-relax-and-breathing-fresh-air-outdoor-at-sunset.jpg?b=1&s=612x612&w=0&k=20&c=BCptyBBG3DfgggfbfqNkm_EuHtiaFeEuKjKApvEeZbw=",
  "https://img.freepik.com/free-photo/woman-sitting-yoga-pose-beach_1098-1454.jpg?uid=R123355166&ga=GA1.1.135655812.1745841862&semt=ais_hybrid&w=740"
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % fotoList.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Images with Enhanced Parallax */}
      {fotoList.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[3000ms] ease-in-out ${
            current === index ? "opacity-100 z-20 scale-100" : "opacity-0 z-10 scale-105"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            transform: `
              scale(${current === index ? 1 : 1.05}) 
              translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)
              translateY(${scrollY * 0.3}px)
            `,
          }}
        />
      ))}

      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#112D4E]/70 via-[#3F72AF]/40 to-[#112D4E]/80 z-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#112D4E]/60 via-transparent to-[#3F72AF]/30 z-30" />
      
      {/* Animated Pattern Overlay */}
      <div 
        className="absolute inset-0 z-30 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x + 50}% ${mousePosition.y + 50}%, #DBE2EF 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
        }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 z-35 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#DBE2EF]/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-40 text-center px-6 max-w-5xl mx-auto">
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-6 py-3 bg-[#F9F7F7]/20 backdrop-blur-xl rounded-full border border-[#DBE2EF]/30 mb-8 shadow-lg"
        >
          <div className="w-2 h-2 bg-[#3F72AF] rounded-full animate-pulse" />
          <span className="text-[#F9F7F7] font-medium text-sm tracking-wide">
            Online • Siap Membantu
          </span>
        </motion.div>

        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            {["Selamat", "Datang", "di", "SelfMend"].map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2 + 0.5,
                  type: "spring",
                  stiffness: 100,
                }}
                className="inline-block mr-4 hover:scale-105 transition-transform duration-300"
                style={{
                  textShadow: "0 8px 30px rgba(17, 45, 78, 0.5)",
                  background: index === 3 
                    ? "linear-gradient(135deg, #F9F7F7, #DBE2EF)" 
                    : "linear-gradient(135deg, #F9F7F7, #F9F7F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-xl md:text-3xl text-[#F9F7F7]/90 font-light leading-relaxed mb-12"
        >
          Tempat terapi online yang{" "}
          <motion.span 
            className="font-bold relative"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              background: "linear-gradient(90deg, #3F72AF, #DBE2EF, #3F72AF)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            terpercaya
          </motion.span>
          {" "}dan profesional
        </motion.p>

        {/* CTA Button */}
        <motion.button 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 20px 40px rgba(63, 114, 175, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          className="group px-10 py-5 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] text-[#F9F7F7] rounded-2xl font-bold text-lg shadow-2xl transition-all duration-500 hover:from-[#112D4E] hover:to-[#3F72AF] border border-[#DBE2EF]/20"
        >
          <span className="flex items-center gap-3">
            Mulai Konsultasi
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>
        </motion.button>

        {/* Feature Tags */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {["24/7 Support", "Psikolog Berlisensi", "100% Rahasia"].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2.8 + index * 0.1 }}
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: "rgba(219, 226, 239, 0.3)",
                y: -5,
              }}
              className="px-6 py-3 bg-[#F9F7F7]/10 backdrop-blur-xl rounded-full border border-[#DBE2EF]/30 text-[#F9F7F7]/90 text-sm font-medium shadow-lg cursor-pointer transition-all duration-300"
            >
              {feature}
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-[#DBE2EF]/50 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-[#DBE2EF] rounded-full mt-2 animate-pulse" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Selfmend = () => {
  return (
    <div className="bg-[#F9F7F7]">
      <Navbar />
      <HeroSection />

      {/* Terapis Section */}
      <section id="therapists" className="bg-gradient-to-br from-[#F9F7F7] to-[#DBE2EF] py-24 px-6 md:px-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3F72AF 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #112D4E 1px, transparent 1px)`,
            backgroundSize: "100px 100px, 150px 150px",
          }} />
        </div>

        <div className="relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-[#112D4E]/10 rounded-full mb-4"
            >
              <span className="text-[#112D4E] font-medium text-sm">Tim Profesional</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-[#112D4E] mb-4"
            >
              Temui{" "}
              <span 
                className="relative"
                style={{
                  background: "linear-gradient(135deg, #3F72AF, #112D4E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Psikolog
              </span>{" "}
              Kami
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[#3F72AF] text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Pilih terapis profesional berpengalaman yang siap mendampingi perjalanan 
              penyembuhan mental Anda dengan pendekatan yang personal dan terpercaya
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: i * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className="relative group"
              >
                {/* Card Background Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
                <div className="relative bg-white rounded-xl shadow-xl overflow-hidden border border-[#DBE2EF]/50">
                  <TerapisCard />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni & FAQ with Updated Styling */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#DBE2EF]/20 to-transparent" />
        <div className="relative">
          <Testimoni />
        </div>
      </motion.div>

      <div className="bg-gradient-to-b from-white to-[#F9F7F7]">
        <FAQSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Selfmend;