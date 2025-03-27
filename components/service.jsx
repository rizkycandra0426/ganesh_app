import {useState} from "react";

import { motion, AnimatePresence } from "framer-motion";


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
  
export default function Service(){
    const [selectedService, setSelectedService] = useState(null);
   return( 
    <section id='services'
     className="py-20 px-10 text-center">
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

);
};