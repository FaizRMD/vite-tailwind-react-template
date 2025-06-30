import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { HiOutlineUserGroup, HiShieldCheck, HiChatAlt2 } from "react-icons/hi";
import PsikologCard from "../components/PsikologCard";
import Footer from "../components/Footer";

const KonselingOffline = () => {
  const lokasiKonseling = [
    {
      city: "Jakarta",
      address: "Jl. Sudirman No. 45, Kebayoran Baru, Jakarta Selatan",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4257487404663!2d106.79915827591257!3d-6.208763060821631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1cdbd112f03%3A0x1c1f6c0c6c6b8df7!2sKebayoran%20Baru!5e0!3m2!1sid!2sid!4v1718930535532!5m2!1sid!2sid"
    },
    {
      city: "Bandung",
      address: "Jl. Dago No. 21, Coblong, Kota Bandung",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.599104087305!2d107.61312077597046!3d-7.837518078778954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7d2291e86f9%3A0x9e5a880fd0f89c91!2sJl.%20Dago%20No.21%2C%20Coblong%2C%20Kota%20Bandung!5e0!3m2!1sid!2sid!4v1718930712413!5m2!1sid!2sid"
    },
    {
      city: "Yogyakarta",
      address: "Jl. Kaliurang Km 7, Sleman, Yogyakarta",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.015315226159!2d110.38871507596892!3d-7.665624376650932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59279179ad3d%3A0x7c2f0db4bb9efc2a!2sJl.%20Kaliurang%20No.Km%207%2C%20Sleman%2C%20Yogyakarta!5e0!3m2!1sid!2sid!4v1718930787099!5m2!1sid!2sid"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9F7F7] via-[#DBE2EF] to-[#F9F7F7] font-sans text-[#112D4E] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-[#3F72AF]/10 to-[#DBE2EF]/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.2, 1, 1.2]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-40 left-10 w-40 h-40 bg-gradient-to-br from-[#3F72AF]/5 to-[#112D4E]/10 rounded-full blur-2xl"
        />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="py-24 px-6 lg:px-28 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="grid md:grid-cols-2 gap-16 items-center backdrop-blur-sm rounded-3xl bg-white/40 p-12 shadow-2xl border border-white/50 relative overflow-hidden"
        >
          {/* Card background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-[#DBE2EF]/20 rounded-3xl" />
          
          <motion.div 
            className="relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6 text-[#112D4E]"
            >
              Konseling Offline untuk{" "}
              <motion.span 
                className="text-[#3F72AF] relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Kesehatan Mental
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#3F72AF] to-[#DBE2EF] rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                />
              </motion.span>{" "}
              Anda
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-[#112D4E]/70 mb-8 leading-relaxed"
            >
              Dapatkan sesi tatap muka langsung dengan psikolog profesional untuk mengatasi masalah mental secara aman, nyaman, dan personal.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.button 
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 25px rgba(63, 114, 175, 0.3)" 
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-[#3F72AF] hover:bg-[#2E5A87] text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 border border-[#3F72AF]/20"
              >
                Jadwalkan Sesi
              </motion.button>
              
              <motion.button 
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(63, 114, 175, 0.05)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="border-2 border-[#3F72AF] text-[#3F72AF] hover:text-[#2E5A87] px-8 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                Pelajari Lebih Lanjut
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative z-10"
          >
            <motion.div
              animate={floatingAnimation}
              className="relative"
            >
              <img
                src="https://img.freepik.com/premium-photo/asian-man-woman-talking-with-laptop-computer-business-white-background_1286-2757.jpg"
                alt="Offline Counseling"
                className="rounded-2xl shadow-2xl w-full object-cover border-4 border-white/50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3F72AF]/10 to-transparent rounded-2xl" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Manfaat Section */}
      <section className="py-24 px-6 lg:px-28 bg-gradient-to-br from-[#F9F7F7] to-white/50 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-[#112D4E]"
          >
            Manfaat Konseling Offline
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto text-[#112D4E]/60 leading-relaxed"
          >
            Rasakan kedekatan emosional dan kehangatan manusiawi dalam sesi konseling tatap muka.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div 
            variants={itemVariants}
            whileHover={{ 
              y: -8, 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(63, 114, 175, 0.15)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-[#DBE2EF]/50 hover:border-[#3F72AF]/30 transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#3F72AF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <HiChatAlt2 className="text-[#3F72AF] text-5xl mb-6" />
            </motion.div>
            <h3 className="font-bold text-xl mb-3 text-[#112D4E] relative z-10">Komunikasi Langsung</h3>
            <p className="text-[#112D4E]/60 leading-relaxed relative z-10">
              Konseling langsung memungkinkan ekspresi yang lebih natural dan respons emosional yang lebih manusiawi.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ 
              y: -8, 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(63, 114, 175, 0.15)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-br from-[#DBE2EF]/30 to-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-[#DBE2EF] hover:border-[#3F72AF]/40 transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#3F72AF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <HiShieldCheck className="text-[#3F72AF] text-5xl mb-6" />
            </motion.div>
            <h3 className="font-bold text-xl mb-3 text-[#112D4E] relative z-10">Lingkungan Aman</h3>
            <p className="text-[#112D4E]/60 leading-relaxed relative z-10">
              Dirancang khusus agar Anda merasa terlindungi dan bebas berbagi cerita tanpa takut dihakimi.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ 
              y: -8, 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(63, 114, 175, 0.15)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-[#DBE2EF]/50 hover:border-[#3F72AF]/30 transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#3F72AF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <HiOutlineUserGroup className="text-[#3F72AF] text-5xl mb-6" />
            </motion.div>
            <h3 className="font-bold text-xl mb-3 text-[#112D4E] relative z-10">Pendekatan Personal</h3>
            <p className="text-[#112D4E]/60 leading-relaxed relative z-10">
              Sesi dirancang sesuai kebutuhan pribadi Anda, menjadikan terapi lebih relevan dan bermakna.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Lokasi Konseling */}
      <section className="py-24 px-6 lg:px-28 bg-gradient-to-br from-[#DBE2EF]/20 via-[#F9F7F7] to-white/40 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-[#112D4E]"
          >
            Lokasi Konseling Offline
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto text-[#112D4E]/60 leading-relaxed"
          >
            Pilih lokasi terdekat untuk sesi konseling tatap muka yang aman dan nyaman.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {lokasiKonseling.map((lokasi, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                boxShadow: "0 25px 50px rgba(63, 114, 175, 0.2)"
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300,
                damping: 20
              }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-[#DBE2EF]/60 hover:border-[#3F72AF]/40 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#3F72AF]/10 to-transparent rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <motion.h3 
                  className="text-xl font-bold mb-3 text-[#112D4E]"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {lokasi.city}
                </motion.h3>
                <motion.p 
                  className="text-[#112D4E]/60 mb-6 leading-relaxed"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {lokasi.address}
                </motion.p>
                
                <motion.div 
                  className="w-full h-48 overflow-hidden rounded-xl shadow-md border border-[#DBE2EF]/40"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <iframe
                    src={lokasi.map}
                    loading="lazy"
                    className="w-full h-full border-none transition-all duration-300 group-hover:brightness-110"
                    allowFullScreen
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <PsikologCard />
        <Footer />
      </motion.div>
    </div>
  );
};

export default KonselingOffline;