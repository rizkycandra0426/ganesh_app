import Sidebar from "@/components/admin/sidebar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", clicks: 240 },
  { month: "Feb", clicks: 400 },
  { month: "Mar", clicks: 300 },
  { month: "Apr", clicks: 500 },
  { month: "May", clicks: 450 },
  { month: "Jun", clicks: 600 },
];

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

        {/* Ringkasan Stat */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-sm text-gray-500">Total Pengunjung</h2>
            <p className="text-2xl font-bold text-blue-700">12,430</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-sm text-gray-500">Project Selesai</h2>
            <p className="text-2xl font-bold text-green-600">56</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-sm text-gray-500">Portofolio</h2>
            <p className="text-2xl font-bold text-purple-600">18</p>
          </div>
        </div>

        {/* Grafik Klik */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Klik Website per Bulan
          </h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="clicks"
                  stroke="#2563eb"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
