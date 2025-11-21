// src/components/ProductsSection.js
import React, { useState } from "react";

// IMPORT ALL IMAGES DIRECTLY
import acrylicImg from "../assets/acrylic.jpg";
import brushesImg from "../assets/waterbrushes.jpg";
import drawingbookImg from "../assets/drawingbook.jpg";
import canvasImg from "../assets/canvas2.jpg";
import markerImg from "../assets/marker.jpg";
import toolsImg from "../assets/tools.jpg";
import crayonsImg from "../assets/crayons3.jpg";
import watercolorImg from "../assets/watercolors.jpg";

const Sections = () => {

  const products = [
    { id: 1, name: "Acrylic Paint", price: 1363, imgSrc: acrylicImg },
    { id: 2, name: "Brushes", price: 709, imgSrc: brushesImg },
    { id: 3, name: "Drawing Book", price: 1094, imgSrc: drawingbookImg },
    { id: 4, name: "Canvas", price: 1503, imgSrc: canvasImg },
    { id: 5, name: "Marker Pen", price: 746, imgSrc: markerImg },
    { id: 6, name: "Tool Set", price: 1636, imgSrc: toolsImg },
    { id: 7, name: "Crayons", price: 450, imgSrc: crayonsImg },
    { id: 8, name: "Water Color", price: 658, imgSrc: watercolorImg },
  ];

  const totalPages = 3; 
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };

  return (
    <div id="products" className="container bg-gray-100 mx-auto py-5">
      <h2 className="text-center text-3xl font-bold">Our Products</h2>

      <div className="grid grid-cols-4 gap-8 mt-10">
        {products.map((product) => (
          <div key={product.id} className="text-center">
            <div className="relative">
              <img
                src={product.imgSrc}
                alt={product.name}
                className="rounded-lg w-full h-48 object-cover"
              />

              <button
                onClick={() => handleAddToCart(product)}
                className="absolute bottom-2 right-2 bg-red-500 hover:bg-red-600 text-white
                           w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-lg"
              >
                +
              </button>
            </div>

            <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
            <p className="text-lg text-gray-700">KES {product.price}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-6 mt-12">

        <button
          onClick={prevPage}
          className="text-2xl px-4 py-1 hover:text-black text-gray-500"
        >
          ←
        </button>

        <div className="flex gap-3">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-3 h-3 rounded-full ${
                currentPage === i ? "bg-black" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>

        <button
          onClick={nextPage}
          className="text-2xl px-4 py-2 hover:text-black text-gray-500"
        >
          →
        </button>

      </div>
    </div>
  );
};

export default Sections;
