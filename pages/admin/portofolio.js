import { useEffect, useState } from "react";
import Sidebar from "@/components/admin/sidebar";

export default function PortofolioAdmin() {
  const [portofolios, setPortofolios] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("Desain Arsitek"); // State untuk tab aktif
  const [form, setForm] = useState({
    name: "",
    location: "",
    category: "",
    land_area: "",
    building_area: "",
    duration: "",
    description: "",
    features: [], // opsional
    images: [], // opsional
  });

  const handleSave = async () => {
    try {
      const isEdit = selected !== null;
      const endpoint = isEdit
        ? `/api/porto/update?id=${selected.id}`
        : "/api/porto/create";
      const method = isEdit ? "PUT" : "POST";

      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          land_area: Number(form.land_area),
          building_area: Number(form.building_area),
          duration: Number(form.duration),
          features: form.features ?? [],
          images: form.images ?? [],
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        alert("Gagal menyimpan: " + result.message);
        return;
      }

      alert(isEdit ? "Data berhasil diperbarui" : "Data berhasil disimpan");
      resetForm();
      setShowModal(false);
      setSelected(null);
      window.location.reload();
    } catch (error) {
      console.error("Error saat menyimpan:", error);
      alert("Terjadi kesalahan saat menyimpan.");
    }
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data/porto.json");
        const data = await res.json();
        setPortofolios(data.datas);
      } catch (error) {
        console.error("Failed to fetch portofolios:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    if (confirm("Yakin ingin hapus?")) {
      setPortofolios((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const categories = ["Desain Arsitek", "Bangunan", "interior"];

  // Filter portofolio berdasarkan tab aktif
  const filteredPortfolios = portofolios.filter(
    (item) => item.category === activeTab
  );

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="p-6 flex-1 bg-gray-800">
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
                    <h3 className="font-semibold text-black">{item.name}</h3>
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
              <h2 className="text-xl font-bold mb-4 text-black">
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
                        className="w-full border p-2 rounded text-black"
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
                    className="w-full border p-2 rounded text-gray-500"
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
                  <label className="block text-sm font-medium text-gray-700">
                    Fitur
                  </label>
                  <input
                    className="w-full border p-2 rounded text-black"
                    type="text"
                    placeholder="Tambah fitur (pisahkan dengan koma)"
                    value={form.features?.join(", ") || ""}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        features: e.target.value
                          .split(",")
                          .map((f) => f.trim()),
                      })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Gambar
                  </label>
                  <input
                    className="w-full border p-2 rounded text-black"
                    placeholder="Tambah images (pisahkan dengan koma)"
                    value={form.images?.join(", ") || ""}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        images: e.target.value.split(",").map((f) => f.trim()),
                      })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Deskripsi
                  </label>
                  <textarea
                    className="w-full border p-2 rounded text-black"
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
                    className="px-4 py-2 border rounded text-black"
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
