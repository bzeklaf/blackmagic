import "./App.css";
import "./Contacts.css";
import link from "./images/link.svg";
import hat from "./images/hat.svg";
import glove from "./images/glove.svg";

const Contacts = () => {
    return(
        <div className="contacts-section" id="contacts">
            <div className="heading-large heading-large-contacts">Key Contacts</div>
                <div className="contacts-1">
                    <div className="gradient-box-contacts">
                        <div className="inline">
                            <div className="heading-small-gradient heading-small-gradient-contacts">Jacek Wojcik</div>
                            <img src={link} alt="linkedin"/>
                        </div>
                        <div className="text-small text-small-contacts">Jack of all trades, master of crypto (self-proclaimed).
                         Enthusiast of startups, blockchain, technology, rollerblades, dogs and paprika crisps.</div>
                    </div>
                    <img src={hat} alt="" className="img-contacts"/>
                </div>
                <div className="contacts-2">
                    <img src={glove} alt="" className="img-contacts"/>
                    <div className="gradient-box-contacts">
                        <div className="inline">
                            <div className="heading-small-gradient heading-small-gradient-contacts">Natalia Regiec</div>
                            <img src={link} alt="linkedin"/>
                        </div>
                        <div className="text-small text-small-contacts">A golden child of everything. Whatever she touches, turns into gold. 
                        Multitalented, hardworking, insightful and inteligent, but would dispute that. Ice creams' fan.</div>
                    </div>
                </div>
            </div>
    )
}

export default Contacts;