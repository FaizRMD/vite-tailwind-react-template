import React, { useEffect } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Kombot = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeEls = document.querySelectorAll(".fade-up, .fade-zoom");
    fadeEls.forEach((el) => observer.observe(el));

    return () => fadeEls.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="font-inter text-[#112D4E] bg-gradient-to-b from-[#F9F7F7] to-[#DBE2EF]/30 w-full relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-[#3F72AF]/5 to-[#DBE2EF]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#DBE2EF]/8 to-[#F9F7F7]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* How It Works */}
      <section className="w-full px-6 md:px-20 py-24 fade-up relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-[#3F72AF]/10 to-[#DBE2EF]/20 px-6 py-2 rounded-full text-sm font-medium text-[#3F72AF] mb-6">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#112D4E]">
            How <span className="bg-gradient-to-r from-[#3F72AF] to-[#112D4E] bg-clip-text text-transparent">SelfMend</span> Works
          </h2>
          <p className="text-[#112D4E]/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Our comprehensive approach to mental wellness combines cutting-edge technology 
            with human-centered care to deliver personalized healing experiences.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 text-left relative"
        >
          {[
            {
              title: "Smart Assessment",
              desc: "Complete our scientifically validated assessment powered by AI algorithms to understand your unique mental health patterns and create your personalized wellness roadmap.",
              icon: "🧠",
              gradient: "from-[#3F72AF]/10 to-[#112D4E]/5",
              iconBg: "from-[#3F72AF] to-[#112D4E]",
            },
            {
              title: "AI Personalization",
              desc: "Receive custom guidance based on advanced data analysis. Our intelligent system personalizes resources, exercises, and therapeutic approaches just for you.",
              icon: "🎯",
              gradient: "from-[#DBE2EF]/15 to-[#3F72AF]/10",
              iconBg: "from-[#112D4E] to-[#3F72AF]",
            },
            {
              title: "Progress Analytics",
              desc: "Monitor your emotional journey with real-time insights and detailed analytics. Track improvements, celebrate milestones, and stay motivated with data-driven guidance.",
              icon: "📊",
              gradient: "from-[#F9F7F7]/20 to-[#DBE2EF]/15",
              iconBg: "from-[#3F72AF] to-[#112D4E]",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={`group bg-gradient-to-br ${item.gradient} backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden`}
            >
              {/* Card Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Step Number */}
              <div className="absolute top-6 right-6 w-8 h-8 bg-gradient-to-br from-[#3F72AF]/20 to-[#112D4E]/10 rounded-full flex items-center justify-center text-sm font-bold text-[#3F72AF]">
                {idx + 1}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${item.iconBg} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                {item.icon}
              </div>

              <h3 className="font-bold text-xl text-[#112D4E] mb-4 group-hover:text-[#3F72AF] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-[#112D4E]/70 leading-relaxed group-hover:text-[#112D4E]/80 transition-colors duration-300">
                {item.desc}
              </p>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#3F72AF]/20 to-[#112D4E]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Our Expert Team */}
      <section className="w-full bg-gradient-to-b from-white/80 to-[#F9F7F7]/90 backdrop-blur-sm px-6 md:px-20 py-24 fade-up relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#DBE2EF]/5 to-[#3F72AF]/5"></div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16 relative z-10"
        >
          <div className="inline-block bg-gradient-to-r from-[#3F72AF]/10 to-[#112D4E]/10 px-6 py-2 rounded-full text-sm font-medium text-[#3F72AF] mb-6">
            Expert Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#112D4E] mb-4">
            Our <span className="bg-gradient-to-r from-[#3F72AF] to-[#112D4E] bg-clip-text text-transparent">Expert</span> Team
          </h2>
          <p className="text-[#112D4E]/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Meet the dedicated professionals behind SelfMend who are passionate about 
            transforming mental health care through innovation and compassion.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 relative z-10"
        >
          {[
            {
              name: "Dr. Michael Chen",
              role: "Lead Clinical Psychologist",
              desc: "Cognitive behavioral therapy specialist with 15+ years experience guiding people through trauma recovery and anxiety management.",
              img: "https://img.freepik.com/free-photo/smiling-asian-male-doctor-pointing-upwards_1262-18321.jpg",
              specialty: "CBT & Trauma Recovery",
            },
            {
              name: "Dr. Sarah Johnson",
              role: "Child & Family Therapist",
              desc: "Licensed therapist focused on emotional growth, family dynamics, and childhood healing with expertise in developmental psychology.",
              img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
              specialty: "Family & Child Psychology",
            },
            {
              name: "Alex Rivera",
              role: "Licensed Mental Health Counselor",
              desc: "Certified counselor supporting emotional resilience with adaptive strategies, specializing in mindfulness and stress management.",
              img: "https://img.freepik.com/premium-photo/portrait-smiling-young-woman-against-blue-background_1048944-19354830.jpg",
              specialty: "Mindfulness & Resilience",
            },
          ].map((person, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 border border-[#DBE2EF]/30 relative overflow-hidden"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3F72AF]/5 to-[#DBE2EF]/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Profile Image */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#112D4E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Specialty Badge */}
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] text-white text-xs px-3 py-1 rounded-full font-semibold">
                  {person.specialty}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h4 className="font-bold text-xl text-[#112D4E] mb-1">{person.name}</h4>
                <p className="text-[#3F72AF] font-semibold text-sm mb-3">{person.role}</p>
                <p className="text-[#112D4E]/70 text-sm leading-relaxed mb-4">{person.desc}</p>
                
                {/* Social Links */}
                <div className="flex gap-3 pt-2">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="w-10 h-10 bg-gradient-to-br from-[#3F72AF]/10 to-[#DBE2EF]/20 rounded-xl flex items-center justify-center cursor-pointer group-hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-[#3F72AF] text-lg">💼</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    className="w-10 h-10 bg-gradient-to-br from-[#3F72AF]/10 to-[#DBE2EF]/20 rounded-xl flex items-center justify-center cursor-pointer group-hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-[#3F72AF] text-lg">💬</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-gradient-to-br from-[#DBE2EF]/20 to-[#F9F7F7]/40 px-6 md:px-20 py-24 fade-up relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-[#3F72AF]/5 to-transparent rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-[#DBE2EF]/10 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16 relative z-10"
        >
          <div className="inline-block bg-gradient-to-r from-[#3F72AF]/10 to-[#112D4E]/10 px-6 py-2 rounded-full text-sm font-medium text-[#3F72AF] mb-6">
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#112D4E] mb-4">
            Transforming <span className="bg-gradient-to-r from-[#3F72AF] to-[#112D4E] bg-clip-text text-transparent">Lives</span>
          </h2>
          <p className="text-[#112D4E]/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Real stories from real people who have transformed their mental wellbeing 
            and discovered new hope through SelfMend's personalized approach.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10"
        >
          {[
            {
              name: "Jerri L.",
              role: "Marketing Professional",
              comment:
                "SelfMend has been a lifeline during my darkest moments. After years of struggling with anxiety and panic attacks, I've finally found a sense of peace, clarity, and hope for the future. The personalized approach made all the difference.",
              stars: "⭐⭐⭐⭐⭐",
              duration: "6 months with SelfMend",
            },
            {
              name: "Marcus T.",
              role: "Software Engineer",
              comment:
                "Your expert team and innovative platform changed my life completely. With your comprehensive support and data-driven insights, I've started healing from depression and rebuilding a life I'm genuinely excited to live every day.",
              stars: "⭐⭐⭐⭐⭐",
              duration: "1 year transformation",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#DBE2EF]/30 relative overflow-hidden"
            >
              {/* Quote Background */}
              <div className="absolute top-4 right-4 text-6xl text-[#3F72AF]/10 font-serif">"</div>
              
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3F72AF]/5 to-[#DBE2EF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-2xl">{item.stars}</span>
                  <span className="text-[#3F72AF] text-sm font-semibold ml-2">{item.duration}</span>
                </div>
                
                {/* Testimonial */}
                <p className="text-[#112D4E]/80 text-lg italic leading-relaxed mb-6 group-hover:text-[#112D4E] transition-colors duration-300">
                  "{item.comment}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#3F72AF] to-[#112D4E] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <span className="font-bold text-[#112D4E] text-lg">{item.name}</span>
                    <p className="text-[#3F72AF] text-sm font-medium">{item.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Kombot;