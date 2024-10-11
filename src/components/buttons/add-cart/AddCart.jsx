import React from "react";

const AddToCartButton = ({ added, onClick }) => {
  return (
    <button
      className={`${
        added ? "bg-green-500" : "bg-yellow-400"
      } mb-2 text-white font-bold py-2 rounded-lg w-full transition-colors duration-300`}
      onClick={onClick}
    >
      {added ? "Added to Cart" : "Add to Cart"}
    </button>
  );
};

export default AddToCartButton;