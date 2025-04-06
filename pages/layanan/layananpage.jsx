import Navbar from "@/components/navbar";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const steps = [
  {
    title: "Appointment / Atur Jadwal Survei",
    description:
      "Langkah pertama adalah mengatur jadwal survei untuk memahami kebutuhan dan konsep desain yang diinginkan.",
  },
  {
    title: "Survey Lokasi Dan Diskusi",
    description:
      "Tim kami akan melakukan survei lokasi untuk mengetahui kondisi lingkungan dan faktor yang perlu dipertimbangkan dalam desain dan pembangunan.",
  },
  {
    title: "Desain Gambar Arsitektur 2D & 3D",
    description:
      "Pembuatan desain 2D & 3D sebagai gambaran awal dari konsep yang telah dibahas sebelumnya.",
  },
  {
    title: "Perhitungan Rencana Anggaran Biaya (RAB)",
    description:
      "Menghitung perkiraan biaya pembangunan berdasarkan desain yang telah dibuat.",
  },
  {
    title: "Pelaksanaan Pembangunan",
    description:
      "Proses konstruksi dimulai sesuai dengan perencanaan dan timeline yang telah disepakati.",
  },
  {
    title: "Serah Terima Bangunan",
    description:
      "Setelah proses pembangunan selesai, kami akan melakukan serah terima proyek kepada klien.",
  },
  {
    title: "Masa Pemeliharaan",
    description:
      "Kami memberikan layanan pemeliharaan selama 2 bulan setelah serah terima untuk memastikan hasil konstruksi tetap optimal.",
  },
];

export default function LayananPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Navbar />

      <section
        className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/header-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative text-center px-6">
          <h2 className="text-5xl font-bold">Portfolio Kami</h2>
          <p className="text-lg mt-2">
            Berbagai hasil karya terbaik kami dalam desain dan konstruksi.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
          <div className="w-full lg:w-1/2">
            <img
              src="/architecture.jpg"
              alt="Desain Architecture 2D & 3D"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Desain Architecture 2D & 3D
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Perencanaan desain arsitektur di awal sangatlah penting untuk
              memvisualisasikan bentuk bangunan Anda serta menyesuaikan dengan
              biaya yang dimiliki. Perencanaan ini akan diproyeksikan dalam
              bentuk gambar 2D & 3D, sehingga keseluruhan rancangan dapat
              disesuaikan dengan selera dan kebutuhan Anda.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Desain Architecture 2D & 3D
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Perencanaan desain arsitektur di awal sangatlah penting untuk
              memvisualisasikan bentuk bangunan Anda serta menyesuaikan dengan
              biaya yang dimiliki. Perencanaan ini akan diproyeksikan dalam
              bentuk gambar 2D & 3D, sehingga keseluruhan rancangan dapat
              disesuaikan dengan selera dan kebutuhan Anda.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="/architecture.jpg"
              alt="Desain Architecture 2D & 3D"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="w-full text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Langkah Kerja Kami
          </h2>
        </div>
        <div className="max-w-3xl mx-auto mt-10 my-10">
          {steps.map((step, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full flex justify-between items-center p-4 text-left font-medium text-lg 
              ${
                openIndex === index
                  ? "bg-[#b29568] text-white"
                  : "bg-white text-gray-900"
              } transition-all`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center bg-[#b29568] text-white rounded-full">
                    {index + 1}
                  </span>
                  {step.title}
                </div>
                <ChevronDown
                  className={`w-5 h-5 transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-700 bg-gray-100">
                  {step.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
