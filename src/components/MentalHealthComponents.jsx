import React, { useState, useEffect } from 'react';
import { Heart, Smile, Brain, Star, Sun, Moon, Music, Book, Users, Award } from 'lucide-react';

const MentalHealthComponents = () => {
  const [currentMood, setCurrentMood] = useState('');
  const [currentActivity, setCurrentActivity] = useState(null);
  const [points, setPoints] = useState(0);
  const [showEncouragement, setShowEncouragement] = useState(false);

  const moods = [
    { id: 'happy', emoji: '😊', label: 'Senang', color: '#3F72AF' },
    { id: 'sad', emoji: '😢', label: 'Sedih', color: '#112D4E' },
    { id: 'angry', emoji: '😠', label: 'Marah', color: '#112D4E' },
    { id: 'excited', emoji: '🤗', label: 'Bersemangat', color: '#3F72AF' },
    { id: 'calm', emoji: '😌', label: 'Tenang', color: '#DBE2EF' },
    { id: 'worried', emoji: '😰', label: 'Cemas', color: '#112D4E' }
  ];

  const activities = [
    { id: 1, title: 'Bernapas Dalam', icon: Sun, duration: '5 menit', points: 10 },
    { id: 2, title: 'Menulis Jurnal', icon: Book, duration: '10 menit', points: 15 },
    { id: 3, title: 'Mendengar Musik', icon: Music, duration: '15 menit', points: 12 },
    { id: 4, title: 'Berbicara dengan Teman', icon: Users, duration: '20 menit', points: 20 },
    { id: 5, title: 'Meditasi Anak', icon: Brain, duration: '8 menit', points: 18 },
    { id: 6, title: 'Istirahat', icon: Moon, duration: '30 menit', points: 25 }
  ];

  const encouragements = [
    "Kamu hebat! 🌟",
    "Terus semangat ya! 💪",
    "Kamu sudah berusaha dengan baik! 🎉",
    "Perasaanmu valid dan penting! ❤️",
    "Kamu tidak sendirian! 🤝",
    "Setiap hari adalah kesempatan baru! ☀️"
  ];

  const handleMoodSelect = (mood) => {
    setCurrentMood(mood);
    setShowEncouragement(true);
    setTimeout(() => setShowEncouragement(false), 3000);
  };

  const handleActivityComplete = (activity) => {
    setCurrentActivity(activity);
    setPoints(prev => prev + activity.points);
    setShowEncouragement(true);
    setTimeout(() => {
      setShowEncouragement(false);
      setCurrentActivity(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: '#F9F7F7' }}>
      {/* Header */}
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 transform transition-all duration-500 hover:scale-105">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="text-4xl animate-pulse" style={{ color: '#3F72AF' }} />
            <h1 className="text-4xl font-bold" style={{ color: '#112D4E' }}>
              Ruang Hati Kecil
            </h1>
            <Heart className="text-4xl animate-pulse" style={{ color: '#3F72AF' }} />
          </div>
          <p className="text-lg" style={{ color: '#3F72AF' }}>
            Tempat aman untuk mengekspresikan perasaanmu
          </p>
        </div>

        {/* Points Display */}
        <div className="flex justify-center mb-8">
          <div 
            className="px-6 py-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: '#DBE2EF', color: '#112D4E' }}
          >
            <div className="flex items-center gap-2">
              <Star className="animate-spin" style={{ animationDuration: '3s' }} />
              <span className="font-bold text-lg">{points} Poin Kebahagiaan</span>
              <Award />
            </div>
          </div>
        </div>

        {/* Mood Tracker */}
        <div 
          className="rounded-3xl p-8 mb-8 shadow-xl transform transition-all duration-500 hover:shadow-2xl"
          style={{ backgroundColor: '#DBE2EF' }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: '#112D4E' }}>
            Bagaimana perasaanmu hari ini?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {moods.map((mood) => (
              <button
                key={mood.id}
                onClick={() => handleMoodSelect(mood)}
                className={`p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
                  currentMood === mood.id ? 'ring-4 ring-offset-2' : ''
                }`}
                style={{ 
                  backgroundColor: '#F9F7F7',
                  color: mood.color,
                  ringColor: currentMood === mood.id ? '#3F72AF' : 'transparent'
                }}
              >
                <div className="text-4xl mb-2 animate-bounce">{mood.emoji}</div>
                <div className="font-semibold">{mood.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div 
          className="rounded-3xl p-8 mb-8 shadow-xl"
          style={{ backgroundColor: '#DBE2EF' }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: '#112D4E' }}>
            Aktivitas untuk Hatimu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activities.map((activity) => {
              const IconComponent = activity.icon;
              return (
                <div
                  key={activity.id}
                  className="p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                  style={{ backgroundColor: '#F9F7F7' }}
                  onClick={() => handleActivityComplete(activity)}
                >
                  <div className="text-center">
                    <IconComponent 
                      size={48} 
                      className="mx-auto mb-3 animate-pulse" 
                      style={{ color: '#3F72AF' }} 
                    />
                    <h3 className="font-bold text-lg mb-2" style={{ color: '#112D4E' }}>
                      {activity.title}
                    </h3>
                    <p style={{ color: '#3F72AF' }}>{activity.duration}</p>
                    <div className="mt-3 flex items-center justify-center gap-1">
                      <Star size={16} style={{ color: '#3F72AF' }} />
                      <span className="text-sm font-semibold" style={{ color: '#112D4E' }}>
                        {activity.points} poin
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tips Section */}
        <div 
          className="rounded-3xl p-8 shadow-xl"
          style={{ backgroundColor: '#3F72AF' }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-white">
            💡 Tips Harian
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-2xl" style={{ backgroundColor: '#DBE2EF' }}>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#112D4E' }}>
                🌱 Ingatlah
              </h3>
              <p style={{ color: '#112D4E' }}>
                Setiap perasaan itu wajar dan penting. Kamu tidak perlu merasa malu dengan apa yang kamu rasakan.
              </p>
            </div>
            <div className="p-4 rounded-2xl" style={{ backgroundColor: '#DBE2EF' }}>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#112D4E' }}>
                🤗 Ceritakan
              </h3>
              <p style={{ color: '#112D4E' }}>
                Jangan ragu untuk bercerita kepada orang dewasa yang kamu percaya ketika merasa kewalahan.
              </p>
            </div>
          </div>
        </div>

        {/* Encouragement Modal */}
        {showEncouragement && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div 
              className="relative p-8 rounded-3xl shadow-2xl transform animate-bounce"
              style={{ backgroundColor: '#F9F7F7' }}
            >
              <div className="text-center">
                <Smile size={64} className="mx-auto mb-4 animate-spin" style={{ color: '#3F72AF' }} />
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#112D4E' }}>
                  {encouragements[Math.floor(Math.random() * encouragements.length)]}
                </h3>
                {currentActivity && (
                  <p style={{ color: '#3F72AF' }}>
                    +{currentActivity.points} poin untuk "{currentActivity.title}"
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentalHealthComponents;