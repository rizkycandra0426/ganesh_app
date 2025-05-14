// components/Sidebar.js
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-900 text-white flex flex-col p-6 space-y-6 min-h-screen">
      <h2 className="text-2xl font-bold">Admin Panel</h2>
      <nav className="flex flex-col space-y-4">
        <Link href="/admin" className="hover:underline">
          Dashboard
        </Link>
        <Link href="/admin/portofolio" className="hover:underline">
          Portofolio
        </Link>
        <Link href="/admin/project" className="hover:underline">
          Project
        </Link>
      </nav>
    </aside>
  );
}
