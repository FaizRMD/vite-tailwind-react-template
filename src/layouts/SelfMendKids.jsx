import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Puzzle,
  Paintbrush,
  Shield,
  Smile,
  BookOpen,
  Award,
} from "lucide-react";
import MentalHealthComponents from "../components/MentalHealthComponents";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Modern Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: "blur(10px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.8,
    },
  },
};

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const SelfMendKids = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9F7F7] via-[#DBE2EF] to-[#F9F7F7] font-sans text-[#112D4E] overflow-x-hidden">
      
      {/* Fixed Navbar */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-[#3F72AF]/10 to-[#DBE2EF]/20 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-[#DBE2EF]/15 to-[#3F72AF]/10 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '4s' }}
          className="absolute bottom-40 left-40 w-40 h-40 bg-gradient-to-br from-[#3F72AF]/5 to-[#112D4E]/10 rounded-full blur-xl"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section 
          style={{ y, opacity }}
          className="pt-32 pb-20 px-6 lg:px-12 max-w-7xl mx-auto"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-[#DBE2EF]/50 rounded-full text-sm font-medium text-[#3F72AF] backdrop-blur-sm border border-[#3F72AF]/20"
              >
                ✨ Platform Kesehatan Mental Anak Terdepan
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-[#112D4E] via-[#3F72AF] to-[#112D4E] bg-clip-text text-transparent">
                  Self
                </span>
                <span className="text-[#3F72AF]">Mend</span>
                <br />
                <span className="text-[#112D4E]">Kids</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-[#112D4E]/80 leading-relaxed max-w-lg"
              >
                Platform interaktif yang membantu anak memahami emosi, membangun ketangguhan mental, dan mengembangkan keterampilan hidup melalui permainan edukatif.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(63, 114, 175, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <span className="relative z-10">Mulai Petualangan</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#112D4E] to-[#3F72AF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-[#3F72AF] text-[#3F72AF] font-semibold rounded-2xl hover:bg-[#3F72AF] hover:text-white transition-all duration-300 backdrop-blur-sm"
                >
                  Demo Interaktif
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative order-first lg:order-last"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-[#3F72AF]/20 to-[#DBE2EF]/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <img
                  src="https://img.freepik.com/premium-photo/nurse-cartoon-images-background-copy-space_1179130-634093.jpg?uid=R143220337&ga=GA1.1.396071000.1750256800&semt=ais_hybrid&w=740"
                  alt="Anak-anak Bermain"
                  className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto lg:max-w-full transform transition-all duration-500 group-hover:shadow-3xl"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Features Section */}
        <section className="py-20 px-6 lg:px-12 bg-[#F9F7F7]/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#112D4E] mb-6"
              >
                Mengapa Anak-anak 
                <span className="text-[#3F72AF]"> Menyukainya</span>
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-[#112D4E]/70 max-w-3xl mx-auto"
              >
                Teknologi terdepan yang mengubah pembelajaran emosional menjadi petualangan yang menyenangkan
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: <Puzzle />,
                  title: "Permainan Interaktif",
                  description: "Gamifikasi pembelajaran emosional dengan AI yang responsif dan adaptive learning",
                  gradient: "from-[#DBE2EF] to-[#F9F7F7]",
                  iconBg: "bg-gradient-to-br from-[#3F72AF] to-[#112D4E]",
                },
                {
                  icon: <Paintbrush />,
                  title: "Ekspresi Kreatif",
                  description: "Canvas digital untuk seni terapi dan storytelling interaktif dengan AR/VR",
                  gradient: "from-[#F9F7F7] to-[#DBE2EF]",
                  iconBg: "bg-gradient-to-br from-[#112D4E] to-[#3F72AF]",
                },
                {
                  icon: <Shield />,
                  title: "Dashboard Orang Tua",
                  description: "Analytics real-time dan insights berbasis AI untuk perkembangan anak",
                  gradient: "from-[#DBE2EF] to-[#F9F7F7]",
                  iconBg: "bg-gradient-to-br from-[#3F72AF] to-[#112D4E]",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className={`group relative bg-gradient-to-br ${feature.gradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#DBE2EF]/50 backdrop-blur-sm`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`relative w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg`}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-[#112D4E] mb-4 group-hover:text-[#3F72AF] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-[#112D4E]/70 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-[#DBE2EF]/30 to-[#F9F7F7]/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#112D4E] mb-6"
              >
                Aktivitas & Alat 
                <span className="text-[#3F72AF]">Terdepan</span>
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-[#112D4E]/70 max-w-3xl mx-auto"
              >
                Teknologi modern untuk pengalaman pembelajaran yang immersive dan personal
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  icon: <Smile />,
                  title: "AI Mood Tracker",
                  description: "Analisis emosi real-time dengan computer vision",
                  color: "text-[#3F72AF]",
                },
                {
                  icon: <BookOpen />,
                  title: "Interactive Stories",
                  description: "Storytelling adaptif dengan pilihan berbasis emosi",
                  color: "text-[#112D4E]",
                },
                {
                  icon: <Shield />,
                  title: "Mindfulness Space",
                  description: "Ruang virtual dengan binaural beats dan VR",
                  color: "text-[#3F72AF]",
                },
                {
                  icon: <Award />,
                  title: "Achievement System",
                  description: "Gamifikasi dengan NFT rewards dan leaderboard",
                  color: "text-[#112D4E]",
                },
              ].map((activity, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-[#DBE2EF]/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3F72AF]/5 to-[#112D4E]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 12 }}
                    className={`text-3xl md:text-4xl ${activity.color} mb-4 relative z-10`}
                  >
                    {activity.icon}
                  </motion.div>
                  
                  <h4 className="font-bold text-base md:text-lg text-[#112D4E] mb-2 relative z-10">
                    {activity.title}
                  </h4>
                  <p className="text-[#112D4E]/70 text-sm leading-relaxed relative z-10">
                    {activity.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mental Health Components Section */}
        <section className="py-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <MentalHealthComponents />
          </div>
        </section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 px-6 lg:px-12 bg-gradient-to-r from-[#112D4E] to-[#3F72AF] relative overflow-hidden"
        >
          <div className="absolute inset-0">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6"
            >
              Siap Memulai Perjalanan 
              <br />
              <span className="text-[#DBE2EF]">Kesehatan Mental?</span>
            </motion.h2>
            
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
            >
              Bergabung dengan ribuan keluarga yang telah mempercayai SelfMendKids untuk mendukung perkembangan emosional anak mereka.
            </motion.p>
            
            <motion.button
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px rgba(255, 255, 255, 0.2)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 md:px-12 py-4 bg-white text-[#112D4E] font-bold rounded-2xl text-base md:text-lg hover:bg-[#F9F7F7] transition-all duration-300 shadow-2xl"
            >
              Mulai Gratis Sekarang
            </motion.button>
          </div>
        </motion.section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default SelfMendKids;