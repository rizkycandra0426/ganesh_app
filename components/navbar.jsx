import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-red-900 shadow-md p-4 z-50 flex justify-between px-10 items-center">
      <Link href="/">
        <img
          src="/logo1.png"
          alt="Brand Logo"
          className="w-auto h-[80px] cursor-pointer"
        />
      </Link>

      <ul className="flex space-x-6 text-gray-50 items-center ">
        <li>
          <Link href="/" className="hover:text-red-700 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/layanan" className="hover:text-red-700 transition">
            Layanan
          </Link>
        </li>
        <li>
          <Link href="/portofolio" className="hover:text-red-700 transition">
            Portofolio
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-red-700 transition">
            Tentang Kami
          </Link>
        </li>
        <li>
          <Link href="/product" className="hover:text-red-700 trasition">
            {" "}
            Product
          </Link>
        </li>
        <a
          href="https://wa.me/628179981881?text=Halo%20Ganesh%20House%2C%20saya%20ingin%20konsultasi%20lebih%20lanjut" // Ganti dengan nomor WA kamu
          target="_blank"
          rel="noopener noreferrer"
          className="ml-6 bg-red-600 text-white py-2 px-6 rounded-sm hover:bg-red-700 transition font-medium"
        >
          HUBUNGI KAMI
        </a>
      </ul>
    </nav>
  );
}
