import React, { useState, useEffect } from "react";
import Carousel from "../../../components/carousel/Carousel";
import Products from "../../../utils/product/ProductData";
import TabsFilter from "../../../components/tabs/TabsFilter";
import breakpoints from "../../../utils/breakpoints/Breakpoints";
import NoDataImg from "../../../components/no-data-found/NoDataImg";

const categories = ["See All"];

function SaveOnDevices() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("See All");

  const filterProducts = (category) => {
    if (category === "See All") {
      return Products.filter((product) => product.category.includes("Save on"));
    }
  };

  useEffect(() => {
    const initialFilteredProducts = filterProducts(activeCategory);
    setFilteredProducts(initialFilteredProducts);
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setFilteredProducts(filterProducts(category));
  };

  return (
    <div className="mt-5">
      <div className="flex justify-between items-center mx-2">
        <h2 className="mx-5 mb-0">Save on TV, video, & home audio</h2>
        <TabsFilter
          categories={categories}
          onSelectCategory={handleCategoryChange}
        />
      </div>
      {filteredProducts.length > 0 ? (
        <Carousel
          slides={filteredProducts}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={breakpoints}
          showNavigation={true}
          showPagination={false}
        />
      ) : (
        <div className="flex flex-col justify-center items-center my-10">
          <NoDataImg />
        </div>
      )}
    </div>
  );
}

export default SaveOnDevices;