import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const faqs = [
    {
      question: "Bagaimana cara memulai sesi terapi di SelfMend?",
      answer:
        "Kamu hanya perlu mendaftar akun, pilih psikolog yang sesuai, lalu jadwalkan sesi konsultasi melalui platform kami.",
      icon: "🚀"
    },
    {
      question: "Apakah konsultasi di SelfMend bersifat rahasia?",
      answer:
        "Ya, semua sesi dilindungi dengan enkripsi dan kami menjaga privasi data pengguna secara ketat.",
      icon: "🔒"
    },
    {
      question: "Apakah saya bisa memilih psikolog sendiri?",
      answer:
        "Tentu. Kamu bisa memilih psikolog berdasarkan spesialisasi, jadwal, dan ulasan dari pengguna lain.",
      icon: "👥"
    },
    {
      question: "Bagaimana jika saya ingin mengganti psikolog?",
      answer:
        "Tidak masalah. Kamu bisa ganti psikolog kapan saja sesuai kenyamananmu melalui dashboard akun.",
      icon: "🔄"
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      className="relative min-h-screen py-20 px-6 md:px-20 overflow-hidden"
      style={{ backgroundColor: '#DBE2EF' }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse"
          style={{ backgroundColor: '#3F72AF', opacity: 0.15 }}
        ></div>
        <div 
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ backgroundColor: '#112D4E', opacity: 0.1 }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl animate-spin-slow"
          style={{ backgroundColor: '#3F72AF', opacity: 0.08 }}
        ></div>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full animate-float"
          style={{
            backgroundColor: '#3F72AF',
            opacity: 0.4,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        ></div>
      ))}

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
            style={{ 
              backgroundColor: '#F9F7F7',
              borderColor: '#3F72AF'
            }}
          >
            <span 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: '#3F72AF' }}
            ></span>
            <span 
              className="text-sm font-medium"
              style={{ color: '#112D4E' }}
            >
              FAQ Section
            </span>
          </div>
          
          <h2 
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ color: '#112D4E' }}
          >
            Pertanyaan Umum
          </h2>
          
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#112D4E', opacity: 0.8 }}
          >
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan SelfMend
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-500 ${
                hoveredIndex === index ? 'scale-105 z-10' : 'scale-100'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow Effect */}
              <div 
                className={`absolute inset-0 rounded-2xl blur-xl transition-opacity duration-500 ${
                  hoveredIndex === index || openIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ backgroundColor: '#3F72AF', opacity: 0.2 }}
              ></div>
              
              {/* Main Card */}
              <div 
                className={`relative border-2 transition-all duration-500 rounded-2xl overflow-hidden shadow-lg ${
                  openIndex === index 
                    ? 'shadow-2xl' 
                    : 'shadow-md hover:shadow-lg'
                }`}
                style={{
                  backgroundColor: '#F9F7F7',
                  borderColor: openIndex === index ? '#3F72AF' : '#DBE2EF'
                }}
              >
                
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between group/button"
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold transform transition-all duration-300 shadow-md ${
                        openIndex === index ? 'scale-110 rotate-12' : 'scale-100'
                      }`}
                      style={{ 
                        backgroundColor: '#3F72AF',
                        color: '#F9F7F7',
                        border: '2px solid #112D4E'
                      }}
                    >
                      <span 
                        className="filter-none"
                        style={{ 
                          textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                          fontSize: '1.5rem'
                        }}
                      >
                        {faq.icon}
                      </span>
                    </div>
                    
                    <span 
                      className={`font-semibold text-lg transition-colors duration-300 ${
                        openIndex === index ? 'text-opacity-100' : 'group-hover/button:text-opacity-80'
                      }`}
                      style={{ color: '#112D4E' }}
                    >
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Animated Arrow */}
                  <div className={`relative w-10 h-10 flex items-center justify-center rounded-full transform transition-all duration-500 ${
                    openIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}
                  style={{ backgroundColor: '#3F72AF' }}
                  >
                    <svg
                      className="w-5 h-5 relative z-10"
                      style={{ color: '#F9F7F7' }}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Answer Content */}
                <div className={`overflow-hidden transition-all duration-500 ease-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <div 
                      className="h-px mb-4"
                      style={{ backgroundColor: '#3F72AF', opacity: 0.3 }}
                    ></div>
                    <div className={`transform transition-all duration-500 delay-100 ${
                      openIndex === index ? 'translate-y-0' : 'translate-y-4'
                    }`}>
                      <p 
                        className="leading-relaxed text-base"
                        style={{ color: '#112D4E', opacity: 0.9 }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Active State Highlight */}
                {openIndex === index && (
                  <div 
                    className="absolute top-0 left-0 w-1 h-full"
                    style={{ backgroundColor: '#3F72AF' }}
                  ></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 font-medium hover:shadow-lg transition-all duration-300 cursor-pointer group"
            style={{ 
              backgroundColor: '#3F72AF',
              borderColor: '#112D4E',
              color: '#F9F7F7'
            }}
          >
            <span>Masih ada pertanyaan?</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default FAQSection;