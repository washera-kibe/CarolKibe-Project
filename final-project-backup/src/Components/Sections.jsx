// src/components/ProductsSection.js
import React from "react";
import { Link } from "react-router-dom";

const Sections = () => {
  const products = [
    { id: 1, name: "Acrylic Paint", price: 1363, imgSrc: "/src/assets/Acrylic.jpg" },
    { id: 2, name: "Brushes", price: 709, imgSrc: "/src/assets/Water brushes.jpg" },
    { id: 3, name: "Drawing Book", price: 1094, imgSrc: "/src/assets/Drawing book.jpg" },
    { id: 4, name: "Canvas", price: 1503, imgSrc: "/src/assets/Canvas 2.jpg" },
    { id: 5, name: "Marker Pen", price: 746, imgSrc: "/src/assets/Marker.jpg" },
    { id: 6, name: "Tool Set", price: 1636, imgSrc: "/src/assets/Tools.jpg" },
    { id: 7, name: "Crayons", price: 450, imgSrc: "/src/assets/Crayons 3.jpg" },
    { id: 8, name: "Water Color", price: 658, imgSrc: "/src/assets/Water colors.jpg" },
  ];

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
    // later connect to context or localStorage
  };

  return (
    <div id="products" className="container mx-auto py-16">
      <h2 className="text-center text-3xl font-bold">Our Products</h2>

      <div className="grid grid-cols-4 gap-8 mt-10">
        {products.map((product) => (
          <div key={product.id} className="text-center">

            {/* Image container to position + button */}
            <div className="relative">
              <img
                src={product.imgSrc}
                alt={product.name}
                className="rounded-lg w-full h-48 object-cover"
              />

              {/* + Button bottom-left */}
              <button
                onClick={() => handleAddToCart(product)}
                className="absolute bottom-2 right-2 bg-cyan-500 hover:bg-cyan-600 text-white
                           w-10 h-10 rounded-full flex items-center justify-center text-xl
                           shadow-lg"
              >
                +
              </button>
            </div>

            <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
            <p className="text-lg text-gray-700">KES {product.price}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Sections;
