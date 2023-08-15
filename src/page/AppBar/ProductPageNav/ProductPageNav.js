import React, { useState } from "react";
import "../Navbar.css";
import "./ProductPageNav.css"
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductPageNav() {
  const handleNavLinkClick = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  const handleLinkClick = () => {
    handleScrollToTop();
    handleNavLinkClick();
  };

  const handleScrollToTop = () => {
    scroll.scrollToTop({
      smooth: true,
      duration: 50,
    });
  };
  const [navActive, setNavActive] = useState(false);
  const [colorChange, setColorChange] = useState(false);

  const navbarColorChange = () => {
    if (window.scrollY >= 30) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", navbarColorChange);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <div>
      <nav id="product-page-nav" className={colorChange ? "navbar colorChange" : "navbar"}>
        <Link to="/" className="logo" onClick={handleLinkClick}>
          <div className={colorChange ? "img imgColorChange" : "img"}></div>
        </Link>
        <div className={navActive ? "nav-links nav-active" : "nav-links"}>
          <ul className="social-links">
            <li className="product-nav product-nav-animated">
              <Link to="/product" onClick={handleScrollToTop}>
                Product
              </Link>
              <ul
                id="flex-set"
                className="dropdown-product dropdown-product-animated"
              >
                <li className="dropdown_item-1">Item 1</li>
                <li className="dropdown_item-2">Item 2</li>
                <li className="dropdown_item-3">Item 3</li>
                <li className="dropdown_item-4">Item 4</li>
                <li className="dropdown_item-5">Item 5</li>
              </ul>
            </li>
            <li>
              <Link to="/contact" onClick={handleScrollToTop}>
                Contact
              </Link>
            </li>
            {/* <li>
              <a href="/">
                <FaTwitter />
              </a>
            </li> */}
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/">Prizing</Link>
            </li>
            <li>
              <Link to="/login" className="op-nav-link">
                Login
              </Link>
            </li>
          </ul>
          <ul className="sidebar-menu-links">
            <li>
              <Link to={"/"} className="menu-links-a menu-links-a1">
                HOME
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="menu-links-a">
                CONTACT
              </Link>
            </li>
            <li>
              <Link to={"/"} className="menu-links-a">
                WORK
              </Link>
            </li>
            <li>
              <Link to={"/"} className="menu-links-a">
                BOOKING
              </Link>
            </li>
            <li>
              <Link to={"/"} className="menu-links-a">
                Chats
              </Link>
            </li>
          </ul>
        </div>
        <div className="burger" onClick={toggleNav}>
          <h1>
            <FaBars />
          </h1>
        </div>
      </nav>
      <div className="gradient-purple"></div>
      <div className="gradient-purple is--order"></div>
    </div>
  );
}

export default ProductPageNav;
