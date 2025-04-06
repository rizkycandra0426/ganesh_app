import React from "react";
import {FaFacebook,
    FaInstagram,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,} from "react-icons/fa";
    import { motion, AnimatePresence } from "framer-motion";

export default function Footer(){
    return(

<footer id='contact' className="bg-[#3D2B1F] text-white py-10 px-6 md:px-16">
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
    <span>ganeshhouse@gmail.com</span>
  </div>
  <div className="flex items-start gap-3">
    <FaMapMarkerAlt className="mt-1" />
    <a 
      href="https://www.google.com/maps/place/Jl.+Gumuh+Ayu+VII,+Abianbase,+Kec.+Mengwi,+Kabupaten+Badung,+Bali+80351/@-8.6089198,115.1638439,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd23c8f0f1b6e1d:0x8c9a1c6e1a4f4e1d!8m2!3d-8.6089251!4d115.1664188!16s%2Fg%2F11c5q5z5q5?entry=ttu" 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:text-blue-600 transition-colors underline"
    >
      Jl. Gumuh Ayu VII, Abianbase, Badung, Bali
    </a>
  </div>
  
  {/* Embedded Google Maps */}
  <div className="mt-4 rounded-lg overflow-hidden shadow-md">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.0187819994286!2d115.1638439!3d-8.6089198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23c8f0f1b6e1d%3A0x8c9a1c6e1a4f4e1d!2sJl.%20Gumuh%20Ayu%20VII%2C%20Abianbase%2C%20Kec.%20Mengwi%2C%20Kabupaten%20Badung%2C%20Bali%2080351!5e0!3m2!1sen!2sid!4v1711620000000!5m2!1sen!2sid"
      width="100%"
      height="250"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-lg"
    ></iframe>
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

    );
}