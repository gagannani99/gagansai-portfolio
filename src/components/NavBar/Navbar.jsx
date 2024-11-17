import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="navbar">
      {/* Logo */}
      <img
        src="https://i.postimg.cc/yNMkwTKv/logo.png"
        alt="logo"
        className="logo"
        width={70}
        height={70}
      />

      {/* Desktop Menu */}
      <div className="desktopMenu">
        <Link className="desktopMenuListItem" smooth={true} duration={200} to="intro">
          Home
        </Link>
        <Link className="desktopMenuListItem" smooth={true} duration={200} to="about">
          About
        </Link>
        <Link className="desktopMenuListItem" smooth={true} duration={200} to="skills">
          Skills
        </Link>
        <Link className="desktopMenuListItem" smooth={true} duration={200} to="project">
          Portfolio
        </Link>
        <Link className="desktopMenuListItem" smooth={true} duration={200} to="footer">
          Contact Me
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="mobileMenuButton" onClick={toggleMobileMenu}>
        &#9776;
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobileMenu" ref={mobileMenuRef}>
          <Link
            className="mobileMenuListItem"
            onClick={toggleMobileMenu}
            smooth={true}
            duration={200}
            to="intro"
          >
            Home
          </Link>
          <Link
            className="mobileMenuListItem"
            onClick={toggleMobileMenu}
            smooth={true}
            duration={200}
            to="about"
          >
            About
          </Link>
          <Link
            className="mobileMenuListItem"
            onClick={toggleMobileMenu}
            smooth={true}
            duration={200}
            to="skills"
          >
            Skills
          </Link>
          <Link
            className="mobileMenuListItem"
            onClick={toggleMobileMenu}
            smooth={true}
            duration={200}
            to="project"
          >
            Portfolio
          </Link>
          <Link
            className="mobileMenuListItem"
            onClick={toggleMobileMenu}
            smooth={true}
            duration={200}
            to="footer"
          >
            Contact Me
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
