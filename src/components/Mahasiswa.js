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
const initialMahasiswas = [
  { id: 1, nama: 'Budi Santoso', nim: '12345', prodi: 'Informatika', semester: 3 },
  { id: 2, nama: 'Ani Wijaya', nim: '23456', prodi: 'Sistem Informasi', semester: 5 },
  { id: 3, nama: 'Citra Dewi', nim: '34567', prodi: 'Teknik Komputer', semester: 1 },
];

function Mahasiswa() {
  const [mahasiswas, setMahasiswas] = useState(initialMahasiswas);
  const [deletedMahasiswas, setDeletedMahasiswas] = useState([]);
  const [editingMahasiswa, setEditingMahasiswa] = useState(null);
  const [newMahasiswa, setNewMahasiswa] = useState({ nama: '', nim: '', prodi: '', semester: '' });

  const addMahasiswa = () => {
    if (newMahasiswa.nama && newMahasiswa.nim && newMahasiswa.prodi && newMahasiswa.semester) {
      setMahasiswas([...mahasiswas, { ...newMahasiswa, id: Date.now() }]);
      setNewMahasiswa({ nama: '', nim: '', prodi: '', semester: '' });
    }
  };

  const deleteMahasiswa = (id) => {
    const mahasiswaToDelete = mahasiswas.find(mahasiswa => mahasiswa.id === id);
    setDeletedMahasiswas([...deletedMahasiswas, mahasiswaToDelete]);
    setMahasiswas(mahasiswas.filter(mahasiswa => mahasiswa.id !== id));
  };

  const restoreMahasiswa = (id) => {
    const mahasiswaToRestore = deletedMahasiswas.find(mahasiswa => mahasiswa.id === id);
    setMahasiswas([...mahasiswas, mahasiswaToRestore]);
    setDeletedMahasiswas(deletedMahasiswas.filter(mahasiswa => mahasiswa.id !== id));
  };

  const startEditing = (mahasiswa) => {
    setEditingMahasiswa(mahasiswa);
  };

  const saveEdit = () => {
    setMahasiswas(mahasiswas.map(mahasiswa => 
      mahasiswa.id === editingMahasiswa.id ? editingMahasiswa : mahasiswa
    ));
    setEditingMahasiswa(null);
  };

  return (
    <Layout>
      <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-700">Manajemen Mahasiswa</h2>

        {/* Form Tambah Mahasiswa */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">Tambah Mahasiswa Baru</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Nama Mahasiswa"
              value={newMahasiswa.nama}
              onChange={(e) => setNewMahasiswa({...newMahasiswa, nama: e.target.value})}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="NIM"
              value={newMahasiswa.nim}
              onChange={(e) => setNewMahasiswa({...newMahasiswa, nim: e.target.value})}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Program Studi"
              value={newMahasiswa.prodi}
              onChange={(e) => setNewMahasiswa({...newMahasiswa, prodi: e.target.value})}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="number"
              placeholder="Semester"
              value={newMahasiswa.semester}
              onChange={(e) => setNewMahasiswa({...newMahasiswa, semester: e.target.value})}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button onClick={addMahasiswa} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
            Tambah Mahasiswa
          </button>
        </div>

        {/* Daftar Mahasiswa Aktif */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">Daftar Mahasiswa Aktif</h3>
          <ul className="space-y-4">
            {mahasiswas.map(mahasiswa => (
              <li key={mahasiswa.id} className="bg-gray-50 p-4 rounded-md shadow">
                {editingMahasiswa && editingMahasiswa.id === mahasiswa.id ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      value={editingMahasiswa.nama}
                      onChange={(e) => setEditingMahasiswa({...editingMahasiswa, nama: e.target.value})}
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                      type="text"
                      value={editingMahasiswa.nim}
                      onChange={(e) => setEditingMahasiswa({...editingMahasiswa, nim: e.target.value})}
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                      type="text"
                      value={editingMahasiswa.prodi}
                      onChange={(e) => setEditingMahasiswa({...editingMahasiswa, prodi: e.target.value})}
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                      type="number"
                      value={editingMahasiswa.semester}
                      onChange={(e) => setEditingMahasiswa({...editingMahasiswa, semester: e.target.value})}
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button onClick={saveEdit} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">
                      Simpan
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-lg font-semibold">{mahasiswa.nama}</span>
                      <p className="text-gray-600">NIM: {mahasiswa.nim} | Prodi: {mahasiswa.prodi} | Semester: {mahasiswa.semester}</p>
                    </div>
                    <div>
                      <button onClick={() => startEditing(mahasiswa)} className="bg-yellow-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-yellow-600 transition duration-300">
                        Edit
                      </button>
                      <button onClick={() => deleteMahasiswa(mahasiswa.id)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300">
                        Hapus
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Daftar Mahasiswa Terhapus */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">Daftar Mahasiswa Terhapus</h3>
          <ul className="space-y-4">
            {deletedMahasiswas.map(mahasiswa => (
              <li key={mahasiswa.id} className="bg-gray-100 p-4 rounded-md flex justify-between items-center">
                <div>
                  <span className="text-lg font-semibold">{mahasiswa.nama}</span>
                  <p className="text-gray-600">NIM: {mahasiswa.nim} | Prodi: {mahasiswa.prodi} | Semester: {mahasiswa.semester}</p>
                </div>
                <button onClick={() => restoreMahasiswa(mahasiswa.id)} className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition duration-300">
                  Pulihkan
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Mahasiswa;