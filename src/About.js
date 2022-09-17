import "./About.css";
import "./App.css";
import rocket from "./images/rocket.svg";


const About = () => {
    return(
        <div className="about-section" id="about">
                <img className="about-img" src={rocket} alt=""/>  
                <div className="about-text">
                    <div className="heading-large heading-about">What is Black Magic?</div>
                    <div className="text-large text-large-about">BlackMagic is the finest web3 incubator based in the heart of Europe, Brussels. We take projects in the concept stage, inject the capital in them and guide them all the way to the success. We believe that crypto, blockchain and web3 will change the world and be a force for good.</div>
                </div>
        </div>

    )
}

export default About; 