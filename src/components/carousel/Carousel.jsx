import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import ShopIcons from "../shop-icons/ShopIcons";
import AddToCartButton from "../buttons/add-cart/AddCart";
import StarRating from "../buttons/star-rating/StarRating";

const Carousel = ({
  slides,
  slidesPerView = 1,
  spaceBetween = 20,
  breakpoints,
  showNavigation = true,
  showPagination = false,
}) => {
  const [addedToCart, setAddedToCart] = useState({});
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleAddToCart = (index) => {
    console.log(`Button clicked for item at index ${index}`);
    setAddedToCart((prevState) => ({
      ...prevState,
      [index]: true,
    }));
  };

  return (
    <div className="max-w-7xl mx-auto py-0 px-4">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={showNavigation}
        pagination={showPagination}
        breakpoints={breakpoints}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`relative p-6 rounded-lg card-shadow-box mx-2 my-5 transition-all duration-300 ${
                hoveredIndex === index ? "shadow-xl" : "shadow-none"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="h-45 w-full object-cover mb-0"
              />
              {hoveredIndex === index && <ShopIcons />}
              {hoveredIndex === index && (
                <AddToCartButton
                  added={!!addedToCart[index]}
                  onClick={() => handleAddToCart(index)}
                />
              )}
              <p className="text-sm text-gray-500 mb-1">{slide.brand}</p>
              <h3
                className={`text-lg font-semibold mb-2 transition-all duration-300 ${
                  hoveredIndex === index ? "underline" : ""
                }`}
              >
                {slide.title}
              </h3>
              <div className="flex items-center justify-between mx-0 px-0">
                <StarRating count={5} />
                <p className="text-gray-400 text-sm ms-2 my-1 w-max">
                  {slide.reviews}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-blue-600">
                  {slide.price}
                </span>
                <span className="line-through text-gray-400">
                  {slide.originalPrice}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;