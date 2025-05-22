import { useState } from "react";
import Sidebar from "@/components/admin/sidebar";

export default function PortofolioAdmin() {
  const [portofolios, setPortofolios] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("arsitek"); // State untuk tab aktif
  const [form, setForm] = useState({
    name: "",
    location: "",
    category: "arsitek",
    land_area: "",
    building_area: "",
    duration: "",
    description: "",
  });

  const handleSave = () => {
    if (selected) {
      setPortofolios((prev) =>
        prev.map((item) =>
          item.id === selected.id ? { ...form, id: selected.id } : item
        )
      );
    } else {
      const newItem = { ...form, id: Date.now() };
      setPortofolios((prev) => [...prev, newItem]);
    }
    setSelected(null);
    setShowModal(false);
    resetForm();
  };

  const resetForm = () => {
    setForm({
      name: "",
      location: "",
      category: activeTab, // Set default category sesuai tab aktif
      land_area: "",
      building_area: "",
      duration: "",
      description: "",
    });
  };

  const handleDelete = (id) => {
    if (confirm("Yakin ingin hapus?")) {
      setPortofolios((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const categories = ["arsitek", "Bangunan", "interior"];

  // Filter portofolio berdasarkan tab aktif
  const filteredPortfolios = portofolios.filter(
    (item) => item.category === activeTab
  );

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="p-6 flex-1">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Manajemen Portofolio</h1>
          <button
            onClick={() => {
              setSelected(null);
              resetForm();
              setShowModal(true);
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Tambah Portofolio
          </button>
        </div>

        {/* Tab Control */}
        <div className="flex border-b mb-6">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === category
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Portfolio List */}
        <div className="space-y-4">
          {filteredPortfolios.length > 0 ? (
            filteredPortfolios.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow p-4 rounded border hover:shadow-md transition"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.location}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Luas Bangunan: {item.building_area} | Durasi:{" "}
                      {item.duration}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setSelected(item);
                        setForm(item);
                        setShowModal(true);
                      }}
                      className="text-blue-600 hover:text-blue-800 text-sm px-2 py-1 border border-blue-200 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-800 text-sm px-2 py-1 border border-red-200 rounded"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
                {item.description && (
                  <p className="text-sm text-gray-700 mt-2">
                    {item.description}
                  </p>
                )}
              </div>
            ))
          ) : (
            <div className="bg-gray-50 p-8 text-center rounded-lg">
              <p className="text-gray-500">
                Belum ada portofolio untuk kategori ini
              </p>
              <button
                onClick={() => {
                  setSelected(null);
                  resetForm();
                  setShowModal(true);
                }}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
              >
                Tambah Portofolio
              </button>
            </div>
          )}
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 w-full max-w-lg rounded shadow-lg relative">
              <button
                onClick={() => {
                  setShowModal(false);
                  setSelected(null);
                  resetForm();
                }}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              <h2 className="text-xl font-bold mb-4">
                {selected ? "Edit Portofolio" : "Tambah Portofolio"}
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSave();
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { field: "name", label: "Nama Proyek" },
                    { field: "location", label: "Lokasi" },
                    { field: "land_area", label: "Luas Tanah" },
                    { field: "building_area", label: "Luas Bangunan" },
                    { field: "duration", label: "Durasi Proyek" },
                  ].map(({ field, label }) => (
                    <div key={field}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {label}
                      </label>
                      <input
                        type="text"
                        className="w-full border p-2 rounded"
                        value={form[field] || ""}
                        onChange={(e) =>
                          setForm({ ...form, [field]: e.target.value })
                        }
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Kategori
                  </label>
                  <select
                    className="w-full border p-2 rounded"
                    value={form.category}
                    onChange={(e) =>
                      setForm({ ...form, category: e.target.value })
                    }
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Deskripsi
                  </label>
                  <textarea
                    className="w-full border p-2 rounded"
                    rows="3"
                    value={form.description || ""}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                  />
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      resetForm();
                    }}
                    className="px-4 py-2 border rounded"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
