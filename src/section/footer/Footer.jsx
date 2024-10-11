import React from "react";
import phone from "../../assets/images/phone.png";
import email from "../../assets/images/email.png";
import apple from "../../assets/images/apple.png";
import SocialLinks from "../../components/social-links/SocialLinks";
import { Link } from "react-router-dom";
import PaymentMethod from "../../components/payment-method/PaymentMethod";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-8">
      <div className="container mx-auto md:px-2">
        <div className="flex xs:grid-cols-1 sm:grid-cols-1 flex-col lg:flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <h6 className="text-blue-gray-900 font-bold text-center md:text-left">
            Subscribe and get 20% discount.
          </h6>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="border rounded px-4 py-2 w-full md:w-64"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold mx-1 px-4 py-2 rounded">
              Subscribe
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          <div>
            <h6 className="font-bold text-blue-gray-900 mb-4">Contact Us</h6>
            <p className="flex items-center">
              <img src={phone} className="w-6 h-5 mr-3" alt="not found" />
              Monday-Friday: 08am-9pm <br />+ (1) 123 456 7890
            </p>
            <p className="flex items-center">
              <img src={email} className="w-6 h-5 mr-3" alt="not found" />
              Need help with your order? <br />
              support@pakdeals.com
            </p>
          </div>
          <div>
            <h6 className="font-bold text-blue-gray-900 mb-4">About Zenmart</h6>
            <ul className="pl-0">
              <li className="mb-2">
                <Link to="#" className="text-dark text-decoration-none">
                  Track Your Order
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-dark text-decoration-none">
                  Product Guides
                </Link>
              </li>
              <li>
                <Link to="#" className="text-dark text-decoration-none">
                  Wishlists
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold mb-4">Customer Support</h6>
            <ul className="pl-0">
              <li className="mb-2">
                <Link to="#" className="text-dark text-decoration-none">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-dark text-decoration-none">
                  Help Centre
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold mb-4">Services</h6>
            <ul className="pl-0">
              <li className="mb-2">
                <Link to="#" className="text-dark text-decoration-none">
                  Trade-In Program
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-dark text-decoration-none">
                  Electronics Recycling
                </Link>
              </li>
              <li>
                <Link to="#" className="text-dark text-decoration-none">
                  Best Buy Health
                </Link>
              </li>
            </ul>
          </div>
          <div className="gap-6">
            <h6 className="font-bold text-blue-gray-900 mb-3">Follow us</h6>
            <div className="flex space-x-4 flex">
              <SocialLinks />
            </div>
            <div className="mt-4">
              <h6 className="font-bold text-blue-gray-900 mb-3">Mobile Apps</h6>
              <div className=" flex d-grid">
                <span className="flex">
                  <img src={apple} alt="alsd" className="w-4 h-4 mt-1" />
                  <p className="ml-3">iOS App</p>
                </span>
                <span className="flex">
                  <img src={apple} alt="alsd" className="w-4 h-4 mt-1" />
                  <p className="ml-3">Android App</p>
                </span>
              </div>
              <h6 className="font-bold text-blue-gray-900 mb-3">We accept</h6>
              <div className="flex space-x-4 flex">
                <PaymentMethod/>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; 2022 Zenmart. All Rights Reserved.</p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <select className="border border-gray-300 rounded-md p-2">
              <option>Currency USD</option>
            </select>
            <select className="border border-gray-300 rounded-md">
              <option>Language English</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}