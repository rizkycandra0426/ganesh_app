import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import{ FaPlus,
    FaMinus,}from "react-icons/fa";

    

const faqCategories = {
  "Konsultasi Desain": [
    {
      question: "Apakah saya perlu melakukan pembayaran untuk konsultasi pertama?",
      answer: "Tidak, konsultasi pertama kami gratis. Kami ingin memahami kebutuhan Anda sebelum melangkah ke tahap berikutnya.",
    },
    {
      question: "Bagaimana cara mengatur jadwal konsultasi dengan tim kami?",
      answer: "Anda dapat menghubungi customer service kami atau mengisi formulir online untuk membuat jadwal.",
    },
  ],
  "Proses Desain & Pelaksanaan": [
    {
      question: "Apa yang perlu saya siapkan untuk konsultasi desain interior?",
      answer: "Mempersiapkan gambaran konsep yang diinginkan dan ukuran ruangan akan sangat membantu tim kami.",
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk konsultasi desain?",
      answer: "Durasi konsultasi biasanya sekitar 30-60 menit tergantung pada kompleksitas proyek Anda.",
    },
  ],
  "Harga & Pembayaran": [
    {
      question: "Bagaimana sistem pembayaran untuk proyek desain interior?",
      answer: "Pembayaran dapat dilakukan dalam beberapa tahap sesuai dengan kesepakatan yang telah dibuat sebelumnya.",
    },
    {
      question: "Apakah ada biaya tambahan di luar harga yang telah disepakati?",
      answer: "Kami akan selalu memberi tahu Anda sebelum ada biaya tambahan yang diperlukan.",
    },
  ],
  "Layanan Purna Jual": [
    {
      question: "Apakah ada garansi setelah proyek selesai?",
      answer: "Ya, kami menyediakan garansi layanan untuk memastikan kepuasan Anda setelah proyek selesai.",
    },
    {
      question: "Bagaimana jika saya ingin mengubah desain setelah proyek selesai?",
      answer: "Kami menawarkan layanan revisi dengan biaya tambahan sesuai dengan tingkat perubahan yang diperlukan.",
    },
  ],
  "Layanan Customer Service": [
    {
      question: "Bagaimana cara menghubungi customer service jika ada kendala?",
      answer: "Anda dapat menghubungi kami melalui telepon, email, atau chat langsung di situs kami.",
    },
    {
      question: "Apakah layanan customer service tersedia 24/7?",
      answer: "Saat ini layanan kami tersedia dari pukul 08:00 - 20:00 setiap hari.",
    },
  ],
};

export default function Ulasan() {
  const [selectedCategory, setSelectedCategory] = useState("Konsultasi Desain");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <section className="px-6 md:px-16 py-8 bg-white">
        <div className="flex flex-col md:flex-row mt-20 gap-10">
          {/* Kategori FAQ */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-lg text-gray-600">
              Masih Memiliki Pertanyaan? Kami Disini Untuk Membantumu!{" "}
              <span className="font-bold text-black cursor-pointer hover:underline">
                Hubungi Kami
              </span>
            </h3>

            <div className="mt-2 flex flex-col gap-2">
              {Object.keys(faqCategories).map((category, index) => (
                <p
                  key={index}
                  className={`cursor-pointer hover:text-black hover:underline ${
                    selectedCategory === category ? "text-black font-bold" : "text-gray-500"
                  }`}
                  onClick={() => {
                    setSelectedCategory(category);
                    setOpenIndex(null);
                  }}
                >
                  {category}
                </p>
              ))}
            </div>
          </div>

          {/* Pertanyaan FAQ */}
          <div className="w-full md:w-2/3">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Pertanyaan{" "}
              <span className="text-gray-500">yang Paling Banyak</span>{" "}
              Ditanyakan
            </h2>

            <div className="space-y-6">
              {faqCategories[selectedCategory]?.map((faq, index) => (
                <div key={index} className="border-b pb-4">
                  <button
                    className="w-full flex justify-between items-center text-left focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-lg font-bold text-black">
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <FaMinus className="text-gray-500 transition-transform transform rotate-180" />
                    ) : (
                      <FaPlus className="text-gray-500 transition-transform" />
                    )}
                  </button>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden text-gray-600 text-sm mt-2"
                  >
                    {faq.answer}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}