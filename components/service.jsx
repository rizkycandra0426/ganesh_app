import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Interior Design",
    description: "Desain interior profesional untuk hunian dan komersial",
    image: "/interior.jpg",
    services: [
      "Desain ruang tamu, kamar tidur, dapur",
      "Pemilihan material dan furnitur",
      "Konsultasi warna dan pencahayaan",
      "3D rendering desain"
    ],
    benefits: [
      "Ruang lebih fungsional dan estetik",
      "Solusi penyimpanan yang efisien",
      "Nilai properti meningkat",
      "Kenyamanan penghuni terjamin"
    ],
    process: [
      "Konsultasi kebutuhan",
      "Survei lokasi",
      "Penyusunan konsep",
      "Presentasi desain",
      "Implementasi"
    ],
    tags: ["Minimalis", "Modern", "Klasik", "Industrial"]
  },
  {
    title: "Jasa Kontraktor",
    description: "Pembangunan dan renovasi properti profesional",
    image: "/kontraktor.jpg",
    services: [
      "Renovasi rumah dan bangunan",
      "Pembangunan dari nol",
      "Perbaikan struktur",
      "Pekerjaan finishing"
    ],
    benefits: [
      "Pengerjaan tepat waktu",
      "Pengawasan profesional",
      "Material berkualitas",
      "Garansi pekerjaan"
    ],
    process: [
      "Konsultasi proyek",
      "Peninjauan lokasi",
      "Penyusunan RAB",
      "Pelaksanaan pekerjaan",
      "Penyerahan hasil"
    ],
    tags: ["Rumah", "Villa", "Ruko", "Bangunan Komersial"]
  },
  {
    title: "Arsitektur",
    description: "Desain arsitektur inovatif untuk properti Anda",
    image: "/arsitektur.jpg",
    services: [
      "Desain eksterior bangunan",
      "Perencanaan tata ruang",
      "Visualisasi 3D",
      "Penyusunan gambar teknis"
    ],
    benefits: [
      "Bangunan lebih estetik",
      "Sirkulasi udara optimal",
      "Pemanfaatan ruang maksimal",
      "Kesesuaian dengan regulasi"
    ],
    process: [
      "Briefing kebutuhan",
      "Survei tapak",
      "Penyusunan konsep",
      "Pengembangan desain",
      "Penyelesaian dokumen"
    ],
    tags: ["Residensial", "Komersial", "Taman", "Fasilitas Publik"]
  }
];

export default function Service() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id='services' className="py-20 px-4 sm:px-10 text-center bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Layanan Profesional untuk <span className="text-yellow-300">Kebutuhan </span> Anda
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Solusi lengkap dari desain hingga pembangunan untuk hunian dan komersial
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              whileHover={{ y: -10 }}
              onClick={() => setSelectedService(service)}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedService && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10"
                  onClick={() => setSelectedService(null)}
                >
                  ✕
                </button>
                
                <div className="relative h-64 w-full">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
                      <p className="text-gray-200">{selectedService.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold mb-4 text-blue-600">Layanan Kami</h4>
                      <ul className="space-y-2">
                        {selectedService.services.map((service, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-500 mr-2">✓</span>
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-semibold mb-4 text-blue-600">Manfaat</h4>
                      <ul className="space-y-2">
                        {selectedService.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-500 mr-2">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-xl font-semibold mb-4 text-blue-600">Proses Kerja</h4>
                      <ol className="space-y-3">
                        {selectedService.process.map((step, i) => (
                          <li key={i} className="flex items-start">
                            <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                              {i + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-3">Spesialisasi</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.tags.map((tag, i) => (
                          <span key={i} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
                      Konsultasi Sekarang
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}