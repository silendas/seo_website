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

const initialRuangan = [
  { id: 1, nama: 'R301', kapasitas: 30 },
  { id: 2, nama: 'R302', kapasitas: 25 },
  { id: 3, nama: 'R303', kapasitas: 35 },
];

function Ruangan() {
  const [ruangan, setRuangan] = useState(initialRuangan);
  const [newRuangan, setNewRuangan] = useState({ nama: '', kapasitas: '' });
  const [editingRuangan, setEditingRuangan] = useState(null);

  const addRuangan = () => {
    if (newRuangan.nama && newRuangan.kapasitas) {
      setRuangan([...ruangan, { ...newRuangan, id: Date.now() }]);
      setNewRuangan({ nama: '', kapasitas: '' });
    }
  };

  const deleteRuangan = (id) => {
    setRuangan(ruangan.filter(r => r.id !== id));
  };

  const startEditing = (r) => {
    setEditingRuangan(r);
  };

  const saveEdit = () => {
    setRuangan(ruangan.map(r => 
      r.id === editingRuangan.id ? editingRuangan : r
    ));
    setEditingRuangan(null);
  };

  return (
    <Layout>
      <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-700">Manajemen Ruangan</h2>

        {/* Form Tambah Ruangan */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">Tambah Ruangan Baru</h3>
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Nama Ruangan"
                value={newRuangan.nama}
                onChange={(e) => setNewRuangan({...newRuangan, nama: e.target.value})}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <input
                type="number"
                placeholder="Kapasitas"
                value={newRuangan.kapasitas}
                onChange={(e) => setNewRuangan({...newRuangan, kapasitas: e.target.value})}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          <button onClick={addRuangan} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
            Tambah Ruangan
          </button>
        </div>

        {/* Daftar Ruangan */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">Daftar Ruangan</h3>
          <ul className="space-y-4">
            {ruangan.map(r => (
              <li key={r.id} className="bg-gray-50 p-4 rounded-md shadow">
                {editingRuangan && editingRuangan.id === r.id ? (
                  <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/3 px-2 mb-2 md:mb-0">
                      <input
                        type="text"
                        value={editingRuangan.nama}
                        onChange={(e) => setEditingRuangan({...editingRuangan, nama: e.target.value})}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="w-full md:w-1/3 px-2 mb-2 md:mb-0">
                      <input
                        type="number"
                        value={editingRuangan.kapasitas}
                        onChange={(e) => setEditingRuangan({...editingRuangan, kapasitas: e.target.value})}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="w-full md:w-1/3 px-2 flex justify-end">
                      <button onClick={saveEdit} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">
                        Simpan
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between items-center">
                    <span className="text-lg">{r.nama} - Kapasitas: {r.kapasitas}</span>
                    <div>
                      <button onClick={() => startEditing(r)} className="bg-yellow-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-yellow-600 transition duration-300">
                        Edit
                      </button>
                      <button onClick={() => deleteRuangan(r.id)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300">
                        Hapus
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Ruangan;