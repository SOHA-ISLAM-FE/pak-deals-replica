import img1 from "../../assets/images/Surface 1-4.png";
import fashionImg from "../../assets/images/fashion.png";
import techImg from "../../assets/images/tech.png";
import groceryImg from "../../assets/images/grocery.png";
import sportsImg from "../../assets/images/sports.png";
import homeImg from "../../assets/images/fashion.png";
import electronicsImg from "../../assets/images/electronics.png";
import coverHome from "../../assets/images/Surface 2.png";
import coverHome1 from "../../assets/images/headsetRed.png";
import coverHome2 from "../../assets/images/bb.png";

const Products = [
  {
    image: img1,
    title: "KINLO Hydrating Golden Facial Mist with Sweet",
    brand: "SONY",
    price: "$32.50",
    originalPrice: "$45",
    reviews: "3,014 reviews",
    category: ["Grocery", "Top Rated", "Top 20", "Save on"],
  },
  {
    image: img1,
    title: "KINLO Hydrating Golden Facial Mist with Sweet",
    brand: "SONY",
    price: "$32.50",
    originalPrice: "$45",
    reviews: "3,014 reviews",
    category: ["Grocery", "Top Rated", "Save on"],
  },
  {
    image: img1,
    title: "Graco SlimFit 3-in-1 Car Seat, Saves Space in Your Car",
    brand: "SONY",
    price: "$399.00",
    originalPrice: "$450",
    reviews: "3,014 reviews",
    category: ["Baby", "Save on"],
  },
  {
    image: img1,
    title: "Graco SlimFit 3-in-1 Car Seat, Saves Space in Your Car",
    brand: "SONY",
    price: "$399.00",
    originalPrice: "$450",
    reviews: "3,014 reviews",
    category: ["Kitchen"],
  },
  {
    image: img1,
    title: "Marketside Large Cage Free Brown Eggs, 36 Oz, 18 Ct",
    brand: "ROLEX",
    price: "$18.12",
    originalPrice: "$45",
    reviews: "3,014 reviews",
    category: ["Grocery", "Best Sellers"],
  },
  {
    image: img1,
    title: "Marketside Large Cage Free Brown Eggs, 36 Oz, 18 Ct",
    brand: "ROLEX",
    price: "$18.12",
    originalPrice: "$45",
    reviews: "3,014 reviews",
    category: ["Grocery", "Best Sellers"],
  },
];

export const blogs = [
  {
    imageSrc: fashionImg,
    altText: "Fashion",
    title: "Tips and Trick",
    subtitle: "Collar brings back coffee brewing ritual",
    date: "April 06, 2023",
  },
  {
    imageSrc: techImg,
    altText: "Tech",
    title: "Tips and Trick",
    subtitle: "Collar brings back coffee brewing ritual",
    date: "April 06, 2023",
  },
  {
    imageSrc: groceryImg,
    altText: "Grocery",
    title: "Tips and Trick",
    subtitle: "Collar brings back coffee brewing ritual",
    date: "April 06, 2023",
  },
  {
    imageSrc: groceryImg,
    altText: "Grocery",
    title: "Tips and Trick",
    subtitle: "Collar brings back coffee brewing ritual",
    date: "April 06, 2023",
  },
];

export const majorSavings = [
  {
    imageSrc: fashionImg,
    altText: "Fashion",
    description: "Up to 40% off fashion",
  },
  { imageSrc: techImg, altText: "Tech", description: "Up to 25% off tech" },
  {
    imageSrc: groceryImg,
    altText: "Grocery",
    description: "Up to 75% off grocery",
  },
  {
    imageSrc: sportsImg,
    altText: "Sports",
    description: "Up to 75% off sports",
  },
  { imageSrc: homeImg, altText: "Home", description: "Up to 75% off home" },
  {
    imageSrc: electronicsImg,
    altText: "Electronics",
    description: "Up to 75% off electronics",
  },
];

export const slides = [
  {
    id: 1,
    image: coverHome,
    LimitedEditionText: "Limited Edition",
    title: "Modern Dinning Chair",
    subtitle: "Discover our new items. Up to 25% Off !",
    shopText: "Shop Now",
    buttonLink: "#",
    category: "Furniture",
  },
  {
    id: 2,
    image: coverHome1,
    LimitedEditionText: "Limited Edition",
    title: "Modern Baby Stroller",
    subtitle: "Get the best for your baby. Up to 20% Off!",
    shopText: "Shop Now",
    buttonLink: "#",
    category: "Baby",
  },
  {
    id: 3,
    image: coverHome2,
    LimitedEditionText: "Limited Edition",
    title: "Fresh Groceries Delivered",
    subtitle: "Shop now for fresh and organic groceries.",
    shopText: "Shop Now",
    buttonLink: "#",
    category: "Grocery",
  },
];
export default Products;