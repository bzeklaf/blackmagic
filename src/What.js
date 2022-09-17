import "./App.css";
import "./What.css";
import platform from "./images/platform.svg";
import coins from "./images/coins.svg";
import laptop from "./images/laptop.svg";

const What = () => {
    return(
        <div className="what-section" id="what">
            <div className="heading-large heading-large-what">What we do for startups:</div>
            <div className="what-funding">
                <div className="gradient-box-what">   
                        <div className="what-flex">
                            <div className="what-text">
                                <div className="heading-small">Funding</div>
                                <div className="text-small text-small-what">Key to the startup's growth. You don't want the founders 
                                hustling in their part-time jobs delivering pizza and building the company in the evening. 
                                You want their full-time commitment and focus. A dime or two on marketing also wouldn't hurt.</div>
                            </div>
                                <img alt="" src={coins} className="what-img"/>
                        </div>
                </div>
            </div>  
            <div className="what-guidance">
                <div className="gradient-box-what">   
                        <div className="what-flex">
                            <div className="what-text">
                                <div className="heading-small">Advice & Expertise</div>
                                <div className="text-small text-small-what">Often more important than money, is the access to the world class 
                                experts and advisors in the space of web3, that have been there, done that, seen it all, and 
                                know how the tribes of the machine work. Priceless.</div>
                            </div>
                                <img alt="" src={platform} className="what-img what-img-platform"/>
                        </div>
                </div>
            </div>  
            <div className="what-resources">
                <div className="gradient-box-what gradient-box-what-resources">   
                        <div className="what-flex">
                            <div className="what-text">
                                <div className="heading-small">Resources</div>
                                <div className="text-small text-small-what">Sometimes a good dish requires few more ingredients to make it to 
                                make it shazaam!, and we've got them. From strong web2 and web3 code base, to important middleware,
                                to UI/UX designers, marketers, legal advice and whatnot.</div>
                            </div>
                                <img alt="" src={laptop} className="what-img"/>
                        </div>
                </div>
            </div>  
        </div>
     
    )
}

export default What;

