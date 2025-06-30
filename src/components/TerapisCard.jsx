import React, { useState } from "react";
import { Star, Calendar, Clock, MapPin, Award, Heart, X, User, GraduationCap, MessageCircle, Video, Phone, CheckCircle } from "lucide-react";

const TerapisCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSessionType, setSelectedSessionType] = useState('video');
  const [showBookingConfirm, setShowBookingConfirm] = useState(false);

  // Sample data untuk jadwal
  const availableDates = [
    { date: '2025-06-30', day: 'Sen', dayNum: '30' },
    { date: '2025-07-01', day: 'Sel', dayNum: '01' },
    { date: '2025-07-02', day: 'Rab', dayNum: '02' },
    { date: '2025-07-03', day: 'Kam', dayNum: '03' },
    { date: '2025-07-04', day: 'Jum', dayNum: '04' }
  ];

  const availableTimes = [
    { time: '08:00', available: true, price: 249000 },
    { time: '10:00', available: true, price: 249000 },
    { time: '13:00', available: false, price: 249000 },
    { time: '15:00', available: true, price: 299000 },
    { time: '17:00', available: true, price: 299000 },
    { time: '19:00', available: true, price: 349000 }
  ];

  const sessionTypes = [
    { type: 'video', icon: Video, label: 'Video Call', price: 0 },
    { type: 'voice', icon: Phone, label: 'Voice Call', price: -50000 },
    { type: 'chat', icon: MessageCircle, label: 'Chat', price: -100000 }
  ];

  const handleBooking = () => {
    if (selectedDate && selectedTime && selectedSessionType) {
      setShowBookingConfirm(true);
    }
  };

  const getSessionPrice = () => {
    const basePrice = availableTimes.find(t => t.time === selectedTime)?.price || 249000;
    const sessionAdjustment = sessionTypes.find(s => s.type === selectedSessionType)?.price || 0;
    return basePrice + sessionAdjustment;
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedDate(null);
    setSelectedTime(null);
    setSelectedSessionType('video');
  };

  return (
    <>
      {/* Main Card */}
      <div 
        className="relative w-80 mx-auto cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setShowModal(true)}
      >
        {/* Floating background blur effect */}
        <div 
          className={`absolute inset-0 rounded-3xl blur-xl transition-all duration-700 ${isHovered ? 'scale-110 opacity-60' : 'scale-100 opacity-30'}`}
          style={{ background: 'linear-gradient(135deg, #F9F7F7 0%, #DBE2EF 50%, #3F72AF 100%)' }}
        ></div>
        
        {/* Main card */}
        <div 
          className={`relative backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white/20 transition-all duration-500 ${isHovered ? 'transform -translate-y-4 shadow-xl' : ''}`}
          style={{ backgroundColor: '#F9F7F7' }}
        >
          
          {/* Floating particles effect */}
          <div className="absolute top-4 right-4 space-y-2">
            {[1, 2, 3].map((i) => (
              <div 
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-1000 ${isHovered ? 'animate-bounce' : 'opacity-40'}`}
                style={{ 
                  backgroundColor: '#3F72AF',
                  animationDelay: `${i * 200}ms` 
                }}
              ></div>
            ))}
          </div>

          {/* Heart/Like button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className={`absolute top-4 left-4 p-2 rounded-full transition-all duration-300 ${isLiked ? 'scale-110' : 'hover:scale-105'}`}
            style={{ backgroundColor: isLiked ? '#3F72AF' : '#DBE2EF' }}
          >
            <Heart className={`w-4 h-4 transition-colors duration-300 ${isLiked ? 'text-white fill-current' : 'text-gray-600'}`} />
          </button>

          <div className="flex flex-col items-center text-center space-y-6">
            
            {/* Profile section */}
            <div className="relative group">
              <div 
                className={`absolute inset-0 rounded-full transition-all duration-500 ${isHovered ? 'animate-pulse scale-110' : 'scale-100'}`}
                style={{ background: 'linear-gradient(45deg, #DBE2EF, #3F72AF)' }}
              ></div>
              <div className="relative p-1 bg-white rounded-full">
                <img
                  src="https://img.freepik.com/free-photo/asian-female-doctor-physician-medical-uniform-with-stethoscope-cross-arms-chest-smiling-looking-like-professional-white-background_1258-83205.jpg"
                  alt="Mariska"
                  className={`w-28 h-28 rounded-full object-cover transition-all duration-500 ${isHovered ? 'scale-105 brightness-105' : ''}`}
                />
                {/* Online status */}
                <div className="absolute -bottom-1 right-2">
                  <div className="relative">
                    <span className="absolute inline-flex h-6 w-6 rounded-full bg-emerald-300 opacity-75 animate-ping"></span>
                    <span className="relative inline-flex rounded-full h-6 w-6 bg-emerald-400 border-2 border-white items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Floating skill badge */}
              <div className={`absolute -top-2 -right-4 transition-all duration-700 ${isHovered ? 'translate-x-2 -translate-y-2' : ''}`}>
                <div className="text-white text-xs px-2 py-1 rounded-full flex items-center gap-1" style={{ backgroundColor: '#3F72AF' }}>
                  <Award className="w-3 h-3" />
                  Expert
                </div>
              </div>
            </div>

            {/* Name and title */}
            <div className="space-y-2">
              <h3 className={`text-xl font-bold transition-all duration-500 ${isHovered ? 'scale-105' : ''}`} style={{ color: '#112D4E' }}>
                Mariska J. M. Psi., Psikolog
              </h3>
              
              {/* Rating */}
              <div className="flex justify-center items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={`w-4 h-4 text-amber-400 fill-current transition-all duration-300 ${isHovered ? 'animate-pulse' : ''}`}
                    style={{ animationDelay: `${star * 100}ms` }}
                  />
                ))}
                <span className="text-gray-500 ml-2 text-sm font-medium">(127 reviews)</span>
              </div>
              
              {/* License badge */}
              <div className="inline-block">
                <div className="text-white text-sm px-4 py-2 rounded-full font-medium shadow-md transform transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#3F72AF' }}>
                  🏆 Psikolog Berlisensi
                </div>
              </div>
            </div>

            {/* Pricing section */}
            <div className={`rounded-2xl p-4 w-full border border-white/50 transition-all duration-500 ${isHovered ? 'shadow-md transform scale-105' : ''}`} style={{ backgroundColor: '#DBE2EF' }}>
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <span className="line-through text-red-400 font-medium">Rp349.000</span>
                  <span className="bg-red-400 text-white text-xs px-2 py-1 rounded-full">-29%</span>
                </div>
                <p className="text-2xl font-bold" style={{ color: '#3F72AF' }}>
                  Rp249.000
                </p>
              </div>
            </div>

            {/* Schedule info */}
            <div className={`rounded-2xl p-4 w-full border border-white/50 transition-all duration-500 ${isHovered ? 'transform scale-105' : ''}`} style={{ backgroundColor: '#DBE2EF' }}>
              <div className="flex items-center justify-center gap-2" style={{ color: '#112D4E' }}>
                <Calendar className="w-4 h-4" />
                <span className="font-semibold">Tersedia Besok</span>
              </div>
              <div className="flex items-center justify-center gap-4 mt-2 text-xs" style={{ color: '#3F72AF' }}>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>60 menit</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>Online</span>
                </div>
              </div>
            </div>

            {/* CTA button */}
            <button className={`group relative w-full text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-500 transform ${isHovered ? 'scale-105 shadow-lg' : 'shadow-md'} overflow-hidden`} style={{ backgroundColor: '#3F72AF' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative flex items-center justify-center gap-2">
                <span>Lihat Detail & Booking</span>
                <div className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}>
                  →
                </div>
              </div>
            </button>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-4 text-xs text-gray-400 pt-2">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Verified</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#3F72AF' }}></div>
                <span>Instant Booking</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#112D4E' }}></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-white/20 animate-in slide-in-from-bottom-4 duration-500" 
            style={{ backgroundColor: '#F9F7F7' }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-10 p-2 rounded-full text-white transition-all duration-300 hover:scale-110"
              style={{ backgroundColor: '#3F72AF' }}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                
                {/* Left: Profile Info */}
                <div className="space-y-6">
                  <div className="text-center space-y-4">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 rounded-full animate-pulse" style={{ background: 'linear-gradient(45deg, #DBE2EF, #3F72AF)' }}></div>
                      <div className="relative p-1 bg-white rounded-full">
                        <img
                          src="https://img.freepik.com/free-photo/asian-female-doctor-physician-medical-uniform-with-stethoscope-cross-arms-chest-smiling-looking-like-professional-white-background_1258-83205.jpg"
                          alt="Mariska"
                          className="w-32 h-32 rounded-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 right-2">
                        <div className="relative">
                          <span className="absolute inline-flex h-8 w-8 rounded-full bg-green-300 opacity-75 animate-ping"></span>
                          <span className="relative inline-flex rounded-full h-8 w-8 bg-green-400 border-3 border-white items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold mb-2" style={{ color: '#112D4E' }}>
                        Mariska J. M. Psi., Psikolog
                      </h2>
                      <div className="flex justify-center items-center gap-1 mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                        <span className="text-gray-600 ml-2 font-medium">(127 reviews)</span>
                      </div>
                      <div className="inline-block px-4 py-2 rounded-full text-white font-medium" style={{ backgroundColor: '#3F72AF' }}>
                        🏆 Psikolog Berlisensi
                      </div>
                    </div>
                  </div>

                  {/* Info Cards */}
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl border border-white/50" style={{ backgroundColor: '#DBE2EF' }}>
                      <div className="flex items-center gap-3 mb-2">
                        <GraduationCap className="w-5 h-5" style={{ color: '#3F72AF' }} />
                        <h3 className="font-semibold" style={{ color: '#112D4E' }}>Pendidikan</h3>
                      </div>
                      <p className="text-gray-700">S1 Psikologi - Universitas Indonesia</p>
                      <p className="text-gray-700">S2 Psikologi Klinis - Universitas Gadjah Mada</p>
                    </div>

                    <div className="p-4 rounded-2xl border border-white/50" style={{ backgroundColor: '#DBE2EF' }}>
                      <div className="flex items-center gap-3 mb-2">
                        <Award className="w-5 h-5" style={{ color: '#3F72AF' }} />
                        <h3 className="font-semibold" style={{ color: '#112D4E' }}>Spesialisasi</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {['Kecemasan', 'Depresi', 'Hubungan', 'Stress Management'].map((spec) => (
                          <span key={spec} className="px-3 py-1 rounded-full text-sm text-white" style={{ backgroundColor: '#3F72AF' }}>
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl border border-white/50" style={{ backgroundColor: '#DBE2EF' }}>
                      <div className="flex items-center gap-3 mb-2">
                        <User className="w-5 h-5" style={{ color: '#3F72AF' }} />
                        <h3 className="font-semibold" style={{ color: '#112D4E' }}>Pengalaman</h3>
                      </div>
                      <p className="text-gray-700">8+ tahun menangani 500+ klien</p>
                      <p className="text-gray-700">Terapis bersertifikat internasional</p>
                    </div>
                  </div>
                </div>

                {/* Right: Booking Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#112D4E' }}>Pilih Jadwal Konsultasi</h3>
                  
                  {/* Session Type Selection */}
                  <div>
                    <h4 className="font-semibold mb-3" style={{ color: '#112D4E' }}>Tipe Sesi</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {sessionTypes.map(({ type, icon: Icon, label, price }) => (
                        <button
                          key={type}
                          onClick={() => setSelectedSessionType(type)}
                          className={`p-3 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                            selectedSessionType === type 
                              ? 'border-transparent text-white' 
                              : 'border-white/50 hover:border-opacity-70'
                          }`}
                          style={{ 
                            backgroundColor: selectedSessionType === type ? '#3F72AF' : '#DBE2EF',
                            color: selectedSessionType === type ? 'white' : '#112D4E'
                          }}
                        >
                          <Icon className="w-5 h-5 mx-auto mb-1" />
                          <div className="text-sm font-medium">{label}</div>
                          {price !== 0 && (
                            <div className="text-xs">
                              {price > 0 ? `+${price.toLocaleString()}` : price.toLocaleString()}
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date Selection */}
                  <div>
                    <h4 className="font-semibold mb-3" style={{ color: '#112D4E' }}>Pilih Tanggal</h4>
                    <div className="grid grid-cols-5 gap-2">
                      {availableDates.map(({ date, day, dayNum }) => (
                        <button
                          key={date}
                          onClick={() => setSelectedDate(date)}
                          className={`p-3 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                            selectedDate === date 
                              ? 'border-transparent text-white' 
                              : 'border-white/50'
                          }`}
                          style={{ 
                            backgroundColor: selectedDate === date ? '#3F72AF' : '#DBE2EF',
                            color: selectedDate === date ? 'white' : '#112D4E'
                          }}
                        >
                          <div className="text-xs">{day}</div>
                          <div className="text-lg font-bold">{dayNum}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Selection */}
                  {selectedDate && (
                    <div className="animate-in slide-in-from-bottom-2 duration-300">
                      <h4 className="font-semibold mb-3" style={{ color: '#112D4E' }}>Pilih Waktu</h4>
                      <div className="grid grid-cols-3 gap-3">
                        {availableTimes.map(({ time, available, price }) => (
                          <button
                            key={time}
                            onClick={() => available && setSelectedTime(time)}
                            disabled={!available}
                            className={`p-3 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                              !available 
                                ? 'opacity-50 cursor-not-allowed' 
                                : selectedTime === time 
                                  ? 'border-transparent text-white' 
                                  : 'border-white/50'
                            }`}
                            style={{ 
                              backgroundColor: !available 
                                ? '#e5e7eb' 
                                : selectedTime === time 
                                  ? '#3F72AF' 
                                  : '#DBE2EF',
                              color: !available 
                                ? '#9ca3af' 
                                : selectedTime === time 
                                  ? 'white' 
                                  : '#112D4E'
                            }}
                          >
                            <div className="font-bold">{time}</div>
                            <div className="text-xs">
                              {available ? `Rp${price.toLocaleString()}` : 'Penuh'}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Price Summary & Book Button */}
                  {selectedDate && selectedTime && (
                    <div className="animate-in slide-in-from-bottom-2 duration-300 space-y-4">
                      <div className="p-4 rounded-2xl border border-white/50" style={{ backgroundColor: '#DBE2EF' }}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium" style={{ color: '#112D4E' }}>Total Biaya</span>
                          <span className="text-2xl font-bold" style={{ color: '#3F72AF' }}>
                            Rp{getSessionPrice().toLocaleString()}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">
                          {selectedSessionType === 'video' && 'Video Call - 60 menit'}
                          {selectedSessionType === 'voice' && 'Voice Call - 60 menit'}
                          {selectedSessionType === 'chat' && 'Chat Session - 60 menit'}
                        </div>
                      </div>

                      <button
                        onClick={handleBooking}
                        className="w-full py-4 px-6 rounded-2xl text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        style={{ backgroundColor: '#3F72AF' }}
                      >
                        Booking Sekarang
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Confirmation Modal */}
      {showBookingConfirm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[60] animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl p-8 m-4 max-w-md w-full animate-in slide-in-from-bottom-4 duration-300">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto" style={{ backgroundColor: '#3F72AF' }}>
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold" style={{ color: '#112D4E' }}>Booking Berhasil!</h3>
              <div className="space-y-2 text-gray-600">
                <p>Terapis: Mariska J. M. Psi., Psikolog</p>
                <p>Tanggal: {selectedDate}</p>
                <p>Waktu: {selectedTime} WIB</p>
                <p>Tipe: {sessionTypes.find(s => s.type === selectedSessionType)?.label}</p>
                <p className="font-bold text-lg" style={{ color: '#3F72AF' }}>
                  Total: Rp{getSessionPrice().toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => {
                  setShowBookingConfirm(false);
                  closeModal();
                }}
                className="w-full py-3 rounded-xl text-white font-medium"
                style={{ backgroundColor: '#3F72AF' }}
              >
                Selesai
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TerapisCard;