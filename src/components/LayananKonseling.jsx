import React from "react";
import { FaVideo, FaComments, FaUsers, FaArrowRight, FaClock, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "Video Call",
    description: "Sesi konseling tatap muka virtual dengan konselor pilihan Anda untuk interaksi yang lebih personal dan mendalam.",
    price: "Rp 250.000",
    duration: "60 menit",
    buttonLabel: "Jadwalkan Sekarang",
    icon: <FaVideo className="text-4xl" />,
    gradient: "from-[#3F72AF] to-[#112D4E]",
    bgGradient: "from-[#F9F7F7] to-[#DBE2EF]/50",
    features: ["HD Video Quality", "Screen Recording", "Private & Secure"]
  },
  {
    title: "Chat Konseling",
    description: "Komunikasi tekstual dengan konselor Anda, ideal untuk mereka yang lebih nyaman menulis dan berbagi pikiran.",
    price: "Rp 150.000",
    duration: "7 hari",
    buttonLabel: "Mulai Percakapan",
    icon: <FaComments className="text-4xl" />,
    gradient: "from-[#112D4E] to-[#3F72AF]",
    bgGradient: "from-[#DBE2EF]/50 to-[#F9F7F7]",
    features: ["24/7 Access", "Encrypted Messages", "Flexible Schedule"]
  },
  {
    title: "Grup Terapi",
    description: "Sesi konseling berkelompok yang dipimpin oleh konselor profesional untuk berbagi pengalaman dan dukungan bersama.",
    price: "Rp 200.000",
    duration: "90 menit",
    buttonLabel: "Bergabung Grup",
    icon: <FaUsers className="text-4xl" />,
    gradient: "from-[#3F72AF] to-[#112D4E]",
    bgGradient: "from-[#F9F7F7] to-[#DBE2EF]/50",
    features: ["Max 8 Participants", "Weekly Sessions", "Peer Support"]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6
    }
  }
};

const LayananKonseling = () => {
  return (
    <section className="px-6 lg:px-40 py-24 bg-gradient-to-br from-[#F9F7F7] via-[#DBE2EF]/30 to-[#F9F7F7] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-10 right-20 w-32 h-32 bg-gradient-to-r from-[#3F72AF]/10 to-[#112D4E]/5 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-[#112D4E]/8 to-[#3F72AF]/10 rounded-full blur-2xl"
        />
      </div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-block bg-gradient-to-r from-[#3F72AF]/10 to-[#112D4E]/10 backdrop-blur-sm border border-[#3F72AF]/20 px-6 py-2 rounded-full mb-6"
        >
          <span className="text-[#112D4E] font-medium text-sm">🌟 Layanan Profesional</span>
        </motion.div>

        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[#112D4E] to-[#3F72AF] bg-clip-text text-transparent">
            Layanan Konseling
          </span>{" "}
          <span className="text-[#112D4E]">Kami</span>
        </h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[#112D4E]/70 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Berbagai layanan konseling yang dapat disesuaikan dengan kebutuhan dan preferensi Anda. 
          Pilih metode yang paling nyaman untuk perjalanan kesehatan mental Anda.
        </motion.p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              y: -12,
              scale: 1.02,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className={`group relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl border border-white/20 overflow-hidden`}
          >
            {/* Card Background Pattern */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3F72AF]/5 to-[#112D4E]/5"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#3F72AF]/10 to-transparent rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10 p-8">
              {/* Icon Section */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} text-white shadow-lg mb-6 group-hover:shadow-xl transition-shadow duration-300`}
              >
                {service.icon}
              </motion.div>

              {/* Content */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#112D4E] mb-3 group-hover:text-[#3F72AF] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#112D4E]/70 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx, duration: 0.4 }}
                      className="flex items-center text-xs text-[#112D4E]/60"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3F72AF] mr-2"></div>
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Pricing & Duration */}
              <div className="flex items-center justify-between mb-6 p-4 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/20">
                <div>
                  <div className="text-2xl font-bold text-[#112D4E]">{service.price}</div>
                  <div className="flex items-center text-xs text-[#112D4E]/60">
                    <FaClock className="mr-1" />
                    {service.duration}
                  </div>
                </div>
                <div className="flex items-center text-xs text-[#3F72AF] bg-[#3F72AF]/10 px-3 py-1 rounded-full">
                  <FaShieldAlt className="mr-1" />
                  Terjamin
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group/btn w-full bg-gradient-to-r ${service.gradient} text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
              >
                <span className="relative z-10 flex items-center justify-center">
                  {service.buttonLabel}
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaArrowRight className="ml-2 text-sm" />
                  </motion.div>
                </span>
                
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
              </motion.button>
            </div>

            {/* Card border glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#3F72AF]/20 to-[#112D4E]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-16 relative z-10"
      >
        <div className="bg-gradient-to-r from-[#F9F7F7] to-[#DBE2EF]/50 backdrop-blur-xl rounded-3xl p-8 border border-white/20 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-[#112D4E] mb-3">
            Tidak yakin layanan mana yang tepat?
          </h3>
          <p className="text-[#112D4E]/70 mb-6">
            Konsultasikan dengan tim kami untuk mendapatkan rekomendasi layanan yang sesuai dengan kebutuhan Anda.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#112D4E] to-[#3F72AF] text-white font-semibold px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Konsultasi Gratis
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default LayananKonseling;