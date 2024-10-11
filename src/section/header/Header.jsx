import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "../../components/social-links/SocialLinks";

function Header() {
  return (
    <div className="d-flex justify-between items-center bg-gray-100 py-1 px-4">
      <span>Free Express Shipping on orders $200!</span>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <Link className="text-gray-600 text-decoration-none">
            English / USD
          </Link>
        </div>
        <Link to="#" className="text-gray-600 text-decoration-none">
          Help Center
        </Link>
        <Link to="#" className="text-gray-600 text-decoration-none">
          Find a Store
        </Link>
        <Link to="#" className="text-gray-600 text-decoration-none">
          Follow Us
        </Link>
        <div className="flex space-x-2">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default Header;