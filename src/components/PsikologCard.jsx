import React, { useState } from "react";
import { FaStar, FaMapMarkerAlt, FaCertificate, FaCalendarAlt, FaUserMd } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const PsikologCard = ({ name, image, licensed, rating, specialization, onClick, location }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        type: "spring", 
        stiffness: 100,
        damping: 15 
      }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(17, 45, 78, 0.15)"
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-[#F9F7F7] rounded-3xl shadow-lg p-6 border border-[#DBE2EF] hover:border-[#3F72AF] transition-all duration-500 cursor-pointer group relative overflow-hidden"
      onClick={onClick}
    >
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#DBE2EF] to-transparent rounded-full"
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.6 : 0.3
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Profile Image */}
      <div className="relative z-10 mb-6">
        <motion.div
          className="relative w-28 h-28 mx-auto"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={image}
            alt={name}
            className="rounded-full w-full h-full object-cover border-4 border-white shadow-lg"
          />
          
          {/* Licensed Badge */}
          {licensed && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="absolute -top-2 -right-2 bg-[#3F72AF] text-white text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1"
            >
              <FaCertificate className="text-xs" />
              <span className="font-medium">Berlisensi</span>
            </motion.div>
          )}

          {/* Floating Animation Ring */}
          <motion.div
            className="absolute inset-0 border-2 border-[#3F72AF] rounded-full opacity-0 group-hover:opacity-100"
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>

      {/* Doctor Info */}
      <div className="text-center relative z-10">
        <motion.h3 
          className="text-lg font-bold text-[#112D4E] mb-2 leading-tight"
          animate={{ color: isHovered ? "#3F72AF" : "#112D4E" }}
          transition={{ duration: 0.3 }}
        >
          {name}
        </motion.h3>
        
        <div className="flex items-center justify-center gap-1 text-[#3F72AF] mb-3">
          <FaUserMd className="text-sm" />
          <p className="text-sm font-medium">{specialization}</p>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-1 text-[#112D4E]/60 mb-4">
          <FaMapMarkerAlt className="text-xs" />
          <span className="text-xs">{location}</span>
        </div>

        {/* Rating */}
        <motion.div 
          className="flex items-center justify-center gap-1 mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * i, type: "spring" }}
              >
                <FaStar
                  className={`text-sm ${i < rating ? "text-yellow-400" : "text-[#DBE2EF]"}`}
                />
              </motion.div>
            ))}
          </div>
          <span className="text-sm text-[#112D4E]/70 ml-2 font-medium">
            {rating}.0
          </span>
        </motion.div>

        {/* Action Button */}
        <motion.button 
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 8px 20px rgba(63, 114, 175, 0.3)"
          }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-6 py-3 bg-[#3F72AF] text-white rounded-2xl text-sm font-semibold hover:bg-[#2E5A87] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
        >
          <FaCalendarAlt className="text-xs" />
          Lihat Profil
        </motion.button>
      </div>
    </motion.div>
  );
};

