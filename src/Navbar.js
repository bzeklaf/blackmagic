import React, { useState } from "react";
import "./Navbar.css";
import blackmagic from "./images/blackmagic.svg";
import Button from "./Button";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <BrowserRouter>
    <div className="Navbar">
      <img className="nav-logo" src={blackmagic} alt="logo"></img>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="#about" smooth>About</Link>
        <Link to="#what" smooth>What</Link>
        <Link to="#why" smooth>Why</Link>
        <Link to="#contacts" smooth>Contacts</Link>
      </div>
        <div className="button-square">
            <div className="gradient"></div>
            <Link to="#apply" smooth>
              <div className="nav-btn"><Button/></div>
            </Link>
        </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
    </BrowserRouter>
    
  );
};

export default Navbar;