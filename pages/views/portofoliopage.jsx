import {
  FaTimes,
  FaMapMarkerAlt,
  FaRuler,
  FaHome,
  FaCalendarAlt,
} from "react-icons/fa";
import Head from "next/head";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { filterData, getJsonPublicPath } from "@/helpers/json";
import { useState, useEffect, useRef } from "react";

export default function PortfolioPage() {

  const [datas, setDatas] = useState([]);
  const [filteredDatas, setFilteredDatas] = useState(datas);
  const [categories, setCategories] = useState([]); // ← Ini harus di atas
  const [selectedCategory, setSelectedCategory] = useState(""); // ← Ini yang error tadi
  const [searchQuery, setSearchQuery] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const firstRender = useRef(true);

  useEffect(() => {
	const jsonPublicPath = getJsonPublicPath("porto");

	const fetchData = async () => {
		const res = await fetch(jsonPublicPath);
		const jsonData = await res.json();
		if(!jsonData['datas']) {
			setDatas([]);
		}
		setDatas(jsonData["datas"] ?? []);

		const categories = jsonData["categories"] ?? [];
		setCategories(categories);
		setSelectedCategory(categories.length > 0 ? categories[0] : "");
	}

	fetchData();
  },[]);

  useEffect(() => {
	if(firstRender.current) {
		firstRender.current = false;
      	return;
	}
	const additionalFilter = (data) => data['category'] == selectedCategory;
	setFilteredDatas(filterData(datas, searchQuery, additionalFilter));
  }, [searchQuery, selectedCategory]);

  const openModal = (item) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedItem.images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedItem.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <Head>
        <title>Our Full Portfolio | Your Company Name</title>
        <meta
          id="portfolio"
          name="description"
          content="Browse our complete portfolio of design projects"
        />
      </Head>
      <Navbar />
      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mt-20 mb-10">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Our Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our completed projects and get inspired for your next
              design
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 font-semibold rounded-lg ${
                  selectedCategory === category
                    ? "bg-red-500 text-white"
                    : "bg-white text-red-700"
                } transition duration-300`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          {/* Search Bar */}
          <div className="max-w-md mx-auto mt-10 mb-12">
            <input
              type="text"
              placeholder="Search projects by name or location..."
              className="w-full text-black p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Portfolio Grid */}
          {filteredDatas.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredDatas.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => openModal(item)}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.images.length > 0 ? item.images[0] : "/images/image-placeholder.png" }
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-sm" />
                      {item.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No projects found matching your search
              </p>
            </div>
          )}

          {/* Modal */}
          {selectedItem && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                {/* Modal Header */}
                <div className="flex justify-between items-center p-6 border-b">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {selectedItem.name}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    <FaTimes />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="flex-1 overflow-auto flex flex-col md:flex-row">
                  {/* Image Gallery */}
                  <div className="md:w-2/3 relative">
                    <img
                      src={selectedItem.images[currentImageIndex]}
                      alt={selectedItem.name}
                      className="w-full h-full max-h-[60vh] object-contain"
                    />

                    {/* Navigation Arrows */}
                    {selectedItem.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-opacity-100 transition-all"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-opacity-100 transition-all"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </>
                    )}

                    {/* Thumbnails */}
                    <div className="flex p-4 space-x-2 overflow-x-auto">
                      {selectedItem.images.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          className={`w-16 h-16 object-cover rounded cursor-pointer ${
                            currentImageIndex === index
                              ? "ring-2 ring-blue-500"
                              : "opacity-70"
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="md:w-1/3 p-6 border-t md:border-t-0 md:border-l border-gray-200">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">
                          Project Details
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <FaMapMarkerAlt className="text-gray-500 mr-3" />
                            <div>
                              <p className="text-sm text-gray-500">Location</p>
                              <p className="text-gray-800">
                                {selectedItem.location} 
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <FaRuler className="text-gray-500 mr-3" />
                            <div>
                              <p className="text-sm text-gray-500">Land Area</p>
                              <p className="text-gray-800">
                                {selectedItem.land_area.toLocaleString('id-ID')} m²
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <FaHome className="text-gray-500 mr-3" />
                            <div>
                              <p className="text-sm text-gray-500">
                                Building Area
                              </p>
                              <p className="text-gray-800">
                                {selectedItem.building_area.toLocaleString('id-ID')} m²
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <FaCalendarAlt className="text-gray-500 mr-3" />
                            <div>
                              <p className="text-sm text-gray-500">Duration</p>
                              <p className="text-gray-800">
                                {selectedItem.duration.toLocaleString('id-ID')} months
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                          Description
                        </h4>
                        <p className="text-gray-600">
                          {selectedItem.description}
                        </p>
                      </div>

                      {selectedItem.features && (
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-2">
                            Key Features
                          </h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {selectedItem.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <button className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors mt-4">
                        Contact Us for Similar Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
