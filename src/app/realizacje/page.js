"use client";

import React, { useState } from "react";
import ImageGallery from "../components/ImageGallery";

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState("schody");

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Galeria Realizacji</h1>

      <div className="flex space-x-4 justify-center sm:justify-normal mx-auto navi">
        <button
          className={`px-4 py-2 rounded ${selectedCategory === "schody" ? "tab-active" : "tab-inactive"
            }`}
          onClick={() => setSelectedCategory("schody")}
        >
          Schody
        </button>
        <button
          className={`px-4 py-2 rounded ${selectedCategory === "balustrady" ? "tab-active" : "tab-inactive"
            }`}
          onClick={() => setSelectedCategory("balustrady")}
        >
          Balustrady
        </button>
      </div>

      <ImageGallery category={selectedCategory} />
      <footer className="text-center mt-10 py-4 text-gray-500">
        &copy; {new Date().getFullYear()} c-czoch.pl
      </footer>
    </div>

  );
};

export default Page;
