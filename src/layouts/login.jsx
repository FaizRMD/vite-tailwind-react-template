import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, User, Lock, Heart, Brain, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      navigate('/selfmend');
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((res) => setTimeout(res, 2000)); // Simulasi loading yang lebih realistis

    if (username === 'admin' && password === '123') {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/selfmend');
    } else {
      alert('Username atau password salah');
    }

    setIsLoading(false);
  };

  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
      initial={{ 
        x: Math.random() * window.innerWidth, 
        y: Math.random() * window.innerHeight,
        scale: 0 
      }}
      animate={{ 
        y: [null, -100, -200, -300],
        scale: [0, 1, 1, 0],
        opacity: [0.2, 0.6, 0.3, 0]
      }}
      transition={{ 
        duration: Math.random() * 4 + 4,
        repeat: Infinity,
        delay: Math.random() * 2
      }}
    />
  ));

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {particles}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Branding & Animation */}
          <motion.div 
            className="hidden lg:block text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative mb-8"
              animate={{ 
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
                <Brain className="w-16 h-16 text-white" />
              </div>
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4 text-white" />
              </motion.div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              SelfMend
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Perjalanan Menuju Kesehatan Mental
              <br />
              <span className="text-blue-600 font-semibold">Yang Lebih Baik</span>
            </motion.p>

            {/* Floating icons */}
            <div className="relative">
              <motion.div
                className="absolute -left-16 top-0 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Heart className="w-6 h-6 text-white" />
              </motion.div>
              
              <motion.div
                className="absolute -right-12 -top-8 w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, -15, 0],
                  x: [0, 5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <Sparkles className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Login Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="bg-white/70 backdrop-blur-xl border border-white/50 p-8 rounded-3xl shadow-2xl"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  Selamat Datang Kembali
                </h2>
                <p className="text-gray-600">Masuk untuk melanjutkan perjalanan Anda</p>
              </motion.div>

              <form onSubmit={handleLogin} className="space-y-6">
                {/* Username Field */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <motion.div
                    className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${
                      focusedField === 'username' 
                        ? 'from-blue-500 to-purple-500' 
                        : 'from-gray-300 to-gray-400'
                    } p-[2px] transition-all duration-300`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="bg-white rounded-2xl">
                      <input
                        type="text"
                        placeholder="Username"
                        className="w-full px-4 py-4 pr-12 rounded-2xl bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onFocus={() => setFocusedField('username')}
                        onBlur={() => setFocusedField('')}
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    animate={{ 
                      scale: focusedField === 'username' ? 1.1 : 1,
                      color: focusedField === 'username' ? '#3B82F6' : '#9CA3AF'
                    }}
                  >
                    <User className="w-5 h-5" />
                  </motion.div>
                </motion.div>

                {/* Password Field */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <motion.div
                    className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${
                      focusedField === 'password' 
                        ? 'from-blue-500 to-purple-500' 
                        : 'from-gray-300 to-gray-400'
                    } p-[2px] transition-all duration-300`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="bg-white rounded-2xl">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        className="w-full px-4 py-4 pr-20 rounded-2xl bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={() => setFocusedField('password')}
                        onBlur={() => setFocusedField('')}
                      />
                    </div>
                  </motion.div>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex gap-2">
                    <motion.button
                      type="button"
                      className="text-gray-500 hover:text-blue-500 transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </motion.button>
                    <motion.div
                      animate={{ 
                        scale: focusedField === 'password' ? 1.1 : 1,
                        color: focusedField === 'password' ? '#3B82F6' : '#9CA3AF'
                      }}
                    >
                      <Lock className="w-5 h-5" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Login Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ 
                      scale: isLoading ? 1 : 1.02,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                    }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  >
                    <AnimatePresence mode="wait">
                      {isLoading ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center justify-center gap-2"
                        >
                          <motion.div
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sedang Masuk...
                        </motion.div>
                      ) : (
                        <motion.span
                          key="login"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          Masuk
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.div>

                {/* Demo Info */}
                <motion.div
                  className="text-center pt-4 border-t border-gray-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <p className="text-sm text-gray-500 mb-2">Demo Akun:</p>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-3">
                    <p className="text-sm font-mono text-gray-700">
                      <span className="font-semibold text-blue-600">Username:</span> admin
                    </p>
                    <p className="text-sm font-mono text-gray-700">
                      <span className="font-semibold text-purple-600">Password:</span> 123
                    </p>
                  </div>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;