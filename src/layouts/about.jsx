import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Kombot from "../components/kombot";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import scrollreveal from "scrollreveal";

const About = () => {
  useEffect(() => {
    const sr = scrollreveal({
      distance: "50px",
      duration: 1000,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      origin: "bottom",
      reset: false,
    });

    sr.reveal(".fade-up", { interval: 100 });
    sr.reveal(".fade-zoom", { scale: 0.85, interval: 100 });
  }, []);

  return (
    <div className="font-inter bg-gradient-to-br from-[#F9F7F7] via-[#DBE2EF] to-[#F9F7F7] text-[#112D4E] min-h-screen scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <section className="px-6 md:px-20 pt-32 pb-24 fade-up transition-all duration-700 ease-in-out w-full relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-[#3F72AF]/10 to-[#DBE2EF]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-[#DBE2EF]/15 to-[#3F72AF]/10 rounded-full blur-3xl"></div>
        
        <div className="w-full mx-auto grid md:grid-cols-2 items-center gap-16 relative z-10">
          {/* Text */}
          <div className="text-center md:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-gradient-to-r from-[#3F72AF]/10 to-[#DBE2EF]/20 px-4 py-2 rounded-full text-sm font-medium text-[#3F72AF] mb-4"
            >
              ✨ Mental Wellness Platform
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold leading-tight text-[#112D4E]"
            >
              Your Mental Health <br />
              <span className="bg-gradient-to-r from-[#3F72AF] to-[#112D4E] bg-clip-text text-transparent">
                Journey Matters
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#112D4E]/70 text-lg md:text-xl max-w-md mx-auto md:mx-0 leading-relaxed"
            >
              Discover a personalized approach to mental wellness with SelfMend,
              where everyone deserves peace of mind and emotional balance.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-4 justify-center md:justify-start pt-4"
            >
              <button className="bg-gradient-to-r from-[#3F72AF] to-[#112D4E] hover:from-[#112D4E] hover:to-[#3F72AF] text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Take Assessment
              </button>
              <button className="border-2 border-[#3F72AF] text-[#3F72AF] hover:bg-[#3F72AF] hover:text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm">
                Learn More
              </button>
            </motion.div>
          </div>

          {/* Enhanced Hero Image */}
          <div className="fade-zoom flex justify-center md:justify-end relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3F72AF]/20 to-[#DBE2EF]/30 rounded-3xl blur-2xl transform rotate-6"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Mental Health Journey - Person in peaceful meditation"
                  className="relative w-72 md:w-96 lg:w-[400px] h-80 object-cover rounded-2xl drop-shadow-2xl z-10 transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] text-white text-xs px-3 py-1 rounded-full shadow-lg font-medium">
                  🌱 Growth & Healing
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gradient-to-b from-white to-[#F9F7F7] w-full px-6 md:px-20 py-24 fade-up relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#3F72AF] to-[#112D4E]"></div>
        </div>
        
        <div className="w-full max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-gradient-to-r from-[#DBE2EF] to-[#F9F7F7] px-6 py-2 rounded-full text-sm font-medium text-[#3F72AF] mb-6 shadow-sm"
            >
              About Our Platform
            </motion.div>
            
            <h2 className="fade-up text-4xl md:text-5xl font-bold text-[#112D4E] mb-6">
              About <span className="bg-gradient-to-r from-[#3F72AF] to-[#112D4E] bg-clip-text text-transparent">SelfMend</span>
            </h2>
            
            <p className="fade-up text-[#112D4E]/70 text-xl mb-16 max-w-3xl mx-auto leading-relaxed">
              Your personal companion on the journey to better mental health and
              emotional wellbeing. SelfMend empowers individuals to seek healing through 
              accessible online tools, evidence-based approaches, and compassionate care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Enhanced About Image */}
            <div className="relative fade-zoom">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3F72AF]/10 to-[#DBE2EF]/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-3 rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Mental wellness support - Caring hands offering comfort"
                  className="rounded-2xl w-full object-cover h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#112D4E]/20 to-transparent rounded-2xl"></div>
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] text-white text-sm px-4 py-2 rounded-2xl shadow-lg font-semibold">
                🌟 Trusted by 10K+ Users
              </div>
            </div>

            {/* Text Content */}
            <div className="fade-up space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-[#112D4E] mb-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#3F72AF] to-[#112D4E] rounded-2xl flex items-center justify-center">
                    <span className="text-white text-lg">🎯</span>
                  </div>
                  Our Mission
                </h3>
                <p className="text-[#112D4E]/70 text-lg leading-relaxed">
                  At SelfMend, we are committed to making mental healthcare accessible,
                  personal, and empowering. Our platform bridges the gap between
                  individuals and trusted mental health resources, making it easier than
                  ever to find help, reflect, and grow emotionally.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  { icon: "🎯", text: "Personalized mental wellness plans" },
                  { icon: "🤝", text: "Guided support by licensed professionals" },
                  { icon: "📊", text: "Data-driven insights to empower your life" },
                  { icon: "♿", text: "Accessibility for all individuals" },
                  { icon: "🌍", text: "Supporting community mental health" },
                  { icon: "💙", text: "Combining technology with empathy and care" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#F9F7F7] to-[#DBE2EF]/50 rounded-2xl hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#3F72AF]/20 to-[#DBE2EF]/30 rounded-xl flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <span className="text-[#112D4E] font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="bg-gradient-to-br from-[#DBE2EF]/30 to-[#F9F7F7] px-6 md:px-20 py-24 fade-up">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#112D4E] mb-6">
              Why Choose <span className="bg-gradient-to-r from-[#3F72AF] to-[#112D4E] bg-clip-text text-transparent">SelfMend</span>
            </h2>
            <p className="text-[#112D4E]/70 text-xl max-w-2xl mx-auto leading-relaxed">
              Experience the future of mental wellness with our comprehensive platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🧠",
                title: "AI-Powered Insights",
                description: "Advanced algorithms provide personalized recommendations based on your unique mental health journey and patterns.",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              },
              {
                icon: "🔒",
                title: "Privacy First",
                description: "Your data is encrypted and secure. We prioritize your privacy while delivering exceptional mental health support.",
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              },
              {
                icon: "⚡",
                title: "24/7 Accessibility",
                description: "Access support whenever you need it. Our platform is available round-the-clock for your mental wellness needs.",
                image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-[#DBE2EF]/50 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#112D4E]/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-[#3F72AF] to-[#112D4E] rounded-xl flex items-center justify-center text-xl shadow-lg">
                    {feature.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#112D4E] mb-3">{feature.title}</h3>
                  <p className="text-[#112D4E]/70 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="bg-gradient-to-r from-[#3F72AF] to-[#112D4E] px-6 md:px-20 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#112D4E]/50 to-[#3F72AF]/50"></div>
        
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="w-full max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌟</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Join thousands of users who have transformed their mental wellness with SelfMend. 
              Take the first step towards a healthier, happier you.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-white text-[#3F72AF] px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Start Free Assessment
              </button>
              <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm">
                Contact Support
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Kombot */}
      <section className="w-full px-0 md:px-0 bg-[#F9F7F7]">
        <Kombot />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;