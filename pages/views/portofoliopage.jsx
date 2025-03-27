import { useState } from "react";

const morePortfolioItems = [
  { id: 5, name: "Classic Villa", thumbnail: "/portfolio5.jpg", location: "Yogyakarta, Indonesia" },
  { id: 6, name: "Scandinavian Home", thumbnail: "/portfolio6.jpg", location: "Bali, Indonesia" },
  { id: 7, name: "Industrial Loft", thumbnail: "/portfolio7.jpg", location: "Jakarta, Indonesia" },
  { id: 8, name: "Elegant Dining Room", thumbnail: "/portfolio8.jpg", location: "Surabaya, Indonesia" },
];

export default function PortofolioPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter data berdasarkan pencarian
  const filteredItems = morePortfolioItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-16 bg-gray-100 h-screen flex flex-col items-center">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Our Full Portfolio</h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name or location..."
          className="w-full max-w-md p-3 mb-6 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Portfolio List dengan Scroll */}
        <div className="max-h-[500px] overflow-y-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg">
                  <img src={item.thumbnail} alt={item.name} className="rounded-lg w-full h-64 object-cover" />
                  <h3 className="text-lg font-semibold mt-4">{item.name}</h3>
                  <p className="text-gray-600">{item.location}</p>
                </div>
              ))
            ) : (
              <p className="col-span-4 text-gray-500">No results found</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}