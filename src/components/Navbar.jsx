import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [profileDropdownTimeout, setProfileDropdownTimeout] = useState(null);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogout = async () => {
    try {
      // 1. Clear semua storage data
      localStorage.clear();
      sessionStorage.clear();
      
      // 2. Clear cookies (jika ada)
      document.cookie.split(";").forEach((c) => {
        const eqPos = c.indexOf("=");
        const name = eqPos > -1 ? c.substr(0, eqPos) : c;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
      });
      
      // 3. Call logout API (jika ada)
      // await fetch('/api/logout', { method: 'POST' });
      
      // 4. Clear cache dan reload
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map(name => caches.delete(name)));
      }
      
      // 5. Force redirect dengan delay untuk memastikan cleanup selesai
      setTimeout(() => {
        // Option 1: Redirect ke halaman login external
        window.location.replace('/login?logout=true');
        
        // Option 2: Redirect ke aplikasi login terpisah
        // window.location.replace('https://your-auth-domain.com/login');
        
        // Option 3: Reload ke root dengan query parameter
        // window.location.replace('/?requireAuth=true');
      }, 100);
      
    } catch (error) {
      console.error('Logout error:', error);
      // Fallback: hard reload
      window.location.replace('/login');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-lg rounded-b-2xl px-6 md:px-20 py-4 flex items-center justify-between transition-all" style={{ backgroundColor: '#F9F7F7', backdropFilter: 'blur(12px)' }}>
      <div className="flex items-center gap-3">
        <motion.img
          src="/foto/logo.png"
          alt="Logo SelfMend"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-14 h-14 object-contain"
        />
        <span className="font-bold text-xl tracking-tight" style={{ color: '#112D4E' }}>SelfMend</span>
      </div>

      <nav className="hidden md:flex items-center space-x-8 text-sm">
        <Link
          to="/selfmend"
          onClick={handleScrollTop}
          className="transition font-medium hover:scale-105"
          style={{ color: '#112D4E' }}
          onMouseEnter={(e) => e.target.style.color = '#3F72AF'}
          onMouseLeave={(e) => e.target.style.color = '#112D4E'}
        >
          Beranda
        </Link>
        <Link 
          to="/about" 
          onClick={handleScrollTop}
          className="transition font-medium hover:scale-105"
          style={{ color: '#112D4E' }}
          onMouseEnter={(e) => e.target.style.color = '#3F72AF'}
          onMouseLeave={(e) => e.target.style.color = '#112D4E'}
        >
          About Me
        </Link>

        <div
          className="relative"
          onMouseEnter={() => {
            if (dropdownTimeout) clearTimeout(dropdownTimeout);
            setShowDropdown(true);
          }}
          onMouseLeave={() => {
            const timeout = setTimeout(() => setShowDropdown(false), 500);
            setDropdownTimeout(timeout);
          }}
        >
          <button 
            className="transition font-medium flex items-center gap-1 hover:scale-105"
            style={{ color: '#112D4E' }}
            onMouseEnter={(e) => e.target.style.color = '#3F72AF'}
            onMouseLeave={(e) => e.target.style.color = '#112D4E'}
          >
            Layanan
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showDropdown && (
            <div className="absolute mt-2 shadow-xl rounded-xl overflow-hidden w-52 z-50 transition-all duration-300" style={{ backgroundColor: '#DBE2EF' }}>
              <Link 
                to="/konseling" 
                onClick={handleScrollTop}
                className="block px-5 py-3 text-sm transition-colors"
                style={{ color: '#112D4E' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#F9F7F7';
                  e.target.style.color = '#3F72AF';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#112D4E';
                }}
              >
                Konseling Online
              </Link>
              <Link 
                to="/KonselingOffline" 
                onClick={handleScrollTop}
                className="block px-5 py-3 text-sm transition-colors"
                style={{ color: '#112D4E' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#F9F7F7';
                  e.target.style.color = '#3F72AF';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#112D4E';
                }}
              >
                Konseling Offline
              </Link>
              <Link 
                to="/SelfMendKids" 
                onClick={handleScrollTop}
                className="block px-5 py-3 text-sm transition-colors"
                style={{ color: '#112D4E' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#F9F7F7';
                  e.target.style.color = '#3F72AF';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#112D4E';
                }}
              >
                SelfMendKids
              </Link>
            </div>
          )}
        </div>

        <Link 
          to="/Meditasi" 
          onClick={handleScrollTop}
          className="transition font-medium hover:scale-105"
          style={{ color: '#112D4E' }}
          onMouseEnter={(e) => e.target.style.color = '#3F72AF'}
          onMouseLeave={(e) => e.target.style.color = '#112D4E'}
        >
          Meditasi
        </Link>
        <Link 
          to="/Contact" 
          onClick={handleScrollTop}
          className="transition font-medium hover:scale-105"
          style={{ color: '#112D4E' }}
          onMouseEnter={(e) => e.target.style.color = '#3F72AF'}
          onMouseLeave={(e) => e.target.style.color = '#112D4E'}
        >
          Kontak
        </Link>
        
        {/* Profile Dropdown with Animation */}
        <div
          className="relative"
          onMouseEnter={() => {
            if (profileDropdownTimeout) clearTimeout(profileDropdownTimeout);
            setShowProfileDropdown(true);
          }}
          onMouseLeave={() => {
            const timeout = setTimeout(() => setShowProfileDropdown(false), 300);
            setProfileDropdownTimeout(timeout);
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button
              className="flex items-center gap-2 px-4 py-2 text-white rounded-full transition-all duration-300 font-medium shadow-lg"
              style={{ 
                background: `linear-gradient(135deg, #3F72AF 0%, #112D4E 100%)`,
              }}
              whileHover={{
                boxShadow: "0 10px 25px rgba(63, 114, 175, 0.4)",
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <motion.div
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(249, 247, 247, 0.2)' }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </motion.div>
              <span>Profile</span>
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{ rotate: showProfileDropdown ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </motion.svg>
            </motion.button>
          </motion.div>

          {showProfileDropdown && (
            <motion.div 
              className="absolute right-0 mt-2 shadow-xl rounded-xl overflow-hidden w-56 z-50"
              style={{ backgroundColor: '#DBE2EF' }}
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-4 py-3 border-b" style={{ backgroundColor: '#F9F7F7', borderColor: '#3F72AF' }}>
                <p className="text-sm font-medium" style={{ color: '#112D4E' }}>John Doe</p>
                <p className="text-xs" style={{ color: '#3F72AF' }}>john.doe@example.com</p>
              </div>
              
              <Link 
                to="/ProfilePage" 
                onClick={handleScrollTop}
                className="flex items-center gap-3 px-4 py-3 text-sm transition-colors"
                style={{ color: '#112D4E' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#F9F7F7';
                  e.target.style.color = '#3F72AF';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#112D4E';
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Lihat Profile
              </Link>
              
              <Link 
                to="/settings" 
                onClick={handleScrollTop}
                className="flex items-center gap-3 px-4 py-3 text-sm transition-colors"
                style={{ color: '#112D4E' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#F9F7F7';
                  e.target.style.color = '#3F72AF';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#112D4E';
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Pengaturan
              </Link>
              
              <Link 
                to="/help" 
                onClick={handleScrollTop}
                className="flex items-center gap-3 px-4 py-3 text-sm transition-colors"
                style={{ color: '#112D4E' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#F9F7F7';
                  e.target.style.color = '#3F72AF';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#112D4E';
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Bantuan
              </Link>
              
              <div className="border-t" style={{ borderColor: '#3F72AF' }}>
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-3 w-full px-4 py-3 text-sm transition-colors"
                  style={{ color: '#d32f2f' }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#ffebee';
                    e.target.style.color = '#c62828';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#d32f2f';
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Keluar
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      <button 
        onClick={() => setMenuOpen(!menuOpen)} 
        className="md:hidden focus:outline-none"
        style={{ color: '#112D4E' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full right-4 w-64 shadow-xl rounded-xl p-6 flex flex-col space-y-4 text-sm md:hidden z-50"
          style={{ backgroundColor: '#DBE2EF', backdropFilter: 'blur(12px)' }}
        >
          <Link
            to="/selfmend"
            onClick={handleScrollTop}
            className="font-medium transition-colors"
            style={{ color: '#112D4E' }}
            onMouseEnter={(e) => e.target.style.color = '#3F72AF'}
            onMouseLeave={(e) => e.target.style.color = '#112D4E'}
          >
            Beranda
          </Link>
          <Link 
            to="/about" 
            onClick={handleScrollTop}
            className="font-medium transition-colors"
            style={{ color: '#112D4E' }}
            onMouseEnter={(e) => e.target.style.color = '#3F72AF'}
            onMouseLeave={(e) => e.target.style.color = '#112D4E'}
          >
            About Me
          </Link>
          <Link 
            to="/konseling" 
            onClick={handleScrollTop}
            className="font-medium transition-colors"
            style={{ color: '#112D4E' }}
            onMouseEnter={(e) => e.target.style.color = '#3F72AF'}
            onMouseLeave={(e) => e.target.style.color = '#112D4E'}
          >
            Konseling Online
          </Link>
          <Link 
            to="/KonselingOffline" 
            onClick={handleScrollTop}
            className="font-medium transition-colors"
            style={{ color: '#112D4E' }}
            onMouseEnter={(e) => e.target.style.color = '#3F72AF'}
            onMouseLeave={(e) => e.target.style.color = '#112D4E'}
          >
            Konseling Offline
          </Link>
          <Link 
            to="/SelfMendKids" 
            onClick={handleScrollTop}
            className="font-medium transition-colors"
            style={{ color: '#112D4E' }}
            onMouseEnter={(e) => e.target.style.color = '#3F72AF'}
            onMouseLeave={(e) => e.target.style.color = '#112D4E'}
          >
            SelfMendKids
          </Link>
          <Link 
            to="/Meditasi" 
            onClick={handleScrollTop}
            className="font-medium transition-colors"
            style={{ color: '#112D4E' }}
            onMouseEnter={(e) => e.target.style.color = '#3F72AF'}
            onMouseLeave={(e) => e.target.style.color = '#112D4E'}
          >
            Meditasi
          </Link>
          <Link 
            to="/Contact" 
            onClick={handleScrollTop}
            className="font-medium transition-colors"
            style={{ color: '#112D4E' }}
            onMouseEnter={(e) => e.target.style.color = '#3F72AF'}
            onMouseLeave={(e) => e.target.style.color = '#112D4E'}
          >
            Kontak
          </Link>
          
          {/* Mobile Profile Section */}
          <div className="border-t pt-4 mt-4" style={{ borderColor: '#3F72AF' }}>
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #3F72AF 0%, #112D4E 100%)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-sm" style={{ color: '#112D4E' }}>John Doe</p>
                <p className="text-xs" style={{ color: '#3F72AF' }}>john.doe@example.com</p>
              </div>
            </div>
            
            <Link 
              to="/ProfilePage"
              onClick={handleScrollTop} 
              className="font-medium block mb-3 transition-colors"
              style={{ color: '#112D4E' }}
              onMouseEnter={(e) => e.target.style.color = '#3F72AF'}
              onMouseLeave={(e) => e.target.style.color = '#112D4E'}
            >
              Lihat Profile
            </Link>
            <Link 
              to="/settings" 
              onClick={handleScrollTop}
              className="font-medium block mb-3 transition-colors"
              style={{ color: '#112D4E' }}
              onMouseEnter={(e) => e.target.style.color = '#3F72AF'}
              onMouseLeave={(e) => e.target.style.color = '#112D4E'}
            >
              Pengaturan
            </Link>
            <Link 
              to="/help" 
              onClick={handleScrollTop}
              className="font-medium block mb-3 transition-colors"
              style={{ color: '#112D4E' }}
              onMouseEnter={(e) => e.target.style.color = '#3F72AF'}
              onMouseLeave={(e) => e.target.style.color = '#112D4E'}
            >
              Bantuan
            </Link>
            
            <motion.button
              onClick={handleLogout}
              className="w-full text-left font-medium transition-colors"
              style={{ color: '#d32f2f' }}
              onMouseEnter={(e) => e.target.style.color = '#c62828'}
              onMouseLeave={(e) => e.target.style.color = '#d32f2f'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Keluar
            </motion.button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;