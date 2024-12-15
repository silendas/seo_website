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

const initialDosens = [
  { id: 1, name: 'Dr. Budi Santoso', expertise: 'Artificial Intelligence' },
  { id: 2, name: 'Prof. Siti Rahayu', expertise: 'Database Systems' },
  { id: 3, name: 'Ir. Ahmad Hidayat', expertise: 'Software Engineering' },
];

function Dosen() {
  const [dosens, setDosens] = useState(initialDosens);
  const [deletedDosens, setDeletedDosens] = useState([]);
  const [editingDosen, setEditingDosen] = useState(null);
  const [newDosen, setNewDosen] = useState({ name: '', expertise: '' });

  const addDosen = () => {
    if (newDosen.name && newDosen.expertise) {
      setDosens([...dosens, { ...newDosen, id: Date.now() }]);
      setNewDosen({ name: '', expertise: '' });
    }
  };

  const deleteDosen = (id) => {
    const dosenToDelete = dosens.find(dosen => dosen.id === id);
    setDeletedDosens([...deletedDosens, dosenToDelete]);
    setDosens(dosens.filter(dosen => dosen.id !== id));
  };

  const restoreDosen = (id) => {
    const dosenToRestore = deletedDosens.find(dosen => dosen.id === id);
    setDosens([...dosens, dosenToRestore]);
    setDeletedDosens(deletedDosens.filter(dosen => dosen.id !== id));
  };

  const startEditing = (dosen) => {
    setEditingDosen(dosen);
  };

  const saveEdit = () => {
    setDosens(dosens.map(dosen => 
      dosen.id === editingDosen.id ? editingDosen : dosen
    ));
    setEditingDosen(null);
  };

  return (
    <Layout>
      <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-700">Manajemen Dosen</h2>

        {/* Form Tambah Dosen */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">Tambah Dosen Baru</h3>
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Nama Dosen"
                value={newDosen.name}
                onChange={(e) => setNewDosen({...newDosen, name: e.target.value})}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <input
                type="text"
                placeholder="Keahlian"
                value={newDosen.expertise}
                onChange={(e) => setNewDosen({...newDosen, expertise: e.target.value})}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          <button onClick={addDosen} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
            Tambah Dosen
          </button>
        </div>

        {/* Daftar Dosen Aktif */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">Daftar Dosen Aktif</h3>
          <ul className="space-y-4">
            {dosens.map(dosen => (
              <li key={dosen.id} className="bg-gray-50 p-4 rounded-md shadow">
                {editingDosen && editingDosen.id === dosen.id ? (
                  <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/3 px-2 mb-2 md:mb-0">
                      <input
                        type="text"
                        value={editingDosen.name}
                        onChange={(e) => setEditingDosen({...editingDosen, name: e.target.value})}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="w-full md:w-1/3 px-2 mb-2 md:mb-0">
                      <input
                        type="text"
                        value={editingDosen.expertise}
                        onChange={(e) => setEditingDosen({...editingDosen, expertise: e.target.value})}
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
                    <span className="text-lg">{dosen.name} - <span className="text-gray-600">{dosen.expertise}</span></span>
                    <div>
                      <button onClick={() => startEditing(dosen)} className="bg-yellow-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-yellow-600 transition duration-300">
                        Edit
                      </button>
                      <button onClick={() => deleteDosen(dosen.id)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300">
                        Hapus
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Daftar Dosen Terhapus */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">Daftar Dosen Terhapus</h3>
          <ul className="space-y-4">
            {deletedDosens.map(dosen => (
              <li key={dosen.id} className="bg-gray-100 p-4 rounded-md flex justify-between items-center">
                <span className="text-lg">{dosen.name} - <span className="text-gray-600">{dosen.expertise}</span></span>
                <button onClick={() => restoreDosen(dosen.id)} className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition duration-300">
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

export default Dosen;