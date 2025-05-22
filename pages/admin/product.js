import { useState } from "react";
import Sidebar from "@/components/admin/sidebar";

export default function ProductAdmin() {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    image: "",
  });

  const handleSave = () => {
    if (selected) {
      setProducts((prev) =>
        prev.map((item) =>
          item.id === selected.id ? { ...form, id: selected.id } : item
        )
      );
    } else {
      const newItem = { ...form, id: Date.now() };
      setProducts((prev) => [...prev, newItem]);
    }
    setSelected(null);
    setShowModal(false);
    resetForm();
  };

  const resetForm = () => {
    setForm({
      name: "",
      price: "",
      stock: "",
      description: "",
      image: "",
    });
  };

  const handleDelete = (id) => {
    if (confirm("Yakin ingin hapus produk ini?")) {
      setProducts((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="p-6 flex-1">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Manajemen Produk</h1>
          <button
            onClick={() => {
              setSelected(null);
              resetForm();
              setShowModal(true);
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Tambah Produk
          </button>
        </div>

        {/* Product List */}
        <div className="space-y-4">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow p-4 rounded border hover:shadow-md transition"
              >
                <div className="flex gap-4">
                  {product.image && (
                    <div className="w-24 h-24 bg-gray-100 rounded overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-gray-600">Rp {product.price}</p>
                        <p className="text-sm text-gray-500 mt-1">
                          Stok: {product.stock}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setSelected(product);
                            setForm(product);
                            setShowModal(true);
                          }}
                          className="text-blue-600 hover:text-blue-800 text-sm px-2 py-1 border border-blue-200 rounded"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="text-red-600 hover:text-red-800 text-sm px-2 py-1 border border-red-200 rounded"
                        >
                          Hapus
                        </button>
                      </div>
                    </div>
                    {product.description && (
                      <p className="text-sm text-gray-700 mt-2">
                        {product.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-gray-50 p-8 text-center rounded-lg">
              <p className="text-gray-500">Belum ada produk</p>
              <button
                onClick={() => {
                  setSelected(null);
                  resetForm();
                  setShowModal(true);
                }}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
              >
                Tambah Produk
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
                {selected ? "Edit Produk" : "Tambah Produk"}
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
                    { field: "name", label: "Nama Produk", type: "text" },
                    { field: "price", label: "Harga", type: "number" },
                    { field: "stock", label: "Stok", type: "number" },
                    { field: "image", label: "URL Gambar", type: "text" },
                  ].map(({ field, label, type }) => (
                    <div key={field}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {label}
                      </label>
                      <input
                        type={type}
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
