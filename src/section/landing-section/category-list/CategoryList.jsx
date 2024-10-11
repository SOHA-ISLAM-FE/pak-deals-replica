import React from "react";
import img1 from "../../../assets/images/Surface 1-17.png";

const categories = [
  { name: "Electronics", imgSrc: img1 },
  { name: "Clothings", imgSrc: img1 },
  { name: "Health", imgSrc: img1 },
  { name: "Home", imgSrc: img1 },
  { name: "Furniture", imgSrc: img1 },
  { name: "Grocery", imgSrc: img1 },
  { name: "Games", imgSrc: img1 },
  { name: "Babies", imgSrc: img1 },
];

function CategoryList() {
  return (
    <div className="overflow-overlay flex space-x-8 py-4 bg-white mx-[30px]">
      {categories.map((category, index) => (
        <div key={index} className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-full overflow-hidden bg-[#F3F5F6] p-2 border-[#F3F5F6]">
            <img
              src={category.imgSrc}
              alt={category.name}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-gray-800 font-medium">{category.name}</p>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;