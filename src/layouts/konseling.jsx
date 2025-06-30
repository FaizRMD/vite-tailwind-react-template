import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { FaUserShield, FaCertificate, FaRegClock } from "react-icons/fa";
import LayananKonseling from "../components/LayananKonseling";
import Footer from "../components/Footer";

const psychologists = [
  {
    name: "Hanna H. M.Psi., Psikolog",
    image: "/foto/doctor2.png",
    license: true,
  },
  {
    name: "Fitri J. M.Psi., Psikolog",
    image: "/foto/young.png",
    license: true,
  },
  {
    name: "Arief L. M.Psi., Psikolog",
    image: "/foto/doctor.png",
    license: true,
  },
  {
    name: "Joana N. P. M. Psi., Psikolog",
    image: "/foto/womanDoktor.png",
    license: true,
  },
];

const Konseling = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9F7F7] via-[#DBE2EF] to-[#F9F7F7] font-sans relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#3F72AF]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#112D4E]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#DBE2EF]/10 rounded-full blur-3xl"></div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative px-6 lg:px-40 py-24 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10"
        >
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="inline-block bg-gradient-to-r from-[#3F72AF]/10 to-[#112D4E]/10 backdrop-blur-sm border border-[#3F72AF]/20 px-6 py-2 rounded-full mb-6"
            >
              <span className="text-[#112D4E] font-medium text-sm">✨ Platform Konseling Terpercaya</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold text-[#112D4E] leading-tight mb-6 bg-gradient-to-r from-[#112D4E] to-[#3F72AF] bg-clip-text text-transparent"
            >
              Konseling Online untuk{" "}
              <span className="relative">
                Kesehatan Mental
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-2 left-0 h-1 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-full"
                />
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-[#112D4E]/70 text-lg mb-8 leading-relaxed"
            >
              Temukan ketenangan dan solusi bersama konselor profesional kami
              kapanpun dan dimanapun Anda berada. Mulai perjalanan menuju kesehatan mental yang lebih baik.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-gradient-to-r from-[#3F72AF] to-[#112D4E] hover:from-[#112D4E] hover:to-[#3F72AF] text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Mulai Konseling Sekarang</span>
                <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/70 backdrop-blur-sm text-[#112D4E] hover:bg-white border-2 border-[#3F72AF]/20 hover:border-[#3F72AF]/40 font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Pelajari Lebih Lanjut
              </motion.button>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative group">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-r from-[#3F72AF]/20 to-[#112D4E]/20 rounded-full blur-xl"
              ></motion.div>
              
              <motion.img
                whileHover={{ scale: 1.02 }}
                src="https://img.freepik.com/free-photo/woman-with-headset-having-video-call-laptop_23-2148854877.jpg"
                alt="Ilustrasi Konseling"
                className="relative w-full max-w-md rounded-3xl shadow-2xl border-4 border-white/50 backdrop-blur-sm object-cover transform group-hover:shadow-3xl transition-all duration-500"
              />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] w-16 h-16 rounded-2xl blur-lg opacity-40"
              ></motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#112D4E] to-[#3F72AF] w-20 h-20 rounded-2xl blur-lg opacity-30"
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Why SelfMend Section */}
      <section className="px-6 lg:px-40 py-16 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#112D4E] mb-4">
            Mengapa Memilih{" "}
            <span className="bg-gradient-to-r from-[#3F72AF] to-[#112D4E] bg-clip-text text-transparent">
              SelfMend?
            </span>
          </h2>
          <p className="text-[#112D4E]/70 max-w-2xl mx-auto mb-16 text-lg leading-relaxed">
            Platform konseling online yang dirancang khusus untuk memberikan dukungan
            kesehatan mental yang mudah diakses dan profesional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: FaUserShield,
              title: "Privasi Terjamin",
              desc: "Semua sesi konseling dan informasi pribadi Anda dilindungi dengan enkripsi tingkat tinggi dan protokol keamanan terbaik.",
              color: "from-[#F9F7F7] to-[#DBE2EF]",
              delay: 0.2
            },
            {
              icon: FaCertificate,
              title: "Konselor Bersertifikat",
              desc: "Tim kami terdiri dari para profesional kesehatan mental yang berpengalaman dan memiliki sertifikasi resmi.",
              color: "from-[#DBE2EF] to-[#F9F7F7]",
              delay: 0.4
            },
            {
              icon: FaRegClock,
              title: "Fleksibel & Nyaman",
              desc: "Akses layanan konseling kapan saja dan di mana saja, sesuai dengan jadwal dan kebutuhan Anda.",
              color: "from-[#F9F7F7] to-[#DBE2EF]",
              delay: 0.6
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.6, delay: item.delay }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${item.color} backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl text-left border border-white/20 group relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#3F72AF]/5 to-[#112D4E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="relative z-10"
              >
                <item.icon className="text-4xl text-[#3F72AF] mb-6 group-hover:text-[#112D4E] transition-colors duration-300" />
              </motion.div>
              
              <h3 className="font-bold text-[#112D4E] mb-4 text-xl relative z-10">
                {item.title}
              </h3>
              <p className="text-[#112D4E]/70 leading-relaxed relative z-10">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Psychologist Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-6 lg:px-40 py-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#112D4E] mb-4">
          Temukan Psikolog{" "}
          <span className="bg-gradient-to-r from-[#3F72AF] to-[#112D4E] bg-clip-text text-transparent">
            Terbaik
          </span>{" "}
          untukmu
        </h2>
        <p className="text-[#112D4E]/70 max-w-xl mx-auto text-lg leading-relaxed">
          Jelajahi daftar profesional yang siap mendengarkan dan membantumu secara privat & terpercaya.
        </p>
      </motion.div>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 lg:px-40 pb-32">
        {psychologists.map((psikolog, index) => (
          <motion.div
            key={index}
            className="group bg-white/60 backdrop-blur-xl rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl border border-white/30 relative overflow-hidden"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.15,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#3F72AF]/5 to-[#112D4E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="relative z-10 mb-6"
            >
              <div className="relative">
                <img
                  src={psikolog.image}
                  alt={psikolog.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white/50 shadow-xl group-hover:shadow-2xl transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#3F72AF]/20 to-[#112D4E]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
            
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-[#112D4E] mb-3 group-hover:text-[#3F72AF] transition-colors duration-300">
                {psikolog.name}
              </h3>
              
              {psikolog.license && (
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="inline-block bg-gradient-to-r from-[#3F72AF]/10 to-[#112D4E]/10 text-[#112D4E] text-sm font-medium px-4 py-2 rounded-full mb-4 border border-[#3F72AF]/20"
                >
                  ✓ Psikolog Berlisensi
                </motion.span>
              )}
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] hover:from-[#112D4E] hover:to-[#3F72AF] text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group/btn"
              >
                <span className="relative z-10">Konseling Sekarang</span>
                <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500"></div>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </section>

      <LayananKonseling />
      <Footer />
    </div>
  );
};

export default Konseling;