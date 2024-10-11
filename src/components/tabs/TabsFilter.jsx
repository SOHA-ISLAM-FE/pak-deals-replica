import React, { useState } from "react";

const TabsFilter = ({ categories, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="tabs flex overflow-x-auto justify-end space-x-1">
      {categories.map((category) => (
        <span
          key={category}
          to="#"
          className={`py-2 px-4 ${
            selectedCategory === category ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleCategorySelect(category);
          }}
        >
          {category}
        </span>
      ))}
    </div>
  );
};

export default TabsFilter;
