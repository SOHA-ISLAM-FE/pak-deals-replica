import React, { useState } from "react";
import { styled } from "styled-components";
import imgLogo from "../../assets/images/logo.png";
import Header from "../../section/header/Header";
import NavbarLinks from "../../section/header/NavbarLinks";

const ShippingBar = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;
const MenuButton = styled.button`
  @media (min-width: 768px) {
    display: none;
  }
`;
const Nav = styled.div`
  @media (max-width: 957px) {
    width: -webkit-fill-available;
    display: -webkit-inline-box;
    overflow: overlay;
  }
`;

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={closeDrawer}
        ></div>
      )}
      <ShippingBar id="shippingBar">
       <Header/>
        <Nav className="flex justify-between items-center py-4 px-6">
          <div className="flex items-center">
            <img src={imgLogo} alt="Logo" className="w-20 h-8" />
          </div>
          <div className="flex items-center w-full max-w-lg mx-4 bg-gray-100 rounded-full">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 bg-transparent outline-none"
            />
            <select className="text-sm bg-transparent px-4 py-2 rounded-l-full outline-none">
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
            </select>
            <button className="px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </div>
          <div className="flex flex-row space-x-4 p-4">
          <NavbarLinks/>
          </div>
        </Nav>
      </ShippingBar>
      <div className="block md:hidden">
        <MenuButton className="btn !rounded-none btn-primary w-webkit-fill" onClick={toggleDrawer}>
          <span>Menu</span>
        </MenuButton>
        <div
          className={`fixed inset-0 bg-white z-50 transition-transform transform ${
            drawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 bg-gray-200">
            <img src={imgLogo} alt="sf" />
            {drawerOpen && (
              <button onClick={closeDrawer}>
                <span className="btn btn-primary mx-1 rounded-0">X</span>
              </button>
            )}
          </div>
          <div className="flex flex-col space-y-4 p-4">
          <NavbarLinks/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;