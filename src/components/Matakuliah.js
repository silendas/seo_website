import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// Komponen Layout
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

// Daftar mata kuliah
const courses = [
  { name: "Proposal dan Seminar Proyek", englishName: "Project Proposal and Seminar" },
  { name: "Tanggung Jawab Sosial", englishName: "Social Responsibility" },
  { name: "Perangkat Software untuk Web", englishName: "Web Software Tool" },
  { name: "Robotika", englishName: "Robotics" },
  { name: "Jaminan Kualitas Perangkat Lunak", englishName: "Software Quality Assurance" },
  { name: "Keamanan Aplikasi Enterprise", englishName: "Enterprise Application Security" },
  { name: "Desain Grafis", englishName: "Design Graphic" },
];

// Komponen MataKuliah
function MataKuliah() {
  const [academicYear, setAcademicYear] = useState('2024/2025');
  const [semester, setSemester] = useState('Ganjil');

  const handleFilter = () => {
    // Implementasi logika filter di sini
    console.log('Filtering with:', academicYear, semester);
  };

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">List Mata Kuliah</h2>
        
        {/* Filter Section */}
        <div className="mb-6 space-y-4">
          <div>
            <label htmlFor="academicYear" className="block text-sm font-medium text-gray-700">Tahun Akademik</label>
            <input
              type="text"
              id="academicYear"
              value={academicYear}
              onChange={(e) => setAcademicYear(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="semester" className="block text-sm font-medium text-gray-700">Semester</label>
            <select
              id="semester"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="Ganjil">Ganjil</option>
              <option value="Genap">Genap</option>
            </select>
          </div>
          <button
            onClick={handleFilter}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Filter
          </button>
        </div>

        {/* Existing course list */}
        <div className="space-y-4">
          {courses.map((course, index) => (
            <div key={index} className="flex items-center justify-between border-b pb-2">
              <div>
                <span className="font-medium">{course.name}</span>
                <span className="text-gray-600 italic"> [ {course.englishName} ]</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default MataKuliah;