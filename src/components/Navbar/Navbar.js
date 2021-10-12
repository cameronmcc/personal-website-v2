import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { DiCssdeck } from 'react-icons/di';
import { IconContext } from 'react-icons/lib';
import { Link as LinkS, animateScroll as scroll } from 'react-scroll';
import './style.css';

const Navbar = () => {
  // State Values
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const clickHandler = () => setClick(!click);

  // When the mobile menu disappears setclick sets to false
  const closeMobileMenu = () => setClick(false);

  // This function utilizes scroll.scrollToTop from react-scroll to.. you guessed it.. scroll to the top of the page!
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  // Since out contact page is in the footer, we will use this function whenevr we click the contact buttons to scroll down to the correct page.

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  // showButton shows our mobile Nav menu button only when the screen width drops below 960 px utilizing useEffect below.
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container container'>
          <a
            href='/'
            className='navbar-logo'
            onClick={[closeMobileMenu, toggleHome]}
          >
            <DiCssdeck className='navbar-icon' />
            Cameron McCloskey
          </a>
          <div className='menu-icon' onClick={clickHandler}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a href='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a href='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='/technologies'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Technologies
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='/portfolio'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a href='contact' className='btn-link'>
                <button className='btn--outline'>Contact</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* </IconContext.Provider> */}
    </>
  );
};

export default Navbar;
