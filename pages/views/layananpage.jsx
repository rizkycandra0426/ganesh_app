import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
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
          <h2 className="text-5xl font-bold">Layanan Kami</h2>
          <p className="text-lg mt-2">Kami menghadirkan suatu .</p>
        </div>
        {/* Shape Divider dengan Gradient */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[80px]"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1000 120"
          >
            <path
              d="M321.39 56.39c58.53 10.51 117.67 10.48 
        176.17-.11 59.76-10.75 119.44-26.19 179.19-26.18 
        60.06.01 120.04 15.74 180.09 24.92 63.7 9.78 
        127.63 8.13 191.17-1.64V0H0v27.35c69.1 9.65 
        138.53 18.4 207.8 27.01 38.3 4.53 76.6 
        9.01 114.8 2.03z"
              fill="#f9fafb" // Warna bisa disesuaikan
              transform="scale(1 -1) translate(0 -120)" // Membalik shape ke bawah
            />
          </svg>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
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
              Mau bangun rumah atau gedung tapi bingung mulai dari mana? Tenang,
              kita bantu mulai dari desainnya dulu! Dengan gambar 2D & 3D, kamu
              bisa lihat dulu bentuk bangunanmu secara jelas sebelum dibangun.
              Jadi nggak cuma asal bangun, tapi sesuai selera dan budget kamu
              juga. Yuk, konsultasi dulu!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Desain Interior 2D & 3D
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Pengen interior rumah atau kantor yang nyaman dan estetik? Kita
              siap bantu wujudkan lewat desain 2D & 3D yang detail dan
              realistis. Kamu bisa lihat dulu hasil akhirnya sebelum mulai
              renovasi. Pokoknya desainnya kita sesuaikan banget sama gaya dan
              kebutuhan kamu. Yuk ngobrol bareng tim kita!
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
              Jasa Kontraktor
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nggak perlu pusing cari tukang sana-sini. Kita punya tim
              kontraktor profesional yang siap bantu dari awal sampai akhir,
              mulai dari bangun rumah baru sampai proyek besar. Prosesnya
              transparan, hasilnya pun rapi dan berkualitas. Pengen bangun tanpa
              ribet? Langsung hubungi kita aja!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Renovasi</h2>
            <p className="text-gray-600 leading-relaxed">
              Rumah mulai terasa sempit, rusak, atau butuh suasana baru?
              Renovasi aja! Kita bantu mulai dari perencanaan sampai pengerjaan.
              Kamu tinggal cerita kebutuhan dan impianmu, tim kami yang
              eksekusi. Hasilnya dijamin bikin kamu nyaman lagi di rumah
              sendiri!
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

      <section id="#layanan" className=" mih-h-screen py-12 bg-white">
        <div className=" w-full text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Langkah Kerja Kami
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden border border-gray-200 shadow-sm"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full flex justify-between items-center px-4 py-3 text-left font-medium text-base 
            ${
              openIndex === index
                ? "bg-red-500 text-white"
                : "bg-white text-gray-900"
            } transition-all`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 text-sm flex items-center justify-center bg-red-50 text-red-300 rounded-full">
                    {index + 1}
                  </span>
                  {step.title}
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-4 py-3 text-sm text-gray-700 bg-gray-50">
                  {step.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
