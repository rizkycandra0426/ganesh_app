import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar"; // pastikan path Navbar benar
import { getJsonPublicPath } from "@/helpers/json";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const jsonPublicPath = getJsonPublicPath("product");

    const fetchData = async () => {
      const res = await fetch(jsonPublicPath);
      const jsonData = await res.json();
      setProducts(jsonData["datas"] ?? []);
    }
  
    fetchData();
  }, []);

  return (
    <div className="relative">
      <Navbar />

      {/* Produk Section */}
      <section className="py-20 bg-gray-100 text-gray-800 z-0 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Produk Kami</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                onClick={() => setSelectedProduct(product)}
                className="bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition p-4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-1 truncate">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Popup Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center px-4"
          onClick={() => setSelectedProduct(null)} // klik luar popup
        >
          <div
            className="bg-white max-w-md w-full rounded-lg overflow-hidden shadow-xl relative"
            onClick={(e) => e.stopPropagation()} // mencegah modal tertutup saat klik dalam konten
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-xl"
            >
              ✕
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                {selectedProduct.name}
              </h3>
              <p className="text-gray-700">{selectedProduct.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
