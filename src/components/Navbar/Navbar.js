import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { DiCssdeck } from 'react-icons/di';
import { Link as LinkS, animateScroll as scroll } from 'react-scroll';
import './style.css';

const Navbar = () => {
  // State Values
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);
  // const [scrollNav, setScrollNav] = useState(false);

  // const changeNav = () => {
  //   if (window.scrollY >= 80) {
  //     setScrollNav(true);
  //   } else {
  //     setScrollNav(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', changeNav);
  // }, []);

  const clickHandler = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

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

  // window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container container'>
          <a
            href='/'
            className='navbar-logo'
            onClick={(closeMobileMenu, toggleHome)}
          >
            <DiCssdeck className='navbar-icon' />
            Cameron McCloskey
          </a>
          <div className='menu-icon' onClick={clickHandler}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <LinkS
                to='home'
                onClick={(toggleHome, closeMobileMenu)}
                className='nav-links'
                smooth={true}
                duration={1}
                spy={true}
                exact='true'
                offset={-80}
                activeClass='active'
              >
                Home
              </LinkS>
            </li>
            <li className='nav-item'>
              <LinkS
                to='about'
                spy={true}
                exact='true'
                offset={-180}
                duration={500}
                className='nav-links'
                onClick={(closeMobileMenu, clickHandler)}
                activeClass='active'
              >
                About
              </LinkS>
            </li>
            <li className='nav-item'>
              <LinkS
                to='technologies'
                className='nav-links'
                spy={true}
                exact='true'
                offset={-20}
                duration={500}
                onClick={(closeMobileMenu, clickHandler)}
                activeClass='active'
              >
                Technologies
              </LinkS>
            </li>
            <li className='nav-item'>
              <LinkS
                to='portfolio'
                spy={true}
                exact='true'
                offset={50}
                duration={500}
                className='nav-links'
                onClick={(closeMobileMenu, clickHandler)}
                activeClass='active'
              >
                Portfolio
              </LinkS>
            </li>
            <li>
              <LinkS
                to='footer'
                smooth={true}
                exact='true'
                offset={100}
                duration={100}
                spy={true}
                onClick={(closeMobileMenu, clickHandler)}
                className='btn-link'
                activeClass='active'
              >
                <button className='btn--outline'>Contact</button>
              </LinkS>
            </li>
          </ul>
        </div>
      </nav>
      {/* </IconContext.Provider> */}
    </>
  );
};

export default Navbar;
