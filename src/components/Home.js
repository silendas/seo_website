import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Selamat Datang di Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-indigo-600 mb-4">Jadwal Hari Ini</h2>
            <ul className="space-y-3">
              <li>
                <p className="font-semibold">Keamanan Aplikasi Enterprise [ Enterpise Application Security ]</p>
                <p className="text-sm text-gray-600">10:00-12:30 Syafrial, S.Kom, M.M</p>
              </li>
              <li>
                <p className="font-semibold">Jaminan Kualitas Perangkat Lunak [ Software Quality Assurance ]</p>
                <p className="text-sm text-gray-600">14:00-16:30 Hidola, S.Kom, M.Kom</p>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-indigo-600 mb-4">Aktivitas Terakhir</h2>
            <ul className="space-y-3">
              <li>
                <p className="font-semibold">Anda mengupload file Tugas</p>
                <p className="text-sm text-gray-600">Desain Grafis [ Design Graphic ] @ 30/09/2024 15:09:56</p>
              </li>
              <li>
                <p className="font-semibold">Leny Tritanto N., S.Kom memposting Tugas</p>
                <p className="text-sm text-gray-600">Desain Grafis [ Design Graphic ] @ 30/09/2024 14:53:26</p>
              </li>
              {/* Tambahkan item aktivitas lainnya di sini */}
            </ul>
          </div>
        </div>
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-indigo-600 mb-4">Tugas Yang Harus Dikumpulkan</h2>
          <p className="text-gray-600">-- Tidak ada tugas --</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
