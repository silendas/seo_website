import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Universitas Binaniaga Indonesia. All rights reserved.</p>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/path/to/logo.png" alt="Logo" className="h-8 w-auto mr-2" />
            <h1 className="text-xl font-bold">e-Learning</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:text-gray-300">Home</a></li>
              <li><a href="/matakuliah" className="hover:text-gray-300">Mata Kuliah</a></li>
              <li><a href="/dosen" className="hover:text-gray-300">Dosen</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;