import Button from "./Button";
import "./Hero.css";
import arrow from "./images/arrow.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Hero = () => {
  return (
    <BrowserRouter>
    <div className="hero-section">
      <h1>You create, we do the magic.</h1>
      <h3>Get your web3 project funded and bring some magic to the world.</h3>
      <div className="hero-btn">
          <Link to="#apply" smooth><Button/></Link>
      </div>
      <div className="arrow">
          <Link to="#about" smooth><img src={arrow} alt="arrow"/></Link>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default Hero; 