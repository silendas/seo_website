import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import ReactGA from "react-ga4";

import Login from './components/Login';
import Home from './components/Home';
import Ruangan from './components/Ruangan';
import Dosen from './components/Dosen';
import Mahasiswa from './components/Mahasiswa';
import Matakuliah from './components/Matakuliah';
import MataKuliahDetail from './components/MataKuliahDetail';

// Komponen untuk mengirim data ke Google Analytics saat navigasi
const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null; // Tidak merender apapun
};

function App() {
  const isAuthenticated = () => {
    return localStorage.getItem('isAuthenticated') === 'true';
  };

  // Inisialisasi Google Analytics sekali
  useEffect(() => {
    ReactGA.initialize("G-JWD63W6XLR"); // Ganti dengan Measurement ID Anda
  }, []);

  return (
    <Router>
      {/* Komponen untuk melacak halaman yang dikunjungi */}
      <AnalyticsTracker />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={isAuthenticated() ? <Navigate to="/home" /> : <Navigate to="/login" />}
        />
        <Route
          path="/home"
          element={isAuthenticated() ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/ruangan"
          element={isAuthenticated() ? <Ruangan /> : <Navigate to="/login" />}
        />
        <Route
          path="/dosen"
          element={isAuthenticated() ? <Dosen /> : <Navigate to="/login" />}
        />
        <Route
          path="/mahasiswa"
          element={isAuthenticated() ? <Mahasiswa /> : <Navigate to="/login" />}
        />
        <Route
          path="/matakuliah"
          element={isAuthenticated() ? <Matakuliah /> : <Navigate to="/login" />}
        />
        <Route
          path="/matakuliah/:id"
          element={isAuthenticated() ? <MataKuliahDetail /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
