import React from "react";
import {FaFacebook,
    FaInstagram,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,} from "react-icons/fa";
    import { motion, AnimatePresence } from "framer-motion";

export default function Footer(){
    return(
<div>
<footer className="bg-[#3D2B1F] text-white py-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/logo1.png" alt="Logo" className="w-48" />
            <p className="text-white/80">
              Kami telah berdiri sejak 2009, selalu mengedepankan keseimbangan
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
                "Portofolio",
                "Ulasan",
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
              <span>Jl. Gumuh Ayu VII, Abianbase, Badung, Bali</span>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center text-white/80">
          <p>Copyright © 2025 Ganesh House. All Rights Reserved.</p>
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