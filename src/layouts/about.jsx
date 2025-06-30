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

          {/* Image */}
          <div className="fade-zoom flex justify-center md:justify-end relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3F72AF]/20 to-[#DBE2EF]/30 rounded-3xl blur-2xl transform rotate-6"></div>
              <img
                src="/foto/Depression-removebg-preview.png"
                alt="Mental Health App"
                className="relative w-72 md:w-96 lg:w-[400px] object-contain drop-shadow-2xl z-10 transform hover:scale-105 transition-transform duration-500"
              />
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
            {/* Image */}
            <div className="relative fade-zoom">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3F72AF]/10 to-[#DBE2EF]/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                <img
                  src="https://img.freepik.com/premium-photo/mental-health-disorder-concept-bipolar-disorder-person-unstable-psycho-layers-paper-cut-as-human-head-presenting-different-emotions-happiness-depression-emotion-inside_34048-1575.jpg"
                  alt="About Selfmend"
                  className="rounded-2xl w-full object-cover h-96"
                />
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

      {/* Features Section */}
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
                description: "Advanced algorithms provide personalized recommendations based on your unique mental health journey and patterns."
              },
              {
                icon: "🔒",
                title: "Privacy First",
                description: "Your data is encrypted and secure. We prioritize your privacy while delivering exceptional mental health support."
              },
              {
                icon: "⚡",
                title: "24/7 Accessibility",
                description: "Access support whenever you need it. Our platform is available round-the-clock for your mental wellness needs."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-[#DBE2EF]/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#3F72AF] to-[#112D4E] rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#112D4E] mb-4">{feature.title}</h3>
                <p className="text-[#112D4E]/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#3F72AF] to-[#112D4E] px-6 md:px-20 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#112D4E]/50 to-[#3F72AF]/50"></div>
        <div className="w-full max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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