import { Link } from "react-router-dom";
import { links } from "../utils.js/data";
import emailIcon from "../assets/artsy-icons/email-icon.svg";
import locationIcon from "../assets/artsy-icons/location-icon.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="flex container">
                <h2 className="text-grey-400 ff-secondary fs-secondary-heading fw-semi-bold display-sm-none"
                >
                    ARTSY.
                </h2>
                <nav className="footer-nav">
                    <h6 className="text-grey-300 ff-poppins fs-75 display-lg-none">
                        REACH US
                    </h6>
                    <ul role="list">
                        {links.map((link) => {
                            const { id, text, url } = link;
                            return (
                                <li key={id}><Link to={url}>{text}</Link></li>
                            )
                        })}
                        <li><a href="#">Blog</a></li>
                        <li><Link to="#">Wallets</Link></li>
                        <li><Link to="#">Rates</Link></li>
                        <li><Link to="#">High bids</Link></li>
                        <li>
                            <a href="mailto: artsystudios@gmail.com">
                                <img src={emailIcon} alt="email" />
                                <span>artsystudios@gmail.com</span> 
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={locationIcon} alt="location" />
                                Lagos, Nigeria.
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <p className="text-center fs-200 display-sm-none">Artsystudios © {new Date().getFullYear()}. All Rights Reserved.</p>
        </footer>

    )
}

export default Footer;