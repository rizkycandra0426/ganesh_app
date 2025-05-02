import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      <Navbar />

      <section
        className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/header-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative text-center px-6">
          <h2 className="text-5xl font-bold">Portfolio Kami</h2>
          <p className="text-lg mt-2">
            Berbagai hasil karya terbaik kami dalam desain dan konstruksi.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[80px]"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1000 120"
          >
            <path
              d="M321.39 56.39c58.53 10.51 117.67 10.48 
        176.17-.11 59.76-10.75 119.44-26.19 179.19-26.18 
        60.06.01 120.04 15.74 180.09 24.92 63.7 9.78 
        127.63 8.13 191.17-1.64V0H0v27.35c69.1 9.65 
        138.53 18.4 207.8 27.01 38.3 4.53 76.6 
        9.01 114.8 2.03z"
              fill="#f9fafb" // Warna bisa disesuaikan
              transform="scale(1 -1) translate(0 -120)" // Membalik shape ke bawah
            />
          </svg>
        </div>
      </section>

      <section className="bg-gray-50 grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-4 md:p-20">
        <div className="flex justify-center">
          <div className="border-2 border-red-500 p-10">
            <Image
              src="/logo.png"
              alt="Logo Scamopic Design & Build"
              width={250}
              height={250}
              className="object-contain"
            />
            <p className="text-center mt-4">Logo Scamopic Design & Build</p>
          </div>
        </div>

        <div className="text-justify space-y-4 text-black">
          <p>
            Ganesh House telah berkembang pesat di tengah industri desain
            interior Bali sejak didirikan pada tahun 2009. Dengan pengalaman
            lebih dari satu dekade, kami telah membangun keahlian dalam
            menangani berbagai kebutuhan klien yang beragam, mulai dari hunian
            pribadi hingga ruang komersial. Spesialisasi kami mencakup proyek
            hunian, komersial, desain interior dan arsitektur, manajemen proyek,
            perencanaan tata ruang, pembuatan furnitur custom, hingga
            pengembangan konsep desain yang sesuai dengan karakter dan keinginan
            klien.
          </p>
          <p>
            Hingga saat ini, Ganesh House telah berhasil menyelesaikan lebih
            dari 100 proyek konstruksi dan desain di berbagai wilayah Indonesia.
            Kepercayaan yang terus diberikan oleh para pelanggan menjadi bukti
            nyata dari komitmen kami terhadap kualitas, inovasi, dan layanan
            yang profesional.
          </p>
        </div>
      </section>

      {/* Section: Visi Misi */}
      <section
        className="relative text-white py-20 px-6 md:px-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/visi-misi-bg.jpg')" }}
      >
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[80px]"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1000 120"
          >
            <path
              d="M321.39 56.39c58.53 10.51 117.67 10.48 
        176.17-.11 59.76-10.75 119.44-26.19 179.19-26.18 
        60.06.01 120.04 15.74 180.09 24.92 63.7 9.78 
        127.63 8.13 191.17-1.64V0H0v27.35c69.1 9.65 
        138.53 18.4 207.8 27.01 38.3 4.53 76.6 
        9.01 114.8 2.03z"
              fill="#f9fafb" // Samakan dengan awal gradient
            />
          </svg>
        </div>
        <div className="bg-black bg-opacity-60 p-10 rounded-xl">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-900">
              VISI KAMI
            </h2>
            <ul className="list-disc space-y-4 pl-6 text-lg">
              <li className="text-lg leading-relaxed">
                Menjadi perusahaan desain interior terpercaya dan terdepan di
                Indonesia.
              </li>
              <li>
                Terus menghadirkan ide-ide segar serta meningkatkan kualitas dan
                kreativitas dalam setiap karya desain.
              </li>
              <li>
                Berkontribusi dalam pengembangan pasar tenaga kerja di bidang
                arsitektur dan desain interior, baik di dalam maupun luar
                negeri.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-900">
              MISI KAMI
            </h2>
            <ul className="list-disc space-y-4 pl-6 text-lg">
              <li>
                Mengutamakan kepuasan klien sebagai prioritas utama dalam setiap
                proyek.
              </li>
              <li>
                Menjalankan setiap proyek dengan totalitas dan dedikasi penuh.
              </li>
              <li>
                Menjaga hubungan yang baik dan berkelanjutan dengan seluruh
                klien dan pemangku kepentingan.
              </li>
              <li>
                Memberikan hasil desain berkualitas tinggi yang selaras dengan
                kebutuhan dan karakter setiap klien.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
