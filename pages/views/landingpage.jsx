import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { CheckCircle } from "lucide-react";
import {
  FaRegFileAlt,
  FaDollarSign,
  FaHeadset,
  FaPlus,
  FaMinus,
  FaHandshake,
  FaClipboardList,
  FaCogs,
  FaPencilRuler,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const services = [
  {
    title: "Kitchen Set",
    description: "Kitchenset Premium dengan Desain Elegan",
    image: "/kitchen.jpg",
  },
  {
    title: "Interior Premium",
    description: "Ciptakan Ruang Mewah dan Elegan dengan Interior Premium",
    image: "/interior.jpg",
  },
  {
    title: "Rumah",
    description:
      "Temukan Produk Rumah Berkualitas Tinggi untuk Hunian Impian Anda",
    image: "/house.jpg",
    rating: "⭐⭐⭐⭐⭐",
    extraInfo: "Lebih dari 90% pelanggan puas",
    tags: ["Minimalis", "Modern", "Kontemporer", "Klasik"],
  },
];

const faqs = [
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
    question: "Apa yang perlu saya siapkan untuk konsultasi desain interior?",
    answer:
      "Mempersiapkan gambaran konsep yang diinginkan dan ukuran ruangan akan sangat membantu tim kami.",
  },
  {
    question: "Berapa lama waktu yang dibutuhkan untuk konsultasi desain?",
    answer:
      "Durasi konsultasi biasanya sekitar 30-60 menit tergantung pada kompleksitas proyek Anda.",
  },
];

const steps = [
  {
    title: "Proses Konsultasi Awal",
    description: "Memahami kebutuhan, keinginan, dan anggaran klien.",
    icon: <FaHandshake className="text-white text-3xl" />,
  },
  {
    title: "Proses Desain Konsep",
    description:
      "Menyusun konsep desain yang sesuai dengan kebutuhan dan anggaran klien.",
    icon: <FaClipboardList className="text-white text-3xl" />,
  },
  {
    title: "Proses Penawaran dan Kesepakatan",
    description:
      "Menyepakati harga, waktu pengerjaan, dan detail proyek lainnya.",
    icon: <FaPencilRuler className="text-white text-3xl" />,
  },
  {
    title: "Proses Pelaksanaan dan Implementasi",
    description:
      "Memulai dan menyelesaikan proyek desain interior sesuai dengan kesepakatan.",
    icon: <FaCogs className="text-white text-3xl" />,
  },
];

