import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoImage from "../assets/images/logo.png";
import { GoChevronDown } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function NavSecond() {
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState(false);

  // const handleActiveClick = () => {
  //   setActive(!active);
  // };

  const handleActiveClick = (paragraph) => {
    setActive(paragraph === active ? false : paragraph);
  };

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="w-full h-[60px] flex flex-row max-w-[1177px] py-[19px] mx-auto px-3 xl:px-0">
        <div className="w-full mx-auto flex flex-row font-lato italic items-center justify-between text-[#0D0E43] text-[16px] font-[400] line">
          <img src={LogoImage} alt="" />
          <div className="flex-row gap-[36px] hidden md:flex">
            <NavLink to="/">
              <p
                className={`cursor-pointer flex flex-row gap-1 group items-center ${
                  active === "home" ? "text-[#FB2E86]" : "text-[#0D0E43]"
                }`}
                onClick={() => handleActiveClick("home")}
              >
                Home{" "}
                {active === "home" && (
                  <p className="block">
                    <GoChevronDown color="#FB2E86" />
                  </p>
                )}
              </p>
            </NavLink>
            <NavLink to="/pages">
              <p
                className={`cursor-pointer flex flex-row gap-1 group items-center ${
                  active === "pages" ? "text-[#FB2E86]" : "text-[#0D0E43]"
                }`}
                onClick={() => handleActiveClick("pages")}
              >
                Pages
                {active === "pages" && (
                  <p className="block">
                    <GoChevronDown color="#FB2E86" />
                  </p>
                )}
              </p>
            </NavLink>
            <NavLink to="/products">
              <p
                className={`cursor-pointer flex flex-row gap-1 group items-center ${
                  active === "products" ? "text-[#FB2E86]" : "text-[#0D0E43]"
                }`}
                onClick={() => handleActiveClick("products")}
              >
                Products
                {active === "products" && (
                  <p className="block">
                    <GoChevronDown color="#FB2E86" />
                  </p>
                )}
              </p>
            </NavLink>
            <NavLink to="/blogs">
              <p
                className={`cursor-pointer flex flex-row gap-1 group items-center ${
                  active === "blog" ? "text-[#FB2E86]" : "text-[#0D0E43]"
                }`}
                onClick={() => handleActiveClick("blog")}
              >
                Blog
                {active === "blog" && (
                  <p className="block">
                    <GoChevronDown color="#FB2E86" />
                  </p>
                )}
              </p>
            </NavLink>
            <NavLink to="/shop">
              <p
                className={`cursor-pointer flex flex-row gap-1 group items-center ${
                  active === "shop" ? "text-[#FB2E86]" : "text-[#0D0E43]"
                }`}
                onClick={() => handleActiveClick("shop")}
              >
                Shop
                {active === "shop" && (
                  <p className="block">
                    <GoChevronDown color="#FB2E86" />
                  </p>
                )}
              </p>
            </NavLink>
            <NavLink to="/contact">
              <p
                className={`cursor-pointer flex flex-row gap-1 group items-center ${
                  active === "contact" ? "text-[#FB2E86]" : "text-[#0D0E43]"
                }`}
                onClick={() => handleActiveClick("contact")}
              >
                Contact
                {active === "contact" && (
                  <p className="block">
                    <GoChevronDown color="#FB2E86" />
                  </p>
                )}
              </p>
            </NavLink>
          </div>
          <form className="hidden lg:flex items-center form-div">
            <input
              type="text"
              className="max-w-[317px] h-[40px] border-[2px] border-[#E7E6EF]"
            />

            <button className="bg-[#FB2E86] text-white py-[9px] px-[14px]">
              <FaSearch size={20} />
            </button>
          </form>
          <div className="md:hidden z-20 " onClick={handleClick}>
            {nav ? (
              <FaTimes size={30} color="gray" />
            ) : (
              <FaBars size={30} color="gray" />
            )}
          </div>
          <ul
            className={
              nav
                ? "absolute top-0 left-0 w-full h-full bg-[#7E33E0] flex flex-col justify-center items-center z-10"
                : "hidden"
            }
          >
            <NavLink to="/" onClick={handleClick}>
              <li className="py-6 text-4xl cursor-pointer text-white">Home</li>
            </NavLink>
            <NavLink to="/pages">
              <li className="py-6 text-4xl cursor-pointer text-white">Pages</li>
            </NavLink>
            <NavLink to="/products" onClick={handleClick}>
              <li className="py-6 text-4xl cursor-pointer text-white">
                Products
              </li>
            </NavLink>
            <NavLink to="/blog" onClick={handleClick}>
              <li className="py-6 text-4xl cursor-pointer text-white">Blog</li>
            </NavLink>

            <NavLink to="/shop" onClick={handleClick}>
              <li className="py-6 text-4xl cursor-pointer text-white">Shop</li>
            </NavLink>
            <NavLink to="/contact" onClick={handleClick}>
              <li className="py-6 text-4xl cursor-pointer text-white">
                Contact
              </li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </>
  );
}
