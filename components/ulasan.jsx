import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqCategories = {
  "Konsultasi Desain": [
    {
      question:
        "Apakah saya perlu melakukan pembayaran untuk konsultasi pertama?",
      answer:
        "Tidak, konsultasi pertama kami gratis. Kami ingin memahami kebutuhan Anda sebelum melangkah ke tahap berikutnya.",
    },
    {
      question: "Bagaimana cara mengatur jadwal konsultasi dengan tim kami?",
      answer:
        "Anda dapat menghubungi customer service kami atau mengisi formulir online untuk membuat jadwal.",
    },
    {
      question: "Apakah konsultasi bisa dilakukan secara online?",
      answer:
        "Bisa banget! Kami menyediakan sesi konsultasi via Zoom atau WhatsApp video call sesuai kenyamanan Anda.",
    },
    {
      question: "Berapa lama waktu tunggu untuk jadwal konsultasi?",
      answer:
        "Biasanya 1–3 hari setelah Anda menghubungi kami, tergantung jadwal yang tersedia.",
    },
    {
      question: "Apakah saya bisa membawa referensi desain sendiri?",
      answer:
        "Tentu saja! Referensi dari Anda sangat membantu kami memahami selera dan kebutuhan Anda.",
    },
  ],

  "Proses Desain & Pelaksanaan": [
    {
      question: "Apa yang perlu saya siapkan untuk konsultasi desain interior?",
      answer:
        "Mempersiapkan gambaran konsep yang diinginkan dan ukuran ruangan akan sangat membantu tim kami.",
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk konsultasi desain?",
      answer:
        "Durasi konsultasi biasanya sekitar 30-60 menit tergantung pada kompleksitas proyek Anda.",
    },
    {
      question: "Berapa lama proses desain sampai jadi?",
      answer:
        "Biasanya sekitar 1–3 minggu, tergantung kompleksitas dan jumlah revisi yang dibutuhkan.",
    },
    {
      question: "Apakah saya bisa memberikan feedback selama proses desain?",
      answer:
        "Pasti bisa! Kami terbuka untuk diskusi dan revisi agar hasil akhirnya sesuai keinginan Anda.",
    },
    {
      question: "Tim siapa yang akan turun langsung di lapangan?",
      answer:
        "Kami punya tim arsitek dan kontraktor profesional yang sudah berpengalaman langsung di proyek-proyek kami.",
    },
  ],

  "Harga & Pembayaran": [
    {
      question: "Bagaimana sistem pembayaran untuk proyek desain interior?",
      answer:
        "Pembayaran dapat dilakukan dalam beberapa tahap sesuai dengan kesepakatan yang telah dibuat sebelumnya.",
    },
    {
      question:
        "Apakah ada biaya tambahan di luar harga yang telah disepakati?",
      answer:
        "Kami akan selalu memberi tahu Anda sebelum ada biaya tambahan yang diperlukan.",
    },
    {
      question: "Apakah tersedia cicilan untuk pembayaran proyek?",
      answer:
        "Ya, kami menyediakan opsi cicilan untuk memudahkan Anda dalam mengatur budget proyek.",
    },
    {
      question: "Metode pembayaran apa saja yang bisa digunakan?",
      answer:
        "Kami menerima transfer bank, pembayaran via e-wallet, dan metode lainnya sesuai kenyamanan Anda.",
    },
    {
      question: "Apakah ada biaya konsultasi jika proyek tidak jadi?",
      answer:
        "Selama hanya konsultasi awal, tidak ada biaya. Namun, jika sudah masuk tahap desain, akan ada fee sesuai progress.",
    },
  ],

  "Layanan Purna Jual": [
    {
      question: "Apakah ada garansi setelah proyek selesai?",
      answer:
        "Ya, kami menyediakan garansi layanan untuk memastikan kepuasan Anda setelah proyek selesai.",
    },
    {
      question:
        "Bagaimana jika saya ingin mengubah desain setelah proyek selesai?",
      answer:
        "Kami menawarkan layanan revisi dengan biaya tambahan sesuai dengan tingkat perubahan yang diperlukan.",
    },
    {
      question: "Apakah saya bisa menghubungi tim setelah proyek selesai?",
      answer:
        "Tentu! Kami tetap terbuka untuk support dan konsultasi lanjutan setelah proyek beres.",
    },
    {
      question: "Berapa lama masa garansi yang diberikan?",
      answer:
        "Garansi berlaku 30–90 hari tergantung jenis pekerjaan. Detailnya akan dijelaskan sebelum proyek dimulai.",
    },
    {
      question: "Apakah ada layanan maintenance berkala?",
      answer:
        "Kami bisa bantu atur maintenance sesuai permintaan, baik itu perawatan bangunan maupun pengecekan interior.",
    },
  ],

  "Layanan Customer Service": [
    {
      question: "Bagaimana cara menghubungi customer service jika ada kendala?",
      answer:
        "Anda dapat menghubungi kami melalui telepon, email, atau chat langsung di situs kami.",
    },
    {
      question: "Apakah layanan customer service tersedia 24/7?",
      answer:
        "Saat ini layanan kami tersedia dari pukul 08:00 - 20:00 setiap hari.",
    },
    {
      question: "Berapa lama respon dari customer service?",
      answer:
        "Kami usahakan merespon dalam waktu kurang dari 1 jam selama jam operasional.",
    },
    {
      question: "Apakah bisa konsultasi langsung via WhatsApp?",
      answer:
        "Tentu bisa! Kami aktif juga di WhatsApp untuk komunikasi yang lebih cepat dan fleksibel.",
    },
    {
      question: "Apakah bisa request meeting langsung di lokasi proyek?",
      answer:
        "Bisa banget. Tim kami siap datang ke lokasi sesuai jadwal yang disepakati.",
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
    <section id="ulasan" className="px-4 md:px-10 py-8 bg-gray-50">
      <div className=" grid md:grid-cols-3 gap-6">
        {/* Kategori FAQ */}
        <div className="col-span-1 flex flex-col justify-between">
          <div>
            <h3 className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
              Masih punya pertanyaan? Kami siap bantu kamu!{" "}
              <span className="font-semibold text-black cursor-pointer hover:underline">
                Hubungi Kami
              </span>
            </h3>

            <div className="flex flex-col gap-2">
              {Object.keys(faqCategories).map((category, index) => (
                <button
                  key={index}
                  className={`text-left text-sm md:text-base transition-all ${
                    selectedCategory === category
                      ? "text-black font-semibold underline"
                      : "text-gray-500 hover:text-black"
                  }`}
                  onClick={() => {
                    setSelectedCategory(category);
                    setOpenIndex(null);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pertanyaan FAQ */}
        <div className="col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Pertanyaan <span className="text-red-900">yang Paling Banyak</span>{" "}
            Ditanyakan
          </h2>

          <div className="space-y-4">
            {faqCategories[selectedCategory]?.map((faq, index) => (
              <div key={index} className="border-b pb-3">
                <button
                  className="w-full flex justify-between items-start text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-sm md:text-base font-medium text-black">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <FaMinus className="text-gray-500 mt-1" />
                  ) : (
                    <FaPlus className="text-gray-500 mt-1" />
                  )}
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden text-gray-600 text-sm mt-2 pr-2"
                >
                  {faq.answer}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
