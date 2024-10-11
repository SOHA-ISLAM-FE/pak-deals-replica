import React, { useState } from "react";
import { Link } from "react-router-dom";
import { slides } from "../../../utils/product/ProductData";

function HomeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${
            index === currentIndex ? "opacity-100" : "opacity-0"
          } absolute inset-0 transition-opacity duration-1000 ease-in-out`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
            <Link
              to={slide.buttonLink}
              className="mt-6 px-3 py-2 bg-gray-500 hover:bg-yellow-600 text-black font-semibold rounded"
            >
              {slide.LimitedEditionText}
            </Link>
            <h2 className="text-4xl font-bold">{slide.title}</h2>
            <p className="text-xl mt-4">{slide.subtitle}</p>
            <Link
              to={slide.buttonLink}
              className="mt-6 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded"
            >
              {slide.shopText}
            </Link>
          </div>
        </div>
      ))}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white px-3 py-2 rounded-circle shadow hover:bg-gray-200"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white px-3 py-2 rounded-circle shadow hover:bg-gray-200"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
}

export default HomeCarousel;