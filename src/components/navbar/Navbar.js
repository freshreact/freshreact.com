import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import Logo from "../../assets/fresh-react-logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      {/* Comment */}
      <div className="logo-nav">
        <div className="logo-container">
          <NavLink exact to="/"><img src={Logo} alt="logor" height="60" width="60"/></NavLink>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink activeClassName='is-active' to="/recharts">RECHARTS</NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink activeClassName='is-active' to="/d3">D3</NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink activeClassName='is-active' to="/cards">CARDS</NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink activeClassName='is-active' to="/routing">ROUTING</NavLink>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Navbar;