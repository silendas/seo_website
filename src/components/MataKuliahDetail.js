import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from './Layout';

// Asumsikan kita memiliki data detail mata kuliah
const courseDetails = {
  1: {
    name: "Proposal dan Seminar Proyek",
    englishName: "Project Proposal and Seminar",
    ruangan: "R301",
    pertemuan: [
      {
        id: 1,
        judul: "Pertemuan 1",
        materi: [
          { nama: "Project_Proposal_and_Seminar.pdf", tipe: "materi" },
          { nama: "Topik_Skripsi_2024_A.pdf", tipe: "materi" },
          { nama: "Tugas 1: mencari jurnal dan permasalahan", tipe: "tugas" }
        ]
      },
      {
        id: 2,
        judul: "Pertemuan 2",
        materi: [
          { nama: "Topik_Penelitian_Pengembangan_kelas_A-2024.docx", tipe: "materi" },
          { nama: "Tugas 2", tipe: "tugas" }
        ]
      },
      {
        id: 3,
        judul: "Pertemuan 3",
        materi: []
      }
    ]
  },
  // ... tambahkan detail untuk mata kuliah lainnya
};

function MataKuliahDetail() {
  const { id } = useParams();
  const course = courseDetails[id];

  if (!course) return <div>Mata kuliah tidak ditemukan</div>;

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">{course.name}</h2>
        <h3 className="text-xl text-gray-600 mb-6">{course.englishName}</h3>
        <p className="text-lg mb-8">Ruangan: {course.ruangan}</p>

        {course.pertemuan.map((pertemuan) => (
          <div key={pertemuan.id} className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4">{pertemuan.judul}</h4>
            <ul className="space-y-2">
              {pertemuan.materi.map((item, index) => (
                <li key={index} className="flex items-center">
                  {item.tipe === 'materi' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                  )}
                  {item.nama}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default MataKuliahDetail;