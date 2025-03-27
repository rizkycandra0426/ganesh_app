import { useState } from "react";
import Navbar from "@/components/navbar";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { CheckCircle } from "lucide-react";
import {
  FaRegFileAlt,
  FaDollarSign,
  FaHeadset,
  
  FaHandshake,
  FaClipboardList,
  FaCogs,
  FaPencilRuler,
  
} from "react-icons/fa";
import Service from "@/components/service";
import Portofolio from "@/components/portofolio";
import Ulasan from "@/components/ulasan";
import Footer from "@/components/footer";



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
  return (
    <div className="bg-white font-sans">
    <Navbar/>

      <section id='home'
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
            <span className="text-yellow-300">
              dengan Ahli Kontruksi dan Desain Profesional
            </span>{" "}
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
            className="mt-8 flex flex-wrap gap-4 max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {[
              "Kontraktor",
              "Desain Arsitektur",
              "Desain Interior",
              "Kontraktor Interior",
              "Renovasi",
            ].map((service, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium shadow-md whitespace-nowrap"
              >
                {service}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 right-10 bg-yellow-700 text-white p-6 rounded-lg shadow-xl max-w-sm"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <h3 className="text-lg font-semibold">
            Dilakukan oleh Tim Profesional!
          </h3>
          <p className="text-sm mt-2">
            Sejak 2009, kami ahli dalam konstruksi dan desain interior,
            menghadirkan bangunan kokoh, estetis, dan fungsional. Dengan tim
            profesional, kami berkomitmen memberikan solusi terbaik untuk hunian
            hingga bangunan komersial."
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
            <span className="font- extrabold text-yellow-300">
              Memilih kami
            </span>
            <br />
            <span className="font-extrabold text-yellow-300">
              Untuk Mewujudkan Ruangan
            </span>{" "}
            <br />
            <span className="font-extrabold text-yellow-300">
              Impianmu Penuh
              <br />
            </span>
            <span className="text-gray-500">Makna?</span>
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
            className="mt-6 space-y-3 text-black"
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
            className="mt-5 bg-yellow-7 00 text-white p-6 rounded-lg max-w-sm"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <h3 className="text-xl font-bold text-black">
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
<Service />
<Portofolio/>
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

      <Ulasan/>

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

      <Footer/>
    </div>
  );
}
