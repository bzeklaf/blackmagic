import "./App.css";
import "./Why.css";
import stick from "./images/stick.svg";
import tv from "./images/tv.svg";
import globe from "./images/globe.svg";
import pc from "./images/pc.svg";

const Why = () => {
    return (
        <div className="why-section" id="why">
            <div className="heading-large heading-large-why">Why us</div>
                <div className="why-flex-expertise">
                         <img src={stick} alt="" className="left-stick" />
                    <div className="text-why-left">
                        <div className="heading-small-gradient heading-small-gradient-why-left">Expertise</div>
                        <div className="text-small text-small-why-left">We've been trough it, many times. We understand the struggles of a startup, 
                        especially a web3 startup. You may be a student living on instant noodles that never wrote a line of code. 
                        Or a dev that's already doing quite well. Or a seasoned, serial web3 entrepreneur. Doesn't matter. It is never easy. 
                        And whoever you are, and whatever you do, we want to hear from you.</div>
                    </div>
                    <img src={tv} alt="tv" className="img-why-left"/>
                </div>
                <div className="why-flex-location">
                    <img src={globe} alt="globe" className="img-why-right"/>
                    <img src={stick} alt="stick" className="right-stick"/>
                    <div className="text-why-right">
                        <div className="heading-small-gradient heading-small-gradient-why-right">Location, Location, Location</div>
                        <div className="text-small text-small-why-right">Being based in the heart of Europe, in the proximity of key EU 
                        decisionmakers, we're at the perfect junction of technology, business and policy. We benefit from the network of the 
                        best European and global experts in the field, comprising investors, founders, researchers, developers, designers, 
                        marketers and legal advisors.</div>
                    </div>
                </div>
                <div className="why-flex-passion">
                         <img src={stick} alt="" className="left-stick" />
                    <div className="text-why-last">
                        <div className="heading-small-gradient heading-small-gradient-why-last">Passion</div>
                        <div className="text-small text-small-why-last">One thing is to know the space, and quite another, is to be in it for 
                        the right reasons. We're in it not because web3 is a lucrative business opportunity, we are here because of our vision, 
                        in which WE THE PEOPLE  OWN the things we use, not the money-grabbing corporations. Decentealisation and DAOs are the 
                        future we want to live in.</div>
                    </div>
                    <img src={pc} alt="tv" className="img-why-last"/>
                </div>
        </div>
        
    )
}

export default Why; 