/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import logo from './images/logo.svg';
import { Link as LinkR } from 'react-router-dom';
import { HiAnnotation, HiExclamationCircle, HiHome } from 'react-icons/hi';
import { ImBooks } from 'react-icons/im';
import './Navbar.css';

const Navbar = () => {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowDimension <= 640;

  return (
    <div className="header">
      <nav className="navbar">
        <LinkR to="/">
          <div className="logo">
            <img src={logo} alt="logo" />
            <span className="logo-name">Lorem ipsum</span>
          </div>
        </LinkR>

        {isMobile ? (
          <nav className="MobileNavbar">
            <ul className="Items">
              <li className="Item">
                <LinkR className="Icon" to="/">
                  <HiHome size={18} />
                  <a className="NavLink">Home</a>
                </LinkR>
              </li>
              <li className="Item">
                <LinkR className="Icon" to="/books">
                  <ImBooks size={18} />
                  <a className="NavLink">Books</a>
                </LinkR>
              </li>
              <li className="Item">
                <LinkR className="Icon" to="/about">
                  <HiExclamationCircle size={18} />
                  <a className="NavLink">About</a>
                </LinkR>
              </li>
              <li className="Item">
                <LinkR className="Icon" to="/contact">
                  <HiAnnotation size={18} />
                  <a className="NavLink">Contact</a>
                </LinkR>
              </li>
            </ul>
          </nav>
        ) : (
          <ul className="nav-menu">
            <li className="nav-item">
              <LinkR to="/">Home</LinkR>
            </li>
            <li className="nav-item">
              <LinkR to="/books">Books</LinkR>
            </li>
            <li className="nav-item">
              <LinkR to="/about">About</LinkR>
            </li>
            <li className="nav-item">
              <LinkR to="/contact">Contact</LinkR>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
