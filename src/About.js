import "./About.css";
import "./App.css";
import { useRef } from "react";
import { useInView } from "framer-motion";
import rocket from "./images/rocket.svg";
import Section from "./Section";


const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return(
        <div ref={
            ref
        } className="about-section" id="about">
               <div 

                style={{
                    transform: isInView ? "none" : "translateY(400px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
               
>
                    <img className="about-img" src={rocket} alt=""/>  
               </div>

               <Section animation={"translateX(-200px)"}>
                <div className="about-text">
                    <div className="heading-large heading-about">What is Black Magic?</div>
                    <div className="text-large text-large-about">BlackMagic is the finest web3 incubator based in the heart of Europe, Brussels. We take projects in the concept stage, inject the capital in them and guide them all the way to success. We believe that crypto, blockchain and web3 will change the world and be a force for good.</div>
                </div>
                </Section>
        </div>

    )
}

export default About; 
