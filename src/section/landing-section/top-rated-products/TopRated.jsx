import React, { useState, useEffect } from "react";
import Carousel from "../../../components/carousel/Carousel";
import Products from "../../../utils/product/ProductData";
import breakpoints from "../../../utils/breakpoints/Breakpoints";
import TabsFilter from "../../../components/tabs/TabsFilter";
import NoDataImg from "../../../components/no-data-found/NoDataImg";

function TopRated() {
  const categories = ["See All"];
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = Products.filter((product) =>
      product.category.includes("Top Rated")
    );
    setFilteredProducts(filtered);
  }, []);

  const handleCategoryChange = (category) => {
    if (category === "See All") {
      setFilteredProducts(
        Products.filter((product) => product.category.includes("Top Rated"))
      );
    } else {
      const filtered = Products.filter((product) =>
        product.category.includes(category)
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="my-5">
      <div className="flex justify-between items-center mx-2">
        <h2 className="mx-5 mb-0">Top Rated Products</h2>
        <TabsFilter
          categories={categories}
          onSelectCategory={handleCategoryChange}
        />
      </div>
      {filteredProducts.length === 0 ? (
        <div className="flex flex-col justify-center items-center my-10">
          <NoDataImg />
        </div>
      ) : (
        <Carousel
          slides={filteredProducts}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={breakpoints}
          showNavigation={true}
          showPagination={false}
        />
      )}
    </div>
  );
}

export default TopRated;