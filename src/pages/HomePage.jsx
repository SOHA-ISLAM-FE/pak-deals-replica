import React from "react";
import HomeCarousel from "../section/landing-section/home-carousel/HomeCarousel";
import Navbar from "..//components/navbar/Navbar";
import MajorSavings from "../section/landing-section/major-savings/MajorSavings";
import Blogs from "../components/blogs/Blogs";
import BestSellers from "../section/landing-section/best-sellers/BestSellers";
import TopRated from "../section/landing-section/top-rated-products/TopRated";
import SaveOnDevices from "../section/landing-section/save-on-category/SaveOnDevices";
import BannerReality from "../section/landing-section/banner-headset/BannerReality";
import BannerVirtual from "../section/landing-section/banner-headset/BannerVirtual";
import CategoryList from "../section/landing-section/category-list/CategoryList";
import ShopCategory from "../components/shop-category/ShopCategory";
import Footer from "../section/footer/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <HomeCarousel />
      <CategoryList />
      <MajorSavings />
      <BestSellers />
      <BannerReality />
      <SaveOnDevices />
      <ShopCategory/>
      <BannerVirtual />
      <TopRated />
      <Blogs />
      <Footer/>
    </>
  );
}

export default HomePage;
