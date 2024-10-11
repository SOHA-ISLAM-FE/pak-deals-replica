import React, { useState } from "react";
import ShopIcons from "../shop-icons/ShopIcons";
import AddToCartButton from "../buttons/add-cart/AddCart";
import StarRating from "../buttons/star-rating/StarRating";

const ProductCard = ({ product, index }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [addedToCart, setAddedToCart] = useState({});
  const handleAddToCart = () => {
    setAddedToCart((prevState) => ({
      ...prevState,
      [index]: true,
    }));
  };
  return (
    <div
      className={`relative p-6 rounded-lg card-shadow-box transition-all duration-300 ${
        hoveredIndex === index ? "shadow-xl" : "shadow-none"
      }`}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-45 w-full object-cover mb-0"
      />
      {hoveredIndex === index && <ShopIcons />}
      {hoveredIndex === index && (
        <AddToCartButton
          added={!!addedToCart[index]}
          onClick={handleAddToCart}
        />
      )}
      <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
      <h3
        className={`text-lg font-semibold mb-2 transition-all duration-300 ${
          hoveredIndex === index ? "underline" : ""
        }`}
      >
        {product.title}
      </h3>
      <div className="flex items-center justify-between">
        <StarRating count={5} />
        <p className="text-gray-400 text-sm mt-3">{product.reviews}</p>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-blue-600">{product.price}</span>
        <span className="line-through text-gray-400">
          {product.originalPrice}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;