export default function LandingPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white font-sans">
      <nav className="fixed top-0 w-full bg-white shadow-md p-4 z-50 flex justify-between px-10">
        <h1 className="text-xl font-bold">Brand</h1>
        <ul className="flex space-x-6">
          <li>Home</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </nav>

      <section
        className="relative h-screen flex items-center justify-start px-10 text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/villa.jpg')" }}
        
      >
        <div className="max-w-2xl ml-10">

          <motion.h1
            className="text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Wujudkan Bangunan & Interior Berkualitas <br />
            <span className="text-yellow-300">dengan Ahli Kontruksi dan Desain Profesional</span>{" "}
            Terbaik!
          </motion.h1>

       
          <motion.button
            className="mt-6 px-6 py-3 bg-white text-black rounded-full font-semibold flex items-center gap-2 shadow-lg hover:bg-gray-200"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Konsultasi Sekarang ➝
          </motion.button>

         
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {[
              "Desain Interior",
              "Dekorasi Interior",
              "Furniture Custom",
              "Kitchenset",
              "Renovasi",
              "ACP",
              "Exterior",
            ].map((service, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium shadow-md"
              >
                {service}
              </span>
            ))}
          </motion.div>
        </div>

        
        <motion.div
          className="absolute bottom-10 right-10 bg-yellow-900 text-white p-6 rounded-lg shadow-xl max-w-sm"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <h3 className="text-lg font-semibold">
            Dilakukan oleh Tim Profesional!
          </h3>
          <p className="text-sm mt-2">
          Sejak 2009, kami ahli dalam konstruksi dan desain interior, 
          menghadirkan bangunan kokoh, estetis, dan fungsional. 
          Dengan tim profesional, kami berkomitmen memberikan solusi terbaik untuk hunian hingga bangunan komersial."
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex -space-x-2">
              <img
                src="/profile1.jpg"
                alt="User 1"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="/profile2.jpg"
                alt="User 2"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="/profile3.jpg"
                alt="User 3"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            </div>
            <span className="text-sm font-medium">100+ Pelanggan Puas</span>
          </div>
        </motion.div>
      </section>

      <section className="px-10 py-20 flex items-center justify-between gap-12">
       
        <div className="max-w-lg ml-10">
          <motion.h2
            className="text-4xl font-bold leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-black">Kenapa </span>
            <span className="font-extrabold">Memilih</span> kami <br />
            <span className="font-extrabold">
              Untuk Mewujudkan
            </span> Ruangan <span className="font-extrabold">Impianmu</span>{" "}
            Penuh <span className="text-gray-500">Makna?</span>
          </motion.h2>

          <motion.p
            className="mt-4 text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Pilih kami untuk menjadikan ruang Anda lebih dari sekadar tempat,
            kami hadir untuk mengubahnya menjadi pengalaman yang tak terlupakan.
          </motion.p>

        
          <motion.ul
            className="mt-6 space-y-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {[
              "Tim Profesional & Berpengalaman",
              "Desain yang Disesuaikan",
              "Proses Transparan & Kolaboratif",
              "Layanan Tepat Waktu & Terjangkau",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-lg">
                <CheckCircle className="text-green-500 w-6 h-6" />
                {item}
              </li>
            ))}
          </motion.ul>

        
          <motion.div
            className="mt-8 bg-yellow-900 text-white p-6 rounded-lg max-w-sm"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <h3 className="text-xl font-bold">
              Siap untuk{" "}
              <span className="text-yellow-300">Hasil yang Memuaskan?</span>
            </h3>
            <button className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200">
              Konsultasi Sekarang →
            </button>
          </motion.div>
        </div>

     
        <motion.div
          className="relative right-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <div className="relative w-[500px] h-[400px] overflow-hidden rounded-[50%] shadow-lg">
            <img
              src="/interior.jpeg"
              alt="Interior"
              className="w-full h-full object-cover"
            />
          </div>

          
          <motion.div
            className="absolute top-6 left-6 bg-black text-white px-4 py-2 rounded-full shadow-lg text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <h4 className="text-2xl font-bold">10+</h4>
            <p className="text-sm">Tahun Pengalaman</p>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 px-10 text-center">
        <h2 className="text-4xl font-bold mb-10">
          Solusi Interior yang <span className="text-black">Cocok</span> untuk{" "}
          <span className="text-black">Berbagai</span> Gaya.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer rounded-2xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedService(service)}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

   
        <AnimatePresence>
          {selectedService && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                className="bg-white p-6 rounded-2xl w-96 text-center shadow-lg relative"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-3 right-3 text-gray-500 hover:text-black"
                  onClick={() => setSelectedService(null)}
                >
                  ✕
                </button>
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="text-2xl font-semibold mt-4">
                  {selectedService.title}
                </h3>
                <p className="text-gray-600 mt-2">
                  {selectedService.description}
                </p>
                {selectedService.rating && (
                  <p className="mt-2 text-yellow-500 text-lg">
                    {selectedService.rating}
                  </p>
                )}
                {selectedService.extraInfo && (
                  <p className="text-sm text-gray-500">
                    {selectedService.extraInfo}
                  </p>
                )}
                <div className="flex flex-wrap justify-center mt-4 gap-2">
                  {selectedService.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="mt-4 bg-black text-white px-6 py-2 rounded-lg">
                  Konsultasi
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

     
      <section className="py-20 px-10 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-10">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["/portfolio1.jpg", "/portfolio2.jpg", "/portfolio3.jpg"].map(
            (image, index) => (
              <motion.img
                key={index}
                src={image}
                className="rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              />
            )
          )}
        </div>
      </section>

      <section className="relative h-[500px] flex items-center text-white">
   
        <div
          className="absolute inset-0 bg-cover bg-center brightness-50"
          style={{ backgroundImage: "url('/dapur.jpeg')" }}
        />

       
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Pelanggan Puas <br />
            <span className="text-gray-300">Direkomendasikan</span> Semua Orang
          </motion.h2>

      
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Kami bangga menjadi pilihan utama bagi pelanggan yang puas dengan
            layanan desain interior kami. Setiap proyek kami selalu mengutamakan
            kualitas, kreativitas, dan kepuasan pelanggan. Banyak dari mereka
            yang kembali lagi karena hasil desain kami selalu melebihi
            ekspektasi.
          </motion.p>

         
          <motion.a
            href="#"
            className="inline-block px-6 py-3 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition"
            whileHover={{ scale: 1.05 }}
          >
            Konsultasi Sekarang →
          </motion.a>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center gap-10 px-6 md:px-16 py-16 bg-white">
      
        <div className="relative w-full md:w-1/2">
      
          <motion.img
            src="/villa2.jpeg"
            alt="Interior Design"
            className="w-full rounded-tl-[50px] rounded-br-[50px] shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
          
          <motion.img
            src="/interior2.jpeg"
            alt="Luxury Interior"
            className="absolute bottom-[-50px] right-[-50px] w-1/2 rounded-full border-4 border-white shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>

       
        <div className="w-full md:w-1/2 text-gray-900">
          <motion.h2
            className="text-4xl font-bold ml-10  mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Dikerjakan Oleh Tenaga <br />
            <span className="text-gray-500">Profesional dan Berpengalaman</span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 ml-10 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Setiap proyek interior kami dikerjakan oleh tenaga profesional yang
            berpengalaman, memastikan hasil optimal sesuai kebutuhan Anda.
            Dengan keahlian tinggi, kami memberikan desain estetis dan
            fungsional, menciptakan ruang yang nyaman.
          </motion.p>

          
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="flex items-center ml-10 gap-4">
              <FaRegFileAlt className="text-3xl text-gray-800" />
              <div>
                <h3 className="font-bold text-lg">
                  Tenaga Profesional & Berpengalaman
                </h3>
                <p className="text-gray-500 text-sm">
                  Semua pekerja merupakan tenaga ahli
                </p>
              </div>
            </div>

            <div className="flex items-center ml-10 gap-4">
              <FaDollarSign className="text-3xl text-gray-800" />
              <div>
                <h3 className="font-bold text-lg">
                  Harga Terjangkau dan Transparan
                </h3>
                <p className="text-gray-500 text-sm">
                  Harga bersaing dan tanpa biaya tersembunyi
                </p>
              </div>
            </div>

            <div className="flex items-center ml-10 gap-4">
              <FaHeadset className="text-3xl text-gray-800" />
              <div>
                <h3 className="font-bold text-lg">24/7 Customer Support</h3>
                <p className="text-gray-500 text-sm">
                  Kami siap membantu kapan saja
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-8 bg-white">
       
        <div className="text-center mb-10">
          <p className="text-sm text-gray-600">
            Masih Memiliki Pertanyaan? Kami Disini Untuk Membantumu!{" "}
            <span className="font-bold text-black">Hubungi Kami</span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row mt-20 gap-10">
         
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-xl font-bold text-black">Konsultasi Desain</h3>
            <p className="text-gray-500 mt-2">Proses Desain & Pelaksanaan</p>
            <p className="text-gray-500 mt-2">Harga & Pembayaran</p>
            <p className="text-gray-500 mt-2">Layanan Purna Jual</p>
            <p className="text-gray-500 mt-2">Layanan Customer Service</p>
          </div>

         
          <div className="w-full md:w-2/3">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Pertanyaan{" "}
              <span className="text-gray-500">yang Paling Banyak</span>{" "}
              Ditanyakan
            </h2>

        
            <div className="space-y-6">
              {faqs.map((faq, index) => (
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

      <section
        className="relative bg-cover bg-center text-white py-20"
        style={{ backgroundImage: "url(/villa.jpeg')" }}
      >
       
        <div className="absolute inset-0 bg-gradient-to-r from-[#6D4C2F] via-[#6D4C2F]/90 to-transparent"></div>

        
        <div className="relative max-w-6xl mx-auto px-6 md:px-16">
          <motion.h2
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#FFD700]">Proses</span> Desain Interior{" "}
            <span className="text-[#FFD700]">dari</span> Konsultasi hingga
            Realisasi
          </motion.h2>

          <motion.p
            className="text-lg text-white/80 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Kami menyediakan proses desain interior yang lengkap, mulai dari
            konsultasi, pengembangan konsep, hingga pelaksanaan proyek. Setiap
            tahap dikerjakan dengan profesionalisme untuk mewujudkan ruang
            impian Anda.
          </motion.p>

         
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 bg-[#5A3C24] p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <div className="w-14 h-14 bg-[#FFD700] flex items-center justify-center rounded-full">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-white/80 mt-1">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#3D2B1F] text-white py-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/logo.png" alt="Logo" className="w-16" />
            <p className="text-white/80">
              Kami telah berdiri sejak 2015, selalu mengedepankan keseimbangan
              dalam perencanaan, pelaksanaan proyek, dan program yang terarah
              serta terukur untuk menghasilkan pekerjaan yang maksimal.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                className="text-2xl hover:text-[#FFD700] transition"
                whileHover={{ scale: 1.2 }}
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                href="#"
                className="text-2xl hover:text-[#FFD700] transition"
                whileHover={{ scale: 1.2 }}
              >
                <FaInstagram />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold">Company</h3>
            <ul className="space-y-2">
              {[
                "Beranda",
                "Tentang Kami",
                "Rekomendasi",
                "Ulasan",
                "FAQ",
                "Proses Pelaksanaan",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="hover:text-[#FFD700] transition cursor-pointer"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

         
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold">Informasi Kontak</h3>
            <div className="flex items-center gap-3">
              <FaPhone />
              <span>+62 821-4846-4422</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope />
              <span>sumbu.media@gmail.com</span>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1" />
              <span>Central Park Wiguna Blok E No. 1, Surabaya</span>
            </div>
          </motion.div>
        </div>

     
        <div className="mt-10 border-t border-white/20 pt-6 text-center text-white/80">
          <p>Copyright © 2025 Sumber Usaha. All Rights Reserved.</p>
          <div className="flex justify-center gap-6 mt-2">
            <a href="#" className="hover:text-[#FFD700] transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#FFD700] transition">
              Terms & Condition
            </a>
          </div>
        </div>
      </footer>
 
      
    </div>
  );
}
