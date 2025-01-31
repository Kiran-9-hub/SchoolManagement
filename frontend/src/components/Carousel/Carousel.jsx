import React, { useState } from "react";

const Carousel = () => {
  const divs = [
    { id: 1, color: "bg-red-400" },
    { id: 2, color: "bg-blue-400" },
    { id: 3, color: "bg-green-400" },
    { id: 4, color: "bg-yellow-400" },
    { id: 5, color: "bg-purple-400" },
  ];

  const [startIndex, setStartIndex] = useState(0); // Tracks the start of visible divs

  // Calculate visible divs
  const visibleDivs = divs.slice(startIndex, startIndex + 3);

  const nextSlide = () => {
    if (startIndex + 3 < divs.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden mt-20">
      {/* Carousel Container */}
      <div className="flex gap-4">
        {visibleDivs.map((div, index) => (
          <div
            key={div.id}
            className={`flex-shrink-0 w-1/3 h-[300px] ${div.color} rounded-md shadow-lg`}
            style={{
              transform: index === 1 ? "translateY(-20px)" : "translateY(0)",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <h2 className="text-white text-2xl flex items-center justify-center h-full">
              Div {div.id}
            </h2>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
        <button
          onClick={prevSlide}
          className="bg-gray-800 text-white rounded-full px-4 py-2 hover:bg-gray-600"
          disabled={startIndex === 0}
        >
          {"<"}
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-800 text-white rounded-full px-4 py-2 hover:bg-gray-600"
          disabled={startIndex + 3 >= divs.length}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
