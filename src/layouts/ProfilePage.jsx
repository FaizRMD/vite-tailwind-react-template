import React, { useState, useEffect } from "react";
import { Camera, Edit3, Save, X, User, Mail, Phone, Calendar, MapPin, Shield, Download, Eye, Clock, Check, Settings, Star, Award, Zap, Heart, MessageCircle, Share2, Bell, Lock } from "lucide-react";
import Navbar from "../components/Navbar";


const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+62 812 3456 7890",
    gender: "Laki-laki",
    birthDate: "1995-03-10",
    address: "Jl. Mawar No. 123, Bandung",
    bio: "Software Developer dengan passion di bidang teknologi dan inovasi digital. Suka coding, desain, dan menciptakan solusi teknologi yang bermanfaat untuk banyak orang."
  });
  const [editData, setEditData] = useState({...profileData});

  // Load saved profile image on component mount
  useEffect(() => {
    const savedImage = sessionStorage.getItem('profileImage');
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target.result;
        setProfileImage(imageData);
        sessionStorage.setItem('profileImage', imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditToggle = () => {
    if (isEditing) {
      setEditData({...profileData});
    }
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setProfileData({...editData});
    setIsEditing(false);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleInputChange = (field, value) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9F7F7] via-[#DBE2EF] to-[#3F72AF] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#3F72AF]/30 to-[#112D4E]/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#112D4E]/30 to-[#3F72AF]/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-[#DBE2EF]/40 to-[#F9F7F7]/30 rounded-full mix-blend-multiply filter blur-2xl animate-bounce delay-500"></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white/20 rounded-full animate-ping`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Success Toast */}
      {showSuccessMessage && (
        <div className="fixed top-8 right-8 z-50 animate-in slide-in-from-right duration-500">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center space-x-3 backdrop-blur-lg">
            <div className="p-1 bg-white/20 rounded-full">
              <Check className="w-5 h-5" />
            </div>
            <span className="font-semibold">Profile berhasil diperbarui!</span>
          </div>
        </div>
      )}

      <div className="relative z-10 p-4 md:p-8">
        <div className="max-w-7xl mx-auto space-y-8">

          {/* Navbar */}
          <Navbar />
          
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            {/* Background with animated gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#112D4E] via-[#3F72AF] to-[#112D4E] animate-gradient-x"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            
            {/* Animated mesh gradient overlay */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
            </div>

            {/* Content */}
            <div className="relative px-8 md:px-16 py-12 md:py-20">
              <div className="flex flex-col lg:flex-row items-center lg:items-end space-y-8 lg:space-y-0 lg:space-x-12">
                
                {/* Profile Image Section */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-6 border-white/30 shadow-2xl backdrop-blur-sm overflow-hidden transform hover:scale-105 transition-all duration-500">
                    {profileImage ? (
                      <img 
                        src={profileImage} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#DBE2EF] to-[#3F72AF] flex items-center justify-center">
                        <User className="w-24 h-24 text-white/80" />
                      </div>
                    )}
                    
                    {/* Upload Overlay */}
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer backdrop-blur-sm">
                      <label className="cursor-pointer text-white text-center transform hover:scale-110 transition-transform">
                        <div className="p-4 bg-white/20 rounded-full mb-3 backdrop-blur-sm">
                          <Camera className="w-8 h-8" />
                        </div>
                        <span className="text-sm font-semibold">Change Photo</span>
                        <input 
                          type="file" 
                          accept="image/*" 
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                  
                  {/* Status Indicators */}
                  <div className="absolute -bottom-2 -right-2 flex space-x-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg animate-pulse flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* User Info */}
                <div className="text-center lg:text-left flex-1 text-white">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h1 className="text-5xl md:text-6xl font-bold animate-in slide-in-from-bottom duration-700 bg-gradient-to-r from-white to-[#DBE2EF] bg-clip-text text-transparent">
                        {profileData.name}
                      </h1>
                      <p className="text-xl md:text-2xl text-[#DBE2EF] animate-in slide-in-from-bottom duration-700 delay-200">
                        {profileData.email}
                      </p>
                    </div>
                    
                    <p className="text-lg text-white/80 max-w-2xl leading-relaxed animate-in slide-in-from-bottom duration-700 delay-300">
                      {profileData.bio}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3 animate-in slide-in-from-bottom duration-700 delay-400">
                      {[
                        { text: "Developer", icon: Zap, color: "from-blue-500 to-cyan-500" },
                        { text: "Active", icon: Heart, color: "from-green-500 to-emerald-500" },
                        { text: "Verified", icon: Award, color: "from-purple-500 to-pink-500" },
                        { text: "Premium", icon: Star, color: "from-yellow-500 to-orange-500" }
                      ].map((tag, index) => {
                        const Icon = tag.icon;
                        return (
                          <div key={index} className={`px-4 py-2 bg-gradient-to-r ${tag.color} rounded-full text-white text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2`}>
                            <Icon className="w-4 h-4" />
                            <span>{tag.text}</span>
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4 animate-in slide-in-from-bottom duration-700 delay-500">
                      <button className="px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 border border-white/30">
                        <MessageCircle className="w-5 h-5" />
                        <span>Message</span>
                      </button>
                      <button className="px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 border border-white/30">
                        <Share2 className="w-5 h-5" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 p-2">
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'personal', name: 'Personal Info', icon: User },
                { id: 'settings', name: 'Settings', icon: Settings },
                { id: 'activity', name: 'Activity', icon: Eye },
                { id: 'security', name: 'Security', icon: Shield }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-[#3F72AF] to-[#112D4E] text-white shadow-lg transform scale-105'
                        : 'text-[#112D4E] hover:bg-[#DBE2EF]/50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
            
            {/* Main Content Area */}
            <div className="xl:col-span-3">
              {activeTab === 'personal' && (
                <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 p-8 md:p-12 transform hover:scale-[1.01] transition-all duration-500">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold text-[#112D4E] flex items-center">
                      <div className="p-3 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-xl mr-4 shadow-lg">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      Personal Information
                    </h2>
                    <div className="flex space-x-3">
                      {isEditing && (
                        <button
                          onClick={handleEditToggle}
                          className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                        >
                          <X className="w-5 h-5" />
                          <span>Cancel</span>
                        </button>
                      )}
                      <button
                        onClick={isEditing ? handleSave : handleEditToggle}
                        className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 ${
                          isEditing 
                            ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white' 
                            : 'bg-gradient-to-r from-[#3F72AF] to-[#112D4E] hover:from-[#112D4E] hover:to-[#3F72AF] text-white'
                        }`}
                      >
                        {isEditing ? <Save className="w-5 h-5" /> : <Edit3 className="w-5 h-5" />}
                        <span>{isEditing ? 'Save Changes' : 'Edit Profile'}</span>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { label: "Full Name", field: "name", value: profileData.name, icon: User, type: "text" },
                      { label: "Email Address", field: "email", value: profileData.email, icon: Mail, type: "email" },
                      { label: "Phone Number", field: "phone", value: profileData.phone, icon: Phone, type: "tel" },
                      { label: "Gender", field: "gender", value: profileData.gender, icon: User, type: "text" },
                      { label: "Birth Date", field: "birthDate", value: profileData.birthDate, icon: Calendar, type: "date" },
                    ].map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="group relative">
                          <div className="absolute -inset-1 bg-gradient-to-r from-[#3F72AF]/20 to-[#112D4E]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#F9F7F7] to-[#DBE2EF] hover:from-[#DBE2EF] hover:to-[#3F72AF]/10 transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
                            <div className="flex items-start space-x-4">
                              <div className="p-3 bg-white/80 rounded-xl shadow-md group-hover:bg-gradient-to-r group-hover:from-[#3F72AF] group-hover:to-[#112D4E] group-hover:text-white transition-all duration-300">
                                <Icon className="w-6 h-6" />
                              </div>
                              <div className="flex-1">
                                <label className="text-sm font-semibold text-[#112D4E]/70 group-hover:text-[#112D4E] transition-colors mb-2 block">
                                  {item.label}
                                </label>
                                {isEditing ? (
                                  <input
                                    type={item.type}
                                    value={editData[item.field]}
                                    onChange={(e) => handleInputChange(item.field, e.target.value)}
                                    className="w-full p-3 border-2 border-[#DBE2EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3F72AF] focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                                  />
                                ) : (
                                  <p className="text-[#112D4E] font-bold text-lg">{item.value}</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    
                    {/* Address Field */}
                    <div className="md:col-span-2 group relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#3F72AF]/20 to-[#112D4E]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#F9F7F7] to-[#DBE2EF] hover:from-[#DBE2EF] hover:to-[#3F72AF]/10 transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-white/80 rounded-xl shadow-md group-hover:bg-gradient-to-r group-hover:from-[#3F72AF] group-hover:to-[#112D4E] group-hover:text-white transition-all duration-300">
                            <MapPin className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <label className="text-sm font-semibold text-[#112D4E]/70 group-hover:text-[#112D4E] transition-colors mb-2 block">
                              Address
                            </label>
                            {isEditing ? (
                              <textarea
                                value={editData.address}
                                onChange={(e) => handleInputChange('address', e.target.value)}
                                className="w-full p-3 border-2 border-[#DBE2EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3F72AF] focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
                                rows="2"
                              />
                            ) : (
                              <p className="text-[#112D4E] font-bold text-lg">{profileData.address}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bio Field */}
                    <div className="md:col-span-2 group relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#3F72AF]/20 to-[#112D4E]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#F9F7F7] to-[#DBE2EF] hover:from-[#DBE2EF] hover:to-[#3F72AF]/10 transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-white/80 rounded-xl shadow-md group-hover:bg-gradient-to-r group-hover:from-[#3F72AF] group-hover:to-[#112D4E] group-hover:text-white transition-all duration-300">
                            <Edit3 className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <label className="text-sm font-semibold text-[#112D4E]/70 group-hover:text-[#112D4E] transition-colors mb-2 block">
                              Bio
                            </label>
                            {isEditing ? (
                              <textarea
                                value={editData.bio}
                                onChange={(e) => handleInputChange('bio', e.target.value)}
                                className="w-full p-3 border-2 border-[#DBE2EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3F72AF] focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
                                rows="3"
                              />
                            ) : (
                              <p className="text-[#112D4E] font-bold text-lg">{profileData.bio}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 p-6 transform hover:scale-[1.02] transition-all duration-500">
                <h3 className="text-2xl font-bold text-[#112D4E] mb-6 flex items-center">
                  <div className="p-2 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-xl mr-3 shadow-lg">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  Quick Actions
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "Security Settings", icon: Lock, color: "from-red-500 to-pink-600" },
                    { name: "Notifications", icon: Bell, color: "from-blue-500 to-cyan-600" },
                    { name: "Privacy Settings", icon: Shield, color: "from-green-500 to-emerald-600" },
                    { name: "Download Data", icon: Download, color: "from-purple-500 to-violet-600" }
                  ].map((action, index) => {
                    const Icon = action.icon;
                    return (
                      <button
                        key={index}
                        className="w-full p-4 text-left rounded-2xl bg-gradient-to-br from-[#F9F7F7] to-[#DBE2EF] hover:from-[#DBE2EF] hover:to-[#3F72AF]/20 transition-all duration-300 group transform hover:scale-105 hover:shadow-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 bg-gradient-to-r ${action.color} text-white rounded-xl shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="font-semibold text-[#112D4E] group-hover:text-[#3F72AF] transition-colors duration-300">
                            {action.name}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Account Stats */}
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 p-6 transform hover:scale-[1.02] transition-all duration-500">
                <h3 className="text-2xl font-bold text-[#112D4E] mb-6 flex items-center">
                  <div className="p-2 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-xl mr-3 shadow-lg">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  Account Stats
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Member Since", value: "2023", icon: Calendar, color: "from-blue-500 to-cyan-600" },
                    { label: "Profile Views", value: "1,234", icon: Eye, color: "from-green-500 to-emerald-600" },
                    { label: "Last Active", value: "Now", icon: Clock, color: "from-purple-500 to-violet-600" },
                    { label: "Achievements", value: "12", icon: Award, color: "from-yellow-500 to-orange-600" }
                  ].map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#3F72AF]/20 to-[#112D4E]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative flex items-center justify-between p-4 bg-gradient-to-br from-[#F9F7F7] to-[#DBE2EF] rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 bg-gradient-to-r ${stat.color} text-white rounded-lg shadow-md group-hover:shadow-lg transform group-hover:scale-110 transition-all duration-300`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-[#112D4E]/70 font-medium">{stat.label}</span>
                          </div>
                          <span className="font-bold text-[#112D4E] text-xl">{stat.value}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-3xl shadow-2xl p-6 text-white transform hover:scale-[1.02] transition-all duration-500">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                    <Award className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold">Premium Member</h3>
                  <p className="text-white/80 text-sm">Unlock exclusive features and get priority support!</p>
                  <button className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm border border-white/30">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;