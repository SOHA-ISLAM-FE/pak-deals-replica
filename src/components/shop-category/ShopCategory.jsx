import React, { useState } from "react";
import ProductCard from "../card/ProductCard";
import Products from "../../utils/product/ProductData";
import TabsFilter from "../tabs/TabsFilter";
import NoDataImg from "../no-data-found/NoDataImg";
const ShopCategory = () => {
  const categories = [
    "Electronic",
    "Baby",
    "Clothings",
    "Furniture",
    "Grocery",
    "Toy&Video Games",
    "Kitchen",
    "Beauty",
  ];
  const [filteredProducts, setFilteredProducts] = useState(Products);

  const handleCategoryChange = (category) => {
    if (category === "Electronic") {
      setFilteredProducts(Products);
    } else {
      const filtered = Products.filter((product) =>
        product.category.includes(category)
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="max-w-7xl mx-auto my-5 px-4">
      <div className="my-5 flex justify-between items-center">
        <h6 className="text-3xl mr-5">Shop Categories</h6>
        <TabsFilter
          categories={categories}
          onSelectCategory={handleCategoryChange}
        />
      </div>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-10">
         <NoDataImg/>
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