const PsikologSection = () => {
  const [selectedPsikolog, setSelectedPsikolog] = useState(null);

  const dataPsikolog = {
    Jakarta: [
      {
        name: "Dr. Marchia D. M.Psi., Psikolog",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
        licensed: true,
        rating: 5,
        specialization: "Keluarga & Kecemasan",
        bio: "Dr. Marchia adalah psikolog berpengalaman dengan spesialisasi dalam penanganan trauma keluarga dan gangguan kecemasan. Dengan pendekatan yang empatik dan berbasis bukti, beliau telah membantu ratusan pasien menemukan keseimbangan mental.",
        location: "Jakarta Selatan",
        experience: "8 tahun",
        education: "S2 Psikologi Klinis UI"
      },
      {
        name: "Dr. Adam H. M.Psi., Psikolog",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
        licensed: true,
        rating: 5,
        specialization: "Karier & Hubungan",
        bio: "Dr. Adam fokus pada psikologi karier dan konseling hubungan. Dengan pengalaman lebih dari 10 tahun, beliau membantu klien mencapai keseimbangan dalam kehidupan profesional dan personal.",
        location: "Jakarta Pusat",
        experience: "10 tahun",
        education: "S2 Psikologi Industri UGM"
      },
      {
        name: "Dr. Sarah L. M.Psi., Psikolog", 
        image: "foto/dokterJaktar.png",
        licensed: true,
        rating: 4,
        specialization: "Anak & Remaja",
        bio: "Dr. Sarah spesialis dalam psikologi perkembangan anak dan remaja. Beliau menggunakan terapi bermain dan pendekatan kreatif untuk membantu anak-anak mengatasi berbagai tantangan emosional.",
        location: "Jakarta Barat",
        experience: "6 tahun", 
        education: "S2 Psikologi Perkembangan UNPAD"
      },
      {
        name: "Dr. Michael T. M.Psi., Psikolog",
        image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
        licensed: true,
        rating: 5,
        specialization: "Trauma & PTSD",
        bio: "Dr. Michael adalah ahli dalam penanganan trauma dan PTSD. Dengan sertifikasi internasional EMDR, beliau telah membantu banyak pasien pulih dari trauma berat dengan metode terapi yang inovatif.",
        location: "Jakarta Timur",
        experience: "12 tahun",
        education: "S2 Psikologi Klinis & PhD Trauma Studies"
      }
    ],
    Bandung: [
      {
        name: "Dr. Clara J. M.Psi., Psikolog",
        image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=face",
        licensed: true,
        rating: 5,
        specialization: "Remaja & Trauma",
        bio: "Dr. Clara memiliki keahlian khusus dalam menangani remaja yang mengalami trauma. Dengan pendekatan yang hangat dan profesional, beliau membantu remaja melewati masa-masa sulit dengan strategi coping yang efektif.",
        location: "Bandung Utara",
        experience: "7 tahun",
        education: "S2 Psikologi Klinis ITB"
      },
      {
        name: "Dr. Maitea K. M.Psi., Psikolog",
        image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop&crop=face",
        licensed: true,
        rating: 4,
        specialization: "Stress & Kepercayaan Diri",
        bio: "Dr. Maitea berfokus pada manajemen stress dan pengembangan kepercayaan diri. Dengan pengalaman dalam psikologi positif, beliau membantu klien mengembangkan resiliensi dan self-esteem yang kuat.",
        location: "Bandung Selatan",
        experience: "5 tahun",
        education: "S2 Psikologi Positif UNPAD"
      }
    ],
    Yogyakarta: [
      {
        name: "Dr. Rina S. M.Psi., Psikolog",
        image: "foto/Rina.png",
        licensed: true,
        rating: 5,
        specialization: "Kecemasan & Depresi",
        bio: "Dr. Rina adalah spesialis dalam penanganan gangguan kecemasan dan depresi. Dengan pendekatan CBT dan mindfulness, beliau membantu pasien mengatasi gejala dan meningkatkan kualitas hidup.",
        location: "Sleman",
        experience: "9 tahun",
        education: "S2 Psikologi Klinis UGM"
      },
      {
        name: "Dr. Budi P. M.Psi., Psikolog",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face",
        licensed: true,
        rating: 4,
        specialization: "Pernikahan & Keluarga",
        bio: "Dr. Budi fokus pada terapi pernikahan dan konseling keluarga. Dengan pengalaman dalam family therapy, beliau membantu pasangan dan keluarga membangun komunikasi yang sehat dan harmonis.",
        location: "Bantul",
        experience: "11 tahun",
        education: "S2 Psikologi Keluarga UGM"
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="px-6 lg:px-28 py-20 bg-gradient-to-br from-[#F9F7F7] to-[#DBE2EF]/30">
      {Object.entries(dataPsikolog).map(([lokasi, list]) => (
        <motion.div 
          key={lokasi} 
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-[#112D4E]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Psikolog Terpilih di {lokasi}
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-[#3F72AF] to-[#DBE2EF] rounded-full mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {list.map((psikolog, i) => (
              <PsikologCard 
                key={i} 
                {...psikolog} 
                onClick={() => setSelectedPsikolog(psikolog)} 
              />
            ))}
          </motion.div>
        </motion.div>
      ))}

      {/* Enhanced Modal Detail Psikolog */}
      <AnimatePresence>
        {selectedPsikolog && (
          <motion.div
            className="fixed inset-0 bg-[#112D4E]/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPsikolog(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-[#F9F7F7] rounded-3xl shadow-2xl p-8 max-w-2xl w-full relative border border-[#DBE2EF]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setSelectedPsikolog(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-[#DBE2EF] hover:bg-[#3F72AF] hover:text-white text-[#112D4E] rounded-full flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>

              <div className="flex flex-col md:flex-row gap-8">
                {/* Profile Section */}
                <div className="text-center md:text-left">
                  <motion.div
                    className="w-32 h-32 mx-auto md:mx-0 mb-6 relative"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <img
                      src={selectedPsikolog.image}
                      alt={selectedPsikolog.name}
                      className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-[#3F72AF] text-white p-2 rounded-full">
                      <FaUserMd className="text-sm" />
                    </div>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-2xl font-bold text-[#112D4E] mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {selectedPsikolog.name}
                  </motion.h3>
                  
                  <motion.div
                    className="inline-flex items-center gap-2 bg-[#3F72AF] text-white px-4 py-2 rounded-full text-sm font-medium mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <FaCertificate className="text-xs" />
                    {selectedPsikolog.specialization}
                  </motion.div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-[#DBE2EF] p-3 rounded-xl text-center">
                      <div className="text-[#3F72AF] font-bold text-lg">{selectedPsikolog.experience}</div>
                      <div className="text-[#112D4E]/60 text-xs">Pengalaman</div>
                    </div>
                    <div className="bg-[#DBE2EF] p-3 rounded-xl text-center">
                      <div className="text-[#3F72AF] font-bold text-lg">{selectedPsikolog.rating}.0</div>
                      <div className="text-[#112D4E]/60 text-xs">Rating</div>
                    </div>
                  </div>
                </div>

                {/* Details Section */}
                <div className="flex-1">
                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h4 className="font-semibold text-[#112D4E] mb-2 flex items-center gap-2">
                      <FaMapMarkerAlt className="text-[#3F72AF]" />
                      Lokasi Praktik
                    </h4>
                    <p className="text-[#112D4E]/70">{selectedPsikolog.location}</p>
                  </motion.div>

                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h4 className="font-semibold text-[#112D4E] mb-2">Pendidikan</h4>
                    <p className="text-[#112D4E]/70">{selectedPsikolog.education}</p>
                  </motion.div>

                  <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <h4 className="font-semibold text-[#112D4E] mb-3">Tentang Dokter</h4>
                    <p className="text-[#112D4E]/70 leading-relaxed text-justify">
                      {selectedPsikolog.bio}
                    </p>
                  </motion.div>

                  <motion.button 
                    className="w-full py-4 rounded-2xl bg-[#3F72AF] text-white font-semibold hover:bg-[#2E5A87] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <FaCalendarAlt />
                    Jadwalkan Konsultasi
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PsikologSection;