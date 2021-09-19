import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link as LinkS } from "react-scroll";
import "./style.css";

const Navbar = () => {
  // State Values
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // Function to
  // const changeNav = () => {
  //   if (window.scrollY >= 80) {
  //     setScrollNav(true);
  //   } else {
  //     setScrollNav(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", changeNav);
  // }, []);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  // // This function utilizes animateScroll from 'react-icons' to scroll to the top of the page
  // const toggleHome = () => {
  //   scroll.scrollToTop();
  // };

  // showButton shows our mobile Nav menu button only when the screen width drops below 960 px utilizing useEffect below.
  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className='navbar'>
          <div className='navbar-container'></div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
