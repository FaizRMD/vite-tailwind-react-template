import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById('modern-footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => observer.disconnect();
  }, []);

  const socialIcons = [
    {
      name: 'Instagram',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  const footerLinks = [
    {
      title: 'Layanan',
      links: ['Video Call', 'Chat Konseling', 'Grup Terapi', 'Konsultasi Premium']
    },
    {
      title: 'Bantuan',
      links: ['FAQ', 'Kebijakan Privasi', 'Syarat & Ketentuan', 'Hubungi Kami']
    },
    {
      title: 'Perusahaan',
      links: ['Tentang Kami', 'Karir', 'Blog', 'Partnership']
    }
  ];

  return (
    <footer 
      id="modern-footer"
      className="relative overflow-hidden"
      style={{
        backgroundColor: '#1e293b'
      }}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="4" cy="4" r="1" fill="#64748b"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Subtle Geometric Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
        <div 
          className="w-full h-full rounded-full transform rotate-45"
          style={{
            background: 'linear-gradient(135deg, #475569, #334155)'
          }}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-5">
        <div 
          className="w-full h-full transform rotate-12"
          style={{
            background: 'linear-gradient(135deg, #475569, #334155)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
        />
      </div>

      <div className="relative z-10 px-6 lg:px-12 py-16">
        {/* Brand Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="relative inline-block group">
            <h2 className="text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-white">
              SelfMend
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-blue-400 rounded-full group-hover:w-full transition-all duration-700 ease-out" />
          </div>
          <p className="text-lg mt-6 max-w-2xl mx-auto font-medium text-slate-300">
            Transformasi kesehatan mental melalui teknologi modern yang elegan dan berempati
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Links Sections */}
          {footerLinks.map((section, sectionIndex) => (
            <div
              key={section.title}
              className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
              style={{transitionDelay: `${sectionIndex * 150}ms`}}
            >
              <div className="relative p-6 rounded-xl bg-slate-800 border border-slate-700 transition-all duration-300 hover:bg-slate-750 hover:border-slate-600 hover:shadow-lg group">
                <h4 className="text-xl font-bold mb-6 text-white">
                  {section.title}
                </h4>
                
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={link}>
                      <a
                        href="#"
                        className={`text-slate-300 hover:text-white transition-all duration-300 relative group/link ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'}`}
                        style={{
                          transitionDelay: `${sectionIndex * 150 + linkIndex * 50}ms`
                        }}
                        onMouseEnter={() => setHoveredLink(`${sectionIndex}-${linkIndex}`)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        <span className="relative z-10 group-hover/link:translate-x-1 transition-transform duration-300 inline-block">
                          {link}
                        </span>
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover/link:w-full transition-all duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Social Media Section */}
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`} style={{transitionDelay: '450ms'}}>
            <div className="relative p-6 rounded-xl bg-slate-800 border border-slate-700 transition-all duration-300 hover:bg-slate-750 hover:border-slate-600 hover:shadow-lg">
              <h4 className="text-xl font-bold mb-6 text-white">Connect</h4>
              
              <div className="grid grid-cols-2 gap-3">
                {socialIcons.map((social, index) => (
                  <a
                    key={social.name}
                    href="#"
                    className={`group/social relative p-4 bg-slate-700 border border-slate-600 rounded-lg transition-all duration-300 hover:bg-slate-600 hover:border-slate-500 hover:scale-105 hover:shadow-md ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    style={{
                      transitionDelay: `${550 + index * 75}ms`
                    }}
                    onMouseEnter={() => setHoveredLink(`social-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <div className="text-slate-300 group-hover/social:text-white transition-colors duration-300 flex items-center justify-center">
                      {social.svg}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className={`mb-12 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`} style={{transitionDelay: '700ms'}}>
          <div className="relative p-8 rounded-2xl bg-slate-800 border border-slate-700">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3 text-white">Stay Connected</h3>
              <p className="mb-8 text-slate-300 max-w-md mx-auto">
                Dapatkan wawasan mendalam tentang kesehatan mental dan perkembangan terbaru
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 px-6 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-slate-600 transition-all duration-300"
                />
                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`pt-8 border-t border-slate-700 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{transitionDelay: '850ms'}}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-300">
              © {new Date().getFullYear()} SelfMend. Crafted with care for wellness.
            </div>
            <div className="flex gap-6">
              {['Privacy', 'Terms', 'Cookies'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors duration-300 relative group/bottom"
                >
                  <span className="relative z-10">{item}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover/bottom:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;