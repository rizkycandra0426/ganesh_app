import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";


const portfolioItems = [
    {
      id: 1,
      name: "Luxury Living Room",
      thumbnail: "/portfolio1.jpg",
      images: ["/portfolio1.jpg", "/portfolio2.jpg", "/portfolio3.jpg", "/portfolio4.jpg", "/portfolio5.jpg"],
      location: "Jakarta, Indonesia",
    },
    {
      id: 2,
      name: "Modern Office Space",
      thumbnail: "/portfolio2.jpg",
      images: ["/portfolio6.jpg", "/portfolio7.jpg", "/portfolio8.jpg", "/portfolio9.jpg", "/portfolio10.jpg"],
      location: "Bandung, Indonesia",
    },
    {
      id: 3,
      name: "Cozy Bedroom",
      thumbnail: "/portfolio3.jpg",
      images: ["/portfolio11.jpg", "/portfolio12.jpg", "/portfolio13.jpg", "/portfolio14.jpg", "/portfolio15.jpg"],
      location: "Surabaya, Indonesia",
    },
    {
      id: 4,
      name: "Minimalist Kitchen",
      thumbnail: "/portfolio4.jpg",
      images: ["/portfolio16.jpg", "/portfolio17.jpg", "/portfolio18.jpg", "/portfolio19.jpg", "/portfolio20.jpg"],
      location: "Bali, Indonesia",
    },
  ];
export default function Portofolio(){
    const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="portfolio" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Our Portfolio</h2>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <div key={item.id} className="cursor-pointer" onClick={() => setSelectedItem(item)}>
              <img src={item.thumbnail} alt={item.name} className="rounded-lg shadow-lg w-full h-64 object-cover" />
              <h3 className="text-lg font-semibold mt-4">{item.name}</h3>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="mt-8">
        <Link href="/portfolio">
            <span className="text-blue-600 hover:underline font-semibold text-lg cursor-pointer">
              View More →
            </span>
          </Link>
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
            <button onClick={() => setSelectedItem(null)} className="absolute top-4 right-6 text-gray-500 text-2xl">
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedItem.name}</h2>
            <p className="text-gray-600 mb-4">{selectedItem.location}</p>

            <div className="grid grid-cols-2 gap-4">
              {selectedItem.images.map((img, index) => (
                <img key={index} src={img} alt="Portfolio Image" className="rounded-lg shadow-md" />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}