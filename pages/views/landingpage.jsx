import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import { motion, AnimatePresence } from "framer-motion";
import {Swiper, SwiperSlide} from "swiper/react";
import { CheckCircle, Users, Ruler, ClipboardList, Clock } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

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

const slides = [
  {
    title: "Best Idea & Solution For Your Dream Home",
    services: [
      "Desain Arsitektur",
      "Desain Interior",
      "Kontraktor",
      "Renovasi",
    ],
    background: "/villa.jpg",
  },
  {
    title: "Wujudkan Bangunan & Interior Berkualitas",
    subtitle: "dengan Ahli Konstruksi dan Desain Profesional Terbaik!",
    freeOffers: [
      "✅ Survey Lokasi",
      "✅ Konsultasi Desain Arsitektur & Struktur",
      "✅ Desain 2D & 3D*",
    ],
    background: "/construction.jpg",
  },
];

const benefits = [
  {
    title: "Tim Profesional & Berpengalaman",
    description:
      "Dikerjakan oleh tenaga profesional dengan pengalaman di bidangnya.",
    icon: <Users className="w-10 h-10 text-white" />,
  },
  {
    title: "Desain yang Disesuaikan",
    description:
      "Kami menawarkan desain eksklusif sesuai kebutuhan dan gaya Anda.",
    icon: <Ruler className="w-10 h-10 text-white" />,
  },
  {
    title: "Harga Kompetitif",
    description:
      "Kami akan kalkulasikan pada Rencana Anggaran Biaya dengan menyesuaikan budget anda",
  },
  {
    title: "Proses Transparan & Kolaboratif",
    description:
      "Setiap tahapan proyek dipantau dan dikomunikasikan secara terbuka.",
    icon: <ClipboardList className="w-10 h-10 text-white" />,
  },
  {
    title: "Layanan Tepat Waktu & Terjangkau",
    description:
      "Kami berkomitmen memberikan layanan berkualitas dengan harga bersaing.",
    icon: <Clock className="w-10 h-10 text-white" />,
  },
  {
    title: "Bergaransi",
    description:
      "Masa pemeliharaan bangunan dan interior kami berikan selama 2 bulan.",
  },
];
export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-white font-sans">
    <Navbar/>

    <section className="relative h-screen flex items-center justify-center text-white bg-cover bg-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentSlide].background})`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        {/* Overlay Transparan */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Konten */}
        <div className="relative max-w-4xl text-center">
          <motion.h1
            className="text-5xl font-bold leading-tight text-[#C8A75F]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {slides[currentSlide].title}
            {slides[currentSlide].subtitle && (
              <span className="text-white">
                {" "}
                <br /> {slides[currentSlide].subtitle}
              </span>
            )}
          </motion.h1>

          {slides[currentSlide].services && (
            <motion.div
              className="mt-6 flex justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              {slides[currentSlide].services.map((service, index) => (
                <div
                  key={index}
                  className="px-6 py-3 border border-white rounded-lg text-lg font-semibold backdrop-blur-sm bg-white/20 hover:bg-white/30 transition"
                >
                  {service}
                </div>
              ))}
            </motion.div>
          )}

          {slides[currentSlide].freeOffers && (
            <>
              <motion.div
                className="mt-6 text-3xl font-bold text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                GRATIS
              </motion.div>

              <motion.ul
                className="mt-3 text-lg text-white space-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {slides[currentSlide].freeOffers.map((offer, index) => (
                  <li key={index}>{offer}</li>
                ))}
              </motion.ul>

              <p className="text-xs text-gray-300 mt-2">
                *Syarat dan ketentuan berlaku
              </p>

              <motion.button
                className="mt-6 px-6 py-3 bg-white text-black rounded-full font-semibold shadow-lg hover:bg-gray-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.7 }}
              >
                Konsultasi Sekarang ➝
              </motion.button>
            </>
          )}

          {/* Indikator Slide */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-white" : "bg-gray-400"
                } transition-all`}
              />
            ))}
          </div>
        </div>
      </section>

     <section className="relative py-20 bg-[#2D2217] text-white">
        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/blueprint.jpg')" }}
        />

        {/* Konten */}
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Mengapa Memilih Kami?
          </motion.h2>

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="relative p-6 bg-transparent border border-white/50 rounded-lg hover:bg-white/10 transition duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
              >
                {/* Icon dalam lingkaran */}
                <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg">
                  {benefit.icon}
                </div>

                <h3 className="mt-8 text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>  
<Service />

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
