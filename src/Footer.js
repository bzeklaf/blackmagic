import "./App.css";
import Button from "./Button";
import "./Footer.css";
import link from "./images/link.svg";
import twitter from "./images/twitter.svg";
import blackmagic from "./images/blackmagic.svg"
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
    return(
        <BrowserRouter>
            <div className="footer-section">
            <div className="footer-left">
                <img src={blackmagic} alt="logo" className="logo-footer"/>
                <div className="text-small text-small-footer"> Black Magic is simply the 
                best Web3 incubator and studio in the world. Hands down.
                Cause we say so.</div>  
                <Link to="#apply" smooth>
                    <div className="button-footer"><Button/></div>
                </Link>
                <div className="social-icons">
                    <img src={link} alt="" className="link-footer"/>
                    <img src={twitter} alt="" className="twitter-footer"/>
                </div>
            </div>
                <div className="footer-right">
                        <div className="footer-box1 text-small">
                            <div>Legal Stuff</div>
                            <div>Privacy Policy</div>
                            <div>Terms & Conditions</div>
                            <div>Company Policy</div>
                            <div>Company</div>
                            <div>Careers</div>
                        </div>
                        <div className="footer-box2 text-small">
                            <div>Follow Us</div>
                            <div>LinkedIn</div>
                            <div>Twitter</div>
                            <div>Discord</div>
                        </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Footer;
