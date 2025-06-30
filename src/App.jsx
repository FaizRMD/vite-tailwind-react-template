import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './layouts/login';
import Selfmend from './layouts/selfmend';
import About from './layouts/about';
import Meditasi from './layouts/Meditasi';
import Konseling from './layouts/konseling';
import KonselingOffline from './layouts/KonselingOffline';
import SelfMendKids from './layouts/SelfMendKids';
import Contact from './layouts/Contact';
import ProfilePage from './layouts/ProfilePage';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<PrivateRoute><Selfmend /></PrivateRoute>} />
      <Route path="/selfmend" element={<PrivateRoute><Selfmend /></PrivateRoute>} />
      <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
      <Route path="/meditasi" element={<PrivateRoute><Meditasi /></PrivateRoute>} />
      <Route path="/konseling" element={<PrivateRoute><Konseling /></PrivateRoute>} />
      <Route path="/konselingoffline" element={<PrivateRoute><KonselingOffline /></PrivateRoute>} />
      <Route path="/selfmendkids" element={<PrivateRoute><SelfMendKids /></PrivateRoute>} />
      <Route path="/Contact" element={<PrivateRoute><Contact/></PrivateRoute>} />
      <Route path="/ProfilePage" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
    </Routes>
  );
}

export default App;
